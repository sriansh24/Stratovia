import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Domain from "../../assets/img/carousel/domain.webp";
import BusinessGrowth from "../../assets/img/carousel/business-growth.webp";
import StratoviaTeam from "../../assets/img/carousel/stratovia-team.webp";
import StratoviaData from "../../assets/img/carousel/stratovia-data.webp";
import MobileDomain from "../../assets/img/carousel/m-domain.webp";
import MobileBusinessGrowth from "../../assets/img/carousel/m-business-growth.webp";
import MobileStratoviaTeam from "../../assets/img/carousel/m-stratovia-team.webp";
import MobileStratoviaData from "../../assets/img/carousel/m-stratovia-data.webp";
import "../../assets/css/HomeCss/HomeCarousel.css";

function HomeCarousel() {
  const [index, setIndex] = useState(0);

  const slides = [
    {
      desktop: Domain,
      mobile: MobileDomain,
      title: "Stratovia Airo",
      desc: `Get a .com only for ₹99* for the first year.
              Includes Airo™
              *Terms and conditions apply.`,
    },
    // {
    //   desktop: BusinessGrowth,
    //   mobile: MobileBusinessGrowth,
    // },
    // {
    //   desktop: StratoviaTeam,
    //   mobile: MobileStratoviaTeam,
    // },
    // {
    //   desktop: StratoviaData,
    //   mobile: MobileStratoviaData,
    // },
  ];

  return (
    <>
      {/* ================= HERO CAROUSEL ================= */}
      <section className="home-carousel">
        <Carousel activeIndex={index} onSelect={setIndex} fade>
          {slides.map((slide, i) => (
            <Carousel.Item key={i}>
              <div className="carousel-img-wrapper">
                <picture>
                  <source srcSet={slide.desktop} media="(min-width: 768px)" />
                  <img
                    src={slide.mobile}
                    loading="lazy"
                    alt={`carousel-${i}`}
                  />
                </picture>
              </div>

              {slide.title && (
                <Carousel.Caption className="carousel-custom-caption">
                  <h2>{slide.title}</h2>
                  <p>{slide.desc}</p>
                </Carousel.Caption>
              )}
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
