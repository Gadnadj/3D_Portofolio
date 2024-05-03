import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  c,
  cplusplus,
  python,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  next,
  figma,
  java,
  meta,
  sce,
  tsahal,
  cafe,
  chouchou,
  MyTrip,
  Portofolio,
  Jarvis,
  rentalcars,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Front End Developer',
    icon: web,
  },
  {
    title: 'React Developer',
    icon: mobile,
  },
  {
    title: 'Responsive Web Design',
    icon: backend,
  },
  {
    title: 'UI/UX Designer',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'next',
    icon: next,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'python',
    icon: python,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },

  {
    name: 'C',
    icon: c,
  },
  {
    name: 'C++',
    icon: cplusplus,
  },

  {
    name: 'java',
    icon: java,
  },
];

const experiences = [
  {
    title: 'Shift Manager',
    company_name: 'Chouchou',
    icon: chouchou,
    iconBg: '#383E56',
    date: 'January 2014 - January 2019',
    points: [
      'Responsible for all restaurant operations.',
      'Overseeing the kitchen.',
      'Coordinating room service.',
      'Managing the bar.',
      'Handling orders and supplies.',
    ],
  },
  {
    title: 'Staff Sergeant Logistic',
    company_name: 'Tsahal',
    icon: tsahal,
    iconBg: '#E6DEDD',
    date: 'April 2016 - January 2019',
    points: [
      'Gained substantial experience in logistics management on a military base.',
      'Duties involved planning, coordinating, and overseeing materials orders.',
      'Handled supplies from other bases.',
      'Role honed organization, time management, and decision-making skills.',
    ],
  },
  {
    title: 'Shift Manager + Barista + Waiter',
    company_name: 'Cafe Gan Sipur',
    icon: cafe,
    iconBg: '#383E56',
    date: 'Jan 2019 - Now',
    points: [
      'Responsible for supervising and coordinating a team of about forty people.',
      'Managing the bar.',
      'Handling orders and supplies.',
    ],
  },
];

const studies = [
  {
    title: 'BSc in Software Engineering',
    company_name: 'Sami Shamon College',
    icon: sce,
    iconBg: '#383E56',
    date: 'April 2020 - October 2024',
    points: [],
  },
  {
    title: 'Meta Front End Developer Certificate',
    company_name: 'Meta',
    icon: meta,
    iconBg: '#E6DEDD',
    date: 'March 2024',
    points: [],
  },
];

const projects = [
  {
    name: 'Rental Cars',
    description:
      'Designed and developed a car rental website aimed at simplifying the process of searching and selecting vehicles based on specific criteria such as brand, model, year, and fuel type. This project was built using React, Next.js, TypeScript, and Tailwind CSS.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'Next.js',
        color: 'green-text-gradient',
      },
      {
        name: 'TypeScript',
        color: 'pink-text-gradient',
      },
      {
        name: 'Tailwind',
        color: 'orange-text-gradient',
      },
    ],
    image: rentalcars,
    source_code_link: 'https://github.com/Gadnadj/rentalcars',
  },
  {
    name: 'MyTrip',
    description:
      'Travelers social network project led by me, offering a platform for users to connect, share, and discover travel experiences. Enhanced skills in JavaScript, HTML, CSS, React, Node, and Express, focusing on UI development and server logic.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'Mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'Node.js',
        color: 'pink-text-gradient',
      },
      {
        name: 'Css',
        color: 'orange-text-gradient',
      },
    ],
    image: MyTrip,
    source_code_link: 'https://github.com/Gadnadj/MyTrip',
  },
  {
    name: 'Portofolio',
    description:
      'Designed and developed a personal portfolio website showcasing my professional experience, academic background, and various projects. Developed using React, Tailwind CSS, and Three.js for integrating 3D elements.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'Tailwind',
        color: 'green-text-gradient',
      },
      {
        name: 'Three.js',
        color: 'pink-text-gradient',
      },
    ],
    image: Portofolio,
    source_code_link: 'https://github.com/Gadnadj/3D_Portofolio',
  },
  {
    name: 'Jarvis Smart Speaker',
    description:
      'Design and development of a smart connected speaker, featuring a custom ChatGPT-based language model with Elevenlabs voice transcription. My contributions spanned model creation, coding, and showcasing AI.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'Css',
        color: 'green-text-gradient',
      },
      {
        name: 'HTML',
        color: 'pink-text-gradient',
      },
    ],
    image: Jarvis,
    source_code_link: 'https://github.com/Gadnadj/SmartSpeaker',
  },
];

export { services, technologies, experiences, studies, projects };
