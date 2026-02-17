import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import domain1 from '../../assets/img/domain/domain1.jpg';
import domain2 from '../../assets/img/domain/domain2.webp';
import domain from '../../assets/img/domain/domain2-1.webp';
import '../../assets/css/HomeCss/HomeBusinessIdeas.css';

function HomeBusinessIdeas() {
    const SECTIONS = {
        DOMAINS: "domains",
        HOSTING: "hosting",
        WORDPRESS: "wordpress"
    };
    const [activeSection, setActiveSection] = useState(SECTIONS.DOMAINS);
    const navigate = useNavigate();
    const goToPage = (path) => {
        navigate(path);
    };
    return (
        <>
            <div className="container mt-5">
                <section>
                    <h3 className="text-center">Explore Business Ideas</h3>
                    <p className="text-center">Discover a wide range of business ideas to kickstart your entrepreneurial journey.
                        Whether you're looking for tech startups, e-commerce ventures,
                        or service-based businesses, we have something for everyone.
                    </p>
                </section>
                <section className="row mt-1">
                    <div className="col-md-4 mb-3">
                        <button className={`btn w-100 ${activeSection === SECTIONS.DOMAINS ? "btn-primary" : "btn-outline-primary"}`}
                            onClick={() => setActiveSection(SECTIONS.DOMAINS)}>Domains</button>
                    </div>
                    <div className="col-md-4 mb-3">
                        <button className={`btn w-100 ${activeSection === SECTIONS.HOSTING ? "btn-primary" : "btn-outline-secondary"}`}
                            onClick={() => setActiveSection(SECTIONS.HOSTING)}>Web and Email Hosting</button>
                    </div>
                    <div className="col-md-4 mb-3">
                        <button className={`btn w-100 ${activeSection === SECTIONS.WORDPRESS ? "btn-primary" : "btn-outline-success"}`}
                            onClick={() => setActiveSection(SECTIONS.WORDPRESS)}>WordPress Hosting</button>
                    </div>
                    {activeSection === SECTIONS.DOMAINS && (
                        <div className="container my-4">
                            <div className="row g-4">
                                <div className="col-lg-7">
                                    <div className="domain-card h-100 clickable-card"
                                        onClick={() => goToPage("/domains")}>
                                        <div className="inner-card">
                                            <img
                                                src={domain1}
                                                alt="domain"
                                                className="img-fluid"
                                            />
                                        </div>
                                        <h3 className="card-title mt-3">Domains</h3>
                                        <p className="card-desc">
                                            Get started with the perfect domain, which comes with free
                                            domain privacy protection forever.
                                        </p>
                                        <button
                                            className="btn btn-dark mt-2"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                goToPage("/domains");
                                            }}
                                        >
                                            Search Domains
                                        </button>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="row g-4">
                                        <div className="col-12">
                                            <div className="domain-card clickable-card h-100"
                                                onClick={() => goToPage("/co-domain")}>
                                                <div className="inner-card">
                                                    <img
                                                        src={domain2}
                                                        alt="codomain"
                                                        className="img-fluid"
                                                    />
                                                </div>
                                                <h3 className="card-title mt-3">.co for &#8377; 799.00/1st year</h3>
                                                <p className="card-desc">
                                                    Ensure your company and website stand out with a .co domain. 2-year purchase required. 
                                                    Additional year(s) ₹ 4,599.00.
                                                </p>
                                                <button
                                                    className="btn btn-dark mt-2"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        goToPage("/co-domain");
                                                    }}
                                                >
                                                    Find Your Domain
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-12 mt-2">
                                            <div className="domain-card clickable-card h-100"
                                                onClick={() => goToPage("/in-domain")}>
                                                <div className="inner-card">
                                                    <img
                                                        src={domain}
                                                        alt="in-domain"
                                                        className="img-fluid"
                                                    />
                                                </div>
                                                <h3 className="card-title mt-3">.in for &#8377; 100.00/1st year</h3>
                                                <p className="card-desc">
                                                    Boost your online presence with a .in domain, perfect for businesses and individuals in India. 
                                                    2-year purchase required.
                                                </p>
                                                <button
                                                    className="btn btn-dark mt-2"
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
                        </div>
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
                </section>
            </div>
        </>
    );
}

export default HomeBusinessIdeas;