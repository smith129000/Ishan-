import { motion } from "motion/react";

const menuItems = [
  {
    category: "Starters",
    items: [
      { name: "Escargots de Bourgogne", price: "€24", description: "Burgundy snails, garlic herb butter, toasted brioche." },
      { name: "Foie Gras Terrine", price: "€28", description: "Fig compote, port wine reduction, artisanal sourdough." },
      { name: "Onion Soup Gratinée", price: "€18", description: "Caramelized onions, beef broth, Gruyère crust." },
    ]
  },
  {
    category: "Main Courses",
    items: [
      { name: "Duck Confit", price: "€42", description: "Slow-cooked duck leg, Sarladaise potatoes, red wine jus." },
      { name: "Sole Meunière", price: "€48", description: "Dover sole, brown butter, lemon, capers, parsley." },
      { name: "Boeuf Bourguignon", price: "€45", description: "Braised short rib, pearl onions, mushrooms, red wine sauce." },
    ]
  },
  {
    category: "Desserts",
    items: [
      { name: "Crème Brûlée", price: "€16", description: "Madagascar vanilla bean, caramelized sugar crust." },
      { name: "Tarte Tatin", price: "€18", description: "Caramelized apple tart, crème fraîche ice cream." },
      { name: "Chocolate Soufflé", price: "€20", description: "70% dark chocolate, Grand Marnier sauce." },
    ]
  }
];

export default function Menu() {
  return (
    <section id="menu" className="py-24 px-6 bg-dark/95">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold uppercase tracking-[0.5em] text-xs mb-4"
          >
            Seasonal Selection
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-serif text-paper"
          >
            Our Menu
          </motion.h2>
          <div className="w-24 h-[1px] bg-gold mx-auto mt-8" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {menuItems.map((section, idx) => (
            <motion.div 
              key={section.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="space-y-12"
            >
              <h3 className="text-2xl font-serif text-gold text-center italic border-b border-white/10 pb-4">
                {section.category}
              </h3>
              <div className="space-y-10">
                {section.items.map((item) => (
                  <div key={item.name} className="group">
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="text-lg font-serif text-paper group-hover:text-gold transition-colors duration-300">
                        {item.name}
                      </h4>
                      <span className="text-gold font-mono text-sm">{item.price}</span>
                    </div>
                    <p className="text-sm text-paper/50 leading-relaxed italic">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-paper/40 text-sm italic">
            * Our menu changes seasonally to reflect the freshest ingredients available.
          </p>
        </div>
      </div>
    </section>
  );
}
