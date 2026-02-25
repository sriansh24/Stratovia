import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import carousel1 from "../../assets/img/carousel/carousel1.webp";
import carousel2 from "../../assets/img/carousel/carousel2.webp";
import carousel3 from "../../assets/img/carousel/carousel3-3.webp";
import carousel4 from "../../assets/img/carousel/carousel4.webp";
import "../../assets/css/HomeCss/HomeCarousel.css";

function HomeCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      {/* ================= HERO CAROUSEL ================= */}
      <section className="home-carousel">
        <Carousel activeIndex={index} onSelect={handleSelect} fade>
          <Carousel.Item>
            <div className="carousel-img-wrapper">
              <img src={carousel1} alt="Stratovia Airo" />
            </div>

            <Carousel.Caption className="carousel-custom-caption">
              <h1>
                Stratovia Airo<sup>TM</sup>
              </h1>
              <p>
                Get a .com only for ₹99* for the first year.
                <br />
                Includes Airo<sup>TM</sup>
                <br />
                *Terms and conditions apply.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          {[carousel2, carousel3, carousel4].map((img, i) => (
            <Carousel.Item key={i}>
              <div className="carousel-img-wrapper">
                <img src={img} alt={`carousel-${i}`} />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>

      {/* ================= REVIEW SECTION ================= */}
      <section className="review-section">
        <div className="review-container">
          <p className="review-text">
            Our customer reviews <strong>Excellent</strong> |{" "}
            <span>
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2l2.9 6.1 6.7.9-4.8 4.7 1.2 6.6L12 17.8 6 20.3l1.2-6.6L2.4 9l6.7-.9L12 2z"
                  fill="#54ec2dff"
                />
              </svg>
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2l2.9 6.1 6.7.9-4.8 4.7 1.2 6.6L12 17.8 6 20.3l1.2-6.6L2.4 9l6.7-.9L12 2z"
                  fill="#54ec2dff"
                />
              </svg>
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2l2.9 6.1 6.7.9-4.8 4.7 1.2 6.6L12 17.8 6 20.3l1.2-6.6L2.4 9l6.7-.9L12 2z"
                  fill="#54ec2dff"
                />
              </svg>
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2l2.9 6.1 6.7.9-4.8 4.7 1.2 6.6L12 17.8 6 20.3l1.2-6.6L2.4 9l6.7-.9L12 2z"
                  fill="#54ec2dff"
                />
              </svg>
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <clipPath id="half">
                    <rect x="0" y="0" width="12" height="24" />
                  </clipPath>
                </defs>
                <path
                  d="M12 2l2.9 6.1 6.7.9-4.8 4.7 1.2 6.6L12 17.8 6 20.3l1.2-6.6L2.4 9l6.7-.9L12 2z"
                  fill="#E0E0E0"
                />
                <path
                  d="M12 2l2.9 6.1 6.7.9-4.8 4.7 1.2 6.6L12 17.8 6 20.3l1.2-6.6L2.4 9l6.7-.9L12 2z"
                  fill="#54ec2dff"
                  clip-path="url(#half)"
                />
              </svg>
            </span>
            4.5 out of 5 based on 235,100+ reviews.
          </p>
        </div>
      </section>
    </>
  );
}

export default HomeCarousel;