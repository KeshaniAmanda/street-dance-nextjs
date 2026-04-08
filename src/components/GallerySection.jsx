import React, { useState } from "react";
import { X } from "lucide-react";

const galleryItems = [
  { label: "Breaking Battle", tag: "Competition", color: "#E8FF00", size: "col-span-2 row-span-2" },
  { label: "Cypher Night", tag: "Event", color: "#FF4D4D", size: "" },
  { label: "Krump Session", tag: "Class", color: "#4DFFB4", size: "" },
  { label: "Freestyle Lab", tag: "Workshop", color: "#B44DFF", size: "" },
  { label: "Showcase 2024", tag: "Performance", color: "#FF9D4D", size: "col-span-2" },
  { label: "Summer Intensive", tag: "Event", color: "#4DB8FF", size: "" },
  { label: "Locking Class", tag: "Class", color: "#E8FF00", size: "" },
];

function GalleryCard({ item, onClick }) {
  return (
    <div
      className={`${item.size} relative aspect-square bg-mid overflow-hidden group cursor-pointer`}
      onClick={() => onClick(item)}
    >
      <div
        className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500"
        style={{ background: `linear-gradient(135deg, ${item.color}, transparent)` }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-display text-5xl text-white/5 select-none">{item.tag}</span>
      </div>
      <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/30 transition-all duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <div
          className="text-xs px-2 py-1 inline-block font-bold uppercase tracking-widest mb-1"
          style={{ background: item.color, color: "#0a0a0a" }}
        >
          {item.tag}
        </div>
        <div className="text-white font-display text-lg">{item.label}</div>
      </div>
    </div>
  );
}

export default function GallerySection() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="gallery" className="py-32 px-6 bg-mid">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 reveal">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-accent" />
              <span className="text-accent text-xs uppercase tracking-[0.4em]">Gallery</span>
            </div>
            <h2 className="font-display text-5xl lg:text-6xl text-white leading-none">
              CAPTURED<br />
              <span style={{ WebkitTextStroke: "2px #E8FF00", color: "transparent" }}>MOMENTS</span>
            </h2>
          </div>
          <button className="mt-4 lg:mt-0 border border-accent text-accent hover:bg-accent hover:text-dark transition-all duration-300 px-6 py-2.5 text-xs uppercase tracking-widest font-bold">
            View All
          </button>
        </div>

        <div className="reveal grid grid-cols-3 grid-rows-3 gap-3" style={{ minHeight: "600px" }}>
          {galleryItems.map((item, i) => (
            <GalleryCard key={i} item={item} onClick={setSelected} />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] bg-dark/95 flex items-center justify-center p-6"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-accent transition-colors"
            onClick={() => setSelected(null)}
          >
            <X size={32} />
          </button>
          <div className="max-w-2xl w-full">
            <div
              className="aspect-video flex items-center justify-center rounded-sm"
              style={{ background: `linear-gradient(135deg, ${selected.color}33, #161616)` }}
            >
              <div className="text-center">
                <div
                  className="text-xs px-3 py-1.5 inline-block font-bold uppercase tracking-widest mb-4"
                  style={{ background: selected.color, color: "#0a0a0a" }}
                >
                  {selected.tag}
                </div>
                <div className="font-display text-5xl text-white">{selected.label}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
