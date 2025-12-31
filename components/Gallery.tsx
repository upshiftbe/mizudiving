const Gallery = () => {
  // Placeholder images - replace with actual images
  const galleryItems = [
    {
      id: 1,
      title: "Coral Reef Exploration",
      description: "Beautiful coral formations",
    },
    {
      id: 2,
      title: "Deep Water Diving",
      description: "Professional deep water expedition",
    },
    {
      id: 3,
      title: "Marine Life",
      description: "Diverse underwater ecosystem",
    },
    {
      id: 4,
      title: "Technical Diving",
      description: "Advanced diving techniques",
    },
    {
      id: 5,
      title: "Underwater Photography",
      description: "Capturing the beauty below",
    },
    {
      id: 6,
      title: "Diving Instruction",
      description: "Teaching the next generation",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
          Gallery
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore our underwater adventures and professional diving experiences
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="relative group overflow-hidden rounded-lg bg-gradient-to-br from-ocean-400 to-ocean-600 aspect-square"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <div className="text-center text-white p-4 transform group-hover:scale-105 transition-transform duration-300">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm opacity-90">{item.description}</p>
                </div>
              </div>
              {/* Placeholder for image - replace with next/image when images are available */}
              <div className="w-full h-full bg-gradient-to-br from-ocean-300 to-ocean-500 flex items-center justify-center">
                <svg
                  className="w-24 h-24 text-white/50"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

