import React from "react";
import Carousel from 'react-bootstrap/Carousel';

function Carrusel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.revistagq.com/photos/62850b36465ae1cafe83259e/16:9/w_2560%2Cc_limit/Auto-BMW-3er-Facelift.jpeg"
          alt="BMW"
        />
        <Carousel.Caption>
          <h3>BMW Serie 3</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.autoblog.nl/files/2022/04/huracan-tecnica-2022-00002.jpeg"
          alt="Lamborghini Huracan"
        />

        <Carousel.Caption>
          <h3>Lamborghini Huracan</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://carnovo.com/wp-content/uploads/2017/11/Aston-Martin-Vantage-2018-1200x675.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Aston-Martin-Vantage-2018</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;
