import React from "react";
import design1 from "../../../../images/Insights/Blogs/design1.webp"
import design2 from "../../../../images/Insights/Blogs/design 2.jpg"
import design3 from "../../../../images/Insights/Blogs/design3.jpg"
import design4 from "../../../../images/Insights/Blogs/design4.webp"
import design5 from "../../../../images/Insights/Blogs/design5.jpg"
import design6 from "../../../../images/Insights/Blogs/design6.jpg"
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const cardsData = [
  {
    id: 1,
    img: design1,
    title: "Embrace the AI transformation",
    timeStamp: "Jun 2023",
    desc: "Embracing the AI Tranformation: AI, Enterprise Strategies, and Innovation The landscape of business is changing at an un...",
    twitter: "",
    lnikedin: "",
    facebook: "",
  },
  {
    id: 2,
    img: design2,
    title: "Best ERP Cloud Solution for SMBs | SAP Business ByDesign",
    timeStamp: "Jun 2023",
    desc: "Looking for a flexible business management solution to grow your business? So many small to mid-size businesses need a c...",
    twitter: "",
    lnikedin: "",
    facebook: "",
  },
  {
    id: 3,
    img: design3,
    title:
      "SAP Business One for Retail & Trading A foundation to digitally innovate",
    timeStamp: "Jun 2023",
    desc: "It’s true! Customer changing lifestyles, buying behaviors, and volatile market dynamics have profoundly disrupted the gl...",
    twitter: "",
    lnikedin: "",
    facebook: "",
  },
  {
    id: 4,
    img: design4,
    title: "Top 9 Benefits of Cloud ERP Solution for Businesses",
    timeStamp: "Jun 2023",
    desc: "The term Enterprise Resource Planning (ERP) emerged in the early 1990s, with the roots of ERP systems stretching back to...",
    twitter: "",
    lnikedin: "",
    facebook: "",
  },
  {
    id: 5,
    img: design5,
    title:
      "How Businesses Can Prepare for the E-Invoicing Regulation in Saudi Arabia",
    timeStamp: "Jun 2023",
    desc: "At the beginning of this year, the Zakat, Tax, and Customs Authority (ZATCA), formerly known as the General Authority of...",
    twitter: "",
    lnikedin: "",
    facebook: "",
  },

  {
    id: 6,
    img:design6,
    title: "Are You Looking To Transform Your SAP Landscape? Incomplete",
    timeStamp: "Jun 2023",
    desc: "Upgrading your SAP Landscape is no easy task. But, pairing mission-critical applications like SAP with Google Cloud Plat...",
    twitter: "",
    lnikedin: "",
    facebook: "",
  },
];

const Blogs = () => {
  return (
    <div>
      <div className="saphana-first-container">
        <div className="news-bg-container"></div>
        <div className="news-bg-sub-container">
          <h1 className="news-bg-heading text-center">
            Omnifinity <br /> Partners Blogs
          </h1>
        </div>
      </div>
      <div className="news-cards-main-container">
        <div className="news-cards-holding-container">
          {cardsData.map((el) => (
            <div class="news-card" key={el.id}>
              <img
                src={el.img}
                alt=" of Omnifinity joining LinkedWorld Global Alliance"
                className="news-image"
              />
              <div class="news-card-body">
                <h2 class="news-card-title">{el.title}</h2>

                <p class="news-card-text">
                  <small class="text-muted">{el.timeStamp}</small>
                </p>
                <p class="news-card-text">{el.desc}</p>
                <div>
                  <div className="news-icons-container">
                    <FaSquareXTwitter className="news-icon" />
                    <FaLinkedin className="news-icon" />
                    <FaFacebookSquare className="news-icon" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
