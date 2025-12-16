import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import slider0 from "../../assets/slider1.png";
import slider1 from "../../assets/slider0.jpeg";
import slider2 from "../../assets/slider2.png";

const ImageCarousel = () => {
  const slides = [
    {
      image: slider2,
      link: "https://whats.idsolucoesweb.com.br/v2/bot/medeiros/pagina",
    },
    {
      image: slider1,
      link: "https://SEU_LINK_AQUI",
    },
    {
      image: slider0,
      link: "https://cadastramento-medeiros.mercafacil.com/home",
    },
  ];

  const [index, setIndex] = useState(0);
  const intervalTime = 6000;

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
      {slides.map((slide, idx) => (
        <Carousel.Item key={idx}>
          <a
            href={slide.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="d-block w-100"
              src={slide.image}
              alt={`Slide ${idx + 1}`}
              style={{ cursor: "pointer", objectFit: "cover" }}
            />
          </a>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
