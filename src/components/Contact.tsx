import { motion } from "motion/react";
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-paper text-dark">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Left Side: Info */}
        <div className="space-y-12">
          <div className="space-y-4">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold uppercase tracking-[0.5em] text-xs"
            >
              Get in Touch
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-serif text-dark"
            >
              Contact Us
            </motion.h2>
          </div>

          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-start gap-6"
            >
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="text-sm uppercase tracking-widest text-gold mb-2">Location</h4>
                <p className="text-lg font-serif italic">12 Rue de la Paix, 75002 Paris, France</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-start gap-6"
            >
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="text-sm uppercase tracking-widest text-gold mb-2">Reservations</h4>
                <p className="text-lg font-serif italic">+33 1 23 45 67 89</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex items-start gap-6"
            >
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="text-sm uppercase tracking-widest text-gold mb-2">Email</h4>
                <p className="text-lg font-serif italic">bonjour@lumiere-paris.com</p>
              </div>
            </motion.div>
          </div>

          <div className="pt-8 space-y-6">
            <h4 className="text-sm uppercase tracking-widest text-gold">Follow Our Journey</h4>
            <div className="flex gap-6">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, color: "#c5a059" }}
                  className="text-dark/40 transition-colors duration-300"
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Opening Hours & Map Placeholder */}
        <div className="space-y-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-dark text-paper p-10 rounded-sm shadow-2xl"
          >
            <h3 className="text-2xl font-serif text-gold mb-8 text-center italic">Opening Hours</h3>
            <div className="space-y-6">
              {[
                { day: "Monday - Thursday", hours: "18:00 - 23:00" },
                { day: "Friday - Saturday", hours: "18:00 - 00:00" },
                { day: "Sunday", hours: "12:00 - 15:00, 18:00 - 22:00" },
              ].map((item) => (
                <div key={item.day} className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-sm uppercase tracking-widest text-paper/60">{item.day}</span>
                  <span className="font-serif italic text-lg">{item.hours}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="aspect-video bg-dark/10 rounded-sm overflow-hidden relative group"
          >
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Paris Map" 
              className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-dark/80 backdrop-blur-md px-6 py-3 border border-gold/30 text-gold text-xs uppercase tracking-[0.3em]">
                View on Google Maps
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
