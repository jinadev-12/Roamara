import React from "react";
import image from "../Assets/about.jpg";

function Direction() {
  return (
    <section className=" bg-bgcolor md:px-10 font-secondary pb-24">
      {/* Heading */}
      <div className="mb-16 text-center mx-auto w-[90%]">
        <p className="font-secondary font-extralight uppercase mb-4">
          THE THINGS THAT STILL MATTER
        </p>
        <h2 className="text-xl md:text-3xl lg:text-4xl max-w-[900px] m-auto leading-normal flex flex-wrap justify-center">
          Kaleo invites you to slow down — to move with purpose, to remember
          what life feels like when it breathes with meaning.
        </h2>
      </div>

      {/* Container */}
      <div className="max-w-7xl mx-auto w-[90%] flex flex-col gap-10 md:gap-20 lg:gap-32">
        {/* Card 1 */}
        <div className="flex gap-4 md:gap-20 flex-col md:flex-row w-full">
          {/* Image Wrapper */}
          <div className="md:w-1/2 w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[600px] overflow-hidden rounded-2xl transition-all duration-500 ease-in-out">
            <img
              src={image}
              alt="The Land"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h3 className="text-xl md:text-5xl font-primary tracking-wide mb-3 text-gray-800">
              THE LAND
            </h3>
            <div className="w-12 h-[2px] bg-gray-800 mb-4"></div>
            <p className="text-gray-600 leading-relaxed md:text-base max-w-md">
              Everything begins with the land — its quiet, patient strength
              shaping the soul of our work. The rolling meadows, morning dew,
              and timeless winds remind us that beauty takes time. This is where
              roots sink deep, where the scent of the earth and the hum of
              nature define what it means to belong.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex gap-4 md:gap-20 flex-col md:flex-row-reverse w-full">
          {/* Image Wrapper */}
          <div className="md:w-1/2 w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[600px] overflow-hidden rounded-2xl transition-all duration-500 ease-in-out">
            <img
              src={image}
              alt="The Craft"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h3 className="text-xl md:text-5xl font-primary tracking-wide mb-3 text-gray-800">
              THE CRAFT
            </h3>
            <div className="w-12 h-[2px] bg-gray-800 mb-4"></div>
            <p className="text-gray-600 leading-relaxed md:text-base max-w-md">
              Each piece is born from patience — shaped, refined, and perfected
              by hand. Our process honors simplicity, blending traditional
              methods with a modern eye for detail. From the first sketch to the
              final finish, every curve and texture tells a story of care and
              purpose. This is craftsmanship redefined — slow, intentional, and
              deeply human.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex gap-4 md:gap-20 flex-col md:flex-row w-full">
          {/* Image Wrapper */}
          <div className="md:w-1/2 w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[600px] overflow-hidden rounded-2xl transition-all duration-500 ease-in-out">
            <img
              src={image}
              alt="The Vision"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h3 className="text-xl md:text-5xl font-primary tracking-wide mb-3 text-gray-800">
              THE VISION
            </h3>
            <div className="w-12 h-[2px] bg-gray-800 mb-4"></div>
            <p className="text-gray-600 leading-relaxed md:text-base max-w-md">
              Our vision extends beyond design — it’s about creating spaces and
              objects that breathe life into everyday moments. We draw
              inspiration from the harmony between nature and structure, between
              stillness and motion. Every creation invites pause, reflection,
              and connection — a reminder that elegance lives in balance, not
              excess.
            </p>
          </div>
        </div>
        {/* Button */}
      <div className=" text-center">
        <button className="px-8 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-300">
          DISCOVER MORE
        </button>
      </div>
      </div>

      
    </section>
  );
}

export default Direction;
