import { useRef, useState } from "react";
import { FaArrowRight, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from '@tanstack/react-router';
import { SocialLinkList } from './SocialLinks'
import { profile } from '../data/portfolio'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Contact() {
  const sectionRef = useRef<HTMLElement | null>(null)
  useScrollReveal(sectionRef)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\n${formData.message}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(formData.subject)}&body=${body}`;
    setSubmitStatus("success");
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: profile.phone,
      href: `tel:${profile.phoneLink}`,
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: profile.location,
      href: "https://www.google.com/maps/search/?api=1&query=El+Mahalla+El+Kubra%2C+Cairo%2C+Egypt",
    },
  ];

  return (
    <section ref={sectionRef} className="portfolio-section contact-section">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-heading" data-reveal>
          <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4" data-split>
            Get In Touch
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            I'm always interested in hearing about new opportunities and exciting projects. 
            Let's discuss how we can work together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="contact-column" data-reveal>
            <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">
              Send a Message
            </h3>
            
            {submitStatus === "success" && (
              <div className="bg-green-100 dark:bg-green-900 border border-green-400 text-green-700 dark:text-green-300 px-4 py-3 rounded-lg">
                Your email application should open with a message draft addressed to {profile.email}.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Open Email Draft
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact-column contact-details" data-reveal>
            <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">
              Contact Information
            </h3>

            <div className="contact-info-list">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="contact-info-card"
                >
                  <span className="contact-info-icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <span className="contact-info-copy">
                    <span className="contact-info-label">{label}</span>
                    <span className="contact-info-value">{value}</span>
                  </span>
                  <FaArrowRight className="contact-info-arrow" aria-hidden="true" />
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-neutral-200 dark:border-neutral-700">
              <h4 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
                Follow Me
              </h4>
              <SocialLinkList className="contact-socials" linkClassName="contact-social-link" />
            </div>

            {/* Availability */}
            <div className="pt-8">
              <h4 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
                Availability
              </h4>
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <p className="font-medium text-green-800 dark:text-green-300">
                      Available for new opportunities
                    </p>
                    <p className="text-sm text-green-600 dark:text-green-400">
                      Currently accepting freelance projects and full-time positions
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Back to Projects */}
            <div className="pt-8 border-t border-neutral-200 dark:border-neutral-700">
              <h4 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
                Want to see my work?
              </h4>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                View My Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 