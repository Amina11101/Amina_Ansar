import { motion } from 'framer-motion'
import './Contact.css'

export default function Contact() {
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

  const socialLinks = [
    { label: 'Email', href: 'mailto:aminaaansarr@gmail.com', icon: '✉' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/amina-ansar-2b1105262/', icon: 'in' },
    { label: 'Resume', href: '#resume', icon: '📄' },
  ]

  return (
    <section className="contact" id="contact">
      <div className="container">
        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 variants={itemVariants} className="contact-title">
            Let's Work Together
          </motion.h2>

          <motion.p variants={itemVariants} className="contact-subtitle">
            I'm always interested in hearing about new projects and opportunities.
            Feel free to reach out if you'd like to collaborate or just say hi!
          </motion.p>

          <motion.div variants={itemVariants} className="contact-links">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="contact-link"
                whileHover={{ scale: 1.05, x: 10 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <span className="link-icon">{link.icon}</span>
                <span className="link-text">{link.label}</span>
                <span className="link-arrow">→</span>
              </motion.a>
            ))}
          </motion.div>

          <motion.a
            variants={itemVariants}
            href="mailto:aminaaansarr@gmail.com"
            className="contact-cta"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Start a Project
            <span className="cta-arrow">→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
