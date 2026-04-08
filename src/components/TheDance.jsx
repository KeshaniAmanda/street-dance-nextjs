import React from "react";
import { Phone, MapPin, Mail } from "lucide-react";

const thedance = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">

      {/* 🔥 TOP CONTENT */}
      <div className="flex-1 px-6 md:px-16 py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          THE DANCE
        </h1>

        <p className="text-gray-400 max-w-2xl">
          Welcome to The Dance page. This section showcases urban dance culture,
          performances, and creative movement. Add your own content, images,
          and sections here.
        </p>
      </div>

      {/* 🔥 FOOTER */}
      <footer className="bg-[#0f0f0f] text-gray-300">

        <div className="grid md:grid-cols-4 gap-10 px-6 md:px-16 py-16">

          {/* ABOUT */}
          <div>
            <h3 className="text-white font-semibold mb-6 tracking-wider">
              ABOUT US
            </h3>

            <p className="text-sm leading-relaxed mb-6">
              Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
            </p>

            <div className="space-y-4 text-sm">
              <a href="tel:167712444227" className="flex items-center gap-3 group">
                <Phone size={16} className="text-yellow-400" />
                <span className="group-hover:text-yellow-400">
                  1-677-124-44227
                </span>
              </a>

              <a href="https://maps.google.com/?q=184 Main Collins Street" target="_blank" className="flex items-center gap-3 group">
                <MapPin size={16} className="text-yellow-400" />
                <span className="group-hover:text-yellow-400">
                  184 Main Collins Street
                </span>
              </a>

              <a href="mailto:vibez@example.com" className="flex items-center gap-3 group">
                <Mail size={16} className="text-yellow-400" />
                <span className="group-hover:text-yellow-400">
                  vibez@example.com
                </span>
              </a>
            </div>
          </div>

          {/* EMPTY BLOCKS (same as yours) */}
          <div>
            <h3 className="text-white font-semibold mb-6 tracking-wider">
              LATEST TWEETS
            </h3>
            <p className="text-sm">Couldn't connect with Twitter</p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 tracking-wider">
              LATEST POSTS
            </h3>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 tracking-wider">
              INSTAGRAM
            </h3>
          </div>

        </div>

        <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-400">
          © 2017 QODE INTERACTIVE
        </div>

      </footer>
    </div>
  );
};

export default thedance;