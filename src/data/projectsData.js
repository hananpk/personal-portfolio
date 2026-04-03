export const projects = [
  {
    id: "1",
    slug: "viiew-me",
    title: "viiew.me",
    category: "Digital Identity • Link-in-bio Tool",
    url: "https://viiew.me/",
    tags: ["Product Design", "Saas Architecture", "Design System"],
    image:
      "https://res.cloudinary.com/dx5ugtyis/image/upload/v1769202400/post-1_dt27sm.jpg",
    description:
      "An immersive digital identity ecosystem designed for high-end personal branding and creator discovery.",
    fullDescription:
      "viiew.me redefines the 'link-in-bio' concept into a high-fidelity digital anchor. It bridges the gap between sophisticated aesthetic design and rigorous performance engineering, delivering a sub-second interactive experience for personal branding at scale. <br/><br/>As the sole Architect and UI/UX Designer, I spearheaded the end-to-end development of viiew.me—bridging the gap between sophisticated aesthetic design and rigorous performance engineering to deliver a sub-second interactive experience at scale.",

    features: [
      "Frictionless Google-auth onboarding workflow.",
      "Real-time global username availability checker.",
      "Immersive theme engine with instant 'Minimal' & 'Coffee' swaps.",
      "Tactile Studio interface for live color and layout editing.",
      "Automated SEO-optimized deployment for creator profiles.",
    ],
    process: [
      {
        title: "Dynamic Identity",
        description:
          "Engineered a real-time availability checker for unique global namespaces with zero-latency feedback.",
      },
      {
        title: "Studio Engine",
        description:
          "Built a tactile 'live-edit' customization suite allowing instant theme-swapping via dynamic CSS variable injection.",
      },
      {
        title: "Optimized Delivery",
        description:
          "Achieved sub-500ms global load times using Next.js Server Components and edge-cached asset delivery.",
      },
    ],

    stats: {
      role: "Developer / UI/UX Engineer",
      year: "2025",
      performance: "98/100 Lighthouse",
    },

    stack: [
      "Next.js",
      "Framer Motion",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
      "Node.js",
      "Google Auth",
      "Vercel",
    ],
  },
  {
    id: "2",
    slug: "premagic",
    title: "Premagic",
    category: "AI Web Application",
    url: "https://premagic.com",
    image:
      "https://res.cloudinary.com/dx5ugtyis/image/upload/v1775249531/Screenshot_2026-04-04_at_12.51.00_AM_xkrfrr.png",
    description: "AI-driven event photography workflows.",
    fullDescription:
      "Premagic is an AI-based event tech platform that boosts organic event marketing. We're on a mission to turn every attendee into an event marketer. As a comprehensive event marketing and experience tool, Premagic covers all stages from pre-event to post-event, offering solutions to boost engagement, visibility, and attendee satisfaction organically.<br/><br/>My Contribution As a Product Engineer, I was responsible for architecting the core user journey from photo discovery to social sharing. I spearheaded the development of the New Gallery Workflow, ensuring that the transition from a biometric face-scan to a personalized private gallery was instantaneous and intuitive. Additionally, I managed the Organizer Dashboard and integrated the AI Avatar Creation module, adding a gamified layer to the attendee experience that significantly boosted platform engagement.",
    stats: {
      role: "Product Engineer",
      year: "2025",
      performance: "98/100 Lighthouse",
    },
    tags: ["Product Strategy", "AI Interface", "UX Research"],
    stack: [
      "React",
      "TypeScript",
      "Gatsby.js",
      "Tailwind CSS",
      "Python/AI",
      "Prisma",
      "Docker",
      "i18n",
      "Jest",
      "React Testing Library",
    ],
    process: [
      {
        title: "Intelligent Onboarding",
        description:
          "Attendees scan their face and enter basic details, creating a unique biometric anchor for photo matching.",
      },
      {
        title: "Personalized Gallery Navigation",
        description:
          "Our AI engine automatically filters thousands of event photos to navigate users directly to their private, curated gallery.",
      },
      {
        title: "Gamified Engagement",
        description:
          "Implemented fun, interactive activities like AI Avatar creation to enhance attendee satisfaction and social sharing.",
      },
    ],
    features: [
      "AI-Driven Face Recognition for instant photo delivery.",
      "Custom branded event galleries with social sharing integration.",
      "Interactive 'Avatar Creation' modules for high-engagement networking.",
      "Comprehensive analytics dashboard for event organizers.",
      "Pre-to-Post event engagement tools to maximize organic reach.",
    ],
  },
  {
    id: "3",
    slug: "iinve",
    title: "iinve.com",
    category: "Digital Invitations • Event Experience Platform",
    url: "https://iinve.com",
    tags: ["Product Design", "UX Engineering", "Full-Stack Architecture"],
    image:
      "https://res.cloudinary.com/dx5ugtyis/image/upload/v1775250068/4421c0c0-eb96-4b1e-b50f-e52969dcb381.png",

    description:
      "A modern digital invitation platform transforming static invites into immersive, interactive web experiences.",

    fullDescription:
      "iinve.com reimagines traditional invitations as fully interactive digital experiences—bridging storytelling, design, and real-time web performance. Built for modern celebrations, the platform transforms every invite into a personalized micro-website that feels premium, fast, and emotionally engaging.<br/><br/>As the Creator and Software Engineer, I led the complete product lifecycle—from concept to deployment—crafting a system where aesthetics meet engineering precision. The platform leverages Next.js and Node.js to deliver lightning-fast, SEO-friendly invitation pages, while maintaining a seamless creation flow for users with minimal technical friction.",

    features: [
      "Interactive digital invitation pages with cinematic layouts.",
      "Add your favorite images and videos to your invitation.",
      "Mobile-first responsive design for seamless guest access.",
      "Optimized media delivery for fast-loading visuals and videos.",
      "Custom URL-based invitations for shareable experiences.",
    ],

    process: [
      {
        title: "Experience-First Design",
        description:
          "Designed invitations as narrative-driven web experiences rather than static cards, focusing on emotion, flow, and visual hierarchy.",
      },
      {
        title: "Real-Time Editing Engine",
        description:
          "Engineered a live preview system allowing users to instantly visualize content and design changes without friction.",
      },
      {
        title: "Performance Optimization",
        description:
          "Implemented server-side rendering and optimized asset delivery using Next.js to ensure fast load times across devices.",
      },
    ],

    stats: {
      role: "Creator / Software Engineer ",
      year: "2024",
      performance: "95/100",
    },

    stack: [
      "Next.js",
      "Node.js",
      "Tailwind CSS",
      "Framer Motion",
      "MongoDB / PostgreSQL",
      "Vercel",
    ],
  },
  {
    id: "4",
    slug: "fluid-glass",
    title: "Fluid Glass",
    category: "Open Source • React Library",
    url: "https://www.npmjs.com/package/fluid-glass-react", // Or your GitHub repo
    image:
      "https://res.cloudinary.com/dx5ugtyis/image/upload/v1770284978/fluid-glass-preview_daj6p0.png",
    tags: ["Package Design", "Performance", "DX"],
    description:
      "A high-performance React component library for dynamic, liquid-style frosted glass effects.",
    fullDescription:
      "Fluid Glass was born out of a need for highly performant, customizable glassmorphism effects that don't tank browser frame rates. Traditional backdrop-filters are expensive; this library optimizes rendering cycles and leverages hardware acceleration to provide silky-smooth 'liquid' glass overlays. <br/><br/>The library provides a declarative API for developers to inject sophisticated mesh gradients and frosted aesthetics into any React project with minimal configuration, ensuring a premium look without the CSS headache.",

    features: [
      "Zero-config setup for complex backdrop-filter stacks.",
      "Dynamic Mesh Gradient engine with GPU acceleration.",
      "Tree-shakeable architecture with a sub-5kb footprint.",
      "Fully typed API for seamless TypeScript integration.",
      "Adaptive performance modes for low-power mobile devices.",
    ],
    process: [
      {
        title: "Shader Optimization",
        description:
          "Refined CSS backdrop-filter combinations to ensure consistent 60fps performance across Chromium and WebKit browsers.",
      },
      {
        title: "API Ergonimics",
        description:
          "Designed a 'Lego-block' style component architecture, allowing developers to nest glass layers with automatic inheritance.",
      },
      {
        title: "CI/CD Distribution",
        description:
          "Automated the publishing workflow with semantic versioning and automated bundle size tracking on every PR.",
      },
    ],

    stats: {
      role: "Author / Lead Maintainer",
      year: "2025",
      performance: "< 5kb Gzipped",
    },

    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Rollup",
      "NPM",
      "GitHub Actions",
      "Changesets",
    ],
  },
];
