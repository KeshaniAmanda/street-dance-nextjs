import React, { useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

import md8 from "../assets/md8.jpg";

export default function DanceCampSection() {
  const navigate = useNavigate();

  // VIDEO MODAL STATE
  const [openVideo, setOpenVideo] = useState(false);

  return (
    <>
      <section className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-[320px]">

        {/* LEFT IMAGE */}
        <div className="relative overflow-hidden group h-[500px] lg:h-[550px]">

          <img
            src={md8}
            alt="dance"
            className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/20"></div>

          {/* PLAY BUTTON */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              onClick={() => setOpenVideo(true)}
              className="w-[95px] h-[95px] rounded-full border-4 border-white flex items-center justify-center cursor-pointer hover:scale-110 transition duration-300 bg-white/10 backdrop-blur-sm"
            >
              <div className="w-0 h-0 border-t-[16px] border-t-transparent border-b-[16px] border-b-transparent border-l-[24px] border-l-white ml-2"></div>
            </div>
          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div className="bg-[#111] text-white flex items-center px-8 md:px-16 py-16">

          <div className="max-w-[600px]">

            <h2 className="uppercase text-[34px] md:text-[30px] leading-[1.1] font-light mb-8">
              <span className="font-bold">Dance</span> Competition Camp.
              <br />
              Train Your <span className="font-bold">Skills To The Max.</span>
            </h2>

            <p className="text-[#9b9b9b] text-[17px] leading-[2] mb-10">
              Lorem Ipsum gravida nibh vel velit auctor aliquet.
              Aenean sollicitudin, lorem quis bibendum auci elit
              consequat ipsutis sem niuis sed odio sit amet nibh
              vulputate cursus a sit amet mauris.
            </p>

            {/* BUTTON */}
            <button
              onClick={() => navigate("/contactus")}
              className="group flex items-center gap-3 uppercase tracking-[3px] text-[14px] font-semibold text-pink-500 hover:text-white transition duration-300"
            >

              <ArrowRight
                size={20}
                className="group-hover:translate-x-2 transition duration-300"
              />

              Participate

            </button>

          </div>

        </div>

      </section>

      {/* VIDEO MODAL */}
      {openVideo && (
        <div className="fixed inset-0 z-[9999] bg-black/80 flex items-center justify-center px-4">

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setOpenVideo(false)}
            className="absolute top-6 right-6 text-white hover:text-pink-500 transition"
          >
            <X size={38} />
          </button>

          {/* VIDEO */}
          <div className="relative w-full max-w-5xl aspect-video">

            <iframe
              src="https://player.vimeo.com/video/167769701?autoplay=1"
              title="Vimeo Video"
              allow="autoplay; fullscreen"
              allowFullScreen
              className="w-full h-full rounded-md"
            ></iframe>

          </div>

        </div>
      )}
    </>
  );
}