import lp1 from "../assets/lp1.jpg";
import lp2 from "../assets/lp2.jpg";
import lp3 from "../assets/lp3.jpg";

export default function DanceClasses() {
  const classes = [
    {
      id: 1,
      title: "AERIAL DANCING",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit nean sit eget commodo ligula.",
      img: lp1,
    },
    {
      id: 2,
      title: "POLE DANCING",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit nean sit eget commodo ligula.",
      img: lp2,
    },
    {
      id: 3,
      title: "AERIAL RING DANCING",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit nean sit eget commodo ligula.",
      img: lp3,
    },
  ];

  return (
    <section className="w-full bg-[#f5f5f5] py-16 px-4 md:px-10 overflow-hidden">

      {/* ================= TOP TEXT ================= */}
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-2 gap-1 items-start">

          {/* LEFT TEXT */}
          <div>
            <p
              className="
              text-gray-400
              text-right
              text-[17px]
              leading-relaxed
              max-w-lg
              md:text-left
              "
            >
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit
              nean commodo ligula eget dolor. Aenean massa. Cum
              sociis Theme natoque penatibus et magnis dis.
            </p>
          </div>

          {/* RIGHT TITLE */}
          <div>
            <h2
              className="
              text-[28px]
              sm:text-[35px]
              md:text-[45px]
              uppercase
              leading-[1]
              font-light
              tracking-[0.02em]
              text-black
              text-center
              md:text-left
              "
            >
              CHOOSE THE <span className="font-semibold">RIGHT CLASS</span>
              <br />
              AND CHANGE YOUR LIFE
            </h2>
          </div>
        </div>

        {/* ================= CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">

          {classes.map((item) => (
            <div key={item.id} className="group cursor-pointer">

              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="
                  w-full
                  h-[300px]
                  object-cover
                  group-hover:scale-105
                  transition
                  duration-700
                  "
                />
              </div>

              {/* CONTENT */}
              <div className="mt-5">

                <h3
                  className="
                  text-[20px]
                  uppercase
                  tracking-[0.03em]
                  font-light
                  text-black
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                  mt-3
                  text-gray-500
                  text-[14px]
                  leading-relaxed
                  "
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

  
      </div>
    </section>
  );
}