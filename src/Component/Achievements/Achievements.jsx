import React, { useState, useEffect } from "react";
import { Award, Users, MapPin, Heart, Star, Calendar } from "lucide-react";

import { Link } from "react-router-dom";

import overteam2 from "../../assets/overteam2.jpg";
import card4 from "../../assets/card4.jpg";

import image1 from "../../assets/achievement1.jpg";
import image3 from "../../assets/achievement2.jpg";
import image2 from "../../assets/achievement3.jpg";

import "./Achievements.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Achievements = () => {
  const [animatedNumbers, setAnimatedNumbers] = useState({
    branches: 0,
    elderlyCared: 0,
    volunteers: 0,
    years: 0,
  });

  const achievements = [
    {
      id: 1,
      title: "Best NGO in Haryana",
      description:
        "Ranked 1st by State Government of Haryana for the second consecutive time",
      icon: <Award className="achievement-icon" />,
      category: "Healthcare",
      image: image1,
    },
    {
      id: 2,
      title: "Comprehensive Elder Care",
      description:
        "Providing 24/7 medical aid, nutritious meals, and emotional support",
      icon: <Heart className="achievement-icon" />,
      category: "Healthcare",
      image: image2,
    },
    {
      id: 3,
      title: "Dignified Living Initiative",
      description:
        "Ensuring comfortable and dignified life for senior citizens",
      icon: <Star className="achievement-icon" />,
      category: "Healthcare",
      image: image3,
    },
  ];

  const stats = [
    { label: "Active Branches", value: 6, key: "branches" },
    {
      label: "Elderly Cared For",
      value: 500,
      key: "elderlyCared",
      suffix: "+",
    },
    { label: "Volunteers", value: 150, key: "volunteers", suffix: "+" },
    { label: "Years of Service", value: 8, key: "years", suffix: "+" },
  ];

  useEffect(() => {
    const animateNumbers = () => {
      stats.forEach((stat) => {
        let current = 0;
        const target = stat.value;
        const increment = target / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setAnimatedNumbers((prev) => ({
            ...prev,
            [stat.key]: Math.floor(current),
          }));
        }, 50);
      });
    };
    const timer = setTimeout(animateNumbers, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header />
      <div className="achievements-page">
        {/* Hero Section */}
        <section className="achivement-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h1 className="achivement-title">
                  Our <span className="highlight">Achievements</span>
                </h1>
                <p className="achivement-subtitle">
                  Celebrating milestones in our journey of serving senior
                  citizens with dignity and compassion
                </p>
              </div>
              <div className="col-lg-6">
                <div className="achivement-image">
                  <img
                    src={overteam2}
                    alt="SS Sansthan NGO Achievement"
                    className="img-fluid rounded-5"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Achievement Section */}
        <section className="main-achievement">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h2 className="achievement-title">
                  Health Services NGO in Haryana
                </h2>
                <p className="achievement-description">
                  For the second consecutive time, SS Sansthan NGO has been
                  ranked as the Best in Haryana by the State Government. This
                  recognition reflects our unwavering commitment to providing
                  exceptional care and support to senior citizens.
                </p>
                <div className="achievement-features">
                  <div className="feature">
                    <Star className="feature-icon" />
                    <span>Excellence in Healthcare</span>
                  </div>
                  <div className="feature">
                    <Heart className="feature-icon" />
                    <span>Compassionate Care</span>
                  </div>
                  <div className="feature">
                    <Users className="feature-icon" />
                    <span>Community Impact</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="achievement-visual">
                  <img
                    src={card4}
                    alt="Government Recognition"
                    className="img-fluid rounded-5"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Grid */}
        <section className="achievements-grid">
          <div className="container">
            <div className="section-header text-center mb-5">
              <h2 className="section-title">Our Journey of Excellence</h2>
              <p className="section-subtitle">
                Milestones that define our commitment to elder care
              </p>
            </div>

            <div className="row">
              {achievements.map((achievement) => (
                <div key={achievement.id} className="col-lg-4 col-md-6 mb-4">
                  <div className="achievement-card">
                    {achievement.image && (
                      <div className="achievement-image">
                        <img
                          src={achievement.image}
                          alt={achievement.title}
                          className="img-fluid"
                        />
                      </div>
                    )}
                    <div className="achievement-content">
                      <div className="achievement-header">
                        {achievement.icon}
                        <div className="achievement-meta">
                          <span className="achievement-category">
                            {achievement.category}
                          </span>
                        </div>
                      </div>
                      <h3 className="achievement-card-title">
                        {achievement.title}
                      </h3>
                      <p className="achievement-card-description">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="achivements-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="achivements-title">Join Our Mission</h2>
                <p className="achivements-description">
                  Help us continue making a difference in the lives of senior
                  citizens
                </p>
                <div className="achivements-buttons">
                  <Link to="/donate" className="btn btn-primary btn-lg me-3">
                    <Heart size={20} className="me-2" />
                    Donate Now
                  </Link>
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

export default Achievements;
