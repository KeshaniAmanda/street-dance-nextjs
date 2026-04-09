import React from "react";
import c1 from "../assets/comment1.png";
import c2 from "../assets/comment2.png";
import c3 from "../assets/comment3.png";

const comments = [
  {
    id: 1,
    name: "JAMES BURKE",
    date: "September 20, 2016",
    img: c1,
    text: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
  },
  {
    id: 2,
    name: "LISA ATKINS",
    date: "September 20, 2016",
    img: c2,
    text: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
  },
  {
    id: 3,
    name: "TOM WILLIS",
    date: "September 20, 2016",
    img: c3,
    text: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
  },
];

const Perfect2 = () => {
  return (
    <div className="bg-white px-6 md:px-16 py-20 max-w-[1100px]">

      {/* COMMENTS TITLE */}
      <h2 className="text-[16px] tracking-[3px] font-semibold text-black mb-12 ml-40">
        COMMENTS
      </h2>

      {/* COMMENTS LIST */}
      <div className="space-y-14 ml-40">
        {comments.map((c, index) => (
          <div
  key={c.id}
  className={`flex gap-5 items-start 
    ${index === 1 ? "ml-12" : ""}`}
>
            {/* AVATAR */}
            <img
              src={c.img}
              alt={c.name}
              className="w-[55px] h-[55px] rounded-full object-cover"
            />

            {/* CONTENT */}
            <div className="flex-1 relative">

              {/* REPLY (TOP RIGHT) */}
              <button className="absolute right-0 top-0 text-[11px] tracking-[2px] text-[#00c2a8] hover:underline">
                REPLY
              </button>

              {/* DATE */}
              <p className="text-[12px] text-[#00c2a8] mb-2">
                {c.date}
              </p>

              {/* NAME */}
              <h3 className="text-[15px] font-semibold tracking-[1px] text-black mb-2">
                {c.name}
              </h3>

              {/* TEXT */}
              <p className="text-[13px] text-gray-500 leading-7 max-w-[620px]">
                {c.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* POST COMMENT */}
      <div className="mt-24 ml-40">
        <h2 className="text-[16px] tracking-[3px] font-semibold text-black mb-8">
          POST A COMMENT
        </h2>

        <form className="space-y-6 max-w-[800px]">

          {/* TEXTAREA */}
          <textarea
            placeholder="Your comment"
            className="w-full h-[180px] border border-gray-200 p-5 text-[13px] outline-none focus:border-black"
          ></textarea>

          {/* NAME */}
          <input
            type="text"
            placeholder="Your Name"
            className="w-full h-[55px] border border-gray-200 px-5 text-[13px] outline-none focus:border-black"
          />

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Your Email"
            className="w-full h-[55px] border border-gray-200 px-5 text-[13px] outline-none focus:border-black"
          />

          {/* CHECKBOX */}
          <div className="flex items-start gap-2 text-[12px] text-gray-500">
            <input type="checkbox" className="mt-1" />
            <p className="max-w-[600px]">
              Save my name, email, and website in this browser for the next time I comment.
            </p>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="bg-[#00c2a8] text-white px-10 py-3 text-[12px] tracking-[2px] hover:bg-black transition"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default Perfect2;