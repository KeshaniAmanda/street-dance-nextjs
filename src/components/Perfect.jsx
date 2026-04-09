import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaFacebookF, FaTwitter, FaLinkedinIn, FaTumblr, FaPinterestP } from "react-icons/fa";

// IMAGES
import p1 from "../assets/prefect1.jpg";
import p2 from "../assets/prefect2.jpg";
import p3 from "../assets/prefect3.jpg";
import p4 from "../assets/prefect4.jpg"; 
import p5 from "../assets/prefect5.jpg";
import p6 from "../assets/prefect6.jpg";
import p7 from "../assets/prefect7.jpg";

const Perfect = () => {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const post = {
    id: 1,
    comments: 5,
    likes: 20,
  };

  return (
    <div className="bg-white">

      {/* HEADER */}
      <div className="bg-[#19c2a0] py-20 text-center">
        <h1 className="text-white text-[32px] font-semibold tracking-widest">
          BLOG
        </h1>

        <div className="mt-3 text-sm text-white/80 flex justify-center gap-2">
          <Link to="/" className="hover:text-black transition">Home</Link>
          <span>/</span>
          <Link to="/contemporary" className="hover:text-black transition">Comtemporary</Link>
          <span>/</span>
          <span>Perfect Imperfect</span>
        </div>
      </div>

      {/* CONTAINER */}
      <div className="max-w-[1140px] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-[50px]">

        {/* LEFT CONTENT */}
        <div className="md:col-span-2">

          <img src={p1} alt="blog" className="w-full h-[700px] object-cover" />

          {/* META */}
          <div className="text-gray-400 text-[13px] mt-6 flex flex-wrap items-center gap-2">
            <span onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="cursor-pointer hover:text-[#19c2a0] transition">
              September 29, 2016
            </span>

            <span>/</span>

            <span onClick={() => navigate("/admin")} className="cursor-pointer hover:text-[#19c2a0] transition">
              By admin
            </span>

            <span>/</span>

            <span onClick={() => navigate(`/latino/${post.id}`)} className="cursor-pointer hover:text-[#19c2a0] transition">
              {post.comments} Comments
            </span>

            <span>/</span>

            <span onClick={() => navigate(`/latino/${post.id}`)} className="cursor-pointer hover:text-[#19c2a0] transition">
              ♡ {post.likes}
            </span>

            <span>/</span>

            <span onClick={() => navigate(`/latino/${post.id}`)} className="cursor-pointer hover:text-[#19c2a0] transition">
              Latino
            </span>
          </div>

          <h2 className="text-[30px] font-semibold mt-3 tracking-[1px] text-[#111]">
            PERFECT IMPERFECT
          </h2>

          <p className="text-[#777] mt-4 leading-[28px] text-[15px] max-w-[720px]">
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
            Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
            Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
            ullamcorper ultricies nisi.
          </p>

          <div className="flex gap-5 mt-10 max-w-[720px]">
            <span className="text-[70px] text-[#19c3a3] leading-none">“</span>

            <p className="italic text-[#444] leading-[28px] text-[15px] mt-2">
              Of pleasure of the moment, so blinded by desire, that they cannot
              foresee the pain and trouble that are bound are ensue; and equal
              blame belongs to those who fail in their duty through weakness of will.
            </p>
          </div>

          <p className="text-[#777] mt-6 leading-[28px] text-[15px] max-w-[720px]">
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
            Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
            Aenean imperdiet.
          </p>

          {/* TAG + SHARE */}
          <div className="flex justify-between items-center mt-8 text-[13px] text-[#888] max-w-[720px]">
            <p>Pleasure, Work</p>

            <div className="flex items-center gap-4">
              <span>Share:</span>

              <FaFacebookF onClick={() => window.open("https://www.facebook.com", "_blank")} className="cursor-pointer text-black" />
              <FaTwitter onClick={() => window.open("https://twitter.com", "_blank")} className="cursor-pointer text-black" />
              <FaLinkedinIn onClick={() => window.open("https://www.linkedin.com", "_blank")} className="cursor-pointer text-black" />
              <FaTumblr onClick={() => window.open("https://www.tumblr.com", "_blank")} className="cursor-pointer text-black" />
              <FaPinterestP onClick={() => window.open("https://www.pinterest.com", "_blank")} className="cursor-pointer text-black" />
            </div>
          </div>

          {/* AUTHOR BANNER */}
          <div className="relative mt-28">
            <img src={p7} alt="author" className="w-full h-[260px] object-cover" />
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-[18px] tracking-[2px] font-semibold">
                ADMIN / COREOGRAPHER
              </h3>
              <p className="text-[13px] mt-2 max-w-[400px] opacity-90 leading-[22px]">
                Lorem ipsum proin gravida nibh vel velit auctor aliquet.
                Aenean sollicitudin, lorem auci elit consequat ipsutissem niuis.
              </p>
            </div>
          </div>

        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-10">

          <div className="p-7 pb-3">
            <img src={p2} alt="author" className="w-full h-[200px] object-cover -ml-6 -mt-7"/>
            <p className="text-[#19c3a3] text-[13px] mt-4 -ml-6">
              Dance Coreographer
            </p>
            <h3 className="font-semibold text-[18px] mt-1 -ml-6 text-black">
              JANNE BURKE
            </h3>
            <p className="text-[#777] text-[14px] mt-2 leading-[24px] -ml-6">
              Cum sociis Theme natoque penatibus et magnis dis parturient montes.
            </p>
          </div>

          {/* SEARCH */}
          <div className="relative">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="w-full border px-3 py-4 pr-10 text-[13px] outline-none"
            />
            <FaSearch
              onClick={() => console.log("Search:", search)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
            />
          </div>

          {/* CATEGORIES */}
          <div>
            <h3 className="text-[16px] font-semibold mb-4 tracking-[1px] text-black">
              CATEGORIES
            </h3>

            <ul className="space-y-3 text-[14px] text-black">
              <li>Contemporary <span className="text-[#666]">(3)</span></li>
              <li>Dance <span className="text-[#666]">(10)</span></li>
              <li>Hip Hop <span className="text-[#666]">(3)</span></li>
              <li>Latino <span className="text-[#666]">(3)</span></li>
              <li>Pole dancing <span className="text-[#666]">(3)</span></li>
            </ul>
          </div>

          <img src={p3} alt="side" className="w-full h-[200px] object-cover" />

          {/* LATEST POSTS */}
          <div>
            <h3 className="text-[16px] font-semibold mb-5 tracking-[1px] text-black">
              LATEST POSTS
            </h3>

            {[p4, p5, p6].map((img, i) => (
              <div key={i} className="flex items-center gap-3 mb-5">
                <img src={img} alt="post" className="w-24 h-24 rounded-full object-cover" />
                <div>
                  <p className="text-[18px] text-black">
                    {i === 0 ? "King Of Dancers" : i === 1 ? "Don’t Walk! Dance!" : "Breathtaking Game"}
                  </p>
                  <p className="text-[16px] text-[#999]">
                    May 16, 2016
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* TAG CLOUD */}
          <div>
            <h3 className="text-[18px] font-semibold mb-3 tracking-[1px] text-black">
              TAG CLOUD
            </h3>

            <p className="text-[#777] text-[14px] leading-[22px]">
              CONTEMPORARY, DANCE, HIP HOP, LATINO, POLEDANCING
            </p>

            <h4 className="text-[18px] mt-4 font-semibold mb-6 tracking-[1px] text-black">
              FOLLOW ME ON INSTAGRAM
            </h4>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Perfect;