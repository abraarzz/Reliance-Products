export default function Footer() {
  return (
    <footer className="bg-brand-black text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="relative w-10 h-10 flex items-center justify-center bg-white rounded-lg">
                <span className="text-brand-red font-serif italic text-2xl font-bold absolute -left-0.5">R</span>
                <span className="text-brand-black font-serif italic text-2xl font-bold absolute left-2 top-1">P</span>
              </div>
              <div className="flex flex-col ml-3">
                <span className="text-lg font-bold tracking-tight text-white uppercase leading-none">Reliance</span>
                <span className="text-lg font-bold tracking-tight text-white uppercase leading-none">Products</span>
              </div>
            </div>
            <p className="text-gray-400 max-w-md mb-6 leading-relaxed">
              Specialty in water-based coating chemicals since 1985. We deliver quality, reliability, and value under the vision of "Growing Together."
            </p>
            <div className="p-4 bg-white/5 rounded-xl border border-white/10 inline-block mb-6">
              <p className="text-sm font-bold text-brand-red mb-1">Our Mission:</p>
              <p className="text-sm text-gray-300 italic">"Provide quality products and improve environmentally friendly practices."</p>
            </div>
            
            <div className="flex flex-wrap gap-4 text-xs font-semibold text-gray-400">
              <span className="px-3 py-1 bg-white/10 rounded-full border border-white/20">GSTIN: 03XXXXX1234X1ZX</span>
              <span className="px-3 py-1 bg-white/10 rounded-full border border-white/20">MSME Registered</span>
              <span className="px-3 py-1 bg-white/10 rounded-full border border-white/20">ISO 9001:2015</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-white transition-colors">Products</a></li>
              <li><a href="#advantages" className="text-gray-400 hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-bold mb-6">Products</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">Paint Binders</li>
              <li className="text-gray-400">Construction Chemicals</li>
              <li className="text-gray-400">Waterproofing Solutions</li>
              <li className="text-gray-400">Adhesives & Lamination</li>
              <li className="text-gray-400">Leather Chemicals</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Reliance Products. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Proudly Made in Jalandhar, Punjab, India
          </p>
        </div>
      </div>
    </footer>
  );
}
