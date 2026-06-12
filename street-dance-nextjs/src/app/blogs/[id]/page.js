"use client";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "next/navigation";

export default function BlogDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const docRef = doc(db, "blogs", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setPost({ id: docSnap.id, ...docSnap.data() });
        }
      } catch (error) {
        console.log("Error:", error);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchPost();
  }, [id]);

  if (loading) return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <p className="text-2xl">Loading...</p>
    </div>
  );

  if (!post) return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <p className="text-2xl">Post not found.</p>
    </div>
  );

  return (
    <main className="min-h-screen bg-black text-white p-8 max-w-3xl mx-auto">
      <a href="/blogs" className="text-yellow-400 hover:underline mb-6 block">← Back to Blogs</a>
      {post.image && (
        <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-lg mb-6" />
      )}
      <h1 className="text-4xl font-bold text-yellow-400 mb-4">{post.title}</h1>
      <p className="text-gray-400 mb-8">{post.author} · {post.date}</p>
      <p className="text-gray-300 text-lg leading-relaxed">{post.content}</p>
    </main>
  );
}