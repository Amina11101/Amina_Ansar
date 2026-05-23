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
    title: 'AgentFlow',
    description:
      'AI-powered dashboard for managing and monitoring autonomous agents, providing real-time insights and control over agent workflows.',
    category: 'Web Application',
    tags: ['AI', 'Dashboard', 'Real-time Monitoring', 'UX Design'],
    image: '/agentflow/hero.png',
    color: '#6366F1',
  },
  {
    id: 2,
    title: 'MediMate',
    description:
      'Mobile app for patient health management, helping users track medications, appointments, and health metrics in one place.',
    category: 'Mobile App',
    tags: ['iOS', 'Android', 'Healthcare', 'UX Design'],
    image: '/medimate.png',
    color: '#EFA3B5',
  },
  {
    id: 3,
    title: 'Shepherd Grain',
    description:
      'Mobile & tablet CRM application for grain traders, enabling real-time client relationship management, transaction tracking, and inventory control from the field.',
    category: 'Mobile & Tablet App',
    tags: ['Mobile', 'Tablet', 'CRM', 'Agriculture', 'React Native'],
    image: '/Shepherd Grain/hero.png',
    color: '#F6C1CF',
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
