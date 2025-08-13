import React, { useRef, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Yellowcardfield.css";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { useLocation } from "react-router-dom";

const Yellowcardfield = () => {
  const cardRef = useRef(null); // Correct reference name
  const location = useLocation();
  const { formData, profileImage } = location.state || {};

  const [data] = useState(
    formData || {
      name: "",
      position: "",
      dateOfBirth: "",
      gender: "",
      bloodGroup: "",
      address: "",
      contact: "",
      email: "",
      registrationNumber: "",
      cardType: "",
    }
  );

  const [image] = useState(profileImage || null);

  const downloadCard = async () => {
    if (!cardRef.current) return;

    try {
      // Capture the card with higher quality
      const canvas = await html2canvas(cardRef.current, {
        scale: 3, // Increased scale for better quality
        logging: false,
        useCORS: true,
        allowTaint: true,
      });

      // PDF settings
      const pdf = new jsPDF("landscape", "pt", [canvas.width, canvas.height]);

      // Calculate dimensions to fill the PDF page
      const imgWidth = pdf.internal.pageSize.getWidth();
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      // Add image to PDF
      pdf.addImage(canvas, "PNG", 0, 0, imgWidth, imgHeight);

      // Save the PDF
      pdf.save(`${data.name.replace(/\s+/g, "_")}_member_card.pdf`); // Corrected line
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Error generating card. Please try again.");
    }
  };

  return (
    <div className="yellow-membercard-container">
      <div className="container-fluid">
        {/* Card Display Section */}
        <div className="row justify-content-center">
          <div className="col-12">
            <div ref={cardRef} className="yellow-membercard-display-container">
              {/* FRONT SIDE */}
              <div className="yellow-membercard-front">
                <div className="yellow-membercard-content">
                  <div className="yellow-membercard-photo-section">
                    <div className="yellow-membercard-photo-container">
                      {profileImage ? (
                        <img
                          src={profileImage}
                          alt="Member"
                          className="yellow-membercard-photo"
                        />
                      ) : (
                        <div className="yellow-membercard-photo-placeholder"></div>
                      )}
                    </div>

                    <div className="yellow-membercard-stamp-small"></div>
                  </div>

                  <div className="yellow-membercard-details-section">
                    <div className="yellow-membercard-details">
                      <div className="yellow-membercard-detail-row">
                        <span className="yellow-membercard-detail-label fs-6">
                          नाम
                        </span>
                        <span className="yellow-membercard-detail-separator">
                          :
                        </span>
                        <span className="yellow-membercard-detail-value fs-6 fw-semibold">
                          {formData.name}
                        </span>
                      </div>
                      <div className="yellow-membercard-detail-row">
                        <span className="yellow-membercard-detail-label fs-6">
                          पद
                        </span>
                        <span className="yellow-membercard-detail-separator">
                          :
                        </span>
                        <span className="yellow-membercard-detail-value fs-6 fw-semibold">
                          {formData.position}
                        </span>
                      </div>
                      <div className="yellow-membercard-detail-row">
                        <span className="yellow-membercard-detail-label fs-6">
                          जन्म तिथि
                        </span>
                        <span className="yellow-membercard-detail-separator">
                          :
                        </span>
                        <span className="yellow-membercard-detail-value fs-6 fw-semibold">
                          {formData.dateOfBirth}
                        </span>
                      </div>
                      <div className="yellow-membercard-detail-row">
                        <span className="yellow-membercard-detail-label fs-6">
                          लिंग
                        </span>
                        <span className="yellow-membercard-detail-separator">
                          :
                        </span>
                        <span className="yellow-membercard-detail-value fs-6 fw-semibold">
                          {formData.gender}
                        </span>
                      </div>
                      <div className="yellow-membercard-detail-row">
                        <span className="yellow-membercard-detail-label fs-6">
                          ब्लड ग्रुप
                        </span>
                        <span className="yellow-membercard-detail-separator">
                          :
                        </span>
                        <span className="yellow-membercard-detail-value fs-6 fw-semibold">
                          {formData.bloodGroup}
                        </span>
                      </div>
                      <div className="yellow-membercard-detail-row">
                        <span className="yellow-membercard-detail-label fs-6">
                          पता
                        </span>
                        <span className="yellow-membercard-detail-separator">
                          :
                        </span>
                        <span className="yellow-membercard-detail-value fs-6 fw-semibold">
                          {formData.address}
                        </span>
                      </div>
                      <div className="yellow-membercard-detail-row">
                        <span className="yellow-membercard-detail-label fs-6">
                          संपर्क
                        </span>
                        <span className="yellow-membercard-detail-separator">
                          :
                        </span>
                        <span className="yellow-membercard-detail-value fs-6 fw-semibold">
                          {formData.contact}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* BACK SIDE */}
              <div className="yellow-membercard-back"></div>
            </div>
          </div>
        </div>

        {/* Download Button - Centered */}
        <div className="row justify-content-center mt-4">
          <div className="col-auto">
            <button
              onClick={downloadCard}
              className="btn yellow-membercard-download-btn btn-lg"
            >
              Download Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Yellowcardfield;
