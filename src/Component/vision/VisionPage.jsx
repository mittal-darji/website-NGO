import React, { useState, useEffect } from "react";
import "./VisionPage.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const VisionPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const visionPoints = [
    {
      icon: "🌱",
      title: "Service Culture",
      description: "Service becomes a culture, not an act of charity",
    },
    {
      icon: "🤝",
      title: "Family Values",
      description: "Every individual is treated like family",
    },
    {
      icon: "🧠",
      title: "Youth Empowerment",
      description:
        "Youth become powerful agents of change through education, skill, and awareness",
    },
    {
      icon: "🕊",
      title: "Social Transformation",
      description:
        "Social evils like addiction, hunger, and ignorance are eliminated",
    },
    {
      icon: "🌍",
      title: "Holistic Development",
      description:
        "Environmental protection, cow welfare, and spiritual values are deeply rooted in everyday life",
    },
  ];

  return (
    <>
      <Header />
      <div className="vision-page">
        {/* vision Section */}
        <section className="founder-section">
          <div className="founder-overlay"></div>
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8 founder-main-content">
                <h1 className="founder-title"> Our Vision</h1>
                <div className="founder-subtitle">
                  <p>
                    {" "}
                    Building a united, self-reliant, and compassionate society
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Statement */}
        <section className="vision-statement py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div
                  className={`vision-card ${
                    isVisible ? "animate-fadeInUp delay-2" : ""
                  }`}
                >
                  <div className="card-body p-5">
                    <blockquote className="vision-quote">
                      "To build a united, self-reliant, and compassionate
                      society where no one sleeps hungry, no youth remains
                      unemployed, and every citizen becomes a force for positive
                      change."
                    </blockquote>
                    <div className="organization-name">
                      - Srijan Kutumbakam Seva Sansthan
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Points */}
        <section className="vision-points py-5">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-lg-8 text-center">
                <h2
                  className={`section-title ${
                    isVisible ? "animate-fadeInUp delay-3" : ""
                  }`}
                >
                  At Srijan Kutumbakam Seva Sansthan, our vision is to create a
                  nation where:
                </h2>
              </div>
            </div>

            <div className="row g-4">
              {visionPoints.map((point, index) => (
                <div key={index} className="col-lg-6 col-md-6">
                  <div
                    className={`vision-point-card ${
                      isVisible ? `animate-fadeInUp delay-${4 + index}` : ""
                    }`}
                  >
                    <div className="card h-100">
                      <div className="card-body p-4">
                        <div className="point-icon mb-3">{point.icon}</div>
                        <h5 className="point-title mb-3">{point.title}</h5>
                        <p className="point-description">{point.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dream Section */}
        <section className="dream-section py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div
                  className={`dream-card ${
                    isVisible ? "animate-fadeInUp delay-9" : ""
                  }`}
                >
                  <div className="card-body p-5 text-center">
                    <h3 className="dream-title mb-4">Our Dream</h3>
                    <p className="dream-text">
                      We dream of an India where <strong>unity</strong>,{" "}
                      <strong>innovation</strong>,<strong>compassion</strong>,
                      and <strong>responsibility</strong> guide every action —
                      from villages to cities.
                    </p>
                    <div className="dream-values mt-4">
                      <span className="value-badge">Unity</span>
                      <span className="value-badge">Innovation</span>
                      <span className="value-badge">Compassion</span>
                      <span className="value-badge">Responsibility</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default VisionPage;
