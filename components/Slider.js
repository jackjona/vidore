import React, { useEffect, useState } from "react";

const Slider = ({ children, type, location }) => {
  const [height, setHeight] = useState("");

  const slideLeft = () => {
    var slider = document.getElementById(type);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById(type);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  useEffect(() => {
    if (location === "home") {
      setHeight("h-[25.8rem] md:h-[38.8rem]");
    } else {
      setHeight("h-[24rem]");
    }
  }, [location]);

  return (
    <div className="relative flex items-center bg-black mt-8 px-6">
      <button
        className="bg-white/10 hover:bg-white/20 rounded-l-2xl hover:rounded-l-[1.8rem] hover:scale-[1.01] transition-all duration-300 ease-in-out md:px-2"
        aria-label="slide left"
        onClick={slideLeft}
      >
        <div className={`flex mx-3 items-center ${height}`}>
          <div className="w-10 h-10 text-white">
            <img src="/left-chevron.svg" className="text-white" />
          </div>
        </div>
      </button>
      <div
        id={type}
        className="flex z-0 gap-6 snap-x overflow-y-hidden overflow-x-scroll scroll scroll-smooth no-scrollbar pl-14 pr-2"
      >
        {children}
      </div>
      <button
        className="bg-white/10 hover:bg-white/20 rounded-r-2xl hover:rounded-r-[1.8rem] transition-all duration-300 ease-in-out md:px-2"
        aria-label="slide right"
        onClick={slideRight}
      >
        <div className={`flex mx-3 items-center ${height}`}>
          <div className="w-10 h-10 text-white">
            <img src="/right-chevron.svg" className="text-white" />
          </div>
        </div>
      </button>
    </div>
  );
};

export default Slider;
