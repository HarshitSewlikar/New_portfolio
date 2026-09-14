export const projects = [
  {
    id: "algoviz",
    number: "01",
    title: "AlgoViz — Algorithm Visualizer + AI Chat",
    oneLiner:
      "A React playground that animates sorting & graph algorithms step-by-step, with an AI tutor chatbot to explain what's happening.",
    image: "./projects/algoviz.svg",
    screenshot: "./projects/algorithm-visualizer.png",
    technologies: ["React 18", "Vite", "Framer Motion", "Canvas API", "Tailwind", "Express"],
    problem:
      "Students learn algorithms from static textbook diagrams that don't show the actual step-by-step execution — and there's no quick way to ask 'why did it pick that pivot?' while watching it run.",
    overview:
      "An interactive visualization platform for sorting, searching, and graph algorithms. A precomputed step engine animates each comparison, swap, and visit on Canvas or DOM, and a multi-provider AI chatbot (OpenRouter → OpenAI → Hugging Face fallback) answers questions about the algorithm in plain English.",
    myRole:
      "Built the full React + Vite frontend, the step precomputation engine, the dual rendering layer (Framer Motion for bars, Canvas for graphs), and the Express proxy server that secures the AI provider keys behind a fallback chain.",
    implementation:
      "Each algorithm page precomputes all steps into an array of state objects; a useEffect setTimeout loop advances currentStep at 1000/speed ms. Sorting uses Framer Motion + DOM bars (≤100, accessible, GPU-accelerated). Graphs use HTML5 Canvas (up to 400+ nodes, immediate-mode redraws). The AI chat hits /api/ai, proxied by Vite to an Express server that walks a provider priority chain and returns plain-text responses that a custom Markdown parser renders inline.",
    features: [
      "10 algorithms across sorting, search, and graph",
      "Step precomputation for scrubbing forward/backward",
      "Framer Motion for sorting bars, Canvas for graph nodes/edges",
      "AI tutor chatbot with multi-provider fallback",
      "Vite + Express dev proxy with no CORS in development",
    ],
    learning:
      "Genuine appreciation for choosing the right rendering substrate per problem: precomputed steps + DOM for accessible, scrubbable animations; Canvas for high-frequency graph redraws. Also learned to keep API keys server-side and abstract providers behind a fallback chain for resilience.",
    github: "",
    liveDemo: "",
  },
  {
    id: "organic-vegetable-portal",
    number: "02",
    title: "Organic Vegetable Portal",
    oneLiner:
      "A Django MVT web app for browsing organic produce and capturing customer enquiries through an admin dashboard.",
    image: "./projects/organic-vegetable-portal.svg",
    screenshot: "./projects/organic-vegetable-portal.png",
    technologies: ["Django 3.2", "Python", "SQLite", "Bootstrap 5", "AOS", "Swiper"],
    problem:
      "Customers looking for organic vegetables had no dedicated online space — enquiries were scattered across calls and messages, and the team had no structured place to track them.",
    overview:
      "A full-stack Django web application with a public catalog and enquiry form on the front, and a login-protected admin dashboard on the back that lists every enquiry in a sortable table. Built on Django's MVT pattern with SQLite for data and Bootstrap 5 for responsive UI.",
    myRole:
      "Designed the data model, built the views and URL routing, wrote the templates, and deployed the site live on a cPanel shared host. Owned the project end-to-end as a solo Django build.",
    implementation:
      "Django's URL router dispatches each request to a view function. The contact view validates the enquiry form, saves it via the ORM to SQLite, and flashes a success message. The login view uses Django's built-in authenticate() + login() with PBKDF2-hashed passwords, and the dashboard view requires an authenticated session before rendering the enquiry list. Templates use a shared header/footer includes pattern, and AOS + Swiper add scroll-in animations and the homepage carousel.",
    features: [
      "Public catalog with hero carousel & AOS scroll animations",
      "Enquiry form with Django CSRF + ORM persistence",
      "Admin login with PBKDF2 password hashing",
      "Authenticated dashboard listing all enquiries",
      "Live deployment on cPanel shared hosting",
    ],
    learning:
      "Practiced the full Django MVT cycle: model definition → URL routing → view logic → template rendering. Got comfortable with Django's security defaults (CSRF tokens, auto-escaping, clickjacking middleware) and the practical steps of shipping a Python app to shared hosting.",
    github: "",
    liveDemo: "",
  },
  {
    id: "leadchat",
    number: "03",
    title: "LeadChat — Talk to Your Spreadsheet",
    oneLiner:
      "A FastAPI app that turns plain-English questions into pandas queries against a 300-row real-estate leads dataset.",
    image: "./projects/leadchat.svg",
    screenshot: "./projects/leadchat.png",
    technologies: ["FastAPI", "Python", "Pandas", "OpenPyXL", "OpenRouter", "Vanilla JS"],
    problem:
      "Sales teams waste time writing filters and pivot tables every time they want to know something basic about their leads — 'how many in Pune have budget above 90L?' should be a sentence, not a SQL lesson.",
    overview:
      "A conversational query interface for real-estate lead data. Users type questions in natural English; an LLM (Nemotron via OpenRouter) translates the question into pandas code, the code runs in a sandboxed exec() against the in-memory DataFrame, and the deterministic result returns with the generated code shown for transparency.",
    myRole:
      "Built the FastAPI backend end-to-end: data loading, prompt construction with the dataset schema, the OpenRouter call, code cleaning, and the sandboxed exec. Built the vanilla-JS frontend with a stats sidebar, auto-resizing input, and dynamic table rendering.",
    implementation:
      "On startup, the Excel file is loaded into a global pandas DataFrame. Each query POSTs to /query, which builds a system prompt containing the column schema (preventing column-name hallucination), calls OpenRouter for pandas code, strips the markdown fences, and runs the code via exec() against a DataFrame copy with restricted globals. The response includes the answer, the generated code, a summary, and any tabular data — which the frontend renders as a table with a toggle to view the code.",
    features: [
      "Natural-language queries on a 300-row leads dataset",
      "Code-generation architecture — zero hallucination risk",
      "Sandboxed pandas exec with restricted globals",
      "Generated-code toggle for full transparency",
      "Stats sidebar with distribution bars & call-status badges",
    ],
    learning:
      "The biggest takeaway was architectural: separating intent (LLM) from computation (pandas) gives you the flexibility of language models with the accuracy of deterministic code. Also got a feel for sandboxing user-generated code and designing prompts that constrain the model to a known schema.",
    github: "https://github.com/HarshitSewlikar/leadchat",
    liveDemo: "",
  },
]
