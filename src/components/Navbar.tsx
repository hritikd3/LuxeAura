import { Menu, X, Building2 } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-blue-600" />
            <span className="font-bold text-xl">LuxeAura Design Co.</span>
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <Link to="/about" className="hover:text-blue-600 transition-colors">About Us</Link>
              <Link to="/projects" className="hover:text-blue-600 transition-colors">Projects</Link>
              <Link to="/services" className="hover:text-blue-600 transition-colors">Services</Link>
              <Link to="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link to="/" className="block px-3 py-2 hover:text-blue-600">Home</Link>
            <Link to="/about" className="block px-3 py-2 hover:text-blue-600">About Us</Link>
            <Link to="/projects" className="block px-3 py-2 hover:text-blue-600">Projects</Link>
            <Link to="/services" className="block px-3 py-2 hover:text-blue-600">Services</Link>
            <Link to="/contact" className="block px-3 py-2 hover:text-blue-600">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}