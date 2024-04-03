import { Link, useNavigate } from "react-router-dom";

import "./EnterpriseSystems.css";
import { Fade } from "react-awesome-reveal";
import enterprise1 from "../../../images/Enterprise/enterprise1.jpg";
import enterprise2 from "../../../images/Enterprise/enterprise2.jpg";
import enterprise3 from "../../../images/Enterprise/enterprise3.jpg";
import enterprise4 from "../../../images/Enterprise/enterprise4.jpg";
import enterprise5 from "../../../images/Enterprise/enterprise5.jpg";
import enterprise6 from "../../../images/Enterprise/enterprise6.jpg";

const EnterpriseSystems = () => {
  const data = [
    {
      id: 1,
      image: enterprise1,
      heading: "SAP S/4HANA",
      description:
        "SAP S/4HANA is the ultimate ERP solution that truly puts your business on its way to becoming an intelligent enterprise by bringing the best of Machine Learning and AI to drive action and make data-driven decisions at the speed of thought.",
      link: "",
    },
    {
      id: 2,
      image: enterprise2,
      heading: "SAP Business One",
      description:
        "The market-leading SAP Business One is designed to quickly place small businesses. on track with end-to-end integration of all your business operations, enhanced business intelligence, and real-time data to drive profitable business growth. ",
      link: "",
    },
    {
      id: 3,
      image: enterprise3,
      heading: "SAP Customer Checkout",
      description:
        "SAP Customer Checkout is a powerful point-of-sale (POS) software that can help you streamline your checkout process, enhance customer experience, and increase revenue.",
      link: "",
    },
    {
      id: 4,
      image: enterprise4,
      heading: "SAP SuccessFactors",
      description:
        "SAP SuccessFactors is a cloud-based human resource management software that helps organizations manage their workforce efficiently.",
      link: "",
    },
    {
      id: 5,
      image: enterprise5,
      heading: "SAP Ariba",
      description:
        "SAP Ariba is a cloud-based procurement platform that provides businesses with a range of features and capabilities to optimize their procurement processes.",
      link: "",
    },
    {
      id: 6,
      image: enterprise6,
      heading: "SAP Business ByDesign",
      description:
        "SAP Business ByDesign offers your business end-to-end integration of all your business processes with the flexibility of the cloud. This ERP solution is designed for small to mid-sized businesses allowing them to grow along with you.",
      link: "",
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="enterprise-systems-main-container">
      <div className="enterprise-systems-first-container">
        <div className="enterprise-systems-bg-container"> </div>
        <div className="enterprise-systems-bg-sub-container">
          <h1 className="enterprise-systems-bg-heading">
            Modernize Your IT with Oracle Cloud: PaaS & IaaS Solutions
          </h1>
          <p className="enterprise-systems-bg-sub-heading">
            Accelerate innovation and optimize costs with our expert Oracle PaaS
            and IaaS services.
          </p>
        </div>
      </div>
      <div className="enterprise-systems-second-container">
        <p className="enterprise-systems-main-description">
          We are a proud Oracle Partner specializing in harnessing the
          transformative power of Oracle Cloud. Our certified team empowers your
          organization to achieve digital agility and gain a competitive edge
          through comprehensive PaaS and IaaS solutions tailored to your unique
          business goals.
        </p>
        <p className="enterprise-systems-main-description">
          A stylized "cloud map" with clear PaaS and IaaS sections, showcasing
          the connected nature of these services within the Oracle Cloud
          ecosystem. Consider using Oracle brand colors and subtle visual
          metaphors for services (e.g., database icons in PaaS).
        </p>
        {/* <div className="enterprise-systems-card-main-container">
          <h1 className="enterprise-systems-card-main-heading">
            Choose the right Innovation Solution for your Business
          </h1>

          <ul className="enterprise-systems-card-flex-container">
            {data.map((each) => {
              return (
                <Fade damping={0.1} direction="up" delay={90}>
                  <li className="enterprise-systems-card-container">
                    <img
                      src={each.image}
                      alt=""
                      className="enterprise-systems-card-image"
                    />
                    <h4 className="enterprise-systems-card-heading">
                      {each.heading}
                    </h4>
                    <p className="enterprise-systems-card-description">
                      {each.description}
                    </p>
                    <p>learn more</p>
                  </li>
                </Fade>
              );
            })}
          </ul>
        </div> */}
      </div>
      <div className="enterprise-systems-third-container">
        <button
          className="omnifinity-button-inactive"
          onClick={() => navigate("/contactUs")}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};
export default EnterpriseSystems;
