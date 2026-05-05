import React, { useRef, useState } from "react";
import { FaPlay, FaPause, FaVolumeUp, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

import bb5 from "../assets/bb5.jpg";
import audioFile from "../assets/bb audio.mp3";

const ImageAudioPlayer = () => {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const current = audioRef.current.currentTime;
    const total = audioRef.current.duration;
    setProgress((current / total) * 100);
  };

  const handleLoaded = () => {
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (e) => {
    const width = e.target.clientWidth;
    const clickX = e.nativeEvent.offsetX;
    const duration = audioRef.current.duration;

    audioRef.current.currentTime = (clickX / width) * duration;
  };

  const formatTime = (time) => {
    if (!time) return "00:00";
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60);
    return `${min}:${sec < 10 ? "0" + sec : sec}`;
  };

  return (
    <div className="w-full flex justify-center mt-6 sm:mt-10">
      <div className="w-full max-w-6xl px-4 sm:px-6">

        {/* 🖼 IMAGE */}
        <img
          src={bb5}
          alt="dance"
          onClick={togglePlay}
          className="
            w-full 
            h-[250px] sm:h-[400px] md:h-[550px] lg:h-[700px] 
            object-cover 
            cursor-pointer
          "
        />

        {/* 🎵 AUDIO */}
        <audio
          ref={audioRef}
          src={audioFile}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoaded}
        />

        {/* 🎧 PLAYER BAR */}
        <div className="
          bg-[#3a3a3a] text-white 
          flex items-center 
          px-3 sm:px-4 
          py-2 sm:py-3 
          gap-2 sm:gap-4 
          flex-wrap
        ">
          <button onClick={togglePlay} className="text-sm sm:text-base">
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>

          <span className="text-xs sm:text-sm">
            {formatTime(audioRef.current?.currentTime)}
          </span>

          <div
            className="flex-1 h-1 bg-gray-500 cursor-pointer relative min-w-[100px]"
            onClick={handleSeek}
          >
            <div
              className="h-1 bg-[#19c2a0]"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <span className="text-xs sm:text-sm">
            {formatTime(duration)}
          </span>

          <FaVolumeUp className="text-sm sm:text-base" />
        </div>

        {/* 🔽 BLOG DETAILS */}
        <div className="mt-6 sm:mt-10 px-1 sm:px-2">

          {/* Meta */}
          <div className="
            text-xs sm:text-sm 
            text-gray-500 
            flex flex-wrap items-center gap-2 
            mb-3 sm:mb-4
          ">
            <span className="hover:text-[#19c2a0] cursor-pointer">
              May 16, 2016
            </span>
            <span>/</span>
            <span>
              By{" "}
              <span className="hover:text-[#19c2a0] cursor-pointer">
                admin
              </span>
            </span>
            <span>/</span>
            <span className="hover:text-[#19c2a0] cursor-pointer">
              2 Comments
            </span>
            <span>/</span>
            <span className="flex items-center gap-1 hover:text-[#19c2a0] cursor-pointer">
              <FaRegHeart /> 1
            </span>
            <span>/</span>
            <span className="hover:text-[#19c2a0] cursor-pointer">
              Dance
            </span>
          </div>

          {/* TITLE */}
          <Link to="/blog-details">
            <h2 className="
              text-lg sm:text-xl md:text-2xl 
              font-semibold mt-3 sm:mt-4 
              tracking-wide 
              hover:text-[#19c2a0] 
              transition duration-300
            ">
              AWESOME SILHOUETTE
            </h2>
          </Link>

          {/* Text */}
          <p className="
            text-gray-500 
            text-sm sm:text-base 
            leading-6 sm:leading-7 
            mt-3 sm:mt-4 
            mb-5 sm:mb-6
          ">
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Etiam rhoncus. Maecenas tempus,
            tellus eget condimentum rhoncus, sem quam semper libero...
          </p>

          {/* READ MORE */}
          <Link
            to="/blog-details"
            className="
              mt-4 sm:mt-6 
              inline-flex items-center gap-2 
              text-[#19c2a0] font-semibold 
              text-sm sm:text-base
              hover:text-black hover:gap-3 
              transition-all duration-300
            "
          >
            → READ MORE
          </Link>

        </div>
      </div>
    </div>
  );
};

export default ImageAudioPlayer;