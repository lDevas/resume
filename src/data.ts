import email from './assets/email.svg';
import github from './assets/github.svg';
import linkedin from './assets/linkedin.png';

export interface Link {
  type: string;
  name: string;
  imgSrc: string;
  href: string;
}

export interface PersonalInformation {
  name: string;
  title: string;
  location: string;
  description: string;
  links: Link[];
}

export const personalInformation: PersonalInformation = {
  name: 'Renzo Scuadroni',
  title: 'Senior Software Engineer',
  location: 'Montevideo, Uruguay',
  description: 'I am Software Engineer with a track record of success in developing and delivering high-quality software solutions. With a strong background in Typescript, be it on the frontend with React or in the backend with Node, however I don\'t shy away from challenges in other languages and technologies.\n\nI\'ve experience leading teams of engineers and designers in order to deliver Software and everything that supports it by providing an environment that fosters personal and professional growth.\n\nIn my free time I enjoy table-top games, video games, traveling, coffee and music.',
  links: [
    {
      type: 'GitHub',
      name: 'ldevas',
      imgSrc: github,
      href: 'https://github.com/ldevas',
    },
    {
      type: 'LinkedIn',
      name: '/in/renzo-scuadroni',
      imgSrc: linkedin,
      href: 'https://www.linkedin.com/in/renzo-scuadroni',
    },
    {
      type: 'Email',
      name: 'renzoscuadroni@outlook.com',
      imgSrc: email,
      href: 'mailto:renzoscuadroni@outlook.com',
    },
  ]
};

export interface Experience {
  client: string;
  role: string;
  timeframe: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    client: 'Qubika',
    role: 'Lead Software Engineer',
    timeframe: 'Feb, 2017 - Present',
    description: 'I am responsible for leading a team of developers and initiating new projects from within the company. I collaborate with cross-functional teams to gather requirements, design and implement software solutions, as well as support internal processes like technical interviews, mentoring, onboardings and trainings.',
  },
  {
    client: 'Hulu / Disney Streaming, Data Portal',
    role: 'Software Engineer', 
    timeframe: 'Jun, 2023 - Present',
    description: 'At Data my responsability is to lead a small team that maintains a solution that allows users to quickly load reports from different BI tools. While working on this team, I partnered with other engineers, managers, designers and product managers in order to improve the experience of the end user.',
  },
  {
    client: 'Hulu / Disney Streaming, Instrumentation',
    role: 'Software Engineer',
    timeframe: 'Jan, 2020 - Jun, 2023',
    description: 'My work at Instrumentation initally involved updating and upgrading a service that provided users a way to see, document and version different event validation schemas, later my role slowly evolved into a leadership one, involving a handful of engineers and designers.',
  },
  {
    client: 'Prescribe Wellness',
    role: 'Software Engineer',
    timeframe: 'Jun, 2017 - Oct, 2019',
    description: 'I developed, maintained and lead a team that built many small applications using React and Redux enabling pharmacies to track patient information like vaccines, medications, refills and illnesses across pharmacy chains.',
  },
];

export interface Skill {
  name: string;
  level: number;
  active: boolean;
}

export const skills: Skill[] = [
  {
    name: 'TypeScript',
    level: 1,
    active: true,
  },
  {
    name: 'JavaScript',
    level: 2,
    active: true,
  },
  {
    name: 'HTML',
    level: 2,
    active: true,
  },
  {
    name: 'CSS',
    level: 2,
    active: true,
  },
  {
    name: 'React',
    level: 2,
    active: true,
  },
  {
    name: 'NodeJS',
    level: 2,
    active: true,
  },
  {
    name: 'NextJS',
    level: 0,
    active: true,
  },
  {
    name: 'Redux',
    level: 2,
    active: true,
  },
  {
    name: 'Jest',
    level: 1,
    active: true,
  },
  {
    name: 'SQL',
    level: 2,
    active: true,
  },
  {
    name: 'AWS',
    level: 1,
    active: true,
  },
  {
    name: 'Docker',
    level: 1,
    active: true,
  },
  {
    name: 'Kubernetes',
    level: 0,
    active: true,
  },
  {
    name: 'Git',
    level: 2,
    active: true,
  },
  {
    name: 'Scrum',
    level: 1,
    active: true,
  },
];

export interface Education {
  institute: string;
  title: string;
  timeframe: string;
  description: string;
}

export const educations: Education[] = [
  {    
    institute: 'Universidad ORT Uruguay',
    title: 'Software Engineer',
    timeframe: 'Mar, 2013 - Apr, 2018',
    description: 'Graduated with 90% average grade.',
  }
];