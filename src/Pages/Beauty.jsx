import React, { useRef, useState, useEffect } from "react";

function Beauty() {
  const videoRef = useRef(null);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoop = () => {
      setFade(true);
      setTimeout(() => setFade(false), 500); // fade back in
    };

    // When video ends, fade out before restarting
    video.addEventListener("ended", handleLoop);
    return () => video.removeEventListener("ended", handleLoop);
  }, []);

  return (
    <div className="relative bg-black w-full h-screen overflow-hidden">
      <video
        ref={videoRef}
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
          fade ? "opacity-0" : "opacity-100"
        }`}
        src="/beautybg-1.mp4"
        autoPlay
        loop={false} // disable default loop
        muted
        playsInline
        onEnded={(e) => e.target.play()} // manual looping
      />
      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/40"></div>
      {/* heading and para */}
      <div className="absolute gap-3 inset-0 flex flex-col items-center justify-center z-30 text-white text-center m-auto max-w-[600px] px-4">
        <img
          src="	https://cdn.prod.website-files.com/685077c466f113761c6d796b/6853ff8bb7215267b2f31695_Kaleo_Icon.svg"
          alt=""
        />
        <h1 className="mt-3 text-5xl font-bold font-primary">WESTERN BEAUTY</h1>
        <p className="mt-4 text-base font-secondary font-extralight">
          The river whispers secrets in the golden light — a canoe gliding past
          reeds, the rustle of willows, sunlight sparkling like scattered gems
          on water.
        </p>
      </div>
    </div>
  );
}

export default Beauty;
