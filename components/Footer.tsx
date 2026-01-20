import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Mizu Diving</h3>
            <p className="text-gray-400">
              Professional diving services with years of experience and
              expertise.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#about"
                  className="hover:text-ocean-400 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-ocean-400 transition-colors"
                >
                  Services
                </Link>
              </li>
              {/* <li>
                <Link
                  href="#gallery"
                  className="hover:text-ocean-400 transition-colors"
                >
                  Gallery
                </Link>
              </li> */}
              {/* <li>
                <Link
                  href="#contact"
                  className="hover:text-ocean-400 transition-colors"
                >
                  Contact
                </Link>
              </li> */}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@mizudiving.com</li>
              <li>Phone: +1 (555) 123-4567</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Mizu Diving. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

