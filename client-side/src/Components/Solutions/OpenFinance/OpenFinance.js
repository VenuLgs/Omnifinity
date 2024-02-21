import React from "react";
import { Fade } from "react-awesome-reveal";
import "./OpenFinance.css"; // Assuming you're using react-reveal for animations

export default function OpenFinance() {
  return (
    <div className="AnalyticsTotalContainer">
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-12">
            <div>
              <div className="OpenFinanceImageContainer  mr-0 w-100"></div>

              <div className="OpenFinance-content-container">
                <Fade direction="up">
                  <h6 className="p-2  mb-3 AnalyticsSubHeadings">Solutions</h6>
                  <h1 className="p-2  mb-3 AnalyticsHeading">Open Finance</h1>
                  <p className="p-2 mb-3 AnalyticsParagraph">
                    Revolutionize your finance for greater collaboration
                  </p>
                </Fade>
              </div>
            </div>
          </div>
          <div className="col-12  col-lg-6">
            <p
              style={{ fontSize: "18px", lineHeight: 1.9 }}
              className="p-4 pl-3 mt-3"
            >
              At Omnifinity, we understand the rapidly evolving landscape of
              finance and the need for innovative solutions to meet the demands
              of modern businesses. That's why we offer a comprehensive suite of
              open finance solutions designed to empower organizations of all
              sizes and industries. <br /> <br /> &nbsp; &nbsp; Open finance is
              a revolutionary concept that embraces the power of open APIs to
              enable seamless integration and collaboration between various
              financial service providers. By adopting open finance, businesses
              can leverage the capabilities of multiple financial platforms,
              systems, and services to create tailored solutions that meet their
              unique requirements.
            </p>
          </div>
          <div className="col-12 col-lg-6 p-5 d-flex justify-content-center">
            <Fade direction="down">
              <div className="OpenFinanceCardsContainer shadow">
                <h1
                  className="p-3 text-center mb-0 AnalyticsEnquiryHeading"
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
                  <p className="mb-2 mt-2 text-left p-2">
                    Please fill in your information and we'll get in touch with
                    you.
                  </p>
                  <label htmlFor="firstName">
                    First Name <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    style={{ border: "1px solid" }}
                    required
                    type="text"
                    id="firstName"
                    className="w-100 mt-3 p-2 mb-3"
                  />
                  <label htmlFor="lastName">
                    Last Name <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    style={{ border: "1px solid" }}
                    required
                    type="text"
                    id="lastName"
                    className="w-100 mt-3 p-2 mb-3"
                  />
                  <label htmlFor="email">
                    Email<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    style={{ border: "1px solid" }}
                    required
                    type="email"
                    id="email"
                    className="w-100 mt-3 p-2 mb-3"
                  />
                  <label htmlFor="phoneNumber">
                    Phone Number <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    style={{ border: "1px solid" }}
                    required
                    type="tel"
                    id="phoneNumber"
                    className="w-100 mt-3 p-2 mb-3"
                  />
                  <label htmlFor="companyName">
                    Company Name <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    style={{ border: "1px solid" }}
                    required
                    type="text"
                    id="companyName"
                    className="w-100 mt-3 p-2 mb-3"
                  />

                  <label htmlFor="jobTitle">
                    Job Title <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    style={{ border: "1px solid" }}
                    required
                    type="text"
                    id="jobTitle"
                    className="w-100 mt-3 p-2 mb-3"
                  />
                  <label htmlFor="countryRegion">
                    Country/Region <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    style={{ border: "1px solid" }}
                    required
                    type="text"
                    id="countryRegion"
                    className="w-100 mt-3 p-2 mb-3"
                  />
                  <label htmlFor="message">
                    Message <span style={{ color: "red" }}>*</span>
                  </label>
                  <textarea
                   style={{border:"1px solid"}}
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
              <h2 className="text-center mt-3 mb-3">
                Benefits of Using Omnifinity Open Finance Solution
              </h2>
            </Fade>
          </div>
          <div className="col-12 p-3 mt-3 mb-3  shadow-on-hover text-center col-md-4">
            <Fade direction="up">
              <img
                src="https://27058982.fs1.hubspotusercontent-eu1.net/hubfs/27058982/ACP/Open%20Finance-01.jpg"
                alt=""
              />
              <h3
                className="text-center mt-2 mb-2"
                style={{ color: "#134391" }}
              >
                Enhanced Interoperability
              </h3>
              <p className="text-center mt-2 mb-2">
                Promote seamless integration and communication between different
                financial service providers, enabling businesses to connect and
                exchange data effortlessly. This interoperability improves
                operational efficiency, reduces manual efforts, and streamlines
                financial processes
              </p>
            </Fade>
          </div>
          <div className="col-12 p-3  mt-3 mb-3  shadow-on-hover text-center col-md-4">
            <Fade direction="up">
              <img
                src="https://27058982.fs1.hubspotusercontent-eu1.net/hubfs/27058982/ACP/Open%20Finance-02.jpg"
                alt=""
              />
              <h3
                className="text-center mt-2 mb-2"
                style={{ color: "#134391" }}
              >
                Expanded Financial Services
              </h3>
              <p className="text-center mt-2 mb-2">
                Businesses gain access to a wide range of financial services
                through a unified interface. This allows organizations to offer
                their customers a comprehensive suite of services, including
                banking, payments, lending, investments, and more. It opens up
                new revenue streams and provides a seamless user experience.
              </p>
            </Fade>
          </div>
          <div className="col-12 p-3 mt-3 mb-3  shadow-on-hover text-center col-md-4">
            <Fade direction="up">
              <img
                src="https://27058982.fs1.hubspotusercontent-eu1.net/hubfs/27058982/ACP/Open%20Finance-03.jpg"
                alt=""
              />
              <h3
                className="text-center mt-2 mb-2"
                style={{ color: "#134391" }}
              >
                Increased Flexibility and Customization
              </h3>
              <p className="text-center mt-2 mb-2">
                Businesses can tailor financial services to their specific
                needs. By leveraging APIs and connecting with multiple
                platforms, organizations can create customized solutions that
                align with their unique requirements, providing greater
                flexibility and agility in the marketplace.
              </p>
            </Fade>
          </div>
          <div className="col-12 p-3 mt-3 mb-3 shadow-on-hover text-center col-md-6">
            <Fade direction="up">
              <img
                src="https://27058982.fs1.hubspotusercontent-eu1.net/hubfs/27058982/ACP/Open%20Finance-04.jpg"
                alt=""
              />
              <h3
                className="text-center mt-2 mb-2"
                style={{ color: "#134391" }}
              >
                Improved User Experience
              </h3>
              <p className="text-center mt-2 mb-2">
                Organizations can deliver a seamless and personalized user
                experience to their customers. By integrating different
                financial services into a unified interface, businesses can
                provide a convenient and efficient way for users to manage their
                finances, access information, and perform transactions.
              </p>
            </Fade>
          </div>
          <div className="col-12 p-3 mt-3 mb-3 shadow-on-hover  text-center col-md-6">
            <Fade direction="up">
              <img
                src="https://27058982.fs1.hubspotusercontent-eu1.net/hubfs/27058982/ACP/Open%20Finance-05.jpg"
                alt=""
              />
              <h3
                className="text-center mt-2 mb-2"
                style={{ color: "#134391" }}
              >
                Cost Savings
              </h3>
              <p className="text-center mt-2 mb-2">
                Open finance solutions can result in significant cost savings
                for businesses. By automating manual processes, reducing
                duplication of efforts, and eliminating the need for multiple
                systems, organizations can streamline operations and reduce
                operational costs.
              </p>
            </Fade>
          </div>
          <div className="col-12">
            <Fade direction="up">
              <h1 className="text-center mt-3 mb-3">
                Why Omnifinity is the Comprehensive Partner for your Open
                Finance Solution
              </h1>
              <p className="text-center mt-3 mb-3">
                Omnifinity is your go-to partner for open finance solutions.
                With our comprehensive suite of services, cutting-edge
                technology, and customer-focused approach, we empower businesses
                to thrive in the digital age of finance. Experience the power of
                open finance with Abacus. Contact us today to learn more about
                how we can transform your financial operations.
              </p>
            </Fade>
          </div>
          <div className="col-12 text-center mt-4 mb-4">
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
