import React from "react";
import blog1 from "../../../images/blog1.jpg";
import design2 from "../../../images/Insights/Blogs/design 2.jpg";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const cardsData = [
  {
    id: 1,
    img: blog1,
    title:
      "The Power Trio: Mendix, Polarion, and Oracle for Accelerated Application Delivery",

    desc: "In the fast-paced digital world, businesses can't afford to stumble when it comes to software development...",
    twitter: "",
    lnikedin: "",
    facebook: "",
  },
  {
    id: 2,
    img: design2,
    title:
      "The Backbone of Quality and Traceability in Your Integrated SDLC – Omnifinity as Your Expert Guide",

    desc: "Omnifinity leverages its deep understanding of financial regulations (SOX, Dodd-Frank, etc.) to configure Polarion workflows that ensure seamless compliance throughout your SDLC...",
    twitter: "",
    lnikedin: "",
    facebook: "",
  },
];

const Blogs = () => {
  return (
    <div className="blogs-main-container">
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
