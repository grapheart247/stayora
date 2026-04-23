import { Check } from 'lucide-react';

const rooms = [
  {
    name: 'Premium Room',
    subtitle: 'Double Bed',
    price: 8000,
    currency: 'PKR',
    period: 'per night',
    features: [
      'Spacious double bed',
      'Garden view',
      '40" Smart TV',
      'Mini fridge',
      'Ensuite bathroom',
      'Air conditioning',
      'Hot water 24/7',
      'Room service',
    ],
    color: 'from-primary to-accent',
  },
  {
    name: 'Single Bed Room',
    subtitle: 'Per Person',
    price: 6000,
    currency: 'PKR',
    period: 'per night',
    features: [
      'Comfortable single bed',
      'Cozy room design',
      '40" Smart TV',
      'Mini fridge',
      'Ensuite bathroom',
      'Air conditioning',
      'Hot water 24/7',
      'Room service',
    ],
    color: 'from-secondary to-primary',
  },
];

export default function Rooms() {
  return (
    <section id="rooms" className="py-20 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Rooms & Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our carefully designed rooms, each offering comfort and elegance
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-card border border-border"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${room.color} p-8 text-white`}>
                <h3 className="text-3xl font-bold mb-2">{room.name}</h3>
                <p className="text-lg opacity-90">{room.subtitle}</p>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-foreground">
                      {room.price.toLocaleString()}
                    </span>
                    <span className="text-muted-foreground">{room.currency}</span>
                  </div>
                  <p className="text-muted-foreground mt-2">{room.period}</p>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="font-semibold text-foreground mb-4">Room Features:</h4>
                  <ul className="space-y-3">
                    {room.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <a
                  href="https://wa.me/923282255771"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full btn-primary text-center"
                >
                  Book This Room
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
          <p className="text-foreground mb-4">
            💡 <strong>Tip:</strong> Contact us via WhatsApp for group bookings and special discounts
          </p>
          <a
            href="https://wa.me/923282255771"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block btn-primary"
          >
            Get Special Offers
          </a>
        </div>
      </div>
    </section>
  );
}
