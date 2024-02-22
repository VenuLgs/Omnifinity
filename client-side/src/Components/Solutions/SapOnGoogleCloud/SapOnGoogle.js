import React from "react";

import "../../../Components/Services/EnterpriseEdition/SapHana/SapHana.css";
import { Fade } from "react-awesome-reveal";

import sapongoogle1 from "../../../images/Solutions/SapOnGoogle/sapongoogle1.jpg";
import sapongoogle2 from "../../../images/Solutions/SapOnGoogle/sapongoogle2.jpg";
import sapongoogle3 from "../../../images/Solutions/SapOnGoogle/sapongoogle3.jpg";

import sapongoogle4 from "../../../images/Solutions/SapOnGoogle/sapongoogle4.jpg";

import { useNavigate } from "react-router-dom";
const data = [
  {
    id: 1,
    image: sapongoogle1,
    heading: "Running SAP applications on Google Cloud",
    description:
      "This solution enables organizations to leverage Google Cloud's infrastructure for efficient and secure SAP workloads.",
    link: "",
  },
  {
    id: 2,
    image: sapongoogle2,
    heading: "Running SAP HANA on Google Cloud",
    description:
      "Organizations can utilize Google Cloud's in-memory database management system for real-time analytics and advanced data processing.",
    link: "",
  },
  {
    id: 3,
    image: sapongoogle3,
    heading: "Anthos for SAP",
    description:
      "Google Cloud's hybrid and multi-cloud platform can be used to modernize SAP landscapes, providing a consistent and secure experience across on-premises and cloud environments.",
    link: "",
  },
  {
    id: 4,
    image: sapongoogle4,
    heading: "Leveraging Google Cloud's AI and ML capabilities",
    description:
      "AI and ML can help optimize and improve SAP processes, automating repetitive tasks, detecting anomalies, and making predictions based on historical data.",
    link: "",
  },
];

const SapOnGoogle = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="saphana-first-container">
        <div className="sap-on-google-bg-container"></div>
        <div className="saphana-bg-sub-container">
          <h3 className="saphana-enterprise-system-text">SOLUTIONS</h3>
          <h1 className="saphana-bg-heading">SAP on Google Cloud</h1>
          <p className="saphana-bg-sub-heading">
            Modernize your SAP with the best of Google's technology and
            Omnifinity' world-class capabilities
          </p>
        </div>
      </div>
      <div className="saphana-second-main-container">
        <div className="saphana-second-main-left-container">
          <Fade direction="up">
            <p className="saphana-second-main-left-descripton">
              By utilizing Google Cloud's infrastructure to run SAP applications
              you can provide your business high-performance computing
              capabilities, scalability, and security features to ensure that
              your SAP ERP runs efficiently and securely. SAP S/4HANA is an
              advanced ERP (Enterprise Resource Planning) system designed to
              help businesses operate smarter, faster, and simpler. This modern
              platform is powered by state-of-the-art in-memory computing
              technology and offers a range of advanced features to improve the
              user experience, simplify business processes, and provide
              real-time insights.
            </p>
          </Fade>
        </div>

        <Fade direction="down" className="enquiry-form-main-container">
          <div>
            <h1 className="enquiry-form-main-heading">Enquire Now</h1>
            <p className="enquiry-form-sub-heading">
              Please fill in your information and we'll get in touch with you.
            </p>
            <div className="enquiry-form-sub-container">
              <div className="enquiry-form-input-container">
                <label className="enquiry-form-label-name">
                  First name<span style={{ color: "red" }}>*</span>
                </label>
                <input type="text" className="equiry-form-input-field" />
              </div>
              <div className="enquiry-form-input-container">
                <label className="enquiry-form-label-name">
                  Last name<span style={{ color: "red" }}>*</span>
                </label>
                <input type="text" className="equiry-form-input-field" />
              </div>
              <div className="enquiry-form-input-container">
                <label className="enquiry-form-label-name">
                  Email<span style={{ color: "red" }}>*</span>
                </label>
                <input type="text" className="equiry-form-input-field" />
              </div>
              <div className="enquiry-form-input-container">
                <label className="enquiry-form-label-name">
                  Phone Number<span style={{ color: "red" }}>*</span>
                </label>
                <input type="text" className="equiry-form-input-field" />
              </div>
              <div className="enquiry-form-input-container">
                <label className="enquiry-form-label-name">
                  Company name<span style={{ color: "red" }}>*</span>
                </label>
                <input type="text" className="equiry-form-input-field" />
              </div>
              <div className="enquiry-form-input-container">
                <label className="enquiry-form-label-name">
                  Country/Region<span style={{ color: "red" }}>*</span>
                </label>
                <input type="text" className="equiry-form-input-field" />
              </div>
              <div>
                <button className="enquiry-form-submit-button">Submit</button>
              </div>
            </div>
          </div>
        </Fade>
      </div>
      <div className="saphana-systems-card-main-container">
        <h1 className="saphana-systems-card-main-heading">
          Omnifinity' Google Cloud Services for SAP Modernization
        </h1>
        <p className="saphana-last-description">
          Omnifinity leverages Google Cloud to help enterprises transform their
          business infrastructure and undergo successful cloud migration and
          modernization. Our dedicated team of Google Cloud experts delivers
          tailored solutions to your unique business needs, ensuring seamless
          digital transformation by simplifying the complex structures of the
          cloud system.
        </p>

        <ul className="saphana-systems-card-flex-container">
          {data.map((each) => {
            return (
              <Fade damping={0.1} direction="up" delay={90}>
                <li className="sap-on-google-systems-card-container">
                  <img
                    src={each.image}
                    alt=""
                    className="saphana-systems-card-image"
                  />
                  <h4 className="saphana-systems-card-heading">
                    {each.heading}
                  </h4>
                  <p className="saphana-systems-card-description">
                    {each.description}
                  </p>
                </li>
              </Fade>
            );
          })}
        </ul>
      </div>

      <div className="saphana-last-container">
        <button
          className="omnifinity-button"
          onClick={() => navigate("/contactUs")}
        >
          Contact Us
        </button>
      </div>
    </>
  );
};
export default SapOnGoogle;
