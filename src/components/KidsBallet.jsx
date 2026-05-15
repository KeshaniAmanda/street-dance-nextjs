import React from "react";

import {
  Sparkles,
  Star,
  Heart,
  Music2,
  ChevronRight,
  Play,
  Award,
  Users,
  Clock3,
  Trophy,
  Camera,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import Hero10 from "./Hero10";

export default function KidsBallet() {
  const programs = [
    {
      title: "Tiny Ballet",
      age: "Age 3 - 5",
      img: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Junior Ballet",
      age: "Age 6 - 8",
      img: "https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Elite Kids",
      age: "Age 9 - 12",
      img: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1200&auto=format&fit=crop",
  ];

  const features = [
    "Professional Ballet Training",
    "Safe Environment",
    "Performance Opportunities",
    "Creative Dance Learning",
  ];

  return (
    <>
      <div className="bg-black overflow-hidden text-white">
        {/* HERO */}
        <section className="relative min-h-screen flex items-center px-6 lg:px-20 py-20">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=1600&auto=format&fit=crop"
              alt=""
              className="w-full h-full object-cover opacity-20"
            />
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto w-full">
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-5 py-2 rounded-full font-semibold mb-8">
                <Sparkles size={18} />
                Kids Ballet Academy
              </div>

              <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
                Grace &
                <span className="text-orange-500 block">
                  Confidence
                </span>
                Through Dance
              </h1>

              <p className="text-lg text-gray-300 leading-relaxed max-w-xl mb-10">
                Professional ballet classes for kids with elegant
                training, creativity, confidence building, and joyful
                learning.
              </p>

              <div className="flex flex-wrap gap-5">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-xl hover:scale-105">
                  Join Now
                </button>

                <button className="flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full shadow-xl font-semibold hover:scale-105 transition-all duration-300">
                  <Play size={18} />
                  Watch Class
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-14">
                <div>
                  <h2 className="text-4xl font-black text-orange-500">
                    15+
                  </h2>
                  <p className="text-gray-400">Years</p>
                </div>

                <div>
                  <h2 className="text-4xl font-black text-orange-500">
                    500+
                  </h2>
                  <p className="text-gray-400">Students</p>
                </div>

                <div>
                  <h2 className="text-4xl font-black text-orange-500">
                    40+
                  </h2>
                  <p className="text-gray-400">Classes</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=1200&auto=format&fit=crop"
                alt=""
                className="rounded-[40px] shadow-2xl h-[750px] w-full object-cover"
              />

              <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-2xl">
                <div className="flex items-center gap-4">
                  <Star className="text-yellow-500" />

                  <div>
                    <h3 className="font-bold text-xl text-black">
                      4.9 Rating
                    </h3>

                    <p className="text-gray-500">
                      Best Ballet School
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-24 px-6 lg:px-20 bg-[#111111]">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <Users className="text-orange-500" size={40} />
                ),
                title: "Friendly Teachers",
              },
              {
                icon: (
                  <Award className="text-orange-500" size={40} />
                ),
                title: "Award Winning",
              },
              {
                icon: (
                  <Clock3 className="text-orange-500" size={40} />
                ),
                title: "Flexible Time",
              },
              {
                icon: (
                  <Heart className="text-orange-500" size={40} />
                ),
                title: "Safe Studio",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-black border border-orange-500/20 rounded-[30px] p-10 text-center shadow-xl hover:-translate-y-3 transition-all duration-500"
              >
                <div className="flex justify-center mb-6">
                  {item.icon}
                </div>

                <h2 className="text-2xl font-bold text-white">
                  {item.title}
                </h2>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section className="py-24 px-6 lg:px-20">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop"
                alt=""
                className="rounded-[40px] shadow-2xl"
              />
            </div>

            <div>
              <div className="inline-flex bg-orange-100 text-orange-600 px-5 py-2 rounded-full font-semibold mb-8">
                About Academy
              </div>

              <h2 className="text-5xl font-black leading-tight mb-8">
                Inspiring Young Dancers Everyday
              </h2>

              <p className="text-lg text-gray-300 leading-relaxed mb-10">
                Our ballet academy helps children develop discipline,
                creativity, confidence, and elegant movement in a fun
                and supportive environment.
              </p>

              <div className="space-y-5">
                {features.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4"
                  >
                    <ChevronRight className="text-orange-500" />

                    <p className="text-lg font-medium text-white">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROGRAMS */}
        <section className="py-24 px-6 lg:px-20 bg-[#111111]">
          <div className="max-w-7xl mx-auto text-center mb-20">
            <h2 className="text-5xl font-black mb-5 text-white">
              Our Programs
            </h2>

            <p className="text-lg text-gray-400">
              Beautiful ballet classes for every age category.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {programs.map((item, index) => (
              <div
                key={index}
                className="group bg-black border border-orange-500/20 rounded-[35px] overflow-hidden shadow-xl hover:-translate-y-4 transition-all duration-500"
              >
                <div className="overflow-hidden h-80">
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-3xl font-bold mb-3 text-white">
                    {item.title}
                  </h3>

                  <p className="text-orange-500 font-semibold mb-6">
                    {item.age}
                  </p>

                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300">
                    Explore
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BANNER */}
        <section className="py-24 px-6 lg:px-20 bg-gradient-to-r from-orange-500 to-amber-500 text-white">
          <div className="max-w-5xl mx-auto text-center">
            <Music2 size={70} className="mx-auto mb-8" />

            <h2 className="text-5xl font-black mb-8">
              Dance • Learn • Shine
            </h2>

            <p className="text-xl text-orange-100 leading-relaxed">
              Every child deserves a magical place where creativity
              and confidence can grow beautifully.
            </p>
          </div>
        </section>

        {/* GALLERY */}
        <section className="py-24 px-6 lg:px-20 bg-black">
          <div className="max-w-7xl mx-auto text-center mb-20">
            <h2 className="text-5xl font-black text-white">
              Gallery Moments
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gallery.map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-[30px] shadow-xl group"
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-80 object-cover group-hover:scale-110 transition-all duration-700"
                />
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="py-24 px-6 lg:px-20 bg-gradient-to-r from-orange-500 to-amber-500 text-white">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-black mb-10">
                Contact Us
              </h2>

              <div className="space-y-8">
                <div className="flex items-center gap-5">
                  <Phone />
                  <p className="text-lg">+94 77 123 4567</p>
                </div>

                <div className="flex items-center gap-5">
                  <Mail />
                  <p className="text-lg">
                    hello@kidsballet.com
                  </p>
                </div>

                <div className="flex items-center gap-5">
                  <MapPin />
                  <p className="text-lg">
                    Colombo, Sri Lanka
                  </p>
                </div>
              </div>
            </div>

            <form className="bg-white p-10 rounded-[35px] shadow-2xl space-y-6 text-gray-800">
              <input
                type="text"
                placeholder="Parent Name"
                className="w-full px-5 py-4 rounded-2xl border border-orange-200 outline-none focus:border-orange-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-5 py-4 rounded-2xl border border-orange-200 outline-none focus:border-orange-500"
              />

              <textarea
                rows="5"
                placeholder="Message"
                className="w-full px-5 py-4 rounded-2xl border border-orange-200 outline-none focus:border-orange-500"
              ></textarea>

              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl font-bold transition-all duration-300">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <Hero10 />
    </>
  );
}