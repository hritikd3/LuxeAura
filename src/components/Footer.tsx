import { Building2, Mail, MapPinIcon, Phone} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Building2 className="h-8 w-8 text-blue-400" />
              <span className="font-bold text-xl">LuxeAura</span>
            </div>
            <p className="text-gray-400">
              Creating innovative architectural solutions for tomorrow's world.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-white">
                Home
              </Link>
              <Link
                to="/about"
                className="block text-gray-400 hover:text-white"
              >
                About Us
              </Link>
              <Link
                to="/projects"
                className="block text-gray-400 hover:text-white"
              >
                Projects
              </Link>
              <Link
                to="/services"
                className="block text-gray-400 hover:text-white"
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="block text-gray-400 hover:text-white"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <div className="space-y-2">
              <p className="text-gray-400">Architectural Design</p>
              <p className="text-gray-400">Interior Design</p>
              <p className="text-gray-400">Urban Planning</p>
              <p className="text-gray-400">3D Visualization</p>
              <p className="text-gray-400">Renovation</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <p className="text-gray-400">+91 99105 55872</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <p className="text-gray-400">+91 98997 47361</p>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <p className="text-gray-400">gurmeetsingh@luxeauradesign.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPinIcon className="h-5 w-5 text-blue-400" />{" "}
                {/* Location icon */}
                <p className="text-gray-400">
                  R-18/1 Near Export Market, Ramesh Park, Laxmi Nagar, Delhi
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} LuxeAura Design. All rights
            reserved.
          </p>
          <p>
            With &hearts; developed by{" "}
            <a
              href="https://www.thesparksmedia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              TheSparksMedia
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}