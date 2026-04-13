import './FlowerDoodles.css'

interface Flower {
  id: number
  x: number
  y: number
  size: number
  delay: number
  color?: 'pink' | 'secondary'
}

const flowers: Flower[] = [
  // Hero section flowers - only 4 flowers, varied sizes
  { id: 1, x: 80, y: 200, size: 90, delay: 0, color: 'pink' },
  { id: 2, x: 1420, y: 150, size: 65, delay: 0.1, color: 'secondary' },
  { id: 3, x: 120, y: 700, size: 75, delay: 0.2, color: 'secondary' },
  { id: 4, x: 1480, y: 650, size: 85, delay: 0.3, color: 'pink' },
]

export default function FlowerDoodles() {
  const renderFlower = (flower: Flower) => {
    const petals = [0, 1, 2, 3, 4].map((i) => {
      const angle = (i / 5) * Math.PI * 2
      const petalX = Math.cos(angle) * (flower.size * 0.35)
      const petalY = Math.sin(angle) * (flower.size * 0.35)
      const rotationDeg = angle * (180 / Math.PI)

      return (
        <ellipse
          key={`petal-${i}`}
          cx={petalX}
          cy={petalY}
          rx={flower.size * 0.22}
          ry={flower.size * 0.28}
          className={`flower-petal flower-petal-${flower.color}`}
          transform={`rotate(${rotationDeg})`}
        />
      )
    })

    return (
      <g key={flower.id} transform={`translate(${flower.x}, ${flower.y})`} className="flower-group">
        {petals}
        <circle cx={0} cy={0} r={flower.size * 0.15} className={`flower-center flower-center-${flower.color}`} />
      </g>
    )
  }

  return (
    <svg className="flowers-svg" viewBox="0 0 1600 1100" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
      <defs>
        <style>{`
          .flower-petal {
            stroke-width: 2;
            fill: none;
            stroke-linecap: round;
            stroke-linejoin: round;
          }
          
          .flower-petal-pink {
            stroke: var(--primary-pink);
          }
          
          .flower-petal-secondary {
            stroke: #D8A5B5;
          }
          
          .flower-center {
            stroke-width: 2;
            opacity: 0.5;
          }
          
          .flower-center-pink {
            stroke: var(--primary-pink);
            fill: var(--primary-pink);
          }
          
          .flower-center-secondary {
            stroke: #D8A5B5;
            fill: #D8A5B5;
          }
          
          .flower-group {
            opacity: 0.4;
          }
        `}</style>
      </defs>
      {flowers.map((flower) => renderFlower(flower))}
    </svg>
  )
}
