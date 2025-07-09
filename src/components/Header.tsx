import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Code } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2 dark:bg-gray-900' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Code className="h-8 w-8 text-blue-800 dark:text-blue-400" />
          <span className="text-2xl font-bold text-gray-900 dark:text-white">AlphaDevss</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('services')}
            className="text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-400"
          >
            Serviços
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-400"
          >
            Sobre Nós
          </button>
          <button 
            onClick={() => scrollToSection('portfolio')}
            className="text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-400"
          >
            Portfólio
          </button>
          <button 
            onClick={() => scrollToSection('testimonials')}
            className="text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-400"
          >
            Depoimentos
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-md transition-colors dark:bg-blue-700 dark:hover:bg-blue-800"
          >
            Fale Conosco
          </button>
          <button 
            onClick={toggleTheme}
            className="text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-400"
            aria-label="Alternar tema"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <button 
            onClick={toggleTheme}
            className="text-gray-700 dark:text-gray-300"
            aria-label="Alternar tema"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-700 dark:text-gray-300"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg absolute top-full left-0 w-full py-4 px-6">
          <div className="flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-left py-2 text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-400"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-left py-2 text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-400"
            >
              Sobre Nós
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-left py-2 text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-400"
            >
              Portfólio
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-left py-2 text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-400"
            >
              Depoimentos
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-left bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-md transition-colors dark:bg-blue-700 dark:hover:bg-blue-800"
            >
              Fale Conosco
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;