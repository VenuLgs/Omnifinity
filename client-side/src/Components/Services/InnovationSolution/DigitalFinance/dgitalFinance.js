import React from "react";
import { Fade } from "react-awesome-reveal";
import "./digitalFinance.css";


export default function DigitalFinance() {
  return (
    <div className="AnalyticsTotalContainer">
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-12">
            <div>
              <div className=" DigitalFinanceImageContainer mr-0 w-100"></div>

              <div className="content-container">
                <Fade direction="up">
                  <h6 className="p-2  mb-3 AnalyticsSubHeadings">
                    Innovation Solutions
                  </h6>
                  <h1 className="p-2   mb-3 AnalyticsHeading">
                    Embrace the Digital <br /> Economy Today and <br />
                    Lead the Financial <br /> Future Tomorrow!
                  </h1>
                </Fade>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <p style={{ fontSize: "18px" }} className="p-4 pl-3 mt-3">
              The financial services sector is undergoing a massive shift. With
              innovators, cutting-edge technology, and digitally-savvy customers
              driving market dynamics, traditional players are facing stiff
              competition from non-financial contenders. Cloud computing and
              data analytics remain the foundation of digital transformation,
              but emerging technologies like artificial intelligence are gaining
              traction. Despite this, change management hurdles, complex
              regulations, and integration challenges are holding back financial
              firms from fully unlocking their digital investments' potential.
              It's time for these firms to embrace the digital revolution fully
              and stay ahead of the game to become the financial leaders of
              tomorrow.
            </p>
          </div>
          <div className="col-12 col-lg-6 p-5 d-flex justify-content-center">
            <Fade direction="down">
              <div className="AnalyticsCardsContainer shadow">
                <h1
                  className="p-3 text-center  mb-0 AnalyticsEnquiryHeading"
                  style={{
                    marginBottom: "0px",
                    color: "#ffffff",

                    fontWeight: "bold",
                    background: "#4353ff",
                  }}
                >
                  Enquire Now
                </h1>
                <form className="form-control p-3">
                  <p classname="mb-2 mt-2 text-left p-2">
                    Please fill in your information and we'll get in touch with
                    you.
                  </p>
                  <label htmlFor="firstName">
                    First Name <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    required
                    type="text"
                    id="firstName"
                    className="w-100 mt-3 p-2 mb-3"
                  />
                  <label htmlFor="lastName">
                    Last Name <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    required
                    type="text"
                    id="lastName"
                    className="w-100 mt-3  p-2 mb-3"
                  />
                  <label htmlFor="email">
                    Email<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    required
                    type="text"
                    id="email"
                    className="w-100 mt-3 p-2 mb-3"
                  />
                  <label htmlFor="phoneNumber">
                    PhoneNumber <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    required
                    type="text"
                    id="phoneNumber"
                    className="w-100 mt-3 p-2 mb-3"
                  />
                  <label htmlFor="CompanyName">
                    Company Name <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    required
                    type="text"
                    id="CompanyName"
                    className="w-100 mt-3 p-2 mb-3"
                  />

                  <label htmlFor="jobTitle">
                    Job Title <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    required
                    type="text"
                    id="jobTitle"
                    className="w-100 mt-3 p-2 mb-3"
                  />
                  <label htmlFor="Country/Region">
                    Country/Region <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    required
                    type="text"
                    id="Country/Region"
                    className="w-100 mt-3 p-2 mb-3"
                  />
                  <label htmlFor="message">
                    Message <span style={{ color: "red" }}>*</span>
                  </label>
                  <textarea
                    required
                    rows="5"
                    id="message"
                    className="mb-3 w-100"
                  ></textarea>
                  <button
                    className="p-3"
                    style={{
                      height: "45px",
                      width: "100px",
                      border: "none",
                      background: "#0f4494",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#ffffff",
                      borderRadius: "8px",
                    }}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Fade direction="up">
              <h2 className="text-center p-2 mt-3">
                Empowering Financial Services Firms for the Digital Future:
                Abacus as Your Trusted Transformation Partner
              </h2>
              <p className="text-center mt-3 p-2 mb-4">
                Abacus is the ideal partner for your financial services firm's
                digital transformation journey. Our expertise in intelligent
                applications, digital platforms, and domain knowledge provides
                you with the tools you need to revolutionize your business
                models and deliver an exceptional customer experience in the
                digital economy. From start to finish, we collaborate with you
                to develop a comprehensive digital strategy and implement
                tailored solutions that meet your specific requirements.
              </p>
            </Fade>
          </div>
          <div className="col-12 p-4 mb-2 text-center shadow col-md-6">
            <Fade direction="up">
              <img
                className="mb-2"
                height="150"
                width="150"
                src="https://27058982.fs1.hubspotusercontent-eu1.net/hubfs/27058982/ACP%20-%20Innovation%20Solutions%20-%20Digital%20Financial%20Services-01.jpg"
                alt=""
              />
              <h3 style={{ color: "#134391" }}>Open Banking</h3>
              <ul className="p-2">
                <li style={{ textAlign: "left" }}>APIs &amp; API Management</li>
                <li style={{ textAlign: "left" }}>
                  Data Protection/Consent Based-marketing
                </li>
                <li style={{ textAlign: "left" }}>Microservices</li>
                <li style={{ textAlign: "left" }}>Data Monetisation</li>
                <li style={{ textAlign: "left" }}>
                  Partner &amp; Customer Ecosystem
                </li>
                <li style={{ textAlign: "left" }}>Platform Economy</li>
                <li style={{ textAlign: "left" }}>
                  Identity &amp; Consent Management
                </li>
                <li style={{ textAlign: "left" }}>PSD2 Compliance</li>
              </ul>
            </Fade>
          </div>
          <div className="col-12 p-4  mb-2 text-center shadow col-md-6">
            <Fade direction="up">
              <img
                className="mb-2"
                height="150"
                width="150"
                src="https://27058982.fs1.hubspotusercontent-eu1.net/hubfs/27058982/ACP%20-%20Innovation%20Solutions%20-%20Digital%20Financial%20Services-02.jpg"
                alt=""
              />
              <h3 style={{ color: "#134391" }}>
                Omnichannel Customer Experience
              </h3>{" "}
              <ul className="p-2">
                <li style={{ textAlign: "left" }}>Consent-based Marketing</li>
                <li style={{ textAlign: "left" }}>
                  Digital Channel Management
                </li>
                <li style={{ textAlign: "left" }}>Analytics</li>
                <li style={{ textAlign: "left" }}>Personalization</li>
                <li style={{ textAlign: "left" }}>
                  Net Promoter Score (NPS)-Based Customer Feedback
                </li>
                <li style={{ textAlign: "left" }}>
                  Social Listening and Sentiment Analysis
                </li>
                <li style={{ textAlign: "left" }}>Platform Integrations</li>
                <li style={{ textAlign: "left" }}>
                  Customer Experience Management
                </li>
              </ul>
            </Fade>
          </div>
          <div className="col-12 p-4 mb-2  text-center shadow col-md-6">
            <Fade direction="up">
              <img
                className="mb-2"
                height="150"
                width="150"
                src="https://27058982.fs1.hubspotusercontent-eu1.net/hubfs/27058982/ACP%20-%20Innovation%20Solutions%20-%20Digital%20Financial%20Services-03.jpg"
                alt=""
              />
              <h3 style={{ color: "#134391" }}>Banking with AI </h3>
              <ul>
                <li style={{ textAlign: "left" }}>Conversational Banking</li>
                <li style={{ textAlign: "left" }}>
                  Natural Language Processing (NLP)
                </li>
                <li style={{ textAlign: "left" }}>Advanced Analytics</li>
                <li style={{ textAlign: "left" }}>
                  Customer Experience Management
                </li>
              </ul>
            </Fade>
          </div>
          <div className="col-12 p-4 mb-2  text-center shadow col-md-6">
            <Fade direction="up">
              <img
                className="mb-2"
                height="150"
                width="150"
                src="https://27058982.fs1.hubspotusercontent-eu1.net/hubfs/27058982/ACP%20-%20Innovation%20Solutions%20-%20Digital%20Financial%20Services-04.jpg"
                alt=""
              />
              <h3 style={{ color: "#134391" }}>Intelligent Process</h3>
              <ul className="p-2">
                <li style={{ textAlign: "left" }}>Consent-based Marketing</li>
                <li style={{ textAlign: "left" }}>
                  Digital Channel Management
                </li>
                <li style={{ textAlign: "left" }}>Analytics</li>
                <li style={{ textAlign: "left" }}>Personalization</li>
                <li style={{ textAlign: "left" }}>
                  Net Promoter Score (NPS)-Based Customer Feedback
                </li>
                <li style={{ textAlign: "left" }}>
                  Social Listening and Sentiment Analysis
                </li>
                <li style={{ textAlign: "left" }}>Platform Integrations</li>
                <li style={{ textAlign: "left" }}>
                  Customer Experience Management
                </li>
              </ul>
            </Fade>
          </div>
          <div className="col-12 text-center">
            <Fade direction="up">
              <h1 className="text-center p-2 mt-2 mb-2">
                Discover our comprehensive range of solutions designed to meet
                your financial services business needs
              </h1>
              <h5
                className="mt-2 mb-2 p-2"
                style={{ fontSize: "20px", fontWeight: "normal" }}
              >
                API Management &amp; Microservices
                <br />
                Data Management &amp; Analytics
                <br />
                Artificial Intelligence (AI) &amp; Robotic Process Automation
                (RPA)
                <br />
                Identity &amp; Access Management
                <br />
                Digital Contact Centers
                <br />
                Human Capital Management
                <br />
                Enterprise Cloud
                <br />
                Application Development
              </h5>
            </Fade>
          </div>
          <div className="col-12  mt-3 mb-3 text-center">
            <Fade direction="up">
              <button
                className="btn  mb-3 btn-primary ApplicationDevelopmentButton"
                style={{ border: "none", color: "" }}
              >
                Contact Us
              </button>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}
