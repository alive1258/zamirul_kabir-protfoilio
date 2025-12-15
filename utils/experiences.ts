export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  date: string;
  duration: string;
  description: string;
  achievements: string[];
  technologies: string[];
  type: string;
  icon: string;
  gradient: string;
}

export const experiencesData: Experience[] = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "EForgeIT",
    location: "Palermo, Sicily, Italy | Remote (Full-time)",
    date: "Jul 2025 – Nov 2025",
    duration: "5 months",
    description:
      "Modernised large-scale JavaScript and Java/Spring applications, significantly improving system performance and stability.",
    achievements: [
      "Restored stability to a 13-year-old enterprise project, resolving 260+ JS bugs, reducing downtime/errors by 40%",
      "Built and deployed new modules for healthcare, fire service, and education systems, improving platform efficiency by 35%",
      "Led a university project at Quze Tech using React, Express, and MongoDB, implementing modern web technologies that improved system performance by 30%",
      "Implemented RESTful APIs and optimized database queries, reducing response time by 50%",
      "Conducted code reviews and implemented best practices, improving code quality by 25%",
      "Integrated third-party services and payment gateways for e-commerce functionality",
      "Developed automated testing suites, increasing test coverage by 60%",
    ],
    technologies: [
      "JavaScript",
      "Java/Spring",
      "React",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "PostgreSQL",
      "Docker",
    ],
    type: "full-time",
    icon: "⚡",
    gradient: "bg-gradient-to-r from-[#34a578] via-[#45d19c] to-cyan-400",
  },
  {
    id: 2,
    title: "MERN Stack Developer & Project Lead",
    company: "Asian IT Inc",
    location: "Sirajganj, Bangladesh | Onsite (Full-time)",
    date: "Jul 2023 – Jun 2025",
    duration: "2 years",
    description:
      "Led complete development of the company's e-commerce platform, delivering pixel-perfect UI and seamless user flow.",
    achievements: [
      "Built 90% of a full ERP software frontend, integrated backend APIs, and optimised real-time data handling",
      "Designed and developed the HR & Payroll software frontend from scratch, enabling smooth employee management, attendance tracking, and salary processing workflows",
      "Improved team workflows and engineering processes, boosting development speed by 30% and cross-team collaboration by 25%",
      "Collaborated with designers, backend engineers, and project managers to deliver clean, scalable, and reusable code across multiple company products",
      "Maintained production-ready code for various enterprise projects, including redesigns, feature updates, and performance optimisations",
      "Implemented Redux for state management and optimized application performance by 40%",
      "Mentored 3 junior developers, improving team productivity and knowledge sharing",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux",
      "Tailwind CSS",
      "Material-UI",
      "JWT Authentication",
    ],
    type: "full-time",
    icon: "🚀",
    gradient: "bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600",
  },
  {
    id: 3,
    title: "Support Mentor",
    company: "Sadhinota Camp",
    location: "Dhaka, Bangladesh | Remote (Part-time)",
    date: "Aug 2024 – Oct 2025",
    duration: "1 year 3 months",
    description:
      "Mentored 1000+ students in web development fundamentals, career guidance, and soft skills.",
    achievements: [
      "Organised workshops, bootcamps, and support sessions to improve learning outcomes",
      "Maintained strong relationships with students, volunteers, and instructors to ensure smooth communication",
      "Designed initiatives to boost student motivation, retention, and participation",
      "Trained and guided volunteers to handle sessions and student queries effectively",
      "Led sessions on communication, teamwork, and job readiness skills",
      "Created learning materials and resources for web development fundamentals",
      "Provided one-on-one career guidance and portfolio review sessions for 200+ students",
    ],
    technologies: [
      "Teaching",
      "Mentoring",
      "Workshop Planning",
      "Career Guidance",
      "Communication Skills",
      "Leadership",
      "Public Speaking",
    ],
    type: "part-time",
    icon: "👨‍🏫",
    gradient: "bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500",
  },
];
