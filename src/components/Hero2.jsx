import Hbg from "../assets/Hbg.jpg";

export default function Hero2() {
  return (
    <div className="w-full">

      {/* 🔹 TOP LIGHT SECTION */}
      <section className="bg-gray-100 py-36 px-6 md:px-20">
        <div className="grid md:grid-cols-2 gap-1 items-center">

          {/* LEFT TEXT */}
          <p className="text-gray-500 leading-relaxed max-w-md text-right ml-auto">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit nean commodo
            ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus
            et magnis dis
          </p>

          {/* RIGHT TITLE */}
          <h2 className="text-black text-xl md:text-4xl font-light uppercase tracking-wide leading-tight">
            Keep Track Of
            <span className="font-semibold"> Our Amazing </span> <br />
            <span className="font-semibold">Upcoming</span> Events
          </h2>

        </div>

        {/* EMPTY MESSAGE */}
        <p className="text-gray-400 mt-16">
          Sorry, no posts matched your criteria.
        </p>
      </section>


      {/* 🔹 DARK SECTION */}
      <section
        className="py-28 px-6 md:px-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Hbg})` }}
      >
        <div className="grid md:grid-cols-2 gap-6 items-center">

          {/* LEFT TITLE */}
          <h2 className="text-white text-xl md:text-4xl font-light uppercase tracking-wide leading-tight text-right ml-auto">
            <span className="font-semibold">Meeting Our</span> Amazing <br />
            <span className="font-semibold">Dance</span>
            <span className="font-semibold"> Teachers</span>
          </h2>

          {/* RIGHT TEXT */}
          <p className="text-gray-400 leading-relaxed max-w-md">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit nean commodo
            ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus
            et magnis dis
          </p>

        </div>
      </section>

    </div>
  );
}