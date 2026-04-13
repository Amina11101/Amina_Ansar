import { useState, useEffect } from 'react'
import './DecorativeLine.css'

export default function DecorativeLine() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      if (scrollHeight > 0) {
        const progress = window.scrollY / scrollHeight
        setScrollProgress(progress)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // SVG path that curves around the page sections
  // Starts from top left, curves right at hero, swoops around projects,
  // curves around about section, and ends near contact
  const pathData = `
    M 80 0
    Q 100 150 90 300
    Q 85 450 110 600
    Q 130 750 95 900
    Q 80 1050 120 1200
    Q 150 1350 100 1500
    Q 70 1650 115 1800
    Q 145 1900 125 2000
  `

  // Calculate total path length (approximate based on viewBox)
  const pathLength = 2500

  // Animate the path to "grow" as user scrolls
  const drawLength = pathLength * scrollProgress
  const strokeDasharray = pathLength
  const strokeDashoffset = pathLength - drawLength

  return (
    <svg
      className="decorative-line-svg"
      viewBox="0 0 200 2000"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Main decorative line */}
      <path
        d={pathData}
        className="decorative-line-path"
        strokeDasharray={strokeDasharray}
        strokeDashoffset={strokeDashoffset}
      />

      {/* Subtle glow effect */}
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Decorative dots at key scroll points */}
      {[0.15, 0.35, 0.55, 0.75, 0.95].map((point) => {
        const isVisible = scrollProgress >= point
        const opacity = isVisible ? 1 : 0

        return (
          <circle
            key={point}
            cx={80 + Math.sin(point * Math.PI * 4) * 30}
            cy={point * 2000}
            r="4"
            className="decorative-dot"
            style={{
              opacity,
              transition: 'opacity 0.3s ease-out',
            }}
          />
        )
      })}
    </svg>
  )
}
