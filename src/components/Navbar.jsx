import React, { useState, useEffect, useRef } from "react";
import urb from "../assets/urb.png";

import { Menu, X, Search, ShoppingBag } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import img1 from "../assets/Hamburger1.webp";
import img2 from "../assets/Hamburger2.webp";
import img3 from "../assets/Hamburger3.webp";
import ham4 from "../assets/ham4.png";

const links = [
  "Home",
  "Pages",
  "Events",
  "Portfolio",
  "Blogs",
  "Shop",
  "Elements",
];

const ORANGE = "#ffb347";

const homeDropdown = [
  { name: "Studio", path: "/dance-studio" },
  { name: "Pole Dance", path: "/pole-dance" },
  { name: "Hip-Hop", path: "/hip-hop" },
  { name: "Modern", path: "/modern-dance" },
  { name: "Ballet", path: "/ballet" },
  { name: "Latin", path: "/latin" },
  { name: "Kids Ballet", path: "/kids-ballet" },
 
];

const pagesDropdown = [
  { name: "About", path: "/about" },
  { name: "Team", path: "/crew" },
  { name: "Instructors", path: "/instructors" },
  { name: "What We Do", path: "/what-we-do" },
  { name: "Pricing", path: "/pricing" },
  { name: "Contact", path: "/contact" },
  { name: "FAQ", path: "/faq" },
  { name: "Error", path: "/error" },
];

const eventsDropdown = [
  { name: "Events", path: "/events-calendar" },
  { name: "Timetable", path: "/timetable" },
  { name: "Event Details", submenu: "eventSingle" },
  { name: "Class Details", submenu: "classesSingle" },
];

const eventSingleSubmenu = [
  { name: "Swan Lake Ballet", path: "/swan-lake" },
  { name: "Breakdance Workshop", path: "/breakdance" },
  { name: "Acting for Kids", path: "/acting" },
];

const classesSingleSubmenu = [
  { name: "Modern Dance Class", path: "/modern" },
  { name: "Yoga Dance Class", path: "/yoga" },
  { name: "Ballet Class", path: "/ballet-class" },
];

const portfolioColumns = [
  {
    title: "STANDARD",
    items: [
      { name: "Classic Layout", path: "/portfolio/three-columns" },
      { name: "Classic Wide Layout", path: "/portfolio/three-wide" },
      { name: "Balanced Layout", path: "/portfolio/four-columns" },
    ],
  },
  {
    title: "GALLERY",
    items: [
      { name: "Gallery Showcase", path: "/gallery/three" },
      { name: "Wide Gallery Showcase", path: "/gallery/three-wide" },
      { name: "Creative Gallery", path: "/gallery/four" },
    ],
  },
  {
    title: "MASONRY",
    items: [
      { name: "Grid Masonry", path: "/masonry/grid" },
      { name: "Wide Masonry", path: "/masonry/wide" },
      { name: "Compact Masonry", path: "/masonry/no-grid" },
    ],
  },
  {
    title: "SINGLE",
    items: [
      { name: "Image Detail", path: "/single/small-images" },
      { name: "Slider Detail", path: "/single/small-slider" },
      { name: "Large Image View", path: "/single/big-images" },
    ],
  },
];

const blogsMenu = [
  {
    title: "STANDARD",
    items: [
      { name: "No Sidebar Layout", path: "/blog/no-sidebar" },
      { name: "Right Sidebar Layout", path: "/blog/right-sidebar" },
      { name: "Left Sidebar Layout", path: "/blog/left-sidebar" },
    ],
  },
  {
    title: "MASONRY",
    items: [
      { name: "Grid Layout", path: "/blog/grid" },
      { name: "Full Width Layout", path: "/blog/full" },
    ],
  },
  {
    title: "POST TYPES",
    items: [
      { name: "Gallery Post", path: "/blog/gallery" },
      { name: "Video Post", path: "/blog/video" },
      { name: "Audio Post", path: "/blog/audio" },
    ],
  },
];

const shopDropdown = [
  { name: "Right Sidebar Shop", path: "/shop/right-sidebar" },
  { name: "Left Sidebar Shop", path: "/shop/left-sidebar" },
  { name: "Product Details", path: "/shop/product" },
];

const shopLayouts = [
  { name: "Shop Grid Layout", path: "/shop/3-columns" },
  { name: "Shop Wide Grid", path: "/shop/4-columns" },
  { name: "Shop Full Width", path: "/shop/full" },
];

const shopPages = [
  { name: "My Account", path: "/account" },
  { name: "Shopping Cart", path: "/cart" },
  { name: "Checkout", path: "/checkout" },
];

const elementsMegaMenu = [
  {
    title: "CLASSIC",
    items: [
      { name: "Accordion", path: "/elements/accordions" },
      { name: "Buttons", path: "/elements/buttons" },
      { name: "Maps", path: "/elements/maps" },
    ],
  },
  {
    title: "INFOGRAPHICS",
    items: [
      { name: "Progress Bar", path: "/elements/progress" },
      { name: "Pricing", path: "/elements/pricing" },
      { name: "Counters", path: "/elements/counters" },
    ],
  },
  {
    title: "INTERACTIVE",
    items: [
      { name: "Gallery", path: "/elements/gallery" },
      { name: "Carousel", path: "/elements/carousel" },
      { name: "Testimonials", path: "/elements/testimonials" },
    ],
  },
  {
    title: "TYPOGRAPHY",
    items: [
      { name: "Headings", path: "/elements/headings" },
      { name: "Highlights", path: "/elements/highlights" },
      { name: "Quotes", path: "/elements/blockquote" },
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

  const navigate = useNavigate();
  const location = useLocation();

  const isSpecialPage =
  location.pathname.startsWith("/portfolio") ||
  location.pathname.startsWith("/blog") ||
  location.pathname.startsWith("/shop") ||
  location.pathname.startsWith("/elements") ||
  location.pathname.startsWith("/faq") ||
  location.pathname.startsWith("/about") ||
  location.pathname.startsWith("/crew") ||
  location.pathname.startsWith("/what-we-do") ||
  location.pathname.startsWith("/pricing") ||
  location.pathname.startsWith("/contact") ||
  location.pathname.startsWith("/events-calendar") ||
  location.pathname.startsWith("/timetable") ||
  location.pathname.startsWith("/swan-lake") ||
  location.pathname.startsWith("/dance-studio") ||
  location.pathname.startsWith("/pole-dance") ||
  location.pathname.startsWith("/hip-hop") ||
  location.pathname.startsWith("/modern-dance") ||
  location.pathname.startsWith("/ballet") ||
  location.pathname.startsWith("/latin") ||
  location.pathname.startsWith("/kids-ballet") ||
  location.pathname.startsWith("/breakdance") ||
  location.pathname.startsWith("/newdancers") ||
  location.pathname.startsWith("/thedance") ||
  location.pathname.startsWith("/graffiti") ||
  location.pathname.startsWith("/portfolio/three-columns") ||
  location.pathname.startsWith("/portfolio/group-move") ||
  location.pathname.startsWith("/portfolio/wanderlust") ||
  location.pathname.startsWith("/portfolio/moon-dance") ||
  location.pathname.startsWith("/portfolio/modern-ballet") ||
  location.pathname.startsWith("/portfolio/flamenco") ||
  location.pathname.startsWith("/blog/no-sidebar") ||
  location.pathname.startsWith("/shop/right-sidebar") ||
  location.pathname.startsWith("/elements/accordions") ||
  location.pathname.startsWith("/perfect") ||
  location.pathname.startsWith("/heart") ||
  location.pathname.startsWith("/classic") ||
  location.pathname.startsWith("/instructors");
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

  useEffect(() => {
    if (location.pathname.startsWith("/portfolio")) {
      setActiveLink("Portfolio");
    } else if (
      location.pathname.startsWith("/events") ||
      location.pathname.startsWith("/timetable")
    ) {
      setActiveLink("Events");
    } else if (
      location.pathname.startsWith("/about") ||
      location.pathname.startsWith("/who")
    ) {
      setActiveLink("Pages");
    } else if (location.pathname.startsWith("/blog")) {
      setActiveLink("Blogs");
    } else if (location.pathname.startsWith("/shop")) {
      setActiveLink("Shop");
    } else {
      setActiveLink("Home");
    }
  }, [location.pathname]);

  return (
   <nav
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
    scrolled
      ? "bg-transparent py-3 border-b border-white/10"
      : "bg-transparent py-6"
  }`}
>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img src={urb} alt="logo" className="h-20 w-auto" />
        </Link>

        {/* MENU */}
        <div className="hidden lg:flex relative">
          <ul className="flex items-center gap-8 relative">
            {links.map((link, index) => (
              <li
                key={link}
                ref={(el) => (linkRefs.current[index] = el)}
                className="relative"
                onMouseEnter={() =>
                  setDropdown(link)
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
                  } hover:text-[#ffb347]`}
                >
                  {link}
                </button>

                {/* HOME */}
                {dropdown === "Home" && link === "Home" && (
                  <div className="absolute left-0 top-full pt-3 z-50">
                    <div className="bg-[#1a1a1a] w-52 py-6 px-6 shadow-2xl border border-white/10">
                      {homeDropdown.map((item, i) => (
                        <Link
                          key={i}
                          to={item.path}
                          className="block py-2 text-sm text-white/70 hover:text-[#ffb347] hover:translate-x-2 transition-all duration-300"
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
                    <div className="bg-[#1a1a1a] w-52 py-6 px-6 shadow-2xl border border-white/10">
                      {pagesDropdown.map((item, i) => (
                        <Link
                          key={i}
                          to={item.path}
                          className="block py-2 text-sm text-white/70 hover:text-[#ffb347] hover:translate-x-2 transition-all duration-300"
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

                    <div className="bg-[#1a1a1a] w-52 py-6 px-6 shadow-2xl border border-white/10">
                      {eventsDropdown.map((item, i) => (
                        <div
                          key={i}
                          onMouseEnter={() =>
                            item.submenu && setSubDropdown(item.submenu)
                          }
                        >
                          {item.path ? (
                            <Link
                              to={item.path}
                              className="flex justify-between items-center py-2 text-sm text-white/70 hover:text-[#ffb347]"
                            >
                              {item.name}
                            </Link>
                          ) : (
                            <div className="flex justify-between items-center py-2 text-sm text-white/70 hover:text-[#ffb347]">
                              {item.name}
                              <span>›</span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {subDropdown === "eventSingle" && (
                      <div className="bg-[#1a1a1a] w-52 py-6 px-6 ml-1 border border-white/10">
                        {eventSingleSubmenu.map((sub, i) => (
                          <Link
                            key={i}
                            to={sub.path}
                            className="block py-2 text-sm text-white/70 hover:text-[#ffb347] hover:translate-x-2 transition-all duration-300"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}

                    {subDropdown === "classesSingle" && (
                      <div className="bg-[#1a1a1a] w-52 py-6 px-6 ml-1 border border-white/10">
                        {classesSingleSubmenu.map((sub, i) => (
                          <Link
                            key={i}
                            to={sub.path}
                            className="block py-2 text-sm text-white/70 hover:text-[#ffb347] hover:translate-x-2 transition-all duration-300"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* PORTFOLIO */}
                {dropdown === "Portfolio" && link === "Portfolio" && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full w-screen bg-[#1a1a1a] py-10 px-20 z-50">
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
                              className="block py-1 text-sm text-white/70 hover:text-[#ffb347] hover:translate-x-2 transition-all duration-300"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* BLOGS */}
                {dropdown === "Blogs" && link === "Blogs" && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full z-50 flex">

                    <div className="bg-[#1a1a1a] w-52 py-6 px-6 border border-white/10 relative">
                      {blogsMenu.map((menu, i) => (
                        <div
                          key={i}
                          onMouseEnter={() => setSubDropdown(menu.title)}
                        >
                          <div className="flex justify-between items-center py-2 text-sm text-white/70 hover:text-[#ffb347]">
                            {menu.title}
                            <span>›</span>
                          </div>
                        </div>
                      ))}
                    </div>

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
                                className="block py-2 text-sm text-white/70 hover:text-[#ffb347] hover:translate-x-2 transition-all duration-300"
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

                    <div className="bg-[#1a1a1a] w-52 py-6 px-6 border border-white/10">
                      {shopDropdown.map((item, i) => (
                        <Link
                          key={i}
                          to={item.path}
                          className="block py-2 text-sm text-white/70 hover:text-[#ffb347] hover:translate-x-2 transition-all duration-300"
                        >
                          {item.name}
                        </Link>
                      ))}

                      <div
                        onMouseEnter={() => setSubDropdown("layouts")}
                        className="flex justify-between items-center py-2 text-sm text-white/70 hover:text-[#ffb347]"
                      >
                        Shop Layouts <span>›</span>
                      </div>

                      <div
                        onMouseEnter={() => setSubDropdown("pages")}
                        className="flex justify-between items-center py-2 text-sm text-white/70 hover:text-[#ffb347]"
                      >
                        Shop Pages <span>›</span>
                      </div>
                    </div>

                    {subDropdown === "layouts" && (
                      <div className="bg-[#1a1a1a] w-52 py-2 px-6 ml-1 border border-white/10">
                        {shopLayouts.map((item, i) => (
                          <Link
                            key={i}
                            to={item.path}
                            className="block py-2 text-sm text-white/70 hover:text-[#ffb347] hover:translate-x-2 transition-all duration-300"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}

                    {subDropdown === "pages" && (
                      <div className="bg-[#1a1a1a] w-52 py-2 px-6 ml-1 border border-white/10">
                        {shopPages.map((item, i) => (
                          <Link
                            key={i}
                            to={item.path}
                            className="block py-2 text-sm text-white/70 hover:text-[#ffb347] hover:translate-x-2 transition-all duration-300"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* ELEMENTS */}
                {dropdown === "Elements" && link === "Elements" && (
                  <div className="absolute left-1/2 -translate-x-[68%] top-full w-screen bg-[#1a1a1a] py-10 px-20 z-50">
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
                              className="block py-1 text-sm text-white/70 hover:text-[#ffb347] hover:translate-x-2 transition-all duration-300"
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
            className="absolute bottom-0 h-[2px] transition-all duration-300 bg-[#ffb347]"
            style={{
              left: underlineStyle.left,
              width: underlineStyle.width,
            }}
          />
        </div>

        {/* RIGHT ICONS */}
        <div
          className={`flex items-center gap-6 ml-8 ${
            isSpecialPage ? "text-black" : "text-white"
          }`}
        >

          {/* CART */}
          <div
            className="relative cursor-pointer transition-colors duration-300 hover:text-[#ffb347]"
            onMouseEnter={() => setShowCart(true)}
            onMouseLeave={() => setShowCart(false)}
            onClick={() => navigate("/cart")}
          >
            <ShoppingBag size={20} />

            <span className="absolute -top-2 -right-2 text-xs px-1.5 rounded-full bg-[#ffb347] text-black">
              0
            </span>

            {showCart && (
              <div className="absolute right-0 top-full mt-3 w-64 bg-[#1a1a1a] text-white text-sm p-4 shadow-lg border border-white/10 z-50">
                No products in the cart.
              </div>
            )}
          </div>

          {/* SEARCH */}
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="transition-colors duration-300 hover:text-[#ffb347]"
          >
            <Search size={20} />
          </button>

          {/* HAMBURGER */}
          <button
            className="transition-colors duration-300 hover:text-[#ffb347]"
            onClick={() => setOpen(!open)}
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

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
        <div className="flex justify-end mb-6">
          <button onClick={() => setOpen(false)}>
            <X size={24} className="hover:text-[#ffb347] text-white" />
          </button>
        </div>

        <img
          src={ham4}
          alt="DANCERZ"
          className="h-10 mx-auto mb-4"
        />

        <p className="text-white/60 text-base mb-6 text-center leading-relaxed">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          Aenean commodo ligula eget dolor.
        </p>

        <div className="grid grid-cols-3 gap-3 mb-10">
          <img src={img1} className="w-full h-[120px] object-cover" />
          <img src={img2} className="w-full h-[120px] object-cover" />
          <img src={img3} className="w-full h-[120px] object-cover" />
        </div>

        <div className="mt-14 text-center">
          <h2 className="text-white text-base tracking-[0.05em] uppercase mb-6 font-bold">
            LATEST POSTS
          </h2>

          <div className="space-y-10">

            <div>
              <Link to="/perfect">
                <p className="text-gray-200 text-lg hover:text-[#ffb347] transition">
                  Perfect Imperfect
                </p>
              </Link>
            </div>

            <div>
              <Link to="/heart">
                <p className="text-gray-200 text-lg hover:text-[#ffb347] transition">
                  Wild At Heart
                </p>
              </Link>
            </div>

            <div>
              <Link to="/classic">
                <p className="text-gray-200 text-lg hover:text-[#ffb347] transition">
                  How To Do Classic
                </p>
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* SEARCH MODAL */}
      {showSearch && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center">

          <button
            onClick={() => setShowSearch(false)}
            className="absolute top-6 right-6 text-white text-2xl hover:text-[#ffb347]"
          >
            ✕
          </button>

          <div className="w-[60%] max-w-2xl">
            <div className="flex items-center border-b border-[#ffb347]">

              <input
                type="text"
                placeholder="SEARCH ON SITE..."
                className="w-full bg-transparent outline-none text-white text-xl py-3 placeholder-white tracking-widest font-bold"
              />

              <Search className="text-[#ffb347] ml-3" size={24} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}  