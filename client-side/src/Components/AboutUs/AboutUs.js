import React from "react";
import "./AboutUs.css";
import handshake from "../../images/handshake.webp";
import data from "../../images/data.png";
import mendix from "../../images/mendix.jpg";
import polarion from "../../images/polarion-logo.webp";
import oracle from "../../images/oracle.png";

const ourValues = [
  {
    id: 0,
    head: "We Craft Your Data Symphony",
    image: data,
    desc: "More than just app builders, we're strategic partners. Our Canadian team of experts understands your unique needs. We'll analyze your data landscape, then design tailored solutions that integrate seamlessly with your goals.",
  },
  {
    id: 1,
    head: "Mendix Maestro",
    image: mendix,
    desc: "As certified Mendix pros, we deliver stunning, user-centric applications faster and more cost-effectively. Your digital tools will be intuitive and a breeze to maintain.",
  },
  {
    id: 2,
    head: "Polarion Precision",
    image: polarion,
    desc: "Flawless execution matters. Polarion's ALM platform ensures top-tier quality control throughout development. Your apps launch polished and ready to perform.",
  },
  {
    id: 3,
    head: "Oracle Cloud Your Limitless Stage: ",
    image: oracle,
    desc: "Reach new audiences and scale effortlessly with Oracle Cloud's secure infrastructure. We'll future-proof your tech stack for continued growth.",
  },
];

const AboutUs = () => {
  return (
    <div className="aboutus-main-container">
      <div className="aboutus-first-container">
        <div className="aboutus-background"></div>
        <div className="aboutus-first-text-container">
          <h1 className="aboutus-heading">
            Canadian Innovation Unleashed: Data Drives Your Digital
            Transformation
          </h1>
          {/* <p className="aboutus-description">
            Orchestrating Data-Driven Innovation with Mendix, Polarion, and
            Oracle Cloud
          </p> */}
        </div>
      </div>

      <div className="aboutus-second-container">
        <div className="aboutus-second-text-container">
          <h2 className="omnifinity-sub-heading ">About Us</h2>
          <p className="omnifinity-description">
            Welcome to the Canadian-born data revolution! At Omnifinity, we
            empower businesses to harness the full potential of their data. Our
            cutting-edge solutions powered by Mendix, Polarion, and Oracle Cloud
            will modernize your operations and propel you ahead of the
            competition.
          </p>
        </div>
      </div>
      <div className="aboutus-second-container">
        <div className="aboutus-third-image-text-container">
          <div className="aboutus-third-image-container">
            <img
              src={handshake}
              className="aboutus-third-image"
              alt="about-us-handshake"
            />
          </div>
          <div className="aboutus-third-text-container">
            <h2 className="omnifinity-sub-heading">Omnifinity Group</h2>
            <p className="omnifinity-description">
              But wait, there's more! We don't just build and conduct, we also
              refine and orchestrate with the help of Polarion. This
              industry-leading ALM platform allows us to streamline application
              lifecycle management, ensuring every note hits the right tone,
              every line of code is flawless, and every release is a
              masterpiece. And to elevate your performance to the cloud
              stratosphere, we bring in the power of Oracle Cloud. This robust
              platform provides us with the infrastructure, security, and
              scalability needed to build applications that can handle any data
              symphony, no matter how complex.
            </p>
          </div>
        </div>
      </div>

      <div className="aboutus-last-container">
        <h1 className="omnifinity-sub-heading">Our Values</h1>
        <div className="aboutus-our-values-conatainer">
          {ourValues.map((value) => (
            <div
              className="aboutus-our-values-text-image-container"
              key={value.id}
            >
              <img
                alt="About Us-01-1"
                className="aboutus-global-color-image"
                src={value.image}
              />

              <h3 className="omnifinity-card-heading">{value.head}</h3>
              <p className="omnifinity-card-para">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="aboutus-second-container">
        <div className="our-leadrship-caontainer">
          <div className="our-leadership-text-container">
            <h1 className="aboutus-third-heading">Our Leadership</h1>
            <p className="aboutus-second-description">
              Our Leadership Team is composed of individuals who are deeply
              committed to leveraging their diverse experience with digital
              technology to bring about transformative improvements in business
              and public services, and ultimately in people's lives.
            </p>
          </div>
          <div className="our-leadership-cards-container">
            {leadershipCards.map((card) => (
              <div className="our-leadership-card">
                <img
                  src={card.image}
                  alt="our-leader"
                  className="our-leader-image"
                />
                <h3>{card.name}</h3>
                <p>{card.deignation}</p>
                <p>{card.link}</p>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default AboutUs;
