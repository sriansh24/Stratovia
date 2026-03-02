import React from "react";
import { Form } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import "../../assets/css/HomeCss/DomainSearch.css";

function DomainSearch() {
  return (
    <section className="domain-section">
      <div className="domain-container">
        <div className="domain-content">
          <h1 className="domain-title mt-4 pt-4">Welcome to Stratovia</h1>
          <p className="domain-subtitle">
            Your one-stop solution for all your web hosting needs. Experience
            unparalleled performance, security, and support with Stratovia.
          </p>
        </div>
        <div className="domain-search-wrapper">
          <div className="domain-search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              htmlFor="text"
              id="text"
              placeholder="Type the domain you want!"
              className="domain-input"
            />
            <button className="domain-btn">Find My Domain</button>
          </div>
          <div className="domain-offer-card">
            <p>
              <span className="domain-offer"><strong>.CLUB</strong></span>
              <span className="d-offer">
                &#8377;200.00/1st Yr<sup>*</sup>.
                <br />
                Bring People Together
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DomainSearch;
