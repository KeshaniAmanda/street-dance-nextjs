import React from "react";
import { Phone, MapPin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-gray-300">

      {/* TOP SECTION */}
      <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-4 
        gap-8 sm:gap-10 
        px-5 sm:px-8 md:px-16 
        py-12 sm:py-16
      ">

        {/* ABOUT US */}
        <div>
          <h3 className="text-white font-semibold mb-5 sm:mb-6 tracking-wider text-sm sm:text-base">
            ABOUT US
          </h3>

          <p className="text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
            Phasellus viverra nulla ut metus varius laoreet quisque.
          </p>

          <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm">

            <a href="tel:167712444227" className="flex items-center gap-3 group">
              <Phone size={16} className="text-[#19c2a0]" />
              <span className="group-hover:text-[#19c2a0] break-all">
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
              <span className="group-hover:text-[#19c2a0] break-words">
                184 Main Collins Street
              </span>
            </a>

            <a
              href="mailto:vibez@example.com"
              className="flex items-center gap-3 group"
            >
              <Mail size={16} className="text-[#19c2a0]" />
              <span className="group-hover:text-[#19c2a0] break-all">
                vibez@example.com
              </span>
            </a>

          </div>
        </div>

        {/* LATEST TWEETS */}
        <div>
          <h3 className="text-white font-semibold mb-5 sm:mb-6 tracking-wider text-sm sm:text-base">
            LATEST TWEETS
          </h3>
          <p className="text-xs sm:text-sm">
            Couldn't connect with Twitter
          </p>
        </div>

        {/* LATEST POSTS */}
        <div>
          <h3 className="text-white font-semibold mb-5 sm:mb-6 tracking-wider text-sm sm:text-base">
            LATEST POSTS
          </h3>

          <div className="space-y-4 sm:space-y-5 text-xs sm:text-sm">

            <div>
              <Link to="/may">
                <p className="text-[#19c2a0] text-xs hover:underline">
                  May 16, 2016
                </p>
              </Link>

              <Link to="/king">
                <p className="hover:text-[#19c2a0] transition">
                  KING OF DANCERS
                </p>
              </Link>
            </div>

            <div>
              <Link to="/may">
                <p className="text-[#19c2a0] text-xs hover:underline">
                  May 16, 2016
                </p>
              </Link>

              <Link to="/walk">
                <p className="hover:text-[#19c2a0] transition">
                  DON'T WALK! DANCE!
                </p>
              </Link>
            </div>

            <div>
              <Link to="/may">
                <p className="text-[#19c2a0] text-xs hover:underline">
                  May 16, 2016
                </p>
              </Link>

              <Link to="/game">
                <p className="hover:text-[#19c2a0] transition">
                  BREATHTAKING GAME
                </p>
              </Link>
            </div>

          </div>
        </div>

        {/* INSTAGRAM */}
        <div>
          <h3 className="text-white font-semibold mb-5 sm:mb-6 tracking-wider text-sm sm:text-base">
            INSTAGRAM
          </h3>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="
        border-t border-gray-800 
        py-5 sm:py-6 
        text-center 
        text-xs sm:text-sm 
        text-gray-400
        px-4
      ">
        © 2017{" "}
        <a
          href="https://qodeinteractive.com/?_gl=1%2A1yvm9n9%2A_gcl_au%2AMTA0MTE3NzQ1MC4xNzc0OTM0NDk0"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#19c2a0] transition"
        >
          QODE INTERACTIVE
        </a>
        , ALL RIGHTS RESERVED
      </div>

    </footer>
  );
};

export default Footer;