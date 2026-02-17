import React from 'react';
import { Form } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import '../../assets/css/HomeCss/Home-Styles.css';

function DomainSearch() {
    return (
        <div className="container-fluid my-5">
            <div className="row justify-content-center">
                <div className="col-md-8 text-center">
                    <section>
                        <h1 className="display-4 fw-bold">Welcome to Stratovia</h1>
                        <p className="lead mt-4 mb-5">Your one-stop solution for all your web hosting needs. Experience unparalleled performance, security, and support with Stratovia.</p>
                    </section>
                    <section>
                        <div className="domain-search-wrapper row">
                            <div className="domain-search-box col-9 col-md-9 col-lg-9 mx-auto">

                                <span className="search-icon">
                                    <FaSearch size={20} />
                                </span>

                                <Form.Control type="text" placeholder="Type the domain you want" className="domain-input" />

                                <button className="domain-btn">
                                    Find My Domain
                                </button>
                            </div>
                            <div className="card col-3 col-md-3 col-lg-3 mx-auto">
                                <div className="card-body">
                                    <p>
                                        <strong>.CLUB</strong><span> &#8377;200.00/1st yr.<sup>*</sup><br />Bring People Together</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default DomainSearch;