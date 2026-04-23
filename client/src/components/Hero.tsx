export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663098873414/D4Hfe6mkbGQUXsUVLiAY5v/stayora_hero_main-GUPxAxCqEiAcxkXK9X3KdY.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20">
        <div className="max-w-2xl">
          {/* Logo */}
          <div className="mb-8">
            <img
              src="https://noorgee.pk/stayora/img/stayora-logo.jpg"
              alt="StayOra Logo"
              className="h-16 md:h-20 w-auto object-contain"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Luxury Stay
            <br />
            <span className="text-primary">in the Heart of Karachi</span>
            <br />
            ✨
          </h1>

          <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
            Discover the perfect blend of comfort, elegance, and convenience at StayOra — where every stay feels like home. 🌿🏡
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/923282255771"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-center"
            >
              📱 Book Now on WhatsApp
            </a>
            <button
              onClick={() => {
                const element = document.getElementById('rooms');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-accent text-center"
            >
              🏠 Check Rooms
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-white text-sm font-medium">Scroll to explore</span>
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
