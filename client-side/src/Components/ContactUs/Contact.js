import React from "react";
import Contact1 from "../Images/contact1.webp";
import Contact2 from "../Images/contact2.webp";
import Contact3 from "../Images/contact3.webp";
import Contact4 from "../Images/conatct4.webp";
import ReCAPTCHA from "react-google-recaptcha";
import { Fade } from "react-awesome-reveal";
// import Footer from "../Footer/Footer"
import "./Contact.css";
const TEST_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

const Data = [
  {
    projectId: 1,
    imageUrl: Contact1,
    title: "London",
    description: "Two Kingdom Street, 6th Floor, Paddington,London W2 6BD ",
    phone: "+44 (0) 203 580 4343",
  },
  {
    projectId: 2,
    imageUrl: Contact2,
    title: "New York",
    description: "405 Lexington Avenue, The Chrysler Building,New York 10174",
    phone: "+1 347 701 4221",
  },
  {
    projectId: 3,
    imageUrl: Contact3,
    title: "Dubai",
    description:
      "Liberty House, Sheikh Zayed Rd, Trade Centre, DIFC Dubai 417624",
    phone: "+971 4 446 1890",
  },
  {
    projectId: 4,
    imageUrl: Contact4,
    title: "Riyadh",
    description: "Akaria, Olayya Street,PO Box 295879,Riyadh 11351",
    phone: "+966 11 4600 670",
  },
];

export default function Contact() {
  const _reCaptchaRef = React.createRef();
  return (
    <div className="totalContactUsContainer">
      <div className="container-fluid p-0 w-100">
        <div className="row">
          <div style={{ height: "400px" }}>
            <div className="col-12 contactbgcontainer">
              {/* <h1 className="contactHeading text-primary" >Contact US!</h1> */}
            </div>
            <div className="col-12 text-center w-100">
              <h1 className="contactHeading text-center">Contact US!</h1>
            </div>
          </div>
          {Data.map((each, index) => (
            <div className="col-12 col-md-3 text-center w-90 mt-3 mb-3 p-4">
              <Fade direction="up">
                <img
                  src={each.imageUrl}
                  height="150"
                  width="150"
                  alt={`${index + 1}`}
                />
                <h6 className="omnifinity-card-heading">{each.title}</h6>
                <p className="contact-us-card-description">
                  {each.description}
                </p>
                <p className="contact-us-card-description">{each.phone}</p>
              </Fade>
            </div>
          ))}
          <div className="col-12">
            <div className="container">
              <div className="row shadow mb-3">
                <div className="col-12">
                  <form
                    className="form-control"
                    style={{
                      border: "none",
                      outline: "none",
                      backgroundColor: "#161616",
                    }}
                  >
                    <div className="container-fluid p-0  w-100">
                      <div className="row">
                        <div className="col-12 p-2 text-center bg-secondary">
                          <h3 style={{ color: "#ffffff" }}>Get in touch!</h3>
                        </div>
                        <div className="p-2 mt-3 mb-3 col-md-6">
                          <label
                            htmlFor="email"
                            className="omnifinity-label"
                            style={{ fontWeight: "normal" }}
                          >
                            Email <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            id="email"
                            type="text"
                            className="w-100 p-2 contact-us-input"
                            placeholder="Enter your email"
                          />
                        </div>
                        <div className="p-2 mt-3 mb-3 col-md-6">
                          <label
                            htmlFor="phoneNumber"
                            className="omnifinity-label"
                            style={{ fontWeight: "normal" }}
                          >
                            PhoneNumber <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            id="phoneNumber"
                            className="w-100 p-2 contact-us-input"
                            placeholder="Enter your Phone number"
                          />
                        </div>
                        <div className="p-2 mt-3 mb-3 col-md-6">
                          <label
                            className="omnifinity-label"
                            htmlFor="firstName"
                            style={{ fontWeight: "normal" }}
                          >
                            First name
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            className="w-100 p-2 contact-us-input"
                            placeholder="Enter First Name"
                          />
                        </div>
                        <div className="p-2 mt-3 mb-3 col-md-6">
                          <label
                            htmlFor="lastName"
                            className="omnifinity-label"
                            style={{ fontWeight: "normal" }}
                          >
                            Last name
                          </label>
                          <input
                            id="lastName"
                            type="text"
                            className="w-100 p-2 contact-us-input"
                            placeholder="Enter Last Name"
                          />
                        </div>
                        <div
                          className="p-2 mt-3 mb-3 col-md-6"
                          style={{ fontWeight: "normal" }}
                        >
                          <label
                            className="omnifinity-label"
                            htmlFor="companyName"
                            style={{ fontWeight: "normal" }}
                          >
                            Company name
                          </label>
                          <input
                            type="text"
                            id="companyName"
                            className="w-100 p-2 contact-us-input"
                            placeholder="Enter Company Name"
                          />
                        </div>
                        <div className="p-2 mt-3 mb-3 col-md-6">
                          <label
                            className="omnifinity-label"
                            htmlFor="CountryRegion"
                            style={{ fontWeight: "normal" }}
                          >
                            Country/Region
                          </label>
                          <input
                            type="text"
                            id="CountryRegion"
                            className="w-100 p-2 contact-us-input"
                            placeholder="Country/Region"
                          />
                        </div>
                        <div className="col-12">
                          <label
                            className="omnifinity-label"
                            htmlFor="message"
                            style={{ fontWeight: "normal" }}
                          >
                            Message
                          </label>
                          <textarea
                            rows="5"
                            id="message"
                            className="w-100 p-2 mt-3 mb-3 contact-us-input"
                            cols="54"
                            placeholder="Enter Message"
                          ></textarea>
                        </div>
                        <div className="col-12 text-center w-100">
                          <ReCAPTCHA
                            style={{
                              display: "inline-block",
                              backgroundColor: "black",
                              border: "none",
                            }}
                            theme="dark"
                            ref={_reCaptchaRef}
                            sitekey={TEST_SITE_KEY}
                          />
                        </div>
                        <div className="text-center">
                          <button
                            type="submit"
                            className="omnifinity-button-active"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
