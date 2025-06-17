import { Languages } from "lucide-react";

export const myProjects = [
  {
    id: 1,
title: "Newsglobe Google Chrome Extension",
Languages: "HTML, CSS, JavaScript, News API, OpenAI Gemini",
description: `Built a multifunctional Chrome Extension using HTML, CSS, JavaScript, enabling users to view real-time news headlines via
News API integration and integrated OpenAI's Gemini AI for AI-generated responses alongside live updates.`,
subDescription: [
      "Implemented search functionality, language filtering (5+ languages), and category-based news browsing. Engineered interaction between multiple APIs, enhancing user engagement by 50% and improving the overall userexperience.",
    ],
    href: "https://drive.google.com/file/d/16-2HOZrOsYJpQSppeKFOGx0uOaLj25y-/view?usp=sharing",
    logo: "",
    image: "/MainPortfolio/assets/projects/news.jpeg",
    tags: [
      {
        id: 1,
        name: "HTML",
        path: "/MainPortfolio/assets/logos/html5.svg",
      },
      {
        id: 2,
        name: "CSS",
        path: "/MainPortfolio/assets/logos/css3.svg",
      },
      {
        id: 3,
        name: "Javascript",
        path: "/MainPortfolio/assets/logos/javascript.svg",
      },
    ],
  },
  {
    id: 2,
    title: "ConnectX",
    Languages :"Next.js, Clerk, GetStream, Tailwind CSS",
    description:
      "Building a scalable Zoom-style web app using Next.js, supporting secure meeting creation, scheduling, and participation for 50+ concurrent users.",
    subDescription: [
      "Integrated Clerk authentication with multi-provider login and role-based access, ensuring secure user sessions and data privacy",
    ],
    href: "https://github.com/IshikaSoni056/Video_Conferencing_App",
    logo: "",
    image: "/MainPortfolio/assets/projects/connectx.png",
    github: "https://github.com/IshikaSoni056/Video_Conferencing_App",
    tags: [
      {
        id: 1,
        name: "Auth0",
        path: "/MainPortfolio/assets/logos/auth0.svg",
      },
      {
        id: 2,
        name: "React",
        path: "/MainPortfolio/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "SQLite",
        path: "/MainPortfolio/assets/logos/sqlite.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/MainPortfolio/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Flappy Bird Game ",
    Languages: "HTML, CSS, JavaScript, Firebase",
    description:
      "Developed a fully responsive Flappy Bird game using HTML5, CSS3, and JavaScript, optimized for desktop and mobile devices with 100% screen compatibility",
    subDescription: [
      "Implemented real-time score tracking and integrated Firebase Firestore to store and manage player data. Developed logic to automatically update high scores and display the top scorer's name, promoting competition and replayability.",
    ],
    href: "https://ishikasoni056.github.io/FlappyBird/",
    logo: "",
    image: "/MainPortfolio/assets/projects/flappybird.png",
    github: "https://github.com/IshikaSoni056/FlappyBird",
    tags: [
      {
        id: 1,
        name: "HTML",
        path: "/MainPortfolio/assets/logos/html5.svg",
      },
      {
        id: 2,
        name: "CSS",
        path: "/MainPortfolio/assets/logos/css3.svg",
      },
      {
        id: 3,
        name: "Javascript",
        path: "/MainPortfolio/assets/Tech/javascript.png",
      },
      {
        id: 4,
        name: "Firebase",
        path: "/MainPortfolio/assets/Tech/firebase.png",
      },
    ],
  },
   {
    id: 4,
    title: "My Portfolio",
    Languages: "ReactJS, TailwindCSS, Framer Motion",
    github: "https://github.com/IshikaSoni056/MainPortfolio",
    description:
      "Designed and developed a responsive personal portfolio using React.js, showcasing projects, skills, and contact information. Implemented parallax and motion animations using Framer Motion to create an engaging user experience.",
    subDescription: [
      "Ensured mobile-first design and smooth transitions to enhance accessibility and interactivity across all devices.",
    ],
    href: "https://ishikasoni056.github.io/MainPortfolio/",
    logo: "",
    image: "/MainPortfolio/assets/projects/Portfolio.png",
    tags: [
      {
        id: 1,
        name: "ReactJS",
        path: "/MainPortfolio/assets/Tech/reactjs.png",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/MainPortfolio/assets/Tech/tailwind.png",
      },
      {
        id: 3,
        name: "Javascript",
        path: "/MainPortfolio/assets/Tech/javascript.png",
      },
    ],
  },
    {
    id: 5,
title: "ImageSlider",
Languages: "HTML, CSS, JavaScript",
description: ` Developed a responsive image slider using vanilla HTML, CSS, and JavaScript to enhance visual storytelling on web pages.`,
subDescription: [
      "Integrated CSS transitions and JavaScript event listeners for seamless user experience.",
    ],
    href: "https://ishikasoni056.github.io/ImageSlider/",
    logo: "",
    image: "/MainPortfolio/assets/projects/imageslider.png",
  github: "https://github.com/IshikaSoni056/ImageSlider ",
    tags: [
      {
        id: 1,
        name: "HTML",
        path: "/MainPortfolio/assets/logos/html5.svg",
      },
      {
        id: 2,
        name: "CSS",
        path: "/MainPortfolio/assets/logos/css3.svg",
      },
      {
        id: 3,
        name: "Javascript",
        path: "/MainPortfolio/assets/logos/javascript.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: "/MainPortfolio/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/ali-sanati/",
    icon: "/MainPortfolio/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ali.sanatidev/reels/",
    icon: "/MainPortfolio/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Full Stack Developer Intern",
    job: "Jobsdoor360",
    date: "May 2025 - July 2025",
    contents: [
      "Built and deployed a responsive landing page using HTML, CSS, JavaScript, boosting user engagement by 25%.",
      "Designed and developed a comprehensive Admin Master Panel to monitor and manage user profiles, with full backend integration",
      "Developed and updated the Assessment Section of the site, adding 300+ topic-wise questions and quizzes across multiple subtopics, storing all data in Firebase Firestore.",
      "Developed applications for industrial automation, leveraging C++ and the Fatek API for PLC communicationPerformed end-to-end functionality testing of the website, identifying and resolving 10+ UI/UX bugs to ensure seamless operation across devices.",
      "Additionally, implemented a dedicated Recruiter Hire Page, enabling recruiters to seamlessly post job listings and track applicant submissions in real time.",
    ],
  },
  {
    title: "Content Head",
    job: "Google Developer Student Clubs",
    date: "2024-2025",
    contents: [
      "Led the content strategy and execution for all GDSC events, workshops, and campaigns, impacting over 500+ students across campus.",
      "Created and managed technical and non-technical content including Social media posts, Workshop announcements, Event banners & copy, Technical blog posts & recaps",
      "Collaborated with cross-functional teams to ensure content alignment with GDSC's mission and goals, resulting in a 30% increase in event participation.",
    ],
  },
  {
    title: "Freelance Developer",
    job: "Self-Employed",
    date: "2025-Present",
    contents: [
      "Created a personal portfolio using Three.js, React, Vite, and WebAPI to showcase technical expertise.",
      "Continuously enhancing technical skills and expanding expertise in modern web development and back-end technologies.",
    ],
  },
];
export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/MainPortfolio/assets/projects/news.png" ,
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "/MainPortfolio/assets/projects/flappybird.png",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/MainPortfolio/assets/projects/news.png",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "/MainPortfolio/assets/projects/news.png",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "/MainPortfolio/assets/projects/news.png",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "/MainPortfolio/assets/projects/flappybird.png",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "/MainPortfolio/assets/projects/flappybird.png",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "/MainPortfolio/assets/projects/flappybird.png",
  },

  
];
