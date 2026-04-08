import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import { Menu, X, Search, ShoppingBag } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import img1 from "../assets/Hamburger1.webp";
import img2 from "../assets/Hamburger2.webp";
import img3 from "../assets/Hamburger3.webp";
import ham4 from "../assets/ham4.png";

const links = ["Home", "Pages", "Events", "Portfolio", "Blogs", "Shop", "Elements"];

const homeDropdown = [
  "Dance Studio",
  "Pole Dance",
  "Hip-Hop Dance",
  "Modern Dance",
  "Contemporary Ballet",
  "Latino Dance",
  "Children’s Ballet",
  "Landing",
];

const pagesDropdown = [
  "About Us",
  "Who We Are",
  "Our Instructors",
  "Meet The Crew",
  "What We Do",
  "Pricing Packages",
  "Contact Us",
  "FAQ",
  "Coming Soon",
  "Error Page"
];

const eventsDropdown = [
  "Events Calendar",
  "Classes Timetable",
  "Event Single",
  "Classes Single",
];

const eventSingleSubmenu = [
  "Swan Lake Ballet",
  "Breakdance Class",
  "Acting For 5th Grade",
  "Ballet Hispanico",
];
const classesSingleSubmenu = [
  "Modern Dance",
  "Yoga Dance",
  "Ballet",
];
const portfolioColumns = [
  {
    title: "STANDARD",
    items: ["Three Columns","Three Columns Wide","Four Columns","Four Columns Wide","Five Columns Wide"],
  },
  {
    title: "GALLERY",
    items: ["Three Columns","Three Columns Wide","Four Columns","Four Columns Wide","Five Columns Wide"],
  },
  {
    title: "MASONRY",
    items: ["Masonry With Space Grid","Masonry With Space Wide","Masonry No Space Grid","Masonry No Space Wide"],
  },
  {
    title: "SINGLE",
    items: ["Small Images","Small Slider","Big Images","Big Slider","Gallery","Masonry"],
  },
];
const blogsMenu = [
  {
    title: "Standard",
    items: ["No Sidebar", "Right Sidebar", "Left Sidebar"],
  },
  {
    title: "Masonry",
    items: ["In Grid", "Full Width"],
  },
  {
    title: "Post Types",
    items: ["Gallery", "Slider","Link","Quote","Video","Audio"],
  },
];
const shopDropdown = [
  "Shop Right Sidebar",
  "Shop Left Sidebar",
  "Single Product",
  "Shop Layouts",
  "Show Pages",
];

const shopLayouts = [
  "Shop Three Columns",
  "Shop Four Columns",
  "Shop Full Width",
];

const shopPages = [
  "My Account",
  "Cart",
  "Checkout",
];
const elementsMegaMenu = [
  {
    title: "CLASSIC",
    items: ["Accordions","Buttons","Google Maps","Contact Form","Image With Text","Banner","Parallax"],
  },
  {
    title: "INFOGRAPHIC",
    items: ["Progress Bar","Pricing Tables","Counters","Countdown","Video Button","Icon With Text","Pie Charts"],
  },
  {
    title: "INTERACTIVE",
    items: ["Split Title","Showcase List Item","Image Gallery","Clients","Carousel","Blog List","Testimonials"],
  },
  {
    title: "TYPOGRAPHY",
    items: ["Headings","Highlights","Columns","Dropcaps","Blockquote","Icon List Item","Custom Font"],
  },
];

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
const [showCart, setShowCart] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [activeLink, setActiveLink] = useState("Home");
  const [subDropdown, setSubDropdown] = useState(null);

  const linkRefs = useRef([]);

  const [underlineStyle, setUnderlineStyle] = useState({
    left: 0,
    width: 0,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const index = links.indexOf(activeLink);
    const el = linkRefs.current[index];

    if (el) {
      setUnderlineStyle({
        left: el.offsetLeft,
        width: el.offsetWidth,
      });
    }
  }, [activeLink]);
  
const navigate = useNavigate();

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md py-3 border-b border-white/10"
          : "bg-transparent py-6"
      }`}
    >
        <div className="max-w-7xl-ml-32 mr-auto px-6 flex items-center justify-between">
    
        
        {/* Logo */}
      <Link to="/" className="flex items-center ml-16">
  <img src={logo} alt="logo" className="h-10 w-auto" />
</Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex relative">
          <ul className="flex items-center gap-8 relative">
            {links.map((link, index) => (
              <li
                key={link}
                ref={(el) => (linkRefs.current[index] = el)}
                className="relative"
                onMouseEnter={() =>
                 (link === "Home" || link === "Pages" || link === "Events" || link === "Portfolio" || link === "Blogs"  || link === "Shop"|| link === "Elements") && setDropdown(link)
                }
                onMouseLeave={() => {
                  setDropdown(null);
                  setSubDropdown(null);
                }}
              >
                <button
                  onClick={() => setActiveLink(link)}
                  className={`text-sm uppercase tracking-widest transition ${
                    activeLink === link
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link}
                </button>


                {/* HOME */}
                {dropdown === "Home" && link === "Home" && (
                  <div className="absolute left-0 top-full pt-3 z-50">
                    <div className="h-3 w-full"></div>
                    <div className="bg-[#1a1a1a] w-52 py-6 px-6 shadow-2xl border border-white/10">
                      {homeDropdown.map((item, i) => (
                        <a
                          key={i}
                          href="#"
                          className={`block py-2 text-sm transition-all duration-300 transform ${
                            item === "Hip-Hop Dance"
                              ? "text-yellow-400 translate-x-2 font-semibold"
                              : "text-white/70 hover:text-yellow-400 hover:translate-x-2"
                          }`}
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* PAGES */}
                {dropdown === "Pages" && link === "Pages" && (
                  <div className="absolute left-0 top-full pt-3 z-50">
                    <div className="h-3 w-full"></div>
                    <div className="bg-[#1a1a1a] w-52 py-6 px-6 shadow-2xl border border-white/10">
                      {pagesDropdown.map((item, i) => (
                        <a
                          key={i}
                          href="#"
                          className="block py-2 text-sm text-white/70 hover:text-yellow-400 hover:translate-x-2 transition-all duration-300"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* EVENTS */}
                {dropdown === "Events" && link === "Events" && (
                  <div className="absolute left-0 top-full pt-3 z-50 flex">
                    
                    {/* LEFT */}
                    <div className="bg-[#1a1a1a] w-52 py-6 px-6 shadow-2xl border border-white/10">
                      {eventsDropdown.map((item, i) => (
                        <div
                          key={i}
                          onMouseEnter={() => setSubDropdown(item)}
                        >
                          <a
  href="#"
  className="flex justify-between items-center py-2 text-sm text-white/70 hover:text-yellow-400"
>
  {item}
  {(item === "Event Single" || item === "Classes Single") && (
    <span>›</span>
  )}
</a>
                        </div>
                      ))}
                    </div>

                    {/* RIGHT */}
                   
{subDropdown === "Event Single" && (
  <div className="bg-[#1a1a1a] w-52 py-6 px-6 ml-1 border border-white/10">
    {eventSingleSubmenu.map((sub, i) => (
      <a
        key={i}
        href="#"
        className="block py-2 text-sm text-white/70 hover:text-yellow-400 hover:translate-x-2 transition-all duration-300"
      >
        {sub}
      </a>
    ))}
  </div>
)}


{subDropdown === "Classes Single" && (
  <div className="absolute top-0 left-full ml-1 bg-[#1a1a1a] w-52 py-6 px-6 border border-white/10 z-50">
    {classesSingleSubmenu.map((sub, i) => (
      <a
        key={i}
        href="#"
        className="block py-2 text-sm text-white/70 hover:text-yellow-400 hover:translate-x-2 transition-all duration-300"
      >
        {sub}
      </a>
    ))}
  </div>
)}
                  </div>
                )}
                {/* PORTFOLIO MEGA MENU */}
{dropdown === "Portfolio" && link === "Portfolio" && (
  <div
    className="absolute left-1/2 -translate-x-[50%] top-full w-screen bg-[#1a1a1a] py-10 px-20 z-50"
    onMouseLeave={() => setDropdown(null)}
  >
    <div className="grid grid-cols-4 gap-16">

      {portfolioColumns.map((col, i) => (
        <div key={i}>
          <h3 className="text-white mb-4 font-semibold">
            {col.title}
          </h3>

          {col.items.map((item, j) => (
            <a
              key={j}
              href="#"
              className="block py-1 text-sm text-white/70 hover:text-yellow-400 transition-all duration-300 hover:translate-x-2"
            >
              {item}
            </a>
          ))}
        </div>
      ))}

    </div>
  </div>
)}
{/* Blogs MEGA MENU */}
{dropdown === "Blogs" && link === "Blogs" && (
  <div className="absolute left-1/2 -translate-x-1/2 top-full z-50 flex">
    
    {/* LEFT SIDE */}
    <div className="bg-[#1a1a1a] w-52 py-6 px-6 border border-white/10 relative">
      {blogsMenu.map((menu, i) => (
        <div
          key={i}
          onMouseEnter={() => setSubDropdown(menu.title)}
        >
          <a
            href="#"
            className="flex justify-between items-center py-2 text-sm text-white/70 hover:text-yellow-400"
          >
            {menu.title}
            <span>›</span>
          </a>
        </div>
      ))}
    </div>

    {/* RIGHT SIDE */}
{blogsMenu.map(
  (menu, i) =>
    subDropdown === menu.title && (
      <div
        key={i}
        className="absolute top-0 left-full ml-1 bg-[#1a1a1a] w-52 py-6 px-6 border border-white/10 z-50"
      >
        {menu.items.map((item, j) => (
          <a
            key={j}
            href="#"
            className="block py-2 text-sm text-white/70 hover:text-yellow-400 hover:translate-x-2 transition-all duration-300"
          >
            {item}
          </a>
        ))}
      </div>
    )
)}
  </div>
)}
{/* SHOP */}
{dropdown === "Shop" && link === "Shop" && (
  <div className="absolute left-0 top-full pt-3 z-50 flex">
    
    {/* LEFT SIDE */}
    <div className="bg-[#1a1a1a] w-52 py-6 px-6 border border-white/10">
      
      {shopDropdown.map((item, i) => (
        <a
          key={i}
          href="#"
          className="block py-2 text-sm text-white/70 hover:text-yellow-400 hover:translate-x-2 transition-all duration-300"
        >
          {item}
        </a>
      ))}

      {/* Shop Layouts */}
      <div
  onMouseEnter={() => setSubDropdown("layouts")}
  className="flex justify-between items-center py-2 text-sm text-white/70 hover:text-yellow-400 cursor-pointer"
>
  Shop Layouts <span>›</span>
</div>

<div
  onMouseEnter={() => setSubDropdown("pages")}
  className="flex justify-between items-center py-2 text-sm text-white/70 hover:text-yellow-400 cursor-pointer"
>
  Show Pages <span>›</span>
</div>
</div>

    {/* RIGHT SIDE */}
    {subDropdown === "layouts" && (
      <div className="bg-[#1a1a1a] w-52 py-2 px-6 ml-1 border border-white/10 h-32">
        {shopLayouts.map((item, i) => (
          <a
            key={i}
            href="#"
            className="block py-2 text-sm text-white/70 hover:text-yellow-400 hover:translate-x-2 transition-all duration-300"
          >
            {item}
          </a>
        ))}
      </div>
    )}



    {subDropdown === "pages" && (
      <div className="bg-[#1a1a1a] w-52 py-2 px-6 ml-1 border border-white/10 h-32">
        {shopPages.map((item, i) => (
          <a
            key={i}
            href="#"
            className="block py-2 text-sm text-white/70 hover:text-yellow-400 hover:translate-x-2 transition-all duration-300"
          >
            {item}
          </a>
        ))}
      </div>
    )}
  </div>
)}

{/* ELEMENTS MEGA MENU */}
{dropdown === "Elements" && link === "Elements" && (
  <div
   className="absolute left-1/2 -translate-x-[68%] top-full w-screen bg-[#1a1a1a] py-10 px-20 z-50"
    onMouseLeave={() => setDropdown(null)}
  >
    <div className="grid grid-cols-4 gap-16">

      {elementsMegaMenu.map((col, i) => (
        <div key={i}>
          <h3 className="text-white mb-4 font-semibold">
            {col.title}
          </h3>

          {col.items.map((item, j) => (
            <a
              key={j}
              href="#"
              className="block py-1 text-sm text-white/70 hover:text-yellow-400 transition-all duration-300 hover:translate-x-2"
            >
              {item}
            </a>
          ))}
        </div>
      ))}

    </div>
  </div>
)}
              </li>
            ))}
          </ul>

          {/* UNDERLINE */}
          <span
  className="absolute bottom-0 h-[2px] !bg-gray-400 transition-all duration-300"
  style={{
    left: underlineStyle.left,
    width: underlineStyle.width,
  }}
/>
        </div>
        {/* RIGHT SIDE ICONS */}
<div className="flex items-center gap-6 text-white ml-8">

 
{/* Cart */}
<div
  className="relative cursor-pointer hover:text-yellow-400 transition-colors duration-300"
  onMouseEnter={() => setShowCart(true)}
onMouseLeave={() => setShowCart(false)}
  onClick={() => navigate("/cart")}
>
  <ShoppingBag size={20} />

  {/* Count */}
  <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs px-1.5 rounded-full">
    0
  </span>

  {/* Hover Popup */}
  {showCart && (
    <div className="absolute right-0 top-full mt-3 w-64 bg-[#1a1a1a] text-white text-sm p-4 shadow-lg border border-white/10 z-50">
      No products in the cart.
    </div>
  )}
</div>

  {/* Search */}
  <button
    onClick={() => setShowSearch(!showSearch)}
    className="hover:text-yellow-400 transition-colors duration-300"
  >
    <Search size={20} />
  </button>

  {/* Hamburger */}
  <button
    className="hover:text-yellow-400 transition-colors duration-300"
    onClick={() => setOpen(!open)}
  >
    <Menu size={22} />
  </button>

</div>

        {/* Mobile */}
        <button
          className="lg:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
   {/* main flex container end */}
   {/* OVERLAY */}
<div
  onClick={() => setOpen(false)}
  className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${
    open ? "opacity-100" : "opacity-0 pointer-events-none"
  }`}
/>

{/* SIDEBAR */}
<div
  className={`fixed top-0 right-0 h-full w-[550px] bg-black z-50 p-8 transform transition-transform duration-500 ${
    open ? "translate-x-0" : "translate-x-full"
  }`}
>

  {/* Close button */}
  <div className="flex justify-end mb-6">
    <button onClick={() => setOpen(false)}>
      <X size={24} className="hover:text-yellow-400" />
    </button>
  </div>

  {/* Title */}
 <img
  src={ham4}
  alt="DANCERZ"
  className="h-10 mx-auto mb-4"
/>
  {/* Description */}
  <p className="text-white/60 text-base mb-6 text-center leading-relaxed">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.<br />
    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis<br />
    Theme natoque penatibus.<br />

  </p>

  {/* Images */}
  <div className="grid grid-cols-3 gap-3 mb-10">
  <img src={img1} className="w-full h-[120px] object-cover" />
  <img src={img2} className="w-full h-[120px] object-cover" />
  <img src={img3} className="w-full h-[120px] object-cover" />
</div>
{/* Latest Posts */}
<div className="mt-14 text-center">
  <h2 className="text-white text-base tracking-[0.05em] uppercase mb-6 font-bold">
  LATEST POSTS
</h2>

  <div className="space-y-10">
    
    <div>
      <p className="text-gray-200 text-sm hover:text-yellow-400 cursor-pointer transition">September 20, 2016</p>
      <p className="text-gray-200 text-lg hover:text-yellow-400 cursor-pointer transition">
        Perfect Imperfect
      </p>
    </div>

    <div>
      <p className="text-gray-200 text-sm hover:text-yellow-400 cursor-pointer transition">September 20, 2016</p>
      <p className="text-gray-200 text-lg hover:text-yellow-400 cursor-pointer transition">
        Wild At Heart
      </p>
    </div>

    <div>
      <p className="text-gray-200 text-sm hover:text-yellow-400 cursor-pointer transition">September 20, 2016</p>
      <p className="text-gray-200 text-lg hover:text-yellow-400 cursor-pointer transition">
        How To Do Classic
      </p>
    </div>

  </div>
</div>
  
</div>

{/* ✅ SEARCH BAR - CORRECT PLACE */}
{showSearch && (
  <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center">

    {/* Close Button */}
    <button
      onClick={() => setShowSearch(false)}
      className="absolute top-6 right-6 text-white text-2xl"
    >
      ✕
    </button>

    {/* Search Box */}
    <div className="w-[60%] max-w-2xl">
      <div className="flex items-center border-b border-white">
        
        <input
          type="text"
          placeholder="SEARCH ON SITE..."
          className="w-full bg-transparent outline-none text-white text-xl py-3 placeholder-white tracking-widest font-bold"
        />

        <Search className="text-white ml-3" size={24} />
      </div>
    </div>

  </div>
)}

    </nav>
    
  );
}   