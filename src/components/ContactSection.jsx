import React, { useState } from "react";
import { MapPin, Phone, Mail, Send, Clock } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = () => {
    if (form.name && form.email && form.message) {
      setSent(true);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="reveal text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-accent" />
            <span className="text-accent text-xs uppercase tracking-[0.4em]">Get In Touch</span>
            <div className="w-8 h-px bg-accent" />
          </div>
          <h2 className="font-display text-5xl lg:text-6xl text-white leading-none">
            COME JOIN<br />
            <span style={{ WebkitTextStroke: "2px #E8FF00", color: "transparent" }}>THE CREW</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info */}
          <div className="reveal">
            <p className="text-white/50 leading-relaxed mb-10 text-lg">
              Ready to start your hip-hop journey? Drop us a message, stop by the studio,
              or just show up to a cypher night. We love meeting new faces.
            </p>

            <div className="space-y-6 mb-10">
              {[
                { icon: MapPin, label: "Location", value: "142 Flatbush Ave, Brooklyn, NY 11217" },
                { icon: Phone, label: "Phone", value: "+1 (718) 555-0192" },
                { icon: Mail, label: "Email", value: "hello@vibez-hiphop.com" },
                { icon: Clock, label: "Studio Hours", value: "Mon–Fri 9AM–10PM · Sat–Sun 10AM–6PM" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-accent/30 flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-accent" />
                  </div>
                  <div>
                    <div className="text-white/30 text-xs uppercase tracking-widest mb-0.5">{label}</div>
                    <div className="text-white/80 text-sm">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="aspect-video bg-mid border border-white/10 flex items-center justify-center relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: "linear-gradient(rgba(232,255,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(232,255,0,0.5) 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
              />
              <div className="text-center relative z-10">
                <MapPin size={32} className="text-accent mx-auto mb-2" />
                <div className="text-white/30 text-xs uppercase tracking-widest">Brooklyn, New York</div>
              </div>
              {/* Pin dot */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-accent rounded-full animate-ping opacity-70" />
            </div>
          </div>

          {/* Form */}
          <div className="reveal">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-12">
                <div className="font-display text-6xl text-accent mb-4">✓</div>
                <h3 className="font-display text-3xl text-white mb-3">Message Sent!</h3>
                <p className="text-white/40">We'll get back to you within 24 hours. See you on the floor!</p>
                <button
                  className="mt-8 border border-accent text-accent px-6 py-3 text-xs uppercase tracking-widest hover:bg-accent hover:text-dark transition-all"
                  onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <div className="space-y-5">
                {[
                  { name: "name", label: "Your Name", type: "text", placeholder: "Marcus Johnson" },
                  { name: "email", label: "Email Address", type: "email", placeholder: "you@example.com" },
                  { name: "subject", label: "Subject", type: "text", placeholder: "Interested in Breaking classes" },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-white/40 text-xs uppercase tracking-widest mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={form[field.name]}
                      onChange={handle}
                      placeholder={field.placeholder}
                      className="w-full bg-mid border border-white/10 focus:border-accent outline-none px-4 py-3 text-white placeholder-white/20 text-sm transition-colors"
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-white/40 text-xs uppercase tracking-widest mb-2">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handle}
                    placeholder="Tell us about yourself and what you're looking for..."
                    rows={5}
                    className="w-full bg-mid border border-white/10 focus:border-accent outline-none px-4 py-3 text-white placeholder-white/20 text-sm resize-none transition-colors"
                  />
                </div>

                <button
                  onClick={submit}
                  className="w-full bg-accent text-dark font-bold uppercase tracking-widest py-4 text-sm hover:bg-white transition-colors duration-300 flex items-center justify-center gap-3"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
