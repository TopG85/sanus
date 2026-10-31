import vinelifeShot from "../assets/vinelifescreenshot.webp";
import vinelifeBefore1 from "../assets/vinelife-before-1.webp";
import vinelifeBefore2 from "../assets/vinelife-before-2.webp";
import vinelifeAfter1 from "../assets/vinelifeAfter1.webp";
import vinelifeThought from "../assets/vinelifeThought.webp";
import bolusengineShot from "../assets/bolusengine.webp";

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
        summary:
            "A personal health app that calculates meal and correction insulin doses from a built-in food library.",
        overview:
            "BolusEnging is a personal-use app built to make daily insulin dosing calucutions faster and more accurate. It allows users to select foods from a built-in library, calculates the total carbohydrate content of a meal, and provides recommended insulin doses based on user settings.",
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
        summary: "A website prototype and CMS build, mapped out with Relume before development.",
        technologies: ["Wagtail CMS", "Python", "Tailwind CSS", "JavaScript", "Heroku"],
        points: [
            "Planned the site structure with Relume, then built a Wagtail CMS prototype giving the client easy content control.",
        ],
        results: "Lighthouse scores of 98 for Performance, 93 for Accessibility and 91 for SEO.",
        live: "https://bitesize-church-dbbfc2ed86b3.herokuapp.com/",
        code: "https://github.com/TopG85/Bitesize-Church-Colshaw",
    },
    {
        slug: "shutterspace",
        title: "ShutterSpace",
        type: "personal",
        date: "September to October 2025",
        summary: "A photography portfolio platform with user accounts and dynamic portfolios.",
        technologies: ["Python", "Django", "Bootstrap", "Cloudinary", "Heroku"],
        points: [
            "Built a full-stack Django platform with user authentication, dynamic portfolios and automatic image optimisation.",
        ],
        results: "Lighthouse scores of 95 for Performance, 96 for Accessibility and 91 for SEO.",
        live: "https://django-project-shutterspace-a676bf7fbd5b.herokuapp.com/",
        code: "https://github.com/TopG85/ShutterSpace",
    },
    {
        slug: "constcollection",
        title: "Constcollection",
        type: "hackathon",
        date: "October 2025",
        summary: "An accessible artist website delivered on deadline during a team hackathon.",
        technologies: ["Python", "Django", "JavaScript", "Bootstrap", "Heroku"],
        points: ["Split frontend and backend work across the team using Agile practices."],
        results: "",
        live: "https://hackathon-constcollection-e94b800f4c67.herokuapp.com/",
        code: "https://github.com/SourTarte/hackathon-project-constcollection",
    },
    {
        slug: "truthful-news",
        title: "Truthful News",
        type: "hackathon",
        date: "September 2025",
        summary: "A news platform that pulls in live stories from a news API.",
        technologies: ["JavaScript", "Bootstrap", "REST APIs", "HTML", "CSS"],
        points: [
            "Integrated a live news API so content stays current, rather than relying on static pages.",
        ],
        results: "",
        live: "https://dylanaustin-thedreamer.github.io/Global-Trends/",
        code: "https://github.com/DylanAustin-TheDreamer/Global-Trends",
    },
];