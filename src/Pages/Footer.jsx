import React from "react";

function Footer() {
  return (
    // Footer
    <div className="h-[100vh] flex items-center justify-center bg-white text-[#1a1a1a] font-manrope">
      {/* container */}
      <div className="flex flex-col justify-between w-full max-w-[1400px] px-8 md:px-16 lg:px-24 py-16">
        {/* footer details */}
        <div className="flex flex-col lg:flex-row-reverse gap-12 border-t border-black/10 pt-12">
          {/* contact */}
          <div className="contact flex flex-col gap-8 lg:w-1/3">
            {/* address */}
            <div>
              <h3 className="text-sm font-semibold tracking-widest text-black/60 mb-2">
                ADDRESS
              </h3>
              <div className="leading-relaxed text-[15px]">
                Ranch - 1847 Dusky Creek Road <br />
                Fredericksburg, TX 78624 <br />
                United States
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold tracking-widest text-black/60 mb-2">
                PHONE
              </h3>
              <div className="text-[15px]">+1 (512) 555-0198</div>
            </div>
          </div>

          {/* content */}
          <div className="content flex flex-col justify-between gap-10 lg:w-2/3">
            {/* content para */}
            <h3 className="text-2xl md:text-3xl leading-snug max-w-[700px] font-medium font-primary">
              We welcome kindred spirits. Whether you're looking for silence,
              space, or simply a change in pace — Kaleo is open.
            </h3>

            {/* book button */}
            <div className="hidden md:inline-block group self-start text-white bg-black py-3 px-8 rounded-xl font-medium cursor-pointer transition-all duration-300 hover:bg-black/90">
              Plan a Trip
              <i className="ri-sparkling-line ml-3 transition-transform duration-300 inline-block transform group-hover:scale-150"></i>
            </div>

            {/* credits */}
            <div className="text-sm text-black/60 mt-auto">
              © {new Date().getFullYear()} ROAMARA. All rights reserved.
            </div>
          </div>
        </div>

        {/* footer logo */}
        <div className="flex items-center gap-2 mt-16">
          <div className="text-3xl md:text-4xl font-semibold tracking-wide">
            ROAMARA
          </div>
          <i className="ri-arrow-right-up-line text-2xl"></i>
        </div>
      </div>
    </div>
  );
}

export default Footer;
