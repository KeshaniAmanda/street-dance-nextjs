"use client";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { doc, getDoc, collection, getDocs, limit, query } from "firebase/firestore";

export default function Home() {
  const [hero, setHero] = useState({ title: "Street Dance", subtitle: "Move Your Body, Free Your Soul" });
  const [about, setAbout] = useState({ title: "About Us", description: "We are passionate about street dance culture." });
  const [testimonials, setTestimonials] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Homepage content
        const homepageDoc = await getDoc(doc(db, "homepage", "content"));
        if (homepageDoc.exists()) {
          const data = homepageDoc.data();
          if (data.hero) setHero(data.hero);
          if (data.about) setAbout(data.about);
          if (data.testimonials) setTestimonials(data.testimonials);
        }

        // Featured products
        const q = query(collection(db, "products"), limit(3));
        const snap = await getDocs(q);
        setFeatured(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
      } catch (error) {
        console.log("Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1 className="text-6xl font-bold mb-6 text-yellow-400">{hero.title}</h1>
        <p className="text-2xl mb-8 text-gray-300">{hero.subtitle}</p>
        <a href="/events" className="bg-yellow-400 text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 transition">
          Explore Events
        </a>
      </section>

      {/* About Section */}
      <section className="bg-gray-900 py-20 px-8 text-center">
        <h2 className="text-4xl font-bold text-yellow-400 mb-6">{about.title}</h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">{about.description}</p>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-8">
        <h2 className="text-4xl font-bold text-yellow-400 mb-10 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {featured.map((product) => (
            <a href={`/shop/${product.id}`} key={product.id} className="bg-gray-900 rounded-lg overflow-hidden hover:ring-2 hover:ring-yellow-400 transition">
              {product.image ? (
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              ) : (
                <div className="w-full h-48 bg-gray-800 flex items-center justify-center">
                  <p className="text-gray-500">No Image</p>
                </div>
              )}
              <div className="p-4">
                <h3 className="text-lg font-bold text-white">{product.name}</h3>
                <p className="text-yellow-400 font-bold">Rs. {product.price}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="/shop" className="bg-yellow-400 text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition">
            View All Products
          </a>
        </div>
      </section>

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <section className="bg-gray-900 py-20 px-8">
          <h2 className="text-4xl font-bold text-yellow-400 mb-10 text-center">What People Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-gray-800 rounded-lg p-6">
                <p className="text-gray-300 mb-4">"{t.text}"</p>
                <p className="text-yellow-400 font-bold">— {t.name}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8 text-center text-gray-500">
        <p>© 2026 Street Dance. All rights reserved.</p>
      </footer>

    </main>
  );
}