/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import About from "./components/About";
import ReservationForm from "./components/ReservationForm";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  return (
    <AnimatePresence>
      <div className="min-h-screen bg-dark overflow-x-hidden selection:bg-gold selection:text-dark">
        <Navbar />
        
        <main>
          <Hero />
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <About />
            <Menu />
            <ReservationForm />
            <Contact />
          </motion.div>
        </main>

        <Footer />
      </div>
    </AnimatePresence>
  );
}
