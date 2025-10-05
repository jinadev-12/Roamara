import React from "react";
import heroVideo from "../public/heroBG.mp4";

function Hero() {
  return (
    // Outer wrapper for section spacing
    <div className="p-4 h-[100vh]">
      {/* HERO SECTION */}
      <div className="relative w-full h-full overflow-hidden rounded-lg ">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={heroVideo}
          autoPlay
          loop
          muted
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70"></div>

        {/* Content container */}
        <div className="relative flex flex-col justify-center items-center h-full text-center px-4">
          <div className="max-w-3xl flex flex-col items-center">
            {/* Heading */}
            <h1 className="text-7xl md:text-[120px] lg:text-[200px] font-medium tracking-wide mb-4 text-bgcolor font-primary">
              ROAMARA
            </h1>

            {/* Paragraph */}
            <p className="text-sm md:text-base font-light leading-relaxed text-bgcolor font-secondary text-center">
              Kaleo is a modern ranch retreat designed for quiet escapes,
              outdoor living, and meaningful gatherings. From scenic views to
              curated experiences, Kaleo offers a place to slow down, reconnect,
              and enjoy nature with intention.
            </p>
          </div>

          {/* Discover button */}
          <a
            href="#"
            className="absolute bottom-8 text-base md:text-base font-light text-bgcolor"
          >
            Discover
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
