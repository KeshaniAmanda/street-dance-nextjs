"use client";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const items = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(items);
      } catch (error) {
        console.log("Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(product.name + " added to cart!");
  };

  const categories = ["All", ...new Set(products.map((p) => p.category).filter(Boolean))];

  const filtered = products.filter((p) => {
    const matchCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchSearch = p.name?.toLowerCase().includes(search.toLowerCase()) ||
      p.description?.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  if (loading) return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <p className="text-2xl">Loading...</p>
    </div>
  );

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold text-yellow-400 mb-8">Shop</h1>

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-gray-900 text-white border border-gray-700 rounded-lg px-4 py-2 w-full md:w-1/2 focus:outline-none focus:border-yellow-400"
        />
        <div className="flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full font-bold transition ${
                selectedCategory === cat
                  ? "bg-yellow-400 text-black"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      {filtered.length === 0 ? (
        <p className="text-gray-400 text-xl">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <div key={product.id} className="bg-gray-900 rounded-lg p-6 hover:ring-2 hover:ring-yellow-400 transition">
              <a href={`/shop/${product.id}`} className="block mb-4">
                {product.image ? (
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                ) : (
                  <div className="w-full h-48 bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                    <p className="text-gray-500">No Image</p>
                  </div>
                )}
                <h2 className="text-xl font-bold text-white mb-2 hover:text-yellow-400 transition">{product.name}</h2>
                <p className="text-gray-400 mb-2">{product.description}</p>
                <p className="text-yellow-400 font-bold text-lg">Rs. {product.price}</p>
              </a>
              <button
                onClick={() => addToCart(product)}
                className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold hover:bg-yellow-300 w-full mt-2"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}