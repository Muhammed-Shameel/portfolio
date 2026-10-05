export const profile = {
  firstName: "Muhammed",
  lastName: "Shameel",
  display: "Shameel",
  initials: "MS",
  role: "Data Scientist & AI Engineer",
  typedRoles: [
    "Data Scientist",
    "AI Engineer",
    "Machine Learning Engineer",
    "Agentic AI & RAG Builder",
  ],
  /* Canonical short positioning — mirrored in index.html metadata */
  summary:
    "Data Scientist and AI Engineer with a foundation in Mathematics and Data Science. I build end-to-end machine learning, RAG and agentic AI systems, from data and evaluation to APIs and deployable applications.",
  about:
    "Data Scientist and AI Engineer. BSc in Mathematics, MSc in Data Science & Business Analytics specialising in Data Engineering, with applied work across machine learning, deep learning, RAG and agentic AI. I build the systems around the model — data quality, features and honest evaluation, retrieval and orchestration, then the FastAPI service and the interface on top — and take the work as far as a Dockerised, deployed build rather than leaving it in a notebook.",
  heroBio:
    "I work on the layers around the model — data quality, features and honest evaluation, then the retrieval pipeline, the API and the interface that make a result usable. Most of my recent work is agentic: LangGraph workflows, embeddings and document processing, and LLM applications grounded in the right context before they answer.",
  resumePath: "/Muhammed_Shameel_Resume.pdf",
  availability: "Available for new opportunities",
}

export const statement = {
  lead: "I came to data science through mathematics. My BSc gave me the statistics and the analytical habits I still lean on, and teaching mathematics is where I learned to understand a method well enough to explain it — not simply run it. That led into an MSc in Data Science & Business Analytics, specialising in Data Engineering, and into applied work across machine learning, deep learning, RAG and agentic AI.",
  body: "I build the systems around a model, not only the model: cleaning and structuring data, engineering features, evaluating honestly, then the retrieval pipeline, the API and the interface that make the result usable. For AI applications that means grounding before generation — getting the right data, documents and context into the system before asking a language model for an answer.",
  contact: "I am after work where data quality, model evaluation and orchestration are all taken seriously. If you have a dataset nobody has finished with, or a RAG system that keeps hallucinating, I would like to hear about it.",
}

export const stats = [
  { value: 8, label: "Projects shipped", note: "RAG · agents · ML · dashboards" },
  { value: 2, label: "Internships", note: "Agentic AI & cloud data" },
  { value: 4, label: "Certifications", note: "SAS · TIBCO · Kanz AI" },
  { value: 2, label: "Languages", note: "EN · ML" },
]

/* Three short paragraphs under the statement band */
export const bandParagraphs = [
  "The path so far runs from mathematics and statistics into data science, machine learning and deep learning, then on through RAG and agentic AI to deployment. Recent work sits in orchestration and grounded LLM applications, built on the data science underneath.",
  "I care about the less visible parts of the work — data quality, cleaning, feature engineering, evaluation, failure cases, reproducibility — because they decide whether a result can be trusted.",
  "Whenever practical, work ends somewhere usable: a FastAPI service, a Docker image, a deployed build, or a React or Next.js interface someone else can open and read.",
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
  { indent: 1, tokens: [["str", "background"], ["plain", " = "], ["val", '"BSc Mathematics"']] },
  { indent: 1, tokens: [["str", "degree"], ["plain", " = "], ["val", '"MSc Data Science"']] },
  { indent: 1, tokens: [["str", "specialism"], ["plain", " = "], ["val", '"Data Engineering"']] },
  { indent: 1, tokens: [["str", "role"], ["plain", " = "], ["val", '"Data Scientist & AI Engineer"']] },
  { indent: 1, tokens: [["str", "focus"], ["plain", " = ["]] },
  { indent: 2, tokens: [["val", '"Machine Learning",']] },
  { indent: 2, tokens: [["val", '"Deep Learning",']] },
  { indent: 2, tokens: [["val", '"RAG & Embeddings",']] },
  { indent: 2, tokens: [["val", '"Agentic Workflows",']] },
  { indent: 2, tokens: [["val", '"FastAPI Services"']] },
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

export const languages = ["English", "Malayalam"]

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
