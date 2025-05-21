import React from 'react';
import { Scissors, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center space-x-2 text-white mb-4">
              <Scissors size={24} />
              <span className="text-xl font-bold">BeautyBook</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Professional hair styling and beauty services. Book your appointment today and experience the difference.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/stylists" className="text-gray-400 hover:text-white transition-colors">
                  Our Stylists
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-gray-400 hover:text-white transition-colors">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-400 hover:text-white transition-colors">
                  Sign In
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services#haircut" className="text-gray-400 hover:text-white transition-colors">
                  Haircuts & Styling
                </Link>
              </li>
              <li>
                <Link to="/services#color" className="text-gray-400 hover:text-white transition-colors">
                  Hair Coloring
                </Link>
              </li>
              <li>
                <Link to="/services#treatment" className="text-gray-400 hover:text-white transition-colors">
                  Hair Treatments
                </Link>
              </li>
              <li>
                <Link to="/services#styling" className="text-gray-400 hover:text-white transition-colors">
                  Blowouts & Styling
                </Link>
              </li>
              <li>
                <Link to="/services#extensions" className="text-gray-400 hover:text-white transition-colors">
                  Hair Extensions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-purple-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 Beauty Street, Salon City, SC 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-purple-400 flex-shrink-0" />
                <span className="text-gray-400">(123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-purple-400 flex-shrink-0" />
                <span className="text-gray-400">contact@beautybook.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} BeautyBook. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;