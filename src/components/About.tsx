import { motion } from 'framer-motion'
import './About.css'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const skills = [
    'UI Design',
    'UX Research',
    'Wireframing',
    'Prototyping',
    'User Testing',
    'Accessibility',
    'Design Systems',
    'Figma',
  ]

  return (
    <section className="about" id="about">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="about-content">
          {/* Image Column */}
          <motion.div
            className="about-image-column"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-image-wrapper">
              <img
                src="/Amina.jpg"
                alt="Amina Ansar"
                className="about-image"
              />
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            className="about-text-column"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="about-intro">
              <p>
                I'm a UX/UI designer with a passion for creating minimal,
                elegant digital experiences. I believe that great design is about
                clarity, usability, and beauty working in harmony.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="about-bio">
              <p>
                For the past 5+ years, I've worked with startups and established
                brands to redesign products that are more intuitive and engaging.
                My approach combines user research, strategic thinking, and
                thoughtful visual design to solve real problems.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="about-skills">
              <h3>Skills & Tools</h3>
              <div className="skills-grid">
                {skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="skill-tag"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="about-cta">
              <a href="mailto:hello@example.com" className="view-resume">
                Download Resume
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
