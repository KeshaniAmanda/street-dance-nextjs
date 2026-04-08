import React from "react";
import { Phone, MapPin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-gray-300">

      {/* TOP SECTION */}
      <div className="grid md:grid-cols-4 gap-10 px-6 md:px-16 py-16">

        {/* ABOUT US */}
        <div>
          <h3 className="text-white font-semibold mb-6 tracking-wider">
            ABOUT US
          </h3>

          <p className="text-sm leading-relaxed mb-6">
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
            Phasellus viverra nulla ut metus varius laoreet quisque.
          </p>

          <div className="space-y-4 text-sm">

            {/* PHONE */}
            <a
              href="tel:167712444227"
              className="flex items-center gap-3 group transition"
            >
              <Phone
                size={16}
                className="text-yellow-400 group-hover:text-yellow-400"
              />
              <span className="group-hover:text-yellow-400 transition">
                1-677-124-44227
              </span>
            </a>

            {/* ADDRESS */}
            <a
              href="https://maps.google.com/?q=184 Main Collins Street"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group transition"
            >
              <MapPin
                size={16}
                className="text-yellow-400 group-hover:text-yellow-400"
              />
              <span className="group-hover:text-yellow-400 transition">
                184 Main Collins Street
              </span>
            </a>

            {/* EMAIL */}
            <a
              href="mailto:vibez@example.com"
              className="flex items-center gap-3 group transition"
            >
              <Mail
                size={16}
                className="text-yellow-400 group-hover:text-yellow-400"
              />
              <span className="group-hover:text-yellow-400 transition">
                vibez@example.com
              </span>
            </a>

          </div>
        </div>

        {/* LATEST TWEETS */}
        <div>
          <h3 className="text-white font-semibold mb-6 tracking-wider">
            LATEST TWEETS
          </h3>

          <p className="text-sm text-gray-300 ">
            Couldn't connect with Twitter
          </p>
        </div>

        {/* LATEST POSTS */}
        <div>
          <h3 className="text-white font-semibold mb-6 tracking-wider">
            LATEST POSTS
          </h3>

          <div className="space-y-5 text-sm">

            <div>
              <p className="text-yellow-400 text-xs">May 16, 2016</p>
              <a
                href="#"
                className="text-gray-300 hover:text-yellow-400 transition"
              >
                KING OF DANCERS
              </a>
            </div>

            <div>
              <p className="text-yellow-400 text-xs">May 16, 2016</p>
              <a
                href="#"
                className="text--gray-300 hover:text-yellow-400 transition"
              >
                DON'T WALK! DANCE!
              </a>
            </div>

            <div>
              <p className="text-yellow-400 text-xs">May 16, 2016</p>
              <a
                href="#"
                className="text--gray-300 hover:text-yellow-400 transition"
              >
                BREATHTAKING GAME
              </a>
            </div>

          </div>
        </div>

        {/* INSTAGRAM */}
        <div>
          <h3 className="text-white font-semibold mb-6 tracking-wider">
            INSTAGRAM
          </h3>

          
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-400">
        © 2017{" "}
        <a href="#" className="hover:text-yellow-400 transition">
          QODE INTERACTIVE
        </a>
        , ALL RIGHTS RESERVED
      </div>

    </footer>
  );
};

export default Footer;