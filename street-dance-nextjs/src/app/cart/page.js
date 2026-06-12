"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
  });
  const router = useRouter();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(savedCart);
  }, []);

  const removeFromCart = (id) => {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    const updated = cart.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const handleCheckout = async () => {
    if (!customerInfo.name || !customerInfo.email || !customerInfo.address) {
      alert("Please fill in Name, Email and Address!");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartItems: cart, customerInfo }),
      });
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.log("Checkout error:", error);
    } finally {
      setLoading(false);
    }
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold text-yellow-400 mb-8">Cart</h1>
      {cart.length === 0 ? (
        <p className="text-gray-400 text-xl">Your cart is empty.</p>
      ) : (
        <div className="max-w-4xl mx-auto">
          {cart.map((item) => (
            <div key={item.id} className="bg-gray-900 rounded-lg p-6 mb-4 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold">{item.name}</h2>
                <p className="text-yellow-400">Rs. {item.price}</p>
              </div>
              <div className="flex items-center gap-4">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="bg-gray-700 px-3 py-1 rounded">-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="bg-gray-700 px-3 py-1 rounded">+</button>
                <button onClick={() => removeFromCart(item.id)} className="bg-red-600 px-3 py-1 rounded">Remove</button>
              </div>
            </div>
          ))}

          <div className="mt-8 text-right">
            <p className="text-2xl font-bold text-yellow-400 mb-4">Total: Rs. {total}</p>
            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-gray-800 text-white px-8 py-3 rounded-full font-bold hover:bg-gray-700 transition"
            >
              {showForm ? "Hide Details" : "Enter Delivery Details"}
            </button>
          </div>

          {/* Customer Info Form */}
          {showForm && (
            <div className="mt-8 bg-gray-900 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-yellow-400 mb-6">Delivery Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-400 text-sm mb-1 block">Full Name *</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                    className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-yellow-400"
                  />
                </div>
                <div>
                  <label className="text-gray-400 text-sm mb-1 block">Email *</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={customerInfo.email}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                    className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-yellow-400"
                  />
                </div>
                <div>
                  <label className="text-gray-400 text-sm mb-1 block">Phone</label>
                  <input
                    type="text"
                    placeholder="07X XXX XXXX"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                    className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-yellow-400"
                  />
                </div>
                <div>
                  <label className="text-gray-400 text-sm mb-1 block">City</label>
                  <input
                    type="text"
                    placeholder="Colombo"
                    value={customerInfo.city}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, city: e.target.value })}
                    className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-yellow-400"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="text-gray-400 text-sm mb-1 block">Address *</label>
                  <textarea
                    placeholder="Your delivery address"
                    value={customerInfo.address}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                    className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-yellow-400 h-24"
                  />
                </div>
              </div>
              <button
                onClick={handleCheckout}
                disabled={loading}
                className="mt-6 w-full bg-yellow-400 text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 disabled:opacity-50 transition"
              >
                {loading ? "Processing..." : "Checkout with Stripe"}
              </button>
            </div>
          )}
        </div>
      )}
    </main>
  );
}