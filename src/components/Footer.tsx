import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-serif tracking-widest text-gold mb-2">LUMIÈRE</h2>
          <p className="text-[10px] uppercase tracking-[0.4em] text-paper/40">Gastronomy & Art</p>
        </div>

        <div className="flex gap-8 text-[10px] uppercase tracking-widest text-paper/40">
          <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-gold transition-colors">Accessibility</a>
        </div>

        <div className="text-[10px] uppercase tracking-widest text-paper/40">
          © {new Date().getFullYear()} Lumière Gastronomy. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
