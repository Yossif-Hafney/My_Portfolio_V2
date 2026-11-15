export const profile = {
  name: 'Yossif Hafney',
  title: 'Frontend Engineer',
  email: 'eng.yossifhafney@gmail.com',
  phone: '+2001501883168',
  phoneLink: '+2001501883168',
  location: 'El Mahalla El Kubra / Cairo, Egypt',
  summary:
    'Detail-oriented Frontend Developer and Computer & Systems Engineering student with hands-on experience building scalable, responsive web applications using Vue.js, Nuxt.js, and Tailwind CSS. Proven ability to integrate complex frontend components into production systems and legacy architectures (PHP/Laravel). Strong foundation in computer science core principles, actively expanding full-stack capabilities with React, Next.js, and backend frameworks.',
}

export const skills = {
  frontend: ['JavaScript (ES6+)', 'React', 'Next.js', 'Vue.js', 'Nuxt.js', 'HTML5', 'CSS3', 'Tailwind CSS'],
  tools: ['Git', 'GitHub', 'Vite', 'VS Code', 'Linux'],
  concepts: ['Component-Based Architecture', 'Responsive Design', 'State Management', 'REST API Integration'],
  soft: ['Problem Solving', 'Teamwork & Collaboration', 'Communication', 'Cross-functional Collaboration', 'Technical Communication'],
}

export const projects = [
  {
    slug: 'wfdp-website',
    title: 'WFDP Website',
    image: '/images/projects/wfdp-website.webp',
    gallery: [
      {
        src: '/images/wfdp/WFDP-Home-09-23-2026_03_21_AM.webp',
        alt: 'WFDP website home page, showing its landing page layout.',
        label: 'Home page',
      },
      {
        src: '/images/wfdp/Mission-Goals-WFDP-09-23-2026_03_21_AM.webp',
        alt: 'WFDP mission and goals page.',
        label: 'Mission and goals',
      },
      {
        src: '/images/wfdp/Our-Leaders-WFDP-09-23-2026_03_21_AM.webp',
        alt: 'WFDP leadership page.',
        label: 'Our leaders',
      },
      {
        src: '/images/wfdp/Our-Branches-WFDP-09-23-2026_03_22_AM.webp',
        alt: 'WFDP branches page with a map and country flags.',
        label: 'Our branches',
      },
      {
        src: '/images/wfdp/Plan-Details-WFDP-09-23-2026_03_22_AM.webp',
        alt: 'WFDP participation plan details page.',
        label: 'Plan details',
      },
      {
        src: '/images/wfdp/WFDP-Participation-WFDP-09-23-2026_03_22_AM.webp',
        alt: 'WFDP participation plans page.',
        label: 'Participation plans',
      },
      {
        src: '/images/wfdp/WFDP-Participation-Request-WFDP-09-23-2026_03_23_AM.webp',
        alt: 'WFDP participation request form page.',
        label: 'Participation request',
      },
    ],
    url: 'https://wfdp-igo.org',
    role: 'Frontend Developer',
    period: 'Dec 2025 – Apr 2026',
    description: 'Developed and maintained frontend features for the WFDP website using Vue.js and Nuxt.js.',
    highlights: [
      'Built and refined reusable Vue components and responsive user interfaces.',
      'Worked with Nuxt features including routing, data fetching, and page-level functionality.',
      'Implemented responsive layouts and UI components using Tailwind CSS.',
      'Partnered with the team lead to fix issues, improve functionality, and maintain consistent UI behavior.',
    ],
    technologies: ['Vue.js', 'Nuxt.js', 'Tailwind CSS'],
  },
  {
    slug: 'wfdp-client-dashboard',
    title: 'WFDP Client Dashboard',
    image: '/images/wfdp/Dashboard/Support-Tickets-09-23-2026_03_19_AM.webp',
    gallery: [
      {
        src: '/images/wfdp/Dashboard/Support-Tickets-09-23-2026_03_19_AM.webp',
        alt: 'WFDP client dashboard showing the support tickets overview.',
        label: 'Support tickets',
      },
      {
        src: '/images/wfdp/Dashboard/Calendar-09-23-2026_03_20_AM.webp',
        alt: 'WFDP client dashboard calendar page.',
        label: 'Calendar',
      },
      {
        src: '/images/wfdp/Dashboard/Files-09-23-2026_03_20_AM.webp',
        alt: 'WFDP client dashboard files page.',
        label: 'Files',
      },
      {
        src: '/images/wfdp/Dashboard/Files-09-23-2026_03_20_AM%20(1).webp',
        alt: 'Alternate screenshot of the WFDP client dashboard files page.',
        label: 'Files — alternate view',
      },
      {
        src: '/images/wfdp/Dashboard/INV-000899-09-23-2026_03_19_AM.webp',
        alt: 'WFDP client dashboard invoice detail page.',
        label: 'Invoice details',
      },
      {
        src: '/images/wfdp/Dashboard/Knowledge-Base-09-23-2026_03_17_AM.webp',
        alt: 'WFDP client dashboard knowledge base page.',
        label: 'Knowledge base',
      },
      {
        src: '/images/wfdp/Dashboard/Prisdent-office-09-23-2026_03_16_AM.webp',
        alt: 'WFDP client dashboard office page.',
        label: 'Office overview',
      },
      {
        src: '/images/wfdp/Dashboard/Prisdent-office-09-23-2026_03_18_AM.webp',
        alt: 'WFDP client dashboard office records page.',
        label: 'Office records',
      },
      {
        src: '/images/wfdp/Dashboard/Prisdent-office-09-23-2026_03_18_AM%20(1).webp',
        alt: 'Alternate screenshot of the WFDP client dashboard office page.',
        label: 'Office — alternate view',
      },
      {
        src: '/images/wfdp/Dashboard/hello-test-09-23-2026_03_19_AM.webp',
        alt: 'WFDP client dashboard support conversation page.',
        label: 'Support conversation',
      },
      {
        src: '/images/wfdp/Dashboard/khaled-09-23-2026_03_17_AM.webp',
        alt: 'WFDP client dashboard knowledge base article page.',
        label: 'Knowledge base article',
      },
      {
        src: '/images/wfdp/Dashboard/test-09-23-2026_03_17_AM.webp',
        alt: 'WFDP client dashboard article detail page.',
        label: 'Article details',
      },
    ],
    url: null,
    role: 'Frontend Developer',
    period: 'Apr 2026 – Mar 2026',
    description: 'Worked on an existing PHP/Laravel client dashboard, focusing on frontend modifications and feature improvements.',
    highlights: [
      'Maintained and updated Vue.js and Tailwind CSS components within the Laravel application.',
      'Implemented frontend changes within an existing backend architecture.',
      'Improved existing pages, layouts, and interactive components according to project requirements.',
      'Connected frontend components with existing application APIs and data.',
    ],
    technologies: ['Vue.js', 'Tailwind CSS', 'PHP', 'Laravel', 'REST APIs'],
  },
]

export const education = {
  degree: 'Bachelor of Computer and Systems Engineering',
  institution: 'Faculty of Engineering, Al-Azhar University',
  period: '2023 – 2028 (Expected)',
  coursework: [
    'Software Engineering',
    'Project Management',
    'Database Management Systems',
    'Data Structures',
    'Object-Oriented Programming',
    'Computer Networks',
  ],
}

export const languages = ['Arabic', 'English']
