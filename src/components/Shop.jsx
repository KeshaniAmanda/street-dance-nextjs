import React, { useState, useRef, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ChevronRight, ChevronDown } from "lucide-react";

// IMAGES
import shop1 from "../assets/shop1.jpg";
import shop2 from "../assets/shop2.jpg";
import shop3 from "../assets/shop3.jpg";
import shop4 from "../assets/shop4.jpg";
import shop5 from "../assets/shop5.jpg";
import shop6 from "../assets/shop6.jpg";
import shop7 from "../assets/shop7.jpg";
import shop8 from "../assets/shop8.jpg";
import shop9 from "../assets/shop9.jpg";
import banner from "../assets/prefect3.jpg";

const products = [
  { id: 1, img: shop1, name: "ASSIMETRIC", category: "Gym Clothes", price: "$40.00", oldPrice: "$60.00", sale: true },
  { id: 2, img: shop2, name: "BLACK SHORTS", category: "Performance Wear", price: "$53.00", out: true },
  { id: 3, img: shop3, name: "BLACK TOP AND PANTS", category: "Hip Hop Clothing", price: "$12.00" },
  { id: 4, img: shop4, name: "C26 SNEAKERS", category: "Casual Clothes", price: "$20.00" },
  { id: 5, img: shop5, name: "DAILY WEAR", category: "Hip Hop Clothing", price: "$40.00" },
  { id: 6, img: shop6, name: "E24 ITEM", category: "Casual Clothes", price: "$17.00" },
  { id: 7, img: shop7, name: "F17 SNEAKERS", category: "Dancewear", price: "$14.00" },
  { id: 8, img: shop8, name: "GRAY WEAR", category: "Casual Clothes", price: "$33.00" },
  { id: 9, img: shop9, name: "LEGGINGS", category: "Casual Clothes", price: "$18.00", oldPrice: "$25.00" },
];

const Shop = () => {

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Default sorting");
  const dropdownRef = useRef();

  const options = [
    "Default sorting",
    "Sort by popularity",
    "Sort by average rating",
    "Sort by latest",
    "Sort by price: low to high",
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-white min-h-screen">

      {/* HEADER */}
      <div className="bg-[#19c2a0] h-[220px] sm:h-[260px] flex flex-col justify-center items-center text-white pt-16 sm:pt-20">
        <h1 className="text-2xl sm:text-3xl md:text-[36px] tracking-[4px] sm:tracking-[6px] font-semibold">
          SHOP
        </h1>
        <div className="mt-3 text-xs sm:text-sm flex gap-2">
          <Link to="/" className="hover:text-black">Home</Link>
          <span>/</span>
          <span>Shop</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-4 gap-8 sm:gap-10">

        {/* PRODUCTS */}
        <div className="lg:col-span-3">

          {/* TOP BAR */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 sm:mb-10">
            <p className="text-gray-500 text-sm">Showing 1–9 of 12 results</p>

            <div className="relative w-full sm:w-64" ref={dropdownRef}>
              <div
                onClick={() => setOpen(!open)}
                className="border px-4 py-2 text-sm text-gray-600 cursor-pointer flex justify-between items-center"
              >
                {selected}
                <ChevronDown size={16} />
              </div>

              {open && (
                <div className="absolute w-full bg-white border mt-1 shadow-lg z-10 max-h-60 overflow-y-auto">
                  {options.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        setSelected(item);
                        setOpen(false);
                      }}
                      className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 
                      ${selected === item ? "text-[#19c2a0] font-medium" : "text-gray-600"}`}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {products.map((item) => (
              <div key={item.id} className="group relative">

                {item.sale && (
                  <span className="absolute top-3 left-3 bg-[#19c2a0] text-white text-xs px-3 py-1">
                    SALE
                  </span>
                )}

                {item.out && (
                  <span className="absolute top-3 right-3 bg-black text-white text-xs px-3 py-1">
                    OUT OF STOCK
                  </span>
                )}

                <div className="relative group overflow-hidden">
                  <Link to={`/product/${item.id}`}>
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-[260px] sm:h-[320px] lg:h-[360px] object-cover transition duration-500 group-hover:scale-105"
                    />
                  </Link>

                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
                    {item.out ? (
                      <Link to={`/product/${item.id}`}>
                        <button className="px-4 py-2 text-xs sm:text-sm tracking-widest font-bold text-white">
                          READ MORE
                        </button>
                      </Link>
                    ) : (
                      <button className="px-4 py-2 text-xs sm:text-sm tracking-widest font-bold text-white">
                        ADD TO CART
                      </button>
                    )}
                  </div>
                </div>

                <div className="text-center text-black">
                  <Link to={`/product/${item.id}`}>
                    <h3 className="mt-4 sm:mt-5 text-xs sm:text-sm font-semibold tracking-widest uppercase hover:text-[#19c2a0]">
                      {item.name}
                    </h3>
                  </Link>

                  <div className="flex justify-center text-[#19c2a0] mt-2 gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} size={12} />
                    ))}
                  </div>

                  <Link to={`/category/${item.category}`}>
                    <p className="text-gray-400 text-xs sm:text-sm mt-1 hover:text-[#19c2a0]">
                      {item.category}
                    </p>
                  </Link>

                  <div className="mt-1 text-[#19c2a0] font-semibold text-sm flex justify-center gap-2">
                    {item.oldPrice && (
                      <span className="line-through text-gray-400">
                        {item.oldPrice}
                      </span>
                    )}
                    <span>{item.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* PAGINATION */}
          <div className="flex justify-center items-center gap-4 sm:gap-6 mt-10 sm:mt-14 text-gray-400">
            <span className="cursor-pointer hover:text-[#19c2a0]">1</span>
            <span className="cursor-pointer hover:text-[#19c2a0]">2</span>
            <ChevronRight size={18} className="cursor-pointer hover:text-[#19c2a0]" />
          </div>

        </div>

        {/* SIDEBAR */}
        <div className="space-y-8 sm:space-y-10">

          <div>
            <h3 className="font-semibold mb-4 text-black">FILTER BY PRICE</h3>
            <input type="range" className="w-full accent-[#19c2a0]" />
            <div className="flex justify-between text-sm mt-2 text-gray-500">
              <span>$10</span>
              <span>$60</span>
            </div>
            <button className="mt-3 bg-[#19c2a0] text-white px-5 py-2 text-sm w-full sm:w-auto">
              FILTER
            </button>
          </div>

          <input
            type="text"
            placeholder="Search..."
            className="w-full border px-4 py-2 text-sm"
          />

          <div>
            <h3 className="font-semibold mb-4 text-black">CATEGORIES</h3>
            <ul className="space-y-3 text-gray-600 text-sm">
              {[
                "Casual Clothes",
                "Dancewear",
                "Gym Clothes",
                "Hip Hop Clothing",
                "Performance Wear",
                "Uncategorized",
              ].map((cat, index) => (
                <li key={index}>
                  <Link to={`/category/${cat.toLowerCase().replace(/\s+/g, "-")}`}>
                    <span className="hover:text-[#19c2a0]">
                      {cat}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Link to="/shop">
            <img
              src={banner}
              alt="banner"
              className="w-full h-[160px] sm:h-[200px] object-cover"
            />
          </Link>

          <div>
            <h3 className="font-semibold mb-4 tracking-wide text-black">
              RELATED PRODUCTS
            </h3>

            <div className="space-y-4">
              {[products[3], products[0], products[4]].map((item) => (
                <div key={item.id} className="flex gap-3 items-center">
                  <Link to={`/product/${item.id}`}>
                    <img
                      src={item.img}
                      className="w-14 h-14 sm:w-16 sm:h-16 object-cover"
                      alt={item.name}
                    />
                  </Link>

                  <div>
                    <Link to={`/product/${item.id}`}>
                      <p className="text-sm text-black hover:text-[#19c2a0]">
                        {item.name}
                      </p>
                    </Link>
                    <div className="flex text-[#19c2a0] gap-1 text-xs">
                      {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                    </div>
                    <p className="text-sm text-gray-600">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Shop;