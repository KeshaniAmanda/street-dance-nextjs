import React from "react";

import oibg from "../assets/oibg.jpg";

import man1 from "../assets/man1.jpg";
import man2 from "../assets/man2.jpg";
import man4 from "../assets/man4.jpg";

import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";

const instructors = [
  {
    id: 1,
    name: "JACK GRIFIT",
    image: man1,
    reverse: false,

    instagram: "https://www.instagram.com/",
    twitter: "https://twitter.com/",
    facebook: "https://facebook.com/",
  },

  {
    id: 2,
    name: "ANTONIA JOHNSON",
    image: man2,
    reverse: true,

    instagram: "https://www.instagram.com/",
    twitter: "https://twitter.com/",
    facebook: "https://facebook.com/",
  },

  {
    id: 3,
    name: "JESSICA JUNG",
    image: man4,
    reverse: false,

    instagram: "https://www.instagram.com/",
    twitter: "https://twitter.com/",
    facebook: "https://facebook.com/",
  },
];

export default function MeetInstructors() {
  return (
    <div className="w-full bg-white">

      {/* HERO SECTION */}
      <section
        className="relative h-[420px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${oibg})`,
        }}
      >
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/50 flex items-center">
          <div className="max-w-7xl mx-auto w-full px-6 lg:px-16 grid lg:grid-cols-2 gap-10 items-center">

            {/* LEFT TEXT */}
            <div className="text-white text-center lg:text-right">
              <p className="text-[13px] lg:text-[15px] leading-7 text-gray-200 max-w-lg ml-auto">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                Theme natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus.
              </p>
            </div>

            {/* RIGHT TITLE */}
            <div>
              <h1 className="text-white uppercase leading-none font-light text-[42px] lg:text-[58px]">
                Meet Our
              </h1>

              <h2 className="text-white uppercase leading-none font-extralight text-[42px] lg:text-[58px] mt-1">
                Dance Instructors
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* INSTRUCTORS */}
      <section>
        {instructors.map((item) => (
          <div
            key={item.id}
            className={`grid lg:grid-cols-2 ${
              item.reverse ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >

            {/* IMAGE */}
            <div className="h-[420px] lg:h-[520px] overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover hover:scale-105 transition duration-700"
              />
            </div>

            {/* CONTENT */}
            <div className="bg-[#0b0b0b] flex items-center justify-center px-8 lg:px-16 py-14">

              <div className="max-w-md">

                <p className="text-[#19c2a0] text-[16px] mb-4">
                  Find the one for you
                </p>

                <h2 className="text-white uppercase text-[42px] lg:text-[56px] leading-[0.95] font-extralight">
                  {item.name.split(" ")[0]}

                  <span className="font-semibold">
                    {" "}
                    {item.name.split(" ")[1]}
                  </span>
                </h2>

                <p className="text-gray-400 text-[15px] lg:text-[16px] leading-8 mt-7">
                  Aliquam lorem ante, dapibus in, viverra quis,
                  feugiat a, tellus. Phasellus viverra nulla ut
                  metus varius laoreet. Quisque rutrum. Aenean
                  imperdiet. Etiam ultricies nisi vel augue.
                  Curabitur ullamcorper ultricies nisi.
                </p>

                {/* SOCIAL ICONS */}
                <div className="flex items-center gap-6 mt-8 text-[#19c2a0] text-[18px]">

                  <a
                    href={item.instagram}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram className="hover:text-white cursor-pointer transition duration-300" />
                  </a>

                  <a
                    href={item.twitter}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaTwitter className="hover:text-white cursor-pointer transition duration-300" />
                  </a>

                  <a
                    href={item.facebook}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebookF className="hover:text-white cursor-pointer transition duration-300" />
                  </a>

                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}