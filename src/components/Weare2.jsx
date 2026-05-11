import React from "react";

export default function DanceCompetition() {
  return (
    <section className="w-full bg-white py-16">
      
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* LEFT SIDE */}
        <div>
          
          <h2 className="text-[30px] leading-[1.1] uppercase font-extralight text-[#111] text-right">
  Dance Competition <span className="font-semibold">Camp.</span>
  <br />
  
  <span className="font-semibold">
    Train Your Skills
  </span>{" "}
  To The Max.
</h2>

          <p className="mt-6 text-[#8a8a8a] text-[15px] leading-[2] max-w-[520px] text-right">
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
            tellus. Phasellus viverra nulla ut metus varius laoreet.
            Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
            augue. Curabitur ullamcorper ultricies nisi.
          </p>

        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-7">

          {/* ITEM */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-[16px] text-[#111]">
                Adobe Photoshop
              </span>

              <span className="text-[16px] text-[#111]">
                68%
              </span>
            </div>

            <div className="w-full h-[2px] bg-[#dddddd]">
              <div className="w-[68%] h-full bg-[#19d3c5]"></div>
            </div>
          </div>

          {/* ITEM */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-[16px] text-[#111]">
                Adobe Illustrator
              </span>

              <span className="text-[16px] text-[#111]">
                83%
              </span>
            </div>

            <div className="w-full h-[2px] bg-[#dddddd]">
              <div className="w-[83%] h-full bg-[#19d3c5]"></div>
            </div>
          </div>

          {/* ITEM */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-[16px] text-[#111]">
                High Lunges
              </span>

              <span className="text-[16px] text-[#111]">
                54%
              </span>
            </div>

            <div className="w-full h-[2px] bg-[#dddddd]">
              <div className="w-[54%] h-full bg-[#19d3c5]"></div>
            </div>
          </div>

          {/* ITEM */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-[16px] text-[#111]">
                PHP,JS Programming
              </span>

              <span className="text-[16px] text-[#111]">
                76%
              </span>
            </div>

            <div className="w-full h-[2px] bg-[#dddddd]">
              <div className="w-[76%] h-full bg-[#19d3c5]"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}