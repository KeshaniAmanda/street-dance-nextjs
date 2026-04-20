import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

import team1 from "../assets/team1.jpg";
import team2 from "../assets/team2.jpg";
import team3 from "../assets/team3.jpg";
import team4 from "../assets/team4.jpg";

const team = [
  {
    img: team1,
    name: "DAVID HARRISON",
    role: "Choreographer",
    socials: {
      facebook: "https://www.facebook.com/",
      twitter: "https://twitter.com/",
      instagram: "https://www.instagram.com/",
    },
  },
  {
    img: team2,
    name: "ANNA SMITH",
    role: "Dancer",
    socials: {
      facebook: "https://www.facebook.com/",
      twitter: "https://twitter.com/",
      instagram: "https://www.instagram.com/",
    },
  },
  {
    img: team3,
    name: "JOHN DOE",
    role: "Instructor",
    socials: {
      facebook: "https://www.facebook.com/",
      twitter: "https://twitter.com/",
      instagram: "https://www.instagram.com/",
    },
  },
  {
    img: team4,
    name: "EMMA WATSON",
    role: "Performer",
    socials: {
      facebook: "https://www.facebook.com/",
      twitter: "https://twitter.com/",
      instagram: "https://www.instagram.com/",
    },
  },
];

const DS4 = () => {
  return (
    <div className="w-full">

      <section className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">

          {team.map((member, index) => (
            <div
              key={index}
              className="relative group overflow-hidden h-[380px] md:h-[420px]"
            >

              {/* IMAGE */}
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-center px-4">

                {/* NAME */}
                <h3 className="text-white text-xl font-semibold tracking-wide">
                  {member.name}
                </h3>

                {/* ROLE */}
                <p className="text-gray-300 text-sm mt-2">
                  {member.role}
                </p>

                {/* SOCIAL ICONS */}
                <div className="flex gap-4 mt-4 text-lg">

                  <a
                    href={member.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-green-400 transition"
                  >
                    <FaFacebookF />
                  </a>

                  <a
                    href={member.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-green-400 transition"
                  >
                    <FaTwitter />
                  </a>

                  <a
                    href={member.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-green-400 transition"
                  >
                    <FaInstagram />
                  </a>

                </div>
              </div>

            </div>
          ))}

        </div>
      </section>

    </div>
  );
};

export default DS4;