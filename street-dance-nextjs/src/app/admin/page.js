"use client";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs, addDoc, deleteDoc, doc, getDoc, setDoc } from "firebase/firestore";

export default function Admin() {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [uploading, setUploading] = useState(false);
  const [activeTab, setActiveTab] = useState("products");

  // Site Settings
  const [siteName, setSiteName] = useState("");
  const [siteTagline, setSiteTagline] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [settingsSaving, setSettingsSaving] = useState(false);

  useEffect(() => {
    fetchProducts();
    fetchOrders();
    fetchSettings();
  }, []);

  const fetchProducts = async () => {
    const snapshot = await getDocs(collection(db, "products"));
    setProducts(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
  };

  const fetchOrders = async () => {
    const snapshot = await getDocs(collection(db, "orders"));
    setOrders(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
  };

  const fetchSettings = async () => {
    try {
      const docSnap = await getDoc(doc(db, "settings", "site"));
      if (docSnap.exists()) {
        const data = docSnap.data();
        setSiteName(data.siteName || "");
        setSiteTagline(data.siteTagline || "");
        setContactEmail(data.contactEmail || "");
        setContactPhone(data.contactPhone || "");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const saveSettings = async () => {
    setSettingsSaving(true);
    try {
      await setDoc(doc(db, "settings", "site"), {
        siteName, siteTagline, contactEmail, contactPhone,
        updatedAt: new Date(),
      });
      alert("Settings saved!");
    } catch (error) {
      alert("Error: " + error.message);
    } finally {
      setSettingsSaving(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const uploadImage = async () => {
    if (!imageFile) return "";
    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET);
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      { method: "POST", body: formData }
    );
    const data = await res.json();
    return data.secure_url;
  };

  const addProduct = async () => {
    if (!name || !price) return alert("Name and price required!");
    setUploading(true);
    try {
      const imageUrl = await uploadImage();
      await addDoc(collection(db, "products"), {
        name, description, price: Number(price), category, image: imageUrl,
      });
      setName(""); setDescription(""); setPrice(""); setCategory("");
      setImageFile(null); setImagePreview("");
      fetchProducts();
      alert("Product added!");
    } catch (error) {
      alert("Error: " + error.message);
    } finally {
      setUploading(false);
    }
  };

  const deleteProduct = async (id) => {
    await deleteDoc(doc(db, "products", id));
    fetchProducts();
  };

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold text-yellow-400 mb-8">Admin Panel</h1>

      <div className="flex gap-4 mb-8 flex-wrap">
        <button onClick={() => setActiveTab("products")}
          className={`px-6 py-2 rounded-full font-bold ${activeTab === "products" ? "bg-yellow-400 text-black" : "bg-gray-700"}`}>
          Products
        </button>
        <button onClick={() => setActiveTab("orders")}
          className={`px-6 py-2 rounded-full font-bold ${activeTab === "orders" ? "bg-yellow-400 text-black" : "bg-gray-700"}`}>
          Orders
        </button>
        <button onClick={() => setActiveTab("settings")}
          className={`px-6 py-2 rounded-full font-bold ${activeTab === "settings" ? "bg-yellow-400 text-black" : "bg-gray-700"}`}>
          Site Settings
        </button>
      </div>

      {activeTab === "products" && (
        <div>
          <div className="bg-gray-900 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Add Product</h2>
            <div className="grid grid-cols-2 gap-4">
              <input value={name} onChange={(e) => setName(e.target.value)}
                placeholder="Product Name" className="bg-gray-800 p-3 rounded text-white" />
              <input value={price} onChange={(e) => setPrice(e.target.value)}
                placeholder="Price" type="number" className="bg-gray-800 p-3 rounded text-white" />
              <input value={category} onChange={(e) => setCategory(e.target.value)}
                placeholder="Category" className="bg-gray-800 p-3 rounded text-white" />
              <input value={description} onChange={(e) => setDescription(e.target.value)}
                placeholder="Description" className="bg-gray-800 p-3 rounded text-white" />
            </div>
            <div className="mt-4">
              <label className="text-gray-400 text-sm mb-2 block">Product Image</label>
              <input type="file" accept="image/*" onChange={handleImageChange}
                className="bg-gray-800 p-3 rounded text-white w-full" />
              {imagePreview && (
                <img src={imagePreview} alt="Preview" className="mt-3 h-32 w-32 object-cover rounded-lg" />
              )}
            </div>
            <button onClick={addProduct} disabled={uploading}
              className="mt-4 bg-yellow-400 text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-300 disabled:opacity-50">
              {uploading ? "Uploading..." : "Add Product"}
            </button>
          </div>

          <h2 className="text-2xl font-bold mb-4">All Products</h2>
          {products.map((product) => (
            <div key={product.id} className="bg-gray-900 rounded-lg p-4 mb-3 flex justify-between items-center">
              <div className="flex items-center gap-4">
                {product.image ? (
                  <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-lg" />
                ) : (
                  <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500 text-xs">No Image</p>
                  </div>
                )}
                <div>
                  <h3 className="font-bold">{product.name}</h3>
                  <p className="text-yellow-400">Rs. {product.price}</p>
                  <p className="text-gray-400 text-sm">{product.category}</p>
                </div>
              </div>
              <button onClick={() => deleteProduct(product.id)}
                className="bg-red-600 px-4 py-2 rounded font-bold hover:bg-red-500">
                Delete
              </button>
            </div>
          ))}
        </div>
      )}

      {activeTab === "orders" && (
        <div>
          <h2 className="text-2xl font-bold mb-4">All Orders</h2>
          {orders.length === 0 ? (
            <p className="text-gray-400">No orders yet.</p>
          ) : (
            orders.map((order) => (
              <div key={order.id} className="bg-gray-900 rounded-lg p-4 mb-3">
                <p className="text-yellow-400 font-bold">Rs. {order.amount}</p>
                <p className="text-gray-400 text-sm">Status: {order.paymentStatus}</p>
                <p className="text-gray-400 text-sm">Items: {order.items?.length}</p>
                {order.customerInfo && (
                  <div className="mt-2 border-t border-gray-700 pt-2">
                    <p className="text-gray-300 text-sm">Customer: {order.customerInfo.name}</p>
                    <p className="text-gray-300 text-sm">Email: {order.customerInfo.email}</p>
                    <p className="text-gray-300 text-sm">Address: {order.customerInfo.address}</p>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      )}

      {activeTab === "settings" && (
        <div className="bg-gray-900 rounded-lg p-8 max-w-2xl">
          <h2 className="text-2xl font-bold text-yellow-400 mb-6">Site Settings</h2>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="text-gray-400 text-sm mb-1 block">Site Name</label>
              <input value={siteName} onChange={(e) => setSiteName(e.target.value)}
                placeholder="Street Dance" className="bg-gray-800 p-3 rounded text-white w-full" />
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-1 block">Tagline</label>
              <input value={siteTagline} onChange={(e) => setSiteTagline(e.target.value)}
                placeholder="Move Your Body, Free Your Soul" className="bg-gray-800 p-3 rounded text-white w-full" />
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-1 block">Contact Email</label>
              <input value={contactEmail} onChange={(e) => setContactEmail(e.target.value)}
                placeholder="info@streetdance.lk" className="bg-gray-800 p-3 rounded text-white w-full" />
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-1 block">Contact Phone</label>
              <input value={contactPhone} onChange={(e) => setContactPhone(e.target.value)}
                placeholder="07X XXX XXXX" className="bg-gray-800 p-3 rounded text-white w-full" />
            </div>
          </div>
          <button onClick={saveSettings} disabled={settingsSaving}
            className="mt-6 bg-yellow-400 text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-300 disabled:opacity-50">
            {settingsSaving ? "Saving..." : "Save Settings"}
          </button>
        </div>
      )}
    </main>
  );
}