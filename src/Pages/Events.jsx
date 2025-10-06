import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import left from "../Assets/left-events.png";
import right from "../Assets/right-events.png";

function Events() {

  // gsap
  const headingRef = useRef(null);

  // Split heading text into spans
  const headingText =
    "Roamara began as a call to slow down, to remember- what matters, to find our roots again in a world that's forgotten stillness.";
  const words = headingText.split(" ");

  useEffect(() => {
    gsap.fromTo(
      headingRef.current.querySelectorAll("span"),
      { y: 0, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, ease: "sine.inOut", duration: 1.6 }
    );
  }, []);
  return (
    // main
    <div className="">
      {/* Container */}
      <div className="w-[95%] m-auto  text-center py-14 ">
        {/* text */}
        <div className="flex flex-col gap-5">
          <p className="font-secondary font-extralight">
            The Land, The Spirit, The Name
          </p>
          {/* heading */}
          <h3
            ref={headingRef}
            className="text-xl font-primary md:text-3xl lg:text-4xl max-w-[900px] m-auto leading-normal md:leading-normal lg:leading-normal flex flex-wrap justify-center"
          >
            {words.map((word, index) => (
              <span key={index} className="mr-2 inline-block">
                {word}
              </span>
            ))}
          
          </h3>
        </div>

        {/* image-container */}
        <div className=" flex flex-col  md:flex-row  justify-between  gap-5 mt-10">
          {/* left-container */}
          <div className="relative  rounded-xl overflow-hidden h-[590px] w-full">
            <img
              src={left}
              alt=""
              className="object-cover object-center h-full"
            />
            {/* text */}
            <div className="absolute bottom-5 left-10 text-left text-white lg:pr-20 pr-2 font-primary flex flex-col gap-10">
              <img
                src="https://cdn.prod.website-files.com/685077c466f1137…796b/68540427bc46875dd34cd085_Kaleo_Icon-dark.svg"
                alt=""
                className=""
              />
              <h2 className="text-3xl md:text-4xl lg:text-4xl">
                Where the day begins slowly and the horizon feels endless.
              </h2>
              <hr className="text-white  w-9" />
              <p>
                Roamara is a sanctuary for those seeking stillness, clarity, and
                calm. Nestled among gentle hills and open skies, it offers a
                place to pause, breathe fully, and reconnect with the rhythm of
                the present moment.
              </p>
            </div>
          </div>
          {/* right-container */}
          <div className="relative  rounded-xl overflow-hidden h-[590px] w-full">
            <img
              src={right}
              alt=""
              className="object-cover object-center h-full"
            />
            {/* text */}
            <div className="absolute bottom-5 left-10 text-left text-white lg:pr-20 pr-2 font-primary flex flex-col gap-10">
              <img
                src="https://cdn.prod.website-files.com/685077c466f1137…796b/68540427bc46875dd34cd085_Kaleo_Icon-dark.svg"
                alt=""
                className=""
              />
              <h2 className="text-3xl md:text-4xl lg:text-4xl">
                “ A return to quiet mornings and skies that stretch forever.”{" "}
              </h2>
              <hr className="text-white  w-9" />
              <p>
                Roamara welcomes those who crave simplicity, quiet, and space to
                reflect. Set within rolling hills beneath endless skies, it
                invites you to slow your pace, breathe deeply, and find your
                center.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
