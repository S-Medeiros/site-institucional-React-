import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import slider1 from "../../assets/slider1.png";
import slider2 from "../../assets/slider2.png"; 
import slider3 from "../../assets/Screenshot_1.png";

const ImageCarousel = () => {
  const images = [
    slider1,
    slider2,
    slider3,
  ];

  const [index, setIndex] = useState(0);
  const intervalTime = 6000;

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
      {images.map((image, idx) => (
        <Carousel.Item key={idx}>
          <img
            className="d-block w-100"
            src={image}
            alt={`Slide ${idx + 1}`}
            style={{ height: "auto", objectFit: "cover" }}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;