import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import carousel1 from '../../assets/img/carousel/carousel1.webp';
import carousel2 from '../../assets/img/carousel/carousel2.webp';
import carousel3 from '../../assets/img/carousel/carousel3.webp';
import carousel4 from '../../assets/img/carousel/carousel4.webp';
import '../../assets/css/HomeCss/HomeCarousel.css';

function HomeCarousel() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <>
            <section>
                <div className="container-fluid p-0">
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                        <Carousel.Item>
                            <img src={carousel4} width="100%" height="890px" alt="carousel4" />
                            <Carousel.Caption>
                                <h5>Stratovia Airo<sup>TM</sup></h5>
                                <p>
                                    Get a .com only for ₹ 99* for the first year. <br />
                                    Includes Airo<sup>TM</sup><br />
                                    *Terms and conditions apply. <br />
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={carousel1} width="100%" height="890px" alt="carousel1" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={carousel2} width="100%" height="890px" alt="carousel2" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={carousel3} width="100%" height="890px" alt="carousel3" />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </section>
            <section>
                <div className="container mt-2 mb-5">
                    <div className="review-sec">
                        <div className="text-center">
                            <p className="review-text">Our customer reviews <strong>Excellent</strong> |
                                <span>
                                    <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M12 2l2.9 6.1 6.7.9-4.8 4.7 1.2 6.6L12 17.8 6 20.3l1.2-6.6L2.4 9l6.7-.9L12 2z"
                                            fill="#54ec2dff"
                                        />
                                    </svg>
                                    <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M12 2l2.9 6.1 6.7.9-4.8 4.7 1.2 6.6L12 17.8 6 20.3l1.2-6.6L2.4 9l6.7-.9L12 2z"
                                            fill="#54ec2dff"
                                        />
                                    </svg>
                                    <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M12 2l2.9 6.1 6.7.9-4.8 4.7 1.2 6.6L12 17.8 6 20.3l1.2-6.6L2.4 9l6.7-.9L12 2z"
                                            fill="#54ec2dff"
                                        />
                                    </svg>
                                    <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M12 2l2.9 6.1 6.7.9-4.8 4.7 1.2 6.6L12 17.8 6 20.3l1.2-6.6L2.4 9l6.7-.9L12 2z"
                                            fill="#54ec2dff"
                                        />
                                    </svg>
                                    <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
                                4.5 out of 5 based on 235,100+ reviews | <strong>
                                    <span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12 2l2.9 6.1 6.7.9-4.8 4.7 1.2 6.6L12 17.8 6 20.3l1.2-6.6L2.4 9l6.7-.9L12 2z"
                                                fill="#54ec2dff"
                                            />
                                        </svg>
                                    </span>
                                    Trustpilot</strong>
                            </p>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default HomeCarousel;