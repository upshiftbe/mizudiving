const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
            About Mizu Diving
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-ocean-600">
                Professional Excellence
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                With years of experience in professional diving, we bring
                expertise, safety, and passion to every underwater adventure.
                Our team is certified and committed to providing the highest
                quality diving services.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Whether you&apos;re looking for recreational diving, technical
                diving, or specialized underwater services, we have the skills
                and equipment to meet your needs.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-ocean-600 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Certified Professional Divers
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-ocean-600 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  State-of-the-Art Equipment
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-ocean-600 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Safety First Approach
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-ocean-600 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Personalized Service
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-ocean-100 to-ocean-200 rounded-lg p-8 h-64 md:h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl font-bold text-ocean-600 mb-2">10+</div>
                <div className="text-xl text-gray-700">Years of Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

