import React from "react";
import Carousel from "react-bootstrap/Carousel";

const CarouselComponent = ({ sliders }) => {
  console.log(sliders);
  return (
    <Carousel className="container pt-3" style={{ maxHeight: "500px" }}>
      {sliders.map((slider) => (
        <Carousel.Item key={slider._id}>
          <img
            className="d-block w-100 h-50"
            src={`${process.env.REACT_APP_API_URL}/${slider.image}`}
            alt={slider.title ? slider.title.en : ""}
            style={{ maxHeight: "400px" }}
          />
          <Carousel.Caption>
            <h3>{slider.title ? slider.title.en : ""}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
