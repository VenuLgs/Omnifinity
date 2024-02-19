import React from "react";
import { Fade } from "react-awesome-reveal";

export default function DigitalIdentity() {
  return (
    <div className="AnalyticsTotalContainer">
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-12">
            <div>
              <div className="AnalyticsImageContainer  mr-0 w-100"></div>

              <div className="content-container">
                <Fade direction="up">
                  <h6 className="p-2  mb-3 AnalyticsSubHeadings">
                    Innovation Solutions
                  </h6>
                  <h1 className="p-2   mb-3 AnalyticsHeading">
                    Digital Identity and <br /> Access Management
                  </h1>
                  <p className="p-2 mb-3 AnalyticsParagraph">
                    Safeguard Your Digital World with Powerful Identity Access
                    <br />
                    Management Solutions
                  </p>
                </Fade>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <p style={{ fontSize: "18px" }} className="p-4 pl-3 mt-3">
              Digital Identity and Access Management (IAM) is essential for
              modern cybersecurity as it enables organizations to manage digital
              identities and control access to sensitive information and
              resources. IAM encompasses various technologies, including
              authentication, authorization, and identity governance, that work
              together to ensure that only authorized individuals have access to
              specific data and systems. Implementing a robust IAM system
              provides many benefits, such as increased security, improved
              compliance, streamlined access management, and centralized control
              over user permissions. A well-designed IAM system can improve
              organizational efficiency, enhance security, and enable businesses
              to achieve their goals in a safe and secure digital environment.
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
                  <p className="mb-2 mt-2 text-center p-2">
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
                    type="email"
                    id="email"
                    className="w-100 mt-3 p-2 mb-3"
                  />
                  <label htmlFor="phoneNumber">
                    Phone Number <span style={{ color: "red" }}>*</span>{" "}
                    {/* corrected label text */}
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
                  <label htmlFor="CountryRegion">
                    Country/Region <span style={{ color: "red" }}>*</span>{" "}
                  </label>
                  <input
                    required
                    type="text"
                    id="CountryRegion"
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
                    type="submit"
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
          <div className="col-12 text-center mb-3 mt-3">
            <Fade direction="up">
              <h2 className="text-center mt-3 mb-3">
                Key Features of Omnifinity Digital Identity and Access
                Management Service
              </h2>
              <p
                style={{ fontSize: "18px" }}
                className="text-center mt-3 mb-3 "
              >
                At Omnifinity, we offer a comprehensive Identity and Access
                Management solution, leveraging powerful features that enable
                organizations to manage digital identities and control access to
                sensitive information and resources. Our solution provides
                increased security, improved compliance, streamlined access
                management, and improved organizational efficiency, making us
                the perfect partner for organizations looking to implement a
                robust IAM system.
              </p>
            </Fade>
          </div>

          <div className="col-12 mt-3 mb-3 p-3 col-md-4  shadow text-center">
            <Fade direction="up">
              <img
                height="150"
                width="150"
                src="https://27058982.fs1.hubspotusercontent-eu1.net/hubfs/27058982/ACP%20-%20Innovation%20Solutions%20-%20Digital%20Identity%20and%20Access%20Management-01.jpg"
                alt=""
              />
              <h3
                className="text-center"
                style={{ fontSize: "20px", color: "#134391" }}
              >
                Authentication
              </h3>
              <p className="text-center">
                IAM provides robust authentication mechanisms that help
                organizations verify the identity of users and devices trying to
                access their systems and data.
              </p>
            </Fade>
          </div>

          <div className="col-12 mt-3 mb-3 p-3 col-md-4 shadow text-center">
            <Fade direction="up">
              {" "}
              <img
                height="150"
                width="150"
                src="https://27058982.fs1.hubspotusercontent-eu1.net/hubfs/27058982/ACP%20-%20Innovation%20Solutions%20-%20Digital%20Identity%20and%20Access%20Management-02.jpg"
                alt=""
              />
              <h3
                className="text-center"
                style={{ fontSize: "20px", color: "#134391" }}
              >
                Multi-Factor Authentication
              </h3>
              <p className="text-center">
                IAM solutions offer multi-factor authentication capabilities,
                such as biometrics, tokens, and smart cards, that provide an
                additional layer of security to protect against unauthorized
                access.
              </p>
            </Fade>
          </div>
          <div className="col-12 mt-3 mb-3 p-3 col-md-4 shadow text-center">
            <Fade direction="up">
              {" "}
              <img
                height="150"
                width="150"
                src="https://27058982.fs1.hubspotusercontent-eu1.net/hubfs/27058982/ACP%20-%20Innovation%20Solutions%20-%20Digital%20Identity%20and%20Access%20Management-03.jpg"
                alt=""
              />
              <h3
                className="text-center"
                style={{ fontSize: "20px", color: "#134391" }}
              >
                Authorization
              </h3>
              <p className="text-center">
                IAM enables organizations to control access to data and systems
                based on user roles, privileges, and attributes.
              </p>
            </Fade>
          </div>
          <div className="col-12 mt-3 mb-3 p-3 col-md-4 shadow text-center">
            <Fade direction="up">
              {" "}
              <img
                height="150"
                width="150"
                src="https://27058982.fs1.hubspotusercontent-eu1.net/hubfs/27058982/ACP%20-%20Innovation%20Solutions%20-%20Digital%20Identity%20and%20Access%20Management-06.jpg"
                alt=""
              />
              <h3
                className="text-center"
                style={{ fontSize: "20px", color: "#134391" }}
              >
                Single Sign-On
              </h3>
              <p className="text-center">
                IAM solutions enable users to access multiple applications and
                services using a single set of credentials, improving user
                experience and simplifying access management.
              </p>
            </Fade>
          </div>

          <div className="col-12 mt-3 mb-3 p-3 col-md-4 shadow text-center">
            <Fade direction="up">
              <img
                height="150"
                width="150"
                src="https://27058982.fs1.hubspotusercontent-eu1.net/hubfs/27058982/ACP%20-%20Innovation%20Solutions%20-%20Digital%20Identity%20and%20Access%20Management-05.jpg"
                alt=""
              />
              <h3
                className="text-center"
                style={{ fontSize: "20px", color: "#134391" }}
              >
                Identity Governance
              </h3>
              <p className="text-center">
                IAM offers a centralized view of user identities, roles, and
                permissions, making it easier to manage and monitor access
                rights across the organization.
              </p>
            </Fade>
          </div>
          <div className="col-12 mt-3 mb-3 p-3 col-md-4 shadow text-center">
            <Fade direction="up">
              {" "}
              <img
                height="150"
                width="150"
                src="https://27058982.fs1.hubspotusercontent-eu1.net/hubfs/27058982/ACP%20-%20Innovation%20Solutions%20-%20Digital%20Identity%20and%20Access%20Management-04.jpg"
                alt=""
              />
              <h3
                className="text-center"
                style={{ fontSize: "20px", color: "#134391" }}
              >
                Cloud IAM
              </h3>
              <p className="text-center">
                With the increasing adoption of cloud services, IAM solutions
                have evolved to provide identity and access management for
                cloud-based applications and services.
              </p>
            </Fade>
          </div>
          <div className="col-12 mt-3  shadow mb-3 p-3  text-center">
            <Fade direction="up">
              <img
                src="https://27058982.fs1.hubspotusercontent-eu1.net/hubfs/27058982/ACP%20-%20Innovation%20Solutions%20-%20Digital%20Identity%20and%20Access%20Management-07.jpg"
                height="150"
                width="150"
                alt=""
              />
              <h3
                className="text-center"
                style={{ fontSize: "20px", color: "#134391" }}
              >
                Compliance
              </h3>
              <p className="text-center">
                IAM solutions help organizations comply with data privacy
                regulations and standards, such as GDPR, HIPAA, and PCI-DSS.
              </p>
            </Fade>
          </div>

          <div className="col-12 mt-3 mb-3">
            <Fade direction="up">
              <h3 className="mt-3 mb-3 text-center">
                Omnifinity, the ideal partner for IAM solutions, Providing
                comprehensive and customizable services
              </h3>
              <p style={{ fontSize: "18px" }} className="mt-3 text-center mb-3">
                So are you looking to streamline your Identity and Access
                Management process? Look no further than our comprehensive
                solution. For your end consumers, our Customer IAM ensures a
                secure, personalized, and omnichannel experience. For your
                business customers, we offer seamless Single Sign-on,
                multi-factor authentication, and anomaly detection to boost
                customer trust in your business. And for your employees, our
                consolidated identity solution improves collaboration,
                efficiency, and productivity across your organization. Trust us
                to handle all your IAM needs and take your business to the next
                level.
              </p>
            </Fade>
          </div>
          <div className="col-12 text-center mb-3 mt-3">
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
