import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-brand-red uppercase mb-3">Company Contact</h2>
          <h3 className="text-4xl font-extrabold text-brand-black mb-6">Get in Touch</h3>
          <p className="text-lg text-gray-600">
            Thank you for getting to know us better. We look forward to working with you and bringing positive change through our superior products and services.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid lg:grid-cols-2">
            {/* Contact Info & Map */}
            <div className="flex flex-col h-full">
              <div className="p-10 lg:p-12 bg-brand-red text-white relative overflow-hidden flex-1">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
                
                <div className="relative z-10 space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Address</h4>
                      <p className="text-red-100">Jalandhar City, Punjab-144003, India</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Phone / WhatsApp</h4>
                      <p className="text-red-100">+91 92167-66684</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Email</h4>
                      <p className="text-red-100">reliance4172@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">IndiaMART</h4>
                      <a href="https://www.indiamart.com/reliance-products" target="_blank" rel="noopener noreferrer" className="text-red-100 hover:text-white underline decoration-red-300 underline-offset-4 transition-colors">
                        IndiaMART TrustSEAL Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Google Map Embed */}
              <div className="h-64 lg:h-80 w-full bg-gray-200">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109066.4072671542!2d75.50337835!3d31.32238415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5a5747a9eb91%3A0xc74b34c05aa5b4b8!2sJalandhar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1709500000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Reliance Products Location in Jalandhar"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-10 lg:p-12">
              <h3 className="text-3xl font-bold text-brand-black mb-2">Send an Inquiry</h3>
              <p className="text-gray-500 mb-8">Fill out the form below and our sales team will get back to you promptly.</p>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-colors outline-none"
                      placeholder="Ramesh"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-colors outline-none"
                      placeholder="Kumar"
                    />
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-colors outline-none"
                      placeholder="ramesh@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-colors outline-none"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-2">Product of Interest</label>
                  <select 
                    id="product" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-colors outline-none bg-white"
                  >
                    <option>Paint Binders</option>
                    <option>Construction Chemicals</option>
                    <option>Waterproofing Solutions</option>
                    <option>Adhesives & Lamination</option>
                    <option>Leather & Specialty Chemicals</option>
                    <option>Bulk Order Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message / Requirements</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-colors outline-none resize-none"
                    placeholder="Please specify your quantity requirements and application area..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-brand-black text-white font-bold py-4 rounded-xl hover:bg-gray-900 transition-colors shadow-md"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
