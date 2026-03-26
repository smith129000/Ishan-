import { motion } from "motion/react";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Fine Dining Atmosphere" 
          className="w-full h-full object-cover scale-110 animate-slow-zoom"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gold uppercase tracking-[0.5em] text-sm mb-6"
        >
          Modern French Gastronomy
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-serif text-paper mb-8 leading-tight"
        >
          LUMIÈRE
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <a 
            href="#reservations" 
            className="px-10 py-4 bg-gold text-dark font-medium uppercase tracking-widest hover:bg-white transition-all duration-300"
          >
            Book a Table
          </a>
          <a 
            href="#menu" 
            className="px-10 py-4 border border-white/30 text-paper font-medium uppercase tracking-widest hover:bg-white/10 transition-all duration-300"
          >
            Explore Menu
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-gold to-transparent" />
        <span className="text-[10px] uppercase tracking-[0.3em] text-paper/50">Scroll</span>
      </motion.div>
    </section>
  );
}
