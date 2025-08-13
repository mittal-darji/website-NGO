import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SuccessPage.css";

const SuccessPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/membership/form");
    }, 5000); // redirect after 5 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="success-page">
      <h1>✅ Payment Successful!</h1>
      <p>You will be redirected to the membership form shortly...</p>
    </div>
  );
};

export default SuccessPage;
