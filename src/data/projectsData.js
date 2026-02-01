export const projects = [
    {
        id: "1",
        slug: "viiew-me",
        title: "viiew.me",
        category: "Digital Identity • Creator Tech",
        url: "https://viiew.me/",
        tags: ["Product Design", "Saas Architecture", "Design System"],
        image: "https://res.cloudinary.com/dx5ugtyis/image/upload/v1769202400/post-1_dt27sm.jpg",
        description: "An immersive digital identity ecosystem designed for high-end personal branding and creator discovery.",
        fullDescription:
            "viiew.me redefines the 'link-in-bio' concept into a high-fidelity digital anchor. It bridges the gap between sophisticated aesthetic design and rigorous performance engineering, delivering a sub-second interactive experience for personal branding at scale. <br/><br/>As the sole Architect and UI/UX Designer, I spearheaded the end-to-end development of viiew.me—bridging the gap between sophisticated aesthetic design and rigorous performance engineering to deliver a sub-second interactive experience at scale.",

        features: [
            "Frictionless Google-auth onboarding workflow.",
            "Real-time global username availability checker.",
            "Immersive theme engine with instant 'Minimal' & 'Coffee' swaps.",
            "Tactile Studio interface for live color and layout editing.",
            "Automated SEO-optimized deployment for creator profiles."
        ],
        process: [
            {
                title: "Dynamic Identity",
                description: "Engineered a real-time availability checker for unique global namespaces with zero-latency feedback."
            },
            {
                title: "Studio Engine",
                description: "Built a tactile 'live-edit' customization suite allowing instant theme-swapping via dynamic CSS variable injection."
            },
            {
                title: "Optimized Delivery",
                description: "Achieved sub-500ms global load times using Next.js Server Components and edge-cached asset delivery."
            }
        ],

        stats: {
            role: "Developer / UI/UX Engineer",
            year: "2025",
            performance: "98/100 Lighthouse"
        },

        stack: [
            "Next.js",
            "Framer Motion",
            "Tailwind CSS",
            "PostgreSQL",
            "Prisma",
            "Node.js",
            "Google Auth",
            "Vercel"
        ],
    },
    {
        id: "2",
        slug: "premagic",
        title: "Premagic",
        category: "AI Web Application",
        url: "https://premagic.com",
        image:
            "https://premagic.com/static/3b887fde248c9802f7e6c4f7a2d128df/81bf4/events-hero.webp",
        description: "AI-driven event photography workflows.",
        fullDescription:
            "Premagic is an AI-based event tech platform that boosts organic event marketing. We're on a mission to turn every attendee into an event marketer. As a comprehensive event marketing and experience tool, Premagic covers all stages from pre-event to post-event, offering solutions to boost engagement, visibility, and attendee satisfaction organically.<br/><br/>My Contribution As a Product Engineer, I was responsible for architecting the core user journey from photo discovery to social sharing. I spearheaded the development of the New Gallery Workflow, ensuring that the transition from a biometric face-scan to a personalized private gallery was instantaneous and intuitive. Additionally, I managed the Organizer Dashboard and integrated the AI Avatar Creation module, adding a gamified layer to the attendee experience that significantly boosted platform engagement.",
        stats: { role: "Product Engineer", year: "2025", performance: "98/100 Lighthouse" },
        tags: ["Product Strategy", "AI Interface", "UX Research"],
        stack: ["React", "TypeScript", "Gatsby.js", "Tailwind CSS", "Python/AI", "Prisma", "Docker", "i18n", "Jest", "React Testing Library"],
        process: [
            {
                title: "Intelligent Onboarding",
                description: "Attendees scan their face and enter basic details, creating a unique biometric anchor for photo matching."
            },
            {
                title: "Personalized Gallery Navigation",
                description: "Our AI engine automatically filters thousands of event photos to navigate users directly to their private, curated gallery."
            },
            {
                title: "Gamified Engagement",
                description: "Implemented fun, interactive activities like AI Avatar creation to enhance attendee satisfaction and social sharing."
            }
        ],
        features: [
            "AI-Driven Face Recognition for instant photo delivery.",
            "Custom branded event galleries with social sharing integration.",
            "Interactive 'Avatar Creation' modules for high-engagement networking.",
            "Comprehensive analytics dashboard for event organizers.",
            "Pre-to-Post event engagement tools to maximize organic reach."
        ],
    },
];