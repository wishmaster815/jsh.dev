import type { About, Experience, Project, Site } from "./types";

const about: About = {
    heading: "Building AI systems that work beyond the demo.",
    body: [
        "I build production-grade AI and backend systems, along with the interfaces that sit on top of them — from APIs and RAG pipelines to polished, real-world products.",
        "I’ve completed my B.Tech in Computer Science and gained experience through ML, and UI/UX internships, along with remote work for clients across different projects.",
        // "I care about building systems that hold up beyond the demo, choosing tools based on the problem, and making engineering decisions I can explain.",
    ],
    practice: [
        {
            platform: "LeetCode",
            href: "https://leetcode.com/u/jayeshshrivastava815/",
        },
        {
            platform: "GeeksforGeeks",
            href: "https://www.geeksforgeeks.org/user/jayeshshrivzfj5/",
        },
    ],
    interests: [
        "Full stack development",
        "AI & LLM applications",
        "Backend architecture",
        "System design",
    ],
};

export const site: Site = {
    name: "Jayesh Shrivastava",
    role: "Full stack developer",
    positioning:
        "I build AI-backed applications across the stack — interfaces, APIs, and the data underneath.",
    lead: "SWE | AI Engineer building scalable backends and AI-powered products end to end.",
    location: "India",
    availability: "Open to full stack and AI engineering roles",
    email: "jayeshshrivastava815@gmail.com",
    github: "https://github.com/wishmaster815",
    /**
     * Google Drive, opened in a new tab. The viewer URL is used rather than the
     * uc?export=download endpoint because Drive shows its own preview, and
     * because a raw download link is the one most likely to break when the
     * share settings change.
     */
    resume: "https://drive.google.com/file/d/1gTRvXE_1-RSw2Vuy4VYomVW401402E7T/view?usp=sharing",
    links: [
        { label: "GitHub", href: "https://github.com/wishmaster815" },
        {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/shrivastava-jayesh/",
        },
    ],
    stats: [
        { label: "Internships", value: "3" },
        { label: "Projects", value: "5" },
    ],
    stack: [
        {
            id: "interface",
            name: "Interface",
            owns: "What the user touches.",
            depth: 1,
            techs: [
                { name: "React", icon: "siReact", note: "UI components" },
                { name: "Next.js", icon: "siNextdotjs", note: "Routing, SSG" },
                { name: "TypeScript", icon: "siTypescript", note: "Types end to end" },
                { name: "Tailwind", icon: "siTailwindcss", note: "Utility styling" },
                { name: "Framer", icon: "siFramer", note: "Animation" },
            ],
        },
        {
            id: "api",
            name: "API",
            owns: "Contracts, validation, error paths.",
            depth: 2,
            techs: [
                { name: "Python", icon: "siPython", note: "Services, scripts" },
                { name: "FastAPI", icon: "siFastapi", note: "Async APIs" },
                { name: "Node.js", icon: "siNodedotjs", note: "Runtime" },
                { name: "Express", icon: "siExpress", note: "REST routing" },
                { name: "LangChain", icon: "siLangchain", note: "LLM pipelines" },
                { name: "Groq", note: "Fast inference" },
                { name: "Ollama", icon: "siOllama", note: "Local models" },
            ],
        },
        {
            id: "data",
            name: "Data",
            owns: "Schemas, queries, embeddings.",
            depth: 3,
            techs: [
                { name: "PostgreSQL", icon: "siPostgresql", note: "Relational data" },
                { name: "Supabase", icon: "siSupabase", note: "Auth + Postgres" },
                { name: "MongoDB", icon: "siMongodb", note: "Document store" },
                { name: "Firebase", icon: "siFirebase", note: "Realtime, auth" },
                { name: "Hugging Face", icon: "siHuggingface", note: "Embeddings" },
                { name: "Redis", icon: "siRedis", note: "Cache, queues" },
            ],
        },
        {
            id: "systems",
            name: "Systems",
            owns: "Deploys, containers, versions.",
            depth: 4,
            techs: [
                { name: "Vercel", icon: "siVercel", note: "Edge deploy" },
                { name: "Render", icon: "siRender", note: "Service hosting" },
                { name: "Docker", icon: "siDocker", note: "Containers" },
                { name: "Git", icon: "siGit", note: "Version control" },
                { name: "GitHub", icon: "siGithub", note: "Repos, CI" },
            ],
        },
    ],
    about,
    experience: [],
    contact: [
        {
            label: "GitHub",
            href: "https://github.com/wishmaster815",
            note: "Explore my projects",
            icon: "github",
        },
        {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/shrivastava-jayesh/",
            note: "Let's connect",
            icon: "linkedin",
        },
        {
            label: "X",
            href: "https://x.com/shrivastava815",
            note: "Say hello",
            icon: "x",
        },
    ],
};

export const experience: Experience[] = [
    {
        role: "AI/ML Engineer Intern",
        org: "CrystalTech Solutions",
        period: "TODO — dates",
        detail: "Built and optimised ML models across data preprocessing, training, and deployment for real-world applications.",
    },
    {
        role: "Project Intern",
        org: "Smart City India Pvt. Ltd.",
        period: "TODO — dates",
        detail: "Contributed to ITMS and road-safety systems, working on smart traffic management and urban infrastructure tooling.",
    },
    {
        role: "Freelance UI/UX Designer",
        org: "Independent",
        period: "TODO — dates",
        detail: "Designed interfaces for web and mobile clients, focused on usability and visual clarity rather than decoration.",
    },
];

export const projects: Project[] = [
    {
        slug: "agentdock",

        name: "AgentDock",

        summary: "A terminal-native AI agent with multiple interaction modes",

        description:
            "A CLI-first AI agent inspired by tools like ClawCode, built to handle tasks directly from the terminal while supporting different ways of working. Agent mode executes tasks, Plan mode structures the work first, and Ask mode keeps interactions focused on questions and explanations.",

        features: [
            "Terminal-native AI agent interface",
            "Agent, Plan, and Ask interaction modes",
            "Task execution through the CLI",
            "Telegram interface for remote agent access",
            "Switch between interaction modes based on the task",
        ],

        problem:
            "AI coding and task agents are powerful, but most workflows force you into a single interaction style. Sometimes you want the agent to execute, sometimes you want a plan first, and sometimes you just need an answer without any action.",

        keyDecision: {
            title: "Designing around interaction modes",

            context:
                "The same agent needs to handle very different workflows. Treating every request as an execution task made simple questions unnecessarily heavy, while planning and execution often needed to be separated.",

            options: [
                "Use a single agent flow for every interaction",
                "Build separate agents for planning, execution, and questions",
                "Use one agent with explicit interaction modes",
            ],

            chosen: "One agent with explicit interaction modes — keeping the core agent unified while letting the user control how it approaches a task.",

            tradeoff:
                "Modes add state and routing complexity, but make the agent more predictable and give users control over when the system plans, executes, or simply responds.",
        },

        stack: [
            "Bun",
            "TypeScript",
            "Commander.js",
            "Telegram Bot API",
            "LLM APIs",
        ],

        links: [
            {
                label: "Source",
                href: "https://github.com/wishmaster815/agent-dock",
            },
        ],

        screenshot: "/projects/agentdock.png",

        featured: true,

        year: "2026",
    },
    {
        slug: "padhai",

        name: "PadhAI",

        summary:
            "A full-stack school ERP built for real-world school operations",

        description:
            "A production-ready school management platform designed to handle the complete academic workflow — from administration and class management to teacher-led classrooms and student learning. It connects admins, teachers, and students through role-based access, while giving teachers tools to create and manage learning modules for their classes.",

        features: [
            "Role-based access for admins, teachers, and students",
            "School, class, section, and subject management",
            "Teacher-controlled virtual classrooms and learning modules",
            "Student access to teacher-created educational content",
            "Administrative controls for managing the school ecosystem",
            "End-to-end academic workflow from classroom setup to student learning",
        ],

        problem:
            "Schools often rely on multiple disconnected systems for administration, classroom management, teacher workflows, and student learning. PadhAI brings these workflows into a single platform that can be deployed and used by real schools.",

        keyDecision: {
            title: "Designing one platform around three user roles",

            context:
                "Admins, teachers, and students interact with the school system in fundamentally different ways. A single generic interface would make the platform unnecessarily complex and difficult to use.",

            options: [
                "Build one shared interface for every user",
                "Build completely separate systems for each role",
                "Use role-based access with shared platform infrastructure",
            ],

            chosen: "Role-based access over a shared platform — keeping the underlying system unified while giving admins, teachers, and students workflows tailored to what they actually need.",

            tradeoff:
                "Role-based architecture adds authorization and permission complexity, but makes the system scalable across different school workflows without duplicating the core infrastructure.",
        },

        stack: [
            // Add your actual PadhAI stack here
        ],

        links: [
            {
                label: "Source",
                href: "YOUR_GITHUB_LINK",
            },
        ],

        screenshot: "/projects/padhai.png",

        featured: true,

        year: "2026",
    },
    {
        slug: "birju-ai",
        name: "Birju.AI",
        summary: "AI career and learning assistant",
        description:
            "Generates a staged learning roadmap for a chosen career path, then produces the quizzes and counselling report for each stage. Built around a sequence rather than a chat box, so a learner always knows what comes next.",
        features: [
            "Stage-wise roadmap generated per career path",
            "Quizzes and reports produced per completed stage",
            "Next.js frontend over a LangChain backend",
            "Progress carried across sessions",
        ],
        problem:
            "Career guidance for students is either generic advice or a paid counsellor, and most learners abandon an unstructured plan within weeks because nothing tells them what to do next.",
        keyDecision: {
            title: "Generating a staged plan instead of answering questions",
            context:
                "A chat interface answers whichever question gets asked. Learners need the opposite — a sequence, where each stage depends on the last and the next step is always defined.",
            options: [
                "A chatbot that answers whatever is asked",
                "A one-shot generated roadmap with no follow-up",
                "A staged plan where each stage produces quizzes and unlocks the next",
            ],
            chosen: "A staged roadmap, so the assistant has a spine to reason against instead of answering each prompt in isolation.",
            tradeoff:
                "The plan is only as good as the assessment behind it, and a weak self-assessment yields a confidently wrong roadmap. Making the stages explicit exposed that failure instead of hiding it in a chat log.",
        },
        stack: ["Next.js", "LangChain", "Python", "OpenAI"],
        links: [
            {
                label: "Frontend",
                href: "https://github.com/wishmaster815/Birju-Frontend-2",
            },
        ],
        screenshot: "/projects/birju-ai.png",
        featured: true,
        year: "2025",
    },
    {
        slug: "documind",
        name: "DocuMind",
        summary: "Document Q&A over your own PDFs",
        description:
            "A retrieval pipeline over uploaded PDFs, served through a FastAPI backend and a Next.js interface. Answers are grounded in the document instead of generated from memory, so a question the document cannot answer comes back empty rather than plausible.",
        features: [
            "PDF upload with fixed-size overlapping chunking",
            "Embedding retrieval with Hugging Face models",
            "Grounded answers via Groq-hosted inference",
            "Source passages surfaced alongside every answer",
        ],
        problem:
            "Long documents are unusable when you need one specific fact from them. Keyword search finds the wrong page, and re-reading a report to find one paragraph is slow enough that people give up and ask someone instead.",
        keyDecision: {
            title: "Chunking strategy, and accepting retrieval noise",
            context:
                "Answer quality collapsed on long PDFs. Single large chunks lost the surrounding context an answer needed, while very small chunks retrieved fragments with no meaning on their own.",
            options: [
                "One chunk per document, relying on the model to read it all",
                "Fixed-size overlapping chunks retrieved by embedding similarity",
                "Smaller chunks plus a reranking pass to recover precision",
            ],
            chosen: "Fixed-size overlapping chunks retrieved by embedding similarity — it fixed the worst failures while keeping the system debuggable.",
            tradeoff:
                "Retrieval still returns loosely related passages often enough to need a rerank step. I traded some accuracy for a system I could actually debug.",
        },
        stack: [
            "Python",
            "FastAPI",
            "LangChain",
            "Groq",
            "Hugging Face",
            "Next.js",
        ],
        links: [
            {
                label: "Source",
                href: "https://github.com/wishmaster815/DocuMind-AI",
            },
        ],
        screenshot: "/projects/documind.png",
        featured: true,
        year: "2025",
    },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);
