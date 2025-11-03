import React from "react";
import image1 from "../Assets/direction-land.jpg";
import image2 from "../Assets/direction-craft.jpg";
import image3 from "../Assets/direction-vision.jpg";

function Direction() {
  return (
    <section className="font-secondary py-24 md:px-10">
      {/* Heading */}
      <div className="mb-20 text-center mx-auto w-[90%]">
        <p className="uppercase tracking-[0.25em] text-[#9a8565] text-sm mb-5">
          The Things That Still Matter
        </p>
        <h2 className="text-2xl md:text-4xl lg:text-5xl max-w-[900px] mx-auto font-light leading-snug text-[#2d2a26]">
          Kaleo invites you to slow down — to move with purpose, to remember
          what life feels like when it breathes with meaning.
        </h2>
      </div>

      {/* Container */}
      <div className="max-w-7xl mx-auto w-[90%] flex flex-col gap-24 md:gap-32">
        {/* CARD TEMPLATE */}
        {[
          {
            id: 1,
            title: "The Land",
            img: image1,
            desc: `Everything begins with the land — its quiet, patient strength shaping the soul of our work. The rolling meadows, morning dew, and timeless winds remind us that beauty takes time. This is where roots sink deep, where the scent of the earth and the hum of nature define what it means to belong.`,
            reverse: false,
          },
          {
            id: 2,
            title: "The Craft",
            img: image2,
            desc: `Each piece is born from patience — shaped, refined, and perfected by hand. Our process honors simplicity, blending traditional methods with a modern eye for detail. From the first sketch to the final finish, every curve and texture tells a story of care and purpose. This is craftsmanship redefined — slow, intentional, and deeply human.`,
            reverse: true,
          },
          {
            id: 3,
            title: "The Vision",
            img: image3,
            desc: `Our vision extends beyond design — it’s about creating spaces and objects that breathe life into everyday moments. We draw inspiration from the harmony between nature and structure, between stillness and motion. Every creation invites pause, reflection, and connection — a reminder that elegance lives in balance, not excess.`,
            reverse: false,
          },
        ].map((card) => (
          <div
            key={card.id}
            className={`flex flex-col ${
              card.reverse ? "md:flex-row-reverse" : "md:flex-row"
            } items-center gap-10 md:gap-20`}
          >
            {/* Image */}
            <div className="relative md:w-1/2 w-full overflow-hidden rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] group">
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-[350px] md:h-[500px] lg:h-[600px] object-cover transition-transform duration-[2000ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-40 transition-all duration-700"></div>
            </div>

            {/* Content */}
            <div className="md:w-1/2 text-left">
              <h3 className="text-3xl md:text-5xl font-primary uppercase tracking-wide mb-4 text-[#2d2a26]">
                {card.title}
              </h3>
              <div className="w-12 h-[2px] bg-[#9a8565] mb-6"></div>
              <p className="text-[#4b463f] leading-relaxed text-base md:text-lg max-w-md">
                {card.desc}
              </p>
            </div>
          </div>
        ))}

        {/* Button */}
        <div className="text-center mt-10">
          <button className="group relative overflow-hidden rounded-lg border border-[#2d2a26] px-8 py-3 text-sm sm:text-base font-medium tracking-wide text-[#2d2a26] transition-all duration-500 hover:text-white">
            <span className="relative z-10">Discover More</span>
            <div className="absolute inset-0 bg-[#2d2a26] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Direction;
