import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const MainLayoutFooter = () => {
  return (
    <footer className="bg-dark text-light py-5 mt-auto">
      <section className="container">
        {/* TOP FOOTER LINKS */}
        <div className="d-flex justify-content-between align-items-center footer-h gap-4">
          <a href="/stratovia/home" className="text-light text-decoration-none">
            Home
          </a>
          <a href="/stratovia/blog" className="text-light text-decoration-none">
            Blog
          </a>
          <a href="/stratovia/contact-us" className="text-light text-decoration-none">
            Contact Us
          </a>
          <a href="/stratovia/help" className="text-light text-decoration-none">
            Help
          </a>
          <a href="/stratovia/pricing" className="text-light text-decoration-none">
            Pricing
          </a>
        </div>

        {/* MIDDLE BAR */}
        <div className="d-flex justify-content-between align-items-center mt-5">
          <p className="text-start">
            <strong>STRATOVIA</strong>
          </p>
          <div className="text-end">
            <div className="d-flex justify-content-center gap-4 fs-5">
              <a
                href="https://facebook.com"
                className="text-light opacity-75"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com"
                className="text-light opacity-75"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com"
                className="text-light opacity-75"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com"
                className="text-light opacity-75"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        <hr className="border-secondary my-4 w-100" />

        <div className="text-center small opacity-75">
          © {new Date().getFullYear()} Stratovia. All rights reserved.
        </div>
      </section>
    </footer>
  );
};

export default MainLayoutFooter;
