import vinelifeShot from "../assets/vinelifescreenshot.webp";
import vinelifeBefore1 from "../assets/vinelife-before-1.webp";
import vinelifeBefore2 from "../assets/vinelife-before-2.webp";
import vinelifeAfter1 from "../assets/vinelifeAfter1.webp";
import vinelifeThought from "../assets/vinelifeThought.webp";
import bolusengineShot from "../assets/bolusengine.webp";
import bitesize from "../assets/bitesize.webp";
import shutterspace from "../assets/shutterspace.webp";
import constcollection from "../assets/constcollection.webp";
import openweatherLogo from "../assets/OpenWeather-Master-Logo RGB.webp";
import truthfulNewsShot from "../assets/truthfulnews.webp";


export const projects = [
    {
        slug: "vinelife",
        title: "Vinelife Church",
        type: "client",
        role: "Web Design & Development",
        year: "2026",
        date: "March 2026",
        image: vinelifeShot,
        beforeImages: [
            { src: vinelifeBefore1, caption: "The old homepage" },
            { src: vinelifeBefore2, caption: "The old navigation" },
        ],
        afterImages: [{ src: vinelifeAfter1, caption: "The new homepage" }],
        summary:
            "A live client website with a custom Wagtail CMS, giving the church full content control after handover.",
        overview:
            "Vinelife Church Wilmslow is a welcoming evangelical church based in Wilmslow, Cheshire. The aim of the redesign was to create a modern website that clearly communicates the church's activities and makes it easier for visitors to find important information such as service times and events.",
        problem: [
            "Difficult navigation",
            "No clear structure",
            "Important information hard to find",
            "Links not working correctly",
            "Not optimised for mobile devices",
        ],
        points: [
            "Redesigned and launched a responsive client website, resolving five usability issues.",
            "Built a Wagtail CMS version ready for handover, so the client can manage content without a developer.",
            "Ran a WCAG accessibility audit and automated events with the Google Calendar API.",
        ],
        solution: [
            "Created a clear navigation structure",
            "Divided the site into logical sections",
            "Improved readability and layout",
            "Made the website responsive for mobile devices",
            "Integrated a calendar system to display upcoming meetings",
        ],
        features: [
            {
                title: "Responsive design",
                text: "The site adapts smoothly across desktop, tablet and mobile screens.",
            },
            {
                title: "Events calendar",
                text: "Using the Google Calendar API, monthly worship meetings update automatically.",
            },
            {
                title: "Clear navigation",
                text: "A simple navigation system lets visitors quickly reach the important sections.",
            },
            {
                title: "Thought for the Day",
                text: "Dynamic scripture content, displayed using a Bible verse API.",
                image: vinelifeThought,
            },
        ],
        technologies: ["HTML5", "Wagtail CMS", "Python", "Django", "Tailwind CSS", "JavaScript", "Google Calendar API"],
        outcome:
            "The redesigned website gives the church a clear and welcoming digital presence. Visitors can easily find service times, upcoming events and information about the church community.",
        results:
            "Lighthouse scores of 100 for Accessibility, 100 for SEO and 89 for Performance. 60 active users in September 2026.",
        live: "https://www.vinelifewilmslow.com/",
        code: "https://github.com/TopG85/vinelifewilmslow",
    },
    {
        slug: "bolusengine",
        title: "BolusEngine",
        type: "personal",
        role: "Personnal Project, Design & Development",
        year: "2026",
        date: "September 2026",
        image: bolusengineShot,
        summary: [
            "A personal health app that calculates meal and correction insulin doses from a built-in food library.",
        ],
        overview: [
            "BolusEnging is a personal-use app built to make daily insulin dosing calucutions faster and more accurate. It allows users to select foods from a built-in library, calculates the total carbohydrate content of a meal, and provides recommended insulin doses based on user settings.",
        ],
        problem: [
            "Manual calculations for insulin dosing are time-consuming and prone to error.",
            "Users need a quick and reliable way to determine carbohydrate intake and corresponding insulin doses.",
        ],
        solution: [
            "A searchable, editable food library remove the need to memories or look up carbohydrate values",
            "Automatic dose calculation from a saved insulin-to-carb ratio, with rounding to 0.5 or 1.0 unit steps",
            "An optional correction-dose calculator with built-in validation ranges and a high-dose warning",
            "A running history log so every calculated dose is recorded automatically",
            "Personal settings save automatically, so the app is ready to use immediately on return visits",
        ],
        features: [
            {
                title: "Food library",
                text: "Built-in library with 40+ common items and their carb counts.",
            },
            {
                title: "Custom foods",
                text: "Custom food entries save and persist between sessions.",
            },
            {
                title: "One-step calculation",
                text: "Combined meal and correction dose calculation in one step.",
            },
            {
                title: "Two platforms",
                text: "Deployed as both a native app (Expo) and a standalone web app.",
            },
        ],
        technologies: ["HTML5", "React Native", "Expo Go", "JavaScript"],
        points: [
            "Built one app on two platforms: native iOS through Expo Go and a web version on GitHub Pages.",
            "Totals carbs across a multi-item meal from a 30-food library and calculates correction doses.",
        ],
        results: "Lighthouse scores of 97 for Performance, 100 for Best Practices and 90 for SEO.",
        live: "https://bolusengine.co.uk/",
        code: "https://github.com/TopG85/carb-counter-app",
    },
    {
        slug: "bitesize",
        title: "Bitesize Church",
        type: "client",
        date: "March 2026",
        year: "2026",
        image: bitesize,
        summary: [
            "A modern, affordable website for Bitesize Church in Colshaw, Wilmslow, Cheshire - designed so the owner can easily update content, just like posting on facebook, but with a unique Bitesize theme.",
        ],
        problem: [
            "No website — only a Facebook page for updates.",
            "Owner concerned about the cost of a website.",
            "Needed a way to update content easily, without technical skills.",
            "Limited online reach and discoverability.",
        ],
        solution: [
            "Developed with Django and Wagtail CMS for easy, Facebook - like content updates.",
            "Owner can log in and add/edit news, events, and images without coding.",
            "Tailwind CSS for a unique, on-brand look.",
            "Mobile-first, accessible design.",
            "Affordable and scalable for future needs.",
        ],
        outcome: [
            "Bitesize Church now has a professional, easy-to-update website. The owner can manage content without technical help, and the church’s activities are more visible to the local community and beyond.",
        ],
        features: [
            {
                title: "Easy Content Management:",
                text: "Owner can update pages, news, and events via a user-friendly admin panel.",
            },
            {
                title: "Mobile-First Design",
                text: "Looks great on phones, tablets, and desktops.",
            },
            {
                title: "On-Brand Styling",
                text: "Custom Tailwind CSS for a Bitesize Church look and feel.",
            },
            {
                title: "Scalable Platform",
                text: "Built with Django and Wagtail for future growth.",
            },
        ],
        technologies: ["Wagtail CMS", "Python", "Tailwind CSS", "JavaScript", "Heroku"],
        results: "Lighthouse scores of 98 for Performance, 93 for Accessibility and 91 for SEO.",
        live: "https://bitesize-church-dbbfc2ed86b3.herokuapp.com/",
        code: "https://github.com/TopG85/Bitesize-Church-Colshaw",
    },
    {
        slug: "shutterspace",
        title: "ShutterSpace",
        type: "personal",
        date: "September to October 2025",
        image: shutterspace,
        summary: [
            "A full-stack photography portfolio platform designed for photographers to showcase their work, build a profile and connect through thoughtful community features.",
        ],
        overview: [
            "ShutterSpace provides a focused alternative to general-purpose social platforms: a clean, responsive space that gives photography the visual priority. It combines professional presentation with community tools so photographers can publish work and engage with other creators.",
        ],
        features: [
            {
                title: "Photographer profiles",
                text: "Profiles with avatars, hero images, biographies and links.",
            },
            {
                title: "Photo uploads",
                text: "Photos are uploaded and delivered through Cloudinary.",
            },
            {
                title: "Community interaction",
                text: "Likes, comments and notifications encourage engagement.",
            },
            {
                title: "Visibility controls",
                text: "Public and private visibility controls for portfolio management.",
            },
            {
                title: "Responsive design",
                text: "Layouts designed for desktop, tablet and mobile browsing.",
            },
        ],
        technologies: ["HTML5", "Bootstrap", "JavaScript", "Python", "Django", "PostgreSQL", "Cloudinary", "Heroku"],
        points: [
            "Built a full-stack Django platform with user authentication, dynamic portfolios and automatic image optimisation.",
            "Designed Django ORM models for profiles, photos, comments, likes and notifications.",
            "Configured PostgreSQL for production with environment-based settings.",
            "Used Cloudinary for media hosting, image optimisation and scalable delivery.",
        ],
        results: "Lighthouse scores of 95 for Performance, 96 for Accessibility and 91 for SEO.",
        live: "https://django-project-shutterspace-a676bf7fbd5b.herokuapp.com/",
        code: "https://github.com/TopG85/ShutterSpace",
    },
    {
        slug: "constcollection",
        title: "Constcollection",
        type: "hackathon",
        role: "Team Hackathon Project, Django Backend (Art Categorisation System)",
        year: "2025",
        date: "October 2025",
        image: constcollection,
        summary:
            "A Django-built, responsive portfolio site for Swedish artist Cecilia Kristoffersson, created during a student hackathon.",
        overview:
            "Constcollection is a minimalist, accessible website built to showcase the work of Swedish artist Cecilia Kristoffersson. The site's main goal was to keep visitors' attention on the artwork itself, while giving the artist a way to manage her own gallery content without ever needing to touch the Django admin panel directly. It includes a front-end curator mode for adding, editing and organising artwork, separate sections for the gallery, biography and past exhibitions, and a colour palette drawn directly from one of the artist's own paintings. It is deployed on Heroku with a PostgreSQL database and Cloudinary for image hosting.",
        problem: [
            "The artist needed a professional online presence to showcase her collections",
            "Managing content shouldn't require technical knowledge of a Django admin panel",
            "The design needed to stay out of the way and let the artwork be the focus",
            "The site needed to meet strong accessibility and colour-contrast standards",
        ],
        solution: [
            "Built a curator mode so the artist can add, edit and organise media from the site itself",
            "Modelled Media, Category and About Section content separately in Django for flexibility",
            "A minimalist navigation bar, tucked away in a toggle so it doesn't distract from the art",
            "Colour and typography chosen to reflect the artist's own visual style",
            "All pages tested against WCAG AAA colour contrast standards",
        ],
        features: [
            {
                title: "Curator admin panel",
                text: "Add, edit or delete artwork, categories and exhibitions from the front end.",
            },
            {
                title: "Gallery",
                text: "Displays all art pieces, filterable by category.",
            },
            {
                title: "About and exhibitions pages",
                text: "Biography and exhibition history, separate from the gallery itself.",
            },
            {
                title: "Toggle navigation",
                text: "Keeps the interface minimal so the artwork stays the focus.",
            },
            {
                title: "WCAG AAA contrast",
                text: "All colour combinations tested for the strictest accessibility standards.",
            },
        ],
        technologies: ["HTML5", "CSS", "Python", "Django", "JavaScript", "Bootstrap", "Heroku", "PostgreSQL", "Cloudinary"],
        points: [
            "Built the Django backend categorisation system, letting the artist organise her media into categories that power how art is grouped and filtered across the site.",
        ],
        outcome:
            "The team delivered a working, deployed portfolio site within the hackathon timeframe, with nearly every page passing HTML validation cleanly and all colour choices meeting WCAG AAA contrast requirements. A few known bugs remain around delete-confirmation modals in curator mode, documented in the project README. Full delete functionality is still available through the Django admin panel as a working alternative. The category system works entirely behind the scenes: visitors never see it directly, but it powers how art is grouped and filtered throughout the site.",
        live: "https://hackathon-constcollection-e94b800f4c67.herokuapp.com/",
        code: "https://github.com/SourTarte/hackathon-project-constcollection",
    },
    {

        slug: "truthful-news",
        title: "Truthful News",
        type: "hackathon",
        role: "Team Hackathon Project, Wireframes & UX Design",
        year: "2026",
        date: "September 2025",
        image: truthfulNewsShot,
        summary:
            "A hackathon-built, real-time news and fact-checking platform designed to combat misinformation and promote media literacy through clear, accessible, verified content.",
        overview:
            "Truthful News was built by a small team over a hackathon sprint, with the goal of helping people navigate current events confidently, whether they're beginners, non-native speakers, or critical thinkers looking to verify a claim before sharing it. The site combines short, clear news updates with tools to fact-check trending claims, alongside a local weather forecast as a small bonus feature.",
        problem: [
            "Misinformation spreads quickly online, influencing public opinion and decision-making",
            "Many news sources aren't accessible to non-native speakers or new internet users",
            "People need a fast way to check whether a viral claim or headline is actually true",
            "Existing news sites are rarely designed with accessibility or media literacy as a priority",
        ],
        points: [
            "Designed the wireframes, establishing layouts that prioritised accessibility and a clear user experience.",
            "The wireframes guided the rest of the team's development work.",
        ],
        solution: [
            "Short, plain-language news updates instead of dense, jargon-heavy articles",
            "A dedicated fact-check section pairing each claim with its verdict and source",
            "Mobile-first, responsive layout tested across phone, tablet and desktop breakpoints",
            "Semantic HTML and ARIA labelling throughout to support screen readers and assistive technology",
            "Wireframes designed with accessibility and clear content hierarchy as the starting point",
        ],
        features: [
            {
                title: "Fact-check cards",
                text: "Each claim is shown with its verdict, source and a timestamp for transparency.",
            },
            {
                title: "Trending claims alerts",
                text: "Surfaces claims currently being flagged as false or misleading.",
            },
            {
                title: "Search and filtering",
                text: "Lets users quickly find claims or topics relevant to them.",
            },
            {
                title: "Local weather forecast",
                text: "A small added-value feature alongside the news content.",
            },
            {
                title: "Accessibility-first build",
                text: "WCAG-compliant, with semantic markup and clear, readable typography.",
            },
        ],
        technologies: ["HTML5", "CSS", "Bootstrap", "JavaScript", "NewsAPI", "Google Fact Check API", "OpenWeather API"],
        outcome:
            "The team shipped a working, accessible fact-checking platform within the hackathon timeframe, passing W3C HTML and CSS validation with no errors and meeting WCAG accessibility targets.",
        results: "",
        live: "https://dylanaustin-thedreamer.github.io/Global-Trends/",
        code: "https://github.com/DylanAustin-TheDreamer/Global-Trends",
    },
];