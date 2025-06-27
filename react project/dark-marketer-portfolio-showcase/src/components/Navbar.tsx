
import React, { useState } from "react";
import { Menu, X, Download } from "lucide-react";

const navItems = [
  { title: "Home", href: "#hero" },
  { title: "Services", href: "#services" },
  { title: "Skills", href: "#skills" },
  { title: "Workflow", href: "#workflow" },
  { title: "Portfolio", href: "#portfolio" },
  { title: "FAQ", href: "#faq" },
  { title: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4 sm:px-6 lg:px-8">
      <a href="/" className="text-2xl font-bold text-primary">
  <img 
    src="/assets/logo.jpg" 
    alt="logo" 
    className="h-10 w-auto object-contain rounded-full" 
  />
</a>

        {/* Desktop nav */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {navItems.map((item) => (
            <li key={item.title}>
              <a
                href={item.href}
                className="hover:text-primary transition-colors font-medium"
              >
                {item.title}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              download
              className="ml-4 inline-flex items-center rounded-md border border-primary bg-primary px-3 py-1.5 text-sm font-semibold text-background shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
              aria-label="Download Resume"
            >
              <Download className="mr-1 h-4 w-4" /> Resume
            </a>
          </li>
        </ul>
        {/* Mobile Hamburger button */}
        <button
          onClick={toggleMenu}
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          aria-label="Toggle Menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <ul className="flex flex-col space-y-4 px-6 py-4 text-gray-300">
            {navItems.map((item) => (
              <li key={item.title}>
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className="block text-lg font-medium hover:text-primary transition-colors"
                >
                  {item.title}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                download
                className="flex items-center rounded-md border border-primary bg-primary px-3 py-2 text-sm font-semibold text-background shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
                aria-label="Download Resume"
                onClick={closeMenu}
              >
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

