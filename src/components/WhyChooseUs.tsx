import { motion } from 'motion/react';
import { ShieldCheck, Leaf, HeadphonesIcon } from 'lucide-react';

const advantages = [
  {
    title: 'Guaranteed Product Quality',
    icon: ShieldCheck,
    description: 'We always prioritize the quality of the products we market, because these products go through various strict tests to ensure their suitability.',
    color: 'bg-red-50 text-brand-red'
  },
  {
    title: 'Commitment to Sustainability',
    icon: Leaf,
    description: 'We are committed to always improving environmentally friendly practices from products, materials, to production processes.',
    color: 'bg-green-50 text-green-600'
  },
  {
    title: 'Professional Customer Service',
    icon: HeadphonesIcon,
    description: 'We strive to serve our customers professionally both online and offline, customer satisfaction is our priority.',
    color: 'bg-blue-50 text-blue-600'
  }
];

export default function WhyChooseUs() {
  return (
    <section id="advantages" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-red-50 blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-gray-50 blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-brand-red uppercase mb-3">Our Advantages</h2>
          <h3 className="text-4xl font-extrabold text-brand-black mb-6">Why Choose Reliance Products?</h3>
          <p className="text-lg text-gray-600">
            We don't just supply chemicals; we build lasting partnerships through quality, sustainability, and exceptional service.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {advantages.map((adv, index) => {
            const Icon = adv.icon;
            return (
              <motion.div
                key={adv.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${adv.color}`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-brand-black mb-4">{adv.title}</h4>
                <p className="text-gray-600 leading-relaxed">
                  {adv.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
