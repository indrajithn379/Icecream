import React, { useEffect, useRef } from "react";

const Carousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;

    const interval = setInterval(() => {
      const nextButton = carousel.querySelector(".carousel-control-next");
      if (nextButton) {
        nextButton.click();
      }
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div id="crdiv">
      <div
        id="carouselExample"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ height: "300px !important" }}
        ref={carouselRef}
      >
        <h1
          style={{
            position: "absolute",
            top: "30%",
            left: "25%",
            transform: "translate(-50%, -50%)",
            zIndex: "1",
            color: "ghostblack",
            fontFamily: "Fantasy",
            fontSize: "250px",
          }}
        >
          Frozen
        </h1>
        <h1
          style={{
            position: "absolute",
            top: "30%",

            left: "73%",
            transform: "translate(-50%, -50%)",
            zIndex: "1",
            color: "brown",
            fontFamily: "Fantasy",
            fontSize: "250px",
          }}
        >
          Treats!
        </h1>
        <div
          style={{
            position: "absolute",
            transform: "translate(-50%, -50%)",
            zIndex: "1",
            top: "200%",
            left: "50%",
            fontSize: "50px",
            fontFamily: "fantasy",
            color: "brown",
            whiteSpace: "nowrap",
            textAlign: "center",
            marginTop: "47%",
          }}
        >
          <div
            className="line"
            style={{
              borderTop: "3px solid #000",
              width: "20%",
              margin: "0 auto",
            }}
          ></div>
          Best Prices We Offer For Ice Cream Lovers!
        </div>
        {/* <img
          src=""
          alt=""
          style={{
            position: "absolute",
            top: "25%",
            left: "15%",
            width: "70%",
            height: "80%",
          zIndex: "2",
          }}
        /> */}

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="carousel-2.jpg" className="d-block w-100" alt="Image 1" />
          </div>
          <div className="carousel-item">
            <img src="carousel-1.jpg" className="d-block w-100" alt="Image 2" />
          </div>
          <div className="carousel-item">
            <img src="carousel-2.jpg" className="d-block w-100" alt="Image 3" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
