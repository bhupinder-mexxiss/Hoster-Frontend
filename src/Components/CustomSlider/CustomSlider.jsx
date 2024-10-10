import React, { useState, useRef, useEffect } from "react";

const CustomSlider = ({
  children,
  showDots = true, // Add prop to show/hide dots
  showButtons = true, // Add prop to show/hide buttons
  responsive = { lg: 4, md: 3, sm: 1 }, // Responsive breakpoints default values
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const slideRef = useRef();

  const childrenArray = React.Children.toArray(children); // Converts children to an array
  const totalSlides = childrenArray.length; // Get the total number of slides

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - slidesToShow ? 0 : prevIndex + 1
    );
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - slidesToShow : prevIndex - 1
    );
  };

  //   useEffect(() => {
  //     const interval = setInterval(goToNextSlide, 5000);
  //     return () => clearInterval(interval);
  //   }, [slidesToShow]);

  const updateSlidesToShow = () => {
    const width = window.innerWidth;
    if (width >= 992) {
      setSlidesToShow(responsive.lg); // Use responsive prop for large screens
    } else if (width >= 768) {
      setSlidesToShow(responsive.md); // Use responsive prop for medium screens
    } else {
      setSlidesToShow(responsive.sm); // Use responsive prop for small screens
    }
  };

  useEffect(() => {
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  useEffect(() => {
    slideRef.current.style.transition = "transform 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${
      (currentIndex * 100) / slidesToShow
    }%)`;
  }, [currentIndex, slidesToShow]);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex"
        ref={slideRef}
        style={{  }} // Adjust width based on total slides and slides to show
      >
        {childrenArray.map((child, index) => (
          <div
            key={index}
            className="flex-shrink-0 p-2"
            style={{width: `${100 / slidesToShow}%`}} // Each slide takes 100% / slidesToShow
          >
            {child}
          </div>
        ))}
      </div>

      {/* Conditionally render Previous Button */}
      {showButtons && (
        <button
          className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 p-3 rounded-full text-white hover:bg-gray-700"
          onClick={goToPreviousSlide}
        >
          Prev
        </button>
      )}

      {/* Conditionally render Next Button */}
      {showButtons && (
        <button
          className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 p-3 rounded-full text-white hover:bg-gray-700"
          onClick={goToNextSlide}
        >
          Next
        </button>
      )}

      {/* Conditionally render Dots */}
      {showDots && (
        <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
          {childrenArray.map((_, idx) => (
            <div
              key={idx}
              className={`h-2 w-2 rounded-full ${
                Math.floor(currentIndex / slidesToShow) === idx
                  ? "bg-white"
                  : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSlider;
