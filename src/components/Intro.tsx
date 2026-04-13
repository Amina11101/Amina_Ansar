import { motion } from 'framer-motion';

interface IntroProps {
  onExplore: () => void;
}

export default function Intro({ onExplore }: IntroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="intro-section">
      <motion.div
        className="intro-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated background elements */}
        <motion.div
          className="intro-blob intro-blob-1"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="intro-blob intro-blob-2"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />

        {/* Main heading */}
        <motion.div variants={itemVariants} className="intro-text">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            Crafting Digital Experiences
          </motion.h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p variants={itemVariants} className="intro-subtitle">
          Welcome to my portfolio. I create elegant, interactive digital products
          that make an impact.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          variants={itemVariants}
          onClick={onExplore}
          className="intro-cta"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore My Work
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            →
          </motion.span>
        </motion.button>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="scroll-dot" />
      </motion.div>
    </section>
  );
}
