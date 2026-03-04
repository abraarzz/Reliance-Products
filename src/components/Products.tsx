import { motion } from 'motion/react';
import { Droplet, Home, Shield, Layers, Briefcase } from 'lucide-react';

const categories = [
  {
    title: 'Paint Binders',
    icon: Droplet,
    description: 'High-performance binders ensuring excellent adhesion, durability, and finish for various paint applications.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=600&h=400',
    fallback: 'https://picsum.photos/seed/paint/600/400'
  },
  {
    title: 'Construction Chemicals',
    icon: Home,
    description: 'Advanced chemical solutions designed to enhance the strength, workability, and longevity of construction materials.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=600&h=400',
    fallback: 'https://picsum.photos/seed/construction/600/400'
  },
  {
    title: 'Waterproofing Solutions',
    icon: Shield,
    description: 'Reliable waterproofing chemicals providing robust protection against moisture and water damage.',
    image: 'https://images.unsplash.com/photo-1585909695284-32d2985ac9c0?auto=format&fit=crop&q=80&w=600&h=400',
    fallback: 'https://picsum.photos/seed/waterproof/600/400'
  },
  {
    title: 'Adhesives & Lamination',
    icon: Layers,
    description: 'Superior adhesives formulated for strong bonding in lamination and various industrial applications.',
    image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&q=80&w=600&h=400',
    fallback: 'https://picsum.photos/seed/adhesive/600/400'
  },
  {
    title: 'Leather & Specialty Chemicals',
    icon: Briefcase,
    description: 'Specialized chemicals tailored for the leather industry and other specific manufacturing needs.',
    image: 'https://images.unsplash.com/photo-1581600140682-d4e68c8cde32?auto=format&fit=crop&q=80&w=600&h=400',
    fallback: 'https://picsum.photos/seed/leather/600/400'
  }
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-brand-red uppercase mb-3">Our Offerings</h2>
          <h3 className="text-4xl font-extrabold text-brand-black mb-6">Premium Product Categories</h3>
          <p className="text-lg text-gray-600">
            We offer a comprehensive range of high-quality, water-based coating chemicals tailored to meet the rigorous demands of various industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = category.fallback;
                    }}
                  />
                  <div className="absolute top-4 left-4 z-20 bg-white p-3 rounded-xl shadow-md">
                    <Icon className="w-6 h-6 text-brand-red" />
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h4 className="text-xl font-bold text-brand-black mb-3">{category.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">{category.description}</p>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <a href="#contact" className="text-brand-red font-semibold text-sm hover:text-red-800 flex items-center gap-1 transition-colors">
                      Inquire Now <span className="text-lg leading-none">&rarr;</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
