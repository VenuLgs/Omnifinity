import { Link } from "react-router-dom";

import "./InnovationSolutions.css";
import { Fade } from "react-awesome-reveal";
import innovation1 from "../../../images/Innovation/cloud.png";
import innovation2 from "../../../images/Innovation/api.png";
import innovation3 from "../../../images/Innovation/application.png";
import innovation4 from "../../../images/Innovation/ai.png";
import innovation5 from "../../../images/Innovation/aiml.png";
import innovation6 from "../../../images/Innovation/identity.png";
import innovation7 from "../../../images/Innovation/software.png";
import innovation8 from "../../../images/Innovation/digital.png";
import innovation9 from "../../../images/Innovation/agile.png";

const InnovationSolutions = () => {
  const data = [
    {
      id: 1,
      image: innovation1,
      heading: "•	Oracle Database Cloud Service",
      description:
        "Secure, scalable, and highly performant cloud database solutions for all workloads.",
      link: "",
    },
    {
      id: 2,
      image: innovation2,
      heading: "Java Cloud Service",
      description:
        "Build and deploy Java applications rapidly with integrated middleware and DevOps capabilities.",
      link: "",
    },
    {
      id: 3,
      image: innovation3,
      heading: "•	Application Container Cloud Service",
      description:
        "Seamlessly deploy microservices and containerized applications for enhanced scalability.",
      link: "",
    },
  ];

  return (
    <div className="innovation-solutions-main-container">
      <div className="innovation-solutions-first-container">
        <div className="innovation-solutions-bg-container"> </div>
        <div className="innovation-solutions-bg-sub-container">
          <h1 className="innovation-solutions-bg-heading">
            Develop and Deploy Applications with Ease – Oracle PaaS
          </h1>
          <p className="innovation-solutions-bg-sub-heading">
            Leading Towards Metamorphosis of Your Businesses
          </p>
        </div>
      </div>
      <div className="innovation-solutions-second-container">
        <p className="innovation-solutions-main-description">
          Accelerate your digital transformation with Oracle's robust Platform
          as a Service (PaaS). Our expertise streamlines application
          development, deployment, and management within the Oracle Cloud. We'll
          guide you to leverage the optimal PaaS services for your needs,
          including:
        </p>

        <div className="innovation-solutions-card-main-container">
          <h1 className="omnifinity-sub-heading">
            Choose the right Innovation Solution for your Business
          </h1>

          <ul className="innovation-solutions-card-flex-container">
            {data.map((each) => {
              return (
                <Fade damping={0.1} direction="up" delay={100}>
                  <li className="innovation-solutions-card-container">
                    <img
                      src={each.image}
                      alt=""
                      className="innovation-solutions-card-image"
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
    </div>
  );
};
export default InnovationSolutions;
