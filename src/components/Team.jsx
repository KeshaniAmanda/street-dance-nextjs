import React from "react";
import Hero10 from "./Hero10";

import {
  Instagram,
  Facebook,
  Twitter,
  ArrowRight,
  Sparkles,
  Trophy,
  Star,
} from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "ALEX RAY",
      role: "Hip Hop Instructor",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
    },
    {
      name: "SOPHIA JAMES",
      role: "Contemporary Coach",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    },
    {
      name: "MICHAEL LEE",
      role: "Breakdance Trainer",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop",
    },
    {
      name: "EMMA WILSON",
      role: "Ballet Instructor",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1974&auto=format&fit=crop",
    },
  ];

  return (
    <div className="w-full overflow-hidden bg-black text-white">
      {/* HERO SECTION */}
      <section
        className="relative h-[85vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/75"></div>

        {/* ORANGE GLOW */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-orange-500/30 blur-3xl rounded-full animate-pulse"></div>

        <div className="absolute bottom-10 right-10 w-72 h-72 bg-yellow-500/20 blur-3xl rounded-full animate-pulse"></div>

        <div className="relative z-10 text-center px-6">
          <p className="uppercase tracking-[6px] text-orange-400 mb-5 text-sm">
            Meet Our Team
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight max-w-5xl mx-auto">
            PROFESSIONAL
            <span className="block text-orange-500">
              DANCE INSTRUCTORS
            </span>
          </h1>

          <p className="mt-8 text-gray-300 max-w-2xl mx-auto leading-8">
            Passionate trainers, choreographers, and performance experts helping
            dancers grow with confidence and creativity.
          </p>

          <button className="mt-10 px-10 py-4 bg-orange-500 hover:bg-orange-600 rounded-full font-bold flex items-center gap-3 mx-auto duration-300">
            Explore Team
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-24 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[5px] text-orange-400 mb-4">
              Our Experts
            </p>

            <h2 className="text-4xl md:text-6xl font-black">
              THE CREATIVE
              <span className="text-orange-500"> CREW</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[35px] bg-black border border-white/10 hover:border-orange-500 duration-500"
              >
                {/* IMAGE */}
                <div className="overflow-hidden h-[450px]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 duration-700"
                  />
                </div>

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                {/* CONTENT */}
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <p className="text-orange-400 text-sm tracking-[3px] uppercase">
                    {member.role}
                  </p>

                  <h3 className="text-2xl font-black mt-2">
                    {member.name}
                  </h3>

                  {/* SOCIALS */}
                  <div className="flex gap-3 mt-5">
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-orange-500 duration-300 cursor-pointer">
                      <Instagram size={18} />
                    </div>

                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-orange-500 duration-300 cursor-pointer">
                      <Facebook size={18} />
                    </div>

                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-orange-500 duration-300 cursor-pointer">
                      <Twitter size={18} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-orange-500/20 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-500/20 blur-3xl rounded-full"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#111111] border border-white/10 rounded-[35px] p-10 hover:-translate-y-3 duration-500 hover:border-orange-500">
              <div className="text-orange-500 mb-6">
                <Trophy size={40} />
              </div>

              <h3 className="text-3xl font-black mb-4">
                120+ Championships
              </h3>

              <p className="text-gray-400 leading-8">
                Award-winning dancers trained by professional choreographers.
              </p>
            </div>

            <div className="bg-[#111111] border border-white/10 rounded-[35px] p-10 hover:-translate-y-3 duration-500 hover:border-orange-500">
              <div className="text-orange-500 mb-6">
                <Sparkles size={40} />
              </div>

              <h3 className="text-3xl font-black mb-4">
                Creative Choreography
              </h3>

              <p className="text-gray-400 leading-8">
                Modern and stylish dance routines designed for all skill levels.
              </p>
            </div>

            <div className="bg-[#111111] border border-white/10 rounded-[35px] p-10 hover:-translate-y-3 duration-500 hover:border-orange-500">
              <div className="text-orange-500 mb-6">
                <Star size={40} />
              </div>

              <h3 className="text-3xl font-black mb-4">
                Professional Mentors
              </h3>

              <p className="text-gray-400 leading-8">
                Friendly instructors helping students become confident dancers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LARGE IMAGE */}
      <section
        className="relative h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 text-center px-6">
          <p className="uppercase tracking-[5px] text-orange-400 mb-5">
            Dance Together
          </p>

          <h2 className="text-4xl md:text-6xl font-black leading-tight max-w-4xl">
            WE TURN PASSION
            <span className="text-orange-500 block">
              INTO PERFORMANCE
            </span>
          </h2>

          <button className="mt-10 px-10 py-4 bg-orange-500 hover:bg-orange-600 rounded-full font-bold duration-300">
            Join Our Team
          </button>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0f0f0f] text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-orange-500/20 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-500/20 blur-3xl rounded-full"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <p className="uppercase tracking-[5px] text-orange-400 mb-4">
            Start Dancing
          </p>

          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            JOIN OUR CREATIVE
            <span className="text-orange-500 block">
              DANCE FAMILY
            </span>
          </h2>

          <p className="mt-8 text-gray-300 leading-8">
            Learn from professionals, perform on stage, and build confidence
            through movement and creativity.
          </p>

          <button className="mt-10 px-10 py-4 bg-orange-500 hover:bg-orange-600 rounded-full font-bold duration-300">
            Get Started
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <Hero10 />
    </div>
  );
};

export default Team;