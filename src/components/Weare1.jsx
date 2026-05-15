import React from "react";
import {
  Phone,
  MapPin,
  Mail,
  Instagram,
  Youtube,
  Facebook,
  Music2,
} from "lucide-react";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-[#050505] text-gray-300 overflow-hidden">

      {/* BG GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#ffb347]/10 blur-3xl rounded-full"></div>

      {/* TOP */}
      <div className="relative z-10 border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6 md:px-14 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* ABOUT */}
          <div className="animate-fadeUp">

            <h3 className="text-white text-lg font-semibold uppercase tracking-[0.2em] mb-6">
              Vibez
            </h3>

            <p className="text-sm leading-[2] text-gray-400 mb-6">
              Experience the rhythm of urban culture with freestyle battles,
              street performances, dance workshops, and unforgettable energy.
            </p>

            {/* SOCIALS */}
            <div className="flex gap-3">

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#ffb347] hover:text-black transition duration-300"
              >
                <Instagram size={16} />
              </a>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#ffb347] hover:text-black transition duration-300"
              >
                <Youtube size={16} />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#ffb347] hover:text-black transition duration-300"
              >
                <Facebook size={16} />
              </a>

              <a
                href="https://open.spotify.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#ffb347] hover:text-black transition duration-300"
              >
                <Music2 size={16} />
              </a>

            </div>
          </div>

          {/* CONTACT */}
          <div className="animate-fadeUp delay-200">

            <h3 className="text-white text-lg font-semibold uppercase tracking-[0.2em] mb-6">
              Contact
            </h3>

            <div className="space-y-5 text-sm">

              <a
                href="tel:167712444227"
                className="flex items-start gap-4 group"
              >
                <Phone
                  size={18}
                  className="text-[#ffb347] mt-[2px]"
                />

                <span className="text-gray-400 group-hover:text-[#ffb347] transition duration-300">
                  +1 677 124 44227
                </span>
              </a>

              <a
                href="https://maps.google.com/?q=184 Main Collins Street"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <MapPin
                  size={18}
                  className="text-[#ffb347] mt-[2px]"
                />

                <span className="text-gray-400 group-hover:text-[#ffb347] transition duration-300 leading-relaxed">
                  184 Main Collins Street,
                  <br />
                  New York, USA
                </span>
              </a>

              <a
                href="mailto:vibez@example.com"
                className="flex items-start gap-4 group"
              >
                <Mail
                  size={18}
                  className="text-[#ffb347] mt-[2px]"
                />

                <span className="text-gray-400 group-hover:text-[#ffb347] transition duration-300">
                  vibez@example.com
                </span>
              </a>

            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="animate-fadeUp delay-300">

            <h3 className="text-white text-lg font-semibold uppercase tracking-[0.2em] mb-6">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4 text-sm">

              <Link
                to="/"
                className="text-gray-400 hover:text-[#ffb347] transition duration-300"
              >
                Home
              </Link>

              <Link
                to="/hiphop"
                className="text-gray-400 hover:text-[#ffb347] transition duration-300"
              >
                Hip Hop
              </Link>

              <Link
                to="/battle"
                className="text-gray-400 hover:text-[#ffb347] transition duration-300"
              >
                Dance Battle
              </Link>

              <Link
                to="/crew"
                className="text-gray-400 hover:text-[#ffb347] transition duration-300"
              >
                Crew Competition
              </Link>

              <Link
                to="/contact"
                className="text-gray-400 hover:text-[#ffb347] transition duration-300"
              >
                Contact
              </Link>

            </div>
          </div>

          {/* NEWSLETTER */}
          <div className="animate-fadeUp delay-500">

            <h3 className="text-white text-lg font-semibold uppercase tracking-[0.2em] mb-6">
              Newsletter
            </h3>

            <p className="text-sm text-gray-400 leading-[2] mb-6">
              Subscribe and stay updated with our latest dance events,
              freestyle battles, and workshops.
            </p>

            {/* INPUT */}
            <div className="relative">

              <input
                type="email"
                placeholder="Your Email"
                className="w-full h-12 bg-white/5 border border-white/10 px-5 text-sm text-white outline-none focus:border-[#ffb347] transition duration-300"
              />

              <button
                className="absolute top-1/2 right-4 -translate-y-1/2 text-[#ffb347] text-xs uppercase tracking-[0.2em] hover:translate-x-1 transition duration-300"
              >
                Send →
              </button>

            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM */}
      <div className="relative z-10 py-6 px-6 border-t border-white/5">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-xs sm:text-sm text-gray-500 tracking-[0.15em] uppercase">
            © 2026 Vibez Dance Studio
          </p>

          <p className="text-xs sm:text-sm text-gray-600">
            Designed For Urban Dance Culture
          </p>

        </div>
      </div>

      {/* ANIMATIONS */}
      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeUp {
          animation: fadeUp 1s ease forwards;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </footer>
  );
};

export default Footer;