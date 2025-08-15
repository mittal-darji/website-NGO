import React, { useState } from "react";
import "./DonationGateway.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";
import { createDonation } from "../../API/donationApi"; // Ensure this path is correct

const DonationGateway = () => {
  const navigate = useNavigate();

  const [selectedAmount, setSelectedAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [donorInfo, setDonorInfo] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const predefinedAmounts = [500, 1000, 2500, 5000, 10000, 25000];

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount("");
    setError(null); // Clear error when user interacts
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount("");
    setError(null); // Clear error when user interacts
  };

  const handleInputChange = (e) => {
    setDonorInfo({
      ...donorInfo,
      [e.target.name]: e.target.value,
    });
    setError(null); // Clear error when user interacts
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const donationAmount = selectedAmount || customAmount;

    if (!donationAmount) {
      setError("Please select or enter a donation amount");
      return;
    }
    if (!donorInfo.name || !donorInfo.email) {
      setError("Name and email are required fields");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const donationData = {
        name: donorInfo.name,
        email: donorInfo.email,
        phone: donorInfo.phone || null,
        message: donorInfo.message || null,
        amount: parseFloat(donationAmount), // Ensure amount is a number
        status: "SUCCESS",
      };

      const response = await createDonation(donationData);

      if (response && response.success) {
        // Redirect to payment page with necessary details
        navigate(`/payment?amount=${donationAmount}&id=${response.data._id}`);
      } else {
        setError(response?.message || "Donation submission failed");
      }
    } catch (err) {
      console.error("API Error:", err);
      setError(
        err.response?.data?.message ||
          err.message ||
          "Network error. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="donation-gateway">
        {/* Header Section */}
        <section className="founder-section">
          <div className="founder-overlay"></div>
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8 founder-main-content">
                <h1 className="founder-title">Make a Donation</h1>
                <div className="founder-subtitle">
                  <p>Mrs. Santosh Devi & Mr. Sombir Kaliramna</p>
                  <p className="founder-founder-organization-name">
                    Your generosity helps us continue our mission of serving
                    communities and creating positive change.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Donation Form */}
        <section className="donation-form-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="card donation-card">
                  <div className="card-body p-4 p-md-5">
                    {error && (
                      <div className="alert alert-danger" role="alert">
                        {error}
                      </div>
                    )}

                    <form onSubmit={handleSubmit}>
                      {/* Amount Selection */}
                      <div className="mb-5">
                        <h4 className="section-title mb-4">
                          Select Donation Amount
                        </h4>
                        <div className="row g-3 mb-4">
                          {predefinedAmounts.map((amount) => (
                            <div key={amount} className="col-md-4">
                              <button
                                type="button"
                                className={`btn amount-btn w-100 ${
                                  selectedAmount === amount ? "selected" : ""
                                }`}
                                onClick={() => handleAmountSelect(amount)}
                              >
                                ₹{amount.toLocaleString()}
                              </button>
                            </div>
                          ))}
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <label className="form-label custom-label">
                              Or enter custom amount
                            </label>
                            <div className="input-group">
                              <span className="input-group-text custom-currency">
                                ₹
                              </span>
                              <input
                                type="number"
                                className={`form-control custom-input ${
                                  error && !selectedAmount && !customAmount
                                    ? "is-invalid"
                                    : ""
                                }`}
                                placeholder="Enter amount"
                                value={customAmount}
                                onChange={handleCustomAmountChange}
                                min="1"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Donor Information */}
                      <div className="mb-5">
                        <h4 className="section-title mb-4">
                          Donor Information
                        </h4>
                        <div className="row g-3">
                          <div className="col-md-6">
                            <label className="form-label custom-label">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              className={`form-control custom-input ${
                                error && !donorInfo.name ? "is-invalid" : ""
                              }`}
                              name="name"
                              value={donorInfo.name}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="col-md-6">
                            <label className="form-label custom-label">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              className={`form-control custom-input ${
                                error && !donorInfo.email ? "is-invalid" : ""
                              }`}
                              name="email"
                              value={donorInfo.email}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="col-md-6">
                            <label className="form-label custom-label">
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              className="form-control custom-input"
                              name="phone"
                              value={donorInfo.phone}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="col-md-6">
                            <label className="form-label custom-label">
                              Message (Optional)
                            </label>
                            <textarea
                              className="form-control custom-input"
                              name="message"
                              value={donorInfo.message}
                              onChange={handleInputChange}
                              placeholder="Your message..."
                              rows="3"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Tax Benefits */}
                      <div className="tax-benefits mb-5">
                        <h6 className="tax-title">Tax Benefits</h6>
                        <p className="tax-text">
                          Your donation is eligible for tax deduction under
                          Section 80G of the Income Tax Act. You will receive a
                          tax receipt via email within 24 hours.
                        </p>
                      </div>

                      {/* Submit Button */}
                      <div className="text-center">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg donate-btn px-5 py-3"
                          disabled={
                            (!selectedAmount && !customAmount) ||
                            !donorInfo.name ||
                            !donorInfo.email ||
                            loading
                          }
                        >
                          {loading ? (
                            <>
                              <span
                                className="spinner-border spinner-border-sm"
                                role="status"
                                aria-hidden="true"
                              ></span>
                              Processing...
                            </>
                          ) : (
                            `Donate Now - ₹${(
                              selectedAmount ||
                              customAmount ||
                              0
                            ).toLocaleString()}`
                          )}
                        </button>
                        <p className="security-text mt-3">
                          <small>Secured by 256-bit SSL encryption</small>
                        </p>
                      </div>
                    </form>
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

export default DonationGateway;
