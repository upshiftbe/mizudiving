"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  const quickLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
  ];

  return (
    <footer className="bg-linear-to-b from-gray-900 to-gray-950 text-gray-300 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-ocean-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-ocean-700/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-white mb-4 bg-clip-text bg-linear-to-r from-ocean-400 to-ocean-600">
              Mizu Diving
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Professional diving services with years of experience and
              expertise. Explore the depths with confidence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="hover:text-ocean-400 transition-colors inline-flex items-center group"
                  >
                    <motion.span
                      className="mr-2"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                    >
                      →
                    </motion.span>
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 mr-3 mt-0.5 text-ocean-500 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:mizudiving@gmail.com"
                  className="hover:text-ocean-400 transition-colors"
                >
                  mizudiving@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 mr-3 mt-0.5 text-ocean-500 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <p>V Van Cauwelaert</p>
                  <p>Steineggerhof 1</p>
                  <p>8855 Wangen SZ</p>
                  <p>Switzerland</p>
                  <p className="text-gray-500 text-sm mt-1">CHE-448.368.357</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-800 pt-8 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Mizu Diving. All rights reserved. Dive deeper, explore further.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

