import custom from "../../../../public/assets/image/custom.png";
import responsive from "../../../../public/assets/image/responsive.png";
import performance from "../../../../public/assets/image/perfomence.png";
import api from "../../../../public/assets/image/api-integration.png";
import seo from "../../../../public/assets/image/SEO.jpg";
import maintenance from "../../../../public/assets/image/Maintenance.jpeg";

import Image from "next/image";
import "./Services.css";
import SlideUp from "@/components/Shared/animations/SlideUp";
import {
  FaCode,
  FaMobileAlt,
  FaRocket,
  FaServer,
  FaSearch,
  FaTools,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

const Service = () => {
  const services = [
    {
      id: 1,
      title: "Custom Website Development",
      description:
        "I specialize in delivering exceptional custom website development using the MERN stack tailored to your unique business needs. Transform your vision into a fully functional, visually captivating online presence.",
      image: custom,
      icon: <FaCode className="text-[#34a578]" size={24} />,
      features: [
        "Full-stack development",
        "MERN stack expertise",
        "Custom functionality",
        "API integration",
        "Database design",
      ],
      color: "from-[#34a578] to-emerald-500",
    },
    {
      id: 2,
      title: "Responsive Web Design",
      description:
        "Responsive web design is key to reaching users across all devices. Your website will shine on desktops, tablets, and mobile devices, enhancing user satisfaction and maximizing your online impact.",
      image: responsive,
      icon: <FaMobileAlt className="text-cyan-400" size={24} />,
      features: [
        "Mobile-first approach",
        "Cross-browser compatibility",
        "Fluid layouts",
        "Touch-friendly UI",
        "Performance optimized",
      ],
      color: "from-cyan-400 to-blue-500",
    },
    {
      id: 3,
      title: "React Performance Optimization",
      description:
        "Unlocking the full potential of React through expert optimization techniques. I ensure your website not only looks great but also performs flawlessly across all devices with lightning-fast load times.",
      image: performance,
      icon: <FaRocket className="text-pink-500" size={24} />,
      features: [
        "Code splitting",
        "Lazy loading",
        "Bundle optimization",
        "Caching strategies",
        "Performance monitoring",
      ],
      color: "from-pink-500 to-purple-500",
    },
    {
      id: 4,
      title: "API Development & Integration",
      description:
        "Building robust RESTful and GraphQL APIs with seamless third-party integrations. Secure, scalable, and well-documented APIs that power your applications.",
      image: api,
      icon: <FaServer className="text-amber-400" size={24} />,
      features: [
        "REST/GraphQL APIs",
        "Authentication systems",
        "Third-party integrations",
        "API documentation",
        "Rate limiting",
      ],
      color: "from-amber-400 to-orange-500",
    },
    {
      id: 5,
      title: "SEO Optimization",
      description:
        "Technical SEO implementation and performance optimization to ensure your website ranks high on search engines and reaches your target audience effectively.",
      image: seo,
      icon: <FaSearch className="text-teal-400" size={24} />,
      features: [
        "Technical SEO",
        "Page speed optimization",
        "Structured data",
        "Meta optimization",
        "Analytics setup",
      ],
      color: "from-teal-400 to-green-500",
    },
    {
      id: 6,
      title: "Maintenance & Support",
      description:
        "Ongoing maintenance, updates, and technical support to keep your website secure, up-to-date, and performing at its best. Regular backups and security audits included.",
      image: maintenance,
      icon: <FaTools className="text-violet-400" size={24} />,
      features: [
        "Regular updates",
        "Security patches",
        "Performance monitoring",
        "Backup solutions",
        "Technical support",
      ],
      color: "from-violet-400 to-indigo-500",
    },
  ];

  const process = [
    { step: "01", title: "Discovery", desc: "Understanding your requirements" },
    { step: "02", title: "Planning", desc: "Creating project roadmap" },
    { step: "03", title: "Design", desc: "UI/UX and wireframing" },
    { step: "04", title: "Development", desc: "Coding and implementation" },
    { step: "05", title: "Testing", desc: "Quality assurance" },
    { step: "06", title: "Launch", desc: "Deployment and handover" },
  ];

  return (
    <div className="bg-gradient-to-b from-[#0C1222] via-[#131a30] to-[#0C1222] overflow-hidden relative">
      {/* Background effects */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#34a578]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        <div id="services" className="text-[#ffffff] md:py-32 py-16">
          {/* Title */}
          <div className="relative text-center mb-16 md:mb-24">
            {/* Animated background gradient */}
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-[600px] h-[200px] bg-gradient-to-r from-[#34a578]/10 via-transparent to-cyan-400/10 blur-3xl opacity-60 rounded-full"></div>

            {/* Decorative pre-title elements */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent rounded-full"></div>
              <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-full">
                <div className="w-2 h-2 bg-[#34a578] rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-400 tracking-widest">
                  MY SERVICES
                </span>
                <div
                  className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
                  style={{ animationDelay: "0.3s" }}
                ></div>
              </div>
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent rounded-full"></div>
            </div>

            {/* Main title with gradient effect */}
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 relative">
              <span className="relative inline-block">
                <span className="text-white relative z-10">Professional</span>
                {/* Glow effect for "About" */}
                <div className="absolute -inset-4 bg-gradient-to-r from-white/10 via-transparent to-white/10 blur-xl opacity-0 hover:opacity-100 transition-opacity duration-700 rounded-full"></div>
              </span>
              <br />

              <span
                className="relative ml-4 inline-block animate-fade-up"
                style={{ animationDelay: "0.3s" }}
              >
                <span className="relative z-10 bg-gradient-to-r from-[#34a578] via-[#45d19c] to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
                  Web Development Services
                </span>
                {/* Floating particles */}
                <div className="absolute -top-3 -right-3 w-3 h-3 bg-cyan-400 rounded-full animate-bounce"></div>
                <div
                  className="absolute -bottom-2 -left-2 w-2 h-2 bg-[#34a578] rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </span>
            </h1>

            {/* Animated separator */}
            <div className="mt-6 flex items-center justify-center gap-6">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent rounded-full"></div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#34a578] rounded-full animate-pulse"></div>
                <div
                  className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
                  style={{ animationDelay: "0.3s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-[#34a578] rounded-full animate-pulse"
                  style={{ animationDelay: "0.6s" }}
                ></div>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent rounded-full"></div>
            </div>

            {/* Subtitle */}
            <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed px-4">
              I deliver cutting-edge web solutions that combine technical
              excellence with creative design to help businesses
              <span className="inline-block mx-3 text-[#34a578] animate-bounce">
                •
              </span>
              thrive in the digital landscape.
            </p>
          </div>

          {/* Services Grid */}
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {services.map((service, index) => (
                <SlideUp key={service.id} delay={index * 0.1}>
                  <div className="group relative cursor-pointer">
                    {/* Enhanced glow effect */}
                    <div className="absolute -inset-3 bg-gradient-to-r from-[#34a578]/20 via-transparent to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

                    {/* Glassmorphism card background */}
                    <div className="relative rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-black/10 backdrop-blur-lg border border-white/20 group-hover:border-[#34a578]/50 transition-all duration-500 overflow-hidden">
                      {/* Animated background pattern */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(52,165,120,0.1)_1px,transparent_0)] bg-[length:20px_20px]"></div>
                      </div>

                      {/* Image section */}
                      <div className="relative overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.title}
                          width={400}
                          height={200}
                          className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                        {/* Icon with glow */}
                        <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-[#34a578]/30 to-cyan-500/20 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          {service.icon}
                          <div className="absolute inset-0 bg-[#34a578]/10 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="relative p-6">
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-gray-200 group-hover:to-white group-hover:bg-clip-text transition-all duration-500">
                          {service.title}
                        </h3>

                        <p className="text-gray-300 text-sm mb-4 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                          {service.description}
                        </p>

                        {/* Features */}
                        <div className="">
                          {service.features.map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-3 group/feature hover:bg-white/5 p-2 rounded-lg transition-colors duration-200"
                            >
                              <FaCheckCircle className="text-[#34a578] flex-shrink-0 group-hover/feature:scale-110 transition-transform duration-300" />
                              <span className="text-sm text-gray-400 group-hover/feature:text-white transition-colors duration-300">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Bottom accent */}
                        {/* Bottom section */}
                        <div className="mt-6 pt-4 border-t border-gray-700">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-[#34a578] rounded-full animate-pulse"></div>
                              <span className="text-xs text-gray-500">
                                Included
                              </span>
                            </div>
                            <div className="flex items-center gap-1 text-[#34a578] text-sm">
                              <span>Explore</span>
                              <FaArrowRight />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SlideUp>
              ))}
            </div>
            {/* Process Section */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-3">
                  My <span className="text-[#34a578]">Development Process</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  A structured approach to ensure quality, efficiency, and
                  timely delivery of your project.
                </p>
              </div>

              <div className="relative">
                {/* Connecting line */}
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent hidden lg:block"></div>

                <div className="relative">
                  {/* Progress bar */}
                  <div className="relative h-2 bg-white/10 rounded-full mb-12 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#34a578] via-cyan-400 to-[#45d19c] animate-progress"></div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {process.map((step, index) => (
                      <div key={step.step} className="relative group">
                        {/* Step container */}
                        <div className="relative">
                          {/* Hover effect connector */}
                          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-0 h-6 bg-gradient-to-b from-[#34a578] to-cyan-400 rounded-t-lg opacity-0 group-hover:opacity-100 group-hover:w-1 transition-all duration-300"></div>

                          {/* Step card */}
                          <div className="relative p-5 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-[#34a578]/10 group-hover:to-cyan-500/10 group-hover:border-[#34a578]/30 group-hover:translate-y-[-10px]">
                            {/* Step number with icon */}
                            <div className="relative w-12 h-12 mx-auto mb-4">
                              {/* Background effect */}
                              <div className="absolute -inset-3 bg-[#34a578]/10 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                              {/* Number circle */}
                              <div className="relative w-full h-full bg-gradient-to-br from-[#34a578] to-cyan-400 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold">
                                  {step.step}
                                </span>

                                {/* Icon overlay */}
                                <div className="absolute inset-0 bg-black/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  <div className="text-white text-lg">
                                    {index === 0 && "🔍"}
                                    {index === 1 && "📝"}
                                    {index === 2 && "🎨"}
                                    {index === 3 && "💻"}
                                    {index === 4 && "🧪"}
                                    {index === 5 && "🚀"}
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Content */}
                            <div className="text-center">
                              <h4 className="font-semibold text-white mb-2">
                                {step.title}
                              </h4>
                              <p className="text-xs text-gray-400">
                                {step.desc}
                              </p>
                            </div>

                            {/* Animated progress indicator */}
                            <div className="mt-4 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-[#34a578] to-cyan-400 rounded-full transition-all duration-1000"
                                style={{
                                  width: `${
                                    (index + 1) * (100 / process.length)
                                  }%`,
                                }}
                              ></div>
                            </div>
                          </div>

                          {/* Tooltip on hover */}
                          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 pointer-events-none">
                            <div className="px-4 py-2 bg-black/80 backdrop-blur-sm rounded-lg border border-white/10 text-center whitespace-nowrap">
                              <span className="text-sm text-white">
                                Step {index + 1} of {process.length}
                              </span>
                              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-black/80"></div>
                            </div>
                          </div>
                        </div>

                        {/* Desktop connector */}
                        {index < process.length - 1 && (
                          <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                            <div className="w-6 h-0.5 bg-gradient-to-r from-white/10 to-transparent">
                              <div className="w-0 h-full bg-gradient-to-r from-[#34a578] to-cyan-400 group-hover:w-full transition-all duration-500"></div>
                            </div>
                            <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                              <div className="w-2 h-2 border-r-2 border-b-2 border-[#34a578] rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            {/* <div className="text-center">
              <div className="relative inline-block group">
          
                <div className="absolute -inset-4 bg-gradient-to-r from-[#34a578]/20 via-transparent to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative p-10 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 max-w-3xl mx-auto">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-left">
                      <h3 className="text-2xl font-bold text-white mb-3">
                        Ready to Start Your Project?
                      </h3>
                      <p className="text-gray-400">
                        Lets discuss how I can help bring your ideas to life
                        with cutting-edge web solutions.
                      </p>
                    </div>

                    <button className="px-8 py-3 bg-gradient-to-r from-[#34a578] to-[#45d19c] text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-[#34a578]/30 transition-all duration-300 hover:scale-105 whitespace-nowrap">
                      Get Free Consultation
                    </button>
                  </div>

                 
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#34a578] rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-300">
                        24/7 Support
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div
                        className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                      <span className="text-sm text-gray-300">
                        On-Time Delivery
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div
                        className="w-2 h-2 bg-[#45d19c] rounded-full animate-pulse"
                        style={{ animationDelay: "0.4s" }}
                      ></div>
                      <span className="text-sm text-gray-300">
                        Quality Guaranteed
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Enhanced CTA Section */}
            {/* Minimal Modern CTA */}

            {/* <div className="relative">

              <div className="absolute -inset-10 bg-gradient-to-r from-[#34a578]/5 via-transparent to-cyan-500/5 rounded-3xl blur-2xl"></div>

              <div className="relative z-10 text-center">
                <div className="group">
                  <div className="relative p-10 rounded-3xl bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-2xl border border-white/10 hover:border-[#34a578]/40 transition-colors duration-500">
                   
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-[#34a578] to-cyan-400 rounded-b-lg group-hover:w-32 transition-all duration-700"></div>

                    <div className="mb-8">
                      <h3 className="text-3xl font-bold text-white mb-4">
                        Lets Build Something{" "}
                        <span className="text-[#34a578]">Amazing</span>
                        <span className="text-cyan-400">.</span>
                      </h3>
                      <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Ready to elevate your digital presence? Im here to help
                        you create exceptional web experiences that drive growth
                        and engagement.
                      </p>
                    </div>

                    <div className="relative inline-block group/btn mb-10">
                      <div className="absolute -inset-2 bg-gradient-to-r from-[#34a578] to-cyan-400 rounded-2xl blur opacity-0 group-hover/btn:opacity-50 transition-opacity duration-500"></div>
                      <button className="relative px-12 py-4 bg-gradient-to-r from-[#34a578] to-cyan-400 text-white font-bold rounded-2xl hover:shadow-2xl hover:shadow-[#34a578]/40 transition-all duration-300">
                        <span className="flex items-center gap-3">
                          Schedule a Call
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                            />
                          </svg>
                        </span>
                      </button>
                    </div>

                
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-white/10 pt-8">
                      <div className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300">
                        <div className="text-2xl mb-2">📧</div>
                        <h4 className="font-semibold text-white mb-1">Email</h4>
                        <p className="text-sm text-gray-400">
                          Response within 24h
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300">
                        <div className="text-2xl mb-2">💬</div>
                        <h4 className="font-semibold text-white mb-1">
                          Live Chat
                        </h4>
                        <p className="text-sm text-gray-400">
                          Instant connection
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300">
                        <div className="text-2xl mb-2">📞</div>
                        <h4 className="font-semibold text-white mb-1">Call</h4>
                        <p className="text-sm text-gray-400">
                          Schedule a meeting
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div> */}

            {/* Enhanced CTA Section with Dark Theme its good */}
            <div className="relative">
              <div className="absolute -top-20 left-1/4 w-64 h-64 bg-[#34a578]/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 right-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>

              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(15)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full bg-gradient-to-r from-[#34a578]/20 to-cyan-400/20 animate-float-slow"
                    style={{
                      width: `${Math.random() * 4 + 2}px`,
                      height: `${Math.random() * 4 + 2}px`,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${i * 0.2}s`,
                      animationDuration: `${Math.random() * 10 + 10}s`,
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10 text-center">
                <div className="group relative cursor-pointer">
                  <div className="absolute -inset-6 bg-gradient-to-r from-[#34a578]/10 via-transparent to-cyan-500/10 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-1000"></div>

                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#34a578] via-cyan-400 to-[#45d19c] rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 animate-gradient-border"></div>

                  <div className="relative p-12 rounded-3xl bg-gradient-to-br from-[#0C1222]/90 via-[#131a30]/80 to-[#0C1222]/90 backdrop-blur-xl border border-gray-800 group-hover:border-[#34a578]/40 transition-all duration-500 overflow-hidden">
                    {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer"></div> */}

                    {/* <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-[#34a578]/30 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> */}
                    {/* <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-cyan-400/30 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> */}

                    <div className="relative">
                      <div className="inline-flex items-center justify-center w-20 h-20 mb-6 mx-auto rounded-full bg-gradient-to-br from-[#34a578]/10 to-cyan-500/10 border border-gray-700 group-hover:border-[#34a578]/40 group-hover:scale-110 transition-all duration-500">
                        <div className="text-3xl">🚀</div>
                      </div>

                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to{" "}
                        <span className="bg-gradient-to-r from-[#34a578] via-[#45d19c] to-cyan-400 bg-clip-text text-transparent">
                          Launch Your Project
                        </span>
                        ?
                      </h3>

                      <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        Lets transform your vision into reality with
                        cutting-edge web solutions that drive results and exceed
                        expectations.
                      </p>

                      <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
                        <button className="group/btn relative px-10 py-4 bg-gradient-to-r from-[#34a578] to-[#45d19c] text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-[#34a578]/40 transition-all duration-300 hover:scale-105">
                          <div className="absolute -inset-1 bg-gradient-to-r from-[#34a578] via-cyan-500 to-[#45d19c] rounded-xl blur opacity-0 group-hover/btn:opacity-50 transition duration-500"></div>
                          <span className="relative flex items-center gap-3">
                            Start Free Consultation
                            <svg
                              className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                              />
                            </svg>
                          </span>
                        </button>

                        <button className="group/btn2 px-10 py-4 bg-transparent border-2 border-gray-700 text-white font-bold rounded-xl hover:bg-[#34a578]/5 hover:border-[#34a578]/50 transition-all duration-300">
                          <span className="flex items-center gap-3">
                            View Portfolio
                            <svg
                              className="w-5 h-5 group-hover/btn2:translate-x-1 transition-transform"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </span>
                        </button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-gray-700">
                        {[
                          {
                            icon: "🛡️",
                            title: "Secure & Reliable",
                            desc: "Enterprise-grade security protocols",
                            color: "from-[#34a578] to-emerald-500",
                          },
                          {
                            icon: "⚡",
                            title: "Fast Delivery",
                            desc: "On-time project completion",
                            color: "from-cyan-400 to-blue-500",
                          },
                          {
                            icon: "🏆",
                            title: "Quality Guaranteed",
                            desc: "100% satisfaction guarantee",
                            color: "from-[#45d19c] to-teal-500",
                          },
                        ].map((feature, index) => (
                          <div key={index} className="group/feature">
                            <div className="flex flex-col items-center text-center p-4 rounded-2xl hover:bg-gray-800/50 transition-all duration-300">
                              <div
                                className={`w-14 h-14 rounded-full bg-gradient-to-br ${feature.color}/10 border border-gray-700 flex items-center justify-center mb-4 group-hover/feature:scale-110 group-hover/feature:border-[#34a578]/40 transition-all duration-300`}
                              >
                                <span className="text-2xl">{feature.icon}</span>
                              </div>
                              <h4 className="font-bold text-white mb-2">
                                {feature.title}
                              </h4>
                              <p className="text-sm text-gray-400">
                                {feature.desc}
                              </p>
                              <div
                                className={`mt-3 w-0 h-0.5 bg-gradient-to-r ${feature.color} rounded-full group-hover/feature:w-12 transition-all duration-500`}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-12 flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <div className="flex">
                            <div className="w-2 h-2 bg-[#34a578] rounded-full animate-pulse"></div>
                            <div
                              className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse ml-1"
                              style={{ animationDelay: "0.2s" }}
                            ></div>
                            <div
                              className="w-2 h-2 bg-[#45d19c] rounded-full animate-pulse ml-1"
                              style={{ animationDelay: "0.4s" }}
                            ></div>
                          </div>
                          <span>Trusted by 50+ Clients</span>
                        </div>
                        <div className="hidden md:block w-1 h-1 bg-gray-700 rounded-full"></div>
                        <div className="flex items-center gap-2">
                          <span>⭐</span>
                          <span>100% Satisfaction Rate</span>
                        </div>
                        <div className="hidden md:block w-1 h-1 bg-gray-700 rounded-full"></div>
                        <div className="flex items-center gap-2">
                          <span>⏱️</span>
                          <span>24/7 Support Available</span>
                        </div>
                      </div>
                    </div>

                    <div className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="px-6 py-2 bg-gray-900/90 backdrop-blur-md rounded-full border border-gray-700">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[#34a578] rounded-full animate-pulse"></div>
                          <span className="text-sm text-white">
                            zamirulkabir999@gmail.com
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
