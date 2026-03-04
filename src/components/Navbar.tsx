import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Advantages', href: '#advantages' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Indian Tricolor Top Bar */}
      <div className="fixed top-0 left-0 right-0 h-1.5 z-[60] bg-gradient-to-r from-[#FF9933] via-white to-[#138808]"></div>
      
      <nav
        className={`fixed top-1.5 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/90 backdrop-blur-sm py-5'
        }`}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="relative w-12 h-12 flex items-center justify-center">
              <span className="text-brand-red font-serif italic text-4xl font-bold absolute -left-1">R</span>
              <span className="text-brand-black font-serif italic text-4xl font-bold absolute left-3 top-2">P</span>
            </div>
            <div className="flex flex-col ml-4">
              <span className="text-xl font-bold tracking-tight text-brand-black uppercase leading-none">Reliance</span>
              <span className="text-xl font-bold tracking-tight text-brand-black uppercase leading-none">Products</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-brand-red transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-brand-red text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-red-700 transition-colors shadow-sm hover:shadow-md"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-brand-red transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4 flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-gray-800 hover:text-brand-red transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-brand-red text-white px-5 py-3 rounded-md text-center font-semibold hover:bg-red-700 transition-colors mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get a Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
    </>
  );
}
