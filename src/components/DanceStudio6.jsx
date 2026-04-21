import blog1 from "../assets/blog-post.jpg";
import blog2 from "../assets/blog-post-6.jpg";
import blog3 from "../assets/blog-post-5.jpg";

import arrow1 from "../assets/arrow-img-1.png";
import arrow2 from "../assets/arrow-img-2.png";
import arrow3 from "../assets/arrow-img-3.png";

import { FaCalendarAlt, FaUser } from "react-icons/fa"; // ✅ icons

export default function DS6() {
  return (
    <div className="w-full bg-gray-50">

      {/* ===== BLOG SECTION ===== */}
      <section className="px-10 py-32">
        
        <div className="mb-12 flex flex-col md:flex-row items-center justify-center gap-4">

  {/* LEFT SIDE TEXT */}
  <p className="text-gray-500 max-w-xl text-right">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit< br/>
nean commodo ligula eget dolor. Aenean massa. Cum < br/>
sociis Theme natoque penatibus et magnis dis
  </p>

  {/* RIGHT SIDE HEADING */}
  <h2 className="text-3xl md:text-3xl font-light tracking-wide text-black text-left">
   <span className="font-bold">FOLLOW OUR</span> <span className="font-bold">BLOG</span> AND <br />
  KEEP UP WITH <span className="font-bold">THE LATEST NEWS</span>
  </h2>

</div>

        {/* BLOG CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          {[blog1, blog2, blog3].map((img, i) => (
            <div key={i} className="space-y-4">

              <img src={img} alt="blog" className="w-full h-56 object-cover" />

              {/* ✅ ICON ROW */}
              <div className="text-sm text-gray-400 flex gap-6 items-center">

                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-[#19c2a0] text-sm" />
                  <span>September 20, 2016</span>
                </div>

                <div className="flex items-center gap-2">
                  <FaUser className="text-[#19c2a0] text-sm" />
                  <span>By admin</span>
                </div>

              </div>

              <h3 className="text-xl font-semibold uppercase tracking-wide text-black">
                {i === 0 && "PERFECT IMPERFECT"}
                {i === 1 && "WILD AT HEART"}
                {i === 2 && "HOW TO DO CLASSIC"}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed">
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
              </p>

              <button className="text-[#19c2a0] text-sm font-semibold flex items-center gap-2 hover:gap-3 transition">
                → READ MORE
              </button>

            </div>
          ))}

        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="bg-white py-20 px-10 flex flex-col md:flex-row items-center justify-center gap-4">

        <div>
          <h2 className="text-2xl md:text-4xl font-light leading-tight text-black text-right">
            OUR ENSEMBLE IS <span className="font-bold">TAKING</span> <br />
  <span className="font-bold">OVER THE WORLD</span> JOIN NOW
          </h2>
        </div>

        <div className="relative max-w-md">
          <p className="text-gray-500 leading-relaxed text-left">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit< br/>
nean commodo ligula eget dolor. Aenean massa. Cum < br/>
sociis Theme natoque penatibus et magnis dis
          </p>

          <div className="absolute right-0 top-0 flex gap-4 opacity-80">
            <img src={arrow1} alt="arrow" className="w-12" />
            <img src={arrow2} alt="arrow" className="w-12" />
            <img src={arrow3} alt="arrow" className="w-12" />
          </div>
        </div>

      </section>

    </div>
  );
}