
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="/src/assets/logo.svg" alt="TradeFlux" className="w-8 h-8" />
            <span className="text-xl font-bold text-gradient tracking-tight">TradeFlux</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">Home</Link>
            <Link to="/about" className="text-sm font-medium transition-colors hover:text-primary">About Us</Link>
            <Link to="/services" className="text-sm font-medium transition-colors hover:text-primary">Services</Link>
            <Link to="/pricing" className="text-sm font-medium transition-colors hover:text-primary">Pricing</Link>
            <Link to="/contact" className="text-sm font-medium transition-colors hover:text-primary">Contact</Link>
          </div>
          
          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            
            <div className="hidden md:flex items-center space-x-3">
              <Link to="/login">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link to="/register">
                <Button className="button-shine">Get Started</Button>
              </Link>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-xl rounded-b-2xl overflow-hidden animate-fade-in">
          <div className="px-6 py-4 flex flex-col space-y-3">
            <Link to="/" onClick={toggleMenu} className="py-2 text-sm font-medium">Home</Link>
            <Link to="/about" onClick={toggleMenu} className="py-2 text-sm font-medium">About Us</Link>
            <Link to="/services" onClick={toggleMenu} className="py-2 text-sm font-medium">Services</Link>
            <Link to="/pricing" onClick={toggleMenu} className="py-2 text-sm font-medium">Pricing</Link>
            <Link to="/contact" onClick={toggleMenu} className="py-2 text-sm font-medium">Contact</Link>
            <div className="pt-2 flex flex-col space-y-3">
              <Link to="/login" onClick={toggleMenu}>
                <Button variant="ghost" className="w-full">Login</Button>
              </Link>
              <Link to="/register" onClick={toggleMenu}>
                <Button className="w-full button-shine">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
