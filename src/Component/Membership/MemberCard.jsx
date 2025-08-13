import React, { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MemberCard.css";

const MemberCard = () => {
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
    <div className="green-membercard-container">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12">
            <div ref={cardRef} className="green-membercard-display-container">
              {" "}
              {/* Use cardRef here */}
              {/* Front Side */}
              <div className="green-membercard-front">
                <div className="green-membercard-content">
                  <div className="green-membercard-photo-section">
                    <div className="green-membercard-photo-container">
                      {image ? (
                        <img
                          src={image}
                          alt="Member"
                          className="green-membercard-photo"
                        />
                      ) : (
                        <div className="green-membercard-photo-placeholder"></div>
                      )}
                    </div>
                    <div className="green-membercard-stamp-small"></div>
                  </div>

                  <div className="green-membercard-details-section">
                    <div className="green-membercard-details">
                      <div className="green-membercard-detail-row">
                        <span className="green-membercard-detail-label fs-6">
                          नाम
                        </span>
                        <span className="green-membercard-detail-separator">
                          :
                        </span>
                        <span className="green-membercard-detail-value">
                          {data.name}
                        </span>
                      </div>
                      <div className="green-membercard-detail-row">
                        <span className="green-membercard-detail-label fs-6">
                          पद
                        </span>
                        <span className="green-membercard-detail-separator">
                          :
                        </span>
                        <span className="green-membercard-detail-value">
                          {data.position}
                        </span>
                      </div>
                      <div className="green-membercard-detail-row">
                        <span className="green-membercard-detail-label fs-6">
                          जन्म तिथि
                        </span>
                        <span className="green-membercard-detail-separator">
                          :
                        </span>
                        <span className="green-membercard-detail-value">
                          {data.dateOfBirth}
                        </span>
                      </div>
                      <div className="green-membercard-detail-row">
                        <span className="green-membercard-detail-label fs-6">
                          लिंग
                        </span>
                        <span className="green-membercard-detail-separator">
                          :
                        </span>
                        <span className="green-membercard-detail-value">
                          {data.gender}
                        </span>
                      </div>
                      <div className="green-membercard-detail-row">
                        <span className="green-membercard-detail-label fs-6">
                          ब्लड ग्रुप
                        </span>
                        <span className="green-membercard-detail-separator">
                          :
                        </span>
                        <span className="green-membercard-detail-value">
                          {data.bloodGroup}
                        </span>
                      </div>
                      <div className="green-membercard-detail-row">
                        <span className="green-membercard-detail-label fs-6">
                          पता
                        </span>
                        <span className="green-membercard-detail-separator">
                          :
                        </span>
                        <span className="green-membercard-detail-value">
                          {data.address}
                        </span>
                      </div>
                      <div className="green-membercard-detail-row">
                        <span className="green-membercard-detail-label fs-6">
                          संपर्क
                        </span>
                        <span className="green-membercard-detail-separator">
                          :
                        </span>
                        <span className="green-membercard-detail-value">
                          {data.contact}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Back Side */}
              <div className="green-membercard-back"></div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-4">
          <div className="col-auto">
            <button
              onClick={downloadCard}
              className="btn green-membercard-download-btn btn-lg"
            >
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
