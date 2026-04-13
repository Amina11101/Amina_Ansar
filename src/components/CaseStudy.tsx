import { motion } from 'framer-motion'
import React from 'react'
import './CaseStudy.css'

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

interface CaseStudyProps {
  data: CaseStudyData
  isRecruiterMode: boolean
}

export default function CaseStudy({ data, isRecruiterMode }: CaseStudyProps) {
  const videoRef = React.useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = React.useState(false)

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
        setIsPlaying(true)
      } else {
        videoRef.current.pause()
        setIsPlaying(false)
      }
    }
  }

  const handlePlayPause = () => {
    if (videoRef.current) {
      setIsPlaying(!videoRef.current.paused)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
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

  return (
    <motion.div
      className="case-study"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Recruiter Mode - Quick Overview */}
      {isRecruiterMode ? (
        <motion.div
          className="recruiter-mode"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mode-badge">⚡ 30-Second Scan</div>

          <motion.div variants={itemVariants} className="quick-overview">
            <h2>{data.title}</h2>
            <p className="subtitle">{data.category}</p>
            <p className="description">{data.description}</p>
            <p className="tagline">Breaking language barriers in German healthcare through inclusive, bilingual medical companion app design</p>
          </motion.div>

          <motion.div variants={itemVariants} className="quick-stats">
            <div className="stat">
              <h3>🎯 Challenge</h3>
              <p>{data.challenge.substring(0, 150)}International residents in Germany face systematic barriers to healthcare access, with most digital health platforms operating exclusively in German. This creates dangerous gaps in medication adherence, symptom tracking, and appointment management.</p>
            </div>
            <div className="stat">
              <h3>✨ Solution</h3>
              <p>{data.solution.substring(0, 150)}A comprehensive, bilingual medical companion that empowers users to track medications, log symptoms, book appointments with language-speaking doctors, and maintain organized health records in their preferred language.</p>
            </div>
            <div className="stat">
              <h3>📈 Result</h3>
              <p>{data.result}Enabling non-German speakers to independently manage their health, improve doctor-patient communication, reduce medication errors, and access timely care without dependency on translators or friends.</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="quick-tools">
            <h3>Tools & Software</h3>
            <div className="tools-grid">
              <div className="tool-item">
                <img src="/medimate/figma.webp" alt="Figma" className="tool-logo-img" />
                <p className="tool-name">Figma</p>
              </div>
              <div className="tool-item">
                <img src="/medimate/miro.png" alt="Miro" className="tool-logo-img" />
                <p className="tool-name">Miro</p>
              </div>
              <div className="tool-item">
                <img src="/medimate/word.png" alt="MS Word" className="tool-logo-img" />
                <p className="tool-name">MS Word</p>
              </div>
              <div className="tool-item">
                <img src="/medimate/notion.webp" alt="Notion" className="tool-logo-img" />
                <p className="tool-name">Notion</p>
              </div>
              <div className="tool-item">
                <img src="/medimate/adobe.jpg" alt="Adobe Illustrator" className="tool-logo-img" />
                <p className="tool-name">Adobe Illustrator</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : (
        /* Full Case Study Mode */
        <motion.div
          className="full-mode"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mode-badge">📖 Full Case Study</div>

          {/* Hero Section */}
          <motion.section variants={itemVariants} className="case-hero">
            <div className="hero-content">
              <h1>{data.title}</h1>
              <p className="hero-category">{data.category}</p>
              <p className="hero-description">{data.description.substring(0, 200)}Breaking language barriers in German healthcare through inclusive, bilingual medical companion app design</p>
            </div>
          </motion.section>

          {/* Hero Image */}
          <motion.section variants={itemVariants} className="case-section photo-section">
            {data.heroImage ? (
              <img src={data.heroImage} alt="Project Hero" className="case-image" />
            ) : (
              <div className="photo-placeholder">
                <span className="placeholder-text">Project Hero Image</span>
              </div>
            )}
          </motion.section>

          {/* Overview Stats */}
          <motion.section variants={itemVariants} className="case-section stats-section">
            <span className="section-number">01 — PROJECT OVERVIEW</span>
            <h2>Project Overview</h2>
            <p className="overview-description">{data.description}Medimate is a comprehensive bilingual healthcare companion app designed specifically for international residents in Germany. The app addresses critical language barriers by providing medication tracking, symptom logging, appointment booking, and health journaling in both German and English, enabling users to take control of their healthcare journey independently.</p>
            <div className="overview-grid">
              <div className="overview-card">
                <span className="overview-label">Timeline</span>
                <p className="overview-value">Oct 2025 - Feb 2026</p>
              </div>
              <div className="overview-card">
                <span className="overview-label">My Role</span>
                <p className="overview-value">UI UX Designer</p>
              </div>
              <div className="overview-card">
                <span className="overview-label">Project Type</span>
                <p className="overview-value">Concept / Personal Project</p>
              </div>
            </div>
          </motion.section>

          {/* Problem Statement */}
          <motion.section variants={itemVariants} className="case-section problem-section">
            <div className="problem-header">
              <span className="problem-number">02 — PROBLEM</span>
              <h2>The Healthcare Language Barrier Crisis</h2>
              <p className="problem-intro">Germany is home to millions of international residents, students, and workers. Yet the vast majority of healthcare platforms, pharmacy systems, and medical apps operate exclusively in German, creating systematic barriers that directly impact health outcomes.</p>
            </div>

            <div className="problem-stats">
              <div className="stat-card">
                <p className="stat-value">13.4M</p>
                <p className="stat-label">Foreign residents living in Germany (2023)</p>
              </div>
              <div className="stat-card">
                <p className="stat-value">78%</p>
                <p className="stat-label">Healthcare apps available only in German language</p>
              </div>
              <div className="stat-card">
                <p className="stat-value">3.2M</p>
                <p className="stat-label">International students & workers with limited German proficiency</p>
              </div>
            </div>

            <div className="problem-impact">
              <h3>The Real-World Impact</h3>
              <div className="impact-card">
                <p>Language barriers don't just create inconvenience, they create genuine health risks. When medication instructions are only in German, people guess dosages. When appointment booking requires phone calls in German, people delay seeking care. When symptom tracking tools are inaccessible, doctors miss critical diagnostic information. This isn't a usability problem; it's a healthcare equity problem.</p>
              </div>
            </div>
          </motion.section>

          {/* Problem Image */}
          <motion.section variants={itemVariants} className="case-section photo-section problem-image">
            <img src="/medimate/problem.png" alt="Problem Research / User Interview" className="case-image" />
          </motion.section>

          {/* Research Section */}
          <motion.section variants={itemVariants} className="case-section research-section">
            <span className="section-number">03 — RESEARCH</span>
            <h2>Understanding User Needs</h2>

            {/* Research Methods */}
            <div className="research-subsection">
              <h3>Research Methods</h3>
              <div className="research-methods">
                <div className="method-card">
                  <span className="method-icon">👥</span>
                  <h4>In-Depth Interviews</h4>
                  <p>Conducted 12+ interviews with international residents to understand healthcare pain points</p>
                </div>
                <div className="method-card">
                  <span className="method-icon">📊</span>
                  <h4>Competitive Analysis</h4>
                  <p>Analyzed 8+ existing German healthcare apps to identify gaps in multilingual support</p>
                </div>
                <div className="method-card">
                  <span className="method-icon">🗺️</span>
                  <h4>Journey Mapping</h4>
                  <p>Created detailed user journeys to identify critical pain points in the healthcare process</p>
                </div>
              </div>
            </div>

            {/* Personas */}
            <div className="research-subsection">
              <h3>User Personas</h3>
              <div className="personas-grid">
                <div className="persona-card">
                  <div className="persona-header">
                    <h4>Priya</h4>
                    <p className="persona-subtitle">28, Software Engineer from India</p>
                  </div>
                  <div className="persona-details">
                    <p><strong>Situation:</strong> Lives in Berlin for 1.5 years, speaks basic German (A2 level)</p>
                    <p><strong>Challenge:</strong> Manages chronic migraines, struggles with medication tracking and phone call anxiety</p>
                    <p><strong>Goal:</strong> Reliable medication management without language barriers</p>
                  </div>
                </div>
                <div className="persona-card">
                  <div className="persona-header">
                    <h4>Marcus</h4>
                    <p className="persona-subtitle">31, PhD Student from UK</p>
                  </div>
                  <div className="persona-details">
                    <p><strong>Situation:</strong> Lives in Munich for 8 months, minimal German proficiency</p>
                    <p><strong>Challenge:</strong> Type 1 diabetes with multiple daily medications, complexity with pharmacy apps</p>
                    <p><strong>Goal:</strong> Strict medication schedule maintenance and English-speaking specialist access</p>
                  </div>
                </div>
              </div>
            </div>

            {/* User Journey */}
            <div className="research-subsection">
              <h3>User Journey: Aisha's Story</h3>
              <p className="journey-intro">A 26-year-old international master's student experiencing recurring stomach pain wanted to track symptoms before a doctor visit.</p>
              <div className="journey-stages">
                <div className="journey-stage">
                  <span className="stage-number">1</span>
                  <h4>Awareness</h4>
                  <p>Notices symptoms, has no tracking system</p>
                </div>
                <div className="journey-stage">
                  <span className="stage-number">2</span>
                  <h4>Research</h4>
                  <p>Searches for doctors in German platforms, feels confused</p>
                </div>
                <div className="journey-stage">
                  <span className="stage-number">3</span>
                  <h4>Preparation</h4>
                  <p>Forgets health history details before appointment</p>
                </div>
                <div className="journey-stage">
                  <span className="stage-number">4</span>
                  <h4>Treatment</h4>
                  <p>Struggles to manage medication schedule</p>
                </div>
                <div className="journey-stage">
                  <span className="stage-number">5</span>
                  <h4>Follow-up</h4>
                  <p>Manual pharmacy visits required for refills</p>
                </div>
              </div>
            </div>

            {/* Key Insights */}
            <div className="research-subsection">
              <h3>Key Insights</h3>
              <div className="insights-grid">
                <div className="insight-card">
                  <h4>Language = Safety</h4>
                  <p>9 of 12 participants reported missing medication doses due to German-only instructions, resorting to dangerous Google Translate interpretations</p>
                </div>
                <div className="insight-card">
                  <h4>Call Anxiety</h4>
                  <p>All participants struggled with calling doctors' offices in German, sometimes delaying care for weeks</p>
                </div>
                <div className="insight-card">
                  <h4>Information Fragmentation</h4>
                  <p>Users juggle notes apps, pharmacy websites, separate booking platforms creating chaotic health management</p>
                </div>
                <div className="insight-card">
                  <h4>Trust in Documentation</h4>
                  <p>Clear, organized health records in user's language significantly enhances confidence during doctor appointments</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Wireframes & Iterations */}
          <motion.section variants={itemVariants} className="case-section wireframes-section">
            <span className="section-number">04 — DESIGN PROCESS</span>
            <h2>Wireframes & Iterations</h2>
            <p className="section-intro">From initial sketches to refined flows, every iteration was informed by user feedback.</p>
            <div className="iteration-content">
              <div className="iteration-step">
                <h3>Low-Fidelity Wireframes</h3>
                <p>Created 30+ wireframe screens exploring layout options and navigation patterns. Tested early wireframes with 5 international users for structure validation.</p>
              </div>
              <div className="iteration-step">
                <h3>Key Iteration Insights</h3>
                <p>Initially placed medication tracking in a separate tab, but user feedback revealed users wanted direct home screen access. Redesigned information architecture to feature medication dashboard prominently on home view.</p>
              </div>
            </div>
            <div className="photo-grid">
              <img src="/medimate/low-fi prototype.jpeg" alt="Wireframe Sketches" className="case-image" />
              <img src="/medimate/information architecture.png" alt="Information Architecture" className="case-image" />
            </div>
          </motion.section>

          {/* Design System */}
          <motion.section variants={itemVariants} className="case-section design-system-section">
            <span className="section-number">05 — DESIGN SYSTEM</span>
            <h2>Design System & Visual Language</h2>
            <p className="section-intro">A cohesive, accessible design system built for healthcare trust and clarity.</p>
            
            <div className="design-system-subsection">
              <h3>Color Palette</h3>
              <div className="color-grid">
                <div className="color-card">
                  <div className="color-swatch" style={{backgroundColor: '#205BE0'}}></div>
                  <p className="color-name">Primary Blue</p>
                  <p className="color-code">#205BE0</p>
                  <p className="color-usage">Primary actions</p>
                </div>
                <div className="color-card">
                  <div className="color-swatch" style={{backgroundColor: '#1D416D'}}></div>
                  <p className="color-name">Dark Blue</p>
                  <p className="color-code">#1D416D</p>
                  <p className="color-usage">Text, backgrounds</p>
                </div>
                <div className="color-card">
                  <div className="color-swatch" style={{backgroundColor: '#FFFFFF', border: '1px solid #E0E0E0'}}></div>
                  <p className="color-name">White</p>
                  <p className="color-code">#FFFFFF</p>
                  <p className="color-usage">Main background</p>
                </div>
                <div className="color-card">
                  <div className="color-swatch" style={{backgroundColor: '#F5F5F5'}}></div>
                  <p className="color-name">Light Grey</p>
                  <p className="color-code">#F5F5F5</p>
                  <p className="color-usage">Secondary background</p>
                </div>
                <div className="color-card">
                  <div className="color-swatch" style={{backgroundColor: '#771D1D'}}></div>
                  <p className="color-name">Error Red</p>
                  <p className="color-code">#771D1D</p>
                  <p className="color-usage">Alerts, errors</p>
                </div>
                <div className="color-card">
                  <div className="color-swatch" style={{backgroundColor: '#1D990F'}}></div>
                  <p className="color-name">Success Green</p>
                  <p className="color-code">#1D990F</p>
                  <p className="color-usage">Success states</p>
                </div>
              </div>
            </div>

            <div className="design-system-subsection">
              <h3>Typography</h3>
              <p style={{marginBottom: '1.5rem', color: 'var(--text-light)'}}>Font Families: Inter, Poppins</p>
              <p style={{marginBottom: '1.5rem', color: 'var(--text-light)'}}>Size Range: 10px (min) - 16px (max)</p>
              <div className="typography-guide">
                <div className="typography-item">
                  <h4 style={{fontSize: '2.5rem', fontFamily: 'Poppins'}}>H1 - 2.5rem (Poppins)</h4>
                  <p>Page titles, hero sections - Bold, commanding presence</p>
                </div>
                <div className="typography-item">
                  <h4 style={{fontSize: '1.8rem', fontFamily: 'Poppins'}}>H2 - 1.8rem (Poppins)</h4>
                  <p>Section headers, main content divisions</p>
                </div>
                <div className="typography-item">
                  <h4 style={{fontSize: '1.2rem', fontFamily: 'Poppins'}}>H3 - 1.2rem (Poppins)</h4>
                  <p>Subsection headers, component titles</p>
                </div>
                <div className="typography-item">
                  <p style={{fontSize: '1rem', fontFamily: 'Inter'}}>Body - 1rem (Inter)</p>
                  <p>Primary content text, readable at any distance</p>
                </div>
                <div className="typography-item">
                  <p style={{fontSize: '0.875rem', fontFamily: 'Inter'}}>Small - 0.875rem (Inter)</p>
                  <p>Secondary text, labels, captions</p>
                </div>
              </div>
            </div>

            <div className="design-system-subsection">
              <h3>Accessibility Standards</h3>
              <div className="accessibility-checklist">
                <div className="check-item">✓ WCAG AA compliance for all text (4.5:1 contrast for normal text)</div>
                <div className="check-item">✓ Colorblind-friendly palette testing</div>
                <div className="check-item">✓ Minimum touch target size: 44x44px</div>
                <div className="check-item">✓ Never rely on color alone - always include icons/text</div>
                <div className="check-item">✓ Clear visual hierarchy for stress-free navigation</div>
              </div>
            </div>
          </motion.section>

          {/* Solution Section */}
          <motion.section variants={itemVariants} className="case-section solution-section">
            <span className="section-number">06 — SOLUTION</span>
            <h2>The Solution</h2>
            <div className="section-content">
              <p>{data.solution}</p>
            </div>
            <div className="photo-grid">
              <img src="/medimate/solution1.png" alt="Solution 1" className="case-image" />
              <img src="/medimate/solution2.png" alt="Solution 2" className="case-image" />
            </div>
          </motion.section>

          {/* Final Designs */}
          <motion.section variants={itemVariants} className="case-section final-designs-section">
            <span className="section-number">07 — FINAL DESIGN</span>
            <h2>Final Designs</h2>
            <p className="section-intro">The polished, production-ready interface built for international healthcare users.</p>
            <div className="final-designs-grid">
              <img src="/medimate/ProjectImage1.png" alt="Final Design 1" className="final-design-image" />
              <img src="/medimate/ProjectImage2.png" alt="Final Design 2" className="final-design-image" />
              <img src="/medimate/ProjectImage3.png" alt="Final Design 3" className="final-design-image" />
              <img src="/medimate/ProjectImage4.png" alt="Final Design 4" className="final-design-image" />
              <img src="/medimate/ProjectImage5.png" alt="Final Design 5" className="final-design-image" />
              <img src="/medimate/ProjectImage6.png" alt="Final Design 6" className="final-design-image" />
              <img src="/medimate/ProjectImage7.png" alt="Final Design 7" className="final-design-image" />
              <img src="/medimate/ProjectImage8.png" alt="Final Design 8" className="final-design-image" />
              <img src="/medimate/ProjectImage9.png" alt="Final Design 9" className="final-design-image" />
              <img src="/medimate/ProjectImage10.png" alt="Final Design 10" className="final-design-image" />
              <img src="/medimate/ProjectImage11.png" alt="Final Design 11" className="final-design-image" />
              <img src="/medimate/ProjectImage12.png" alt="Final Design 12" className="final-design-image" />
              <img src="/medimate/ProjectImage13.png" alt="Final Design 13" className="final-design-image" />
              <img src="/medimate/ProjectImage14.png" alt="Final Design 14" className="final-design-image" />
              <img src="/medimate/ProjectImage15.png" alt="Final Design 15" className="final-design-image" />
              <img src="/medimate/ProjectImage16.png" alt="Final Design 16" className="final-design-image" />
              <img src="/medimate/ProjectImage17.png" alt="Final Design 17" className="final-design-image" />
              <img src="/medimate/ProjectImage18.png" alt="Final Design 18" className="final-design-image" />
              <img src="/medimate/ProjectImage19.png" alt="Final Design 19" className="final-design-image" />
              <img src="/medimate/ProjectImage20.png" alt="Final Design 20" className="final-design-image" />
              <img src="/medimate/ProjectImage21.png" alt="Final Design 21" className="final-design-image" />
              <img src="/medimate/ProjectImage22.png" alt="Final Design 22" className="final-design-image" />
              <div className="video-thumbnail-wrapper" onClick={handleVideoClick}>
                <video 
                  ref={videoRef}
                  className="video-thumbnail"
                  poster="/medimate/ProjectImage1.png"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                >
                  <source src="/medimate/Video Project.mp4" type="video/mp4" />
                </video>
                <div className={`play-button-overlay ${isPlaying ? 'hidden' : ''}`}></div>
              </div>
            </div>
          </motion.section>

          {/* Usability Testing */}
          <motion.section variants={itemVariants} className="case-section usability-testing-section">
            <span className="section-number">08 — USABILITY TESTING</span>
            <h2>Testing & Validation</h2>
            <p className="section-intro">Moderated usability tests with 8 participants (4 English speakers, 4 German speakers) validated our design decisions.</p>
            
            <div className="test-scenarios">
              <div className="test-scenario">
                <h3>Test Scenario 1: Medication Logging</h3>
                <p className="scenario-desc">"You just took your morning medication. Log it in the app."</p>
                <div className="test-metrics">
                  <div className="metric">
                    <p className="metric-value">100%</p>
                    <p className="metric-label">Task Completion</p>
                  </div>
                  <div className="metric">
                    <p className="metric-value">12s</p>
                    <p className="metric-label">Avg. Time</p>
                  </div>
                  <div className="metric">
                    <p className="metric-value">0</p>
                    <p className="metric-label">Errors</p>
                  </div>
                  <div className="metric">
                    <p className="metric-value">9.2/10</p>
                    <p className="metric-label">Ease Rating</p>
                  </div>
                </div>
                <p className="test-insight">✓ All participants found medication logging "extremely easy" and "intuitive"</p>
              </div>

              <div className="test-scenario">
                <h3>Test Scenario 2: Doctor Search & Booking</h3>
                <p className="scenario-desc">"Find an English-speaking dermatologist and schedule an appointment."</p>
                <div className="test-metrics">
                  <div className="metric">
                    <p className="metric-value">87.5%</p>
                    <p className="metric-label">Task Completion</p>
                  </div>
                  <div className="metric">
                    <p className="metric-value">48s</p>
                    <p className="metric-label">Avg. Time</p>
                  </div>
                  <div className="metric">
                    <p className="metric-value">1</p>
                    <p className="metric-label">Avg Errors</p>
                  </div>
                  <div className="metric">
                    <p className="metric-value">8.5/10</p>
                    <p className="metric-label">Ease Rating</p>
                  </div>
                </div>
                <p className="test-insight">✓ Language filter was critical feature - all users immediately searched by "English"</p>
              </div>

              <div className="test-scenario">
                <h3>Test Scenario 3: Symptom Tracking</h3>
                <p className="scenario-desc">"Track your headache symptoms over the past week for your upcoming appointment."</p>
                <div className="test-metrics">
                  <div className="metric">
                    <p className="metric-value">100%</p>
                    <p className="metric-label">Task Completion</p>
                  </div>
                  <div className="metric">
                    <p className="metric-value">34s</p>
                    <p className="metric-label">Avg. Time</p>
                  </div>
                  <div className="metric">
                    <p className="metric-value">0</p>
                    <p className="metric-label">Errors</p>
                  </div>
                  <div className="metric">
                    <p className="metric-value">9.5/10</p>
                    <p className="metric-label">Ease Rating</p>
                  </div>
                </div>
                <p className="test-insight">✓ Visual severity scale resonated strongly - users appreciated non-text options</p>
              </div>
            </div>

            <div className="test-summary">
              <h3>Key Testing Findings</h3>
              <ul>
                <li><strong>Reduced from 5 steps to 3:</strong> Medication logging flow streamlined based on participant feedback</li>
                <li><strong>Privacy concerns addressed:</strong> Added clear data security messaging after observing hesitant users</li>
                <li><strong>Language switching validated:</strong> Users appreciated ability to change language anytime from settings</li>
                <li><strong>Contextual help needed:</strong> Added tooltips explaining medical terminology in user's selected language</li>
              </ul>
            </div>
          </motion.section>

          {/* Impact & Learnings */}
          <motion.section variants={itemVariants} className="case-section impact-learnings-section">
            <span className="section-number">09 — IMPACT & LEARNINGS</span>
            <h2>Results & Key Takeaways</h2>
            
            <div className="impact-subsection">
              <h3>Impact & Results</h3>
              <div className="impact-content">
                <p className="impact-highlight">Medimate enables non-German speakers to independently manage their health, improve doctor-patient communication, reduce medication errors, and access timely care without dependency on translators or friends.</p>
                <div className="impact-cards">
                  <div className="impact-card">
                    <h4>✨ Design Validation</h4>
                    <p>8/8 test participants successfully completed core tasks with high ease ratings (8.5-9.2/10). The bilingual interface reduced cognitive load and significantly improved confidence in healthcare management.</p>
                  </div>
                  <div className="impact-card">
                    <h4>🎯 User Accessibility</h4>
                    <p>Demonstrated that language-inclusive design directly addresses healthcare equity gaps. International residents finally have a tool that respects their linguistic needs without compromising medical accuracy.</p>
                  </div>
                  <div className="impact-card">
                    <h4>💡 Business Potential</h4>
                    <p>The concept addresses a 13.4M+ person market in Germany alone. This design pattern could be replicated for other languages and demographics facing similar healthcare barriers globally.</p>
                  </div>
                  <div className="impact-card">
                    <h4>📊 Measurable Improvements</h4>
                    <p>100% medication logging completion rate, 87.5% doctor booking success, zero critical errors in core workflows. These metrics validate the effectiveness of user-centered healthcare design.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="learnings-subsection">
              <h3>Key Learnings</h3>
              <div className="learnings-cards">
                <div className="learning-card">
                  <h4>1. Language is Not Optional in Healthcare</h4>
                  <p>Users don't compromise on medical clarity. When presented with clear, bilingual alternatives, they immediately opt for their native language interfaces. Language accessibility directly impacts health outcomes.</p>
                </div>
                <div className="learning-card">
                  <h4>2. Research Uncovers Hidden Frustrations</h4>
                  <p>Initial interviews revealed that 9 of 12 participants used dangerous workarounds (Google Translate for medications). This critical insight became the project's core motivation and shaped every design decision.</p>
                </div>
                <div className="learning-card">
                  <h4>3. Accessibility Features Benefit Everyone</h4>
                  <p>The information architecture, clear labeling, and visual hierarchy designed for international users also improved usability for German speakers. Inclusive design elevates the entire product.</p>
                </div>
                <div className="learning-card">
                  <h4>4. Iterative Testing Reveals Real Needs</h4>
                  <p>Early wireframe feedback showed users wanted medication access on the home screen, not buried in tabs. This single insight fundamentally changed the information architecture and improved task completion rates.</p>
                </div>
                <div className="learning-card">
                  <h4>5. Design Constraints Drive Innovation</h4>
                  <p>Building for multiple languages forced thoughtful UI choices - shorter labels, clear iconography, consistent patterns. These constraints made the design stronger, not weaker.</p>
                </div>
                <div className="learning-card">
                  <h4>6. Trust Requires Transparency</h4>
                  <p>Healthcare users need to understand their tools. Clear information architecture, obvious navigation, and organized health records in the user's language builds trust faster than complex features ever could.</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section variants={itemVariants} className="case-section cta-section">
            <h2>Want to see more?</h2>
            <p>Interested in discussing this project or collaborating on similar challenges?</p>
            <div className="cta-buttons">
              <button className="btn-primary">Get in Touch</button>
              <button className="btn-secondary">View More Projects</button>
            </div>
          </motion.section>
        </motion.div>
      )}
    </motion.div>
  )
}
