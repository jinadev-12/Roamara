import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Navbar() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { y: -40, autoAlpha: 0 }, // start
        {
          y: 0,
          autoAlpha: 1, // end
          duration: 1,
          delay: 3.5,
          ease: "power4.in",
        }
      );
    });

    return () => {
      // cleanup GSAP context and any ScrollTrigger instances created inside it
      ctx.revert();
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const sidebaropen = () => {
    setIsOpen(!isOpen);
  };
  return (
    // main
    <div ref={sectionRef} className="absolute left-0 top-0 w-[100%] z-20 px-4">
      {/* Container */}
      <div className=" flex justify-between w-[90%] text-bgcolor items-center  m-auto max-w-[1350px] font-secondary pt-9 pb-2 bg-transparent">
        {/* logo and links */}
        <div className="flex gap-5 ">
          {/* logo */}
          <div className="font-primary flex gap-5 ">
            <h1 className="text-lg">RM</h1>
            <div class="w-px h-6 bg-gray-400"></div>
          </div>

          {/* links */}
          <div className="hidden lg:block">
            <ul className="flex gap-5 font-medium">
              <li>
                <a href="#ranch-life">Ranch life</a>
              </li>
              <li>
                <a href="#about-us">About us</a>
              </li>
              <li>
                <a href="#events">Events</a>
              </li>
              <li>
                <a href="#directions">Directions</a>
              </li>
              <li>
                <a href="#Houses">Houses</a>
              </li>
            </ul>
          </div>
        </div>
        {/* menu and book a vist buttons */}
        <div className="flex items-center gap-5">
          {/* book button */}
          <div className="hidden md:inline-block group text-white bg-[#2d2a26]  py-3 px-6 rounded-lg font-medium cursor-pointer">
            Plan a Trip
            <i className="ri-sparkling-line ml-3  transition-transform duration-300 inline-block transform group-hover:scale-150"></i>
          </div>
          {/* menu-button */}
          <div className="lg:hidden">
            <i
              class="ri-menu-line text-2xl md:text-3xl"
              onClick={sidebaropen}
            ></i>
          </div>
        </div>
        {/* sidebar */}
        <div
          className={`fixed -z-20  top-0 left-0 mt-20 right-0 w-[80%] m-auto  bg-white/10 backdrop-blur-md rounded-lg  shadow-lg   flex justify-center  pb-11 pt-14 text-center ${
            isOpen ? "translate-y-0" : "-translate-y-[800px]"
          }  lg:hidden duration-300 `}
        >
          <ul className="flex flex-col gap-14  font-medium  mt-10 text-base">
            <li>
              <a href="#home" onClick={() => setIsOpen(false)}>
                HOME
              </a>
            </li>
            <li>
              <a href="#popular" onClick={() => setIsOpen(false)}>
                POPULAR
              </a>
            </li>
            <li>
              <a href="#aboutus" onClick={() => setIsOpen(false)}>
                ABOUT US
              </a>
            </li>
            <li>
              <a href="#products" onClick={() => setIsOpen(false)}>
                PRODUCTS
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setIsOpen(false)}>
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
