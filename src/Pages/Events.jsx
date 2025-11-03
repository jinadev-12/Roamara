import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import left from "../Assets/event-stage.jpg";
import right from "../Assets/event-crowd.jpg";

function Events() {
  const headingRef = useRef(null);

  const headingText =
    "Where moments turn into memories — and energy fills the air.";
  const words = headingText.split(" ");

  useEffect(() => {
    gsap.fromTo(
      headingRef.current.querySelectorAll("span"),
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.07,
        ease: "power3.out",
        duration: 1.2,
      }
    );
  }, []);

  return (
    <section className="text-[#2d2a26] py-24">
      <div className="max-w-[1400px] w-[90%] mx-auto text-center font-secondary">
        {/* Subtitle */}
        <p className="text-sm tracking-[0.25em] uppercase text-[#9a8565] mb-5">
          Energy. People. Moments.
        </p>

        {/* Heading */}
        <h3
          ref={headingRef}
          className="text-2xl md:text-4xl lg:text-5xl max-w-[900px] mx-auto leading-tight font-light flex flex-wrap justify-center"
        >
          {words.map((word, index) => (
            <span key={index} className="mr-2 inline-block">
              {word}
            </span>
          ))}
        </h3>

        {/* Image Section */}
        <div className="flex flex-col md:flex-row justify-between gap-8 mt-20">
          {/* LEFT IMAGE - Crew */}
          <div className="relative w-full h-[550px] overflow-hidden rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] group">
            <img
              src={left}
              alt="Event stage and crew"
              className="w-full h-full object-cover object-center transition-transform duration-[2500ms] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-80 transition-all duration-700 group-hover:opacity-90"></div>

            {/* Text */}
            <div className="absolute bottom-0 left-0 p-6 lg:p-10 text-left text-white flex flex-col gap-6">
              <h2 className="text-2xl lg:text-3xl font-primary uppercase tracking-wide leading-snug">
                Behind every spotlight, a team that makes it all happen.
              </h2>
              <hr className="border-white w-9 opacity-70" />
              <p className="font-secondary text-sm sm:text-base text-[#e6e6e6] max-w-[85%] leading-relaxed">
                From sound to stage, the Roamara crew brings the event to life.
                Dedicated, driven, and detail-obsessed — they turn vision into
                experience.
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE - Crowd */}
          <div className="relative w-full h-[550px] overflow-hidden rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] group">
            <img
              src={right}
              alt="Event crowd enjoying music"
              className="w-full h-full object-cover object-center transition-transform duration-[2500ms] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-80 transition-all duration-700 group-hover:opacity-90"></div>

            {/* Text */}
            <div className="absolute bottom-0 left-0 p-6 lg:p-10 text-left text-white flex flex-col gap-6">
              <h2 className="text-2xl lg:text-3xl font-primary uppercase tracking-wide leading-snug">
                The crowd, the music, the magic of the moment.
              </h2>
              <hr className="border-white w-9 opacity-70" />
              <p className="font-secondary text-sm sm:text-base text-[#e6e6e6] max-w-[85%] leading-relaxed">
                Lights flare, beats drop, and the crowd comes alive. Each person
                adds their voice to the rhythm of the night — that’s the spirit
                of Roamara events.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Events;
