import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  MessageCircle,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer id="footer" className="bg-secondary text-secondary-foreground">
      {/* Main Footer Content */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">StayOra</h3>
            <p className="text-secondary-foreground/80 leading-relaxed">
              Luxury guest house offering comfort, elegance, and convenience in the heart of Karachi.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Amenities', 'Rooms', 'Policies', 'FAQ'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const id = link.toLowerCase();
                      const element = document.getElementById(
                        id === 'home' ? 'hero' : id
                      );
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="hover:text-primary transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:stayoraguesthouse@gmail.com"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="text-sm">stayoraguesthouse@gmail.com</span>
              </a>
              <a
                href="tel:03218255188"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="text-sm">0321 8255188</span>
              </a>
              <a
                href="https://wa.me/923282255771"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="text-sm">+92-328-2255771</span>
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/stayoraguesthouse/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary-foreground/10 rounded-lg hover:bg-primary hover:text-secondary transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/stayoraguesthouse/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary-foreground/10 rounded-lg hover:bg-primary hover:text-secondary transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://m.me/806763269184232"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary-foreground/10 rounded-lg hover:bg-primary hover:text-secondary transition-all"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="mb-12 border-t border-secondary-foreground/20 pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Address */}
            <div>
              <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Our Location
              </h4>
              <p className="text-secondary-foreground/80 leading-relaxed">
                House # 82-B, Street 6, Block B,
                <br />
                Sindhi Muslim Cooperative Housing Society (SMCHS),
                <br />
                Roomi Masjid near Embassy Inn Hotel
                <br />
                Shahra e Faisal, Karachi
              </p>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.0873917346246!2d67.0899!3d24.8455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e8a0000001%3A0x0!2sBlock%20B%2C%20SMCHS%2C%20Karachi!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary-foreground/80 text-sm">
            &copy; 2024 StayOra Guest House. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
