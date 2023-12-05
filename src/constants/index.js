import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  dalle,
  ai,
  getrich,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "React Native Development",
    icon: mobile,
  },
  {
    title: "Backend Development",
    icon: backend,
  },
  {
    title: "Content Creating",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "React.js Development",
    company_name: "Websites",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2019 - Till Date",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Steering through the complexities of web development with elegant and efficient JavaScript solutions.",
      "Transforming concepts into dynamic, user-friendly web applications with the magic of JavaScript.",
    ],
  },
  {
    title: "Web Development",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Till Date",
    points: [
      "Meticulously coding interactive masterpieces that breathe life into pixels.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Building high-performance and responsive web solutions that leave a lasting impression.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Development",
    company_name: "E-Markets",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Daniel proved me wrong.",
    name: "Client",
    designation: "Manager",
    company: "Business Owner",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Daniel does.",
    name: "Client",
    designation: "CEO",
    company: "Business Owner",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Adesh Daniel optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Client",
    designation: "CEO",
    company: "Business Owner",
    image: "https://randomuser.me/api/portraits/men/30.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/AdeshDaniel/carmorent",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/AdeshDaniel/react_native_jobs",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/AdeshDaniel/travel-companion",
  },
  {
    name: "Dalle Clone",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "reactJs",
        color: "blue-text-gradient",
      },
      {
        name: "restApi, mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: dalle,
    source_code_link: "https://github.com/AdeshDaniel/dalle_clone",
  },
  {
    name: "AI Summarizer",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "reactJs",
        color: "blue-text-gradient",
      },
      {
        name: "restApi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: ai,
    source_code_link: "https://github.com/AdeshDaniel/ai_summerizer",
  },
  {
    name: "GetRich Food UI",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "reactJs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "UI/UX",
        color: "pink-text-gradient",
      },
    ],
    image: getrich,
    source_code_link: "https://github.com/AdeshDaniel/restaurant_ui",
  },
];

export { services, technologies, experiences, testimonials, projects };
