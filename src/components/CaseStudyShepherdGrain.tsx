import { motion } from 'framer-motion'
import './CaseStudy.css'
import { containerVariants, itemVariants } from '../utils/caseStudyAnimations'

interface CaseStudyShepherdGrainProps {
  isRecruiterMode: boolean
}

export default function CaseStudyShepherdGrain({ isRecruiterMode }: CaseStudyShepherdGrainProps) {

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
          <div className="mode-badge">30-Second Scan</div>

          <motion.div variants={itemVariants} className="quick-overview">
            <h2>Shepherd Grain</h2>
            <p className="subtitle">Mobile & Tablet App</p>
            <p className="description">Shepherd Grain, an Australian agricultural company, needed to transform their existing CRM system into a mobile and tablet experience for field operators and senior management.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="quick-stats">
            <div className="stat">
              <h3>Challenge</h3>
              <p>The challenge was to translate a complex, desktop-first operational system into a usable, role-based mobile and tablet experience that supported real-time logistics workflows such as container arrivals, inspections, and loading operations.</p>
            </div>
            <div className="stat">
              <h3>Solution</h3>
              <p>I designed a responsive enterprise application with role-based onboarding, an operational dashboard, and structured workflow modules that simplified complex logistics data into clear, actionable interfaces for field and management users.</p>
            </div>
            <div className="stat">
              <h3>Result</h3>
              <p>The solution improved accessibility of operational data across roles and enabled faster decision-making in time-sensitive logistics environments.</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="quick-tools">
            <h3>Tools & Technologies</h3>
            <div className="tools-grid">
              {['React Native', 'TypeScript', 'Firebase', 'Redux', 'Figma'].map((tool, index) => (
                <div key={index} className="tool-item">
                  <p className="tool-name">{tool}</p>
                </div>
              ))}
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
          <div className="mode-badge">Full Case Study</div>

          {/* Hero Section */}
          <motion.section variants={itemVariants} className="case-hero">
            <div className="hero-content">
              <h1>Shepherd Grain</h1>
              <p className="hero-category">Mobile & Tablet App</p>
              <p className="hero-description">Shepherd Grain is an Australian agricultural company managing large-scale grain logistics operations. The goal of this project was to transform their internal CRM system into a mobile and tablet-first operational tool. </p>
              <div className="overview-grid" style={{marginTop: '2rem', gridTemplateColumns: 'repeat(4, 1fr)'}}>
                <div className="overview-card">
                  <span className="overview-label">Role</span>
                  <p className="overview-value">Product Designer</p>
                </div>
                <div className="overview-card">
                  <span className="overview-label">Project Type</span>
                  <p className="overview-value">Internal Operations Tool</p>
                </div>
                <div className="overview-card">
                  <span className="overview-label">Client</span>
                  <p className="overview-value">Shepherd Grain (Australia)</p>
                </div>
                <div className="overview-card">
                  <span className="overview-label">Timeline</span>
                  <p className="overview-value">August 2025 - November 2025</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Hero Image */}
          <motion.section variants={itemVariants} className="case-section photo-section">
            <img 
              src={`${import.meta.env.BASE_URL}Shepherd Grain/heromain.png`}
              alt="Shepherd Grain Mobile App"
              className="case-study-image shepherd-grain-hero"
            />
          </motion.section>

          {/* Challenge Section */}
          <motion.section variants={itemVariants} className="case-section problem-section">
            <div className="problem-header">
              <span className="problem-number">02 — CHALLENGE</span>
              <h2>The Challenge</h2>
            </div>
            <div style={{display: 'flex', gap: '2rem', alignItems: 'center'}}>
              <div style={{flex: 1}}>
                <div className="problem-impact">
                  <p>Shepherd Grain's CRM was originally designed for desktop workflows and internal admin use. As operations expanded, teams needed real-time access to logistics data in the field.</p>
                  <p>However, the existing system had key limitations:</p>
                  <ul style={{marginLeft: '1.5rem', lineHeight: '1.8'}}>
                    <li>Not optimized for mobile usage</li>
                    <li>Overly complex desktop UI</li>
                    <li>No role-based experience separation</li>
                    <li>Difficult to access operational data quickly</li>
                    <li>Inefficient workflows for time-sensitive logistics</li>
                  </ul>
                </div>
              </div>
             
            </div>
          </motion.section>

          {/* Research & Constraints Section */}
          <motion.section variants={itemVariants} className="case-section research-section">
            <span className="section-number">03 — RESEARCH & CONSTRAINTS</span>
            <h2>Research & Constraints</h2>
            
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem'}}>
              <div className="research-subsection">
                <h3>Key Constraints</h3>
                <ul style={{marginLeft: '1.5rem', lineHeight: '1.8', color: 'var(--text-light)'}}>
                  <li>Existing CRM logic could not be fully redesigned</li>
                  <li>Must support both mobile and tablet</li>
                  <li>Real-time operational use case</li>
                  <li>Users often working in low-connectivity environments (field work)</li>
                </ul>
              </div>

              <div className="research-subsection">
                <h3>Key Insights</h3>
                <ul style={{marginLeft: '1.5rem', lineHeight: '1.8', color: 'var(--text-light)'}}>
                  <li>Operators and managers require completely different views of the same data.</li>
                  <li>Mobile users prioritize fast scanning over deep analysis.</li>
                  <li>Arrival delays and loading operations require immediate clarity and quick decision-making.</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Solution Section 
          <motion.section variants={itemVariants} className="case-section">
            <span className="section-number"></span>
            <h2>My Role</h2>

            <div className="section-content">
              <p>As the Product Designer, I worked on:</p>
              <div className="overview-grid" style={{marginTop: '1.5rem', gridTemplateColumns: 'repeat(4, 1fr)'}}>
                <div className="overview-card">
                  <p style={{margin: '0', lineHeight: '1.6'}}>Conducting user research to understand the needs and pain points of warehouse teams.</p>
                </div>
                <div className="overview-card">
                  <p style={{margin: '0', lineHeight: '1.6'}}>Designing wireframes and prototypes for the mobile and Tablet app.</p>
                </div>
                <div className="overview-card">
                  <p style={{margin: '0', lineHeight: '1.6'}}>Creating a user-friendly interface that streamlines container tracking and inspection processes.</p>
                </div>
                <div className="overview-card">
                  <p style={{margin: '0', lineHeight: '1.6'}}>Collaborating with developers to ensure design implementation aligns with technical constraints.</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Impact Section */}
          <motion.section variants={itemVariants} className="case-section impact-learnings-section">
            <span className="section-number">04 — LOW-FIDELITY PROTOTYPES</span>
            <h2>Wireframes & Iterations</h2>
            <div style={{display: 'flex', gap: '3rem', alignItems: 'flex-start'}}>
              <div className="impact-content" style={{flex: 1.5}}>
                <p style={{color: 'var(--text-light)'}}>Early paper prototypes and wireframes helped validate the information architecture and workflow efficiency. Through rapid sketching and feedback sessions with stakeholders, we tested different navigation patterns and layout approaches before committing to high-fidelity designs.</p>
                <p style={{marginTop: '1.5rem', color: 'var(--text)'}}><strong>Key design priorities:</strong></p>
                <ul style={{marginLeft: '1.5rem', lineHeight: '1.8', color: 'var(--text-light)'}}>
                  <li>Quick access to daily container updates</li>
                  <li>Large touch-friendly controls for warehouse environments</li>
                  <li>Clear inspection and shipment records</li>
                  <li>Mobile-first layout for on-site staff</li>
                </ul>
                <p style={{marginTop: '1.5rem', color: 'var(--text-light)'}}>These low-fidelity prototypes revealed critical insights about user mental models and pain points. We discovered that users needed to quickly scan multiple data points without navigating through complex menu hierarchies.</p>
              </div>
              <div style={{flex: 0.7}}>
                <img 
                  src={`${import.meta.env.BASE_URL}Shepherd Grain/paper prototype.png`}
                  alt="Paper Prototype"
                  style={{width: '100%', borderRadius: '20px', border: '1px solid rgba(58, 15, 15, 0.2)'}}
                />
              </div>
            </div>
            
          </motion.section>

          {/* Key Features Section */}
          <motion.section variants={itemVariants} className="case-section research-section">
            <span className="section-number">05 — Key Features</span>
            <h2>Key Features</h2>
            <div className="section-content">
              <div className="features-list" style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem'}}>
                <div className="feature-item" style={{padding: '1rem'}}>
                  <h3 style={{fontSize: '1rem', marginBottom: '0.5rem'}}>Container Tracking</h3>
                  <p style={{fontSize: '0.875rem'}}>Staff can monitor incoming containers and update their status.</p>
                </div>
                <div className="feature-item" style={{padding: '1rem'}}>
                  <h3 style={{fontSize: '1rem', marginBottom: '0.5rem'}}>Inspection Logging</h3>
                  <p style={{fontSize: '0.875rem'}}>Teams can quickly record inspection results directly from the field.</p>
                </div>
                <div className="feature-item" style={{padding: '1rem'}}>
                  <h3 style={{fontSize: '1rem', marginBottom: '0.5rem'}}>Shipment Monitoring</h3>
                  <p style={{fontSize: '0.875rem'}}>Managers can view shipment progress and operational updates in real time.</p>
                </div>
                <div className="feature-item" style={{padding: '1rem'}}>
                  <h3 style={{fontSize: '1rem', marginBottom: '0.5rem'}}>Offline Support</h3>
                  <p style={{fontSize: '0.875rem'}}>The app allows teams to record data even when internet connectivity is unstable.</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Design Section */}
          <motion.section variants={itemVariants} className="case-section design-showcase-section">
            <span className="section-number">06 — DESIGN HIGHLIGHTS</span>
            <h2>Final Design</h2>
            
            <p>
              The interface was optimized differently for mobile and tablet devices.
            </p>

            <div className="photo-section">
              <img 
                src={`${import.meta.env.BASE_URL}Shepherd Grain/finaldesign.png`}
                alt="Final Design"
                style={{width: '90%', borderRadius: '8px'}}
                className="case-hero-image"
              />
            </div>
          </motion.section>

          {/* Outcome Section *
          <motion.section variants={itemVariants} className="case-section">
            <span className="section-number">07 — Outcome</span>
            <h2>Outcome</h2>
            <div className="section-content">
              <p>The application helped streamline warehouse operations by providing a centralized system for container tracking and inspection logging.</p>
              <p style={{marginTop: '1rem'}}>The project highlighted the importance of designing mobile tools for real-world operational environments, especially where internet connectivity may be limited.</p>
            </div>
          </motion.section>

          {/* Key Takeaways & Future Learning Section 
          <motion.section variants={itemVariants} className="case-section">
            <span className="section-number">08 — KEY TAKEAWAYS & FUTURE LEARNING</span>
            <h2>Key Takeaways & Future Learning</h2>
            <div className="section-content">
              <p><strong>Key Takeaways:</strong> The importance of designing for offline-first functionality in field-based applications. Understanding real-world operational constraints is critical to creating effective solutions. Mobile-first design with touch-friendly interfaces significantly improves usability in warehouse environments.</p>
              <p style={{marginTop: '1rem'}}><strong>Future Learning:</strong> Continuing to refine real-time synchronization patterns for complex data structures. Exploring advanced analytics to provide warehouses with predictive insights about container arrivals and optimal inventory levels. Expanding the app's capabilities with AI-powered inspection result analysis.</p>
            </div>
          </motion.section>

          {/* Process Section 
          <motion.section variants={itemVariants} className="case-section">
            <span className="section-number">09 — PROCESS</span>
            <h2>Design & Development Process</h2>
            <div className="section-content">
              <p>Conducted field research with grain traders to understand their workflows and pain points. Designed wireframes and prototypes through iterative feedback sessions. Developed the mobile app using React Native for cross-platform compatibility with offline-first architecture. Implemented Firebase for real-time data sync and built a Node.js backend for transaction processing and reporting.</p>
            </div>
          </motion.section>*/}
          <motion.section variants={itemVariants} className="case-section">
            <h2>Key Takeaways</h2>
            <div className="section-content">
              <p>One of the biggest learnings from this project was that enterprise systems are not successful because they include more data or more features — but because they reduce cognitive overload in high-pressure environments.

In Shepherd Grain’s CRM, users were dealing with dense logistics data (arrivals, weights, transporters, inspections) where speed and clarity mattered more than depth. The design challenge was not to “show everything”, but to carefully decide what each role actually needs at each moment.

This reinforced the importance of prioritization in information design and the role of hierarchy in making complex systems usable.</p>
            </div>
          </motion.section>

          {/* Tools Section 
          <motion.section variants={itemVariants} className="case-section design-system-section">
            <span className="section-number">11 — TOOLS</span>
            <h2>Tools & Technologies</h2>
            <div className="tools-showcase">
              {['React Native', 'TypeScript', 'Firebase', 'Redux', 'Figma', 'Node.js'].map((tool, index) => (
                <div key={index} className="tool-showcase-item">
                  <p>{tool}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Live App Section */}
          <motion.section variants={itemVariants} className="case-section live-app-section">
            <span className="section-number"></span>
            <h2 style={{textAlign: 'left'}}>Experience It Yourself</h2>
            <p className="live-app-description" style={{textAlign: 'left'}}>Want to see how Shepherd Grain works in action? Download the app from the Google Play Store.</p>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '2rem'}}>
              <a 
                href="https://play.google.com/store/apps/details?id=au.com.shepherdgrain.mobile&pcampaignid=web_share" 
                target="_blank" 
                rel="noopener noreferrer"
                className="play-store-button"
              >
                Download on Google Play Store
              </a>
            </div>
          </motion.section>

         
        </motion.div>
      )}
    </motion.div>
  )
}
