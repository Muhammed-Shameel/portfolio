export const profile = {
  firstName: "Muhammed",
  lastName: "Shameel",
  display: "Shameel",
  initials: "MS",
  role: "Data Scientist",
  typedRoles: [
    "Data Scientist",
    "Mathematics → Machine Learning",
    "Applied AI in progress",
    "ML Engineer (learning)",
  ],
  /* Canonical short positioning — mirrored in index.html metadata */
  summary:
    "Data Scientist with a BSc in Mathematics and an MSc in Data Science & Business Analytics. I came to machine learning through mathematics and statistics, and I am deliberately turning that foundation into practical ML, deep-learning and applied-AI systems.",
  about:
    "I did not start in software engineering and discover ML later. I started with mathematics — linear algebra, probability, statistics, optimisation — and moved into data science from there. My BSc gave me the reasoning underneath the models; my MSc in Data Science & Business Analytics, specialising in Data Engineering, is where I learned to build with it. I work the full line: data and assumptions, features and models, honest evaluation, then the FastAPI service and interface that make a result usable.",
  heroBio:
    "Mathematics gave me the foundation. Machine learning is where I am learning to apply it. I build the unglamorous parts — data quality, features, honest evaluation, failure cases — and take results as far as a running system, not a notebook.",
  /* Verified against public/ — the actual file name */
  resumePath: "/MUHAMMED_SHAMEEL_Resume_UAE.pdf",
  availability: "Available for new opportunities",
}

/* The one idea the whole site is built around */
export const heroIdentity = {
  statement: "From Mathematics to Machine Learning.",
  support: [
    "Mathematics gave me the foundation.",
    "Machine learning is where I am learning to apply it.",
  ],
}

export const statement = {
  lead: "I did not start with software engineering and then discover machine learning. I started with mathematics and statistics, and I am learning how to turn that foundation into intelligent systems that actually run.",
  body: "That order changes how I work. I would rather understand why a model behaves the way it does than accept a good score I cannot explain. So I stay on the parts most people rush past — the data, the assumptions, the features, the honest evaluation, the failure cases — because that is where the mathematics earns its keep, and where a result either holds up or does not.",
  contact: "I am looking for work where data quality, model reasoning and evaluation are taken seriously, and where I can keep getting stronger. If you have a dataset nobody has finished with, or a system that keeps guessing, I would like to hear about it.",
}

export const stats = [
  { value: 9, label: "Projects built", note: "ML · RAG · vision · dashboards" },
  { value: 3, label: "Internships", note: "cloud data → agentic → applied AI" },
  { value: 2, label: "Degrees", note: "BSc Mathematics, MSc Data Science" },
  { value: 1, label: "Through-line", note: "maths → models → systems" },
]

/* Three short paragraphs under the statement band */
export const bandParagraphs = [
  "The path runs mathematics → statistics → data → machine learning → deep learning → AI → systems. It is not a tagline; it is the order I learned things in, and the order I reach for them.",
  "I care about the parts that decide whether a number can be trusted — data quality, cleaning, features, evaluation, failure cases, reproducibility — because that is exactly what a mathematics background trains you to interrogate.",
  "Whenever practical, the work ends somewhere usable: a FastAPI service, a Dockerised build, a deployed app, or an interface someone else can open. Still learning, but shipping while I learn.",
]

export const socials = {
  github: "https://github.com/Muhammed-Shameel",
  linkedin: "https://linkedin.com/in/muhammed-shameel",
  email: "muhammedshameel3009@gmail.com",
}

export const navLinks = [
  { id: "journey", label: "Journey" },
  { id: "thinking", label: "Approach" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Case Studies" },
  { id: "contact", label: "Contact" },
]

/* Every anchored section, in page order — drives the right-edge scroll spine */
export const sectionIds = [
  { id: "hero", label: "Intro" },
  { id: "journey", label: "Journey" },
  { id: "about", label: "Statement" },
  { id: "thinking", label: "How I think" },
  { id: "systems", label: "Equation → System" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Case Studies" },
  { id: "learning", label: "Learning" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
]

export const terminalProfile = [
  { indent: 0, tokens: [["kw", "from"], ["plain", " "], ["class", "mathematics"], ["plain", " "], ["kw", "import"], ["plain", " "], ["val", "reasoning"]] },
  { indent: 0, tokens: [["kw", "class"], ["plain", " "], ["class", "Shameel"], ["plain", ":"]] },
  { indent: 1, tokens: [["str", "degree"], ["plain", " = "], ["val", '"BSc Mathematics"']] },
  { indent: 1, tokens: [["str", "masters"], ["plain", " = "], ["val", '"MSc Data Science"']] },
  { indent: 1, tokens: [["str", "role"], ["plain", " = "], ["val", '"Data Scientist"']] },
  { indent: 1, tokens: [["str", "path"], ["plain", " = ["]] },
  { indent: 2, tokens: [["val", '"statistics", "features", "models",']] },
  { indent: 2, tokens: [["val", '"evaluation", "RAG", "agents", "deploy"']] },
  { indent: 1, tokens: [["plain", "]"]] },
  { indent: 1, tokens: [["str", "status"], ["plain", " = "], ["amber", '"still learning, already building"']] },
]

/* ---------------- Journey: the signature narrative ---------------- */
export const journey = [
  {
    stage: "Mathematics",
    glyph: "ℝⁿ · ∑",
    items: ["Functions", "Vectors", "Matrices", "Probability", "Statistics", "Optimization"],
    note: "BSc. How to reason about a problem, not just compute an answer.",
  },
  {
    stage: "Data Science",
    glyph: "X → y",
    items: ["Data", "Features", "Models", "Evaluation"],
    note: "MSc. Statistics turned outward: real, messy, incomplete data.",
  },
  {
    stage: "Machine Learning",
    glyph: "ŷ = f(X; θ)",
    items: ["Regression", "Classification", "Ensembles", "Representation Learning"],
    note: "Fitting the model is the easy half; understanding it is the job.",
  },
  {
    stage: "Deep Learning / AI",
    glyph: "∇ · embeddings",
    items: ["Neural Networks", "Embeddings", "RAG", "Agents"],
    note: "Where linear algebra and calculus stop being abstract.",
  },
  {
    stage: "Engineering",
    glyph: "deploy",
    items: ["APIs", "Deployment", "Optimization", "Production"],
    note: "A model that nobody can call is a notebook, not a system.",
  },
]

/* ---------------- How I think ---------------- */
export const howIThink = {
  title: "I don't want to just use the model. I want to understand why it works.",
  stages: [
    { name: "Problem", note: "What is actually being asked, before any data." },
    { name: "Data", note: "Scale, structure, what is missing and why." },
    { name: "Assumptions", note: "What I am taking on faith — stated out loud." },
    { name: "Mathematics / Statistics", note: "The reasoning underneath the method." },
    { name: "Features", note: "Turning raw signal into something a model can use." },
    { name: "Model", note: "One lever in a system, not the whole answer." },
    { name: "Evaluation", note: "Honest metrics, failure cases, what the score hides." },
    { name: "Deployment", note: "An interface or API someone else can rely on." },
    { name: "Iteration", note: "Question it again. Loop back to the top." },
  ],
  /* the short form of the same loop */
  loop: ["understand", "formulate", "experiment", "measure", "question", "improve"],
  anti: "dataset → model.fit() → accuracy",
}

/* ---------------- From equation to system ---------------- */
export const equationToSystem = {
  seed: "ŷ = f(X; θ)",
  layers: [
    { label: "Equation", note: "A claim about how output depends on input." },
    { label: "Model", note: "That claim, parameterised and trainable." },
    { label: "Training data", note: "The evidence the claim is fit to." },
    { label: "Evaluation", note: "Whether it generalises or just memorised." },
    { label: "API", note: "A contract so the result is callable." },
    { label: "Deployed application", note: "Something a person can actually use." },
  ],
  point: "Machine learning is not just maths and not just code. It is mathematics + data + experiments + engineering, held together.",
}

/* ---------------- Currently learning (honest, no fake mastery) ---------------- */
export const currentlyLearning = {
  intro:
    "I am not finished. This is where I am actively building depth right now — not a list of things I have already mastered.",
  /* status is a plain word, not a fake percentage */
  areas: [
    { title: "Machine Learning fundamentals", status: "deepening" },
    { title: "Deep Learning", status: "learning" },
    { title: "Graph Neural Networks", status: "learning" },
    { title: "Large Language Models", status: "building with" },
    { title: "Retrieval-Augmented Generation", status: "building with" },
    { title: "AI Agents", status: "building with" },
    { title: "Model Context Protocol (MCP)", status: "exploring" },
    { title: "ML Systems & Production ML", status: "going deeper" },
  ],
}

export const experiences = [
  {
    role: "Enterprise AI Engineering Intern",
    org: "InfoCreon Solutions Private Limited",
    period: "September 2026 – October 2026",
    location: "Kerala, India",
    status: "valid",
    layer: "Applied AI",
    stack: ["FastAPI", "React", "RAG", "LLM Gateway", "Python"],
    metric: "2,000+ support tickets / month triaged through the platform",
    bullets: [
      "Built OSIP — Operations Support Intelligence Platform, a full-stack enterprise AI prototype turning operational documents and historical support tickets into governed, reusable knowledge",
      "Evidence-grounded reasoning workflows behind a provider-neutral AI gateway, with deterministic fallback so the system is not wholly dependent on an LLM",
      "Automated regression, golden-set and semantic validation for governed, auditable support investigation",
    ],
  },
  {
    role: "Agentic AI Intern",
    org: "InfoCreon Solutions Private Limited",
    period: "July 2026 – September 2026",
    location: "Kerala, India",
    status: "valid",
    layer: "Agentic AI",
    stack: ["LangGraph", "FastAPI", "LLM", "Python"],
    bullets: [
      "Stateful LangGraph workflows that synthesise member, trainer and operational data into business reports",
      "LLM application development and multi-agent orchestration",
      "Workflow automation pairing rule-based logic with model reasoning",
    ],
  },
  {
    role: "Cloud & Data Visualization Engineering Intern",
    org: "InfoCreon Solutions Private Limited",
    period: "May 2026 – July 2026",
    location: "Kerala, India",
    status: "valid",
    layer: "Cloud & Data",
    stack: ["Python", "FastAPI", "Docker", "Render", "Vercel"],
    metric: "Flood intelligence across 85+ regions (FLUVIO)",
    bullets: [
      "Backend services in Python and FastAPI; data preprocessing and feature engineering",
      "Statistical analysis and model evaluation for AI-driven software",
      "Cloud deployment with Docker, Git, Render and Vercel",
    ],
  },
  {
    role: "Mathematics Tutor",
    org: "Self-employed",
    period: "July 2023 – March 2024",
    location: "Remote",
    status: "valid",
    layer: "Foundation",
    stack: [],
    bullets: [
      "Delivered one-to-one mathematics tutoring to undergraduate and high-school students",
      "Learning to explain a method well enough is how I check I understand it — that habit carried straight into ML",
    ],
  },
]

/* ---------------- Skills: organised by how I work, not a logo wall ---------------- */
export const skillTiers = [
  {
    key: "foundation",
    flow: "Foundation",
    title: "Mathematics & Statistics",
    items: [
      "Linear Algebra",
      "Probability",
      "Statistics",
      "Statistical Analysis",
      "Dimensionality Reduction",
      "EFA / MCA",
      "Hypothesis Testing",
      "Optimization",
    ],
  },
  {
    key: "foundation",
    flow: "Foundation",
    title: "Data",
    items: [
      "Python",
      "SQL",
      "Pandas",
      "NumPy",
      "Data Cleaning",
      "EDA",
      "Data Wrangling",
      "Feature Engineering",
    ],
  },
  {
    key: "models",
    flow: "Models",
    title: "Machine Learning",
    items: [
      "Regression",
      "Classification",
      "Tree Models",
      "Ensemble Methods",
      "XGBoost",
      "CatBoost",
      "Scikit-learn",
      "Model Evaluation",
      "Hyperparameter Tuning",
    ],
  },
  {
    key: "ai",
    flow: "AI",
    title: "Applied AI",
    items: [
      "RAG",
      "Embeddings",
      "Vector Search",
      "LLMs",
      "LangGraph",
      "ONNX",
      "Computer Vision",
      "PyTorch / TensorFlow",
    ],
  },
  {
    key: "engineering",
    flow: "Engineering",
    title: "Engineering",
    items: ["FastAPI", "Docker", "Git", "Render", "Vercel", "Tableau"],
  },
]

/* The short version of the tiers, under the section */
export const stackLine =
  "Foundation → Models → AI → Engineering   ·   Python · SQL · PyTorch · Scikit-learn · RAG · LangGraph · ONNX · FastAPI · Docker"

/* ---------------- Case studies (featured) ----------------
   NOTE: metrics below are taken from the owner's brief, not from
   earlier repo data. Kept verbatim so they can be verified before publish. */
export const caseStudies = [
  {
    id: "grocery-ai",
    title: "Grocery AI",
    subtitle: "From a trained model to a system that fits on a normal machine.",
    kicker: "Computer Vision · ONNX · RAG · FastAPI",
    status: "run",
    statusLabel: "Live",
    period: "2026",
    href: "https://grocery-ai-mkti.vercel.app/",
    repo: "https://github.com/Muhammed-Shameel/Grocery-AI",
    problem:
      "Grocery storage decisions were buried in documents and rules nobody could query quickly. The ask was to recognise produce and answer questions grounded in reliable storage knowledge — not to guess.",
    data: "37,071 images for the vision model, plus a curated grocery-storage corpus indexed for retrieval. A large fraction of the real work was in the data, not the network.",
    reasoning:
      "A heavy PyTorch model is fine in a notebook and unusable in a browser or a small server. I converted to ONNX so inference could run anywhere, and paired the classifier with a RAG loop so answers came from governed knowledge rather than model memory.",
    experiment:
      "Trained the classifier, exported to ONNX Runtime, and wired a retrieval pipeline: 2,543 Chroma chunks across 68 knowledge subjects behind a FastAPI service and a React/Vite front end.",
    failure:
      "The original footprint and latency were the failure — gigabytes of memory and inference measured in hundreds of milliseconds on CPU made it impractical to deploy. Getting it small and fast was the actual engineering problem.",
    improvement:
      "ONNX conversion, model trimming and runtime tuning took peak memory from 509 MB to 77 MB, median CPU inference from 150.08 ms to 3.95 ms, and the disk footprint from 4210 MB to 42.5 MB.",
    result:
      "7,028 / 7,028 on the curated test set at ~38× faster median CPU inference — with ~85% lower peak memory — while keeping the answer loop grounded in retrieval.",
    engineering:
      "FastAPI service + ONNX Runtime + a React/Vite client, deployed to Vercel. A retrieval answer loop over the grocery-storage corpus, so the model classifies and the retrieval grounds.",
    /* Before → after pairs for the interactive comparison slider */
    metrics: [
      { label: "Peak memory", before: 509, after: 77, unit: "MB", note: "~85% reduction" },
      { label: "Median CPU inference", before: 150.08, after: 3.95, unit: "ms", note: "~38× faster" },
      { label: "Disk footprint", before: 4210, after: 42.5, unit: "MB", note: "portable build" },
    ],
    facts: ["37,071 images", "250,179 parameters", "ONNX export", "2,543 Chroma chunks", "68 subjects", "7,028/7,028 test set"],
  },
  {
    id: "premier-league",
    title: "Premier League Player Analysis",
    subtitle: "How raw football statistics become measurable player characteristics.",
    kicker: "Statistics · EFA / MCA · XGBoost",
    status: "valid",
    statusLabel: "Shipped",
    period: "2025",
    href: "https://github.com/Muhammed-Shameel/football-player-analysis",
    repo: "https://github.com/Muhammed-Shameel/football-player-analysis",
    problem:
      "Player performance is scattered across dozens of raw stats that are hard to compare directly. The question: can you reduce them to a few meaningful, comparable characteristics?",
    data: "Seasons 2017–2025 across Manchester United, Chelsea, Arsenal, Tottenham and Liverpool. Multiple datasets merged into a 2,683 × 36 analytical table with 0 nulls after preparation.",
    reasoning:
      "This is a dimensionality-reduction problem wearing a football jumper. Rather than hand-pick stats, I used Exploratory / Confirmatory Factor Analysis to let latent structure emerge from the data — the part my mathematics background is actually for.",
    experiment:
      "Standardised the raw variables, ran factor analysis to derive latent ability factors — Passing, Shooting, Creativity, Dribbling, Defense — then built player profiles from those factors for downstream modelling and relationship analysis.",
    failure:
      "Raw, unscaled stats do not combine: goals and minutes are not on the same footing. Skipping standardisation produced misleading factors, so the preparation step was non-negotiable.",
    improvement:
      "The five engineered ability factors turned a 36-column table into interpretable player profiles, and gave a clean feature set for the prediction models.",
    result:
      "XGBoost reached around 68.7% accuracy; Gradient Boosting around 65.1% macro F1 on the derived targets. The value was the interpretable factors as much as the score.",
    engineering:
      "A reproducible Python pipeline: merge → clean → standardise → factor analysis → profiles → model comparison, published with the notebook and code on GitHub.",
    metrics: [],
    facts: ["2017–2025", "5 clubs", "2,683 × 36", "0 nulls", "5 ability factors", "XGBoost ~68.7% acc", "GB ~65.1% macro F1"],
  },
]

/* ---------------- Other projects (row list, lighter case-study detail) -------- */
export const projects = [
  {
    title: "OSIP — Operations Support Intelligence Platform",
    description:
      "Full-stack enterprise AI prototype converting operational documents and historical support tickets into governed, reusable knowledge for support investigation.",
    href: null,
    status: "valid",
    statusLabel: "Prototype",
    tech: ["FastAPI", "React", "RAG", "LLM Gateway", "Python"],
    categories: ["Applied AI", "Engineering"],
    period: "09/2026 – 10/2026",
    outcome:
      "Scan & Learn ingestion, OLI lifecycle governance and evidence-grounded reasoning behind a provider-neutral AI gateway — with deterministic fallback so answers degrade without an LLM rather than failing with one.",
  },
  {
    title: "Gym Intelligence Platform",
    description:
      "Agentic AI platform: stateful LangGraph workflows that synthesise member, trainer and operational data into business reports, behind FastAPI endpoints pairing rule-based logic with LLM reasoning.",
    href: "https://github.com/Muhammed-Shameel/Gym-Intelligence-Platform",
    status: "valid",
    statusLabel: "Shipped",
    tech: ["LangGraph", "FastAPI", "LLM", "Python"],
    categories: ["Applied AI", "Engineering"],
    period: "07/2026 – 09/2026",
    outcome: "Built during the Agentic AI internship — multi-agent state graph plus report generation.",
  },
  {
    title: "FLUVIO — Flood Intelligence Dashboard",
    description: "AI-driven flood-risk intelligence surfaced as a decision dashboard rather than a notebook.",
    href: "https://github.com/Muhammed-Shameel/Flood-Intelligence-Dashboard",
    status: "valid",
    statusLabel: "Shipped",
    tech: ["Python", "Dashboard", "ML"],
    categories: ["Models", "Analytics"],
    period: "2026",
    outcome: "Flood-risk analysis across 85+ regions presented for decisions, not just exploration.",
  },
  {
    title: "CSIRO Biomass Prediction",
    description: "Machine-learning regression for biomass prediction on the public CSIRO image/biomass task.",
    href:
      "https://github.com/Muhammed-Shameel/CSIRO-Biomass-Prediction-using-Machine-Learning",
    status: "valid",
    statusLabel: "Shipped",
    tech: ["Regression", "XGBoost", "Feature Engineering"],
    categories: ["Models"],
    period: "2025",
    outcome: "Gradient-boosted regression with feature engineering, honest evaluation on a public benchmark.",
  },
  {
    title: "Brazil E-commerce Analytics",
    description: "End-to-end analytics platform built on MySQL and Python, published as a Tableau report.",
    href: "https://github.com/Muhammed-Shameel/brazil_ecommerce-data_analysis",
    status: "valid",
    statusLabel: "Shipped",
    tech: ["MySQL", "Python", "Tableau"],
    categories: ["Data", "Analytics"],
    period: "2025",
    outcome: "SQL-layer cleaning and ordering analysis turned into a readable Tableau report.",
  },
  {
    title: "Planner AI",
    description: "AI-powered study planning: schedules driven by structured prompts and syllabus input.",
    href: "https://github.com/Muhammed-Shameel/AI-Planner",
    status: "valid",
    statusLabel: "Shipped",
    tech: ["LLM", "Prompt Engineering", "Python"],
    categories: ["Applied AI"],
    period: "2025",
    outcome: "Grounded study-plan generation from syllabus context rather than free generation.",
  },
  {
    title: "Cyber Incident Tracker",
    description: "Cybersecurity intelligence dashboard for SEC EDGAR disclosures.",
    href: "https://github.com/Muhammed-Shameel/POC-68--Cyber-Incident-Disclosure-Tracker-Muhammed-Shameel-Phase2",
    status: "valid",
    statusLabel: "Shipped",
    tech: ["SEC EDGAR", "Dashboard", "Python"],
    categories: ["Data", "Engineering"],
    period: "2025",
    outcome: "Filings parsed into a trackable incident view for an SEC proof-of-concept brief.",
  },
]

export const education = [
  {
    tag: "Postgraduate · Graduated March 2026",
    degree: "MSc Data Science and Business Analytics",
    institution: "Asia Pacific University of Technology & Innovation (Malaysia)",
    meta: "GPA: 3.62 · Specialising in Data Engineering",
    icon: "fa-graduation-cap",
    note: "Statistics turned outward — machine learning, deep learning, RAG and agentic AI, each layer of the syllabus made into something I could actually build with.",
  },
  {
    tag: "Undergraduate · Graduated April 2024",
    degree: "BSc Mathematics",
    institution: "Kottakkal Farook Arts and Science College, University of Calicut",
    meta: null,
    icon: "fa-square-root-variable",
    note: "Linear algebra, probability, statistics and optimisation — the part of machine learning I do not have to take on faith.",
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
  "Kanz AI Training Hackathon Completion",
]

export const interests = [
  "Machine Learning",
  "Applied AI",
  "Data Engineering",
  "NLP",
  "Computer Vision",
  "Mathematics",
  "Statistics",
]

export const interestsExtra = [
  {
    title: "Understanding over using",
    detail:
      "I keep reaching for the derivation behind the method. Explaining why a model works is how I check that it actually does — and where it will quietly fail.",
  },
  {
    title: "Open work",
    detail:
      "Everything I build goes on GitHub, notebooks and all, so the working-out is visible and not just the demo.",
  },
  {
    title: "Teaching",
    detail:
      "A year of one-to-one mathematics tutoring still shapes how I present results — to a reviewer, and to myself.",
  },
]

export const languages = ["English", "Malayalam"]

/* Words for the paper marquee strip */
export const marqueeWords = [
  "Mathematics",
  "Statistics",
  "Machine Learning",
  "RAG",
  "Embeddings",
  "FastAPI",
  "ONNX",
  "Evaluation",
  "Deployment",
]
