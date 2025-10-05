import React from 'react'

function Navbar() {
  return (
    // main
    <div className="fixed w-[100%] z-20 px-8">
      {/* Container */}
      <div className=" flex justify-between w-[90%] items-center  m-auto max-w-[1350px] font-secondary pt-9 pb-2 bg-transparent">
        {/* logo and links */}
        <div className="flex gap-5 text-black">
          {/* logo */}
          <div className="font-primary flex gap-5 ">
            <h1 className="text-lg">RM</h1>
            <div class="w-px h-6 bg-gray-400"></div>
          </div>

          {/* links */}
          <div className='hidden lg:block'>
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
          <div className="hidden md:inline-block group text-white bg-black  py-3 px-6 rounded-lg font-medium cursor-pointer">
            Plan a Trip
            <i className="ri-sparkling-line ml-3  transition-transform duration-300 transform group-hover:rotate-[15deg]"></i>
          </div>
          {/* menu-button */}
          <div className='lg:hidden'>
            <i class="ri-menu-line text-2xl md:text-3xl"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar