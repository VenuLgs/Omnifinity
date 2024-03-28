import { Link } from "react-router-dom";

import "./ManagedServices.css";
import { Fade } from "react-awesome-reveal";
import managed1 from "../../../images/Managed/managed1.jpg";
import managed2 from "../../../images/Managed/managed2.jpg";
import managed3 from "../../../images/Managed/managed3.jpg";
import managed4 from "../../../images/Managed/managed4.jpg";

const ManagedServices = () => {
  const data = [
    {
      id: 1,
      image: managed1,
      heading: "Oracle Compute Cloud Service",
      description:
        "Provision virtual machines tailored to your computing needs, from basic workloads to high-performance applications.",
      link: "",
    },
    {
      id: 2,
      image: managed2,
      heading: "Oracle Storage Cloud Service",
      description:
        "Scalable, secure, and cost-effective storage options for diverse data types and accessibility requirements.",
      link: "",
    },
    {
      id: 3,
      image: managed3,
      heading: "Oracle Networking Cloud Service",
      description:
        "Design and manage robust virtual cloud networks to ensure connectivity and security.",
      link: "",
    },
  ];

  return (
    <div className="managed-services-main-container">
      <div className="managed-services-first-container">
        <div className="managed-services-bg-container"> </div>
        <div className="managed-services-bg-sub-container">
          <h1 className="managed-services-bg-heading">
            Flexible, High-Performance Infrastructure – Oracle IaaS
          </h1>
        </div>
      </div>
      <div className="managed-services-second-container">
        <p className="managed-services-main-description">
          Gain the control and flexibility your enterprise demands with Oracle's
          Infrastructure as a Service (IaaS). We help you build a custom cloud
          foundation and seamlessly migrate on-premises workloads, optimizing
          performance and scalability. Key IaaS offerings we specialize in
          include:
        </p>

        <div className="managed-services-card-main-container">
          <h1 className="omnifinity-sub-heading">
            Drive Tangible Business Outcomes with Omnifinity Managed Services
          </h1>

          <ul className="managed-services-card-flex-container">
            {data.map((each) => {
              return (
                <Fade damping={0.1} direction="up" delay={90}>
                  <li className="managed-services-card-container">
                    <img
                      src={each.image}
                      alt=""
                      className="managed-services-card-image"
                    />
                    <h4 className="omnifinity-card-heading">{each.heading}</h4>
                    <p className="omnifinity-card-para">{each.description}</p>
                  </li>
                </Fade>
              );
            })}
          </ul>
        </div>
      </div>
      {/* <div className="managed-services-third-container">
        <div className="managed-services-text-container">
          <h3 className="managed-services-third-heading">
            Why Omnifinity for your Managed Services
          </h3>
          <div className="managed-services-text-fields-container">
            <p className="managed-services-third-text">
              Technology-agnostic, No vendor lock-in
            </p>
            <p className="managed-services-third-text">
              <span className="managed-services-span">4000 + </span>
              <br />
              Customer Focused Workforce
            </p>
            <p className="managed-services-third-text">
              Certified and dedicated technology resources
            </p>
            <p className="managed-services-third-text">
              Automated delivery playbooks and templates for seamless
              integration
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};
export default ManagedServices;
