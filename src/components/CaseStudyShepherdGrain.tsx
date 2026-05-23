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
            <p className="description">A mobile and tablet CRM application designed to streamline grain trading operations, enabling agricultural professionals to manage client relationships, track transactions, and optimize inventory in real-time.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="quick-stats">
            <div className="stat">
              <h3>Challenge</h3>
              <p>Agricultural traders were managing client relationships and transactions using outdated systems, spreadsheets, and fragmented tools. They needed a centralized mobile platform to access critical information, track deals, and manage inventory from the field.</p>
            </div>
            <div className="stat">
              <h3>Solution</h3>
              <p>Designed and developed a comprehensive mobile CRM application that consolidates client data, transaction history, inventory tracking, and real-time pricing information. The app works offline and syncs when connection is available.</p>
            </div>
            <div className="stat">
              <h3>Result</h3>
              <p>Enabled traders to manage operations more efficiently, reduce data entry errors, improve client relationships, and make faster business decisions from anywhere in the field.</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="quick-tools">
            <h3>Tools & Technologies</h3>
            <div className="tools-grid">
              {['React Native', 'TypeScript', 'Firebase', 'Redux', 'Figma', 'Node.js'].map((tool, index) => (
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
              <p className="hero-description">Shepherd Grain is an internal mobile and tablet application designed for an Australian grain trading company to help warehouse teams manage container operations.</p>
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

          {/* Overview Stats */}
          <motion.section variants={itemVariants} className="case-section stats-section">
            <span className="section-number">01 — PROJECT OVERVIEW</span>
            <h2>Project Overview</h2>
            <p className="overview-description">The app allows staff to track arrivals, record inspections, and monitor shipments in one place, reducing manual tracking and improving operational visibility.</p>
            <div className="overview-grid">
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
            </div>
          </motion.section>

          {/* Challenge Section */}
          <motion.section variants={itemVariants} className="case-section problem-section">
            <div className="problem-header">
              <span className="problem-number">02 — CHALLENGE</span>
              <h2>The Grain Trading Problem</h2>
            </div>
            <div style={{display: 'flex', gap: '2rem', alignItems: 'center'}}>
              <div style={{flex: 1}}>
                <div className="problem-impact">
                  <p>Warehouse teams were managing grain container operations using manual logs and disconnected systems.</p>
                  <p>This made it difficult to:</p>
                  <ul style={{marginLeft: '1.5rem', lineHeight: '1.8'}}>
                    <li>Track container arrivals</li>
                    <li>Record inspection data quickly</li>
                    <li>Monitor shipment status in real time</li>
                    <li>Access operational information on the go</li>
                  </ul>
                  <p>These challenges slowed down operations and increased the risk of data entry errors.</p>
                </div>
              </div>
             
            </div>
          </motion.section>

          {/* Solution Section */}
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
            <span className="section-number">04 — DESIGN APPROACH</span>
            <h2>Design Approach</h2>
            <div style={{display: 'flex', gap: '2rem', alignItems: 'flex-start'}}>
              <div className="impact-content" style={{flex: 1}}>
                <p className="impact-highlight">The design focused on speed, clarity, and field usability.</p>
                <p style={{marginTop: '1.5rem'}}><strong>Key design priorities:</strong></p>
                <ul style={{marginLeft: '1.5rem', lineHeight: '1.8'}}>
                  <li>Quick access to daily container updates</li>
                  <li>Large touch-friendly controls for warehouse environments</li>
                  <li>Clear inspection and shipment records</li>
                  <li>Mobile-first layout for on-site staff</li>
                </ul>
              </div>
              <div style={{flex: 1}}>
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

          {/* Outcome Section */}
          <motion.section variants={itemVariants} className="case-section">
            <span className="section-number">07 — Outcome</span>
            <h2>Outcome</h2>
            <div className="section-content">
              <p>The application helped streamline warehouse operations by providing a centralized system for container tracking and inspection logging.</p>
              <p style={{marginTop: '1rem'}}>The project highlighted the importance of designing mobile tools for real-world operational environments, especially where internet connectivity may be limited.</p>
            </div>
          </motion.section>

          {/* Key Takeaways & Future Learning Section */}
          <motion.section variants={itemVariants} className="case-section">
            <span className="section-number">08 — KEY TAKEAWAYS & FUTURE LEARNING</span>
            <h2>Key Takeaways & Future Learning</h2>
            <div className="section-content">
              <p><strong>Key Takeaways:</strong> The importance of designing for offline-first functionality in field-based applications. Understanding real-world operational constraints is critical to creating effective solutions. Mobile-first design with touch-friendly interfaces significantly improves usability in warehouse environments.</p>
              <p style={{marginTop: '1rem'}}><strong>Future Learning:</strong> Continuing to refine real-time synchronization patterns for complex data structures. Exploring advanced analytics to provide warehouses with predictive insights about container arrivals and optimal inventory levels. Expanding the app's capabilities with AI-powered inspection result analysis.</p>
            </div>
          </motion.section>

          {/* Process Section */}
          <motion.section variants={itemVariants} className="case-section">
            <span className="section-number">09 — PROCESS</span>
            <h2>Design & Development Process</h2>
            <div className="section-content">
              <p>Conducted field research with grain traders to understand their workflows and pain points. Designed wireframes and prototypes through iterative feedback sessions. Developed the mobile app using React Native for cross-platform compatibility with offline-first architecture. Implemented Firebase for real-time data sync and built a Node.js backend for transaction processing and reporting.</p>
            </div>
          </motion.section>
          <motion.section variants={itemVariants} className="case-section">
            <span className="section-number">10 — KEY TAKEAWAYS</span>
            <h2>Key Takeaways</h2>
            <div className="section-content">
              <p>Successfully delivered a production-ready mobile CRM that transformed how grain traders manage their business. The app demonstrated the critical importance of offline-first design for field-based operations and real-time data synchronization in the agricultural industry.</p>
            </div>
          </motion.section>

          {/* Tools Section */}
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
            <span className="section-number">12 — LIVE APP</span>
            <h2>Experience It Yourself</h2>
            <p className="live-app-description">Want to see how Shepherd Grain works in action? Download the app from the Google Play Store.</p>
            <a 
              href="https://play.google.com/store/apps/details?id=au.com.shepherdgrain.mobile&pcampaignid=web_share" 
              target="_blank" 
              rel="noopener noreferrer"
              className="play-store-button"
            >
              Download on Google Play Store
            </a>
          </motion.section>

         
        </motion.div>
      )}
    </motion.div>
  )
}
