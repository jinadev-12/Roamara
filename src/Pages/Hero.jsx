import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Hero() {
  const titleRef = useRef(null);
  const paraRef = useRef(null);
  const discoverRef = useRef(null);

  useEffect(() => {
    const letters = titleRef.current.querySelectorAll(".letter");
    const paraWords = paraRef.current.querySelectorAll(".para-word");

    gsap.fromTo(
      letters,
      { opacity: 0 },
      {
        opacity: 1,
        stagger: 0.1,
        duration: 1.2, // a bit slower
        ease: "sine.inOut", // smoother curve
        delay: 0.5,
      }
    );

    // Paragraph animation with delay
    gsap.fromTo(
      paraWords,
      { opacity: 0 },
      {
        opacity: 1,
        stagger: 0.015,
        duration: 1,
        ease: "power3.out",
        delay: 1.7, // starts after heading finishes
      }
    );

    // Discover button animation
    gsap.fromTo(
      discoverRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 3.4, // after heading + paragraph
      }
    );
  }, []);

  return (
    <div className="p-4 h-[100vh] font-secondary">
      <div className="relative w-full h-full overflow-hidden rounded-lg">
        {/* Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="heroBG2.mp4"
          autoPlay
          loop
          muted
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70"></div>

        <div className="relative flex flex-col justify-center items-center h-full text-center px-4">
          <div className="max-w-3xl flex flex-col items-center">
            {/* Heading */}
            <h1
              ref={titleRef}
              className="flex justify-center text-6xl md:text-8xl lg:text-[clamp(6rem,10vw,200px)] font-medium tracking-wide mb-4 text-bgcolor font-primary"
            >
              <div className="letter">R</div>
              <div className="letter">O</div>
              <div className="letter">A</div>
              <div className="letter">M</div>
              <div className="letter">A</div>
              <div className="letter">R</div>
              <div className="letter">A</div>
            </h1>

            {/* Paragraph */}
            <p
              ref={paraRef}
              className="flex flex-wrap justify-center text-sm md:text-base font-light leading-relaxed text-bgcolor font-secondary max-w-[700px] mx-auto"
            >
              {/* Word-by-word */}
              <div className="para-word">Roamara</div>
              <div className="para-word">&nbsp;</div>
              <div className="para-word">is</div>
              <div className="para-word">&nbsp;</div>
              <div className="para-word">your</div>
              <div className="para-word">&nbsp;</div>
              <div className="para-word">gateway</div>
              <div className="para-word">&nbsp;</div>
              <div className="para-word">to</div>
              <div className="para-word">&nbsp;</div>
              <div className="para-word">unforgettable</div>
              <div className="para-word">&nbsp;</div>
              <div className="para-word">journeys</div>
              <div className="para-word">&nbsp;</div>
              <div className="para-word">and</div>
              <div className="para-word">&nbsp;</div>
              <div className="para-word">vibrant</div>
              <div className="para-word">&nbsp;</div>
              <div className="para-word">lifestyles.</div>
              <div className="para-word">&nbsp;</div>
              <div className="para-word">From</div>
              <div className="para-word">&nbsp;</div>
              <div className="para-word">hidden</div>
              <div className="para-word">&nbsp;</div>
              <div className="para-word">local</div>
              <div className="para-word">&nbsp;</div>
              <div className="para-word">gems</div>
              <div className="para-word">&nbsp;</div>
              <div className="para-word">to</div>
              <div className="para-word">&nbsp;</div>
              <div className="para-word">curated</div>
              <div className="para-word">&nbsp;</div>
              <div className="para-word">travel</div>
              <div className="para-word">&nbsp;</div>
              <div className="para-word">experiences,</div>
              <div className="para-word">&nbsp;</div>
              <div className="para-word">we</div>
              <div className="para-word">&nbsp;</div>
              <div className="para-word">inspire</div>
              <div className="para-word">&nbsp;</div>
              <div className="para-word">you</div>
              <div className="para-word">&nbsp;</div>
              <div className="para-word">to</div>
              <div className="para-word">&nbsp;</div>
              <div className="para-word">explore</div>
              <div className="para-word">&nbsp;</div>
              <div className="para-word">the</div>
              <div className="para-word">&nbsp;</div>
              <div className="para-word">world</div>
              <div className="para-word">&nbsp;</div>
              <div className="para-word">with</div>
              <div className="para-word">&nbsp;</div>
              <div className="para-word">curiosity,</div>
              <div className="para-word">&nbsp;</div>
              <div className="para-word">embrace</div>
              <div className="para-word">&nbsp;</div>
              <div className="para-word">new</div>
              <div className="para-word">&nbsp;</div>
              <div className="para-word">cultures,</div>
              <div className="para-word">&nbsp;</div>
              <div className="para-word">and</div>
              <div className="para-word">&nbsp;</div>
              <div className="para-word">celebrate</div>
              <div className="para-word">&nbsp;</div>
              <div className="para-word">the</div>
              <div className="para-word">&nbsp;</div>
              <div className="para-word">art</div>
              <div className="para-word">&nbsp;</div>
              <div className="para-word">of</div>
              <div className="para-word">&nbsp;</div>
              <div className="para-word">mindful</div>
              <div className="para-word">&nbsp;</div>
              <div className="para-word">living</div>
              <div className="para-word">&nbsp;</div>
              <div className="para-word">every</div>
              <div className="para-word">&nbsp;</div>
              <div className="para-word">step</div>
              <div className="para-word">&nbsp;</div>
              <div className="para-word">of</div>
              <div className="para-word">&nbsp;</div>
              <div className="para-word">the</div>
              <div className="para-word">&nbsp;</div>
              <div className="para-word">way.</div>
            </p>
          </div>

          {/* Discover button */}
          <a
            ref={discoverRef}
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
