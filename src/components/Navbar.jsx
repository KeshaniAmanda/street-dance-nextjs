import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import logo1 from "../assets/logo_white.png";
import logo2 from "../assets/logo.png";
import logo3 from "../assets/logo (1).png";
import logo4 from "../assets/lg.png";
import { Menu, X, Search, ShoppingBag } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import img1 from "../assets/Hamburger1.webp";
import img2 from "../assets/Hamburger2.webp";
import img3 from "../assets/Hamburger3.webp";
import ham4 from "../assets/ham4.png";

const links = ["Home", "Pages", "Events", "Portfolio", "Blogs", "Shop", "Elements"];

const homeDropdown = [
  { name: "Dance Studio", path: "/dance-studio" },
  { name: "Pole Dance", path: "/pole-dance" },
  { name: "Hip-Hop Dance", path: "/" },
  { name: "Modern Dance", path: "/modern-dance" },
  { name: "Contemporary Ballet", path: "/ballet" },
  { name: "Latino Dance", path: "/latino" },
  { name: "Children’s Ballet", path: "/kids-ballet" },
  { name: "Landing", path: "/landing" },
];
const pagesDropdown = [
  { name: "About Us", path: "/about" },
  { name: "Who We Are", path: "/who-we-are" },
  { name: "Our Instructors", path: "/instructors" },
  { name: "Meet The Crew", path: "/crew" },
  { name: "What We Do", path: "/what-we-do" },
  { name: "Pricing Packages", path: "/pricing" },
  { name: "Contact Us", path: "/contact" },
  { name: "FAQ", path: "/faq" },
  { name: "Coming Soon", path: "/coming-soon" },
  { name: "Error Page", path: "/error" },
];

const eventsDropdown = [
  { name: "Events Calendar", path: "/events-calendar" },
  { name: "Classes Timetable", path: "/timetable" },
  { name: "Event Single", submenu: "eventSingle" },
  { name: "Classes Single", submenu: "classesSingle" },
];

const eventSingleSubmenu = [
  { name: "Swan Lake Ballet", path: "/swan-lake" },
  { name: "Breakdance Class", path: "/breakdance" },
  { name: "Acting For 5th Grade", path: "/acting" },
  { name: "Ballet Hispanico", path: "/hispanico" },
];

const classesSingleSubmenu = [
  { name: "Modern Dance", path: "/modern" },
  { name: "Yoga Dance", path: "/yoga" },
  { name: "Ballet", path: "/ballet-class" },
];
const portfolioColumns = [
  {
    title: "STANDARD",
    items: [
      { name: "Three Columns", path: "/portfolio/three-columns" },
      { name: "Three Columns Wide", path: "/portfolio/three-wide" },
      { name: "Four Columns", path: "/portfolio/four-columns" },
      { name: "Four Columns Wide", path: "/portfolio/four-wide" },
      { name: "Five Columns Wide", path: "/portfolio/five-wide" },
    ],
  },
  {
    title: "GALLERY",
    items: [
      { name: "Three Columns", path: "/gallery/three" },
      { name: "Three Columns Wide", path: "/gallery/three-wide" },
      { name: "Four Columns", path: "/gallery/four" },
      { name: "Four Columns Wide", path: "/gallery/four-wide" },
      { name: "Five Columns Wide", path: "/gallery/five-wide" },
    ],
  },
  {
    title: "MASONRY",
    items: [
      { name: "Masonry With Space Grid", path: "/masonry/grid" },
      { name: "Masonry With Space Wide", path: "/masonry/wide" },
      { name: "Masonry No Space Grid", path: "/masonry/no-grid" },
      { name: "Masonry No Space Wide", path: "/masonry/no-wide" },
    ],
  },
  {
    title: "SINGLE",
    items: [
      { name: "Small Images", path: "/single/small-images" },
      { name: "Small Slider", path: "/single/small-slider" },
      { name: "Big Images", path: "/single/big-images" },
      { name: "Big Slider", path: "/single/big-slider" },
      { name: "Gallery", path: "/single/gallery" },
      { name: "Masonry", path: "/single/masonry" },
    ],
  },
];
const blogsMenu = [
  {
    title: "Standard",
    items: [
      { name: "No Sidebar", path: "/blog/no-sidebar" },
      { name: "Right Sidebar", path: "/blog/right-sidebar" },
      { name: "Left Sidebar", path: "/blog/left-sidebar" },
    ],
  },
  {
    title: "Masonry",
    items: [
      { name: "In Grid", path: "/blog/grid" },
      { name: "Full Width", path: "/blog/full" },
    ],
  },
  {
    title: "Post Types",
    items: [
      { name: "Gallery", path: "/blog/gallery" },
      { name: "Slider", path: "/blog/slider" },
      { name: "Link", path: "/blog/link" },
      { name: "Quote", path: "/blog/quote" },
      { name: "Video", path: "/blog/video" },
      { name: "Audio", path: "/blog/audio" },
    ],
  },
];
const shopDropdown = [
  { name: "Shop Right Sidebar", path: "/shop/right-sidebar" },
  { name: "Shop Left Sidebar", path: "/shop/left-sidebar" },
  { name: "Single Product", path: "/shop/product" },
];

const shopLayouts = [
  { name: "Shop Three Columns", path: "/shop/3-columns" },
  { name: "Shop Four Columns", path: "/shop/4-columns" },
  { name: "Shop Full Width", path: "/shop/full" },
];

const shopPages = [
  { name: "My Account", path: "/account" },
  { name: "Cart", path: "/cart" },
  { name: "Checkout", path: "/checkout" },
];
const elementsMegaMenu = [
  {
    title: "CLASSIC",
    items: [
      { name: "Accordions", path: "/elements/accordions" },
      { name: "Buttons", path: "/elements/buttons" },
      { name: "Google Maps", path: "/elements/maps" },
      { name: "Contact Form", path: "/elements/contact" },
      { name: "Image With Text", path: "/elements/image-text" },
      { name: "Banner", path: "/elements/banner" },
      { name: "Parallax", path: "/elements/parallax" },
    ],
  },
  {
    title: "INFOGRAPHIC",
    items: [
      { name: "Progress Bar", path: "/elements/progress" },
      { name: "Pricing Tables", path: "/elements/pricing" },
      { name: "Counters", path: "/elements/counters" },
      { name: "Countdown", path: "/elements/countdown" },
      { name: "Video Button", path: "/elements/video" },
      { name: "Icon With Text", path: "/elements/icon-text" },
      { name: "Pie Charts", path: "/elements/pie" },
    ],
  },
  {
    title: "INTERACTIVE",
    items: [
      { name: "Split Title", path: "/elements/split-title" },
      { name: "Showcase List Item", path: "/elements/showcase" },
      { name: "Image Gallery", path: "/elements/gallery" },
      { name: "Clients", path: "/elements/clients" },
      { name: "Carousel", path: "/elements/carousel" },
      { name: "Blog List", path: "/elements/blog-list" },
      { name: "Testimonials", path: "/elements/testimonials" },
    ],
  },
  {
    title: "TYPOGRAPHY",
    items: [
      { name: "Headings", path: "/elements/headings" },
      { name: "Highlights", path: "/elements/highlights" },
      { name: "Columns", path: "/elements/columns" },
      { name: "Dropcaps", path: "/elements/dropcaps" },
      { name: "Blockquote", path: "/elements/blockquote" },
      { name: "Icon List Item", path: "/elements/icon-list" },
      { name: "Custom Font", path: "/elements/font" },
    ],
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

const location = useLocation();
const isHomeSubPage =
  location.pathname.startsWith("/dance-studio") ||
  location.pathname.startsWith("/pole-dance") ||
  location.pathname.startsWith("/hiphop") ||
  location.pathname.startsWith("/modern-dance") ||
  location.pathname.startsWith("/ballet") ||
  location.pathname.startsWith("/latino") ||
  location.pathname.startsWith("/kids-ballet") ||
  location.pathname.startsWith("/landing") ;
  const isPagesPage =
  location.pathname.startsWith("/about") ||
  location.pathname.startsWith("/who-we-are") ||
  location.pathname.startsWith("/instructors") ||
  location.pathname.startsWith("/crew") ||
  location.pathname.startsWith("/what-we-do") ||
  location.pathname.startsWith("/pricing") ||
  location.pathname.startsWith("/contact") ||
  location.pathname.startsWith("/faq") ||
  location.pathname.startsWith("/coming-soon") ||
  location.pathname.startsWith("/events")||
  location.pathname.startsWith("/error");
  const isHomePage = location.pathname === "/";
const isSpecialPage =
  location.pathname.startsWith("/portfolio") ||
  location.pathname.startsWith("/blog") ||
  location.pathname.startsWith("/shop") ||
  location.pathname.startsWith("/elements");
  const isDancePages =
  location.pathname.startsWith("/pole-dance") ||
  location.pathname.startsWith("/modern-dance"); 

const hoverColor =
  isDancePages
    ? "hover:text-pink-500"
    : isHomePage
    ? "hover:text-yellow-400"
    : "hover:text-[#19c2a0]";
  const isBlogPage = location.pathname.startsWith("/blog");
useEffect(() => {
  if (location.pathname.startsWith("/portfolio")) {
    setActiveLink("Portfolio");
  } else if (location.pathname.startsWith("/events")) {
    setActiveLink("Events");
  } else if (location.pathname.startsWith("/about") || location.pathname.startsWith("/who")) {
    setActiveLink("Pages");
  } else if (location.pathname.startsWith("/blog")) {
    setActiveLink("Blogs");
  } else if (location.pathname.startsWith("/shop")) {
    setActiveLink("Shop");
  } else {
    setActiveLink("Home");
  }
}, [location.pathname]);

const navbarConfig = {
  "/dance-studio": {
    logo: logo1,
    underline: "bg-[#19c2a0]",
  },
  "/pole-dance": {
    logo: logo4,
    underline: "bg-pink-500",
  },
  "/modern-dance": {
    logo: logo4,
    underline: "bg-pink-500",
  },
  "/hiphop": {
    logo: logo3,
    underline: "bg-yellow-400",
  },
};

const current = navbarConfig[location.pathname] || {
  logo: logo,
  underline:
    isHomeSubPage || isSpecialPage || isPagesPage 
      ? "bg-[#19c2a0]"
      : "bg-yellow-400",
};
  return (
    <nav
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
    isBlogPage
  ? "bg-white py-4 shadow-md"
  : isSpecialPage
  ? scrolled
    ? "bg-white py-4 shadow-md"
    : "bg-[#f3f3f3] py-6"
  : scrolled
  ? "bg-black/90 backdrop-blur-md py-3 border-b border-white/10"
  : "bg-transparent py-6"
  }`}
>

        <div className="max-w-7xl-ml-32 mr-auto px-6 flex items-center justify-between">
    
        
        {/* Logo */}
      <Link to="/" className="flex items-center ml-16">
<img
 src={
  isDancePages
    ? logo4   // 👉 lg.png (pink logo)
    : isSpecialPage
    ? logo3
    : isPagesPage || isHomeSubPage
    ? logo1
    : current.logo
}
  alt="logo"
  className="h-10 w-auto"
/>
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
  isSpecialPage ? "text-black" : "text-white"
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
        <Link
          key={i}
          to={item.path}
         className={`block py-2 text-sm transition-all duration-300 transform ${
 item.name === "Hip-Hop Dance"
  ? `${
      isDancePages
        ? "text-pink-400"
        : isHomePage
        ? "text-yellow-400"
        : "text-[#19c2a0]"
    } translate-x-2 font-semibold`
  : `text-white/70 ${hoverColor} hover:translate-x-2`
}`}
        >
          {item.name}
        </Link>
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
  <Link
    key={i}
    to={item.path}
    className={`block py-2 text-sm text-white/70 transition-all duration-300 hover:translate-x-2 ${hoverColor}`}
  >
    {item.name}
  </Link>
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
          onMouseEnter={() => item.submenu && setSubDropdown(item.submenu)}
        >
          {item.path ? (
            <Link
              to={item.path}
              className={`flex justify-between items-center py-2 text-sm text-white/70 ${hoverColor}`}
            >
              {item.name}
            </Link>
          ) : (
            <div className={`flex justify-between items-center py-2 text-sm text-white/70 ${hoverColor}`}>
              {item.name}
              <span>›</span>
            </div>
          )}
        </div>
      ))}
    </div>

    {/* RIGHT - Event Single */}
    {subDropdown === "eventSingle" && (
      <div className="bg-[#1a1a1a] w-52 py-6 px-6 ml-1 border border-white/10">
        {eventSingleSubmenu.map((sub, i) => (
          <Link
            key={i}
            to={sub.path}
           className={`block py-2 text-sm text-white/70 ${hoverColor} hover:translate-x-2 transition-all duration-300`}
          >
            {sub.name}
          </Link>
        ))}
      </div>
    )}

    {/* RIGHT - Classes Single */}
    {subDropdown === "classesSingle" && (
      <div className="bg-[#1a1a1a] w-52 py-6 px-6 ml-1 border border-white/10">
        {classesSingleSubmenu.map((sub, i) => (
          <Link
            key={i}
            to={sub.path}
            className={`block py-2 text-sm text-white/70 ${hoverColor} hover:translate-x-2 transition-all duration-300`}
          >
            {sub.name}
          </Link>
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
            <Link
  key={j}
  to={item.path}
 className={`block py-1 text-sm text-white/70 ${hoverColor} transition-all duration-300 hover:translate-x-2`}
>
  {item.name}
</Link>
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
          <div className={`flex justify-between items-center py-2 text-sm text-white/70 ${hoverColor}`}>
            {menu.title}
            <span>›</span>
          </div>
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
              <Link
                key={j}
                to={item.path}
                className={`block py-2 text-sm text-white/70 ${hoverColor} hover:translate-x-2 transition-all duration-300`}
              >
                {item.name}
              </Link>
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
        <Link
          key={i}
          to={item.path}
          className={`block py-2 text-sm text-white/70 ${hoverColor} hover:translate-x-2 transition-all duration-300`}
        >
          {item.name}
        </Link>
      ))}

      {/* Shop Layouts */}
      <div
        onMouseEnter={() => setSubDropdown("layouts")}
        className={`flex justify-between items-center py-2 text-sm text-white/70 ${hoverColor}`}
      >
        Shop Layouts <span>›</span>
      </div>

      {/* Shop Pages */}
      <div
        onMouseEnter={() => setSubDropdown("pages")}
        className={`flex justify-between items-center py-2 text-sm text-white/70 ${hoverColor}`}
      >
        Show Pages <span>›</span>
      </div>
    </div>

    {/* RIGHT SIDE - Layouts */}
    {subDropdown === "layouts" && (
      <div className="bg-[#1a1a1a] w-52 py-2 px-6 ml-1 border border-white/10">
        {shopLayouts.map((item, i) => (
          <Link
            key={i}
            to={item.path}
            className={`block py-2 text-sm text-white/70 ${hoverColor} hover:translate-x-2 transition-all duration-300`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    )}

    {/* RIGHT SIDE - Pages */}
    {subDropdown === "pages" && (
      <div className="bg-[#1a1a1a] w-52 py-2 px-6 ml-1 border border-white/10">
        {shopPages.map((item, i) => (
          <Link
            key={i}
            to={item.path}
           className={`block py-2 text-sm text-white/70 ${hoverColor} hover:translate-x-2 transition-all duration-300`}
          >
            {item.name}
          </Link>
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
            <Link
              key={j}
              to={item.path}
              className={`block py-1 text-sm text-white/70 ${hoverColor} transition-all duration-300 hover:translate-x-2`}
            >
              {item.name}
            </Link>
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
  className={`absolute bottom-0 h-[2px] transition-all duration-300 ${current.underline}`}
  style={{
    left: underlineStyle.left,
    width: underlineStyle.width,
  }}
/>
        </div>
        {/* RIGHT SIDE ICONS */}
<div
  className={`flex items-center gap-6 ml-8 ${
    isSpecialPage  ? "text-black" : "text-white"
  }`}
>
 
{/* Cart */}
<div
 className={`relative cursor-pointer transition-colors duration-300 ${
 isDancePages
  ? "hover:text-pink-500"
  : isHomeSubPage || isSpecialPage || isPagesPage
  ? "hover:text-[#19c2a0]"
  : "hover:text-yellow-400"}`}
  onMouseEnter={() => setShowCart(true)}
onMouseLeave={() => setShowCart(false)}
  onClick={() => navigate("/cart")}
>
  <ShoppingBag size={20} />

  {/* Count */}
  <span
  className={`absolute -top-2 -right-2 text-xs px-1.5 rounded-full ${
  isHomeSubPage || isSpecialPage || isPagesPage
    ? "bg-[#19c2a0] text-white"
    : "bg-yellow-400 text-black"
}`}
>
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
  className={`transition-colors duration-300 ${
 isHomeSubPage || isSpecialPage || isPagesPage
    ? "hover:text-[#19c2a0]"
    : "hover:text-yellow-400"
}`}
>
    <Search size={20} />
  </button>

   {/* Hamburger */}
  <button
  className={`transition-colors duration-300 ${
  isHomeSubPage || isSpecialPage || isPagesPage
    ? "hover:text-[#19c2a0]"
    : "hover:text-yellow-400"
}`}
  onClick={() => setOpen(!open)}
>
    <Menu size={22} />
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
  className={`fixed top-0 right-0 h-full w-[300px] bg-black z-50 p-8 transform transition-transform duration-500 ${
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
      <Link to="/september">
  <p className="text-gray-200 text-sm hover:text-yellow-400 cursor-pointer transition">
    September 20, 2016
  </p>
</Link>
<Link to="/perfect">
      <p className="text-gray-200 text-lg hover:text-yellow-400 cursor-pointer transition">
        Perfect Imperfect
      </p>
      </Link>
    </div>

    <div>
      <Link to="/september">
  <p className="text-gray-200 text-sm hover:text-yellow-400 cursor-pointer transition">
    September 20, 2016
  </p>
</Link>
<Link to="/heart">
      <p className="text-gray-200 text-lg hover:text-yellow-400 cursor-pointer transition">
        Wild At Heart
      </p>
      </Link>
    </div>

    <div>
      <Link to="/september">
  <p className="text-gray-200 text-sm hover:text-yellow-400 cursor-pointer transition">
    September 20, 2016
  </p>
</Link>
 <Link to="/classic">
      <p className="text-gray-200 text-lg hover:text-yellow-400 cursor-pointer transition">
        How To Do Classic
      </p>
      </Link>
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
</div>
    </nav>
    
  );
}                               