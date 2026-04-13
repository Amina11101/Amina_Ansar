import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './ScrollProgress.css'

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      if (scrollHeight > 0) {
        const progress = (window.scrollY / scrollHeight) * 100
        setScrollProgress(progress)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Calculate the height of the drawn line based on scroll progress
  const lineHeight = (scrollProgress / 100) * 400 // Max height 400px

  return (
    <motion.div
      className="scroll-progress-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: scrollProgress > 5 ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <svg
        className="scroll-progress-svg"
        viewBox="0 0 60 500"
        preserveAspectRatio="none"
      >
        {/* Main doodled line */}
        <defs>
          <style>{`
            .scroll-line {
              stroke: var(--primary-pink);
              stroke-width: 2;
              fill: none;
              stroke-linecap: round;
              stroke-linejoin: round;
            }
            .scroll-line-shadow {
              stroke: var(--primary-pink);
              stroke-width: 3;
              fill: none;
              opacity: 0.1;
              stroke-linecap: round;
              stroke-linejoin: round;
            }
          `}</style>
        </defs>

        {/* Shadow/glow effect */}
        <path
          className="scroll-line-shadow"
          d={`M 30 0 Q 25 ${lineHeight * 0.25} 35 ${lineHeight * 0.5} Q 20 ${lineHeight * 0.75} 30 ${lineHeight}`}
        />

        {/* Main line with slight waviness */}
        <path
          className="scroll-line"
          d={`M 30 0 Q 25 ${lineHeight * 0.25} 35 ${lineHeight * 0.5} Q 20 ${lineHeight * 0.75} 30 ${lineHeight}`}
        />

        {/* Animated dots along the line */}
        {scrollProgress > 10 && (
          <motion.circle
            cx="30"
            cy={lineHeight * 0.3}
            r="3"
            fill="var(--primary-pink)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4 }}
          />
        )}
        {scrollProgress > 30 && (
          <motion.circle
            cx="30"
            cy={lineHeight * 0.6}
            r="2.5"
            fill="var(--primary-pink)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4 }}
          />
        )}
        {scrollProgress > 60 && (
          <motion.circle
            cx="30"
            cy={lineHeight * 0.85}
            r="3"
            fill="var(--primary-pink)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4 }}
          />
        )}
      </svg>

      {/* Scroll indicator at bottom */}
      {scrollProgress < 5 && (
        <motion.div
          className="scroll-hint"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ↓
        </motion.div>
      )}

      {/* Progress percentage - optional */}
      {scrollProgress > 20 && scrollProgress < 95 && (
        <motion.div
          className="scroll-percentage"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {Math.round(scrollProgress)}%
        </motion.div>
      )}
    </motion.div>
  )
}
