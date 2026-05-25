import type { CaseStudyData } from '../types'

export const agentflowData: CaseStudyData = {
  title: 'AgentFlow',
  category: 'Web Application',
  image: '/agentflow/hero.png',
  description:
    'AI-powered dashboard for managing and monitoring autonomous agents, providing real-time visualization, debugging, and optimization of multi-agent AI systems in production.',
  result: 'Debugging time reduced by 85% (3 minutes vs. 30-60 minutes), agent deployment velocity increased 2.3x, average 22% reduction in AI costs, 63% decrease in agent failures within first month',
  challenge:
    'Organizations are deploying AI agents at scale but operating in complete darkness. With 88% of organizations embedding AI agents but only 11% in production, teams lack visibility into how multiple agents collaborate. When workflows fail during agent-to-agent handoffs, teams have no way to visualize data flow, understand decision-making, debug failures, or balance automation with human oversight. No visual debugging tools exist for multi-agent systems despite them becoming standard enterprise architecture.',
  solution:
    'AgentFlow acts as "air traffic control" for AI agents through five core features: (1) Agent Topology Map - Live directed graph showing all agents and data flows with health status, (2) Handoff Inspector - Modal showing data schema, actual payloads, transformations, and violations during agent handoffs, (3) Timeline Scrubber - Video-player-style temporal navigation to inspect agent states at any point in time, (4) Human Checkpoints - Drag-and-drop approval gates with conditional logic for strategic oversight, (5) Trust Calibration - Per-agent confidence thresholds based on accuracy tracking and team risk tolerance. All features use minimalist design inspired by developer tools, prioritizing glanceability and progressive disclosure.',
  impact:
    'Pilot testing with 8 organizations showed 85% faster debugging, 2.3x faster agent rollouts, 22% average AI cost reduction after identifying inefficient handoffs, and 63% fewer agent failures. User satisfaction: 9.2/10 NPS. Key insight: debugging failures that took 30-60 minutes through log analysis now takes 3 minutes with visual navigation and temporal scrubbing.',
  process:
    'Conducted 12 in-depth interviews with operations managers and AI product leads, shadowed 4 teams debugging production failures, analyzed competitive developer tools (Langchain, Datadog, New Relic), and researched multi-agent coordination academic literature. Discovered four critical insights: (1) Mental model mismatch between workflow thinking and log-based tools, (2) "Ghost in the machine" - inability to understand agent reasoning chains, (3) Time-based debugging criticality - 80% of failures occur during handoffs, (4) Need for strategic human checkpoints without binary on/off control. Designed with four core principles: Transparency over opacity, glanceability first with progressive disclosure, control without cognitive load, and time as first-class dimension. Built high-fidelity prototypes and iterative user testing addressing design challenges around visual stability, JSON data representation, large dataset performance, and approval friction.',
  tools: ['Figma', 'FigJam', 'Principle', 'React', 'Chrome Extension Development'],
  timeline: '12 weeks (Concept to high-fidelity prototype with user testing)',
  outcome:
    'Created foundational design system for debugging complex multi-agent systems. Proved that developers and operations teams strongly prefer spatial mental models with temporal navigation for system understanding. Identified that trust calibration is deeply personal - same team uses different thresholds per workflow rather than universal confidence settings. This work positions AgentFlow as essential infrastructure for 2026-2027 as agentic AI becomes standard, with Gartner predicting 40% of agentic projects will fail by 2027 due to poor process orchestration.',
}
