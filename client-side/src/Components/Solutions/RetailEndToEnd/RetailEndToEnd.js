import React from "react";

import "../../../Components/Services/EnterpriseEdition/SapHana/SapHana.css";
import { Fade } from "react-awesome-reveal";

import retailendtoend1 from "../../../images/Solutions/RetailEndToEnd/retailendtoend1.webp";
import retailendtoend2 from "../../../images/Solutions/RetailEndToEnd/retailendtoend2.webp";
import retailendtoend3 from "../../../images/Solutions/RetailEndToEnd/retailendtoend3.webp";
import retailendtoend4 from "../../../images/Solutions/RetailEndToEnd/retailendtoend4.jpg";
import retailendtoend5 from "../../../images/Solutions/RetailEndToEnd/retailendtoend5.jpg";
import retailendtoend6 from "../../../images/Solutions/RetailEndToEnd/retailendtoend6.jpg";

import { useNavigate } from "react-router-dom";
const data = [
  {
    id: 1,
    image: retailendtoend1,
    heading: "Navigating the ERP Retail Journey",
    description:
      "Your trusted companion for comprehensive retail digitalization, guiding you through the complexities of transformation.",
    link: "",
  },
  {
    id: 2,
    image: retailendtoend2,
    heading: "Tailored Solutions for Every Size",
    description:
      "Omnifinity is dedicated to aligning with your specific retail needs, understanding that a standardized approach falls short. Our expertise lies in delivering tailored ERP solutions, leveraging SAP's product suite to ensure optimal fit and effectiveness.",
    link: "",
  },
  {
    id: 3,
    image: retailendtoend3,
    heading: "Seamless Integration with Third-Party Solutions ",
    description:
      "We acknowledge the importance of integrating third-party solutions to enhance functionality and establish a truly effective ecosystem for your retail operations. Our team possesses the expertise to deploy these integrations, elevating the value of your SAP ERP system and optimizing your retail workflow.",
    link: "",
  },
  {
    id: 4,
    image: retailendtoend4,
    heading: "Supercharging SAP Business One with Add-Ons ",
    description:
      "To enhance your platform further, we leverage targeted add-ons designed for retail businesses within SAP Business One. These add-ons expand the capabilities of your ERP system, enabling it to adapt and evolve alongside your evolving retail requirements.",
    link: "",
  },
];

const bannerDetails = [
  {
    id: 0,
    head: "35 +",
    title: "Years of Experience",
  },
  {
    id: 1,
    head: "1200 +",
    title: "SAP Projects",
  },
  {
    id: 2,
    head: "400 +",
    title: "SAP Consultants",
  },
  {
    id: 3,
    head: "1000 +",
    title: "POS Sold",
  },
  {
    id: 4,
    head: "20 +",
    title: "Retail Addons",
  },
  {
    id: 5,
    head: "150 +",
    title: "Retail Stores Implemented",
  },
];

const RetailEndToEnd = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="saphana-first-container">
        <div className="saphana-bg-container"></div>
        <div className="saphana-bg-sub-container">
          <h3 className="saphana-enterprise-system-text">SOLUTIONS</h3>
          <h1 className="saphana-bg-heading">End-to-End Retail</h1>
          <p className="saphana-bg-sub-heading">
            EXPERIENCE COMPREHENSIVE TRANSFORMATION WITH ABACUS CAMBRIDGE
            PARTNERS — YOUR TRUSTED RETAIL DIGITALIZATION GUIDE
          </p>
        </div>
      </div>
      <div className="saphana-second-main-container">
        <div className="saphana-second-main-left-container">
          <Fade direction="up">
            <p className="saphana-second-main-left-descripton">
              Abacus Cambridge Partners specializes in providing end-to-end
              retail ERP solutions that harness the power of SAP's suite of
              products. Our comprehensive ERP solutions are tailored to meet the
              unique needs of retail businesses, helping them streamline
              operations, enhance efficiency, and drive growth.
            </p>
            <p className="saphana-second-main-left-descripton">
              At Abacus, we understand that the retail industry operates in a
              dynamic and competitive landscape. To stay ahead, retailers need
              robust software solutions that integrate and automate their key
              business processes. This is where our end-to-end retail ERP
              solutions come into play. By leveraging SAP's suite of products,
              we offer a seamless and integrated approach to managing your
              retail operations, from inventory management and supply chain
              optimization to customer relationship management (CRM) and
              point-of-sale (POS) systems.
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
          Key Benefits of End-to-End Retail Structure
        </h1>

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
      <div className="retail-end-to-end-first-container">
        <div className="retail-end-to-end-text-container">
          <h4 className="retail-end-to-end-heading">100%</h4>
          <p className="retail-end-to-end-para"> Paperless </p>
        </div>
        <div className="retail-end-to-end-text-container">
          <h4 className="retail-end-to-end-heading">90%</h4>
          <p className="retail-end-to-end-para"> Processes are Automated </p>
        </div>
        <div className="retail-end-to-end-text-container">
          <h4 className="retail-end-to-end-heading">0%</h4>
          <p className="retail-end-to-end-para"> Inventory errors </p>
        </div>
      </div>
      <div className="saphana-systems-card-main-container">
        <h1 className="saphana-systems-card-main-heading">
          Deployment Options
        </h1>
        <p className="saphana-last-description">
          Abacus offers tailored deployment options for SAP Business One for
          Retail to fit your unique business requirements and financial
          resources.
        </p>
        <ul className="saphana-systems-card-flex-container">
          <Fade damping={0.1} direction="up" delay={90}>
            <li className="sap-on-google-systems-card-container">
              <img
                src={retailendtoend5}
                alt=""
                className="saphana-systems-card-image"
              />
              <h4 className="saphana-systems-card-heading">On Cloud</h4>
              <p className="saphana-systems-card-description">
                Maximise the ROI of your ERP investment with Abacus' highly
                scalable and flexible SAP Business One on Cloud deployment
                models, offering low TCO, faster implementation, data security,
                and better scalability options.
              </p>
            </li>
          </Fade>

          <Fade damping={0.1} direction="up" delay={90}>
            <li className="sap-on-google-systems-card-container">
              <img
                src={retailendtoend6}
                alt=""
                className="saphana-systems-card-image"
              />
              <h4 className="saphana-systems-card-heading">On-Premise</h4>
              <p className="saphana-systems-card-description">
                With Abacus's on-premise deployment option, businesses can
                benefit from having complete control over their ERP system, as
                it is installed on their own servers and maintained by their own
                IT team.{" "}
              </p>
            </li>
          </Fade>
        </ul>
      </div>

      <div className="retail-end-to-end-banner-container">
        <h1 className="retail-end-to-end-banner-heading">
          Why Abacus for your End-to-End Retail Solution
        </h1>
        <div className="retail-end-to-end-sub-container">
          {bannerDetails.map((el) => (
            <div key={el.id} className="retail-end-to-end-text-container">
              <h2 className="retail-end-to-end-heading">{el.head}</h2>
              <p className="retail-end-to-end-para">{el.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="saphana-last-container">
        <p className="saphana-last-description">
          Our team of experienced consultants will work with you to understand
          your unique business needs and develop a solution that is customized
          to your specific requirements. We will guide you through the entire
          implementation process, from planning and design to testing and
          deployment. Our goal is to ensure that you get the most out of your
          investment in SAP Business One and achieve your business objectives.
        </p>
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
export default RetailEndToEnd;
