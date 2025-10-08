import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image from "../Assets/about.jpg";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const imageRef = useRef(null);
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // image grow animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=1500",
          scrub: true,
          height: "auto",
          pin: true,
        },
      });

      // Step 1: Image grows
      tl.to(imageRef.current, {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        ease: "none",
      });

      // Step 2: Text fades in AFTER image fully grown
      tl.to(
        textRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
        },
        ">80%" // start near the end of image grow
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen bg-bgcolor flex justify-center items-center p-4 font-secondary"
    >
      {/* container */}
      <div className="h-full w-full flex justify-center items-center overflow-hidden relative">
        <img
          ref={imageRef}
          src={image}
          alt="Scroll Effect"
          className="w-[50%] max-w-full h-auto rounded-xl transition-all duration-0 object-contain sm:w-[50%] md:w-[50%] lg:w-[50%]"
        />

        {/* centered text and button */}
        <div
          ref={textRef}
          className="absolute opacity-0 translate-y-10 flex flex-col items-center justify-center text-white text-center"
        >
          <h2
            className="font-bold mb-4 tracking-wide font-primary"
            style={{ fontSize: "clamp(48px, 10vw, 160px)" }}
          >
            NATURAL
          </h2>

          <div className="text-bgcolor bg-black py-3 px-8 rounded-md font-medium cursor-pointer transition-all duration-300 hover:bg-black/90 text-base flex items-center justify-center text-center group">
            Plan a Trip
            <i className="ri-sparkling-line ml-3 transition-transform duration-300 transform group-hover:scale-150"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
