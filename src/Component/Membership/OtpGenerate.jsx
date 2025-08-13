import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./OtpGenerate.css";

const OtpGenerate = () => {
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState("send"); // "send" -> "verify"
  const [message, setMessage] = useState("");
  const [cardTypeRaw, setCardTypeRaw] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Helper: normalize "yellow card", "yellow-card", "yellow", etc.
  const normalize = (s) =>
    (s || "")
      .toLowerCase()
      .replace(/%20/gi, " ")
      .replace(/-/g, " ")
      .replace(/\s+/g, " ")
      .trim();

  const getAmountFromCardType = (t) => {
    const key = normalize(t);
    if (key === "yellow" || key === "yellow card") return 2100;
    if (key === "orange" || key === "orange card") return 5100;
    return null; // unknown card
  };

  // Read cardType from URL: /otpGenerate?cardType=yellow%20card (or yellow / yellow-card)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const type = params.get("cardType");
    setCardTypeRaw(type || "");
  }, [location.search]);

  const handleSendOtp = async () => {
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("http://localhost:5003/api/otp/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}), // backend generates OTP
      });

      if (res.ok) {
        setMessage("✅ OTP email sent successfully!");
        setStep("verify");
      } else {
        setMessage("❌ Failed to send OTP");
      }
    } catch (e) {
      console.error(e);
      setMessage("❌ Error sending OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (!otp.trim()) {
      setMessage("❌ Please enter OTP");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("http://localhost:5003/api/otp/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ otp }),
      });

      const data = await res.json();
      if (data.success) {
        const amount = getAmountFromCardType(cardTypeRaw);

        if (amount) {
          setMessage("✅ OTP Verified Successfully! Redirecting to payment…");
          setTimeout(() => navigate(`/payment?amount=${amount}`), 800);
        } else {
          // Fallback if cardType missing/unknown
          setMessage(
            "⚠️ Card type missing or invalid. Cannot redirect to payment."
          );
        }
      } else {
        setMessage("❌ OTP Incorrect");
      }
    } catch (e) {
      console.error(e);
      setMessage("❌ Error verifying OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = () => {
    setOtp("");
    setStep("send");
    setMessage("");
  };

  const normalizedCardType = normalize(cardTypeRaw);
  const cardDisplayName = normalizedCardType
    ? normalizedCardType.toUpperCase()
    : "";
  const amount = getAmountFromCardType(cardTypeRaw);

  return (
    <div className="otpGenerate">
      <div className="otpGenerate__container">
        <div className="otpGenerate__card">
          <div className="otpGenerate__header">
            <div className="otpGenerate__icon">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 12L11 14L15 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h2 className="otpGenerate__title">OTP Verification</h2>
            {cardDisplayName && (
              <div className="otpGenerate__cardInfo">
                <span className="otpGenerate__cardType">
                  {cardDisplayName} Card
                </span>
                {amount && (
                  <span className="otpGenerate__amount">
                    ₹{amount.toLocaleString()}
                  </span>
                )}
              </div>
            )}
          </div>

          <div className="otpGenerate__content">
            {step === "send" && (
              <div className="otpGenerate__sendStep">
                <p className="otpGenerate__description">
                  Click the button below to receive a One-Time Password (OTP)
                  via email for secure verification.
                </p>
                <button
                  className="otpGenerate__button otpGenerate__button--primary"
                  onClick={handleSendOtp}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <div className="otpGenerate__spinner"></div>
                      Sending OTP...
                    </>
                  ) : (
                    "Send OTP"
                  )}
                </button>
              </div>
            )}

            {step === "verify" && (
              <div className="otpGenerate__verifyStep">
                <p className="otpGenerate__description">
                  Enter the 4-digit OTP sent to your registered email address.
                </p>
                <div className="otpGenerate__inputGroup">
                  <input
                    type="text"
                    className="otpGenerate__input"
                    placeholder="Enter 4-digit OTP"
                    value={otp}
                    onChange={(e) =>
                      setOtp(e.target.value.replace(/\D/g, "").slice(0, 4))
                    }
                    maxLength="4"
                    autoComplete="one-time-code"
                  />
                </div>
                <div className="otpGenerate__buttonGroup">
                  <button
                    className="otpGenerate__button otpGenerate__button--primary"
                    onClick={handleVerifyOtp}
                    disabled={loading || otp.length !== 4}
                  >
                    {loading ? (
                      <>
                        <div className="otpGenerate__spinner"></div>
                        Verifying...
                      </>
                    ) : (
                      "Verify OTP"
                    )}
                  </button>
                  <button
                    className="otpGenerate__button otpGenerate__button--secondary"
                    onClick={handleResendOtp}
                    disabled={loading}
                  >
                    Resend OTP
                  </button>
                </div>
              </div>
            )}

            {message && (
              <div
                className={`otpGenerate__message ${
                  message.includes("✅")
                    ? "otpGenerate__message--success"
                    : message.includes("⚠️")
                    ? "otpGenerate__message--warning"
                    : "otpGenerate__message--error"
                }`}
              >
                {message}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpGenerate;
