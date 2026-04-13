import { motion } from 'framer-motion'
import FlowerDecorations from './FlowerDecorations'
import './Hero.css'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  const handleScroll = () => {
    const projectsElement = document.getElementById('projects')
    if (projectsElement) {
      projectsElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero" id="home">
      <FlowerDecorations />
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants} className="hero-title">
          Hi, I'm a Creative Designer
        </motion.h1>

        <motion.p variants={itemVariants} className="hero-subtitle">
          I specialize in minimal, elegant UX/UI design that prioritizes clarity
          and user experience. Let me help bring your ideas to life with thoughtful
          design solutions.
        </motion.p>

        <motion.button
          variants={itemVariants}
          className="hero-cta"
          onClick={handleScroll}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore My Work
          <span className="arrow">→</span>
        </motion.button>
      </motion.div>
    </section>
  )
}
