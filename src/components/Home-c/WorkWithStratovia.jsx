import React from "react";
import "../../assets/css/HomeCss/WorkWithStratovia.css";

function WorkWithStratovia() {
  return (
    <>
      <section className="work-with-stratovia">
        <div className="wws-wrapper">
          <div className="text-center">
            <h2 className="wws-header">Why work with Stratovia?</h2>
            <p className="wws-sub-title mb-5">
              We are a team of experts who are passionate about helping
              businesses succeed online. We offer a wide range of services,
              including domain registration, web hosting, website design and
              development, and digital marketing.
            </p>
          </div>
          <div className="row g-4 mb-5">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="wws-card domain">
                <h3 className="wws-card-title">
                  .com to .xyz — a huge selection from the largest domain
                  registraiton
                </h3>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="wws-card security">
                <h3 className="wws-card-title">
                  We take security seriously, with 24/7 monitoring and advanced
                  DDoS protection.
                </h3>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="wws-card world">
                <h3 className="wws-card-title">
                  We offer a wide range of services, including domain
                  registration, web hosting, website design and development, and
                  digital marketing.
                </h3>
              </div>
            </div>
          </div>
          <div className="row g-4 mb-5">
            <div className="col-12 col-md-6 col-lg-5">
              <div className="wws-card server">
                <h3 className="wws-card-title">
                  We are a team of experts who are passionate about helping
                  businesses succeed online.
                </h3>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-7">
              <div className="wws-card digital-market">
                <h3 className="wws-card-title">
                  Intelligent, future-ready technology that enables your business to scale from local presence to global impact with speed, security, and reliability.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default WorkWithStratovia;
