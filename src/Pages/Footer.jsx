import React from "react";

function Footer() {
  return (
    <footer className="font-secondary bg-bgcolor text-[#1a1a1a] font-manrope px-4 md:px-8 lg:px-12">
      {/* container */}
      <div className="max-w-[1280px] mx-auto flex flex-col justify-between pt-16 gap-16">
        {/* footer details */}
        <div className="flex flex-col lg:flex-row-reverse gap-12 lg:justify-between w-[96%] mx-auto">
          {/* contact */}
          <div className="flex flex-col gap-8 lg:w-1/4">
            <div>
              <h3 className="text-xs font-semibold mb-3 tracking-wide text-black/70">
                ADDRESS
              </h3>
              <p className="leading-relaxed text-[15px] md:text-[18px] text-black/80">
                Ranch - 1847 Dusky Creek Road <br />
                Fredericksburg, TX 78624 <br />
                United States
              </p>
            </div>

            <div>
              <h3 className="text-xs font-semibold mb-3 tracking-wide text-black/70">
                PHONE
              </h3>
              <p className="leading-relaxed text-[15px] md:text-[18px] text-black/80">
                +1 (512) 555-0198
              </p>
            </div>
          </div>

          {/* content */}
          <div className="flex flex-col justify-between gap-10 lg:w-2/4 max-w-[650px]">
            <h3 className="text-lg md:text-xl leading-snug text-neutral-700 font-primary">
              We welcome kindred spirits. Whether you're looking for silence,
              space, or simply a change in pace — Kaleo is open.
            </h3>

            <button className="group relative overflow-hidden rounded-lg border border-[#2d2a26] px-8 py-3 text-sm sm:text-base font-medium tracking-wide text-[#2d2a26] transition-all duration-500 hover:text-white">
              <span className="relative z-10">Discover More</span>
              <div className="absolute inset-0 bg-[#2d2a26] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            </button>

            <div className="text-sm md:text-base text-black/60 mt-auto">
              © {new Date().getFullYear()} ROAMARA. All rights reserved.
            </div>
          </div>
        </div>

        {/* footer logo */}
        <div className="flex items-start justify-between w-full gap-2 pb-8 border-t border-black/10 pt-6">
          <h2 className="font-semibold tracking-wide font-primary leading-none text-[12vw] md:text-[8vw] lg:text-[5vw]">
            ROAMARA
          </h2>
          <i className="ri-arrow-right-up-line leading-none text-[14vw] md:text-[10vw] lg:text-[6vw]"></i>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
