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
                {
                    name: "TypeScript",
                    icon: "siTypescript",
                    note: "Types end to end",
                },
                {
                    name: "Tailwind",
                    icon: "siTailwindcss",
                    note: "Utility styling",
                },
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
                {
                    name: "LangChain",
                    icon: "siLangchain",
                    note: "LLM pipelines",
                },
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
                {
                    name: "PostgreSQL",
                    icon: "siPostgresql",
                    note: "Relational data",
                },
                {
                    name: "Supabase",
                    icon: "siSupabase",
                    note: "Auth + Postgres",
                },
                { name: "MongoDB", icon: "siMongodb", note: "Document store" },
                {
                    name: "Firebase",
                    icon: "siFirebase",
                    note: "Realtime, auth",
                },
                {
                    name: "Hugging Face",
                    icon: "siHuggingface",
                    note: "Embeddings",
                },
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

        stack: [
            "Bun",
            "TypeScript",
            "Commander.js",
            "Telegram Bot API",
            "LLM APIs",
        ],

        source: "https://github.com/wishmaster815/AgentDock",

        screenshot: "/projects/agent.png",

        featured: true,

        year: "2026",
    },
    {
        slug: "padhai",

        name: "PadhAI",

        summary:
            "A production-ready school ERP for managing academics, classrooms, and students",

        description:
            "A full-stack school management platform built for real-world deployment, connecting administrators, teachers, and students through role-based workflows — from school and class management to digital classrooms and teacher-created learning modules.",

        features: [
            "Role-based admin, teacher, and student access",
            "School, class, section, subject, and classroom management",
            "Teacher-created modules and learning content",
            "Student access to classes and teacher content",
            "Administrative controls for managing the school",
        ],

        problem:
            "Schools need one system to manage administration, academics, teachers, classrooms, and students. PadhAI brings these workflows together in a single platform designed to be delivered to and used by real schools.",

        stack: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "ShadCN UI",
            "FastAPI",
            "PostgreSQL",
            "Supabase",
            "AI/LLM APIs",
        ],

        screenshot: "/projects/padhai.png",
        source: "https://github.com/wishmaster815/PadhAI-backend",
        live: "https://padhai-rosy.vercel.app",
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
        stack: ["Next.js", "LangChain", "Python", "OpenAI"],
        source: "https://github.com/wishmaster815/Birju.AI-v2",
        live: "https://birju-ai-olive.vercel.app",
        screenshot: "/projects/birju-ai.png",
        featured: true,
        year: "2025",
    },
    {
        slug: "documind",

        name: "DocuMind",

        summary: "AI-powered Q&A over your own PDFs",

        description:
            "A RAG-based document Q&A system that lets users upload PDFs and ask questions grounded in their content, with relevant source passages returned alongside each answer.",

        features: [
            "PDF upload and document chunking",
            "Embedding-based semantic retrieval",
            "Grounded answers using Groq-hosted LLMs",
            "Source passages shown with responses",
        ],

        problem:
            "Finding specific information in long documents is slow and frustrating. DocuMind makes documents searchable through natural language while keeping answers grounded in the source.",

        stack: [
            "Python",
            "FastAPI",
            "LangChain",
            "Groq",
            "Hugging Face",
            "Next.js",
        ],

        source: "https://github.com/wishmaster815/DocuMind-AI",
        live: "https://documind-ai-815.vercel.app",

        screenshot: "/projects/documind.png",

        featured: true,

        year: "2025",
    },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);
