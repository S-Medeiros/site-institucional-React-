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
      link: "https://linktr.ee/medeirossupermercados?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnA0y05HuWtUcWYgaJ6GDCbQGWdIam3OfnMXll40wcm67J2xryJ-KhotUYn30_aem_o7b4WKz3FbRzrQeqlW7EhA",
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
