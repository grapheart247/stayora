import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What are the check-in and check-out timings?',
    answer:
      'StayOra is open 24 hours. Standard Check-in is 12:00 PM and Check-out is 12:00 PM. Early check-in or late check-out may be available upon request.',
  },
  {
    question: 'What are the room prices?',
    answer:
      'Premium Room (Double Bed) is PKR 8,000 per night, and Single Bed (Per Person) is PKR 6,000 per night. Special rates may be available for group bookings.',
  },
  {
    question: 'What is the address?',
    answer:
      'House # 82-B, Street 6, Block B, Sindhi Muslim Cooperative Housing Society (SMCHS), Roomi Masjid near Embassy Inn Hotel Shahra e Faisal, Karachi.',
  },
  {
    question: 'Is WiFi included in the room rate?',
    answer:
      'Yes! High-speed WiFi is complimentary for all guests. You will receive the WiFi credentials at check-in.',
  },
  {
    question: 'Is breakfast included?',
    answer:
      'Yes, complimentary breakfast is included with your stay. Our breakfast is served daily and features a variety of options.',
  },
  {
    question: 'Do you offer parking?',
    answer:
      'Yes, we provide secure on-site indoor parking for all guests at no additional cost. Your vehicle will be safe and protected.',
  },
  {
    question: 'Is the property family-friendly?',
    answer:
      'Absolutely! StayOra is designed with families in mind. We maintain a quiet, peaceful atmosphere and welcome families with children.',
  },
  {
    question: 'How can I book a room?',
    answer:
      'You can book directly through WhatsApp at +92-328-2255771 or call us at 0321 8255188. You can also email us at stayoraguesthouse@gmail.com.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about StayOra Guest House
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-primary"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-foreground text-left">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 border-t border-border bg-muted/30">
                  <p className="text-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="mt-16 bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Still have questions?
          </h3>
          <p className="text-muted-foreground mb-6">
            Our team is here to help! Feel free to reach out to us anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/923282255771"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              💬 Chat on WhatsApp
            </a>
            <a
              href="tel:03218255188"
              className="btn-secondary"
            >
              📞 Call Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
