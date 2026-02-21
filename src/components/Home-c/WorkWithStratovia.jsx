import React, { useEffect, useRef } from "react";
import "../../assets/css/HomeCss/WorkWithStratovia.css";

function WwsExperiment() {
  const cardsRef = useRef([]);
  const addRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      },
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);
  return (
    <>
      <section aria-labelledby="wws-heading" className="work-with-stratovia">
        <div className="wws-wrapper">
          <div className="text-center">
            <h2 id="wws-heading" className="wws-header">
              Why work with Stratovia?
            </h2>
            <p className="wws-sub-title mb-5">
              We are a team of experts who are passionate about helping
              businesses succeed online. We offer a wide range of services,
              including domain registration, web hosting, website design and
              development, and digital marketing.
            </p>
          </div>
          <div className="wws-grid">
            <div ref={addRef} className="wws-card domain">
              <h3 className="wws-card-title">
                .com to .xyz — a huge selection from the largest domain
                registration
              </h3>
            </div>

            <div ref={addRef} className="wws-card security">
              <h3 className="wws-card-title">
                We take security seriously, with 24/7 monitoring and advanced
                DDoS protection.
              </h3>
            </div>

            <div ref={addRef} className="wws-card world">
              <h3 className="wws-card-title">
                From domain registration to web hosting, website design, and
                digital marketing.
              </h3>
            </div>

            <div ref={addRef} className="wws-card server">
              <h3 className="wws-card-title">
                A passionate team helping businesses succeed online.
              </h3>
            </div>

            <div ref={addRef} className="wws-card digital-market large">
              <h3 className="wws-card-title">
                Intelligent, future-ready technology that enables your business
                to scale from local presence to global impact.
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default WwsExperiment;