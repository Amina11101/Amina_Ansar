import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import './Projects.css'

interface Project {
  id: number
  title: string
  description: string
  category: string
  tags: string[]
  image: string
  color: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'MediMate',
    description:
      'Mobile app for patient health management, helping users track medications, appointments, and health metrics in one place.',
    category: 'Mobile App',
    tags: ['iOS', 'Android', 'Healthcare', 'UX Design'],
    image: '/medimate.png',
    color: '#EFA3B5',
  },
  {
    id: 2,
    title: 'E-commerce Platform',
    description:
      'Full platform redesign improving conversion rates through better product discovery and checkout flow.',
    category: 'Web Design',
    tags: ['E-commerce', 'Conversion Design', 'Usability'],
    image: 'https://via.placeholder.com/600x400?text=E-commerce',
    color: '#F6C1CF',
  },
  {
    id: 3,
    title: 'SaaS Dashboard',
    description:
      'Intuitive analytics dashboard for data-driven teams, emphasizing clarity and actionable insights.',
    category: 'Web Application',
    tags: ['SaaS', 'Data Viz', 'Dashboard Design'],
    image: 'https://via.placeholder.com/600x400?text=SaaS+Dashboard',
    color: '#EFA3B5',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
}

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
