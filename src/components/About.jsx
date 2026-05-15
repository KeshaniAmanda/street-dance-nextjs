import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Play,
  ArrowRight,
  Trophy,
  Users,
  Sparkles,
  Music2,
  Star,
} from "lucide-react";

const About = () => {
  const navigate = useNavigate();

  const danceStyles = [
    {
      img: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1974&auto=format&fit=crop",
      title: "BREAKDANCE",
      desc: "Power moves, freezes, and dynamic street style performances.",
    },
    {
      img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1974&auto=format&fit=crop",
      title: "HIP HOP",
      desc: "Energetic choreography inspired by urban culture and music.",
    },
    {
      img: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?q=80&w=1974&auto=format&fit=crop",
      title: "MODERN DANCE",
      desc: "Creative movement and emotional storytelling through dance.",
    },
  ];

  const features = [
    {
      icon: <Music2 size={35} />,
      title: "Professional Trainers",
      text: "Learn from experienced dancers and performance coaches.",
    },
    {
      icon: <Sparkles size={35} />,
      title: "Creative Environment",
      text: "Train in a fun and inspiring atmosphere full of energy.",
    },
    {
      icon: <Users size={35} />,
      title: "Dance Community",
      text: "Join a supportive team that grows and performs together.",
    },
    {
      icon: <Trophy size={35} />,
      title: "Competition Ready",
      text: "Prepare for stage shows, dance battles, and championships.",
    },
  ];

  const stats = [
    {
      number: "10+",
      title: "Years Experience",
    },
    {
      number: "5K+",
      title: "Happy Students",
    },
    {
      number: "120+",
      title: "Awards Won",
    },
    {
      number: "25+",
      title: "Expert Trainers",
    },
  ];

  return (
    <div className="w-full overflow-hidden bg-black text-white">
      {/* HERO SECTION */}
      <section
        className="relative h-[80vh] bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="absolute top-10 left-10 w-44 h-44 bg-orange-500/20 blur-3xl rounded-full animate-pulse"></div>

        <div className="absolute bottom-10 right-10 w-52 h-52 bg-yellow-500/20 blur-3xl rounded-full animate-pulse"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <p className="uppercase tracking-[6px] text-orange-400 text-sm mb-4">
            About Our Studio
          </p>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black leading-tight max-w-5xl">
            WE CREATE
            <span className="text-orange-500 block">
              DANCERS & PERFORMERS
            </span>
          </h1>

          <p className="mt-8 text-gray-300 max-w-2xl leading-8">
            Passion, movement, creativity, and performance all come together in
            one powerful dance experience designed for every level.
          </p>

          <button
            onClick={() => navigate("/")}
            className="mt-8 px-8 py-4 bg-orange-500 hover:bg-orange-600 duration-300 rounded-full flex items-center gap-3 font-semibold"
          >
            Explore Classes
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* TOP CARDS */}
      <section className="py-20 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-14">
            <p className="uppercase tracking-[5px] text-orange-400 mb-4">
              Dance Styles
            </p>

            <h2 className="text-4xl md:text-5xl font-black">
              CHOOSE YOUR STYLE
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {danceStyles.map((item, index) => (
              <div
                key={index}
                onClick={() => navigate("/")}
                className="group cursor-pointer bg-[#151515] rounded-[30px] overflow-hidden hover:-translate-y-3 duration-500"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-[320px] object-cover group-hover:scale-110 duration-700"
                  />
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-bold">{item.title}</h3>

                  <p className="text-gray-400 mt-4 leading-7">
                    {item.desc}
                  </p>

                  <button className="mt-6 text-orange-400 flex items-center gap-2 font-semibold">
                    Learn More
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT IMAGE */}
        <div className="relative h-[500px]">
          <img
            src="https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=1974&auto=format&fit=crop"
            alt="dance"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/30"></div>

          {/* PLAY BUTTON */}
          <div
            onClick={() =>
              window.open(
                "https://player.vimeo.com/video/167769701?autoplay=1",
                "_blank"
              )
            }
            className="absolute inset-0 flex items-center justify-center cursor-pointer"
          >
            <div className="w-24 h-24 rounded-full border-2 border-white flex items-center justify-center hover:scale-110 duration-300 bg-white/10 backdrop-blur-md">
              <Play fill="white" size={35} />
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="bg-orange-500 flex items-center">
          <div className="p-8 md:p-16">
            <p className="uppercase tracking-[5px] text-white/80 mb-4">
              Competition Camp
            </p>

            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              TRAIN YOUR SKILLS
              <span className="block">TO THE MAX</span>
            </h2>

            <p className="mt-8 text-white/90 leading-8 max-w-xl">
              Join our advanced dance camp and master choreography, freestyle,
              teamwork, performance confidence, and stage presence with
              professional guidance.
            </p>

            <button
              onClick={() => navigate("/moderndance")}
              className="mt-10 px-8 py-4 bg-black hover:bg-white hover:text-black duration-300 rounded-full font-semibold flex items-center gap-3"
            >
              Participate Now
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-[#111111] border border-white/10 rounded-[30px] p-10 text-center hover:border-orange-500 duration-300"
            >
              <h2 className="text-5xl font-black text-orange-500">
                {item.number}
              </h2>

              <p className="mt-4 uppercase tracking-[3px] text-sm text-gray-300">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <p className="uppercase tracking-[5px] text-orange-400 mb-4">
              Why Choose Us
            </p>

            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              DANCE WITH PASSION
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-black border border-white/10 rounded-[30px] p-8 hover:-translate-y-3 hover:border-orange-500 duration-500"
              >
                <div className="text-orange-500 mb-6">{item.icon}</div>

                <h3 className="text-2xl font-bold">{item.title}</h3>

                <p className="text-gray-400 mt-5 leading-7">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center">
            <p className="uppercase tracking-[5px] text-orange-400 mb-4">
              Gallery
            </p>

            <h2 className="text-4xl md:text-5xl font-black">
              FEEL THE ENERGY
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <img
              src="https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?q=80&w=1974&auto=format&fit=crop"
              alt=""
              className="h-[450px] w-full object-cover rounded-[30px] hover:scale-[1.03] duration-500"
            />

            <img
              src="https://images.unsplash.com/photo-1504609813442-a8924e83f76e?q=80&w=1974&auto=format&fit=crop"
              alt=""
              className="h-[450px] w-full object-cover rounded-[30px] hover:scale-[1.03] duration-500"
            />

            <img
              src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1974&auto=format&fit=crop"
              alt=""
              className="h-[450px] w-full object-cover rounded-[30px] hover:scale-[1.03] duration-500"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden bg-orange-500">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-72 h-72 bg-black/20 blur-3xl rounded-full"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[5px] text-white/80 mb-4">
            Join The Movement
          </p>

          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            START YOUR DANCE JOURNEY TODAY
          </h2>

          <p className="mt-6 text-white/90 leading-8">
            Discover exciting dance classes, amazing trainers, and a creative
            environment where passion meets performance.
          </p>

          <button
            onClick={() => navigate("/")}
            className="mt-10 px-10 py-4 bg-black hover:bg-white hover:text-black duration-300 rounded-full font-bold"
          >
            Join Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;