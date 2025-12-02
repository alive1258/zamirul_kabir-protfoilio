/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useRef, useState } from "react";
import {
  FaFacebookF,
  FaPinterestP,
  FaPaperPlane,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import {
  BsInstagram,
  BsLinkedin,
  BsWhatsapp,
  BsSend,
  BsCheckCircle,
} from "react-icons/bs";
import { AiOutlineMail, AiOutlineUser, AiOutlinePhone } from "react-icons/ai";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import emailjs from "@emailjs/browser";
import "../../Home/Services/Services.css";
import SlideUp from "@/components/Shared/animations/SlideUp";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_9uw0v8f",
        "template_2vak65q",
        form.current,
        "MgeqrvTpwff0O--dG"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current?.reset();
          setIsSubmitting(false);
          setIsSubmitted(true);

          // Reset success message after 3 seconds
          setTimeout(() => {
            setIsSubmitted(false);
          }, 3000);
        },
        (error) => {
          console.log(error.text);
          setIsSubmitting(false);
        }
      );
  };

  const contactInfo = [
    {
      icon: <AiOutlineMail className="text-2xl" />,
      title: "Email Address",
      value: "zamirulkabir999@gmail.com",
      color: "from-[#34a578] to-emerald-500",
      link: "mailto:zamirulkabir999@gmail.com",
    },
    {
      icon: <BsWhatsapp className="text-2xl" />,
      title: "WhatsApp / Phone",
      value: "+880 01611910296",
      color: "from-green-500 to-emerald-600",
      link: "https://wa.me/8801611910296",
    },
    {
      icon: <FaMapMarkerAlt className="text-xl" />,
      title: "Location",
      value: "Dhaka, Bangladesh",
      color: "from-cyan-500 to-blue-500",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      icon: <FaFacebookF />,
      label: "Facebook",
      color: "bg-[#1877F2] hover:bg-[#1877F2]/90",
      link: "https://www.facebook.com/profile.php?id=100060866764137",
      delay: 0.1,
    },
    {
      icon: <BsInstagram />,
      label: "Instagram",
      color:
        "bg-gradient-to-r from-[#E1306C] to-[#F77737] hover:from-[#E1306C]/90 hover:to-[#F77737]/90",
      link: "https://www.instagram.com/zamirul463/",
      delay: 0.2,
    },
    {
      icon: <BsLinkedin />,
      label: "LinkedIn",
      color: "bg-[#0A66C2] hover:bg-[#0A66C2]/90",
      link: "https://www.linkedin.com/in/zamirul-kabir-575a41279/",
      delay: 0.3,
    },
    {
      icon: <FaPinterestP />,
      label: "Pinterest",
      color: "bg-[#E60023] hover:bg-[#E60023]/90",
      link: "#",
      delay: 0.4,
    },
  ];

  return (
    <div
      id="contact"
      className="md:py-32 py-16 overflow-hidden relative bg-gradient-to-b from-[#0C1222] via-[#131a30] to-[#0C1222]"
    >
      {/* Background effects */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#34a578]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30"></div>

      <div className="relative z-10 container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#34a578]/10 to-transparent border border-[#34a578]/30 mb-6">
            <div className="w-2 h-2 bg-[#34a578] rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-gray-400 tracking-widest">
              GET IN TOUCH
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's{" "}
            <span className="bg-gradient-to-r from-[#34a578] via-[#45d19c] to-cyan-400 bg-clip-text text-transparent">
              Connect & Create
            </span>
          </h1>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your ideas to
            life with exceptional web solutions.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info Card (keeping your current style) */}
          <SlideUp delay={0.1}>
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#34a578]/10 via-transparent to-cyan-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 group-hover:border-[#34a578]/40 transition-all duration-500">
                {/* Corner decorations */}
                <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#34a578]/30 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-cyan-400/30 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <h2 className="text-2xl font-bold text-white mb-6">
                  Get In <span className="text-[#34a578]">Touch</span>
                </h2>

                <p className="text-gray-400 mb-8 leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your vision. Let's collaborate and
                  create something amazing together.
                </p>

                {/* Contact Info */}
                <div className="space-y-6 mb-8">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/info flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300"
                    >
                      <div
                        className={`w-12 h-12 rounded-lg bg-gradient-to-br ${info.color}/20 border border-white/10 flex items-center justify-center group-hover/info:scale-110 transition-transform duration-300`}
                      >
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">{info.title}</p>
                        <p className="text-white font-medium">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Social Links */}
                <div>
                  <p className="text-gray-400 mb-4">Follow me on:</p>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                      <SlideUp key={index} delay={social.delay}>
                        <a
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${social.color} w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                          aria-label={social.label}
                        >
                          {social.icon}
                        </a>
                      </SlideUp>
                    ))}
                  </div>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-[#34a578] to-cyan-400 rounded-full group-hover:w-32 transition-all duration-700"></div>
              </div>
            </div>
          </SlideUp>

          {/* Contact Form - Matching the same style */}
          <div className="md:col-span-2">
            <SlideUp delay={0.2}>
              <div className="relative group">
                {/* Glow effect - same as contact card */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#34a578]/10 via-transparent to-cyan-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

                {/* Main container - matching style */}
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 group-hover:border-[#34a578]/40 transition-all duration-500">
                  {/* Corner decorations - same style */}
                  <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#34a578]/30 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-cyan-400/30 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Form header with same styling */}
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-3 h-10 bg-gradient-to-b from-[#34a578] to-cyan-400 rounded-full"></div>
                    <h3 className="text-2xl font-bold text-white">
                      Send a <span className="text-[#34a578]">Message</span>
                    </h3>
                  </div>

                  {/* Success message */}
                  {isSubmitted && (
                    <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 flex items-center gap-3 animate-fade-in">
                      <BsCheckCircle className="text-green-500 text-xl" />
                      <span className="text-green-400 font-medium">
                        Message sent successfully!
                      </span>
                    </div>
                  )}

                  <form ref={form} onSubmit={sendEmail} className="space-y-6">
                    {/* Two column layout */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="relative group/input">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#34a578]/20 via-transparent to-cyan-500/20 rounded-lg blur opacity-0 group-hover/input:opacity-100 transition-opacity duration-500"></div>
                        <div>
                          <label className="block text-sm text-gray-400 mb-2">
                            Enter Name
                          </label>
                          <input
                            type="text"
                            name="from_name"
                            required
                            className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#34a578]/50 transition-all duration-300 relative z-10"
                            placeholder="Enter your first name"
                          />
                        </div>
                      </div>

                      <div className="relative group/input">
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-transparent to-[#34a578]/20 rounded-lg blur opacity-0 group-hover/input:opacity-100 transition-opacity duration-500"></div>
                        <div>
                          <label className="block text-sm text-gray-400 mb-2">
                            Email Address
                          </label>
                          <input
                            type="email"
                            name="from_email"
                            required
                            className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#34a578]/50 transition-all duration-300 relative z-10"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                    </div>
                    =
                    <div className="relative group/input">
                      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-transparent to-[#34a578]/20 rounded-lg blur opacity-0 group-hover/input:opacity-100 transition-opacity duration-500"></div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">
                          Your Message
                        </label>
                        <textarea
                          name="message"
                          required
                          rows={5}
                          className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#34a578]/50 transition-all duration-300 resize-none relative z-10"
                          placeholder="Tell me about your project..."
                        ></textarea>
                      </div>
                    </div>
                    {/* Submit button with matching hover effects */}
                    <div className="relative group/btn">
                      <div className="absolute -inset-2 bg-gradient-to-r from-[#34a578] via-cyan-500 to-[#45d19c] rounded-xl blur opacity-0 group-hover/btn:opacity-30 transition duration-500"></div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="relative w-full py-4 px-6 bg-gradient-to-r from-[#34a578] to-[#45d19c] text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-[#34a578]/40 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-3"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <BsSend className="text-xl" />
                            <span>Send Message</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>

                  {/* Form note with matching style */}
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <div className="flex items-center justify-center gap-4">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-[#34a578] rounded-full animate-pulse"></div>
                        <div
                          className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-[#45d19c] rounded-full animate-pulse"
                          style={{ animationDelay: "0.4s" }}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-500">
                        Response within 24 hours
                      </p>
                    </div>
                  </div>

                  {/* Bottom accent - same as contact card */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-[#34a578] to-cyan-400 rounded-full group-hover:w-48 transition-all duration-700"></div>
                </div>
              </div>
            </SlideUp>
          </div>
        </div>
        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 max-w-3xl mx-auto">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#34a578] rounded-full animate-pulse"></div>
              <span className="text-gray-400">Response Time:</span>
              <span className="text-white font-medium">Within 24 hours</span>
            </div>
            <div className="hidden md:block w-0.5 h-6 bg-white/20"></div>
            <div className="flex items-center gap-3">
              <div
                className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <span className="text-gray-400">Availability:</span>
              <span className="text-white font-medium">
                Open for new projects
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
