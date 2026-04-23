import {
  Wifi,
  ParkingCircle,
  Leaf,
  Tv,
  Coffee,
  Bell,
  Snowflake,
  Shield,
} from 'lucide-react';

const amenitiesList = [
  {
    icon: Wifi,
    title: 'High-Speed WiFi',
    description: 'Stay connected with our reliable high-speed internet',
  },
  {
    icon: ParkingCircle,
    title: 'Secure Parking',
    description: 'Safe on-site indoor parking for your vehicle',
  },
  {
    icon: Leaf,
    title: 'Garden Views',
    description: 'Beautiful garden-view rooms & peaceful sitting areas',
  },
  {
    icon: Tv,
    title: 'Smart TV & Fridge',
    description: '40" Smart TV in every room with mini fridge',
  },
  {
    icon: Coffee,
    title: 'Complimentary Breakfast',
    description: 'Delicious breakfast included with your stay',
  },
  {
    icon: Bell,
    title: '24/7 Room Service',
    description: 'Round-the-clock room service for your convenience',
  },
  {
    icon: Snowflake,
    title: 'AC & Hot Water',
    description: 'Air conditioning and hot water available 24/7',
  },
  {
    icon: Shield,
    title: 'Security & Family',
    description: 'Professional security guard & family-friendly environment',
  },
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-20 bg-card">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Premium Amenities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience luxury and comfort with our carefully curated amenities designed for your perfect stay
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenitiesList.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <div
                key={index}
                className="bg-background rounded-xl p-6 border border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:scale-105 group"
              >
                <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {amenity.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
