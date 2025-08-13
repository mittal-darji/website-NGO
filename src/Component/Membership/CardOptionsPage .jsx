import React, { useState } from "react";
import "./CardOptionsPage .css";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

// Import local images
import greenCardImage from "../../assets/backsidecardgreen.png";
import yellowCardImage from "../../assets/backsidecardyellow.png";
import orangeCardImage from "../../assets/backsidecardorange.png";

const CardOptionsPage = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const navigate = useNavigate();

  // Sample card data with amounts
  const cardData = [
    {
      id: "green",
      title: "Green Card",
      description: "Member pay ₹1100 will create green card",
      bgColor: "#28a745",
      image: greenCardImage,
      amount: 1100,
      features: ["Premium Benefits", "Exclusive Access", "Priority Support"],
    },
    {
      id: "yellow",
      title: "Yellow Card",
      description: "Send and receiving OTP",
      bgColor: "#ffc107",
      image: yellowCardImage,
      amount: 2100,
      features: ["OTP Services", "Secure Verification", "Quick Processing"],
    },
    {
      id: "orange",
      title: "Orange Card",
      description: "Send and receiving OTP",
      bgColor: "#fd7e14",
      image: orangeCardImage,
      amount: 5100,
      features: ["OTP Management", "Real-time Updates", "Enhanced Security"],
    },
  ];

  const handleCardClick = (card) => {
    setSelectedCard(card.id);

    if (card.id === "green") {
      // ✅ Green card → go to payment page
      navigate(`/payment?amount=${card.amount}`);
    } else {
      // ✅ Yellow & Orange → go to /otpGenerate with card type in query
      navigate(`/otpGenerate?cardType=${card.id}`);
    }
  };

  return (
    <>
      <Header />
      <div className="card-options-container">
        <div className="cardoptions-op-section">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="cardoption-header col-lg-8">
                <h1 className="display-4 fw-bold mt-5 mb-4">
                  Choose Your Card Option
                </h1>
                <p className="lead mb-5">
                  Select the perfect card that suits your needs. Each card
                  offers unique benefits and features.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="cards-section">
          <div className="container">
            <div className="row g-4 justify-content-center">
              {cardData.map((card) => (
                <div key={card.id} className="col-lg-4 col-md-6">
                  <div
                    className={`card-option h-100 ${
                      selectedCard === card.id ? "selected" : ""
                    }`}
                  >
                    <div className="card-image-wrapper">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="card-image"
                      />
                      <div
                        className="card-overlay"
                        style={{ backgroundColor: card.bgColor + "20" }}
                      ></div>
                    </div>

                    <div className="card-content">
                      <div className="card-header-section">
                        <div
                          className="card-icon"
                          style={{ backgroundColor: card.bgColor }}
                        >
                          <i className="fas fa-credit-card"></i>
                        </div>
                        <h3 className="card-title">{card.title}</h3>
                      </div>

                      <p className="card-description">{card.description}</p>

                      <div className="card-features">
                        {card.features.map((feature, index) => (
                          <div key={index} className="feature-item">
                            <i
                              className="fas fa-check-circle"
                              style={{ color: card.bgColor }}
                            ></i>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      <button
                        className="btn-select"
                        style={{
                          backgroundColor: card.bgColor,
                          borderColor: card.bgColor,
                        }}
                        onClick={() => handleCardClick(card)}
                      >
                        Select {card.title}
                        <i className="fas fa-arrow-right ms-2"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="help-section mt-5 mb-5">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8">
                <h4 className="mb-3">Need Help Choosing?</h4>
                <p className="text-muted mb-4">
                  Our support team is here to help you select the best card
                  option for your requirements.
                </p>
                <button className="help-btn btn btn-outline-primary">
                  <i className="fas fa-headset me-2"></i>
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CardOptionsPage;
