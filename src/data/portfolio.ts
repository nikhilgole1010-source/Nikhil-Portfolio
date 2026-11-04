/**
 * Central portfolio data for Nikhil's portfolio.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Nikhil Rajesh Gole',
  displayName: 'Nikhil',
  firstName: 'NIKHIL',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A GOLE ORIGINAL',
  role: 'Cloud and DevOps Engineer',
  tagline: ['Lead Infra & DevOps Engineer', 'Cloud', 'Automation'],
  intro:
    'I am a Lead Infrastructure & DevOps Engineer at Avinya Technologies, specializing in Linux server administration, CI/CD automation, cloud infrastructure, Docker, and production deployments. Passionate about infrastructure automation, monitoring, security, and exploring AI-powered technologies.',
  location: 'Satara, Maharashtra',
  email: 'nikhilgole1010@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/nikhil-gole-6621231a6?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    github: 'https://github.com/nikhilgole1010-source',
  },
  resumePdf: '/assets/Nikhil_Gole_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Nikhil Rajesh Gole',
  },
  interests: ['Cloud Infrastructure', 'DevOps Automation', 'Monitoring & Security'],
};

export const education = [
  {
    school: 'Smt. Meenalben Mehta College',
    place: 'Panchgani',
    degree: 'Bachelor of Science (B.Sc.)',
    period: '2026',
    score: 'CGPA 7.5',
  },
];

export const experience = [
  {
    company: 'Avinya Technologies',
    role: 'Lead Infra & DevOps Engineer',
    place: 'Pune',
    period: 'Aug 25, 2025 – Present',
    points: [
      'Manage multiple Linux and Windows servers across DEV and PROD environments with application deployments, production troubleshooting and infrastructure maintenance.',
      'Build CI/CD and containerized deployment workflows using GitLab CE, GitLab Runners, Docker, Docker Compose, Nginx, IIS and Nginx Proxy Manager.',
      'Work with Microsoft Azure, AWS S3 integration, PostgreSQL, Microsoft SQL Server, Prometheus, Grafana, Alertmanager, Loki, Alloy, Trivy, SSL, Certbot, Azure Key Vault, NetBird, OpenVPN, firewalls and VPNs.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'production-infrastructure',
    title: 'Production Infrastructure Operations',
    year: '2025–Present',
    genre: 'Infrastructure • Cloud • Production',
    logline: 'Production server administration, cloud integrations, networking, SSL, databases and application hosting across Linux and Windows environments.',
    stack: ['Linux', 'Windows Server', 'Microsoft Azure', 'AWS S3', 'PostgreSQL', 'Microsoft SQL Server', 'Nginx', 'IIS'],
    build: [
      'Managed multiple Linux and Windows servers across DEV and PROD environments with cloud integrations, application hosting and database operations.',
      'Troubleshot production issues and maintained infrastructure across PostgreSQL, Microsoft SQL Server, Nginx, IIS, SSL and networking layers.',
    ],
    features: [
      'Linux and Windows server administration',
      'Microsoft Azure and AWS S3 integration exposure',
      'PostgreSQL and Microsoft SQL Server management',
      'Nginx, IIS and Nginx Proxy Manager hosting',
      'Production troubleshooting',
    ],
    metrics: [
      { value: 'DEV/PROD', label: 'deployment environments' },
      { value: 'Multi', label: 'Linux & Windows servers' },
    ],
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'cicd-automation',
    title: 'CI/CD Automation Platform',
    year: '2025–Present',
    genre: 'DevOps • GitLab • Docker',
    logline: 'Automated build and deployment workflows using GitLab CE, GitLab Runners, Docker and Docker Compose.',
    stack: ['GitLab CE', 'GitLab Runners', 'Docker', 'Docker Compose', 'CI/CD'],
    build: [
      'Designed and implemented CI/CD pipelines using GitLab CE and GitLab Runners for multiple application deployments across DEV and PROD.',
      'Used Docker and Docker Compose to standardize deployments and improve release consistency across Linux-based environments.',
    ],
    features: [
      'Automated build pipelines',
      'Runner-based deployment workflows',
      'Containerized application delivery',
      'Docker Compose environments',
    ],
    metrics: [
      { value: 'CI/CD', label: 'automated deployments' },
      { value: 'Docker', label: 'containerized delivery' },
    ],
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'monitoring-security',
    title: 'Monitoring & Security Stack',
    year: '2025–Present',
    genre: 'Observability • Security • DevOps',
    logline: 'Infrastructure monitoring, alerting, logging and security scanning for production systems.',
    stack: ['Prometheus', 'Grafana', 'Alertmanager', 'Loki', 'Alloy', 'Trivy', 'Certbot', 'Azure Key Vault'],
    build: [
      'Implemented centralized monitoring and logging infrastructure using Prometheus, Grafana, Alertmanager, Loki and Alloy.',
      'Supported security and certificate workflows using Trivy, SSL, Certbot and Azure Key Vault while maintaining production reliability.',
    ],
    features: [
      'Metrics monitoring',
      'Alerting workflows',
      'Centralized logging',
      'Security scanning',
      'SSL and certificate automation',
      'Performance troubleshooting',
    ],
    metrics: [
      { value: '8+', label: 'observability/security tools' },
      { value: 'Prod', label: 'production-focused monitoring' },
    ],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
  {
    id: 'self-hosted-ai-infrastructure',
    title: 'Self-Hosted AI Infrastructure',
    year: '2026',
    genre: 'AI Infra • Homelab • GPU',
    logline: 'Private local AI infrastructure for hosting and testing open-source LLMs with Ollama and Open WebUI.',
    stack: ['Proxmox', 'Ubuntu', 'Ollama', 'Open WebUI', 'NVIDIA GTX 1060', 'GT 730'],
    build: [
      'Created virtual machines for local AI model hosting inside private infrastructure.',
      'Deployed Qwen 2.5 1.5B and 3B models using Ollama and experimented with GPU-based inference for self-hosted LLM environments.',
    ],
    features: [
      'Private self-hosted AI stack',
      'Virtual machines for model hosting',
      'Qwen 2.5 1.5B and 3B deployments',
      'Open WebUI interface',
      'GPU-based inference experiments',
    ],
    metrics: [
      { value: '2', label: 'Qwen model sizes tested' },
      { value: 'Private', label: 'self-hosted infrastructure' },
    ],
    palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' },
    motif: 'shield',
  },
  {
    id: 'ai-powered-devops-assistant',
    title: 'AI-Powered DevOps Assistant',
    year: '2026',
    genre: 'Azure AI • DevOps • Automation',
    logline: 'AI-powered assistant concept for DevOps troubleshooting and infrastructure support using Azure AI Foundry.',
    stack: ['Azure AI Foundry', 'GPT Models', 'Docker Compose', 'Ubuntu', 'Nginx'],
    build: [
      'Deployed an AI model using Azure AI Foundry and configured API integration for model endpoint testing.',
      'Explored a DevOps assistant workflow for troubleshooting, infrastructure support and operational guidance.',
    ],
    features: [
      'Azure AI Foundry model deployment',
      'API endpoint integration',
      'Model endpoint testing',
      'Docker Compose environment',
      'Nginx and Ubuntu-based setup',
    ],
    metrics: [
      { value: 'AI', label: 'DevOps troubleshooting assistant' },
      { value: 'API', label: 'endpoint integration tested' },
    ],
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'flow',
  },
  {
    id: 'proxmox-homelab',
    title: 'Proxmox Homelab',
    year: '2026',
    genre: 'Virtualization • Homelab • DevOps',
    logline: 'Private Proxmox VE homelab for virtual machines, isolated environments and GPU-based infrastructure testing.',
    stack: ['Proxmox VE', 'Linux', 'Windows Server', 'Docker', 'GPU Passthrough'],
    build: [
      'Created and managed multiple virtual machines across Linux and Windows Server environments.',
      'Experimented with resource allocation, GPU passthrough and isolated environments for infrastructure and AI testing.',
    ],
    features: [
      'Multiple VM environments',
      'Linux and Windows Server labs',
      'Docker-based testing',
      'GPU passthrough experiments',
      'Isolated infrastructure and AI environments',
    ],
    metrics: [
      { value: 'VMs', label: 'multi-environment lab' },
      { value: 'GPU', label: 'passthrough experiments' },
    ],
    palette: { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'lead-devops',
    title: 'Lead Infra & DevOps Engineer',
    org: 'Avinya Technologies',
    detail: 'Led infrastructure operations, CI/CD automation, monitoring, security scanning and production troubleshooting.',
    laurel: 'DevOps Lead',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Operating Systems',
    subtitle: 'Production administration',
    skills: [
      { name: 'Linux', mono: 'Ln', note: 'Primary' },
      { name: 'Ubuntu', mono: 'Ub' },
      { name: 'Windows Server', mono: 'Ws' },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps',
    subtitle: 'Build, ship and release',
    skills: [
      { name: 'GitLab CE', mono: 'Gl' },
      { name: 'GitLab Runners', mono: 'Gr' },
      { name: 'CI/CD', mono: 'Ci' },
      { name: 'Docker', mono: 'Dk' },
      { name: 'Docker Compose', mono: 'Dc' },
      { name: 'Nginx', mono: 'Nx' },
      { name: 'IIS', mono: 'Iis' },
      { name: 'Nginx Proxy Manager', mono: 'Npm' },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud',
    subtitle: 'Azure and integrations',
    skills: [
      { name: 'Microsoft Azure', mono: 'Az' },
      { name: 'AWS S3 Integration', mono: 'S3' },
      { name: 'Azure Key Vault', mono: 'Kv' },
      { name: 'Cloud Infrastructure', mono: 'Cl' },
    ],
  },
  {
    id: 'monitoring',
    title: 'Monitoring',
    subtitle: 'Metrics, logs and alerts',
    skills: [
      { name: 'Prometheus', mono: 'Pr' },
      { name: 'Grafana', mono: 'Gf' },
      { name: 'Alertmanager', mono: 'Al' },
      { name: 'Loki', mono: 'Lk' },
      { name: 'Grafana Alloy', mono: 'Ga' },
    ],
  },
  {
    id: 'infra',
    title: 'Infrastructure',
    subtitle: 'Production operations',
    skills: [
      { name: 'Server Administration', mono: 'Sa' },
      { name: 'Networking', mono: 'Nw' },
      { name: 'SSL Certificates', mono: 'Ssl' },
      { name: 'Application Hosting', mono: 'Ah' },
      { name: 'Production Troubleshooting', mono: 'Pt' },
      { name: 'Firewall', mono: 'Fw' },
      { name: 'VPN', mono: 'Vpn' },
      { name: 'NetBird', mono: 'Nb' },
      { name: 'OpenVPN', mono: 'Ov' },
      { name: 'Proxmox VE', mono: 'Px' },
      { name: 'GPU Passthrough', mono: 'Gpu' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Management and operations',
    skills: [
      { name: 'Database Management', mono: 'Db' },
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'Microsoft SQL Server', mono: 'Ms' },
    ],
  },
  {
    id: 'security',
    title: 'Security',
    subtitle: 'Scanning and hardening',
    skills: [
      { name: 'Trivy', mono: 'Tv' },
      { name: 'Infrastructure Security', mono: 'Is' },
      { name: 'SSL', mono: 'Ssl' },
      { name: 'Certbot', mono: 'Cb' },
    ],
  },
  {
    id: 'ai-infra',
    title: 'AI Infrastructure',
    subtitle: 'Self-hosted and cloud AI experiments',
    skills: [
      { name: 'Azure AI Foundry', mono: 'Az' },
      { name: 'GPT Models', mono: 'Gpt' },
      { name: 'Ollama', mono: 'Ol' },
      { name: 'Open WebUI', mono: 'Ow' },
      { name: 'Qwen Models', mono: 'Qw' },
      { name: 'NVIDIA GPUs', mono: 'Nv' },
    ],
  },
  {
    id: 'interests',
    title: 'Interests',
    subtitle: 'Next arc',
    skills: [
      { name: 'Cloud Infrastructure', mono: 'Cl' },
      { name: 'DevOps Automation', mono: 'Da' },
      { name: 'Monitoring & Security', mono: 'Ms' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  Linux: ['Production Infrastructure Operations'],
  Ubuntu: ['Self-Hosted AI Infrastructure', 'AI-Powered DevOps Assistant'],
  'Windows Server': ['Production Infrastructure Operations'],
  'GitLab CE': ['CI/CD Automation Platform'],
  'GitLab Runners': ['CI/CD Automation Platform'],
  'CI/CD': ['CI/CD Automation Platform'],
  Docker: ['CI/CD Automation Platform'],
  'Docker Compose': ['CI/CD Automation Platform', 'AI-Powered DevOps Assistant'],
  Nginx: ['AI-Powered DevOps Assistant'],
  IIS: ['Production Infrastructure Operations'],
  'Nginx Proxy Manager': ['Production Infrastructure Operations'],
  'Microsoft Azure': ['Production Infrastructure Operations', 'AI-Powered DevOps Assistant'],
  'AWS S3 Integration': ['Production Infrastructure Operations'],
  'Azure Key Vault': ['Monitoring & Security Stack'],
  'Cloud Infrastructure': ['Production Infrastructure Operations', 'AI-Powered DevOps Assistant'],
  Prometheus: ['Monitoring & Security Stack'],
  Grafana: ['Monitoring & Security Stack'],
  Alertmanager: ['Monitoring & Security Stack'],
  Loki: ['Monitoring & Security Stack'],
  'Grafana Alloy': ['Monitoring & Security Stack'],
  Trivy: ['Monitoring & Security Stack'],
  Networking: ['Production Infrastructure Operations'],
  'SSL Certificates': ['Production Infrastructure Operations'],
  SSL: ['Monitoring & Security Stack', 'Production Infrastructure Operations'],
  Certbot: ['Monitoring & Security Stack'],
  'Application Hosting': ['Production Infrastructure Operations'],
  'Production Troubleshooting': ['Production Infrastructure Operations'],
  Firewall: ['Production Infrastructure Operations'],
  VPN: ['Production Infrastructure Operations'],
  NetBird: ['Production Infrastructure Operations'],
  OpenVPN: ['Production Infrastructure Operations'],
  'Database Management': ['Production Infrastructure Operations'],
  PostgreSQL: ['Production Infrastructure Operations'],
  'Microsoft SQL Server': ['Production Infrastructure Operations'],
  'Proxmox VE': ['Self-Hosted AI Infrastructure', 'Proxmox Homelab'],
  'GPU Passthrough': ['Proxmox Homelab'],
  'Azure AI Foundry': ['AI-Powered DevOps Assistant'],
  'GPT Models': ['AI-Powered DevOps Assistant'],
  Ollama: ['Self-Hosted AI Infrastructure'],
  'Open WebUI': ['Self-Hosted AI Infrastructure'],
  'Qwen Models': ['Self-Hosted AI Infrastructure'],
  'NVIDIA GPUs': ['Self-Hosted AI Infrastructure', 'Proxmox Homelab'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: 'Education',
    synopsis: 'B.Sc. foundation at Smt. Meenalben Mehta College, Panchgani with a CGPA of 7.5.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Academic Base',
        description: 'Bachelor of Science at Smt. Meenalben Mehta College, Panchgani — listed with a CGPA of 7.5.',
        tags: ['B.Sc.', 'CGPA 7.5', 'Panchgani'],
        runtime: '2026',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Lead Infra & DevOps',
    period: 'Aug 2025 – Present',
    synopsis: 'Currently working as Lead Infra & DevOps Engineer at Avinya Technologies, Pune.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Infrastructure Lead',
        description: 'Manage multiple Linux and Windows servers with DEV/PROD deployments, cloud integrations, databases, networking and application hosting.',
        tags: ['Linux', 'Windows', 'Azure', 'AWS S3'],
        runtime: 'Avinya Technologies',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'The Automation Builder',
        description: 'Designed CI/CD deployment workflows using GitLab CE, GitLab Runners, Docker, Docker Compose, Nginx, IIS and Nginx Proxy Manager.',
        tags: ['GitLab CE', 'CI/CD', 'Docker', 'Nginx'],
        runtime: 'Deployments',
        palette: crimson,
      },
      {
        code: 'S02 E03',
        title: 'The Observer',
        description: 'Implemented monitoring, logging and security workflows with Prometheus, Grafana, Alertmanager, Loki, Alloy, Trivy, SSL, Certbot and Azure Key Vault.',
        tags: ['Prometheus', 'Grafana', 'Loki', 'Trivy'],
        runtime: 'Monitoring & Security',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'Production Systems',
    period: 'Now streaming',
    synopsis: 'Hands-on production operations across infrastructure, deployments, observability, networking and troubleshooting.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Production Troubleshooter',
        description: 'Troubleshot production issues and maintained infrastructure across DEV/PROD applications, databases, web servers, firewalls and VPNs.',
        tags: ['Production', 'Troubleshooting', 'Firewall', 'VPN'],
        runtime: 'Operations',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'The Host',
        description: 'Handled application hosting, SSL, Certbot, Nginx, IIS, PostgreSQL and Microsoft SQL Server operations.',
        tags: ['Hosting', 'SSL', 'PostgreSQL', 'MS SQL'],
        runtime: 'Infrastructure',
        palette: violet,
      },
      {
        code: 'S03 E03',
        title: 'The Deployer',
        description: 'Streamlined multiple application deployments with GitLab-based automation and containerized workflows.',
        tags: ['GitLab', 'Docker', 'Docker Compose'],
        runtime: 'CI/CD',
        palette: jade,
      },
    ],
  },
  {
    number: 4,
    title: 'Homelab & AI Infrastructure',
    period: '2026',
    synopsis: 'Personal projects focused on Proxmox virtualization, self-hosted AI and Azure AI-powered DevOps workflows.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Self-Hosted AI Lab',
        description: 'Built private AI infrastructure with Proxmox, Ubuntu, Ollama, Open WebUI and NVIDIA GPUs for Qwen model hosting.',
        tags: ['Proxmox', 'Ollama', 'Open WebUI', 'Qwen'],
        runtime: 'Private infra',
        palette: violet,
      },
      {
        code: 'S04 E02',
        title: 'The AI DevOps Assistant',
        description: 'Deployed an AI model using Azure AI Foundry and tested API endpoints for DevOps troubleshooting workflows.',
        tags: ['Azure AI Foundry', 'GPT', 'Docker Compose', 'Nginx'],
        runtime: 'AI assistant',
        palette: jade,
      },
      {
        code: 'S04 E03',
        title: 'The Proxmox Homelab',
        description: 'Created multiple VMs and experimented with resource allocation, GPU passthrough and isolated infrastructure testing environments.',
        tags: ['Proxmox VE', 'Linux', 'Windows Server', 'GPU Passthrough'],
        runtime: 'Homelab',
        palette: ocean,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'The next arc focuses on deeper cloud infrastructure, DevOps automation, monitoring and security.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Chapter',
        description: 'Exploring cloud infrastructure, DevOps automation, observability, AI infrastructure and security practices.',
        tags: ['Cloud', 'DevOps', 'AI Infra', 'Security'],
        runtime: 'In production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Current role', title: 'Lead DevOps', detail: 'Lead Infra & DevOps Engineer', palette: amber },
  { label: 'Company', title: 'Avinya', detail: 'Avinya Technologies • Pune', palette: crimson },
  { label: 'Status', title: 'Current', detail: 'Working since Aug 25, 2025', palette: ocean },
  { label: 'Education', title: 'B.Sc.', detail: 'Smt. Meenalben Mehta College • CGPA 7.5', palette: violet },
  { label: 'Cloud', title: 'Azure', detail: 'Microsoft Azure and AWS S3 integration', palette: jade },
  { label: 'Databases', title: 'DB Ops', detail: 'PostgreSQL and Microsoft SQL Server', palette: amber },
  { label: 'Networking', title: 'VPN', detail: 'NetBird, OpenVPN, firewall and VPN', palette: crimson },
  { label: 'Monitoring', title: 'Grafana', detail: 'Prometheus, Grafana, Alertmanager', palette: ocean },
  { label: 'Security', title: 'Trivy', detail: 'Security scanning and infra security', palette: jade },
  { label: 'Containers', title: 'Docker', detail: 'Docker and Docker Compose deployments', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'Academic Foundation',
    lines: ['B.Sc. · Smt. Meenalben Mehta College, Panchgani', '2026 · CGPA 7.5'],
    chips: ['B.Sc.', 'CGPA 7.5'],
  },
  {
    kicker: 'Skills',
    title: 'Infra first.',
    lines: ['Linux, Windows Server · Azure, AWS S3, Networking, SSL', 'GitLab CE, GitLab Runners · Docker, Docker Compose · Nginx, IIS'],
    chips: ['Linux', 'Azure', 'GitLab', 'Docker', 'SSL'],
  },
  {
    kicker: 'Experience',
    title: 'The DevOps Arc',
    lines: ['Lead Infra & DevOps Engineer', 'Avinya Technologies · Pune · Aug 25, 2025 – Present', 'DEV/PROD deployments · CI/CD · Monitoring · Security'],
  },
  {
    kicker: 'Work',
    title: 'Six Originals',
    lines: ['Production Infrastructure · CI/CD Automation · Monitoring & Security', 'Self-Hosted AI Infrastructure · AI DevOps Assistant · Proxmox Homelab'],
  },
  {
    kicker: 'AI Infrastructure',
    title: 'Private labs. Real experiments.',
    lines: ['Qwen 2.5 1.5B and 3B with Ollama', 'Azure AI Foundry model deployment and endpoint testing'],
  },
  {
    kicker: 'Monitoring',
    title: 'Always Watching',
    lines: ['Prometheus · Grafana · Alertmanager', 'Loki · Grafana Alloy · Trivy'],
  },
  {
    kicker: 'Current mission',
    title: 'Now exploring',
    lines: ['Cloud Infrastructure · DevOps Automation · Monitoring & Security'],
  },
];

export type ProfileId = 'nikhil' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'nikhil',
    name: 'Nikhil',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & training', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • DevOps & AI Infra`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
