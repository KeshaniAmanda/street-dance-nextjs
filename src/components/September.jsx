import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Phone, MapPin, Mail } from "lucide-react";

import img1 from "../assets/september1.jpg";
import img2 from "../assets/september2.jpg";
import img3 from "../assets/september3.jpg";
import img4 from "../assets/september4.jpg";
import img5 from "../assets/september5.jpg";
import img6 from "../assets/september6.jpg";
import img7 from "../assets/september7.jpg";
import img8 from "../assets/september8.jpg";
import img9 from "../assets/september9.jpg";

const posts = [
  { id: 1, image: img1, title: "LATINO VERSION", comments: 0, likes: 1 },
  { id: 2, image: img2, title: "STEPS TO SUCCESS", comments: 0, likes: 0 },
  { id: 3, image: img3, title: "DANCE ENERGY", comments: 2, likes: 5 },
  { id: 4, image: img4, title: "HIP HOP VIBES", comments: 1, likes: 3 },
  { id: 5, image: img5, title: "STREET STYLE", comments: 4, likes: 7 },
  { id: 6, image: img6, title: "FREESTYLE MOVES", comments: 0, likes: 2 },
  { id: 7, image: img7, title: "CREW BATTLE", comments: 6, likes: 10 },
  { id: 8, image: img8, title: "DANCE FLOOR", comments: 3, likes: 4 },
  { id: 9, image: img9, title: "FINAL SHOW", comments: 1, likes: 6 },
];

const September = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white">

      {/* HEADER */}
      <div className="bg-[#19c2a0] py-20 text-center">
        <h1 className="text-white text-[32px] font-semi tracking-widest">
          SEPTEMBER 2016
        </h1>

        <div className="mt-3 text-sm text-white/80 flex justify-center gap-2">
          <Link to="/" className="hover:text-black transition">Home</Link>
          <span>/</span>
          <Link to="/2016" className="hover:text-black transition">2016</Link>
          <span>/</span>
          <span>September</span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="w-full px-6 py-16">
        <div className="max-w-[1100px] mx-auto">

          {posts.map((post) => (
            <div key={post.id} className="mb-24">

              {/* IMAGE */}
              <div
                onClick={() => navigate(`/latino/${post.id}`)}
                className="w-full h-[600px] overflow-hidden cursor-pointer"
              >
                <img
                  src={post.image}
                  alt=""
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              {/* META */}
              <div className="text-gray-400 text-[13px] mt-6 flex flex-wrap items-center gap-2">

                <span
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="cursor-pointer hover:text-[#19c2a0] transition"
                >
                  September 29, 2016
                </span>

                <span>/</span>

                <span
                  onClick={() => navigate("/admin")}
                  className="cursor-pointer hover:text-[#19c2a0] transition"
                >
                  By admin
                </span>

                <span>/</span>

                <span
                  onClick={() => navigate(`/latino/${post.id}`)}
                  className="cursor-pointer hover:text-[#19c2a0] transition"
                >
                  {post.comments} Comments
                </span>

                <span>/</span>

                <span
                  onClick={() => navigate(`/latino/${post.id}`)}
                  className="cursor-pointer hover:text-[#19c2a0] transition"
                >
                  ♡ {post.likes}
                </span>

                <span>/</span>

                <span
                  onClick={() => navigate(`/latino/${post.id}`)}
                  className="cursor-pointer hover:text-[#19c2a0] transition"
                >
                  Latino
                </span>

              </div>

              {/* TITLE */}
              <h2
                onClick={() => navigate(`/latino/${post.id}`)}
                className="text-[30px] font-semibold mt-3 tracking-wide text-black cursor-pointer hover:text-[#19c2a0] transition"
              >
                {post.title}
              </h2>

                {/* TEXT */}
          <p
            onClick={() => navigate("/latino")}
            className="text-gray-500 text-[14px] leading-7 mt-4 max-w-full "
          >
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet
            sem neque sed ipsum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et magnis dis parturient...
          </p>
              {/* READ MORE */}
              <button
                onClick={() => navigate(`/latino/${post.id}`)}
                className="mt-6 text-[#19c2a0] text-[14px] font-semibold flex items-center gap-2 group"
              >
                <span className="group-hover:translate-x-1 transition">
                  → READ MORE
                </span>
              </button>

            </div>
          ))}

        </div>
      </div>

      {/* 🔥 FOOTER (UNCHANGED) */}
      <footer className="bg-[#0f0f0f] text-gray-300">

        <div className="grid md:grid-cols-4 gap-10 px-6 md:px-16 py-16">

          <div>
            <h3 className="text-white font-semibold mb-6 tracking-wider">
              ABOUT US
            </h3>

            <p className="text-sm leading-relaxed mb-6">
              Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
              Phasellus viverra nulla ut metus varius laoreet quisque.
            </p>

            <div className="space-y-4 text-sm">

              <a href="tel:167712444227" className="flex items-center gap-3 group">
                <Phone size={16} className="text-[#19c2a0]" />
                <span className="group-hover:text-[#19c2a0]">
                  1-677-124-44227
                </span>
              </a>

              <a
                href="https://maps.google.com/?q=184 Main Collins Street"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <MapPin size={16} className="text-[#19c2a0]" />
                <span className="group-hover:text-[#19c2a0]">
                  184 Main Collins Street
                </span>
              </a>

              <a
                href="mailto:vibez@example.com"
                className="flex items-center gap-3 group"
              >
                <Mail size={16} className="text-[#19c2a0]" />
                <span className="group-hover:text-[#19c2a0]">
                  vibez@example.com
                </span>
              </a>

            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 tracking-wider">
              LATEST TWEETS
            </h3>
            <p className="text-sm text-gray-300 ">
              Couldn't connect with Twitter
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 tracking-wider">
              LATEST POSTS
            </h3>

            <div className="space-y-5 text-sm">

              <div>
                <Link to="/may">
                  <p className="text-[#19c2a0] text-xs hover:underline cursor-pointer">
                    May 16, 2016
                  </p>
                </Link>

                <Link to="/king">
                  <p className="text-gray-300 hover:text-[#19c2a0] transition">
                    KING OF DANCERS
                  </p>
                </Link>
              </div>

              <div>
                <Link to="/may">
                  <p className="text-[#19c2a0] text-xs hover:underline cursor-pointer">
                    May 16, 2016
                  </p>
                </Link>

                <Link to="/walk">
                  <p className="text-gray-300 hover:text-[#19c2a0] transition">
                    DON'T WALK! DANCE!
                  </p>
                </Link>
              </div>

              <div>
                <Link to="/may">
                  <p className="text-[#19c2a0] text-xs hover:underline cursor-pointer">
                    May 16, 2016
                  </p>
                </Link>

                <Link to="/game">
                  <p className="text-gray-300 hover:text-[#19c2a0] transition">
                    BREATHTAKING GAME
                  </p>
                </Link>
              </div>

            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 tracking-wider">
              INSTAGRAM
            </h3>
          </div>

        </div>

        <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-400">
          © 2017{" "}
          <a
            href="https://qodeinteractive.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#19c2a0] transition"
          >
            QODE INTERACTIVE
          </a>
          , ALL RIGHTS RESERVED
        </div>

      </footer>

    </div>
  );
};

export default September;