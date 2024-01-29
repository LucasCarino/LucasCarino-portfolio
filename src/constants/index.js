import {
  frontend,
  pmanagement,
  ux,
  prototyping,
  javascript,
  typescript,
  ui5,
  fiori,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  conexionag,
  expertease,
  sapui_1,
  sapui_2,
  sapui_3,
  sapui_4,
  sapui_5,
  leaderboard,
  math,
  movie,
  nyeusi,
  python,
  bootstrap,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  accenture,
  ag,
  galicia
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Project Management',
    icon: pmanagement,
  },
  {
    title: 'UX/UI Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'SAPUI5',
    icon: ui5,
  },
  {
    name: 'SAP Fiori',
    icon: fiori,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Node JS',
    icon: nodejs,
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
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'Tailwind',
    icon: tailwind,
  },
  {
    name: 'Bootstrap',
    icon: bootstrap,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'Figma',
    icon: figma,
  },
  {
    name: 'Python',
    icon: python,
  },
];

const experiences = [
  {
    title: 'SAP Fiori Developer',
    company_name: 'Accenture',
    icon: accenture,
    iconBg: '#333333',
    date: 'May 2021 - Present',
  },
  {
    title: 'Frontend Developer (Freelance)',
    company_name: 'Conexion AG',
    icon: ag,
    iconBg: '#333333',
    date: 'Sep 2020 - Present',
  },
  {
    title: 'SAP Fiori Developer',
    company_name: 'Banco Galicia',
    icon: galicia,
    iconBg: '#333333',
    date: 'Apr 2023 - Sep 2023',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Conexion AG',
    description: 'Website built with React and Tailwind.',
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
    image: conexionag,
    repo: 'https://github.com/LucasCarino/conexion-ag-proyecto',
    demo: 'https://conexionag.com.ar/',
  },
  {
    id: 'project-2',
    name: 'Expert-ease',
    description:
      'A commerce website built with React, Node.js, MongoDB and Tailwind, currently the backend is not working.',
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
    image: expertease,
    repo: 'https://github.com/LucasCarino/ExpertEase',
    demo: 'https://expert-ease.netlify.app/',
  },
];

const sap = [
  {
    id: 'project-1',
    name: 'App 1',
    image: sapui_4,
    demo: 'https://ibb.co/fXc4Rrp',
  },
  {
    id: 'project-2',
    name: 'App 2',
    image: sapui_2,
    demo: 'https://ibb.co/bP8x3Yb',
  },
  {
    id: 'project-3',
    name: 'App 3',
    image: sapui_3,
    demo: 'https://ibb.co/bLdgXpx',
  },
  {
    id: 'project-4',
    name: 'App 4',
    image: sapui_1,
    demo: 'https://ibb.co/kBmdqYJ',
  },
  {
    id: 'project-5',
    name: 'App 5',
    image: sapui_5,
    demo: 'https://ibb.co/fDXX6Dv',
  },

];

export { services, technologies, experiences, projects, sap };
