import React from "react";

import "../../Services/EnterpriseEdition/SapHana/SapHana.css";
import { Fade } from "react-awesome-reveal";

import sapmoderization1 from "../../../images/Solutions/SapModerization/sapmoderization1.jpg";
import sapmoderization2 from "../../../images/Solutions/SapModerization/sapmoderization2.jpg";
import sapmoderization3 from "../../../images/Solutions/SapModerization/sapmoderization3.jpg";
import sapmoderization4 from "../../../images/Solutions/SapModerization/sapmoderization4.jpg";
import sapmoderization5 from "../../../images/Solutions/SapModerization/sapmoderization5.jpg";
import sapmoderization6 from "../../../images/Solutions/SapModerization/sapmoderization6.jpg";
import sapmoderization7 from "../../../images/Solutions/SapModerization/sapmoderization7.jpg";
import sapmoderization8 from "../../../images/Solutions/SapModerization/sapmoderization8.jpg";
import sapmoderization9 from "../../../images/Solutions/SapModerization/sapmoderization9.jpg";
import sapmoderization10 from "../../../images/Solutions/SapModerization/sapmoderization10.jpg";
import sapmoderization11 from "../../../images/Solutions/SapModerization/sapmoderization11.jpg";

import { useNavigate } from "react-router-dom";

const data = [
  {
    id: 1,
    image: sapmoderization1,
    heading:
      "Streamlined Processes, Improved Performance: Unlocking Growth through SAP on Google Cloud",
    description:
      "Streamline your internal processes and drive growth with faster development times and significant reductions in system outages. With SAP on Google Cloud, enterprises can experience efficient performance and accelerated innovation.",
    link: "",
  },
  {
    id: 2,
    image: sapmoderization2,
    heading: "Cost-Effective and Agile",
    description:
      "Reducing Costs and Boosting Agility with SAP on Google Cloud Experience up to 50% reduction in infrastructure and operational costs with SAP on Google Cloud. This cost-effective solution enables agility and innovation, allowing businesses to respond quickly to changing market conditions.",
    link: "",
  },
  {
    id: 3,
    image: sapmoderization3,
    heading:
      "Certified Hosting for Secure and Fast Cloud Infrastructure: Ensuring Security and Speed for SAP Applicationst",
    description:
      "With certified hosting for SAP applications, enterprises can enjoy a secure and fast cloud infrastructure. This effective solution provides reliable and scalable hosting for mission-critical applications.",
    link: "",
  },
  {
    id: 4,
    image: sapmoderization4,
    heading:
      "Next-Gen Technology for Modernization: Accelerating Modernization with SAP Leonardo, Machine Learning, and BigQuery",
    description:
      "Leverage next-gen technologies like SAP Leonardo, Machine Learning, and BigQuery to accelerate modernization. By embracing cutting-edge technology, enterprises can achieve digital transformation and stay ahead of the competition.",
    link: "",
  },
  {
    id: 5,
    image: sapmoderization5,
    heading:
      "Better Insights, Enhanced Decision-Making: Combining Google Cloud Analytics with SAP S/4 HANA",
    description:
      "Combine the power of Google Cloud's analytics with SAP S/4 HANA to accelerate innovation and enhance decision-making. This approach provides better insights, leading to data-driven transformations that improve customer experience.",
    link: "",
  },
  {
    id: 6,
    image: sapmoderization6,
    heading:
      "Quick Innovation, Improved Customer Experience: Leveraging Data-Powered Transformations for Better Product Innovation",
    description:
      "Fast-track your product innovation and improve customer experience by leveraging data-powered transformations. By embracing data-driven approaches, enterprises can better understand their customers' needs and deliver innovative solutions.",
    link: "",
  },
  {
    id: 7,
    image: sapmoderization7,
    heading:
      "Modernizing and Creating New SAP Apps with Apigee: Unleashing New Business Models with SAP and Apigee",
    description:
      "Unleash new business models by modernizing and creating new SAP apps with Apigee. By exposing digital assets to third-party developers, enterprises can create new revenue streams and improve sales while enhancing customer experience.",
    link: "",
  },
];

const details2 = [
  {
    id: 1,
    image: sapmoderization8,
    heading: "TRANSFORM",
    description:
      "Omnifinity provides end-to-end SAP modernization and migration services that integrate SAP strategy into a revenue-generating business agenda, ensuring a seamless transition and maximum ROI for enterprises.",
    link: "",
  },
  {
    id: 2,
    image: sapmoderization9,
    heading: "ADVISORY",
    description:
      "At Omnifinity, we believe that a successful SAP cloud migration is not just about technology, but also about crafting a clear vision for your business. That's why our team of experts work closely with you to understand your unique needs and goals and develop a tailor-made roadmap for your SAP cloud migration.",
    link: "",
  },
  {
    id: 3,
    image: sapmoderization10,
    heading: "MIGRATION",
    description:
      "Migrating your SAP application to Google Cloud can be a complex and costly undertaking, but not with Omnifinity. Our team of experts provides a seamless and secure migration service that minimizes risk and optimizes cost.",
    link: "",
  },
  {
    id: 4,
    image: sapmoderization11,
    heading: "OPTIMIZE AND MANAGE",
    description:
      "At Omnifinity, we know that modernizing your SAP landscape is just the first step towards digital transformation. That's why we help you maximize the benefits of modernization by incorporating cloud governance, cost optimization, premium security tactics, and proactive monitoring into every step of the process.",
    link: "",
  },
];

const SapModerization = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="saphana-first-container">
        <div className="sap-moderization-bg-container"></div>
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
              Omnifinity comes in. We provide end-to-end SAP modernization and
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
                  <h4 className="sap-moderization-card-heading">
                    {each.heading}
                  </h4>
                  <p className="sap-moderization-card-description">
                    {each.description}
                  </p>
                </li>
              </Fade>
            );
          })}
        </ul>
      </div>
      <div className="saphana-systems-card-main-container">
        <h1 className="saphana-systems-card-main-heading">
          Why Omnifinity is the Comprehensive Partner for your Modernization and
          Migration Services
        </h1>

        <ul className="saphana-systems-card-flex-container">
          {details2.map((each) => {
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
export default SapModerization;
