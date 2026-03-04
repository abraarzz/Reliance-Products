import { motion } from 'motion/react';
import { ArrowRight, Download, ShieldCheck, Award, CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-24 overflow-hidden bg-[#FAFAFA]">
      {/* Subtle Indian Mandala/Floral Pattern Background */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23D12027\' fill-opacity=\'1\'%3E%3Cpath d=\'M30 30c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10zm0 0c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10zm0 0c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm0 0c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
      
      {/* Semi-transparent India Map Watermark */}
      <div className="absolute right-[-10%] lg:right-[5%] top-1/2 -translate-y-1/2 w-[800px] lg:w-[1000px] opacity-[0.06] pointer-events-none z-0 mix-blend-multiply">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Outline_Map_of_India.svg/1024px-Outline_Map_of_India.svg.png" 
          alt="India Map Watermark" 
          className="w-full h-full object-contain"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl drop-shadow-sm">🙏</span>
              <span className="text-[#FF9933] font-bold tracking-widest uppercase text-sm">Namaste & Welcome</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-extrabold text-brand-black leading-[1.1] tracking-tight mb-6">
              Leading the Future of <br className="hidden lg:block" />
              <span className="text-brand-red">Water-Based</span> <br className="hidden lg:block" />
              Coating Chemicals.
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
              With over 39+ years of expertise, global sourcing, and modern infrastructure, we deliver quality, reliability, and value under the vision of "Growing Together."
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-brand-red rounded-full hover:bg-red-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Request a Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/brochure.pdf"
                onClick={(e) => { e.preventDefault(); alert('Brochure download will be available soon.'); }}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-brand-black bg-white border border-gray-200 rounded-full hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm hover:shadow"
              >
                <Download className="mr-2 w-5 h-5 text-brand-red" />
                Download Brochure
              </a>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-200 flex items-center gap-8">
              <div>
                <p className="text-3xl font-black text-brand-black">39+</p>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mt-1">Years Legacy</p>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div>
                <p className="text-3xl font-black text-brand-black">100%</p>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mt-1">Quality Assured</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center mt-10 lg:mt-0"
          >
            {/* Floating "Made in India" Badge */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -top-8 -right-4 lg:-top-4 lg:-right-8 z-30 bg-white rounded-full shadow-2xl border-4 border-white w-36 h-36 flex items-center justify-center"
            >
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#138808] animate-[spin_20s_linear_infinite] opacity-30"></div>
              <div className="absolute inset-1 rounded-full border-2 border-dashed border-[#FF9933] animate-[spin_15s_linear_infinite_reverse] opacity-30"></div>
              <div className="flex flex-col items-center justify-center text-center z-10">
                <span className="text-4xl mb-1 drop-shadow-sm">🇮🇳</span>
                <span className="text-xs font-black text-brand-black uppercase tracking-widest leading-tight">Made In<br/>India</span>
                <span className="text-[9px] font-bold text-brand-red mt-1 tracking-wider">SINCE 1985</span>
              </div>
            </motion.div>

            {/* Abstract representation of chemicals/industry */}
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-red/20 to-transparent rounded-full blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800&h=800" 
                alt="Industrial Chemical Plant" 
                className="relative z-10 w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-white"
                referrerPolicy="no-referrer"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-brand-red" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Premium Grade</p>
                    <p className="text-xs text-gray-500">Specialty Chemicals</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trust Badges Row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-10 border-t border-gray-200"
        >
          <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">Trusted by Industries Across India</p>
          <div className="flex flex-wrap justify-center gap-10 md:gap-20 items-center opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-3">
              <Award className="w-10 h-10 text-brand-red" />
              <span className="font-bold text-xl text-brand-black">ISO 9001:2015</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-10 h-10 text-green-600" />
              <span className="font-bold text-xl text-brand-black">IndiaMART TrustSEAL</span>
            </div>
            <div className="flex items-center gap-3">
              <img src="https://cdn.worldvectorlogo.com/logos/make-in-india.svg" alt="Make in India" className="h-14 object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden'); }} />
              {/* Fallback if SVG fails to load */}
              <span className="hidden font-black text-xl text-brand-black tracking-tighter">MAKE IN INDIA</span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-10 h-10 text-blue-600" />
              <span className="font-bold text-xl text-brand-black">MSME Registered</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
