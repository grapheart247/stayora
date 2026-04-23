import { Clock, CreditCard, Users, Cigarette } from 'lucide-react';

const policies = [
  {
    icon: Clock,
    title: 'Check-in & Check-out',
    details: 'Standard Check-in: 12:00 PM | Check-out: 12:00 PM',
    description: 'We are open 24 hours. Early check-in or late check-out may be available upon request.',
  },
  {
    icon: CreditCard,
    title: 'Payment Policy',
    details: 'Full payment required upon check-in',
    description: 'Payment must be completed at the time of check-in to confirm your stay. We accept cash and digital payments.',
  },
  {
    icon: Users,
    title: 'Guest Policy',
    details: 'Married couples only (proof required)',
    description: 'In compliance with local regulations, unmarried couples are NOT permitted. Married couples are kindly requested to provide original CNICs or valid proof of marriage at check-in.',
  },
  {
    icon: Cigarette,
    title: 'House Etiquette',
    details: 'Quiet, family-friendly atmosphere',
    description: 'Smoking is only permitted in designated outdoor areas. We maintain a peaceful environment for all guests.',
  },
];

export default function Policies() {
  return (
    <section id="policies" className="py-20 bg-card">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Policies & Guidelines
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Important information to ensure a comfortable stay for all our guests
          </p>
        </div>

        {/* Policies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {policies.map((policy, index) => {
            const Icon = policy.icon;
            return (
              <div
                key={index}
                className="bg-background rounded-xl p-8 border border-border hover:border-primary transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {policy.title}
                    </h3>
                    <p className="font-medium text-primary mb-3">{policy.details}</p>
                    <p className="text-muted-foreground leading-relaxed">
                      {policy.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Important Notice */}
        <div className="mt-12 bg-accent/10 border-2 border-accent rounded-xl p-8">
          <h3 className="text-xl font-semibold text-foreground mb-4">📋 Important Notice</h3>
          <p className="text-foreground leading-relaxed">
            StayOra is committed to providing a safe, comfortable, and family-friendly environment. All guests must comply with our policies and local regulations. Any violation may result in immediate checkout without refund. For any questions or special requests, please contact us via WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
}
