export interface Project {
  id: string;
  name: string;
  image: string;
  category: string;
  description: string;
  tags: string[];
  live_link: string;
  github_link: string;
  company: string;
  logo: string;
  featured: boolean;
  tech_stack: string[];
  challenges: string[];
  achievements: string[];
  key_features: string[];
  role: string;
  duration: string;
  metrics: Record<string, string | number>;
}

export const projectCategories = [
  "All",
  "Full Stack",
  "Frontend",
  "Backend",
  "E-commerce",
  "Dashboard",
];

export const projectsData: Project[] = [
  {
    id: "1",
    name: "Global Academia - Education Consultants Platform",
    image: "/assets/projects/global-academia.png",
    category: "Frontend",
    description:
      "A modern, responsive education consultancy platform connecting students with international universities. Features include student counseling, university search, application tracking, and visa guidance services.",
    tags: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
      "React Query",
      "Stripe",
    ],
    live_link: "https://globalacadamia-website.vercel.app/",
    github_link: "https://github.com/alive1258/globalacadamia-website",
    company: "Global Academia",
    logo: "/assets/projects/GALogos.png",
    featured: true,
    tech_stack: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
      "React Query",
      "React Hook Form",
      "Vercel",
    ],
    challenges: [
      "Implementing multilingual support for international students",
      "Creating responsive student dashboard with application tracking",
      "Integrating university course catalogs with filtering system",
      "Building secure student document upload and management",
    ],
    achievements: [
      "Increased student inquiries by 75%",
      "Reduced application processing time by 50%",
      "Achieved 99% uptime with Vercel deployment",
      "Improved user engagement by 60% with interactive features",
    ],
    role: "Frontend Developer & UI Designer",
    duration: "1 months",
    key_features: [
      "Student counseling booking system",
      "University search with advanced filters",
      "Interactive course catalog",
      "Real-time application tracking",
      "Document management system",
      "Multilingual support",
      "Responsive admin dashboard",
      "Email notifications and alerts",
    ],
    metrics: {
      pagespeed_score: 98,
      seo_score: 100,
      accessibility_score: 95,
      conversion_rate_increase: "65%",
      bounce_rate_reduction: "40%",
    },
  },
];
