import React from "react";
import aboutImg from "../assets/aboutus.jpg";

const AboutUs = () => {
  return (
    <div className="w-full bg-[#f7f7f7]">

      {/* HERO SECTION */}
      <div
        className="relative w-full h-[520px] bg-cover bg-center mt-6"
        style={{ backgroundImage: `url(${aboutImg})` }}
      >
        {/* DARK OVERLAY */}
        <div className="absolute inset-0  flex items-center">
          <div className="max-w-7xl mx-auto px-6 md:px-16 grid md:grid-cols-2 gap-10 w-full items-center">

            {/* LEFT TEXT */}
            <p className="text-gray-300 text-[14px] leading-7 max-w-2xl text-right ">
              Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus<br/>
              viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.<br/>
              Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi
            </p>
            

            {/* RIGHT TITLE */}
            <div className="text-left -ml-6">
              <h1 className="text-white text-4xl md:text-5xl leading-tight">
  <span className="font-bold">ABOUT US</span> AND DANCE
</h1>

<h2 className="text-white text-4xl md:text-5xl mt-2">
  GET TO <span className="font-bold">KNOW ME</span>
</h2>
            </div>

          </div>
        </div>
      </div>

      {/* FILTER BUTTONS */}
      <div className="flex flex-wrap gap-4 justify-start mt-12 px-6 md:px-16">
        {["ALL EVENTS", "YOGA DANCE", "MODERN DANCE", "BALLET"].map((btn, i) => (
          <button
            key={i}
            className="bg-[#21c7a8] text-white px-6 py-2 text-[12px] tracking-wider hover:bg-[#1bb89b] transition"
          >
            {btn}
          </button>
        ))}
      </div>

      {/* TIMETABLE */}
      <div className="mt-12 px-4 md:px-16 pb-20 ">
        <div className="border border-gray-200 overflow-x-auto bg-white">

          <table className="w-full text-center text-[13px]">

            {/* HEADER */}
            <thead>
              <tr className="bg-white text-gray-500 uppercase text-[11px] tracking-wider text-base">
                <th className="py-8 border-r w-[120px]"></th>

                {["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"].map((day) => (
                  <th key={day} className="py-8 border-r last:border-r-0">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="text-gray-600">

              {/* ROW 1 */}
              <tr className="border-t">
                <td className="py-12 border-r text-gray-400 text-base">
                  09:00 - 10:00
                </td>

                <td className="py-12 border-r text-base">
                  <p className="text-[#21c7a8] font-medium text-base">Ballet</p>
                  <p className="text-gray-400  text-base">Donald Cox</p>
                  <p className="text-gray-400 text-sm mt-1">09:00 <br /> 10:00</p>
                </td>

                <td className="py-12 border-r text-base">
                  <p className="text-[#21c7a8] font-medium text-base">Modern Dance</p>
                  <p className="text-gray-400  text-base">Gloria Parker</p>
                  <p className="text-gray-400 mt-1 text-sm">09:00 <br />10:00</p>
                </td>

                <td className="py-12 border-r text-base">
                  <p className="text-[#21c7a8] font-medium">Ballet</p>
                  <p className="text-gray-400 text-base">Brandon Burns</p>
                  <p className="text-gray-400 text-sm mt-1">09:00 <br /> 10:00</p>
                </td>

                <td className="py-12 border-r"></td>

                <td className="py-12 border-r text-base">
                  <p className="text-[#21c7a8] font-medium">Yoga Dance</p>
                  <p className="text-gray-400 text-base">Michael Lewis</p>
                  <p className="text-gray-400 text-sm mt-1">09:00 <br /> 10:00</p>
                </td>

                <td className="py-12 border-r">
                  <p className="text-[#21c7a8] font-medium">Modern Dance</p>
                  <p className="text-gray-400 text-base">Gloria Parker</p>
                  <p className="text-gray-400 text-sm mt-1">09:00 <br/> 10:00</p>
                </td>

                <td className="py-12"></td>
              </tr>

              {/* ROW 2 */}
              <tr className="border-t text-base">
                <td className="py-12 border-r text-gray-400 text-base">
                  10:00 - 11:00
                </td>

                <td className="py-12 border-r text-base">
                  <p className="text-[#21c7a8]">Yoga Dance</p>
                  <p className="text-gray-400 text-base">Michael Lewis</p>
                  <p className="text-gray-400 text-sm mt-1">09:00 <br/> 10:00</p>
                </td>

                <td className="py-12 border-r text-base">
                  <p className="text-[#21c7a8]">Ballet</p>
                  <p className="text-gray-400 text-base">Lori Valdez</p>
                  <p className="text-gray-400 text-sm mt-1">09:00 <br/> 10:00</p>
                </td>

                <td className="py-12 border-r text-base">
                  <p className="text-[#21c7a8]">Modern Dance</p>
                  <p className="text-gray-400 text-base">Jacob Spencer</p>
                  <p className="text-gray-400 text-sm mt-1">09:00 <br/> 10:00</p>
                </td>

                <td className="py-12 border-r text-base">
                  <p className="text-[#21c7a8]">Yoga Dance</p>
                  <p className="text-gray-400 text-base">Teresa Soto</p>
                  <p className="text-gray-400 text-sm mt-1">09:00 <br/> 10:00</p>
                </td>

                <td className="py-12 border-r text-base">
                  <p className="text-[#21c7a8]">Ballet</p>
                  <p className="text-gray-400 text-base">Donald Cox</p>
                  <p className="text-gray-400 text-sm mt-1">09:00 <br/> 10:00</p>
                </td>

                <td className="py-12 border-r"></td>

                <td className="py-12 text-base">
                  <p className="text-[#21c7a8]">Ballet</p>
                  <p className="text-gray-400 text-base">Lori Valdez</p>
                  <p className="text-gray-400 text-sm mt-1">09:00 <br/> 10:00</p>
                </td>
              </tr>

              {/* ROW 3 */}
              <tr className="border-t text-base">
                <td className="py-12 border-r text-gray-400 text-base">
                  15:00 - 16:00
                </td>

                <td className="py-12 border-r"></td>

                <td className="py-12 border-r text-base">
                  <p className="text-[#21c7a8]">Modern Dance</p>
                  <p className="text-gray-400 text-base">Jacob Spencer</p>
                  <p className="text-gray-400 text-sm mt-1">09:00 <br/> 10:00</p>
                </td>

                <td className="py-12 border-r text-base">
                  <p className="text-[#21c7a8]">Yoga Dance</p>
                  <p className="text-gray-400 text-base">Jacob Spencer</p>
                  <p className="text-gray-400 text-sm mt-1">09:00 <br/> 10:00</p>
                </td>

                <td className="py-12 border-r text-base">
                  <p className="text-[#21c7a8]">Ballet</p>
                  <p className="text-gray-400 text-base">Lori Valdez</p>
                  <p className="text-gray-400 text-sm mt-1">09:00 <br/> 10:00</p>
                </td>

                <td className="py-12 border-r text-base"></td>

                <td className="py-12 border-r text-base">
                  <p className="text-[#21c7a8]">Yoga Dance</p>
                  <p className="text-gray-400 text-base">Nathan Shaw</p>
                  <p className="text-gray-400 text-sm mt-1">09:00 <br/> 10:00</p>
                </td>

                <td className="py-12"></td>
              </tr>

              {/* ROW 4 */}
              <tr className="border-t text-base">
                <td className="py-5 border-r text-gray-400 text-base">
                  18:00 - 19:00
                </td>

                <td className="py-12 border-r text-base">
                  <p className="text-[#21c7a8]">Ballet</p>
                  <p className="text-gray-400 text-base">Lori Valdez</p>
                  <p className="text-gray-400 text-sm mt-1">09:00 <br/> 10:00</p>
                </td>

                <td className="py-12 border-r"></td>

                <td className="py-12 border-r text-base">
                  <p className="text-[#21c7a8]">Modern Dance</p>
                  <p className="text-gray-400 text-base">Gloria Parker</p>
                  <p className="text-gray-400 text-sm mt-1">09:00 <br/> 10:00</p>
                </td>

                <td className="py-12 border-r text-base">
                  <p className="text-[#21c7a8]">Ballet</p>
                  <p className="text-gray-400 text-base">Donald Cox</p>
                  <p className="text-gray-400 text-sm mt-1">09:00 <br/> 10:00</p>
                </td>

                <td className="py-12 border-r text-base">
                  <p className="text-[#21c7a8]">Yoga Dance</p>
                  <p className="text-gray-400 text-base">Michael Lewis</p>
                  <p className="text-gray-400 text-sm mt-1">09:00 <br/> 10:00</p>
                </td>

                <td className="py-12 border-r"></td>

                <td className="py-12 text-base">
                  <p className="text-[#21c7a8]">Modern Dance</p>
                  <p className="text-gray-400 text-base">Jacob Spencer</p>
                  <p className="text-gray-400 text-sm mt-1">09:00 <br/> 10:00</p>
                </td>
              </tr>

            </tbody>

          </table>
        </div>
      </div>

    </div>
  );
};

export default AboutUs;