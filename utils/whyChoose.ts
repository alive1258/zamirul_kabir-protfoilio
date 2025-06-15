export const cards = [
  {
    id: "1",
    title: "Published Papers",
    value: 8,
    link: "/publications",
    color: "text-cyan-500",
    gradientClass: "from-transparent via-blue-500 to-transparent",
    bgColor: "rgba(59, 130, 246, 0.10)", // Tailwind blue-500
    borderColor: "rgba(59, 130, 246, 0.10)",

    icon: "/assets/icons/f2.png",
  },
  {
    id: "2",
    title: "Research Projects",
    value: 5,
    link: "/projects",
    color: "text-pink-500",
    gradientClass: "from-transparent via-pink-500 to-transparent",
    bgColor: "rgba(236, 72, 153, 0.10)", // ✅ Correct for pink-500
    borderColor: "rgba(236, 72, 153, 0.10)", // ✅ Correct for pink-500
    icon: "/assets/icons/f4.png",
  },

  {
    id: "3",
    title: "Conference Talks",
    value: 12,
    link: "/talks",
    color: "text-violet-500",
    gradientClass: "from-transparent via-violet-500 to-transparent",
    bgColor: "rgba(139, 92, 246, 0.10)", // violet-500
    borderColor: "rgba(139, 92, 246, 0.10)", // violet-500
    icon: "/assets/icons/f3.png",
  },
  {
    id: "4",
    title: "Years in Academia",
    value: 6,
    link: "/about",
    color: "text-emerald-500",
    gradientClass: "from-transparent via-emerald-500 to-transparent",
    bgColor: "rgba(16, 185, 129, 0.10)", // emerald-500
    borderColor: "rgba(16, 185, 129, 0.10)", // emerald-500
    icon: "/assets/icons/f1.png",
  },
];
