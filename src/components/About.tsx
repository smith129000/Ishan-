import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-paper text-dark overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Left Side: Images */}
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1550966841-3ee5ad60d0d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Chef at Work" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute -bottom-10 -right-10 w-2/3 aspect-square overflow-hidden rounded-sm shadow-2xl border-8 border-paper"
          >
            <img 
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Plated Dish" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* Right Side: Content */}
        <div className="space-y-10">
          <div className="space-y-4">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold uppercase tracking-[0.5em] text-xs"
            >
              Our Heritage
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-serif text-dark"
            >
              The Art of Fine Dining
            </motion.h2>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg leading-relaxed text-dark/70 font-serif italic"
          >
            "Lumière was born from a passion for the timeless elegance of French gastronomy, 
            reimagined through a modern lens. We believe that dining is not just about 
            sustenance, but a multisensory journey that celebrates the finest ingredients, 
            meticulous technique, and the warmth of hospitality."
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-dark/80 leading-relaxed">
              Our kitchen, led by Executive Chef Julien Moreau, sources only the most 
              exceptional seasonal produce from local artisans and sustainable farms. 
              Each dish is a masterpiece of balance, texture, and flavor, designed to 
              surprise and delight even the most discerning palate.
            </p>
            <p className="text-dark/80 leading-relaxed">
              Step into our sanctuary of light and taste, where every detail—from the 
              hand-blown glassware to the curated wine cellar—has been chosen to create 
              an unforgettable experience.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="pt-6"
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Signature_of_Julien_Moreau.svg/200px-Signature_of_Julien_Moreau.svg.png" 
              alt="Chef Signature" 
              className="h-16 opacity-60 grayscale invert"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            <p className="text-xs uppercase tracking-widest text-gold mt-2">Executive Chef Julien Moreau</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
