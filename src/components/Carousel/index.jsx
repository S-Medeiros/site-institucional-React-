import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import slider1 from "../../assets/slider0.jpeg";
import slider0 from "../../assets/slider1.png";
import slider2 from "../../assets/slider2.png";

const ImageCarousel = () => {
  const images = [
    slider2,
    slider1,
    slider0,
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
        <Carousel.Item className="color-danger" key={idx}>
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