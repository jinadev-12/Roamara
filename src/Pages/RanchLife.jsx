import React from "react";
import horse from "../Assets/ranch-horseride.jpg";
import outyard from "../Assets/ranch-outyard.jpg";
import sunset from "../Assets/ranch-sunset.jpg";
import campfire from "../Assets/ranch-campfire.jpg";

const RanchLife = () => {
  const ranchCards = [
    {
      title: "Sunset Rides",
      desc: "Feel the freedom of open plains as the sun sets behind the hills.",
      img: sunset,
    },
    {
      title: "Rustic Cabins",
      desc: "Stay cozy in authentic wooden cabins surrounded by endless horizons.",
      img: outyard,
    },
    {
      title: "Wild Trails",
      desc: "Ride through rugged landscapes and discover the untouched wild.",
      img: horse,
    },
    {
      title: "Campfire Nights",
      desc: "Gather under the stars, share stories, and live the timeless ranch spirit.",
      img: campfire,
    },
  ];

  return (
    <section className="py-24 text-[#2d2a26]">
      {/* container */}
      <div className="max-w-[1400px] mx-auto w-[90%]">
        {/* section title */}
        <div className="text-center mb-20">
          <p className="font-secondary tracking-[0.2em] uppercase text-sm text-[#9a8565] mb-3">
            Timeless Freedom of Ranch Life
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-light max-w-[900px] mx-auto text-[#2d2a26]">
            Experience the charm of ranch living — where the days are wild, the
            nights are calm, and every moment connects you to nature.
          </h2>

          {/* button */}
          <div className="mt-8 flex justify-center">
            <button className="group relative overflow-hidden rounded-lg border border-[#2d2a26] px-8 py-3 text-sm sm:text-base font-medium tracking-wide text-[#2d2a26] transition-all duration-500 hover:text-white">
              <span className="relative z-10">Explore Ranch Life</span>
              <div className="absolute inset-0 bg-[#2d2a26] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              <i className="ri-arrow-right-line ml-2 relative z-10"></i>
            </button>
          </div>
        </div>

        {/* card container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ranchCards.map((card, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
            >
              {/* background image */}
              <div
                className="w-full h-[400px] bg-cover bg-center transition-transform duration-[2000ms] group-hover:scale-110"
                style={{ backgroundImage: `url(${card.img})` }}
              ></div>

              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-500"></div>

              {/* text */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <h3 className="text-lg sm:text-xl font-primary uppercase tracking-wide mb-2">
                  {card.title}
                </h3>
                <p className="text-sm opacity-80 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RanchLife;
