import { motion } from 'motion/react';
import { Target, Lightbulb, Leaf, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Indian Motif Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23D12027\' fill-opacity=\'1\'%3E%3Cpath d=\'M30 30c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10zm0 0c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10zm0 0c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm0 0c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-brand-red uppercase mb-3">Company Overview</h2>
            <h3 className="text-4xl font-extrabold text-brand-black mb-6 leading-tight">
              A Trusted Name in Specialty Chemicals Since 1985
            </h3>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                <strong className="text-brand-black">Reliance Products</strong>, established in 1985 in <strong className="text-brand-black">Jalandhar, Punjab</strong>, is a trusted name in Paint Binders, Construction Chemicals, Waterproofing Solutions, Adhesives, Leather & Specialty Chemicals.
              </p>
              <p>
                We are engaged in manufacturing, importing, wholesaling, and retailing a wide range of products. With over 39 years of experience, we have built a reputation for consistent quality, competitive pricing, and timely delivery across India.
              </p>
            </div>

            {/* Legacy Card */}
            <div className="mt-10 p-8 bg-gradient-to-br from-red-50 to-white rounded-2xl border border-red-100 relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-bl-full -mr-8 -mt-8"></div>
              <h4 className="text-2xl font-bold text-brand-black mb-4 flex items-center gap-3">
                <Users className="text-brand-red w-6 h-6" />
                Our Legacy & Vision
              </h4>
              <p className="text-gray-700 italic leading-relaxed">
                "To carry forward the visionary legacy of <strong className="text-brand-black">Shri Vijay Aggarwal</strong> & <strong className="text-brand-black">Er. Lakshay Aggarwal</strong> by becoming a globally trusted leader in specialty chemicals, delivering innovative, sustainable, and high-quality solutions under the philosophy of <strong className="text-brand-red font-bold">Growing Together</strong>."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div className="space-y-6">
              <img 
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=400&h=500" 
                alt="Chemical Laboratory Testing" 
                className="w-full h-64 object-cover rounded-2xl shadow-lg border-2 border-gray-100 bg-gray-100"
                referrerPolicy="no-referrer"
                onError={(e) => { e.currentTarget.src = 'https://picsum.photos/seed/lab/400/500'; }}
              />
              <div className="bg-brand-black text-white p-8 rounded-2xl shadow-lg">
                <Lightbulb className="w-8 h-8 text-brand-red mb-4" />
                <h4 className="text-xl font-bold mb-2">Innovation</h4>
                <p className="text-gray-400 text-sm">Continuously improving our formulations to meet modern industrial demands.</p>
              </div>
            </div>
            <div className="space-y-6 sm:mt-12">
              <div className="bg-brand-red text-white p-8 rounded-2xl shadow-lg">
                <Leaf className="w-8 h-8 text-white mb-4" />
                <h4 className="text-xl font-bold mb-2">Mission</h4>
                <ul className="text-red-100 text-sm space-y-2 list-disc list-inside">
                  <li>Provide quality products</li>
                  <li>Improve environmentally friendly practices</li>
                  <li>Provide the best for customers</li>
                </ul>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=400&h=500" 
                alt="Manufacturing Plant Facility" 
                className="w-full h-64 object-cover rounded-2xl shadow-lg border-2 border-gray-100 bg-gray-100"
                referrerPolicy="no-referrer"
                onError={(e) => { e.currentTarget.src = 'https://picsum.photos/seed/factory/400/500'; }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
