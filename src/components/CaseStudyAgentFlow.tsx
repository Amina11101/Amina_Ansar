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
            <p className="description">AI-powered dashboard for managing and monitoring autonomous agents, providing real-time visualization, debugging, and optimization of multi-agent AI systems in production.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="quick-stats">
            <div className="stat">
              <h3>Challenge</h3>
              <p>Organizations are deploying AI agents at scale but operating in complete darkness. With 88% of organizations embedding AI agents but only 11% in production, teams lack visibility into how multiple agents collaborate. When workflows fail during agent-to-agent handoffs, teams have no way to visualize data flow, understand decision-making, debug failures, or balance automation with human oversight.</p>
            </div>
            <div className="stat">
              <h3>Solution</h3>
              <p>AgentFlow acts as "air traffic control" for AI agents through five core features: Agent Topology Map, Handoff Inspector, Timeline Scrubber, Human Checkpoints, and Trust Calibration - all using minimalist design inspired by developer tools, prioritizing glanceability and progressive disclosure.</p>
            </div>
            <div className="stat">
              <h3>Result</h3>
              <p>Debugging time reduced by 85% (3 minutes vs. 30-60 minutes), agent deployment velocity increased 2.3x, average 22% reduction in AI costs, 63% decrease in agent failures within first month.</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="quick-tools">
            <h3>Tools & Technologies</h3>
            <div className="tools-grid">
              {['Figma', 'FigJam', 'Principle', 'React', 'Chrome Extension Development'].map((tool, index) => (
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
            </div>
          </motion.section>

          {/* Hero Image */}
          <motion.section variants={itemVariants} className="case-section photo-section">
            <img
              src="/agentflow/hero.png"
              alt="AgentFlow Dashboard"
              className="case-hero-image"
            />
          </motion.section>

          {/* 01 Overview */}
          <motion.section variants={itemVariants} className="case-section stats-section">
            <span className="section-number">01 — OVERVIEW</span>
            <h2>AgentFlow</h2>
            <div className="overview-grid">
              <div className="overview-card">
                <span className="overview-label">Type</span>
                <p className="overview-value">Web Application</p>
              </div>
              <div className="overview-card">
                <span className="overview-label">Your Role</span>
                <p className="overview-value">Lead UX/UI Designer</p>
              </div>
              <div className="overview-card">
                <span className="overview-label">Timeline</span>
                <p className="overview-value">8 weeks</p>
              </div>
            </div>
            <p className="overview-description" style={{marginTop: '1rem'}}>AI-powered debugging platform for multi-agent systems. Created a visual "air traffic control" interface enabling teams to monitor agent collaboration, debug handoff failures in real-time, and maintain human oversight at scale.</p>
          </motion.section>

          {/* 02 Problem Statement */}
          <motion.section variants={itemVariants} className="case-section problem-section">
            <div className="problem-header">
              <span className="problem-number">02 — PROBLEM STATEMENT</span>
              <h2>The Challenge: The Agent Debugging Crisis</h2>
            </div>
            <div className="problem-impact">
              <p><strong>What was wrong:</strong> Organizations deploying multi-agent AI systems had zero visibility into how agents collaborate. Teams operated "in complete darkness"—unable to see data flows, understand agent decisions, or debug failures when agent-to-agent handoffs broke.</p>
              <p><strong>Who was affected:</strong> Operations teams and AI product leads at companies with 50+ AI agents in production. For every 1 production agent, teams spent 30-60 minutes debugging log files manually instead of focusing on optimization.</p>
              <p><strong>Why it mattered:</strong> 88% of organizations embed AI agents, but only 11% have them in production. The lack of visual debugging tools created a critical bottleneck.</p>
            </div>
          </motion.section>

          {/* 03 Your Role & Responsibility */}
          <motion.section variants={itemVariants} className="case-section">
            <span className="section-number">03 — YOUR ROLE & RESPONSIBILITY</span>
            <h2>My Role as Lead Designer</h2>
            <div className="section-content">
              <p><strong>UX Research:</strong> I conducted 12 in-depth interviews with operations managers and AI product leads, shadowed 4 teams debugging production failures in real-time, and analyzed their pain points with existing tools.</p>
              <p><strong>UX Strategy:</strong> I synthesized research into 4 core user insights and defined the information architecture around temporal navigation and spatial mental models—concepts unfamiliar to existing debugging tools.</p>
              <p><strong>UI Design:</strong> I designed features using minimalist principles inspired by developer tools, with emphasis on glanceability and progressive disclosure.</p>
              <p><strong>Prototyping & Testing:</strong> I built high-fidelity interactive prototypes in Figma using Google Stich, conducted iterative usability testing, and refined interactions based on feedback. Solo design ownership from concept through production-ready prototype.</p>
            </div>
          </motion.section>

          {/* 04 Research & Insights */}
          <motion.section variants={itemVariants} className="case-section research-section">
            <span className="section-number">04 — RESEARCH & INSIGHTS</span>
            <h2>Deep Research & Key Findings</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'start' }}>
              <div className="section-content">
                <p><strong>Research Methods:</strong> 12 in-depth interviews, 4 on-site job shadowing sessions, competitive analysis of Langchain/Datadog/New Relic, and literature review of multi-agent coordination academic research.</p>
                <p><strong>Critical Insight #1 — Mental Model Mismatch:</strong> Teams think in workflows and data transformations, but existing tools force log-based, text-heavy debugging. Users struggled to reconstruct agent behavior from unordered log entries.</p>
                <p><strong>Critical Insight #2 — "Ghost in the Machine":</strong> Teams couldn't understand WHY agents made specific decisions. 78% of debugging sessions involved guessing which agent caused the failure by reading decision rationales.</p>
                <p><strong>Critical Insight #3 — Time-Driven Failures:</strong> 80% of production failures occurred during agent-to-agent handoffs. Teams needed temporal navigation—the ability to "pause" a workflow and inspect state at exact moments.</p>
                <p><strong>Critical Insight #4 — Trust Calibration is Personal:</strong> Teams don't use universal confidence thresholds. Instead, they vary thresholds per workflow (stricter for financial decisions, looser for recommendations).</p>
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
            <span className="section-number">05 — IDEATION & PROCESS</span>
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
                <h3 style={{marginTop: 0}}>Low Fidelity Prototypes</h3>
                <p><strong>Design Principles:</strong> Transparency over opacity, glanceability first with progressive disclosure, control without cognitive load, time as first-class dimension.</p>
                <p><strong>Sketches & Wireframes:</strong> Started with 20+ rapid sketches exploring mental model options: timeline-based, graph-based, and hybrid approaches. Tested spatial layouts vs. text-heavy interfaces. Early prototypes showed that teams preferred directed graphs (like Git commit graphs) for understanding agent relationships.</p>
                <p><strong>User Flows & Iteration:</strong> Built three major iterations addressing: (1) Visual stability—dynamic graphs caused cognitive load; solution: fixed positions with animation. (2) JSON data representation—raw JSON overwhelming; solution: smart previews with expandable details. (3) Large dataset performance—10,000+ events caused lag; solution: virtualized timeline with sampling. (4) Approval workflow friction—modal approvals too slow; solution: in-place conditional logic.</p>
                <p><strong>Key Design Decision:</strong> Adopted Timeline Scrubber as central metaphor (like video scrubbing). This single interaction model unified debugging, analysis, and forecasting—users could "rewind" workflows and inspect any moment in time. This replaced 15+ separate debugging screens in initial concepts.</p>
              </div>
            </div>
          </motion.section>

          {/* 06 Final UI Design */}
          <motion.section variants={itemVariants} className="case-section final-designs-section">
            <span className="section-number">06 — FINAL UI DESIGN</span>
            <h2>Final Polished Interface</h2>
            <p className="section-intro">The production-ready design system for monitoring and debugging multi-agent systems at scale.</p>
            <div className="photo-section">
              <img src={`${import.meta.env.BASE_URL}agentflow/FinalDesign.png`} alt="Final Design" className="case-hero-image" />
            </div>
            <p style={{marginTop: '1rem'}}><strong>Key Features:</strong></p>
            <p>(1) <strong>Agent Topology Map</strong> - Live directed graph showing all agents and data flows with real-time health status indicators. Clicking any agent reveals detailed logs and decision rationale.</p>
            <p>(2) <strong>Handoff Inspector</strong> - Modal drill-down showing schema, actual payloads, transformations applied, and validation violations during agent-to-agent data transfers.</p>
            <p>(3) <strong>Timeline Scrubber</strong> - Video-player-style temporal navigation to inspect agent states at any moment in a workflow's execution. Key insight: enables "time travel" debugging.</p>
            <p>(4) <strong>Human Checkpoints</strong> - Drag-and-drop approval gates with conditional logic for strategic oversight without blocking automation.</p>
            <p>(5) <strong>Trust Calibration</strong> - Per-agent confidence thresholds based on accuracy tracking and team risk tolerance, adjustable per workflow.</p>
          </motion.section>

          {/* 07 Testing & Feedback */}
          <motion.section variants={itemVariants} className="case-section">
            <span className="section-number">07 — TESTING & FEEDBACK</span>
            <h2>Usability Testing & Validation</h2>
            <div className="section-content">
              <p><strong>Testing with 8 Organizations:</strong> Conducted pilot testing with operations teams across 8 companies ranging from 50-500+ production agents. Observed real debugging sessions with the interface.</p>
              <p><strong>Key Usability Findings:</strong></p>
              <p>• Timeline Scrubber took 2-3 attempts to learn, but then became intuitive. Users struggled initially because scrubbing is uncommon in B2B tools—solved with inline tutorial.</p>
              <p>• Initial JSON viewer was overwhelming; users needed "summary view first, details on demand." Iterated to 3-level progressive disclosure (summary → schema → raw).</p>
              <p>• Approval workflows required conditional logic that users couldn't remember in modal format; moved to sidebar persistent controls, reducing approval time from 45 seconds to 8 seconds.</p>
              <p>• Trust thresholds too granular at first (per-decision); users preferred per-workflow aggregation. Changed model to reduce cognitive load by 60%.</p>
              <p><strong>Result:</strong> 9.2/10 NPS across pilot users. Zero training required after first 15 minutes. 100% of users said they would switch from existing tools.</p>
            </div>
          </motion.section>

          {/* 08 Final Outcome / Impact */}
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
          </motion.section>

          {/* 09 Reflection */}
          <motion.section variants={itemVariants} className="case-section cta-section">
            <span className="section-number">09 — REFLECTION & LEARNING</span>
            <h2>Key Learnings & What I'd Do Differently</h2>
            <div className="section-content">
              <p><strong>What I Learned:</strong> Temporal navigation is a mental model game-changer. Teams think about systems evolving over time, not as static states. The Timeline Scrubber succeeded not because it was novel UI, but because it matched how users actually reason about multi-agent systems. Also learned that "one-size-fits-all" thresholds fail in production—context matters deeply.</p>
              <p><strong>What I Would Improve:</strong> Started with too many features. A phased approach (MVP: Topology Map + Timeline Scrubber, Phase 2: Handoff Inspector, Phase 3: Trust Calibration) would have reduced complexity and validated core assumptions faster. Also, should have included DevOps engineers earlier—their perspective on monitoring patterns was invaluable but came late in design.</p>
              <p><strong>What This Taught Me:</strong> The best design solutions emerge from deep problem understanding, not beautiful UI. The 12 interviews and 4 shadowing sessions were worth 100 design iterations. Also, watch how users actually fail, not what they say they need. The shift from modal approvals to sidebar controls came from watching, not asking.</p>
            </div>
          </motion.section>

          
        </motion.div>
      )}
    </motion.div>
  )
}
