import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Natural = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const video = videoRef.current;
      const text = textRef.current;

      // Initial state
      gsap.set(video, {
        scale: 0.6,
        borderRadius: "40px",
        transformOrigin: "center center",
      });
      gsap.set(text, { opacity: 0, y: 40 });

      // Scroll-triggered video grow + border-radius animation
      gsap.to(video, {
        scale: 1.02,
        borderRadius: "0px",
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
          onUpdate: (self) => {
            // Only show text when scale is almost max
            if (self.progress > 0.95) {
              gsap.to(text, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
              });
            } else {
              gsap.to(text, {
                opacity: 0,
                y: 40,
                duration: 0.3,
                ease: "power2.in",
              });
            }
          },
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <video
        ref={videoRef}
        src="/naturalBG.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute rounded-[40px] inset-0 w-full h-full object-cover"
      />

      {/* Center Text */}
      <h2
        ref={textRef}
        className="relative font-primary text-[#bdbdbd] text-5xl sm:text-7xl md:text-8xl uppercase tracking-wide z-10"
      >
        Natural
      </h2>
    </section>
  );
};

export default Natural;
