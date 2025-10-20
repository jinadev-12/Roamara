import React from "react";

function RanchLife() {
  return (
    <div className="flex items-center justify-center text-center pt-16 px-4">
      {/* container */}
      <div className="max-w-xl">
        {/* details */}
        <div className="space-y-6 text-center">
          <h2 className="text-4xl font-bold  uppercase font-primary">
            Experience the <br /> True Ranch Life
          </h2>
          <p className="text-base">
            Discover serene landscapes, open skies, and the freedom of the
            outdoors.
          </p>
          <span className="text-sm font-semibold">
            Adventure awaits at every corner of our ranch.
          </span>
          {/* Centered button */}
          <div className="flex justify-center">
            <button className=" pl-6 border-black border-[2px]  text-white bg-black rounded-full flex items-center gap-2  transition">
              <span>Explore the Ranch</span>
              <i className="ri-arrow-right-line ml-2 bg-white text-black h-12 w-12 flex items-center justify-center text-2xl rounded-full"></i>
            </button>
          </div>
        </div>
        {/* card conti */}
      </div>
    </div>
  );
}

export default RanchLife;
