import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rudra Singh',
    location: 'Vapi, Gujarat',
    text: 'Response',
    rating: 5
  },
  {
    name: 'Rani Narasimha Sastry',
    location: 'Hyderabad, Telangana',
    text: 'Excellent quality and timely delivery. Highly recommended for industrial needs.',
    rating: 5
  },
  {
    name: 'Dharmik Shah',
    location: 'Ahmedabad, Gujarat',
    text: 'Their product paint binder is incredible.',
    rating: 4
  },
  {
    name: 'Rajiv Sharma',
    location: 'Meerut, Uttar Pradesh',
    text: 'Very Good customer dealing.',
    rating: 5
  },
  {
    name: 'Synudheen',
    location: 'Aluva, Kerala',
    text: 'Good products and reliable service.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-brand-black text-white relative overflow-hidden">
      {/* Abstract pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest text-brand-red uppercase mb-3">Customer Feedback</h2>
            <h3 className="text-4xl font-extrabold mb-6">Testimonials from Our Customers</h3>
            <p className="text-gray-400 text-lg">
              Don't just take our word for it. See what our valued clients across India have to say about our products and services.
            </p>
          </div>
          <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10 hidden lg:block">
            <div className="flex items-center gap-4 mb-2">
              <span className="text-4xl font-bold">4.8</span>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-sm text-gray-400">Based on verified customer ratings</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-white/10" />
              <div className="flex text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < testimonial.rating ? 'fill-current' : 'text-gray-600'}`} 
                  />
                ))}
              </div>
              <p className="text-gray-300 mb-8 italic min-h-[60px]">"{testimonial.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-red flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-xs text-gray-400">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
