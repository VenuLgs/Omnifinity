import React from "react";

import "../SapHana/SapHana.css";
import { Fade } from "react-awesome-reveal";
import WhyUsBanner from "../../WhyUsBanner/WhyusBanner";

import sapbusinessone1 from "../../../../images/Enterprise/SapBusinessOne/sapbusinessone1.jpg";
import sapbusinessone2 from "../../../../images/Enterprise/SapBusinessOne/sapbusinessone2.webp";
import sapbusinessone3 from "../../../../images/Enterprise/SapBusinessOne/sapbusinessone3.webp";
import sapbusinessone4 from "../../../../images/Enterprise/SapBusinessOne/sapbusinessone4.jpg";
import sapbusinessone5 from "../../../../images/Enterprise/SapBusinessOne/sapbusinessone5.webp";
import sapbusinessone6 from "../../../../images/Enterprise/SapBusinessOne/sapbusinessone6.webp";
import { useNavigate } from "react-router-dom";

const data = [
  {
    id: 1,
    image: sapbusinessone1,
    heading: "Financial Management",
    description:
      "SAP Business One helps manage financials, including general ledger, accounts payable, accounts receivable, fixed assets, and banking. The software also generates financial reports and statements quickly and accurately.",
    link: "",
  },
  {
    id: 2,
    image: sapbusinessone2,
    heading: "Sales Management",
    description:
      "SAP Business One enables managing sales processes, including customer data, sales opportunities, sales orders, and invoicing. The software tracks customer interactions and analyzes sales performance to identify areas for improvement.",
    link: "",
  },
  {
    id: 3,
    image: sapbusinessone3,
    heading: "Customer Relationship Management",
    description:
      "SAP Business One includes CRM features to manage customer interactions, such as sales, marketing, and service activities. The software tracks customer data, sales history, and service requests to improve the customer experience.",
    link: "",
  },
  {
    id: 4,
    image: sapbusinessone4,
    heading: "Inventory Management",
    description:
      "SAP Business One streamlines inventory management by tracking stock levels, managing purchase orders, and monitoring demand. The software's forecasting capabilities enable businesses to anticipate demand and plan production accordingly.",
    link: "",
  },
  {
    id: 5,
    image: sapbusinessone5,
    heading: "Procurement Management",
    description:
      "SAP Business One enables managing procurement processes, including purchase requests, purchase orders, and goods receipts. The software monitors supplier performance and tracks deliveries to ensure timely and cost-effective procurement.",
    link: "",
  },
  {
    id: 6,
    image: sapbusinessone6,
    heading: "Manufacturing Management",
    description:
      "SAP Business One's manufacturing features enable managing the production process, including bill of materials, production orders, and material requirements planning. The software tracks production costs and analyzes production performance to identify areas for improvement.",
    link: "",
  },
];

const SapModerization = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="saphana-first-container">
        <div className="sap-business-one-bg-container"></div>
        <div className="saphana-bg-sub-container">
          <h3 className="saphana-enterprise-system-text">SOLUTIONS</h3>
          <h1 className="saphana-bg-heading">
            SAP Modernization and Migration Services
          </h1>
          <p className="saphana-bg-sub-heading">
            Transform and Optimize your SAP Landscape
          </p>
        </div>
      </div>
      <div className="saphana-second-main-container">
        <div className="saphana-second-main-left-container">
          <Fade direction="up">
            <p className="saphana-second-main-left-descripton">
              Enterprises today are racing to embrace the latest SAP
              technologies to drive growth and stay competitive. However, many
              are struggling to fully harness their capabilities. That's where
              Abacus comes in. We provide end-to-end SAP modernization and
              migration services, including expert advisory, cloud strategy,
              seamless migration and upgrade, and ongoing support and
              maintenance.
            </p>
            <p className="saphana-second-main-left-descripton">
              Whether you're planning to migrate from SAP ECC to S/4 HANA or
              seeking infrastructure modernization, our team of seasoned
              professionals will help you craft a tailor-made strategy to suit
              all your needs. As a trusted partner of leading innovators and
              leveraging the latest tools and technologies, we empower
              enterprises to transform their businesses through flexible
              infrastructure and accelerated innovation.
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
        <h1 className="saphana-systems-card-main-heading">Key Features</h1>

        <ul className="saphana-systems-card-flex-container">
          {data.map((each) => {
            return (
              <Fade damping={0.1} direction="up" delay={90}>
                <li className="saphana-systems-card-container">
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
                  <p>learn more</p>
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
export default SapModerization;
