import React, { useState } from "react";
import "./MembershipForm.css";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const MembershipForm = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState("english"); // Default to English

  const [formData, setFormData] = useState({
    name: "",
    position: "",
    dateOfBirth: "",
    gender: "",
    bloodGroup: "",
    address: "",
    contact: "",
    email: "",
    registrationNumber: "",
    membershipType: "",
    cardType: "",
  });

  const [errors, setErrors] = useState({});
  const [profileImage, setProfileImage] = useState(null);

  // Language translations
  const translations = {
    english: {
      pageTitle: "Member Registration",
      pageSubtitle: "Fill in your details to get started with membership",
      languageToggle: "Language:",
      personalInfo: "Personal Information",
      uploadPhoto: "Upload Photo",
      changePhoto: "Change Photo",
      fullName: "Full Name",
      position: "Position",
      dateOfBirth: "Date of Birth",
      gender: "Gender",
      bloodGroup: "Blood Group",
      contactNumber: "Contact Number",
      emailAddress: "Email Address",
      registrationNumber: "Registration Number",
      cardType: "Card Type",
      address: "Address",
      selectGender: "Select Gender",
      male: "Male",
      female: "Female",
      other: "Other",
      selectBloodGroup: "Select Blood Group",
      termsText: "I agree to the",
      termsConditions: "Terms and Conditions",
      privacyPolicy: "Privacy Policy",
      and: "and",
      createCard: "Create Card",
      required: "*",
      placeholders: {
        fullName: "Enter your full name",
        position: "Enter your position",
        contactNumber: "Enter your contact number",
        email: "Enter your email",
        registrationNumber: "Enter registration number",
        cardType: "Enter card type",
        address: "Enter your complete address",
      },
      errors: {
        nameRequired: "Full name is required",
        positionRequired: "Position is required",
        emailRequired: "Email is required",
        contactRequired: "Contact number is required",
        genderRequired: "Gender is required",
        bloodGroupRequired: "Blood group is required",
        membershipTypeRequired: "Membership type is required",
        cardTypeRequired: "Card type is required",
        invalidEmail: "Please enter a valid email address",
      },
    },
    hindi: {
      pageTitle: "सदस्य पंजीकरण",
      pageSubtitle: "सदस्यता शुरू करने के लिए अपनी जानकारी भरें",
      languageToggle: "भाषा:",
      personalInfo: "व्यक्तिगत जानकारी",
      uploadPhoto: "फोटो अपलोड करें",
      changePhoto: "फोटो बदलें",
      fullName: "पूरा नाम",
      position: "पद",
      dateOfBirth: "जन्म तिथि",
      gender: "लिंग",
      bloodGroup: "रक्त समूह",
      contactNumber: "संपर्क नंबर",
      emailAddress: "ईमेल पता",
      registrationNumber: "पंजीकरण संख्या",
      cardType: "कार्ड प्रकार",
      address: "पता",
      selectGender: "लिंग चुनें",
      male: "पुरुष",
      female: "महिला",
      other: "अन्य",
      selectBloodGroup: "रक्त समूह चुनें",
      termsText: "मैं सहमत हूं",
      termsConditions: "नियम और शर्तें",
      privacyPolicy: "गोपनीयता नीति",
      and: "और",
      createCard: "कार्ड बनाएं",
      required: "*",
      placeholders: {
        fullName: "अपना पूरा नाम दर्ज करें",
        position: "अपना पद दर्ज करें",
        contactNumber: "अपना संपर्क नंबर दर्ज करें",
        email: "अपना ईमेल दर्ज करें",
        registrationNumber: "पंजीकरण संख्या दर्ज करें",
        cardType: "कार्ड प्रकार दर्ज करें",
        address: "अपना पूरा पता दर्ज करें",
      },
      errors: {
        nameRequired: "पूरा नाम आवश्यक है",
        positionRequired: "पद आवश्यक है",
        emailRequired: "ईमेल आवश्यक है",
        contactRequired: "संपर्क नंबर आवश्यक है",
        genderRequired: "लिंग आवश्यक है",
        bloodGroupRequired: "रक्त समूह आवश्यक है",
        membershipTypeRequired: "सदस्यता प्रकार आवश्यक है",
        cardTypeRequired: "कार्ड प्रकार आवश्यक है",
        invalidEmail: "कृपया एक वैध ईमेल पता दर्ज करें",
      },
    },
  };

  const t = translations[language]; // Current language translations

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    // Clear errors when language changes
    setErrors({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = t.errors.nameRequired;
    if (!formData.position.trim())
      newErrors.position = t.errors.positionRequired;
    if (!formData.email.trim()) newErrors.email = t.errors.emailRequired;
    if (!formData.contact.trim()) newErrors.contact = t.errors.contactRequired;
    if (!formData.gender) newErrors.gender = t.errors.genderRequired;
    if (!formData.bloodGroup)
      newErrors.bloodGroup = t.errors.bloodGroupRequired;
    if (!formData.cardType) newErrors.cardType = t.errors.cardTypeRequired;

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = t.errors.invalidEmail;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCreateCard = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Pass form data and profile image to member card page
      navigate("/membercard", {
        state: {
          formData,
          profileImage,
          language,
        },
      });
    }
  };

  return (
    <>
      <Header />
      <div className="membershipf-container">
        {/* Main Content */}
        <div className="membershipf-main-content">
          <div className="membershipf-content-wrapper">
            {/* Form Section - Full Width */}
            <div className="membershipf-form-section">
              <div className="membershipf-form-card">
                {/* Language Toggle */}
                <div className="membershipf-language-toggle">
                  <span className="membershipf-language-label">
                    {t.languageToggle}
                  </span>
                  <div className="membershipf-language-buttons">
                    <button
                      type="button"
                      className={`membershipf-lang-btn ${
                        language === "english" ? "active" : ""
                      }`}
                      onClick={() => handleLanguageChange("english")}
                    >
                      English
                    </button>
                    <button
                      type="button"
                      className={`membershipf-lang-btn ${
                        language === "hindi" ? "active" : ""
                      }`}
                      onClick={() => handleLanguageChange("hindi")}
                    >
                      हिंदी
                    </button>
                  </div>
                </div>

                <div className="membershipf-form-header">
                  <h3 className="membershipf-form-title">{t.pageTitle}</h3>
                  <p className="membershipf-form-subtitle">{t.pageSubtitle}</p>
                </div>

                <form className="membershipf-form" onSubmit={handleCreateCard}>
                  {/* Profile Image Upload */}
                  <div className="membershipf-image-section">
                    <div className="membershipf-image-wrapper">
                      {profileImage ? (
                        <img
                          src={profileImage}
                          alt="Profile"
                          className="membershipf-profile-image"
                        />
                      ) : (
                        <div className="membershipf-image-placeholder">
                          <svg
                            className="membershipf-camera-icon"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                            ></path>
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                            ></path>
                          </svg>
                          <span>{t.uploadPhoto}</span>
                        </div>
                      )}
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="membershipf-image-input"
                        id="profileImage"
                      />
                      <label
                        htmlFor="profileImage"
                        className="membershipf-image-label"
                      >
                        {t.changePhoto}
                      </label>
                    </div>
                  </div>

                  {/* Personal Information */}
                  <div className="membershipf-section-title">
                    {t.personalInfo}
                  </div>

                  <div className="membershipf-form-row">
                    <div className="membershipf-form-group">
                      <label className="membershipf-label">
                        {t.fullName} {t.required}
                      </label>
                      <input
                        type="text"
                        className={`membershipf-input ${
                          errors.name ? "membershipf-input-error" : ""
                        }`}
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder={t.placeholders.fullName}
                      />
                      {errors.name && (
                        <div className="membershipf-error-message">
                          {errors.name}
                        </div>
                      )}
                    </div>

                    <div className="membershipf-form-group">
                      <label className="membershipf-label">
                        {t.position} {t.required}
                      </label>
                      <input
                        type="text"
                        className={`membershipf-input ${
                          errors.position ? "membershipf-input-error" : ""
                        }`}
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        placeholder={t.placeholders.position}
                      />
                      {errors.position && (
                        <div className="membershipf-error-message">
                          {errors.position}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="membershipf-form-row">
                    <div className="membershipf-form-group">
                      <label className="membershipf-label">
                        {t.dateOfBirth}
                      </label>
                      <input
                        type="date"
                        className="membershipf-input"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="membershipf-form-group">
                      <label className="membershipf-label">
                        {t.gender} {t.required}
                      </label>
                      <select
                        className={`membershipf-input ${
                          errors.gender ? "membershipf-input-error" : ""
                        }`}
                        name="gender"
                        value={formData.gender}
                        onChange={handleInputChange}
                      >
                        <option value="">{t.selectGender}</option>
                        <option value="Male">{t.male}</option>
                        <option value="Female">{t.female}</option>
                        <option value="Other">{t.other}</option>
                      </select>
                      {errors.gender && (
                        <div className="membershipf-error-message">
                          {errors.gender}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="membershipf-form-row">
                    <div className="membershipf-form-group">
                      <label className="membershipf-label">
                        {t.bloodGroup} {t.required}
                      </label>
                      <select
                        className={`membershipf-input ${
                          errors.bloodGroup ? "membershipf-input-error" : ""
                        }`}
                        name="bloodGroup"
                        value={formData.bloodGroup}
                        onChange={handleInputChange}
                      >
                        <option value="">{t.selectBloodGroup}</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                      </select>
                      {errors.bloodGroup && (
                        <div className="membershipf-error-message">
                          {errors.bloodGroup}
                        </div>
                      )}
                    </div>
                    <div className="membershipf-form-group">
                      <label className="membershipf-label">
                        {t.contactNumber} {t.required}
                      </label>
                      <input
                        type="tel"
                        className={`membershipf-input ${
                          errors.contact ? "membershipf-input-error" : ""
                        }`}
                        name="contact"
                        value={formData.contact}
                        onChange={handleInputChange}
                        placeholder={t.placeholders.contactNumber}
                      />
                      {errors.contact && (
                        <div className="membershipf-error-message">
                          {errors.contact}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="membershipf-form-row">
                    <div className="membershipf-form-group">
                      <label className="membershipf-label">
                        {t.emailAddress} {t.required}
                      </label>
                      <input
                        type="email"
                        className={`membershipf-input ${
                          errors.email ? "membershipf-input-error" : ""
                        }`}
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder={t.placeholders.email}
                      />
                      {errors.email && (
                        <div className="membershipf-error-message">
                          {errors.email}
                        </div>
                      )}
                    </div>
                    <div className="membershipf-form-group">
                      <label className="membershipf-label">
                        {t.registrationNumber}
                      </label>
                      <input
                        type="text"
                        className="membershipf-input"
                        name="registrationNumber"
                        value={formData.registrationNumber}
                        onChange={handleInputChange}
                        placeholder={t.placeholders.registrationNumber}
                      />
                    </div>
                  </div>

                  <div className="membershipf-form-row">
                    <div className="membershipf-form-group">
                      <label className="membershipf-label">
                        {t.cardType} {t.required}
                      </label>
                      <input
                        type="text"
                        className={`membershipf-input ${
                          errors.cardType ? "membershipf-input-error" : ""
                        }`}
                        name="cardType"
                        value={formData.cardType}
                        onChange={handleInputChange}
                        placeholder={t.placeholders.cardType}
                      />
                      {errors.cardType && (
                        <div className="membershipf-error-message">
                          {errors.cardType}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="membershipf-form-group">
                    <label className="membershipf-label">{t.address}</label>
                    <textarea
                      className="membershipf-textarea"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      rows="3"
                      placeholder={t.placeholders.address}
                    ></textarea>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="membershipf-checkbox-group">
                    <input
                      className="membershipf-checkbox"
                      type="checkbox"
                      id="terms"
                      required
                    />
                    <label
                      className="membershipf-checkbox-label"
                      htmlFor="terms"
                    >
                      {t.termsText}{" "}
                      <a href="#" className="membershipf-link">
                        {t.termsConditions}
                      </a>{" "}
                      {t.and}{" "}
                      <a href="#" className="membershipf-link">
                        {t.privacyPolicy}
                      </a>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="membershipf-button-group">
                    <button type="submit" className="membershipf-submit-btn">
                      {t.createCard}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MembershipForm;
