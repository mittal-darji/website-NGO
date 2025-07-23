import React, { useState } from "react";
import "./OurWork.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const workItems = [
  {
    title: "Blood Donation & Health Awareness Camps",
    description:
      "The Sansthan regularly organizes Free Blood Group Testing Camps, Blood Donation Drives, and Health Awareness Programs, reaching thousands of people with free health services and spreading awareness on vital issues.",
    icon: "🩸",
    color: "#e74c3c",
    category: "Health",
  },
  {
    title: "'Vraksh Dhara'– A Step Towards Environmental Conservation",
    description:
      "Through its environmental campaign 'Vraksh Dhara', the organization conducts massive tree plantation drives in schools, villages, and public places, along with awareness sessions to promote eco-friendly living and love for nature.",
    icon: "🌱",
    color: "#27ae60",
    category: "Environment",
  },
  {
    title: "Srijan Kutumbakam Gaushala – Serving and Protecting Cows",
    description:
      "The Sansthan has initiated the construction of a Gaushala (cow shelter), dedicated to the care and service of abandoned and elderly cows, with active participation from local villagers and supporters.",
    icon: "🐄",
    color: "#8e44ad",
    category: "Animal Care",
  },
  {
    title: "'Kshudha Mukti' – Eradicating Hunger",
    description:
      "Under the banner of 'Kshudha Mukti' (Freedom from Hunger), the Sansthan distributes free meals to the needy at railway stations, bus stands, and urban slums where people struggle to afford food.",
    icon: "🍽️",
    color: "#f39c12",
    category: "Food Security",
  },
  {
    title: "Srijan Kanyadaan Abhiyan – A Sacred Social Commitment",
    description:
      "Srijan Kutumbkam Seva Sansthan has become the voice of thousands of daughters who face helplessness during marriage due to financial hardships. The Sansthan launched the 'Srijan Kanyadaan Abhiyan' with a promise – no daughter should be deprived of her dream wedding due to poverty. This initiative provides financial assistance, clothes, utensils, jewelry, ration, and other essentials, bringing hope and dignity into the lives of underprivileged daughters.",
    icon: "👰",
    color: "#e91e63",
    category: "Social Welfare",
  },
  {
    title: "Plastic-Free Rohtak Campaign",
    description:
      "To reduce plastic usage, the Sansthan has launched a Plastic-Free Campaign, involving the distribution of dustbins at shops, promoting jute bags, and conducting street rallies to raise awareness about eco-alternatives.",
    icon: "♻️",
    color: "#2ecc71",
    category: "Environmental",
  },
];

function OurWork() {
  const [selectedWork, setSelectedWork] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <>
      <Header />
      <div className="our-work-container">
        <section id="ourwork" className="ourwork">
          <div className="founder-page">
            <section className="founder-section">
              <div className="founder-overlay"></div>
              <div className="container">
                <div className="row justify-content-center text-center">
                  <div className="col-lg-8 founder-main-content">
                    <h1 className="founder-title">Our Work</h1>
                    <div className="founder-subtitle">
                      <p>
                        {" "}
                        Making a difference in communities through dedicated
                        service and compassion
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="work-section">
            <div className="container">
              <div className="section-header"></div>

              <div className="work-grid">
                {workItems.map((item, index) => (
                  <div
                    className={`work-card ${
                      hoveredCard === index ? "hovered" : ""
                    }`}
                    key={index}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="card-header">
                      <div className="card-icon">{item.icon}</div>
                      <div className="card-category">{item.category}</div>
                    </div>

                    <div className="card-content">
                      <h3 className="card-title">{item.title}</h3>
                      <p className="card-description">
                        {item.description.slice(0, 120)}...
                      </p>
                    </div>

                    <div className="card-footer">
                      <Link to={"/carddetail"} className="view-btn">
                        <span>View More</span>
                        <svg
                          className="arrow-icon"
                          viewBox="0 0 24 24"
                          width="16"
                          height="16"
                        >
                          <path
                            fill="currentColor"
                            d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
                          />
                        </svg>
                      </Link>
                    </div>

                    <div className="card-glow"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default OurWork;
