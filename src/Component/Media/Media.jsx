import React, { useState } from "react";
import "./Media.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import card1 from "../../assets/card1.jpg";
import card2 from "../../assets/card2.jpg";
import card3 from "../../assets/card3.jpg";
import card4 from "../../assets/card4.jpg";
import card5 from "../../assets/card5.jpg";
import card6 from "../../assets/card6.jpg";
import card7 from "../../assets/card7.jpg";
import card8 from "../../assets/card8.jpg";
import card9 from "../../assets/card9.jpg";
import card10 from "../../assets/card10.jpg";
import card11 from "../../assets/card11.jpg";
import card12 from "../../assets/card12.jpg";
import overteam from "../../assets/overteam.jpg";
import overteam2 from "../../assets/overteam2.jpg";
import overteam3 from "../../assets/overteam3.jpg";
import { Link } from "react-router-dom";

const Media = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      src: card1,
      title: "Health Awareness Camps",
      description:
        "The Sansthan regularly organizes Free Blood Group Testing Camps, Blood Donation Drives, and Health Awareness Programs",
    },
    {
      id: 2,
      src: card2,
      title: "Health Awareness Camps",
      description:
        "The Sansthan regularly organizes Free Blood Group Testing Camps, Blood Donation Drives, and Health Awareness Programs",
    },
    {
      id: 3,
      src: card3,
      title: "Food Distribution",
      description: "Nutritious meals served with love and care",
    },
    {
      id: 4,
      src: card4,
      title: "Health Awareness Camps",
      description:
        "The Sansthan regularly organizes Free Blood Group Testing Camps, Blood Donation Drives, and Health Awareness Programs",
    },
    {
      id: 5,
      src: card5,
      title: "Blood Donation & Health Awareness",
      description:
        "The Sansthan regularly organizes Free Blood Group Testing Camps, Blood Donation Drives, and Health Awareness Programs, reaching thousands of people with free health services and spreading awareness on vital issues.",
    },
    {
      id: 6,
      src: card6,
      title: "Plastic-Free Rohtak Campaign",
      description:
        " the Sansthan has launched a Plastic-Free Campaign, involving the distribution of dustbins at shops",
    },
    {
      id: 7,
      src: card7,
      title: "Food Distribution",
      description: "Nutritious meals served with love and care",
    },
    {
      id: 8,
      src: card8,
      title: "Blood Donation & Health Awareness",
      description:
        "The Sansthan regularly organizes Free Blood Group Testing Camps, Blood Donation Drives, and Health Awareness Programs, reaching thousands of people with free health services and spreading awareness on vital issues.",
    },
    {
      id: 9,
      src: card9,
      title: "Food Distribution",
      description: "Nutritious meals served with love and care",
    },
    {
      id: 10,
      src: card10,
      title: "Emotional Support",
      description: "Providing emotional care and companionship",
    },
    {
      id: 11,
      src: overteam,
      title: "Food Distribution",
      description: "Nutritious meals served with love and care",
    },
    {
      id: 12,
      src: overteam2,
      title: "Emotional Support",
      description: "Providing emotional care and companionship",
    },
    {
      id: 13,
      src: overteam3,
      title: "‘Vraksh Dhara’ – A Step Towards Environmental Conservation",
      description:
        "Through its environmental campaign ‘Vraksh Dhara’, the organization conducts massive tree plantation drives in schools, villages, and public places",
    },
    {
      id: 14,
      src: card11,
      title: "Blood Donation & Health Awareness",
      description:
        "The Sansthan regularly organizes Free Blood Group Testing Camps, Blood Donation Drives, and Health Awareness Programs, reaching thousands of people with free health services and spreading awareness on vital issues.",
    },
    {
      id: 15,
      src: card12,
      title: "Blood Donation & Health Awareness",
      description:
        "The Sansthan regularly organizes Free Blood Group Testing Camps, Blood Donation Drives, and Health Awareness Programs, reaching thousands of people with free health services and spreading awareness on vital issues.",
    },
  ];

  const branches = [
    { city: "Lucknow", status: "Main Branch", established: "2020" },
    { city: "Hardoi", status: "Active", established: "2021" },
    { city: "Sitapur", status: "Active", established: "2021" },
    { city: "Jhansi", status: "Active", established: "2022" },
    { city: "Kanpur Nagar", status: "Active", established: "2022" },
    { city: "Vrindavan-Mathura", status: "Active", established: "2023" },
  ];

  const testimonials = [
    {
      name: "Ajay Kumar",
      location: "Kanpur Dehat",
      message:
        "This NGO is actively engaged in performing extraordinary acts of kindness and service within our city!",
      rating: 5,
    },
    {
      name: "Sandeep Sharma",
      location: "Lucknow",
      message:
        "SS Sansthan NGO is dedicated to offering unparalleled assistance and support to the elderly people",
      rating: 5,
    },
    {
      name: "Sumit Gupta",
      location: "Agra",
      message:
        "They are undertaking truly commendable efforts for the betterment of humanity.",
      rating: 5,
    },
  ];

  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Header />
      <div className="ss-sansthan-page">
        {/* Header Section */}
        <header className="founder-section"></header>

        {/* Mission Quote Section */}
        <section className="mission-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 mx-auto text-center">
                <div className="mission-quote">
                  <p className="hindi-quote">
                    "अपने वो नहीं होते, जो सिर्फ तस्वीरों में साथ खड़े होते हैं,
                    बल्कि अपने वो होते है जो तकलीफों में साथ खड़े होते हैं।"
                  </p>
                  <p className="english-quote">
                    Those who don't bring change through their actions don't
                    understand life's true purpose. When you work for that
                    purpose, you not only transform your life but also bring new
                    light to others' lives!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Media Gallery Section */}
        <section className="gallery-section">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center mb-5">
                <h2 className="section-title">Our Work in Action</h2>
                <p className="section-subtitle">
                  Capturing moments of care, love, and dignity
                </p>
              </div>
            </div>
            <div className="row">
              {images.map((image) => (
                <div key={image.id} className="col-lg-4 col-md-6 mb-4">
                  <div
                    className="gallery-video-item"
                    onClick={() => openImageModal(image)}
                  >
                    <div className="image-container">
                      <img
                        src={image.src}
                        alt={image.title}
                        className="gallery-image"
                      />
                      <div className="image-overlay">
                        <h5 className="image-title">{image.title}</h5>
                        <p className="image-description">{image.description}</p>
                        <div className="view-btn">
                          <i className="fas fa-eye"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials-section">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center mb-5">
                <h2 className="section-title">What People Say</h2>
                <p className="section-subtitle">
                  Testimonials from our community
                </p>
              </div>
            </div>
            <div className="row">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="col-lg-4 col-md-6 mb-4">
                  <div className="testimonial-card">
                    <div className="testimonial-content">
                      <div className="stars">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <i key={i} className="fas fa-star"></i>
                        ))}
                      </div>
                      <p className="testimonial-message">
                        "{testimonial.message}"
                      </p>
                    </div>
                    <div className="testimonial-author">
                      <div className="author-avatar">
                        <i className="fas fa-user"></i>
                      </div>
                      <div className="author-info">
                        <h6 className="author-name">{testimonial.name}</h6>
                        <p className="author-location">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="media-section ">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="media-title">Join Our Mission</h2>
                <p className="media-description">
                  Help us provide better care for our elderly. Your support
                  makes a difference in their lives.
                </p>
                <div className="media-buttons">
                  <Link to="/donate" className="btn btn-primary btn-lg me-3">
                    Donate Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {selectedImage && (
          <div className="image-modal" onClick={closeImageModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeImageModal}>
                <i className="fas fa-times"></i>
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="modal-image"
              />
              <div className="modal-info">
                <h4>{selectedImage.title}</h4>
                <p>{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Media;
