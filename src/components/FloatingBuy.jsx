import { useState } from "react";
import { ShoppingCart, X } from "lucide-react";

// ✅ IMPORT IMAGES
import q1 from "../assets/q1.png";
import q2 from "../assets/q2.png";
import q3 from "../assets/q3.png";

export default function FloatingBuy() {
  const [open, setOpen] = useState(false);

  const handleBuyNow = () => {
    window.open(
      "https://themeforest.net/checkout/114155081/create_account",
      "_blank"
    );
  };

  const items = [
    {
      name: "CoreHit",
      img: q1,
      link: "https://qodeinteractive.com/wordpress-theme/corehit-gym-fitness-wordpress-theme/",
    },
    {
      name: "Xrival",
      img: q2,
      link: "https://qodeinteractive.com/wordpress-theme/xrival-extreme-sports-and-adventure-wordpress-theme/",
    },
    {
      name: "GoalKick",
      img: q3,
      link: "https://qodeinteractive.com/wordpress-theme/goalkick-soccer-and-football-club-wordpress-theme/",
    },
  ];

  return (
    <>
      {/* FLOATING BUTTONS */}
      <div
        className={`fixed top-[65%] -translate-y-1/2 z-50 flex flex-col items-end transition-all duration-300 ${
          open ? "right-[232px]" : "right-0"
        }`}
      >
        {/* RELATED BUTTON */}
        <div
          onClick={() => setOpen(true)}
          className="bg-[#ef2d56] text-white flex items-center gap-2 px-3 py-3 shadow-lg cursor-pointer"
        >
          <div className="w-5 h-5 bg-white text-[#ef2d56] flex items-center justify-center rounded-full font-bold text-xs">
            Q
          </div>
          <span className="text-xs font-semibold tracking-wide">RELATED</span>
        </div>

        {/* BUY NOW BUTTON */}
        <div
          onClick={handleBuyNow}
          className="bg-white text-black flex items-center gap-2 px-3 py-3 mt-2 shadow-lg cursor-pointer hover:bg-gray-100 transition"
        >
          <ShoppingCart size={14} className="text-[#ef2d56]" />
          <span className="text-xs font-semibold">BUY NOW</span>
        </div>
      </div>

      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/30 z-40"
        />
      )}

      {/* RIGHT PANEL */}
      <div
        className={`fixed top-0 right-0 h-full w-[300px] bg-white z-50 shadow-2xl transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between p-5 bg-white border-b">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#ef2d56] text-white flex items-center justify-center rounded-full text-sm font-bold">
              Q
            </div>
            <h2 className="font-semi text-black text-lg ">
              Qode Interactive
            </h2>
          </div>

          <X
            size={18}
            onClick={() => setOpen(false)}
            className="cursor-pointer hover:text-red-500"
          />
        </div>

        {/* CONTENT */}
        <div className="p-5 space-y-6 overflow-y-auto h-[calc(100%-80px)]">
          <h3 className="text-xs font-semi tracking-[2px] text-black">
            RELATED THEMES
          </h3>

          {items.map((item, i) => (
            <div
              key={i}
              onClick={() => window.open(item.link, "_blank")}
              className="space-y-2 group cursor-pointer"
            >
              {/* IMAGE + OVERLAY */}
              <div className="relative overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-[220px] h-[120px] object-cover group-hover:scale-105 transition duration-300"
                />

                
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-semi text-black">{item.name}</p>
                  <p className="text-xs text-gray-400 tracking-wide">
                    SPORT & FITNESS
                  </p>
                </div>
                <p className="text-sm font-semi text-black">$89</p>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM BUTTON */}
        <div
          onClick={() =>
            window.open("https://qodeinteractive.com/", "_blank")
          }
          className="absolute bottom-0 left-0 w-full bg-[#ef2d56] text-white text-center py-4 text-xs font-semibold tracking-wide cursor-pointer hover:opacity-90"
        >
          VIEW ALL QODE THEMES ↗
        </div>
      </div>
    </>
  );
}