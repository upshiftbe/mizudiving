"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    "Certified Professional Divers",
    "State-of-the-Art Equipment",
    "Safety First Approach",
    "Personalized Service",
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4 text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About Mizu Diving
          </motion.h2>

          <motion.p
            className="text-center text-gray-600 mb-16 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Delivering excellence beneath the waves since 2015
          </motion.p>

          <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-3xl font-semibold mb-6 text-ocean-700">
                Professional Excellence
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                With years of experience in professional diving, we bring
                expertise, safety, and passion to every underwater adventure.
                Our team is certified and committed to providing the highest
                quality diving services.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                Whether you&apos;re looking for recreational diving, technical
                diving, or specialized underwater services, we have the skills
                and equipment to meet your needs.
              </p>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <motion.div
                      className="w-6 h-6 rounded-full bg-ocean-600 flex items-center justify-center mr-3 flex-shrink-0"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </motion.div>
                    <span className="text-gray-800 text-lg font-medium group-hover:text-ocean-700 transition-colors">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <motion.div
                className="bg-gradient-to-br from-ocean-500 via-ocean-600 to-ocean-700 rounded-2xl p-12 shadow-2xl relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"></div>

                <div className="text-center relative z-10">
                  <motion.div
                    className="text-7xl md:text-8xl font-bold text-white mb-4"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
                  >
                    10+
                  </motion.div>
                  <div className="text-2xl text-ocean-50 font-light tracking-wide">
                    Years of Experience
                  </div>
                  <div className="mt-8 pt-8 border-t border-white/20">
                    <div className="grid grid-cols-2 gap-6 text-white">
                      <div>
                        <div className="text-3xl font-bold">500+</div>
                        <div className="text-sm text-ocean-100">Dives Completed</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold">100%</div>
                        <div className="text-sm text-ocean-100">Safety Record</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

