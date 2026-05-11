import React from "react";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

import md6 from "../assets/md6.png";
import md7 from "../assets/md7.png";

export default function DanceInstructors() {
  return (
    <section className="w-full bg-[#f5f5f5] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-24">

        {/* FIRST SECTION */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <div className="relative flex justify-center">
            <img
              src={md6}
              alt="dance"
              className="relative z-10 w-full max-w-[430px] object-contain transition duration-500"
            />
          </div>

          {/* CONTENT */}
          <div className="max-w-lg">
            <h2 className="uppercase text-[30px] md:text-[34px] tracking-wide font-light text-[#1f2230] leading-tight">
              <span className="font-bold">TRAVIS</span> COLDERICHERS
            </h2>

            <p className="text-pink-500 text-[18px] md:text-[20px] mt-2">
              Contemporary dance instructor
            </p>

            <p className="text-[#8b8b8b] text-[15px] md:text-[16px] leading-[1.9] mt-7">
              Lorem ipsum proin gravida nibh vel velit auctor aliquet.
              Aenean sollicitudin, lorem auci elit consequat ipsutissem
              niuis sed odio sit amet nibh vulputate cursus a sit amet.
              Etiam rhoncus. Maecenas tempus, tellus eget condimentum
              rhoncus, sem quam semper libero, sit amet adipiscing sem
              neque sed ipsum. Donec vitae sapien ut libero venenatis bus.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-5 mt-8 text-[#9b9b9b] text-[17px]">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="hover:text-pink-500 cursor-pointer transition duration-300" />
              </a>

              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="hover:text-pink-500 cursor-pointer transition duration-300" />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="hover:text-pink-500 cursor-pointer transition duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* SECOND SECTION */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* CONTENT */}
          <div className="max-w-lg order-2 lg:order-1">
            <h2 className="uppercase text-[30px] md:text-[34px] tracking-wide font-light text-[#1f2230] leading-tight">
              <span className="font-bold">CARISSA</span> LEADGE
            </h2>

            <p className="text-pink-500 text-[18px] md:text-[20px] mt-2">
              Jazz Ballet teacher
            </p>

            <p className="text-[#8b8b8b] text-[15px] md:text-[16px] leading-[1.9] mt-7">
              Lorem ipsum proin gravida nibh vel velit auctor aliquet.
              Aenean sollicitudin, lorem auci elit consequat ipsutissem
              niuis sed odio sit amet nibh vulputate cursus a sit amet.
              Etiam rhoncus. Maecenas tempus, tellus eget condimentum
              rhoncus, sem quam semper libero, sit amet adipiscing sem
              neque sed ipsum. Donec vitae sapien ut libero venenatis bus.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-5 mt-8 text-[#9b9b9b] text-[17px]">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="hover:text-pink-500 cursor-pointer transition duration-300" />
              </a>

              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="hover:text-pink-500 cursor-pointer transition duration-300" />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="hover:text-pink-500 cursor-pointer transition duration-300" />
              </a>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative flex justify-center order-1 lg:order-2">
            <img
              src={md7}
              alt="dance"
              className="relative z-10 w-full max-w-[830px] object-contain transition duration-500"
            />
          </div>
        </div>

      </div>
    </section>
  );
}