import { motion } from "motion/react";
import React, { useState } from "react";
import { Calendar, Clock, Users, Send, CheckCircle } from "lucide-react";

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "2",
    notes: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", date: "", time: "", guests: "2", notes: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Reservation error:", error);
      setStatus("error");
    }
  };

  return (
    <section id="reservations" className="py-24 px-6 bg-dark">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold uppercase tracking-[0.5em] text-xs mb-4"
          >
            Reserve Your Table
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-serif text-paper"
          >
            Join Us for an Evening
          </motion.h2>
          <div className="w-24 h-[1px] bg-gold mx-auto mt-8" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-white/5 backdrop-blur-sm p-8 md:p-12 border border-white/10"
        >
          {status === "success" ? (
            <div className="text-center py-12 space-y-6">
              <CheckCircle size={64} className="text-gold mx-auto mb-4" />
              <h3 className="text-2xl font-serif text-paper">Reservation Received</h3>
              <p className="text-paper/60 max-w-md mx-auto">
                Thank you for choosing Lumière. We have received your request and will 
                confirm your table shortly via email.
              </p>
              <button 
                onClick={() => setStatus("idle")}
                className="px-8 py-3 bg-gold text-dark font-medium uppercase tracking-widest hover:bg-white transition-all duration-300"
              >
                Make Another Booking
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gold">Full Name</label>
                <input 
                  required
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Jean Dupont"
                  className="w-full bg-transparent border-b border-white/20 py-3 text-paper focus:border-gold outline-none transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gold">Email Address</label>
                <input 
                  required
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="jean@example.com"
                  className="w-full bg-transparent border-b border-white/20 py-3 text-paper focus:border-gold outline-none transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gold flex items-center gap-2">
                  <Calendar size={14} /> Date
                </label>
                <input 
                  required
                  type="date" 
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-transparent border-b border-white/20 py-3 text-paper focus:border-gold outline-none transition-colors [color-scheme:dark]"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gold flex items-center gap-2">
                  <Clock size={14} /> Time
                </label>
                <select 
                  required
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full bg-transparent border-b border-white/20 py-3 text-paper focus:border-gold outline-none transition-colors appearance-none"
                >
                  <option value="" disabled className="bg-dark">Select Time</option>
                  <option value="18:00" className="bg-dark">18:00</option>
                  <option value="18:30" className="bg-dark">18:30</option>
                  <option value="19:00" className="bg-dark">19:00</option>
                  <option value="19:30" className="bg-dark">19:30</option>
                  <option value="20:00" className="bg-dark">20:00</option>
                  <option value="20:30" className="bg-dark">20:30</option>
                  <option value="21:00" className="bg-dark">21:00</option>
                  <option value="21:30" className="bg-dark">21:30</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gold flex items-center gap-2">
                  <Users size={14} /> Guests
                </label>
                <select 
                  required
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full bg-transparent border-b border-white/20 py-3 text-paper focus:border-gold outline-none transition-colors appearance-none"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                    <option key={n} value={n} className="bg-dark">{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                  <option value="9+" className="bg-dark">9+ Guests (Contact Us)</option>
                </select>
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-xs uppercase tracking-widest text-gold">Special Requests</label>
                <textarea 
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Dietary requirements, special occasions, etc."
                  className="w-full bg-transparent border-b border-white/20 py-3 text-paper focus:border-gold outline-none transition-colors resize-none h-24"
                />
              </div>

              <div className="md:col-span-2 pt-6">
                <button 
                  type="submit" 
                  disabled={status === "loading"}
                  className="w-full py-4 bg-gold text-dark font-medium uppercase tracking-widest hover:bg-white transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {status === "loading" ? "Processing..." : (
                    <>
                      Confirm Reservation <Send size={18} />
                    </>
                  )}
                </button>
                {status === "error" && (
                  <p className="text-red-400 text-xs mt-4 text-center">
                    An error occurred. Please try again or call us directly.
                  </p>
                )}
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
