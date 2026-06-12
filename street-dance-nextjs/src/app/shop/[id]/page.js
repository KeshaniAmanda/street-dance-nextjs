"use client";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "next/navigation";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() });
        }
      } catch (error) {
        console.log("Error:", error);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchProduct();
  }, [id]);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");
  };

  if (loading) return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <p className="text-2xl">Loading...</p>
    </div>
  );

  if (!product) return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <p className="text-2xl">Product not found.</p>
    </div>
  );

  return (
    <main className="min-h-screen bg-black text-white p-8 max-w-4xl mx-auto">
      <a href="/shop" className="text-yellow-400 hover:underline mb-6 block">← Back to Shop</a>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-gray-900 rounded-lg h-80 flex items-center justify-center">
          {product.image ? (
            <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-lg" />
          ) : (
            <img src="https://placehold.co/600x400/1f2937/yellow?text=No+Image" alt="No Image" className="w-full h-full object-cover rounded-lg" />
          )}
        </div>
        <div>
          <h1 className="text-4xl font-bold text-yellow-400 mb-4">{product.name}</h1>
          <p className="text-gray-400 mb-4">{product.category}</p>
          <p className="text-gray-300 text-lg mb-6">{product.description}</p>
          <p className="text-3xl font-bold text-white mb-8">${product.price}</p>
          <button
            onClick={addToCart}
            className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-300 transition w-full"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}