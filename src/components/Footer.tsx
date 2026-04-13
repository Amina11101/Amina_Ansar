import { motion } from 'framer-motion'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/amina-ansar-2b1105262/', target: '_blank' },
    { label: 'Twitter', href: 'https://twitter.com', target: '_blank' },
    { label: 'GitHub', href: 'https://github.com', target: '_blank' },
  ]

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="footer-content">
        <div className="footer-section">
          <h3>Designer</h3>
          <p>Creating minimal, elegant digital experiences.</p>
        </div>

        <div className="footer-section">
          <h4>Social</h4>
          <div className="footer-links">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.target as any}
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <motion.a
            href="mailto:aminaaansarr@gmail.com"
            whileHover={{ x: 5 }}
          >
            aminaaansarr@gmail.com
          </motion.a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Designer. All rights reserved.</p>
      </div>
    </motion.footer>
  )
}
