import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const MainLayoutFooter = () => {
  return (
    <footer className="bg-dark text-light py-5 mt-auto">
      <div className="container">

        {/* TOP FOOTER LINKS */}
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-6 g-4">
          <div className="col">
            <section>
              <h6 className="footer-h">About Stratovia</h6>
              <ul className="list-unstyled footer-sub">
                <li><a href="#" className="text-light text-decoration-none">About Us</a></li>
                <li><a href="#" className="text-light text-decoration-none">Renewals & Billing</a></li>
                <li><a href="#" className="text-light text-decoration-none">Careers</a></li>
                <li><a href="#" className="text-light text-decoration-none">Contact Us</a></li>
                <li><a href="#" className="text-light text-decoration-none">Stratovia Blog</a></li>
              </ul>
            </section>
          </div>

          <div className="col">
            <section>
              <h6 className="footer-h">Support</h6>
              <ul className="list-unstyled footer-sub">
                <li><a href="#" className="text-light text-decoration-none">Product Support</a></li>
                <li><a href="#" className="text-light text-decoration-none">Report Abuse</a></li>
                <li><a href="#" className="text-light text-decoration-none">Resources</a></li>
                <li><a href="#" className="text-light text-decoration-none">Domain Policy</a></li>
              </ul>
            </section>
          </div>

          <div className="col">
            <section>
              <h6 className="footer-h">Resources</h6>
              <ul className="list-unstyled footer-sub">
                <li><a href="#" className="text-light text-decoration-none">Webmail</a></li>
                <li><a href="#" className="text-light text-decoration-none">WHOIS</a></li>
                <li><a href="#" className="text-light text-decoration-none">ICANN Confirmation</a></li>
                <li><a href="#" className="text-light text-decoration-none">Developers</a></li>
                <li><a href="#" className="text-light text-decoration-none">Corporate Domains</a></li>
              </ul>
            </section>
          </div>

          <div className="col">
            <section>
              <h6 className="footer-h">Partner Programs</h6>
              <ul className="list-unstyled footer-sub">
                <li><a href="#" className="text-light text-decoration-none">Affiliates</a></li>
                <li><a href="#" className="text-light text-decoration-none">Resellers</a></li>
                <li><a href="#" className="text-light text-decoration-none">Stratovia Pro</a></li>
              </ul>
            </section>
          </div>

          <div className="col">
            <section>
              <h6 className="footer-h">Account</h6>
              <ul className="list-unstyled footer-sub">
                <li><a href="#" className="text-light text-decoration-none">Sign In</a></li>
                <li><a href="#" className="text-light text-decoration-none">Billing</a></li>
                <li><a href="#" className="text-light text-decoration-none">Create Account</a></li>
              </ul>
            </section>
          </div>

          <div className="col">
            <section>
              <h6 className="footer-h">Shopping</h6>
              <ul className="list-unstyled footer-sub">
                <li><a href="#" className="text-light text-decoration-none">Buy a Domain</a></li>
                <li><a href="#" className="text-light text-decoration-none">Websites</a></li>
                <li><a href="#" className="text-light text-decoration-none">Business Email</a></li>
                <li><a href="#" className="text-light text-decoration-none">WordPress</a></li>
                <li><a href="#" className="text-light text-decoration-none">Hosting</a></li>
              </ul>
            </section>
          </div>
        </div>

        {/* MIDDLE BAR */}
        <div className="row align-items-center mt-5 text-center text-md-start">
          <div className="col-md-4 mb-3 mb-md-0">
            <strong>STRATOVIA</strong>
          </div>
          <div className="col-md-4 d-flex justify-content-center gap-4 fs-5 mb-3 mb-md-0">
            <a href="https://facebook.com" className="text-light opacity-75" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com" className="text-light opacity-75" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com" className="text-light opacity-75" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://linkedin.com" className="text-light opacity-75" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          </div>
          <div className="col-md-4 d-flex justify-content-center justify-content-md-end gap-4">
            <a href="#" className="text-light text-decoration-none">Home</a>
            <a href="#" className="text-light text-decoration-none">About</a>
            <a href="#" className="text-light text-decoration-none">Contact</a>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        <div className="text-center small opacity-75">
          © {new Date().getFullYear()} Stratovia. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default MainLayoutFooter;