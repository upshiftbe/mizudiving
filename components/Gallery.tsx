"use client";

import { motion } from "framer-motion";

const Gallery = () => {
  // Placeholder images - replace with actual images
  const galleryItems = [
    {
      id: 1,
      title: "Coral Reef Exploration",
      description: "Beautiful coral formations",
      gradient: "from-ocean-300 to-ocean-500",
    },
    {
      id: 2,
      title: "Deep Water Diving",
      description: "Professional deep water expedition",
      gradient: "from-ocean-400 to-ocean-600",
    },
    {
      id: 3,
      title: "Marine Life",
      description: "Diverse underwater ecosystem",
      gradient: "from-ocean-500 to-ocean-700",
    },
    {
      id: 4,
      title: "Technical Diving",
      description: "Advanced diving techniques",
      gradient: "from-ocean-600 to-ocean-800",
    },
    {
      id: 5,
      title: "Underwater Photography",
      description: "Capturing the beauty below",
      gradient: "from-ocean-400 to-ocean-700",
    },
    {
      id: 6,
      title: "Diving Instruction",
      description: "Teaching the next generation",
      gradient: "from-ocean-500 to-ocean-800",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4 text-gray-900"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Gallery
        </motion.h2>
        <motion.p
          className="text-center text-gray-600 mb-16 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Explore our underwater adventures and professional diving experiences
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative group overflow-hidden rounded-2xl bg-gradient-to-br aspect-square shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <motion.div
                  className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center"
                  whileHover={{ backdropFilter: "blur(2px)" }}
                >
                  <motion.div
                    className="text-center text-white p-6 z-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">
                      {item.title}
                    </h3>
                    <p className="text-sm opacity-90 drop-shadow-md">
                      {item.description}
                    </p>
                  </motion.div>
                </motion.div>

                {/* Placeholder for image - replace with next/image when images are available */}
                <div
                  className={`w-full h-full bg-gradient-to-br ${item.gradient} flex items-center justify-center`}
                >
                  <motion.svg
                    className="w-32 h-32 text-white/30"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </motion.svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;

