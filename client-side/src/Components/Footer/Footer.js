import React from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Footer.css";
import Scroll from "../Scroll/Scroll.js";

import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <div
      className="totalFooterContainer p-2"
      style={{ background: "#2b2b2b", color: "#ffffff" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3 mt-3 p-3 text-center">
            <h1 className="mt-2 mb-2 footerheading  text-center">Omnifinity</h1>

            <div className="footer-social-media-icons-main-container">
              <div className="contact-page-social-icon-container contact-page-facebook-container">
                <a
                  href="https://m.facebook.com/LabyrinthGlobalSolutions/"
                  target="blank"
                  className="contact-page-social-icon-anchor"
                >
                  <span className="footer-social-media-span-ele">
                    <FaFacebookF className="contact-page-social-icon" />
                  </span>
                </a>
              </div>

              <div className="contact-page-social-icon-container contact-page-instagram-container">
                <a
                  href="https://instagram.com/labyrinth_global_solutions?igshid=NTc4MTIwNjQ2YQ=="
                  target="blank"
                  className="contact-page-social-icon-anchor"
                >
                  <span>
                    <FaInstagramSquare className="contact-page-social-icon" />
                  </span>
                </a>
              </div>
              <div className="contact-page-social-icon-container contact-page-linkedin-container">
                <a
                  href="https://www.linkedin.com/company/14662183/admin/feed/posts/"
                  target="blank"
                  className="contact-page-social-icon-anchor"
                >
                  <span>
                    <FaLinkedin className="contact-page-social-icon" />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3 mt-3">
            <ul className="p-3 footer-links-list ">
              <li className="mt-2 mb-2 ">
                <Link to="/Oracle" className="footer-link">
                  {" "}
                  Oracle
                </Link>
              </li>
              <li className="mt-2 mb-2">
                <Link to="/Paas" className="footer-link">
                  Paas
                </Link>
              </li>
              <li className="mt-2 mb-2">
                <Link to="/Iaas" className="footer-link">
                  Iaas
                </Link>
              </li>
              <li className="mt-2 mb-2">
                <Link to="/mendixPage" className="footer-link">
                  Mendix
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-3 mt-3">
            <ul className="p-3 footer-links-list ">
              <li className="mt-2 mb-2">
                <Link to="/polarionPage" className="footer-link">
                  Polarion
                </Link>
              </li>
              <li className="mt-2 mb-2">
                <Link to="/AnalyticsBI" className="footer-link">
                  Analytics & BI
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-12 text-center">
            © 2024 Omnifinity. All Rights Reserved Designed & Developed with by
          </div>
          <div className="col-12">
            <Scroll />
          </div>
        </div>
      </div>
    </div>
  );
}
export { Footer };
