import { motion } from 'framer-motion'
import './ToggleView.css'

interface ToggleViewProps {
  isRecruiterMode: boolean
  onToggle: (mode: boolean) => void
}

export default function ToggleView({ isRecruiterMode, onToggle }: ToggleViewProps) {
  return (
    <motion.div
      className="toggle-view"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="toggle-container">
        <button
          className={`toggle-button ${isRecruiterMode ? 'active' : ''}`}
          onClick={() => onToggle(true)}
        >
          <span className="toggle-icon">⚡</span>
          Recruiter Mode (30s)
        </button>
        <button
          className={`toggle-button ${!isRecruiterMode ? 'active' : ''}`}
          onClick={() => onToggle(false)}
        >
          <span className="toggle-icon">📖</span>
          Full Case Study
        </button>
      </div>
      <p className="toggle-hint">
        {isRecruiterMode
          ? 'Quick overview of the project and results'
          : 'Deep dive into my design process and thinking'}
      </p>
    </motion.div>
  )
}
