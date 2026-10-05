export const profile = {
  firstName: "Muhammed",
  lastName: "Shameel",
  display: "Shameel",
  initials: "MS",
  role: "Data Scientist & ML Engineer",
  typedRoles: [
    "Junior Data Scientist",
    "Junior Machine Learning Engineer",
    "Junior AI Engineer",
    "RAG & LLM Application Builder",
  ],
  summary:
    "Data Scientist and MSc graduate in Data Science and Business Analytics with a BSc in Mathematics, specialising in machine learning, RAG applications and FastAPI development. Hands-on experience building predictive models, end-to-end data processing pipelines and API services — from cleaning and feature engineering through honest model evaluation to containerised deployment with Docker on Vercel, Render and AWS.",
  heroBio:
    "I work end to end — pulling and cleaning the data, engineering features, evaluating the model honestly, then wrapping it in a FastAPI service and a dashboard someone can actually use. Most of my work right now is retrieval-augmented: chunking documents, generating embeddings and wiring vector search so a language model answers from your data instead of guessing.",
  about:
    "Data Scientist and MSc graduate in Data Science and Business Analytics with a BSc in Mathematics, specialising in machine learning, RAG applications and FastAPI development. Hands-on experience building predictive models, data processing pipelines and API services deployed with Docker and cloud platforms — and in explaining what each layer does rather than only running it.",
  resumePath: "/Muhammed_Shameel_Resume.pdf",
  availability: "Available for new opportunities",
}

export const statement = {
  lead: "Models are not the first layer — they are the whole building. I work from the statistics underneath to the API and dashboard on top: cleaning, features and evaluation as carefully as the interface that makes a result usable.",
  body: "I came at data sideways — a Mathematics degree and two years teaching it, which is where I learned to explain a method rather than just run it. Since then: an MSc in Data Science, an agentic-AI internship, and a stack of projects that each ended in something deployed rather than something filed away.",
}

export const stats = [
  { value: 8, label: "Projects shipped", note: "RAG · agents · ML · dashboards" },
  { value: 2, label: "Internships", note: "Agentic AI & cloud data" },
  { value: 4, label: "Certifications", note: "SAS · TIBCO · Kanz AI" },
  { value: 3, label: "Languages", note: "EN · ML · AR" },
]

/* Three short paragraphs under the statement band */
export const bandParagraphs = [
  "Data Scientist and MSc Data Science and Business Analytics graduate with a BSc in Mathematics — machine learning, RAG applications and FastAPI services, built end to end.",
  "I care about the unglamorous half — cleaning, chunking, embedding, evaluating — because a model that cannot be measured honestly is not a model worth shipping.",
  "Everything ends somewhere deployable: a FastAPI service, a Docker image, a Render or Vercel build, a dashboard a non-specialist can read without help.",
]

export const socials = {
  github: "https://github.com/Muhammed-Shameel",
  linkedin: "https://linkedin.com/in/muhammed-shameel",
  email: "muhammedshameel3009@gmail.com",
}

export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
]

/* Every anchored section, in page order — drives the right-edge scroll spine */
export const sectionIds = [
  { id: "hero", label: "Intro" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "achievements", label: "Recognition" },
  { id: "interests", label: "Interests" },
  { id: "contact", label: "Contact" },
]

export const terminalProfile = [
  { indent: 0, tokens: [["kw", "class"], ["plain", " "], ["class", "Shameel"], ["plain", ":"]] },
  { indent: 1, tokens: [["str", "name"], ["plain", " = "], ["val", '"Muhammed Shameel"']] },
  { indent: 1, tokens: [["str", "degree"], ["plain", " = "], ["val", '"MSc Data Science"']] },
  { indent: 1, tokens: [["str", "role"], ["plain", " = "], ["val", '"AI Engineer"']] },
  { indent: 1, tokens: [["str", "focus"], ["plain", " = ["]] },
  { indent: 2, tokens: [["val", '"Machine Learning",']] },
  { indent: 2, tokens: [["val", '"RAG & LLM Systems",']] },
  { indent: 2, tokens: [["val", '"Agentic Workflows",']] },
  { indent: 2, tokens: [["val", '"Backend APIs",']] },
  { indent: 2, tokens: [["val", '"Data Pipelines"']] },
  { indent: 1, tokens: [["plain", "]"]] },
]

export const experiences = [
  {
    role: "Agentic AI Intern",
    org: "InfoCreon Solutions Private Limited",
    period: "July 2026 – September 2026",
    location: "Kerala, India",
    status: "valid",
    bullets: [
      "Training in AI agents and multi-agent systems",
      "LLM applications development",
      "Workflow automation",
      "Real-world AI solution development",
    ],
  },
  {
    role: "Cloud & Data Visualization Engineering Intern",
    org: "InfoCreon Solutions Private Limited",
    period: "May 2026 – July 2026",
    location: "Kerala, India",
    status: "valid",
    bullets: [
      "Developed AI-driven software solutions",
      "Built backend services using Python and FastAPI",
      "Data preprocessing and feature engineering",
      "Statistical analysis and model evaluation",
      "Cloud deployment (Docker, Git, Render, Vercel)",
    ],
  },
  {
    role: "Mathematics Tutor",
    org: "Self-employed",
    period: "July 2023 – March 2024",
    location: "Remote",
    status: "valid",
    bullets: [
      "Delivered one-to-one mathematics tutoring",
      "Helped undergraduate and high-school students improve academic performance",
    ],
  },
]

export const skillGroups = [
  {
    title: "Programming Language & Core",
    items: [
      "Python",
      "SQL",
      "Linear Algebra",
      "Probability & Statistics",
      "Hypothesis Testing",
      "Regression",
    ],
  },
  {
    title: "Machine Learning & Analytics",
    items: [
      "Scikit-learn",
      "TensorFlow",
      "Keras",
      "PyTorch",
      "Random Forest",
      "XGBoost",
      "Model Evaluation",
      "Hyperparameter Tuning",
    ],
  },
  {
    title: "AI & LLM Architecture",
    items: [
      "RAG",
      "LangGraph",
      "Vector Embeddings",
      "Semantic Chunking",
      "Metadata Engineering",
      "Prompt Engineering",
    ],
  },
  {
    title: "Backend & Cloud Tools",
    items: [
      "FastAPI",
      "Docker",
      "AWS Fundamentals",
      "Git",
      "Matplotlib",
      "Seaborn",
      "Tableau",
    ],
  },
]

/* Condensed line under the capability list — the short version of the groups */
export const stackLine =
  "Python · SQL · PyTorch · Scikit-learn · RAG · LangGraph · FastAPI · Docker · Tableau"

export const projects = [
  {
    title: "Grocery AI",
    description:
      "RAG assistant for grocery storage — semantic chunking, embeddings and vector search served from a FastAPI backend.",
    href: "https://grocery-ai-mkti.vercel.app/",
    repo: "https://github.com/Muhammed-Shameel/Grocery-AI",
    status: "run",
    statusLabel: "Live",
    tech: ["Python", "RAG", "FastAPI", "Vercel"],
    categories: ["RAG & LLM", "API & Apps"],
    period: "2026",
    outcome: "Deployed on Vercel with a retrieval answer loop over a grocery storage corpus.",
  },
  {
    title: "Gym Intelligence Platform",
    description:
      "Agentic AI platform: stateful LangGraph workflows that synthesise member, trainer and operational data into business reports, behind FastAPI endpoints that pair rule-based logic with LLM reasoning.",
    href: "https://github.com/Muhammed-Shameel/Gym-Intelligence-Platform",
    status: "valid",
    statusLabel: "Shipped",
    tech: ["LangGraph", "FastAPI", "LLM", "Python"],
    categories: ["RAG & LLM", "API & Apps"],
    period: "07/2026 – 09/2026",
    outcome: "Built during the Agentic AI internship — multi-agent state graph plus report generation.",
  },
  {
    title: "FLUVIO",
    description: "AI-powered flood intelligence dashboard.",
    href: "https://github.com/Muhammed-Shameel/Flood-Intelligence-Dashboard",
    status: "valid",
    statusLabel: "Shipped",
    tech: ["Python", "Dashboard", "ML"],
    categories: ["ML", "Analytics"],
    period: "2026",
    outcome: "Flood-risk analysis surfaced as a decision dashboard rather than a notebook.",
  },
  {
    title: "Football Analysis",
    description: "ML analysis of Premier League players.",
    href: "https://github.com/Muhammed-Shameel/football-player-analysis",
    status: "valid",
    statusLabel: "Shipped",
    tech: ["Scikit-learn", "Pandas", "Visualization"],
    categories: ["ML", "Analytics"],
    period: "2025",
    outcome: "Latent performance metrics derived from player statistics and compared visually.",
  },
  {
    title: "CSIRO Biomass",
    description: "Machine Learning regression project for biomass prediction.",
    href: "https://github.com/Muhammed-Shameel/CSIRO-Biomass-Prediction-using-Machine-Learning",
    status: "valid",
    statusLabel: "Shipped",
    tech: ["Regression", "XGBoost", "Feature Engineering"],
    categories: ["ML"],
    period: "2025",
    outcome: "Gradient-boosted regression with feature engineering on the public CSIRO image/biomass task.",
  },
  {
    title: "Brazil E-commerce Analytics",
    description: "End-to-end analytics platform built on MySQL and Python.",
    href: "https://github.com/Muhammed-Shameel/brazil_ecommerce-data_analysis",
    status: "valid",
    statusLabel: "Shipped",
    tech: ["MySQL", "Python", "Tableau"],
    categories: ["Analytics"],
    period: "2025",
    outcome: "SQL-layer cleaning and ordering analysis published as a Tableau report.",
  },
  {
    title: "Planner AI",
    description: "AI-powered intelligent study planning application.",
    href: "https://github.com/Muhammed-Shameel/AI-Planner",
    status: "valid",
    statusLabel: "Shipped",
    tech: ["LLM", "Prompt Engineering", "Python"],
    categories: ["RAG & LLM", "API & Apps"],
    period: "2025",
    outcome: "Study schedule generation driven by structured prompts and syllabus input.",
  },
  {
    title: "Cyber Incident Tracker",
    description: "Cybersecurity intelligence dashboard for SEC EDGAR disclosures.",
    href: "https://github.com/Muhammed-Shameel/POC-68--Cyber-Incident-Disclosure-Tracker-Muhammed-Shameel-Phase2",
    status: "valid",
    statusLabel: "Shipped",
    tech: ["SEC EDGAR", "Dashboard", "Python"],
    categories: ["Analytics", "API & Apps"],
    period: "2025",
    outcome: "Filings parsed into a trackable incident view for the SEC proof-of-concept brief.",
  },
]

export const education = [
  {
    tag: "Postgraduate · Graduated March 2026",
    degree: "MSc Data Science and Business Analytics",
    institution:
      "Asia Pacific University of Technology & Innovation (Malaysia)",
    meta: "GPA: 3.62",
    icon: "fa-graduation-cap",
    note: "Statistics → machine learning → deployment. Every layer of the syllabus turned into a tool I could actually ship with.",
  },
  {
    tag: "Undergraduate · Graduated April 2024",
    degree: "BSc Mathematics",
    institution:
      "Kottakkal Farook Arts and Science College, University of Calicut",
    meta: null,
    icon: "fa-book",
    note: "Linear algebra, probability and optimisation — the part of ML I do not have to take on faith.",
  },
]

export const achievements = [
  {
    title: "Kanz AI Training Hackathon",
    detail: "AI Showcase Featured Project.",
  },
]

export const certificates = [
  "SAS Professional",
  "TIBCO Professional",
  "SAS–APU Joint Certificate in Data Science",
  "Kanz AI Training Hackathon Completion",
]

export const interests = [
  "Machine Learning",
  "AI",
  "Data Engineering",
  "NLP",
  "Computer Vision",
  "Math",
  "Statistics",
]

export const interestsExtra = [
  {
    title: "Writing",
    detail:
      "Breakdowns of RAG pipelines and model-evaluation traps — because explaining a method is how I check I understand it.",
  },
  {
    title: "Open Source",
    detail:
      "Everything I build goes on GitHub, notebooks and all, so the working-out is visible and not just the demo.",
  },
  {
    title: "Teaching",
    detail:
      "Two years of one-to-one mathematics tutoring still shapes how I present results to non-technical audiences.",
  },
]

export const languages = ["English", "Malayalam", "Arabic"]

/* Words for the paper marquee strip */
export const marqueeWords = [
  "Python",
  "Machine Learning",
  "RAG",
  "FastAPI",
  "Vector Embeddings",
  "Hyperparameter Tuning",
  "Hypothesis Testing",
  "Docker",
  "Tableau",
]
