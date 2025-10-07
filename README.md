
import bucket from "../assets/img/order-img-1.png";
import chicken1 from "../assets/img/chicken-dam-5.png";
import chicken2 from "../assets/img/chicken-dam-6.png";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


    const sectionRef = useRef(null);
    const textRef = useRef(null);
    const imageRef = useRef(null);
    const item1Ref = useRef(null);
    const item2Ref = useRef(null);
    const item3Ref = useRef(null);


    
   useEffect(() => {
     const ctx = gsap.context(() => {
         gsap.fromTo(
           textRef.current,
           { y: 40, autoAlpha: 0 }, // start
           {
             y: 0,
             autoAlpha: 1, // end
             duration: 1,
             scrollTrigger: {
               trigger: sectionRef.current,
               start: "top 80%",
             },
           }
         );
     }, sectionRef);
   
   },[])

<!-- {/* <div className="h-full w-full flex justify-center items-center p-5 overflow-hidden">
  <img
    ref={imageRef}
    src={image}
    alt="Scroll Effect"
    className="w-[50%] max-w-full h-auto rounded-xl transition-all duration-500 object-contain sm:w-[60%] md:w-[50%] lg:w-[50%]"
  />
</div>; */} -->