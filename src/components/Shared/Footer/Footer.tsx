"use client";
import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";
import { motion } from "framer-motion";

const currentYear = new Date().getFullYear();

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaGithub />,
      label: "GitHub",
      href: "https://github.com/alive1258",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/zamirul-kabir/",
    },
    {
      icon: <FaTwitter />,
      label: "Twitter",
      href: "https://x.com/ZamirulKabir999",
    },
    {
      icon: <FaEnvelope />,
      label: "Email",
      href: "zamirulkabir999@email.com",
    },
  ];

  const footerLinks = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-black border-t border-white/10 pt-12 pb-8 px-6">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-purple-500/5"></div>

      {/* Animated floating elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand section */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center space-x-3"
            >
              {/* <div className="w-12 h-12 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-lg flex items-center justify-center border border-gray-700/50 shadow-xl shadow-black/50">
                <span className="text-2xl font-bold bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
                  ZK
                </span>
              </div> */}

              <div className="w-12 h-12 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 rounded-lg flex items-center justify-center border border-gray-600 shadow-lg">
                <span className="text-2xl font-bold text-gray-100 drop-shadow-lg">
                  ZK
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">Zamirul Kabir</h3>
                <p className="text-gray-400">Full Stack Developer</p>
              </div>
            </motion.div>
            <p className="text-gray-400 max-w-sm">
              Building digital experiences with clean code and modern
              technologies. Passionate about creating solutions that make a
              difference.
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 flex items-center group"
                >
                  <span className="w-1 h-1 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {link.label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Social links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">
              Connect With Me
            </h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-12 h-12 rounded-full bg-gray-800/50 border border-gray-700/50 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <div className="text-xl group-hover:scale-110 transition-transform">
                    {social.icon}
                  </div>
                </motion.a>
              ))}
            </div>
            <p className="text-gray-500 text-sm mt-4">
              Feel free to reach out for collaborations or just a friendly chat!
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800/50 my-8"></div>

        {/* Copyright and bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center md:text-left"
          >
            <p className="text-gray-400">
              © {currentYear}{" "}
              <span className="text-white font-semibold">Zamirul Kabir</span>.
              All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Built with{" "}
              <span className="inline-flex items-center text-red-400">
                <FaHeart className="mx-1" /> passion
              </span>{" "}
              and modern web technologies
            </p>
          </motion.div>

          {/* Tech stack badges */}
          <div className="flex flex-wrap justify-center gap-2">
            {["React", "TypeScript", "Next.js", "Node.js", "Tailwind"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs rounded-full bg-gray-800/50 text-gray-300 border border-gray-700/50"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>

        {/* Additional info */}
        <div className="text-center mt-8">
          <p className="text-gray-600 text-sm">
            Made with ❤️ • Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </p>
          <p className="text-gray-700 text-xs mt-2">
            v1.0.0 • Inspired by modern design trends
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
