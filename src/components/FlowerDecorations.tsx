import { useState } from 'react'
import './FlowerDecorations.css'

interface Flower {
  id: number
  type: number
  left: string
  top: string
  rotation: number
  size: number
  opacity: number
}

export default function FlowerDecorations() {
  const [hoveredFlowerId, setHoveredFlowerId] = useState<number | null>(null)

  // Fixed flower positions
  const flowers: Flower[] = [
    { id: 1, type: 1, left: '5%', top: '10%', rotation: 25, size: 60, opacity: 0.6 },
    { id: 2, type: 2, left: '85%', top: '15%', rotation: -15, size: 50, opacity: 0.5 },
    { id: 3, type: 3, left: '10%', top: '70%', rotation: 45, size: 55, opacity: 0.6 },
    { id: 4, type: 1, left: '85%', top: '65%', rotation: -30, size: 50, opacity: 0.55 },
    { id: 5, type: 2, left: '15%', top: '35%', rotation: 60, size: 45, opacity: 0.5 },
    { id: 6, type: 3, left: '80%', top: '40%', rotation: -20, size: 50, opacity: 0.6 },
    { id: 7, type: 1, left: '60%', top: '5%', rotation: -30, size: 70, opacity: 0.55 },
    { id: 8, type: 3, left: '50%', top: '86%', rotation: 60, size: 45, opacity: 0.5 },
    { id: 9, type: 3, left: '35%', top: '4%', rotation: -20, size: 50, opacity: 0.6 },
    { id: 10, type: 1, left: '25%', top: '80%', rotation: 30, size: 55, opacity: 0.5},
    { id: 11, type: 2, left: '70%', top: '80%', rotation: -45, size: 60, opacity: 0.55 },
  ]

  return (
    <>
      {flowers.map((flower) => (
        <div
          key={flower.id}
          className={`flower-decoration ${hoveredFlowerId === flower.id ? 'spinning' : ''}`}
          style={{
            left: flower.left,
            top: flower.top,
            transform: `rotate(${flower.rotation}deg)`,
            width: `${flower.size}px`,
            height: `${flower.size}px`,
            opacity: flower.opacity,
          }}
          onMouseEnter={() => setHoveredFlowerId(flower.id)}
          onMouseLeave={() => setHoveredFlowerId(null)}
        >
          <img
            src={`/flower${flower.type}.png`}
            alt="Flower decoration"
            className="flower-image"
          />
        </div>
      ))}
    </>
  )
}
