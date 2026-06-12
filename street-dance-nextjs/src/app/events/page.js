"use client";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "events"));
        const items = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setEvents(items);
      } catch (error) {
        console.log("Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  if (loading) return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <p className="text-2xl">Loading...</p>
    </div>
  );

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold text-yellow-400 mb-8">Events</h1>
      {events.length === 0 ? (
        <p className="text-gray-400 text-xl">No events yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event) => (
            <div key={event.id} className="bg-gray-900 rounded-lg p-6">
              <h2 className="text-xl font-bold text-white mb-2">{event.title}</h2>
              <p className="text-yellow-400 mb-2">{event.date}</p>
              <p className="text-gray-400 mb-2">{event.location}</p>
              <p className="text-gray-300">{event.description}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}