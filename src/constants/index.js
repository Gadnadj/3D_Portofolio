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
  git,
  figma,
  meta,
  sce,
  tsahal,
  cafe,
  carrent,
  jobit,
  chouchou,
  tripguide,
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
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
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
    name: 'React JS',
    icon: reactjs,
  },

  {
    name: 'Tailwind CSS',
    icon: tailwind,
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
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
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
    title: 'BSc in Computer Science',
    company_name: 'Sami Shamon College',
    icon: sce,
    iconBg: '#383E56',
    date: 'April 2020 - October 2024',
    points: [],
  },
  {
    title: 'Front End Developer Certifications',
    company_name: 'Meta',
    icon: meta,
    iconBg: '#E6DEDD',
    date: 'February 2024',
    points: [],
  },
];

const projects = [
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://github.com/',
  },
];

export { services, technologies, experiences, studies, testimonials, projects };
