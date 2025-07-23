import React, { useState, useEffect } from "react";
import "./Home.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import homeBanner from "../../assets/homebanner.jpg";
import overteam from "../../assets/overteam.jpg";
import overteam2 from "../../assets/overteam2.jpg";
import overteam3 from "../../assets/overteam3.jpg";
import card2 from "../../assets/card2.jpg";
import card4 from "../../assets/card4.jpg";
import card7 from "../../assets/card7.jpg";

const galleryImages = [overteam, overteam2, overteam3, card2, card4, card7];

const Home = () => {
  const [isVisible, setIsVisible] = useState({});

  const testimonials = [
    {
      name: "Ajay",
      location: "Kanpur Dehat",
      message:
        "This NGO is actively engaged in performing extraordinary acts of kindness and service within our city!",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    },
    {
      name: "Sandeep",
      location: "Lucknow",
      message:
        "SSSansthan NGO is dedicated to offering unparalleled assistance and support to the elderly people",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
    },
    {
      name: "Sumit",
      location: "Agra",
      message:
        "They are undertaking truly commendable efforts for the betterment of humanity.",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    },
  ];

  const branches = [
    { name: "Lucknow", established: "2020" },
    { name: "Hardoi", established: "2021" },
    { name: "Sitapur", established: "2021" },
    { name: "Jhansi", established: "2022" },
    { name: "Kanpur Nagar", established: "2022" },
    { name: "Vrindavan-Mathura", established: "2023" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <div className="homepage">
        <section id="home" className="home-section">
          <div className="banner-container">
            <img
              src={homeBanner}
              alt="SS Sansthan NGO Banner"
              className="banner-image"
            />
          </div>
        </section>

        {/* Quote Section */}
        <section className="quote-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 mx-auto text-center">
                <div
                  className="quote-card animate-on-scroll fade-in-up"
                  id="quote"
                >
                  <blockquote>
                    <p>
                      अपने वो नहीं होते, जो सिर्फ तस्वीरों में साथ खड़े होते
                      हैं, बल्कि अपने वो होते है जो तकलीफों में साथ खड़े होते
                      हैं।
                    </p>
                    <footer>
                      जो लोग अपने कर्मों से संसार में कोई परिवर्तन नहीं लाते, वे
                      जीवन के वास्तविक उद्देश्य को नहीं समझ पाते। इस दुनिया में
                      हर व्यक्ति का एक उद्देश्य है, और जब आप उस उद्देश्य के लिए
                      काम करते हैं, तो आप न केवल अपनी जिंदगी बदलते हैं, बल्कि
                      दूसरों की जिंदगी में भी एक नई रोशनी लाते हैं !
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="services-section">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center mb-5">
                <h2
                  className="section-title animate-on-scroll fade-in-up"
                  id="services-title"
                >
                  What We Do?
                </h2>
                <p
                  className="section-subtitle animate-on-scroll fade-in-up"
                  id="services-subtitle"
                >
                  Looking for the Lucknow best old age home ngo that cares for
                  the elderly?
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-4">
                <div
                  className="service-card animate-on-scroll slide-in-left"
                  id="service-1"
                >
                  <div className="service-icon">🏥</div>
                  <h4>Medical Care</h4>
                  <p>
                    Comprehensive healthcare services with regular check-ups,
                    medication management, and emergency care for all residents.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div
                  className="service-card animate-on-scroll slide-in-left"
                  id="service-2"
                  style={{ animationDelay: "0.2s" }}
                >
                  <div className="service-icon">🍽️</div>
                  <h4>Nutritious Meals</h4>
                  <p>
                    Balanced and healthy meals prepared with care, considering
                    dietary restrictions and preferences of elderly residents.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div
                  className="service-card animate-on-scroll slide-in-left"
                  id="service-3"
                  style={{ animationDelay: "0.4s" }}
                >
                  <div className="service-icon">❤️</div>
                  <h4>Emotional Support</h4>
                  <p>
                    Compassionate care and companionship to ensure the mental
                    and emotional well-being of our elderly residents.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="gallery-section ">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center mb-5">
                <h2
                  className="section-title animate-on-scroll fade-in-up"
                  id="gallery-title"
                >
                  Our Gallery
                </h2>
              </div>
            </div>
            <div className="row">
              {galleryImages.map((image, index) => (
                <div key={index} className="col-lg-4 col-md-6 mb-4">
                  <div
                    className="gallery-item animate-on-scroll zoom-in"
                    id={`gallery-${index}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <img
                      src={image}
                      alt={`Gallery ${index + 1}`}
                      className="img-fluid"
                    />
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

export default Home;
