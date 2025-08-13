// import React from "react";
// import "./PaymentPage.css";
// import { useLocation } from "react-router-dom";

// const PaymentPage = () => {
//   const query = new URLSearchParams(useLocation().search);
//   const amount = query.get("amount") || 0;

//   const upiId = "q056757178@ybl";
//   const paymentUrl = `upi://pay?pa=${upiId}&pn=NGO%20Donation&am=${amount}&cu=INR`;

//   const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
//     paymentUrl
//   )}`;

//   return (
//     <div className="payment-container">
//       <div className="container-fluid">
//         <div className="row justify-content-center">
//           <div className="col-12 col-md-8 col-lg-6 col-xl-5">
//             <div className="payment-card">
//               <div className="payment-header">
//                 <h2 className="payment-title">Complete Your Donation</h2>
//                 <p className="payment-subtitle">
//                   Thank you for supporting our cause
//                 </p>
//               </div>

//               <div className="payment-amount-section">
//                 <div className="payment-amount-card">
//                   <span className="payment-amount-label">Donation Amount</span>
//                   <div className="payment-amount-value">₹{amount}</div>
//                 </div>
//               </div>

//               <div className="payment-qr-section">
//                 <h4 className="payment-qr-title">Scan QR Code to Pay</h4>
//                 <div className="payment-qr-container">
//                   <div className="payment-qr-wrapper">
//                     <img
//                       src={qrCodeUrl}
//                       alt="Payment QR Code"
//                       className="payment-qr-code"
//                     />
//                   </div>
//                 </div>
//                 <p className="payment-qr-description">
//                   Use any UPI app to scan and pay instantly
//                 </p>
//               </div>

//               <div className="payment-divider">
//                 <span className="payment-divider-text">OR</span>
//               </div>

//               <div className="payment-link-section">
//                 <a
//                   href={paymentUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="payment-btn btn btn-primary btn-lg w-100"
//                 >
//                   <i className="fas fa-mobile-alt me-2"></i>
//                   Pay Now with UPI App
//                 </a>
//               </div>

//               <div className="payment-info">
//                 <div className="payment-security">
//                   <i className="fas fa-shield-alt text-success me-2"></i>
//                   <span>Secure Payment Gateway</span>
//                 </div>
//                 <div className="payment-support">
//                   <small className="text-muted">
//                     Need help? Contact us at Srijankutumbakam@gmail.com
//                   </small>
//                 </div>
//               </div>

//               <div className="payment-steps">
//                 <h5 className="payment-steps-title">How to pay:</h5>
//                 <div className="payment-step">
//                   <div className="payment-step-number">1</div>
//                   <div className="payment-step-text">
//                     Open any UPI app (GPay, PhonePe, Paytm)
//                   </div>
//                 </div>
//                 <div className="payment-step">
//                   <div className="payment-step-number">2</div>
//                   <div className="payment-step-text">
//                     Scan the QR code above
//                   </div>
//                 </div>
//                 <div className="payment-step">
//                   <div className="payment-step-number">3</div>
//                   <div className="payment-step-text">
//                     Verify amount and complete payment
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PaymentPage;
import React from "react";
import "./PaymentPage.css";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const query = new URLSearchParams(useLocation().search);
  const amount = query.get("amount") || 0;
  const navigate = useNavigate();

  const upiId = "mittaldarji290@okaxis"; //"q056757178@ybl";
  const paymentUrl = `upi://pay?pa=${upiId}&pn=NGO%20Donation&am=${amount}&cu=INR`;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
    paymentUrl
  )}`;

  const handlePaymentClick = () => {
    // Normally you would verify payment here before redirect
    navigate("/successful");
  };

  return (
    <div className="payment-container">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="payment-card">
              <div className="payment-header">
                <h2 className="payment-title">Complete Your Donation</h2>
                <p className="payment-subtitle">
                  Thank you for supporting our cause
                </p>
              </div>

              <div className="payment-amount-section">
                <div className="payment-amount-card">
                  <span className="payment-amount-label">Donation Amount</span>
                  <div className="payment-amount-value">₹{amount}</div>
                </div>
              </div>

              <div className="payment-qr-section">
                <h4 className="payment-qr-title">Scan QR Code to Pay</h4>
                <div className="payment-qr-container">
                  <div className="payment-qr-wrapper">
                    <img
                      src={qrCodeUrl}
                      alt="Payment QR Code"
                      className="payment-qr-code"
                    />
                  </div>
                </div>
                <p className="payment-qr-description">
                  Use any UPI app to scan and pay instantly
                </p>
              </div>

              <div className="payment-divider">
                <span className="payment-divider-text">OR</span>
              </div>

              <div className="payment-link-section">
                <a
                  href={paymentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="payment-btn btn btn-primary btn-lg w-100"
                  onClick={handlePaymentClick}
                >
                  <i className="fas fa-mobile-alt me-2"></i>
                  Pay Now with UPI App
                </a>
              </div>

              <div className="payment-info">
                <div className="payment-security">
                  <i className="fas fa-shield-alt text-success me-2"></i>
                  <span>Secure Payment Gateway</span>
                </div>
                <div className="payment-support">
                  <small className="text-muted">
                    Need help? Contact us at Srijankutumbakam@gmail.com
                  </small>
                </div>
              </div>

              <div className="payment-steps">
                <h5 className="payment-steps-title">How to pay:</h5>
                <div className="payment-step">
                  <div className="payment-step-number">1</div>
                  <div className="payment-step-text">
                    Open any UPI app (GPay, PhonePe, Paytm)
                  </div>
                </div>
                <div className="payment-step">
                  <div className="payment-step-number">2</div>
                  <div className="payment-step-text">
                    Scan the QR code above
                  </div>
                </div>
                <div className="payment-step">
                  <div className="payment-step-number">3</div>
                  <div className="payment-step-text">
                    Verify amount and complete payment
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
