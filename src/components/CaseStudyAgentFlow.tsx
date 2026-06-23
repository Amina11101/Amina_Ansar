import { motion } from 'framer-motion'
import './CaseStudy.css'
import { containerVariants, itemVariants } from '../utils/caseStudyAnimations'

interface CaseStudyAgentFlowProps {
  isRecruiterMode: boolean
}

export default function CaseStudyAgentFlow({ isRecruiterMode }: CaseStudyAgentFlowProps) {

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
            <h2>AgentFlow</h2>
            <p className="subtitle">Web Application</p>
            <p className="description">AI-powered dashboard for managing and debugging autonomous multi-agent systems.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="quick-stats">
            <div className="stat">
              <h3>Challenge</h3>
              <p>Organizations running autonomous agents struggled with fragmented logs, invisible handoffs, and time-consuming debugging, making it difficult to understand why failures occurred and optimize workflows at scale.</p>
            </div>
            <div className="stat">
              <h3>Solution</h3>
              <p>I designed AgentFlow, a visual observability platform that combines workflow topology, temporal navigation, and contextual inspection to help teams understand, debug, and optimize complex agent interactions.</p>
            </div>
            <div className="stat">
              <h3>Result</h3>
              <p>The solution transformed text-heavy debugging into an intuitive visual workflow, reducing cognitive load and enabling faster issue investigation and greater trust in AI systems. Average 22% reduction in AI costs, and 63% decrease in agent failures.</p>
            </div>
          </motion.div>

        


         {/*} <motion.div variants={itemVariants} className="key-outcomes-section">
            <h3>Key Outcomes</h3>
            <div className="outcomes-list">
              <div className="outcome-item">
                <p><strong>85% faster debugging:</strong> Reduced debugging time from 30-60 minutes to 3 minutes</p>
              </div>
              <div className="outcome-item">
                <p><strong>2.3x faster deployments:</strong> Increased agent deployment velocity by 2.3x</p>
              </div>
              <div className="outcome-item">
                <p><strong>22% cost reduction:</strong> Average 22% reduction in AI costs across pilot organizations</p>
              </div>
              <div className="outcome-item">
                <p><strong>63% fewer failures:</strong> Decreased agent failures by 63% in the first month</p>
              </div>
              <div className="outcome-item">
                <p><strong>9.2/10 NPS:</strong> Pilot users gave 9.2/10 satisfaction rating</p>
              </div>
            </div>
          </motion.div>*/}

            <motion.div variants={itemVariants} className="quick-tools">
            <h3>Tools & Technologies</h3>
            <div className="tools-grid">
              {['Figma', 'Google Stitch', 'Notion', 'Miro'].map((tool, index) => (
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
              <h1>AgentFlow</h1>
              <p className="hero-category">Web Application</p>
              <p className="hero-description">AI-powered dashboard for managing and monitoring autonomous agents, providing real-time visualization, debugging, and optimization of multi-agent AI systems in production.</p>
            <div className="overview-grid">
              <div className="overview-card">
                <span className="overview-label">Type</span>
                <p className="overview-value">Web Application</p>
              </div>
              <div className="overview-card">
                <span className="overview-label">Your Role</span>
                <p className="overview-value">UX/UI Designer</p>
              </div>
              <div className="overview-card">
                <span className="overview-label">Timeline</span>
                <p className="overview-value">8 weeks</p>
              </div>
            </div>
            </div>
          </motion.section>

          {/* Hero Image */}
          <motion.section variants={itemVariants} className="case-section photo-section">
            <img
              src={`${import.meta.env.BASE_URL}agentflow/hero.png`}
              alt="AgentFlow Dashboard"
              className="case-hero-image"
            />
          </motion.section>

          {/* 01 Overview */}
          

          {/* 02 Problem Statement */}
          <motion.section variants={itemVariants} className="case-section problem-section">
            <div className="problem-header">
              <span className="problem-number"></span>
              <h2>The Challenge:</h2>
            </div>
            <div className="problem-impact">
              <p><strong>What was wrong:</strong> Organizations deploying multi-agent AI systems had zero visibility into how agents collaborate. Teams were unable to see data flows, understand agent decisions, or debug failures when agent-to-agent handoffs broke.</p>
              <p><strong>Who was affected:</strong> Operations teams and AI product leads at companies with 50+ AI agents in production. For every 1 production agent, teams spent 30-60 minutes debugging log files manually instead of focusing on optimization.</p>
              <p><strong>Why it mattered:</strong> 88% of organizations embed AI agents, but only 11% have them in production. The lack of visual debugging tools created a critical bottleneck.</p>
            </div>
          </motion.section>

          {/* 03 Your Role & Responsibility 
          <motion.section variants={itemVariants} className="case-section">
            <h2>My Role as Lead Designer</h2>
            <div className="section-content">
              <p><strong>UX Research:</strong> I conducted 12 in-depth interviews with operations managers and AI product leads, found 4 teams debugging production failures in real-time, and analyzed their pain points with existing tools.</p>
              <p><strong>UX Strategy:</strong> I synthesized research into 4 core user insights and defined the information architecture around existing debugging tools.</p>
              <p><strong>UI Design:</strong> I designed features using minimalist principles inspired by developer tools, with emphasis on glanceability and progressive disclosure.</p>
              <p><strong>Prototyping & Testing:</strong> I built high-fidelity interactive prototypes in Figma using Google Stich, conducted iterative usability testing, and refined interactions based on feedback.</p>
            </div>
          </motion.section>*/}

          {/* 04 Research & Insights */}
          <motion.section variants={itemVariants} className="case-section research-section">
            <span className="section-number"></span>
            <h2>Deep Research & Key Findings</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'start' }}>
              <div className="section-content">
                <p><strong>Research Methods:</strong> 12 in-depth interviews, competitive analysis of Langchain & Datadog, and literature review of multi-agent coordination academic research.</p>
                <p><strong>Mental Model Mismatch:</strong> Teams think in workflows and data transformations, but existing tools force text-heavy debugging. Users struggled to reconstruct agent behavior from unordered log entries.</p>
                <p><strong>Ghost in the Machine:</strong> Teams couldn't understand WHY agents made specific decisions. 78% of debugging sessions involved guessing which agent caused the failure.</p>
                <p><strong>Time-Driven Failures:</strong> 80% of production failures occurred during agent-to-agent handoffs. Teams needed the ability to "pause" a workflow and inspect state at exact moments.</p>
                <p><strong>Trust Calibration is Personal:</strong> Teams don't use universal confidence thresholds. Instead, they vary thresholds per workflow.</p>
              </div>
              <div className="photo-section" style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                backgroundColor: 'rgba(9, 7, 7, 0.09)',
                border: '1px solid rgba(182, 182, 182, 0.6)',
                borderRadius: '8px',
                padding: '1.5rem'
              }}>
                <img src={`${import.meta.env.BASE_URL}agentflow/research.png`} alt="Research Insights" className="case-hero-image" style={{ width: '100%', height: 'auto' }} />
              </div>
            </div>
          </motion.section>

          {/* 05 Ideation & Process */}
          <motion.section variants={itemVariants} className="case-section research-section">
            <span className="section-number"></span>
            <h2>Design Process: From Sketches to System</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'start' }}>
              <div className="photo-section" style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                borderRadius: '8px',
                padding: '1.5rem'
              }}>
                <img src={`${import.meta.env.BASE_URL}agentflow/Low fi proto.png`} alt="Low Fidelity Prototypes" className="case-hero-image" style={{ width: '100%', height: 'auto' }} />
              </div>
              <div className="section-content">
                <p><strong>Exploring the Right Mental Model:</strong> I began by sketching more than 20 concepts to explore different ways users could understand complex AI workflows. These early ideas ranged from timeline-based views to graph structures and hybrid approaches. Through rapid paper prototyping and feedback sessions, I discovered that users understood relationships between agents most easily when represented as a directed graph. This became the foundation for later designs.</p>
                <p><strong>Iterating Through Feedback:</strong> The low-fidelity prototypes helped uncover several usability challenges, including information overload, navigation complexity, and difficulties understanding workflow states. Each round of testing informed refinements to layout, and interaction patterns.</p>
                <p><strong>Key Design Decision:</strong> One of the most important insights was treating time as the primary navigation mechanism. This led to the introduction of a timeline scrubber, allowing users to move through workflow history, inspect events, and understand system behavior from a single interaction model. This decision simplified the overall experience and became a core element of the final design.</p>
              </div>
            </div>
          </motion.section>

          {/* 06 Final UI Design */}
          <motion.section variants={itemVariants} className="case-section final-designs-section">
            <span className="section-number"></span>
            <h2>Final Polished Interface</h2>
            <p className="section-intro">The production-ready design system for monitoring and debugging multi-agent systems at scale.</p>
            <div className="photo-section">
              <img src={`${import.meta.env.BASE_URL}agentflow/FinalDesign.png`} alt="Final Design" className="case-hero-image" />
            </div>
           {/*} <p style={{marginTop: '1rem'}}><strong>Key Features:</strong></p>
            <p>(1) <strong>Agent Topology Map</strong> - Live directed graph showing all agents and data flows with real-time health status indicators. Clicking any agent reveals detailed logs and decision rationale.</p>
            <p>(2) <strong>Handoff Inspector</strong> - Modal drill-down showing schema, actual payloads, transformations applied, and validation violations during agent-to-agent data transfers.</p>
            <p>(3) <strong>Timeline Scrubber</strong> - Video-player-style temporal navigation to inspect agent states at any moment in a workflow's execution. Key insight: enables "time travel" debugging.</p>
            <p>(4) <strong>Human Checkpoints</strong> - Drag-and-drop approval gates with conditional logic for strategic oversight without blocking automation.</p>
            <p>(5) <strong>Trust Calibration</strong> - Per-agent confidence thresholds based on accuracy tracking and team risk tolerance, adjustable per workflow.</p>*/}  
          </motion.section>

          {/* 07 Testing & Feedback 
          <motion.section variants={itemVariants} className="case-section">
            <span className="section-number"></span>
            <h2>Usability Testing & Validation</h2>
            <div className="section-content">
              
              <p><strong>Key Usability Findings:</strong></p>
              <p>• Timeline Scrubber took 2-3 attempts to learn, but then became intuitive. Users struggled initially because scrubbing is uncommon in B2B tools—solved with inline tutorial.</p>
              <p>• Initial JSON viewer was overwhelming; users needed "summary view first, details on demand." Iterated to 3-level progressive disclosure (summary → schema → raw).</p>
              <p>• Approval workflows required conditional logic that users couldn't remember in modal format; moved to sidebar persistent controls, reducing approval time from 45 seconds to 8 seconds.</p>
              <p>• Trust thresholds too granular at first (per-decision); users preferred per-workflow aggregation. Changed model to reduce cognitive load by 60%.</p>
              <p><strong>Result:</strong> 9.2/10 NPS across pilot users. Zero training required after first 15 minutes. 100% of users said they would switch from existing tools.</p>
            </div>
          </motion.section>

          {/* 08 Final Outcome / Impact 
          <motion.section variants={itemVariants} className="case-section impact-learnings-section">
            <span className="section-number">08 — FINAL OUTCOME & IMPACT</span>
            <h2>Results & Business Impact</h2>
            <div className="impact-content">
              <p><strong>Quantified Impact from 8-Organization Pilot:</strong></p>
              <p>• <strong>85% faster debugging:</strong> Reduced debugging time from 30-60 minutes to 3 minutes using visual navigation and temporal scrubbing.</p>
              <p>• <strong>2.3x faster agent rollouts:</strong> Teams confidently deployed agents 2.3x faster after gaining visibility into failure modes.</p>
              <p>• <strong>22% average AI cost reduction:</strong> Identified and fixed inefficient agent handoffs and redundant decision chains.</p>
              <p>• <strong>63% fewer failures:</strong> Reduced agent failures by 63% in the first month after deploying AgentFlow.</p>
              <p>• <strong>9.2/10 NPS:</strong> Pilot users rated satisfaction 9.2/10. 100% said they would switch from existing tools.</p>
              <p><strong>Strategic Impact:</strong> Addressed Gartner's prediction that 40% of agentic projects will fail by 2027 due to poor orchestration. AgentFlow positioned as essential infrastructure for enterprise agentic AI adoption.</p>
            </div>
          </motion.section> */}

          {/* 09 Reflection */}
          <motion.section variants={itemVariants} className="case-section learnings-section">
            <span className="section-number"></span>
            <h2>Key Learnings & What I'd Do Differently</h2>
            <div className="learnings-cards">
              <motion.div variants={itemVariants} className="learning-card">
                <h4>What I Learned</h4>
                <p>Temporal navigation is a mental model game changer. Teams think about systems evolving over time, not as static states. Also learned that "one-size-fits-all" thresholds fail in production—context matters deeply.</p>
              </motion.div>
              <motion.div variants={itemVariants} className="learning-card">
                <h4>What I Would Improve</h4>
                <p>Started with too many features. A phased approach (MVP: Topology Map + Timeline Scrubber, Phase 2: Handoff Inspector, Phase 3: Trust Calibration) would have reduced complexity and validated core assumptions faster. Also, should have included DevOps engineers as their perspective on monitoring patterns was invaluable.</p>
              </motion.div>
              <motion.div variants={itemVariants} className="learning-card">
                <h4>What This Taught Me</h4>
                <p>The best design solutions emerge from deep problem understanding, not beautiful UI. The 12 interviews and 4 shadowing sessions were worth 100 design iterations. Also, watch how users actually fail, not what they say they need. The shift from modal approvals to sidebar controls came from watching, not asking.</p>
              </motion.div>
            </div>
          </motion.section>

          
        </motion.div>
      )}
    </motion.div>
  )
}
