import React from "react";
import lp4 from "../assets/lp4.jpg";

export default function TeacherSection() {
  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat py-16 px-6 md:px-12"
      style={{
        backgroundImage: `url(${lp4})`,
      }}
    >
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-1 items-center">
        
  {/* LEFT TITLE */}
  <div>
    <h2 className="text-[24px] md:text-[42px] leading-[1.1] font-light uppercase text-[#222] max-w-2xl">
      Meeting Our Amazing
      <br />
      Aerial Dance Teacher
    </h2>
  </div>

  {/* RIGHT TEXT */}
  <div>
    <p className="text-gray-500 text-[14px] md:text-[16px] leading-[1.9] max-w-md">
      Lorem ipsum proin gravida velit auctor aliquet. Aenean
      sollicitu din, lorem auci elit consequat ipsutissem niuis
      sed odio sit amet a sit amet.
    </p>
  </div>


      </div>
    </section>
  );
}