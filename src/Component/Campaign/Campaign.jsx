import React, { useState, useEffect } from "react";
import "./Campaign.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import camp from "../../assets/camp.jpg";
import camp1 from "../../assets/camp1.jpg";
import camp2 from "../../assets/camp2.jpg";
import camp3 from "../../assets/camp3.jpg";
import camp4 from "../../assets/camp4.jpg";
import camp5 from "../../assets/camp5.jpg";
import camp6 from "../../assets/camp6.jpg";
import camp7 from "../../assets/camp7.jpg";
import camp8 from "../../assets/camp8.jpg";

import Vcamp1 from "../../assets/Vcamp1.mp4";
import Vcamp2 from "../../assets/Vcamp2.mp4";
import Vcamp3 from "../../assets/Vcamp3.mp4";
import Vcamp4 from "../../assets/Vcamp4.mp4";
import Vcamp5 from "../../assets/Vcamp5.mp4";
import Vcamp6 from "../../assets/Vcamp6.mp4";

const Campaign = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const campaignImages = [
    { camp: camp },
    { camp: camp1 },
    { camp: camp2 },
    { camp: camp3 },
    { camp: camp4 },
    { camp: camp5 },
    { camp: camp6 },
    { camp: camp7 },
    { camp: camp8 },
  ];

  const services = [
    {
      icon: "🍽️",
      title: "Kanwariya Support",
      description:
        "Arranging food, water, and resting facilities for devotees during their spiritual journey",
    },
    {
      icon: "📚",
      title: "Student Guidance",
      description:
        "Supporting students appearing for competitive government exams with refreshments and guidance",
    },
    {
      icon: "🙏",
      title: "Religious Events",
      description:
        "Special camps during Shyam Baba's Nishan Yatra offering water and snacks to devotees",
    },
    {
      icon: "🎊",
      title: "Navratri Celebrations",
      description:
        "Organizing Kanya Pujan, gift distribution, and Mata ka Bhandara community feasts",
    },
  ];

  const videos = [
    { src: Vcamp1 },
    { src: Vcamp2 },
    { src: Vcamp3 },
    { src: Vcamp4 },
    { src: Vcamp5 },
    { src: Vcamp6 },
  ];

  return (
    <>
      <Header />
      <div className="srijan-page">
        <section className="founder-section">
          <div className="founder-overlay"></div>
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8 founder-main-content">
                <h1 className="founder-title">Humanitarian Welfare Campaign</h1>
                <div className="founder-subtitle">
                  <p>Serving humanity with devotion and compassion</p>
                  <p className="founder-founder-organization-name  ">
                    Srijan Kutumbakam Seva Sansthan, Rohtak
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mission-section">
          <div className="container">
            <h2 className="section-title">Humanitarian Welfare Campaign</h2>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="mission-text">
                  Under the humanitarian mission of Srijan Kutumbkam Seva
                  Sansthan, various camps are organized throughout the year for
                  the service of society. Whether it is arranging food, water,
                  and resting facilities for Kanwariyas during their spiritual
                  journey, or supporting students appearing for competitive
                  government exams with refreshments and guidance, the Sansthan
                  is always at the forefront of service.
                  <br />
                  <br />
                  During religious events such as Shyam Baba's Nishan Yatra,
                  special camps are set up for the comfort of devotees, offering
                  water and snacks. On auspicious occasions like Navratri, the
                  Sansthan organizes Kanya Pujan and distributes gifts to young
                  girls, along with hosting Mata ka Bhandara (community feasts)
                  to spread devotion and joy.
                  <br />
                  <br />
                  These efforts reflect the Sansthan's deep sense of social
                  responsibility and its unwavering commitment to serve the
                  people. This noble campaign showcases the values of Indian
                  culture, spirituality, and humanity, and continues to inspire
                  thousands to walk the path of selfless service.
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Services Section */}
        <section className="services-section campaign-content">
          <div className="container">
            <h2 className="section-title ">Our Services</h2>
            <div className="row">
              {services.map((service, index) => (
                <div key={index} className="col-lg-3 col-md-6 mb-4">
                  <div className="service-card">
                    <div className="service-icon">{service.icon}</div>
                    <h4 className="service-title">{service.title}</h4>
                    <p className="service-description">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Gallery Section */}
        <section className="gallery-section">
          <div className="container">
            <h2 className="section-title">Our Work in Action</h2>
            <div className="gallery-grid ">
              {campaignImages.map((image, index) => (
                <div className="gallery-item" key={index}>
                  <img src={image.camp} alt={`Campaign ${index + 1}`} />
                  <div className="gallery-overlay"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Video Section */}
        <section className="video-section ">
          <div className="container">
            <h2 className="section-title text-center text-white mb-5">
              Watch Our Journey
            </h2>
            <p className="lead text-center text-white mb-5">
              Experience the spirit of service and devotion
            </p>

            <div className="row g-4">
              {videos.map((video, index) => (
                <div className="col-lg-4 col-md-6" key={`video-${index}`}>
                  <div className="video-card card h-100 border-0 bg-dark">
                    <div className="card-body p-0">
                      <video
                        controls
                        className="w-100 rounded"
                        preload="metadata"
                        style={{ height: "400px", objectFit: "cover" }}
                        key={`video-player-${index}`}
                      >
                        <source src={video.src} type="video/mp4" />
                        Your browser does not support HTML5 video.
                      </video>
                    </div>
                    <div className="card-footer bg-transparent border-top-0"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Campaign;
