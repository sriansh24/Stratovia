import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Button from 'react-bootstrap/Button';
import SearchDomain from "../../assets/img/domain/search-domain.webp";
import CoDomain from "../../assets/img/domain/co-domain.webp";
import GetDomain from "../../assets/img/domain/get-domain.webp";
import Email from "../../assets/img/hosting/professional-email-buying.webp";
import Website from "../../assets/img/hosting/website-buying.webp";
import Hosting from "../../assets/img/hosting/web-hosting.webp";
import Wordpress from "../../assets/img/worpress-hosting/wordpress-hosting.webp";
import SSL from "../../assets/img/worpress-hosting/ssl-certificate.webp";
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
                        <img src={SearchDomain} loading="lazy" alt="Domains" />
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
                        <img src={CoDomain} loading="lazy" alt=".co Domain" />
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
                        <img src={GetDomain} loading="lazy" alt=".in Domain" />
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

          {/* ========== HOSTING ========== */}
          {activeSection === SECTIONS.HOSTING && (
            <section className="business-cards-section">
              <div className="container">
                <div className="row g-4">
                  {/* CARD 1 */}
                  <div className="col-12 col-sm-6 col-lg-4">
                    <div
                      className="business-card"
                      onClick={() => goToPage("/professional-business-email")}
                    >
                      <div className="business-card-image">
                        <img src={Email} loading="lazy" alt="Email" />
                      </div>

                      <div className="business-card-body">
                        <h3>Professional Email ₹ 45.00 per user/mo</h3>
                        <p>
                          Earn trust from your customers with an email address
                          that matches your domain.
                        </p>

                        <button
                          className="btn btn-dark"
                          onClick={(e) => {
                            e.stopPropagation();
                            goToPage("/professional-business-email");
                          }}
                        >
                          Get Your Email
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* CARD 2 */}
                  <div className="col-12 col-sm-6 col-lg-4">
                    <div
                      className="business-card"
                      onClick={() => goToPage("/create-builder")}
                    >
                      <div className="business-card-image">
                        <img src={Website} loading="lazy" alt="Website" />
                      </div>

                      <div className="business-card-body">
                        <h3>Websites ₹ 229.00/mor</h3>
                        <p>
                          Start for free and quickly design a beautiful,
                          mobile-friendly site.
                        </p>

                        <button
                          className="btn btn-dark"
                          onClick={(e) => {
                            e.stopPropagation();
                            goToPage("/create-builder");
                          }}
                        >
                          Create Your Website
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* CARD 3 */}
                  <div className="col-12 col-sm-6 col-lg-4">
                    <div
                      className="business-card"
                      onClick={() => goToPage("/web-hosting")}
                    >
                      <div className="business-card-image">
                        <img src={Hosting} loading="lazy" alt=".in Domain" />
                      </div>

                      <div className="business-card-body">
                        <h3>Web Hosting ₹ 69.00/mo</h3>
                        <p>Get fast load times and 99.9% uptime guaranteed.</p>

                        <button
                          className="btn btn-dark"
                          onClick={(e) => {
                            e.stopPropagation();
                            goToPage("/web-hosting");
                          }}
                        >
                          Check Plans and Price
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* ========== HOSTING ========== */}
          {activeSection === SECTIONS.WORDPRESS && (
            <section className="business-cards-section">
              <div className="container">
                <div className="row g-4">
                  {/* CARD 1 */}
                  <div className="col-12 col-sm-6 col-lg-6">
                    <div
                      className="business-card"
                      onClick={() => goToPage("/wordpress-hosting")}
                    >
                      <div className="business-card-image">
                        <img src={Wordpress} loading="lazy" alt="Wordpress" />
                      </div>

                      <div className="business-card-body">
                        <h3>Hosting for WordPress ₹ 369.00/mo</h3>
                        <p>
                          Let AI quickly build a fully-managed website that's always up to date, with no worries.
                        </p>

                        <button
                          className="btn btn-dark"
                          onClick={(e) => {
                            e.stopPropagation();
                            goToPage("/wordpress-hosting");
                          }}
                        >
                          View Plans and Price
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* CARD 2 */}
                  <div className="col-12 col-sm-6 col-lg-6">
                    <div
                      className="business-card"
                      onClick={() => goToPage("/ssl-certificate")}
                    >
                      <div className="business-card-image">
                        <img src={SSL} loading="lazy" alt="SSL" />
                      </div>

                      <div className="business-card-body">
                        <h3>SSL Certificates ₹ 3,228.00/yr</h3>
                        <p>
                          Help keep sensitive data secure on your site and boost search ranking with an SSL Certificate.
                        </p>

                        <button
                          className="btn btn-dark"
                          onClick={(e) => {
                            e.stopPropagation();
                            goToPage("/ssl-certificate");
                          }}
                        >
                          Secure Your Data
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </section>
    </>
  );
}

export default HomeBusinessIdeas;
