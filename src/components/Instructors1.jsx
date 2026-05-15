import React from "react";

import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";

import {
  ArrowRight,
  Sparkles,
  Trophy,
  Star,
} from "lucide-react";

const instructors = [
  {
    id: 1,
    name: "JACK GRIFIT",
    role: "Hip Hop Coach",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",

    instagram: "https://www.instagram.com/",
    twitter: "https://twitter.com/",
    facebook: "https://facebook.com/",
  },

  {
    id: 2,
    name: "ANTONIA JOHNSON",
    role: "Modern Dance Trainer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",

    instagram: "https://www.instagram.com/",
    twitter: "https://twitter.com/",
    facebook: "https://facebook.com/",
  },

  {
    id: 3,
    name: "JESSICA JUNG",
    role: "Contemporary Instructor",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1974&auto=format&fit=crop",

    instagram: "https://www.instagram.com/",
    twitter: "https://twitter.com/",
    facebook: "https://facebook.com/",
  },
];

export default function MeetInstructors() {
  return (
    <div className="w-full overflow-hidden  text-white">
      {/* HERO SECTION */}
      <section
        className="relative h-[85vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        {/* OVERLAY */}
        <div className="absolute inset-0 "></div>

        {/* GLOW EFFECTS */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-orange-500/20 blur-3xl rounded-full animate-pulse"></div>

        <div className="absolute bottom-10 right-10 w-72 h-72 bg-yellow-500/20 blur-3xl rounded-full animate-pulse"></div>

        {/* CONTENT */}
        <div className="relative z-10 text-center px-6">
          <p className="uppercase tracking-[6px] text-orange-400 text-sm mb-5">
            Meet Our Experts
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight max-w-5xl mx-auto">
            PROFESSIONAL
            <span className="block text-orange-500">
              DANCE INSTRUCTORS
            </span>
          </h1>

          <p className="mt-8 text-gray-300 max-w-2xl mx-auto leading-8">
            Passionate dance mentors helping students become confident
            performers through creativity, movement, and energy.
          </p>

          <button className="mt-10 px-10 py-4 bg-orange-500 hover:bg-orange-600 rounded-full font-bold flex items-center gap-3 mx-auto duration-300 hover:scale-105">
            Explore Team
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center">
          <p className="uppercase tracking-[5px] text-orange-400 mb-4">
            Creative Mentors
          </p>

          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            TRAIN WITH THE
            <span className="text-orange-500"> BEST</span>
          </h2>

          <p className="max-w-3xl mx-auto mt-8 text-gray-400 leading-8">
            Our instructors combine professional performance experience with
            modern choreography to create exciting dance experiences for every
            student.
          </p>
        </div>
      </section>

      {/* INSTRUCTORS */}
      <section className="pb-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 space-y-20">
          {instructors.map((item, index) => (
            <div
              key={item.id}
              className={`grid lg:grid-cols-2 gap-10 items-center ${
                index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* IMAGE */}
              <div className="relative group">
                {/* GLOW */}
                <div className="absolute -inset-3 bg-orange-500/20 blur-2xl rounded-[40px] opacity-0 group-hover:opacity-100 duration-500"></div>

                <div className="relative overflow-hidden rounded-[35px] h-[500px]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 duration-700"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

                  {/* SOCIALS */}
                  <div className="absolute bottom-6 left-6 flex gap-4">
                    <a
                      href={item.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-orange-500 duration-300"
                    >
                      <FaInstagram />
                    </a>

                    <a
                      href={item.twitter}
                      target="_blank"
                      rel="noreferrer"
                      className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-orange-500 duration-300"
                    >
                      <FaTwitter />
                    </a>

                    <a
                      href={item.facebook}
                      target="_blank"
                      rel="noreferrer"
                      className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-orange-500 duration-300"
                    >
                      <FaFacebookF />
                    </a>
                  </div>
                </div>
              </div>

              {/* CONTENT */}
              <div>
                <p className="uppercase tracking-[5px] text-orange-400 mb-4">
                  {item.role}
                </p>

                <h2 className="text-5xl md:text-6xl font-black leading-tight">
                  {item.name.split(" ")[0]}

                  <span className="block text-orange-500">
                    {item.name.split(" ")[1]}
                  </span>
                </h2>

                <p className="text-gray-400 leading-8 mt-8 text-lg">
                  Learn modern choreography, performance confidence, freestyle
                  movement, and creative stage presence with one of our
                  professional instructors.
                </p>

                {/* FEATURES */}
                <div className="grid sm:grid-cols-3 gap-5 mt-10">
                  <div className="bg-[#111111] border border-white/10 rounded-3xl p-5 hover:border-orange-500 duration-300">
                    <Sparkles
                      className="text-orange-500 mb-3"
                      size={30}
                    />

                    <h4 className="font-bold text-lg">
                      Creative
                    </h4>
                  </div>

                  <div className="bg-[#111111] border border-white/10 rounded-3xl p-5 hover:border-orange-500 duration-300">
                    <Trophy
                      className="text-orange-500 mb-3"
                      size={30}
                    />

                    <h4 className="font-bold text-lg">
                      Champion
                    </h4>
                  </div>

                  <div className="bg-[#111111] border border-white/10 rounded-3xl p-5 hover:border-orange-500 duration-300">
                    <Star
                      className="text-orange-500 mb-3"
                      size={30}
                    />

                    <h4 className="font-bold text-lg">
                      Mentor
                    </h4>
                  </div>
                </div>

                <button className="mt-10 px-8 py-4 bg-orange-500 hover:bg-orange-600 rounded-full font-bold flex items-center gap-3 duration-300 hover:scale-105">
                  View Profile
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-24 overflow-hidden bg-[#0f0f0f]">
        {/* GLOW */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-orange-500/20 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-500/20 blur-3xl rounded-full"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <p className="uppercase tracking-[5px] text-orange-400 mb-4">
            Join Our Studio
          </p>

          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            START YOUR
            <span className="text-orange-500 block">
              DANCE JOURNEY
            </span>
          </h2>

          <p className="mt-8 text-gray-300 leading-8">
            Learn from experienced professionals and become part of a creative
            dance family full of passion and performance.
          </p>

          <button className="mt-10 px-10 py-4 bg-orange-500 hover:bg-orange-600 rounded-full font-bold duration-300 hover:scale-105">
            Join Classes
          </button>
        </div>
      </section>
    </div>
  );
}