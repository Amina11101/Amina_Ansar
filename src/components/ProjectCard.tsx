import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './ProjectCard.css'

interface ProjectCardProps {
  project: {
    id: number
    title: string
    description: string
    category: string
    tags: string[]
    image: string
    color: string
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const getImageUrl = (src: string) => {
    // If it's an external URL, return as-is
    if (src.startsWith('http')) {
      return src
    }
    // For local images, prepend BASE_URL
    return `${import.meta.env.BASE_URL}${src.replace(/^\//, '')}`
  }

  return (
    <motion.div
      className="project-card"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="project-image-container">
        <img
          src={getImageUrl(project.image)}
          alt={project.title}
          className="project-image"
        />
        <div className="project-overlay">
          <Link
            to={`/project/${project.id}`}
            className="view-case-study"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Case Study →
            </motion.div>
          </Link>
        </div>
      </div>

      <div className="project-content">
        <span className="project-category">{project.category}</span>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
