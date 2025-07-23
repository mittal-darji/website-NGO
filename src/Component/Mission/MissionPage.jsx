import React, { useState, useEffect } from "react";
import "./MissionPage.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const MissionPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [checkedItems, setCheckedItems] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const missionItems = [
    {
      id: 1,
      icon: "🩸",
      title: "Community Health Initiatives",
      description:
        "To organize impactful blood donation drives, food camps, and awareness rallies",
      category: "Health & Welfare",
    },
    {
      id: 2,
      icon: "👥",
      title: "Youth Empowerment",
      description: "To empower youth with leadership, skills, and values",
      category: "Education & Development",
    },
    {
      id: 3,
      icon: "🚫",
      title: "De-addiction Campaign",
      description:
        "To combat drug addiction and promote de-addiction awareness campaigns",
      category: "Social Reform",
    },
    {
      id: 4,
      icon: "🌿",
      title: "Environmental & Cultural Protection",
      description:
        "To protect environment, rivers, cows, and Indian culture through sustained campaigns",
      category: "Environment & Culture",
    },
    {
      id: 5,
      icon: "🤲",
      title: "Dignified Service",
      description:
        "To serve the poor and underprivileged with dignity and inclusion",
      category: "Social Service",
    },
    {
      id: 6,
      icon: "📚",
      title: "Value-Based Education",
      description:
        "To promote practical, value-based education aligned with NEP 2020",
      category: "Education & Development",
    },
  ];

  const handleItemClick = (id) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <>
      <Header />
      <div className="mission-page">
        {/* mission Section */}
        <div className="founder-page">
          <section className="founder-section">
            <div className="founder-overlay"></div>
            <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col-lg-8 founder-main-content">
                  <h1 className="founder-title">Our Mission</h1>
                  <div className="founder-subtitle">
                    <p>
                      Transforming lives through purposeful action and selfless
                      service
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mission Items */}
          <section className="mission-items ">
            <div className="container">
              <div className="row g-4">
                {missionItems.map((item, index) => (
                  <div key={item.id} className="col-lg-6 col-md-12">
                    <div
                      className={`mission-item-card ${
                        isVisible
                          ? `animate-slideInLeft delay-${index + 2}`
                          : ""
                      } ${checkedItems[item.id] ? "checked" : ""}`}
                      onClick={() => handleItemClick(item.id)}
                    >
                      <div className="mission-card">
                        <div className="card-header">
                          <div className="mission-checkbox">
                            <div className="checkbox-inner">
                              {checkedItems[item.id] && (
                                <span className="checkmark">✓</span>
                              )}
                            </div>
                          </div>
                          <div className="mission-icon">{item.icon}</div>
                          <div className="mission-category">
                            {item.category}
                          </div>
                        </div>
                        <div className="card-body">
                          <h4 className="mission-title">{item.title}</h4>
                          <p className="mission-description">
                            {item.description}
                          </p>
                        </div>
                        <div className="card-footer">
                          <div className="progress-bar">
                            <div className="progress-fill"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Mission Statement */}
          <section className="mission-statement py-5">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div
                    className={`statement-card ${
                      isVisible ? "animate-fadeInUp delay-8" : ""
                    }`}
                  >
                    <div className="statement-icon">🕊</div>
                    <div className="statement-content">
                      <blockquote className="statement-quote">
                        "We don't just want to run an NGO — we want to build a
                        movement of awakened citizens who serve selflessly, lead
                        boldly, and live with values."
                      </blockquote>
                      <div className="statement-author">
                        - Srijan Kutumbakam Seva Sansthan
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Impact Stats */}
          <section className="impact-stats py-5">
            <div className="container">
              <div className="row justify-content-center mb-5">
                <div className="col-lg-8 text-center">
                  <h2
                    className={`section-title ${
                      isVisible ? "animate-fadeInUp delay-9" : ""
                    }`}
                  >
                    Our Impact Areas
                  </h2>
                </div>
              </div>

              <div className="row g-4">
                <div className="col-lg-3 col-md-6">
                  <div
                    className={`stat-card ${
                      isVisible ? "animate-fadeInUp delay-10" : ""
                    }`}
                  >
                    <div className="stat-icon">🩸</div>
                    <div className="stat-title">Blood Drives</div>
                    <div className="stat-subtitle">Saving Lives</div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div
                    className={`stat-card ${
                      isVisible ? "animate-fadeInUp delay-11" : ""
                    }`}
                  >
                    <div className="stat-icon">👥</div>
                    <div className="stat-title">Youth Empowered</div>
                    <div className="stat-subtitle">Future Leaders</div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div
                    className={`stat-card ${
                      isVisible ? "animate-fadeInUp delay-12" : ""
                    }`}
                  >
                    <div className="stat-icon">🌿</div>
                    <div className="stat-title">Environment</div>
                    <div className="stat-subtitle">Protected & Preserved</div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div
                    className={`stat-card ${
                      isVisible ? "animate-fadeInUp delay-13" : ""
                    }`}
                  >
                    <div className="stat-icon">🤲</div>
                    <div className="stat-title">Lives Touched</div>
                    <div className="stat-subtitle">With Dignity</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MissionPage;
