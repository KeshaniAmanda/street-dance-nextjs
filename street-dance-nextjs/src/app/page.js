"use client";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { doc, getDoc, collection, getDocs, limit, query } from "firebase/firestore";

export default function Home() {
  const [hero, setHero] = useState({ title: "Street Dance", subtitle: "Move Your Body, Free Your Soul" });
  const [about, setAbout] = useState({ title: "About Us", description: "We are a passionate community of street dancers dedicated to hip hop culture. From beginners to professionals, we welcome everyone who loves to move." });
  const [testimonials, setTestimonials] = useState([
    { name: "Kamal S.", text: "Best dance community I've ever been part of. The energy is unreal!" },
    { name: "Nimasha R.", text: "The events are amazing. Met so many talented dancers here." },
    { name: "Dinesh K.", text: "From zero to performing on stage in 3 months. Incredible!" },
  ]);
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const homepageDoc = await getDoc(doc(db, "homepage", "content"));
        if (homepageDoc.exists()) {
          const data = homepageDoc.data();
          if (data.hero) setHero(data.hero);
          if (data.about) setAbout(data.about);
          if (data.testimonials) setTestimonials(data.testimonials);
        }
        const q = query(collection(db, "products"), limit(3));
        const snap = await getDocs(q);
        setFeatured(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
      } catch (error) {
        console.log("Error:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO - Animated sliding background images */}
      <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
        
        {/* Background Images - CSS animation for sliding */}
        <div className="absolute inset-0 z-0">
          <style>{`
            @keyframes slideshow {
              0%   { opacity: 1; }
              25%  { opacity: 1; }
              33%  { opacity: 0; }
              91%  { opacity: 0; }
              100% { opacity: 1; }
            }
            @keyframes slideshow2 {
              0%   { opacity: 0; }
              25%  { opacity: 0; }
              33%  { opacity: 1; }
              58%  { opacity: 1; }
              66%  { opacity: 0; }
              100% { opacity: 0; }
            }
            @keyframes slideshow3 {
              0%   { opacity: 0; }
              58%  { opacity: 0; }
              66%  { opacity: 1; }
              91%  { opacity: 1; }
              100% { opacity: 0; }
            }
            @keyframes kenburns {
              0%   { transform: scale(1) translateX(0px); }
              100% { transform: scale(1.1) translateX(-20px); }
            }
          `}</style>

          {/* Image 1 */}
          <div className="absolute inset-0" style={{ animation: "slideshow 18s infinite" }}>
            <img
              src="https://images.unsplash.com/photo-1547153760-18fc86324498?w=1600&q=80"
              alt=""
              className="w-full h-full object-cover"
              style={{ animation: "kenburns 18s ease-in-out infinite alternate" }}
            />
          </div>

          {/* Image 2 */}
          <div className="absolute inset-0" style={{ animation: "slideshow2 18s infinite" }}>
            <img
              src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=1600&q=80"
              alt=""
              className="w-full h-full object-cover"
              style={{ animation: "kenburns 18s ease-in-out infinite alternate-reverse" }}
            />
          </div>

          {/* Image 3 */}
          <div className="absolute inset-0" style={{ animation: "slideshow3 18s infinite" }}>
            <img
              src="https://images.unsplash.com/photo-1535525153412-5a42439a210d?w=1600&q=80"
              alt=""
              className="w-full h-full object-cover"
              style={{ animation: "kenburns 18s ease-in-out infinite alternate" }}
            />
          </div>

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 px-4">
          <p className="text-yellow-400 text-xs tracking-[5px] uppercase mb-5 font-semibold">Welcome to</p>
          <h1 className="text-7xl md:text-9xl font-extrabold text-yellow-400 mb-6 leading-tight drop-shadow-2xl">
            {hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-xl mx-auto leading-relaxed">
            {hero.subtitle}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/events" className="bg-yellow-400 text-black px-10 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 transition-all hover:scale-105">
              Explore Events
            </a>
            <a href="/shop" className="border-2 border-yellow-400 text-yellow-400 px-10 py-4 rounded-full text-lg font-semibold hover:bg-yellow-400 hover:text-black transition-all hover:scale-105">
              Shop Now
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-yellow-400 rounded-full" />
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <div className="bg-yellow-400 py-5 flex justify-around flex-wrap gap-3">
        {[
          { num: "500+", label: "Dancers" },
          { num: "50+", label: "Events" },
          { num: "10+", label: "Years" },
          { num: "20+", label: "Cities" },
        ].map((s) => (
          <div key={s.label} className="text-center px-4">
            <p className="text-3xl font-extrabold text-black">{s.num}</p>
            <p className="text-xs font-bold text-yellow-900 tracking-widest uppercase">{s.label}</p>
          </div>
        ))}
      </div>

      {/* ABOUT - with YouTube background video */}
      <section className="relative py-24 px-8 text-center overflow-hidden">

        {/* YouTube video background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/HP2CdPFINoc?autoplay=1&mute=1&loop=1&playlist=HP2CdPFINoc&controls=0&showinfo=0&rel=0&modestbranding=1"
            className="absolute w-full h-full"
            style={{
              top: "50%", left: "50%",
              transform: "translate(-50%, -50%) scale(1.5)",
              pointerEvents: "none",
              minWidth: "100%", minHeight: "100%",
              border: "none"
            }}
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>

        {/* About Content */}
        <div className="relative z-10">
          <p className="text-yellow-400 text-xs tracking-[3px] uppercase mb-3">Who We Are</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">{about.title}</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-14 leading-relaxed">{about.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: "🎵", title: "Hip Hop Culture", desc: "Rooted in authentic street culture and music" },
              { icon: "🏆", title: "Championship Level", desc: "Train alongside competition winners" },
              { icon: "🌍", title: "Global Community", desc: "Connect with dancers worldwide" },
            ].map((item) => (
              <div key={item.title} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-yellow-400 transition-all hover:bg-white/15">
                <p className="text-4xl mb-4">{item.icon}</p>
                <p className="font-bold text-white text-lg mb-2">{item.title}</p>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-20 px-8 bg-black">
        <div className="text-center mb-12">
          <p className="text-yellow-400 text-xs tracking-[3px] uppercase mb-3">Our Store</p>
          <h2 className="text-4xl font-extrabold text-yellow-400">Featured Products</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {featured.length > 0 ? featured.map((product) => (
            <a href={`/shop/${product.id}`} key={product.id}
              className="bg-gray-900 rounded-xl overflow-hidden hover:ring-2 hover:ring-yellow-400 transition-all hover:scale-105 border border-gray-800">
              {product.image ? (
                <img src={product.image} alt={product.name} className="w-full h-52 object-cover" />
              ) : (
                <div className="w-full h-52 bg-gray-800 flex items-center justify-center">
                  <p className="text-gray-500">No Image</p>
                </div>
              )}
              <div className="p-4">
                <h3 className="text-lg font-bold text-white mb-1">{product.name}</h3>
                <p className="text-yellow-400 font-bold">Rs. {product.price}</p>
              </div>
            </a>
          )) : (
            [
              { name: "Dance Sneakers", price: "8,500", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80" },
              { name: "Street Hoodie", price: "4,200", img: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=400&q=80" },
              { name: "Hip Hop Cap", price: "1,800", img: "https://images.unsplash.com/photo-1588117305388-c2631a279f82?w=400&q=80" },
            ].map((p) => (
              <div key={p.name} className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:ring-2 hover:ring-yellow-400 transition-all hover:scale-105">
                <img src={p.img} alt={p.name} className="w-full h-52 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white mb-1">{p.name}</h3>
                  <p className="text-yellow-400 font-bold">Rs. {p.price}</p>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="text-center">
          <a href="/shop" className="bg-yellow-400 text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all hover:scale-105">
            View All Products
          </a>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-slate-900 py-20 px-8">
        <div className="text-center mb-12">
          <p className="text-yellow-400 text-xs tracking-[3px] uppercase mb-3">Reviews</p>
          <h2 className="text-4xl font-extrabold text-white">What People Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-slate-800 rounded-2xl p-6 border-t-4 border-yellow-400 hover:border-yellow-300 transition-all">
              <p className="text-4xl text-yellow-400 mb-3">"</p>
              <p className="text-slate-300 mb-6 leading-relaxed text-sm">{t.text}</p>
              <p className="text-yellow-400 font-bold text-sm">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-gray-800 py-8 text-center text-gray-600">
        <p>© 2026 Street Dance. All rights reserved.</p>
      </footer>

    </main>
  );
}