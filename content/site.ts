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
            owns: "What the user touches, and how fast it responds.",
            built: "Built the BingeBuddy and BrainWave front ends, and this site — responsive, animated, and usable at phone widths.",
            tools: [
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind",
                "Framer Motion",
            ],
            depth: 1,
        },
        {
            id: "api",
            name: "API",
            owns: "Contracts, validation, auth, and the error paths.",
            built: "FastAPI and Express services behind DocuMind, ConversoAI and Birju.AI, including the retrieval and chat endpoints.",
            tools: ["Python", "FastAPI", "Node.js", "Express", "LangChain"],
            depth: 2,
        },
        {
            id: "data",
            name: "Data",
            owns: "Schemas, queries, embeddings, and what happens when they are wrong.",
            built: "Vector stores and embedding pipelines for document Q&A, plus Supabase schemas and auth across projects.",
            tools: ["Supabase", "MongoDB", "Firebase", "Hugging Face"],
            depth: 3,
        },
        {
            id: "systems",
            name: "Systems",
            owns: "Deploys, model choice, and what a request costs.",
            built: "Deployment on Vercel and Render, and a move to Groq-hosted inference to keep per-request cost workable.",
            tools: ["Vercel", "Render", "Groq", "Git", "Docker"],
            depth: 4,
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
        featured: true,
        year: "2025",
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
        featured: true,
        year: "2025",
    },
    {
        slug: "converso-ai",
        name: "ConversoAI",
        summary: "Context-aware chatbot product",
        description:
            "A conversational product where replies stay coherent across a long exchange. Conversation state lives server-side, so history survives a reload and the model answers as if it remembers rather than restarting every turn.",
        features: [
            "Server-side conversation state per session",
            "Multi-turn replies that keep their context",
            "Express and Node.js API with Supabase persistence",
            "Deployed chat interface in React",
        ],
        problem:
            "Static FAQ bots give the same answer regardless of what the visitor actually asked, so they deflect simple questions badly and fail the moment a real conversation starts.",
        keyDecision: {
            title: "Keeping conversation state server-side",
            context:
                "Multi-turn answers were inconsistent — the model replied as if every message were the first, because history was not travelling with the request.",
            options: [
                "Stateless requests, treating each message independently",
                "Client-side history only, rebuilt on every page load",
                "Server-side session state keyed per conversation",
            ],
            chosen: "Server-side session state per conversation, so history survives reloads and stays consistent across devices.",
            tradeoff:
                "Session state adds a storage dependency and an expiry decision. I traded a stateless, trivially scalable service for answers that actually remembered the conversation.",
        },
        stack: ["React", "Node.js", "Express", "LangChain", "Supabase"],
        links: [
            {
                label: "Source",
                href: "https://github.com/wishmaster815/ConversoAI_SaaS",
            },
        ],
        featured: true,
        year: "2025",
    },
    {
        slug: "bingebuddy",
        name: "BingeBuddy",
        summary: "Recommendation engine by mood and genre",
        description:
            "Finds a film or series from a mood, a genre, or titles you already like. Recommends from content similarity over the catalogue rather than from ratings, so it works without any user history to learn from.",
        features: [
            "Cosine similarity over vectorised item metadata",
            "Cold-start recommendations with no user history",
            "Synopsis text vectorised alongside structured fields",
            "Mood and genre as the primary query",
        ],
        problem:
            "Recommendation lists optimise for titles that already have many ratings, so they keep returning the same popular few. Choosing by mood is how people actually decide, and no catalogue search supports it.",
        keyDecision: {
            title: "Content-based vectors over a ratings database",
            context:
                "Collaborative filtering needs a large user-rating history that a project this size does not have, so there was no interaction data to learn from.",
            options: [
                "Collaborative filtering on user ratings",
                "Popularity ranking by genre",
                "Cosine similarity over vectorised metadata and synopsis text",
            ],
            chosen: "Cosine similarity over vectorised item metadata, which works from a cold start with no user history at all.",
            tradeoff:
                "Results stay in the neighbourhood of what was picked, so genuine serendipity is rare. I accepted a narrow, explainable set over a broad one I could not justify.",
        },
        stack: ["Python", "Pandas", "cosine similarity"],
        links: [
            {
                label: "Source",
                href: "https://github.com/wishmaster815/movie-recommendation-using-cosine-similarity",
            },
        ],
        featured: false,
        year: "2024",
    },
    {
        slug: "brainwave",
        name: "BrainWave",
        summary: "Streaming AI chat app",
        description:
            "An open AI chat application built to learn the hard part of chat UX: rendering a response while it is still arriving, and keeping the partial state honest so a truncated answer is never mistaken for a finished one.",
        features: [
            "Token-by-token streaming as the response arrives",
            "Explicit partial and complete response states",
            "Conversation state held across turns",
            "React front end over a chat backend",
        ],
        problem:
            "A way to build a real streaming chat interface end to end, including partial responses and the state that has to survive them.",
        keyDecision: {
            title: "Rendering tokens as they arrive",
            context:
                "Waiting for a complete response before rendering made the app feel broken on anything longer than a sentence, with no feedback while it worked.",
            options: [
                "Wait for the full response, then render",
                "Poll for partial output",
                "Stream the response and append tokens as they land",
            ],
            chosen: "Streaming the response and appending tokens as they arrive.",
            tradeoff:
                "Partial output has to be handled honestly — a truncated answer that looks complete is worse than a spinner, so the streaming state is explicit rather than implied.",
        },
        stack: ["React", "JavaScript"],
        links: [
            {
                label: "Source",
                href: "https://github.com/wishmaster815/BrainWave-ReactJs",
            },
        ],
        featured: false,
        year: "2024",
    },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);
