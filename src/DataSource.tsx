const heroHeader = {
    title: "Jeffrey Helder",
    subTitle: "Web Developer | Digital Strategist",
    description: "Welcome to my portfolio! I'm Jeffrey Helder, a passionate web developer and digital strategist. My expertise lies in crafting digital success stories using a variety of technologies and tools. Here's a glimpse into who I am and what I do."
}

const sectionTitles = {
    portfolio: {
        title: "Some Work",
        subtitle: "Here's a collection of pieces I've made."
    },
    contact: {
        title: "Contact Me",
        subtitle: "Use this awesome form to get a hold of me."
    },
    about: {
        title: 'About Me',
        subtitle: "A little more context of who I am as a person."
    }
}

const socialLinks = {
    github: 'https://github.com/JeffreyHelder',
    instagram: 'https://www.instagram.com/tellemore.tech/',
    linkedin: 'https://www.linkedin.com/in/jeffrey-helder/'
}

const goalItems = [
    { 
        title: "Professional Goal", 
        description: "I want to continue growing as a developer, but with a more focused and clear path. My goal is to work for an established company where I master their tech stack and grow into a senior position where I can help mentor and coach new developers."
    },
    { 
        title: "Personal Goal", 
        description: "I want release content to help simplify the digital aspects of launching a brand/business for early entrepreneurs. From online advertising to building a website, getting their email set up, social media, email marketing, booking engines, and phone systems."
    },
    { 
        title: "Developer Goal", 
        description: "The next exciting project I want to build is a dashboard that connects multiple 3rd party APIs and services together. I will get to leverage my frontend skills, enhance my backend knowledge, and dive deep into utilizing APIs."
    }
]

const aboutItems = {
    hobbies: [
        "☕ As a dev I traditionally can't live without coffee.", 
        "🐮 I have a sweet spot for animals of all kinds.",
        "🍺 What can I say, I love a craft beer or a classic Pabst.",
        "🛠️ I'm a sucker for a makeshift DIY projects.",
        "🧑‍🔧 I find myself under a car pretty often."
    ],
    work: [
        "💻 I started freelancing as a web dev in college.",
        "🎓 Started as a Junior React Dev out of college.",
        "🤓 Grew into an Intermediate Dev in 4 months.",
        "📰 Started UX Strategy & Web Design professionally.",
        "👋 Left Agency life in 2022 and started Freelancing."
    ]
}

const pieces = [
    {
        title: "B2B Tellemore Tech",
        image: 'http://localhost:3000/b2b-tellemore.jpg',
        link: 'https://tellemore.framer.ai/',
        description: 'Fully functioning website for a Web Development company targeting B2B businesses. Framer & Reactjs.',
        repo: undefined
    },
    {
        title: "B2C Tellemore Tech",
        image: 'http://localhost:3000/b2c-tellemore.jpg',
        link: 'https://tellemore.tech/',
        description: 'Functioning single page website for a Web Development company used to provide information. Framer & Reactjs.',
        repo: undefined
    },
    {
        title: "Ontario Trade Ads",
        image: 'http://localhost:3000/ota-wordpress.jpg',
        link: 'https://ontariotradeads.ca/',
        description: 'This is a functioning website for a Lead-Gen business targeting Trades and Labour. Wordpress + Breakdance.',
        repo: undefined
    },
    {
        title: "Full Bar Agency",
        image: 'http://localhost:3000/full-bar-agency.jpg',
        link: 'https://full-bar-agency.framer.website/',
        description: 'This was a quick concept piece made for an creative agency I was working with. Made with Framer.',
        repo: undefined
    },
    {
        title: "Norfolk Pressure Washing",
        image: 'http://localhost:3000/norfolk-washing.jpg',
        link: 'https://full-bar-agency.framer.website/',
        description: 'This is a demo website for a pressure washing company. Nextjs & Chakra.',
        repo: 'https://github.com/JeffreyHelder/npw'
    },
    {
        title: "Spot On Window Cleaning",
        image: 'http://localhost:3000/spot-on.jpg',
        link: 'https://full-bar-agency.framer.website/',
        description: 'A fun window cleaning website from my earlier days. Made with Reactjs & SCSS.',
        repo: 'https://github.com/JeffreyHelder/spoton'
    }
]

export default pieces;
export { heroHeader, aboutItems, goalItems, socialLinks, sectionTitles };