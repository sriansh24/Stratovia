import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Button from 'react-bootstrap/Button';
import domain1 from "../../assets/img/domain/domain1.jpg";
import domain2 from "../../assets/img/domain/domain2.webp";
import domain from "../../assets/img/domain/domain2-1.webp";
import "../../assets/css/HomeCss/HomeBusinessIdeas.css";

function HomeBusinessIdeas() {
  const SECTIONS = {
    DOMAINS: "domains",
    HOSTING: "hosting",
    WORDPRESS: "wordpress",
  };
  const [activeSection, setActiveSection] = useState(SECTIONS.DOMAINS);
  const navigate = useNavigate();
  const goToPage = (path) => {
    navigate(path);
  };
  return (
    <>
      <section className="home-business-ideas">
        <div className="hbi-wrapper">
          <div className="hbi-header">
            <h2 className="text-center">Explore Business Ideas</h2>
            <p>
              Discover a wide range of business ideas to kickstart your
              entrepreneurial journey. Whether you're looking for tech startups,
              e-commerce ventures, or service-based businesses, we have
              something for everyone.
            </p>
          </div>
          <section className="tabs-wrapper">
            <div className="tabs-container">
              <button
                className={`tab-item ${activeSection === SECTIONS.DOMAINS ? "active" : ""}`}
                onClick={() => setActiveSection(SECTIONS.DOMAINS)}
              >
                Domains
              </button>

              <button
                className={`tab-item ${activeSection === SECTIONS.HOSTING ? "active" : ""}`}
                onClick={() => setActiveSection(SECTIONS.HOSTING)}
              >
                Web & Email Hosting
              </button>

              <button
                className={`tab-item ${activeSection === SECTIONS.WORDPRESS ? "active" : ""}`}
                onClick={() => setActiveSection(SECTIONS.WORDPRESS)}
              >
                WordPress Hosting
              </button>
            </div>
          </section>

          {/* ========== DOMAINS ========== */}
          {activeSection === SECTIONS.DOMAINS && (
            <section className="business-cards-section">
              <div className="container">
                <div className="row g-4">
                  {/* CARD 1 */}
                  <div className="col-12 col-sm-6 col-lg-4">
                    <div
                      className="business-card"
                      onClick={() => goToPage("/domains")}
                    >
                      <div className="business-card-image">
                        <img src={domain1} alt="Domains" />
                      </div>

                      <div className="business-card-body">
                        <h3>Domains</h3>
                        <p>
                          Get started with the perfect domain, which comes with
                          free domain privacy protection forever.
                        </p>

                        <button
                          className="btn btn-dark"
                          onClick={(e) => {
                            e.stopPropagation();
                            goToPage("/domains");
                          }}
                        >
                          Search Domains
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* CARD 2 */}
                  <div className="col-12 col-sm-6 col-lg-4">
                    <div
                      className="business-card"
                      onClick={() => goToPage("/co-domain")}
                    >
                      <div className="business-card-image">
                        <img src={domain2} alt=".co Domain" />
                      </div>

                      <div className="business-card-body">
                        <h3>.co for ₹799.00 / 1st year</h3>
                        <p>
                          Ensure your company and website stand out with a .co
                          domain. 2-year purchase required. Additional year(s)
                          ₹4,599.00.
                        </p>

                        <button
                          className="btn btn-dark"
                          onClick={(e) => {
                            e.stopPropagation();
                            goToPage("/co-domain");
                          }}
                        >
                          Find Your Domain
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* CARD 3 */}
                  <div className="col-12 col-sm-6 col-lg-4">
                    <div
                      className="business-card"
                      onClick={() => goToPage("/in-domain")}
                    >
                      <div className="business-card-image">
                        <img src={domain} alt=".in Domain" />
                      </div>

                      <div className="business-card-body">
                        <h3>.in for ₹100.00 / 1st year</h3>
                        <p>
                          Boost your online presence with a .in domain, perfect
                          for businesses and individuals in India. 2-year
                          purchase required.
                        </p>

                        <button
                          className="btn btn-dark"
                          onClick={(e) => {
                            e.stopPropagation();
                            goToPage("/in-domain");
                          }}
                        >
                          Get Your .in Domain
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {activeSection === SECTIONS.HOSTING && (
            <div className="container my-4">
              <div className="row g-4">
                <div className="col-lg-7">
                  <div className="domain-card h-100">
                    <h5 className="card-title">ABCDEFGHI</h5>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="row g-4">
                    <div className="col-12">
                      <div className="domain-card">
                        {/* <button className="btn btn-outline-danger w-100">VPS</button> */}
                        <h5 className="card-title">ABCDEFGHI</h5>
                      </div>
                    </div>
                    <div className="col-12 mt-2">
                      <div className="domain-card">
                        {/* <button className="btn btn-outline-warning w-100">Dedicated Servers</button> */}
                        <h5 className="card-title">ABCDEFGHI</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === SECTIONS.WORDPRESS && (
            <div className="container my-4">
              <div className="row g-4">
                <div className="col-lg-7">
                  <div className="domain-card h-100">
                    <h5 className="card-title">JHKLMNOPQR</h5>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="row g-4">
                    <div className="col-12">
                      <div className="domain-card">
                        {/* <button className="btn btn-outline-danger w-100">VPS</button> */}
                        <h5 className="card-title">JHKLMNOPQR</h5>
                      </div>
                    </div>
                    <div className="col-12 mt-2">
                      <div className="domain-card">
                        {/* <button className="btn btn-outline-warning w-100">Dedicated Servers</button> */}
                        <h5 className="card-title">JHKLMNOPQR</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default HomeBusinessIdeas;
