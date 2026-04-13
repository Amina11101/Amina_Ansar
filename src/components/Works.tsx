import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A modern, responsive shopping platform',
    fullDescription: 'Built a full-featured e-commerce platform with React and TypeScript. Features include real-time inventory, smooth checkout process, and Admin dashboard for managing products.',
    image: '🛍️',
    tags: ['React', 'TypeScript', 'Node.js'],
    link: '#',
  },
  {
    id: 2,
    title: 'Animated Design System',
    description: 'Design system with Framer Motion components',
    fullDescription: 'Created a comprehensive design system with 50+ animated components. Includes documentation, Storybook integration, and accessibility features for enterprise use.',
    image: '✨',
    tags: ['Framer Motion', 'React', 'Design System'],
    link: '#',
  },
  {
    id: 3,
    title: 'Real-time Dashboard',
    description: 'Interactive analytics dashboard',
    fullDescription: 'Developed an interactive real-time dashboard for data visualization. Features live charts, filters, and custom metrics with WebSocket integration for real-time updates.',
    image: '📊',
    tags: ['React', 'WebSocket', 'Chart.js'],
    link: '#',
  },
  {
    id: 4,
    title: 'Mobile App Design',
    description: 'User-friendly mobile application',
    fullDescription: 'Designed and built a mobile-first application with smooth navigation and micro-interactions. Focused on user experience and performance optimization.',
    image: '📱',
    tags: ['React Native', 'Design', 'UI/UX'],
    link: '#',
  },
];

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  return (
    <motion.div
      className="project-modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="project-modal"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 50 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        <div className="modal-header">
          <div className="modal-icon">{project.image}</div>
          <h2>{project.title}</h2>
        </div>

        <div className="modal-content">
          <p>{project.fullDescription}</p>

          <div className="modal-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="modal-tag">
                {tag}
              </span>
            ))}
          </div>

          <motion.a
            href={project.link}
            className="modal-link"
            whileHover={{ x: 5 }}
          >
            View Project →
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="projects-section">
      <div className="projects-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="projects-header"
        >
          <h2>Featured Work</h2>
          <p>Explore some of my recent projects</p>
          <div className="projects-accent" />
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="project-card-modern"
              onClick={() => setSelectedProject(project)}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="project-card-icon">{project.image}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-card-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <motion.div
                className="project-card-cta"
                whileHover={{ x: 5 }}
              >
                Learn More →
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetail
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
