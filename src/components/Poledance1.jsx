import pll1 from "../assets/pll1.jpg";
import pll2 from "../assets/pll2.jpg";
import pll3 from "../assets/pll3.jpg";

export default function PoleGallery() {
  return (
    <section className="w-full bg-black text-white overflow-hidden">

      {/* ================= TOP BLACK SECTION ================= */}
      <div className="relative bg-[#111111] py-20 px-6 md:px-16">

        {/* DARK SHAPE */}
        <div
          className="
          absolute
          bottom-0
          right-0
          w-[300px]
          h-[120px]
          bg-black/30
          "
          style={{
            clipPath: "polygon(100% 0, 0 100%, 100% 100%)",
          }}
        ></div>

        <div className="max-w-5xl mx-auto">

          {/* TOP CONTENT */}
          <div className="grid md:grid-cols-2 gap-10 items-start">

            {/* LEFT */}
            <div>
              <h2
                className="
                text-right
                text-[32px]
                sm:text-[35px]
                md:text-[45px]
                leading-[1]
                uppercase
                font-light
                tracking-[0.03em]
                "
              >
                COUNT EVERY SECOND
                <br />
                UNTIL THE EVENT
              </h2>
            </div>

            {/* RIGHT */}
            <div>
              <p
                className="
                text-gray-400
                text-[16px]
                md:text-[18px]
                leading-relaxed
                max-w-lg
                "
              >
                Lorem ipsum proin gravida velit auctor aliquet.
                Aenean sollicitudin, lorem auci elit consequat
                ipsutiss em niuis sed odio sit amet a sit amet.
              </p>
            </div>
          </div>

          {/* INPUT + BUTTON */}
          <div className="mt-14 flex flex-col md:flex-row gap-4 max-w-3xl mx-auto">

            <input
              type="email"
              placeholder="e-mail"
              className="
              flex-1
              bg-transparent
              border
              border-pink-500
              px-6
              py-4
              text-white
              outline-none
              text-base
              placeholder:text-gray-400
              "
            />

            <button
              className="
              bg-pink-500
              hover:bg-white
              hover:text-black
              text-white
              uppercase
              tracking-[0.2em]
              font-semibold
              px-10
              py-4
              transition
              duration-300
              "
            >
              Participate
            </button>
          </div>
        </div>
      </div>

      {/* ================= GALLERY SECTION ================= */}
      <div className="grid grid-cols-1 md:grid-cols-4">

        {/* LEFT CONTENT */}
        <div className="bg-pink-500 text-white flex flex-col justify-center px-8 py-14">

          <h2
            className="
            text-3xl
            md:text-4xl
            font-light
            uppercase
            leading-tight
            "
          >
            Our Gallery
          </h2>

          <p
            className="
            mt-6
            text-[15px]
            leading-relaxed
            text-white/90
            "
          >
            Etiam rhoncus. Maecenas tempus, tellus eget condime
            rhoncus, sem quam semper libero, sit amet adi
            pissing sem neque sed ipsum.
          </p>

          <button
            className="
            mt-8
            flex
            items-center
            gap-3
            uppercase
            tracking-[0.2em]
            font-semibold
            hover:translate-x-2
            transition
            duration-300
            "
          >
            <span className="text-2xl">→</span>
            Explore
          </button>
        </div>

        {/* IMAGE 1 */}
        <div className="overflow-hidden group h-[350px] cursor-pointer">
          <img
            src={pll1}
            alt=""
            className="
            w-full
            h-full
            object-cover
            group-hover:scale-110
            transition
            duration-700
            "
          />
        </div>

        {/* IMAGE 2 */}
        <div className="overflow-hidden group h-[350px] cursor-pointer">
          <img
            src={pll2}
            alt=""
            className="
            w-full
            h-full
            object-cover
            group-hover:scale-110
            transition
            duration-700
            "
          />
        </div>

        {/* IMAGE 3 */}
        <div className="overflow-hidden group h-[350px] relative cursor-pointer">
          <img
            src={pll3}
            alt=""
            className="
            w-full
            h-full
            object-cover
            group-hover:scale-110
            transition
            duration-700
            "
          />

          {/* SMALL TRIANGLE */}
          
        </div>
      </div>
    </section>
  );
}