import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import Player from "../Videos/pexels-tima-miroshnichenko-5377697 (2160p).mp4";
import { IoHome } from "react-icons/io5";
import { IoPower } from "react-icons/io5";
import { AiOutlineGlobal } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import image1 from "../Images/image (1).png";
import image2 from "../Images/image (2).png";
import image3 from "../Images/image (3).png";
import image from "../Images/image.png";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import "./Home.css";

import service1 from "../Images/enterprisesystems.png";
import service2 from "../Images/innovations.png";

import homepage1 from "../../images/HomePage/homepage1.webp";
import homepage2 from "../../images/HomePage/homepage2.webp";
import homepage3 from "../../images/HomePage/homepage3.webp";
import homepage4 from "../../images/HomePage/homepage4.webp";

export default function HomePage() {
  const [state, updateState] = useState("EnterpriseSystems");
  const navigate = useNavigate();
  useEffect(() => {
    window.addEventListener("scroll", HomeHandleScroll);
    return () => {
      window.removeEventListener("scroll", HomeHandleScroll);
    };
  });

  const HomeHandleScroll = () => {
    var revals = document.querySelectorAll(".home-reveal");
    for (var i = 0; i < revals.length; i++) {
      var windowheight = window.innerHeight;
      var revaltop = revals[i].getBoundingClientRect().top;
      var revalpoint = 150;
      if (revaltop < windowheight - revalpoint) {
        revals[i].classList.add("active");
      } else {
        revals[i].classList.remove("active");
      }
    }
  };

  const settings = {
    dots: false,
    prevArrow: <BsArrowLeft size="30" color="black" />,
    nextArrow: <BsArrowRight size="30" color="black" />,
    speed: 2000,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 4000, // Set autoplay speed in milliseconds (e.g., 2000ms = 2 seconds)
    responsive: [
      {
        breakpoint: 1200, // Extra large devices (1200px and above)
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          prevArrow: <BsArrowLeft size="30" color="black" />,
          nextArrow: <BsArrowRight size="30" color="black" />,
          speed: 2000,
          autoplay: true,
          autoplaySpeed: 4000, // Enable autoplay
        },
      },
      {
        breakpoint: 992, // Large devices (992px - 1200px)
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          prevArrow: <BsArrowLeft size="30" color="black" />,
          nextArrow: <BsArrowRight size="30" color="black" />,
          speed: 2000,
          autoplay: true,
          autoplaySpeed: 4000,
        },
      },
      {
        breakpoint: 768, // Medium devices (768px - 992px)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          prevArrow: <BsArrowLeft size="30" color="black" />,
          nextArrow: <BsArrowRight size="30" color="black" />,
          speed: 2000,
          autoplay: true,
          autoplaySpeed: 4000,
        },
      },
      {
        breakpoint: 576, // Small devices (576px - 768px)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          prevArrow: <BsArrowLeft size="30" color="black" />,
          nextArrow: <BsArrowRight size="30" color="black" />,
          speed: 2000,
          autoplay: true,
          autoplaySpeed: 4000,
        },
      },
      {
        breakpoint: 0, // Extra small devices (up to 576px)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          prevArrow: <BsArrowLeft size="30" color="black" />,
          nextArrow: <BsArrowRight size="30" color="black" />,
          speed: 2000,
          autoplay: true,
          autoplaySpeed: 4000,
        },
      },
    ],
  };

  const images = [image1, image2, image3, image];

  const [HomeImages, setCards] = useState([]);

  const Banners = [
    {
      projectId: 1,
      imageUrl: homepage3,
      title: "Operate",
      description:
        "Focus on Mendix application development. Use relevant imagery and headlines like Rapid Application Development with Mendix",
    },
    {
      projectId: 2,
      imageUrl: homepage2,

      title: "BUILD YOUR DIGITAL CORE",
      description:
        "Highlight Oracle Cloud solutions. Consider a headline like Transform Your Business with Oracle Cloud",
    },
    {
      projectId: 3,
      imageUrl: homepage1,

      title: "Embrace the AI Transformation",
      description: "Polarion",
    },
    {
      projectId: 4,
      imageUrl: homepage4,
      title: "Innovate",
      description: "Harness Cutting-Edge Frameworks for Business Innovation",
    },
  ];

  const getBannerImages = async () => {
    try {
      const options = {
        method: "GET",
      };
      const response = await fetch(
        `${process.env.REACT_APP_FETCH_URL}/getbanner`,
        options
      );
      const data = await response.json();
      console.log(data);
      setCards(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBannerImages();
  }, []);

  const HomeCards = [
    {
      projectId: 1,
      title: "Open Finance",
      imageUrl:
        "https://27058982.fs1.hubspotusercontent-eu1.net/hubfs/27058982/ACP/Untitled%20design%20(20).jpg",
      description:
        "Advance your financial services with intelligent applications and technologies to transform your business models and deliver an unparalleled customer experience in the digital economy.",
    },
    {
      projectId: 2,
      title: "SAP Modernization",
      description:
        "Whether you need to migrate from SAP ECC to S/4 HANA or perform infrastructure modernization, we can help you develop a tailor-made strategy for all your needs.",
      imageUrl:
        "https://27058982.fs1.hubspotusercontent-eu1.net/hubfs/27058982/jeshoots-com-sMKUYIasyDM-unsplash.jpg",
    },
    {
      projectId: 3,
      title: "SAP on GCP",
      description:
        "Leverage Google Cloud Technologies to improve processes and maximize efficiency in your business. Adopt secured cloud-native technologies and accelerate innovation in the right direction.",
      imageUrl:
        "	https://27058982.fs1.hubspotusercontent-eu1.net/hubfs/27058982/pexels-deepanker-verma-1482061.jpg",
    },
  ];

  const Details = [
    {
      projectId: 1,
      category: "EnterpriseSystems",
      imageURL: service1,
      title: "Enterprise Systems",
      description:
        "Proven capabilities across numerous platforms from SAP, the global leader in Enterprise Systems.",
    },
    {
      projectId: 2,
      category: "InnovationSolutions",
      imageURL: service2,
      title: "Innovation Solutions",
      description:
        "World-class track record with enterprise customers in Innovation Solutions built on API-first, cloud-first & data-first architecture.",
    },
    {
      projectId: 3,
      category: "ManagedServices",
      imageURL: "https://abacuscambridge.com/hubfs/ACP/600x450-300res.jpg",
      title: "Managed Services",
      description:
        "A repertoire of managed services designed to continually support management, extension and operations of enterprise systems and innovation solutions.",
    },
  ];

  const filtered = Details.filter((each) => each.category === state);

  return (
    <div className="HomePageTotalContainer">
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-12">
            <Carousel interval={3000}>
              {Banners.map((each, index) => (
                <Carousel.Item>
                  <img
                    style={{ height: "750px", maxWidth: "100%" }}
                    className="d-block w-100 carouselBanner"
                    src={each.imageUrl}
                    alt={each.title}
                  />
                  <div className="homepage-carousel-caption-overlay  w-100">
                    <h1
                      className="carouselHeading p-2"
                      style={{
                        color: "#ffffff",
                        fontWeight: "bolder",
                        fontSize: "65px",
                      }}
                    >
                      {each.title}
                    </h1>
                    <p
                      className="carouselParagraph p-3"
                      style={{
                        color: "#ffffff",

                        fontWeight: "400",
                      }}
                    >
                      {each.description}
                    </p>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
      <div className="container mt-5 mb-5 p-0">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="omnifinity-sub-heading">What We Do</h1>
          </div>
          <div className="col-12 text-center  w-100">
            <div className="container-fluid w-100  p-0">
              <div className="row d-flex align-items-center mt-2 mb-2">
                <div className="col-md-4 col-12 mb-2">
                  <button
                    className={
                      state === "EnterpriseSystems"
                        ? "omnifinity-button-active"
                        : "omnifinity-button-inactive"
                    }
                    onClick={() => updateState("EnterpriseSystems")}
                  >
                    Schedule a Free Consultation
                  </button>
                </div>
                <div className="col-md-4 col-12 mb-2">
                  <button
                    className={
                      state === "InnovationSolutions"
                        ? "omnifinity-button-active"
                        : "omnifinity-button-inactive"
                    }
                    onClick={() => updateState("InnovationSolutions")}
                  >
                    Discover Our Case Studies
                  </button>
                </div>
                <div className="col-md-4 col-12 mb-2">
                  <button
                    className={
                      state === "ManagedServices"
                        ? "omnifinity-button-active"
                        : "omnifinity-button-inactive"
                    }
                    onClick={() => updateState("ManagedServices")}
                  >
                    Contact Us to Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 w-100 text-center">
            <div className="container-fluid w-100 text-center p-0">
              <div className="row">
                <div className="col-12 col-md-6  d-flex flex-column justify-content-center text-center">
                  <h1 className="omnifinity-sub-heading">
                    {filtered[0].title}
                  </h1>
                  <p className="omnifinity-description">
                    {filtered[0].description}
                  </p>
                  <div className="text-center  w-100 d-flex justify-content-center">
                    <button
                      className="omnifinity-button-inactive"
                      onClick={() => navigate("/contactUs")}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
                <div className="col-12 col-md-6  d-flex justify-content-center text-center">
                  <img
                    src={filtered[0].imageURL}
                    alt="ReactImage"
                    className="mt-3"
                    height="300"
                    width="350"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-3 mb-3 p-0">
        <div className="row">
          <div className="col-12 mt-5 w-100">
            <div className="HomePageVideoContainer">
              <video
                id="plmbackground-video"
                className="HomePagevideoElement"
                autoPlay
                loop
                muted
              >
                <source src={Player} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
      <div className="container p-0 mt-5 mb-5">
        <div className="row">
          <div className="col-12 text-center mb-2">
            <h1 className="omnifinity-sub-heading">STRATEGIC PARTNERSHIPS</h1>
            <p className="omnifinity-description">
              Partnership and collaboration with global technology leaders are
              at the core of Omnifinity philosophy. By bringing together
              specialists and leaders, our goal is to generate significant value
              from digital transformation projects our customers invest in. Our
              Partners are numerous, and we remain open to new ideas and
              opportunities for collaboration. As a couple of examples of highly
              successful Omnifinity partnerships, we have been partners with SAP
              and Google and have been continually acknowledged by both
              companies as leaders to achieve great results for our clients.
            </p>
          </div>
          <div
            className="col-12 p-3"
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Slider {...settings} className="mt-2 home-slider">
              {images.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`${index + 1}`}
                    className="home-slider-image"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row tex-center mt-4 mb-4">
          <div className="col-12 mb-3 mt-3">
            <h1 className="omnifinity-sub-heading">OMNIFINITY AT A GLANCE</h1>
          </div>
          <div className="col-12 col-md-6 col-lg-3 text-center mt-4 mb-3">
            <div className="HomeContentContainer home-reveal">
              <IoHome size="60" color="#CE9887" />
              <div className="home-page-content-card">
                <h5 className="omnifinity-card-heading">1987 Genesis</h5>
                <p className="omnifinity-card-para">
                  Born from a rich track record of management consulting,
                  technology services and business outsourcing.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 text-center mt-4 mb-3">
            <div className="HomeContentContainer home-reveal ">
              <IoPower size="60" color="#CE9887" />
              <div className="home-page-content-card">
                <h5 className="omnifinity-card-heading">Resource Pool</h5>
                <p className="omnifinity-card-para">
                  Multiple delivery centres and a talent pool of 3500 through
                  strategic partnerships.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3  text-center mt-4  mb-3">
            <div className="HomeContentContainer home-reveal ">
              <AiOutlineGlobal size="60" color="#CE9887" />
              <div className="home-page-content-card">
                <h5 className="omnifinity-card-heading">Global Footprint</h5>
                <p className="omnifinity-card-para">
                  Headquartered in London with offices in New York, Riyadh and
                  Dubai
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 text-center mt-4  mb-3">
            <div className="HomeContentContainer home-reveal ">
              <BsFillPeopleFill size="60" color="#CE9887" />
              <div className="home-page-content-card">
                <h5 className="omnifinity-card-heading">Customer Base</h5>
                <p className="omnifinity-card-para">
                  Actively serving 1000+ clients globally across 40 industries
                  and 18 countries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5 mb-5">
          <div className="col-12">
            <h1 className="omnifinity-sub-heading">FEATURED SOLUTIONS</h1>
          </div>
          <div className="home-page-last-cards-container">
            {" "}
            {HomeCards.map((each) => (
              <div className="home-page-last-card  home-reveal">
                <img
                  src={each.imageUrl}
                  alt={each.projectId}
                  className="home-page-last-card-image"
                />
                <div className="home-page-last-card-text-container">
                  <h3 className="omnifinity-card-heading">{each.title}</h3>
                  <p className="omnifinity-card-para">{each.description}</p>
                  <div className="d-flex justify-content-center w-100 p-2">
                    <button
                      className="omnifinity-button-inactive"
                      onClick={() => navigate("/contactUs")}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
