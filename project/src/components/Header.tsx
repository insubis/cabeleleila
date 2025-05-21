import React, { useState, useEffect } from 'react';
import { Menu, X, Scissors, User, Calendar, Home } from 'lucide-react';
import { useAppContext } from '../contexts/AppContext';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAuthenticated, logout } = useAppContext();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-purple-600"
          >
            <Scissors size={24} />
            <span className="text-xl font-bold">BeautyBook</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Services
            </Link>
            <Link 
              to="/stylists" 
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Our Stylists
            </Link>
            <Link 
              to="/booking" 
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Book Now
            </Link>
          </nav>

          {/* Authentication Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link 
                  to="/appointments" 
                  className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 transition-colors"
                >
                  <Calendar size={18} />
                  <span>My Appointments</span>
                </Link>
                <button 
                  onClick={logout}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="flex items-center px-4 py-2 text-gray-700 hover:text-purple-600 transition-colors"
                >
                  Sign In
                </Link>
                <Link 
                  to="/register" 
                  className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-purple-600 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-white z-50 pt-20 px-6">
            <button
              className="absolute top-5 right-5 text-gray-700 hover:text-purple-600 transition-colors"
              onClick={toggleMenu}
            >
              <X size={24} />
            </button>
            <nav className="flex flex-col space-y-6">
              <Link 
                to="/" 
                className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors text-lg"
                onClick={toggleMenu}
              >
                <Home size={20} />
                <span>Home</span>
              </Link>
              <Link 
                to="/services" 
                className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors text-lg"
                onClick={toggleMenu}
              >
                <Scissors size={20} />
                <span>Services</span>
              </Link>
              <Link 
                to="/stylists" 
                className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors text-lg"
                onClick={toggleMenu}
              >
                <User size={20} />
                <span>Our Stylists</span>
              </Link>
              <Link 
                to="/booking" 
                className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors text-lg"
                onClick={toggleMenu}
              >
                <Calendar size={20} />
                <span>Book Now</span>
              </Link>
              
              <div className="pt-4 border-t border-gray-200">
                {isAuthenticated ? (
                  <>
                    <Link 
                      to="/appointments" 
                      className="block py-3 text-gray-700 hover:text-purple-600 transition-colors text-lg"
                      onClick={toggleMenu}
                    >
                      My Appointments
                    </Link>
                    <button 
                      onClick={() => {
                        logout();
                        toggleMenu();
                      }}
                      className="block w-full py-3 mt-4 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors text-lg text-center"
                    >
                      Sign Out
                    </button>
                  </>
                ) : (
                  <>
                    <Link 
                      to="/login" 
                      className="block py-3 text-gray-700 hover:text-purple-600 transition-colors text-lg"
                      onClick={toggleMenu}
                    >
                      Sign In
                    </Link>
                    <Link 
                      to="/register" 
                      className="block w-full py-3 mt-4 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors text-lg text-center"
                      onClick={toggleMenu}
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;