import React from "react";

function Footer() {
  return (
    // footer
    <div className="font-secondary bg-bgcolor text-[#1a1a1a] font-manrope px-4 md:px-5 lg:px-10 md:h-[100vh]">
      {/* container */}
      <div className="flex flex-col justify-between pt-16 gap-4 h-full">
        {/* footer details */}
        <div className="flex flex-col lg:flex-row-reverse gap-12 lg:justify-between w-[96%] mx-auto">
          {/* contact */}
          <div className="contact flex flex-col gap-8 lg:w-1/4">
            <div>
              <h3 className="text-sm mb-4">ADDRESS</h3>
              <div className="leading-relaxed text-[16px] md:text-[20px]">
                Ranch - 1847 Dusky Creek Road <br />
                Fredericksburg, TX 78624 <br />
                United States
              </div>
            </div>

            <div>
              <h3 className="text-sm mb-4">PHONE</h3>
              <div className="leading-relaxed text-[16px] md:text-[20px]">
                +1 (512) 555-0198
              </div>
            </div>
          </div>

          {/* content */}
          <div className="content flex flex-col justify-between gap-10 lg:w-2/4 max-w-[650px]">
            <h3 className="text-lg md:text-xl leading-snug text-neutral-600 font-primary">
              We welcome kindred spirits. Whether you're looking for silence,
              space, or simply a change in pace — Kaleo is open.
            </h3>

            <div className="self-start text-bgcolor bg-black py-3 px-6 rounded-lg font-medium cursor-pointer transition-all duration-300 hover:bg-black/90 text-base ">
              Plan a Trip
              <i className="ri-sparkling-line ml-3 transition-transform duration-300 inline-block transform group-hover:scale-150"></i>
            </div>

            <div className="text-sm md:text-base text-black/60 mt-auto">
              © {new Date().getFullYear()} ROAMARA. All rights reserved.
            </div>
          </div>
        </div>

        {/* footer logo */}
        <div className="flex items-start pb-6 justify-between w-full gap-2">
          <h2 className="font-semibold tracking-wide font-primary leading-none text-[14vw]">
            ROAMARA
          </h2>
          <i className="ri-arrow-right-up-line leading-none text-[15vw]"></i>
        </div>
      </div>
    </div>
  );
}

export default Footer;
