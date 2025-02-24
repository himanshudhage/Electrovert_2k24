import React, { useState, useEffect } from "react";
import "./Slider.css";

const Slider = () => {
  // State to track the current image index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of images
  const images = [
    { src: "https://picsum.photos/id/1004/400/400", alt: "a lovely kiss in the night" },
    { src: "https://picsum.photos/id/1013/400/400", alt: "a woman inside a car" },
    { src: "https://picsum.photos/id/1066/400/400", alt: "a baby" },
    { src: "https://picsum.photos/id/1025/400/400", alt: "a majestic waterfall" },
    { src: "https://picsum.photos/id/1035/400/400", alt: "a beautiful mountain" },
    { src: "https://picsum.photos/id/1042/400/400", alt: "an airplane wing" },
    { src: "https://picsum.photos/id/1050/400/400", alt: "a cute dog" },
    { src: "https://picsum.photos/id/1056/400/400", alt: "a serene lake" },
    { src: "https://picsum.photos/id/1062/400/400", alt: "a forest path" },
    { src: "https://picsum.photos/id/1070/400/400", alt: "a city skyline" },
  ];

  // Change slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000); // 3-second interval
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div className="slider-container">
        <h1>Event Gallery</h1>
        <div className="slider">
          {images.map((img, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? "active" : ""}`}
            >
              {index === currentSlide && <img src={img.src} alt={img.alt} />}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Slider;
