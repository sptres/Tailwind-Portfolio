import { nanoid } from 'nanoid';
import {
  FaDatabase,
  FaHtml5,
  FaJs,
  FaNode,
  FaPython,
  FaReact,
} from 'react-icons/fa';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML & CSS',
    icon: <FaHtml5 className="h-16 w-16 text-orange-500" />,
    text: 'Expert in HTML & CSS, creating fun, interactive designs with a focus on visual appeal and responsive user experiences.',
  },
  {
    id: nanoid(),
    title: 'JavaScript & TypeScript',
    icon: <FaJs className="h-16 w-16 text-orange-500" />,
    text: 'Proficient in JavaScript and TypeScript, building dynamic, interactive web applications with seamless user interactions and robust functionality.',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className="h-16 w-16 text-orange-500" />,
    text: 'Highly skilled in React, developing efficient, interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'Node.js',
    icon: <FaNode className="h-16 w-16 text-orange-500" />,
    text: 'Experienced in building robust back-end systems with Node.js, ensuring scalable and high-performance server-side applications.',
  },
  {
    id: nanoid(),
    title: 'Python',
    icon: <FaPython className="h-16 w-16 text-orange-500" />,
    text: 'Proficient in Python, specializing in manipulating data structures and implementing algorithms for efficient data processing.',
  },
  {
    id: nanoid(),
    title: 'Databases',
    icon: <FaDatabase className="h-16 w-16 text-orange-500" />,
    text: 'Skilled in database management with MongoDB and PostgreSQL, ensuring efficient data storage, retrieval, and manipulation.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: 'https://www.verdict.co.uk/wp-content/uploads/2022/09/shutterstock_1934243669.jpg',
    url: 'https://beautiful-madeleine-ff4949.netlify.app/',
    github: 'https://github.com/sptres/games-hub',
    title: 'Games Hub',
    text: 'Games Hub is a web application that showcases and links to various online games. Built using React and styled with Tailwind CSS, it features a hero section, animated elements, and gaming cards with links to the games.',
  },
  {
    id: nanoid(),
    img: 'https://hips.hearstapps.com/hmg-prod/images/crepes-index-64347419e3c7a.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*',
    url: 'https://github.com/sptres/-Pie-Chef',
    github: 'https://github.com/sptres/-Pie-Chef',
    title: 'Pie Chef',
    text: 'Pie Chef is a recipe sharing app where users can post, browse, and save their favorite recipes. Built with React, Tailwind CSS, and Node.js, it offers a responsive design and secure user authentication.',
  },
  {
    id: nanoid(),
    img: 'https://media.stubhubstatic.com/stubhub-v2-catalog/d_defaultLogo.jpg/t_f-fs-0fv,q_auto:low,f_auto,c_fill,$w_280_mul_3,$h_180_mul_3/categories/5973/6317705',
    url: 'https://github.com/sptres/ticketmaster-clone',
    github: 'https://github.com/sptres/ticketmaster-clone',
    title: 'Ticket Puncher',
    text: 'Ticket Puncher is a web applications that mimics the functionality of tickets marketplace. It is built using TypeScript, NodeJS, Docker, Kubernetes, MongoDB, Stripe.',
  },
];
