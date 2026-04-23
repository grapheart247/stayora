import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Amenities', id: 'amenities' },
    { label: 'Rooms', id: 'rooms' },
    { label: 'Policies', id: 'policies' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact', id: 'footer' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-md">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="text-2xl md:text-3xl font-bold text-gradient">
            StayOra
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="https://wa.me/923282255771"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block btn-primary"
        >
          Book Now
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-foreground hover:text-primary transition-colors py-2 font-medium"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://wa.me/923282255771"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-center"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
