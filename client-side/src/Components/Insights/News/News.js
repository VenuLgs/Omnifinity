import React from "react";
import mountainimage from "../../../images/Managed/ManagedCloud/grayscale-mountains.png";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const cardsData = [
  {
    id: 1,
    img: mountainimage,
    title:
      "Omnifinity Joins LinkedWorld Global Alliance Strengthening Global SAP Solutions",
    timeStamp: "Jun 22, 2023",
    desc: "Omnifinity, a leading provider of innovative IT solutions and services, is excited to announce its partnership with LinkedWorld...",
    twitter: "",
    lnikedin: "",
    facebook: "",
  },
  {
    id: 2,
    img: mountainimage,
    title:
      "Omnifinity CEO participates on Google Podcast Series - Banking Unfiltered",
    timeStamp: "Jul 11, 2023 4:40:28 PM",
    desc: "Omnifinity CEO Abbas A. Khan had the honour of being invited to the 3rd episode of the Google Podcast Ser...",
    twitter: "",
    lnikedin: "",
    facebook: "",
  },
  {
    id: 3,
    img: mountainimage,
    title:
      "Riphah International University Successfully Goes Live with SAP S/4 HANA and Student Life Cycle Management (SLCM)",
    timeStamp: "Jun 6, 2023 5:58:41 PM",
    desc: "Riphah International University & Islamic International Medical College Trust and Hospital have gone live with the S...",
    twitter: "",
    lnikedin: "",
    facebook: "",
  },
  {
    id: 4,
    img: mountainimage,
    title:
      "A French, Arabic perfume manufacturer becomes an Omnichannel Retailer With Omnifinity",
    timeStamp: "Jun 6, 2023 5:57:08 PM",
    desc: "A flourishing perfumery in the Dubai retail sector, Coral Perfumes Industry LLC offers a variety of fragrances to both f...",
    twitter: "",
    lnikedin: "",
    facebook: "",
  },
  {
    id: 5,
    img: mountainimage,
    title:
      "Omnifinity Partners with Low-Code Leader Mendix to Accelerate Digital Transformation",
    timeStamp: "Jun 6, 2023 5:56:52 PM",
    desc: "Omnifinity Will Help Clients’ Professional and Citizen Developers Fuel Innovation Through Rapid, Collaborative Solution Deve...",
    twitter: "",
    lnikedin: "",
    facebook: "",
  },

  {
    id: 6,
    img: mountainimage,
    title:
      "Omnifinity Becomes an Authorized E-invoicing Solution Provider in Saudi Arabia by ZATCA",
    timeStamp: "JJun 6, 2023 5:56:46 PM",
    desc: "The Kingdom of Saudi Arabia (KSA) has initiated the E-Invoicing directive with the deadline for the first phase set as 4...",
    twitter: "",
    lnikedin: "",
    facebook: "",
  },
];

const News = () => {
  return (
    <div>
      <div className="saphana-first-container">
        <div className="news-bg-container"></div>
        <div className="news-bg-sub-container">
          <h1 className="news-bg-heading">What's happening at Omnifinity</h1>
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
                  {/* <Link>Read More</Link> */}
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

export default News;
