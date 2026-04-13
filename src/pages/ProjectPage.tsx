import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import ToggleView from '../components/ToggleView'
import CaseStudy from '../components/CaseStudy'
import Footer from '../components/Footer'
import '../components/ProjectPage.css'

interface CaseStudyData {
  title: string
  category: string
  description: string
  result: string
  challenge: string
  solution: string
  impact: string
  process: string
  tools: string[]
  timeline: string
  outcome: string
  image: string
  heroImage?: string
  projectImage1?: string
  projectImage2?: string
  projectImage3?: string
  projectImage4?: string
}

const projectsData: { [key: string]: CaseStudyData } = {
  '1': {
    title: 'MediMate',
    category: 'Mobile App',
    description: '',
    image: '/medimate.png',
    heroImage: '/medimate/hero.png',
    projectImage1: '/medimate/ProjectImage1.png',
    projectImage2: '/medimate/ProjectImage2.png',
    projectImage3: '/medimate/ProjectImage3.png',
    projectImage4: '/medimate/ProjectImage4.png',
    result: '',
    challenge: '',
    solution: '',
    impact: '',
    process: '',
    tools: [],
    timeline: '',
    outcome: '',
  },
  '2': {
    title: 'E-commerce Platform',
    category: 'Web Design',
    image: '/ecommerce.png',
    description:
      'Full platform redesign that improved conversion rates by 38% and reduced cart abandonment by 28%.',
    result: 'Conversion rate increased from 4.2% to 5.8%, mobile revenue increased 156%, generated $2.4M additional revenue in 6 months',
    challenge:
      'The existing e-commerce platform had a 4.2% conversion rate (industry average: 2-3%) but suffered from a 67% cart abandonment rate. Users complained about a cluttered product pages, unclear pricing, and a confusing checkout process. Mobile experience was particularly poor with only 12% of revenue coming from mobile despite 58% of traffic.',
    solution:
      'I redesigned the entire platform focusing on clarity and trust. Product pages were simplified with high-quality imagery, clearer pricing with trust badges, and customer reviews prominently displayed. The checkout was reduced from 6 steps to 3, with clear progress indication. I implemented persistent cart, guest checkout, and saved payment methods. Mobile-first design ensured responsive optimization.',
    impact:
      'Overall conversion increased to 5.8%, reducing bounce rate by 23%. Desktop conversions grew 38%, mobile conversions grew 156%. Cart abandonment dropped from 67% to 39%. This resulted in $2.4M additional revenue in the first 6 months.',
    process:
      'I started with heat map analysis and session recordings to understand user behavior. Conducted 12 user interviews with both converters and abandoners. Created detailed user journeys and identified 7 critical friction points. Designed solutions through rapid prototyping and A/B tested the most impactful changes. Implemented a/b testing framework for continuous optimization post-launch.',
    tools: ['Figma', 'Hotjar', 'Google Analytics', 'Optimizely', 'React', 'Node.js'],
    timeline: '6 months (Discovery: 4 weeks, Design: 6 weeks, Testing: 4 weeks, Implementation: 8 weeks)',
    outcome:
      'The platform now generates 42% of company revenue from mobile. Became case study for e-commerce best practices and attracted enterprise clients.',
  },
  '3': {
    title: 'SaaS Dashboard',
    category: 'Web Application',
    image: '/saas-dashboard.png',
    description:
      'Intuitive analytics dashboard for data-driven teams, designed to reduce time-to-insight by 60%.',
    result: 'Time-to-insight reduced 60%, feature adoption increased from 20% to 73%, user satisfaction improved from 6.2 to 8.7/10',
    challenge:
      'The existing dashboard was overwhelming with 80+ data points per view, confusing workflows requiring 12+ clicks to accomplish common tasks, and poor data visualization making patterns hard to spot. Power users loved it, but most users (68%) used less than 20% of features. Adoption was stalling.',
    solution:
      'I redesigned the dashboard with a focus on progressive disclosure and smart defaults. Created customizable dashboards where users could build their own views. Implemented intelligent data visualization with context-appropriate charts. Introduced a guided tour for new users. Added natural language search to find metrics. Created preset templates for common use cases.',
    impact:
      'Time-to-insight reduced from 8 minutes to 3 minutes (60% improvement). Feature adoption increased from 20% to 73%. User satisfaction score improved from 6.2 to 8.7 out of 10. Enterprise customers increased from 8 to 24.',
    process:
      'Conducted workshops with power users and regular users to understand different use cases. Created 5 distinct user personas with different data needs. Designed modular component system for data viz. Built interactive prototypes and validated with target users through Maze testing. Implemented with iterative releases every 2 weeks.',
    tools: ['Figma', 'D3.js', 'React', 'TypeScript', 'PostgreSQL', 'Maze'],
    timeline: '5 months (Research: 3 weeks, Design: 7 weeks, Prototyping: 3 weeks, Dev: 6 weeks)',
    outcome:
      'Dashboard became primary revenue driver with 95% customer retention. Won Best SaaS Product Design award.',
  },
}

export default function ProjectPage() {
  const { projectId } = useParams()
  const navigate = useNavigate()
  const [isRecruiterMode, setIsRecruiterMode] = useState(true)

  const getImageUrl = (src: string) => {
    // If it's an external URL, return as-is
    if (src.startsWith('http')) {
      return src
    }
    // For local images, prepend BASE_URL
    return `${import.meta.env.BASE_URL}${src.replace(/^\//, '')}`
  }

  const project = projectsData[projectId || '1']

  if (!project) {
    return (
      <div className="project-page">
        <Navbar />
        <div className="container">
          <p>Project not found</p>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <motion.div
      className="project-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Navbar />

      <div className="project-page-header">
        <motion.button
          className="back-button"
          onClick={() => navigate('/#projects')}
          whileHover={{ x: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          ← Back to Projects
        </motion.button>
      </div>

      <div className="project-page-container">
        <div className="container">
          <ToggleView
            isRecruiterMode={isRecruiterMode}
            onToggle={setIsRecruiterMode}
          />

          <CaseStudy data={project} isRecruiterMode={isRecruiterMode} />

          <motion.div
            className="project-cta"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Ready to work together?</h3>
            <p>I'm always interested in hearing about new projects.</p>
            <a href="mailto:hello@example.com" className="cta-button">
              Start a Project
            </a>
          </motion.div>
        </div>
      </div>

      <Footer />
    </motion.div>
  )
}
