import { nanoid } from 'nanoid';
import {
  FaDatabase,
  FaHtml5,
  FaJs,
  FaNode,
  FaNodeJs,
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
    img: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'first project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'second project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'third project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
];
