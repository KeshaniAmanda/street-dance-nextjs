import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

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

// 🔥 PRODUCTS
const products = [
  {
    id: 1,
    img: shop1,
    name: "ASSIMETRIC",
    category: "Gym Clothes",
    price: "$40.00",
    oldPrice: "$60.00",
    sale: true,
  },
  {
    id: 2,
    img: shop2,
    name: "BLACK SHORTS",
    category: "Performance Wear",
    price: "$53.00",
    out: true,
  },
  {
    id: 3,
    img: shop3,
    name: "BLACK TOP AND PANTS",
    category: "Hip Hop Clothing",
    price: "$12.00",
  },
  {
    id: 4,
    img: shop4,
    name: "C26 SNEAKERS",
    category: "Casual Clothes",
    price: "$20.00",
  },
  {
    id: 5,
    img: shop5,
    name: "DAILY WEAR",
    category: "Hip Hop Clothing",
    price: "$40.00",
  },
  {
    id: 6,
    img: shop6,
    name: "E24 ITEM",
    category: "Casual Clothes",
    price: "$17.00",
  },
  {
    id: 7,
    img: shop7,
    name: "F17 SNEAKERS",
    category: "Dancewear",
    price: "$14.00",
  },
  {
    id: 8,
    img: shop8,
    name: "GRAY WEAR",
    category: "Casual Clothes",
    price: "$33.00",
  },
  {
    id: 9,
    img: shop9,
    name: "LEGGINGS",
    category: "Casual Clothes",
    price: "$18.00",
    oldPrice: "$25.00",
  },
];

const Shop = () => {
  return (
    <div className="bg-white min-h-screen">

      {/* HEADER */}
      <div className="bg-[#19c2a0] h-[260px] flex flex-col justify-center items-center text-white pt-24">
        <h1 className="text-[36px] tracking-widest font-semibold">
          SHOP
        </h1>
        <div className="mt-3 text-sm text-white flex justify-center gap-2">
                  <Link to="/" className="hover:text-black">Home</Link>
                  <span>/</span>
                  <span>Shop</span>
      </div></div>

      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-4 gap-10">

        {/* PRODUCTS */}
        <div className="lg:col-span-3">

          {/* TOP BAR */}
          <div className="flex justify-between items-center mb-10">
            <p className="text-gray-500 text-sm">
              Showing 1–9 of 12 results
            </p>

            <select className="border px-4 py-2 text-sm text-gray-600">
              <option>Default sorting</option>
              <option>Sort by popularity</option>
              <option>Sort by average rating</option>
              <option>Sort by latest</option>
              <option>Sort by price: low to high</option>
            </select>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {products.map((item) => (
              <div key={item.id} className="group relative">

                {/* SALE */}
                {item.sale && (
                  <span className="absolute top-3 left-3 bg-[#19c2a0] text-white text-xs px-3 py-1">
                    SALE
                  </span>
                )}

                {/* OUT OF STOCK */}
                {item.out && (
                  <span className="absolute top-3 right-3 bg-gray-800 text-white text-xs px-3 py-1">
                    OUT OF STOCK
                  </span>
                )}

                {/* IMAGE */}
                <div className="overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-[340px] object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* TITLE */}
                <h3 className="mt-5 text-sm font-semibold tracking-widest uppercase">
                  {item.name}
                </h3>

                {/* ⭐ STARS */}
                <div className="flex text-[#19c2a0] mt-2 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} size={12} />
                  ))}
                </div>

                {/* CATEGORY */}
                <p className="text-gray-400 text-sm mt-1">
                  {item.category}
                </p>

                {/* PRICE */}
                <div className="mt-1 text-[#19c2a0] font-semibold text-sm flex gap-2">
                  {item.oldPrice && (
                    <span className="line-through text-gray-400">
                      {item.oldPrice}
                    </span>
                  )}
                  <span>{item.price}</span>
                </div>

              </div>
            ))}

          </div>

          {/* 🔥 PAGINATION */}
          <div className="flex justify-center items-center gap-6 mt-14 text-gray-400">

            <span className="cursor-pointer hover:text-[#19c2a0] transition">
              1
            </span>

            <span className="cursor-pointer hover:text-[#19c2a0] transition">
              2
            </span>

            <ChevronRight
              size={18}
              className="cursor-pointer hover:text-[#19c2a0] transition"
            />

          </div>

        </div>

        {/* SIDEBAR */}
        <div>

          {/* PRICE FILTER */}
          <div className="mb-12">
            <h3 className="font-semibold mb-4 tracking-wide">
              FILTER BY PRICE
            </h3>

            <input type="range" className="w-full accent-[#19c2a0]" />

            <div className="flex justify-between text-sm mt-2 text-gray-500">
              <span>$10</span>
              <span>$60</span>
            </div>

            <button className="mt-3 bg-[#19c2a0] text-white px-5 py-2 text-sm">
              FILTER
            </button>
          </div>

          {/* SEARCH */}
          <div className="mb-12">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border px-4 py-2 text-sm"
            />
          </div>

          {/* CATEGORIES */}
          <div>
            <h3 className="font-semibold mb-4 tracking-wide">
              CATEGORIES
            </h3>

            <ul className="space-y-3 text-gray-600 text-sm">
              <li>Casual Clothes</li>
              <li>Dancewear</li>
              <li>Gym Clothes</li>
              <li>Hip Hop Clothing</li>
              <li>Performance Wear</li>
              <li>Uncategorized</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Shop;