import React from "react";

function RanchLife() {
  return (
    // ranch
    <div className="lg:h-[100vh]">
      {/* upperblock */}
      <div className="bg-black text-white py-12">
        {/* container */}
        <div className="max-w-[1400px] w-[90%] mx-auto flex flex-col lg:flex-row justify-between gap-8 lg:gap-0">
          {/* states */}
          <div className="flex flex-col sm:flex-row gap-6">
            {/* state */}
            <div className="flex flex-col items-center sm:items-start">
              <div className="text-2xl font-bold">
                4.5 <span className="text-green-400">M</span>
              </div>
              <p className="text-sm text-gray-300">Sea games participation</p>
            </div>
            {/* state */}
            <div className="flex flex-col items-center sm:items-start">
              <div className="text-2xl font-bold">
                4.5 <span className="text-green-400">M</span>
              </div>
              <p className="text-sm text-gray-300">Sea games participation</p>
            </div>
            {/* state */}
            <div className="flex flex-col items-center sm:items-start">
              <div className="text-2xl font-bold">
                4.5 <span className="text-green-400">M</span>
              </div>
              <p className="text-sm text-gray-300">Sea games participation</p>
            </div>
          </div>

          {/* join */}
          <div className="mt-6 lg:mt-0 flex flex-col lg:items-end gap-4">
            <p className="max-w-md text-gray-200">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
              commodi, assumenda dignissimos molestias voluptates tenetur quos
              quia ipsum officia expedita! Amet nisi perspiciatis error odit,
              voluptas culpa animi natus officia.
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-md transition">
              Join member
            </button>
          </div>
        </div>
      </div>

      {/* lower block */}
      <div className="w-[90%] mx-auto max-w-[1400px] py-12 flex flex-col gap-10">
        {/* head */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">We offer you</h2>
            <p className="text-gray-700 max-w-md">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quisquam, ducimus! Ex at, ipsum nam velit qui similique.
            </p>
          </div>
          <button className="bg-black text-white font-semibold py-2 px-6 rounded-md hover:bg-gray-800 transition">
            Explore the services
          </button>
        </div>

        {/* card container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* card */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-4">
            {/* icon here */}
            <h3 className="text-xl font-semibold">Yoga classes</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              molestiae earum accusantium architecto minus.
            </p>
            <button className="mt-auto bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md transition">
              View More
            </button>
          </div>
          {/* card */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-4">
            {/* icon here */}
            <h3 className="text-xl font-semibold">Yoga classes</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              molestiae earum accusantium architecto minus.
            </p>
            <button className="mt-auto bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md transition">
              View More
            </button>
          </div>
          {/* card */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-4">
            {/* icon here */}
            <h3 className="text-xl font-semibold">Yoga classes</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              molestiae earum accusantium architecto minus.
            </p>
            <button className="mt-auto bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md transition">
              View More
            </button>
          </div>
          {/* Add more cards here if needed */}
        </div>
      </div>
    </div>
  );
}

export default RanchLife;
