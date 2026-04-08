import { useState, useEffect } from "react";
import quoteImg from "../assets/h4a.png";

export default function Hero4() {

  const data = [
    {
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.  Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus phasellus viverra nulla.",
      name: "JAMES NEWBIE",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.  Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus phasellus viverra nulla.",
      name: "PATRICIA ANDERSON",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.  Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus phasellus viverra nulla.",
      name: "DAVID HARRISON",
    },
  ];

  const [index, setIndex] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-white py-20 px-6 flex flex-col items-center justify-center text-center">

      {/* QUOTE IMAGE */}
      <img
        src={quoteImg}
        alt="quote"
        className="w-12 mb-6"
      />

      {/* TEXT */}
      <p className="max-w-2xl text-gray-600 text-sm sm:text-base leading-relaxed mb-6 transition duration-500">
        {data[index].text}
      </p>

      {/* NAME */}
      <h3 className="uppercase tracking-widest text-gray-800 font-semibold mb-6">
        {data[index].name}
      </h3>

      {/* DOTS */}
      <div className="flex gap-2">
        {data.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              i === index ? "bg-gray-400" : "bg-gray-200"
            }`}
          />
        ))}
      </div>

    </section>
  );
}