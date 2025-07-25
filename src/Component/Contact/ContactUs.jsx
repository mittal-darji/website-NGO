import React, { useState } from "react";
import "./Contactus.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { sendContactUsMessage } from "../../API/contactUsApi"; // Import the API function

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await sendContactUsMessage(formData);
      setSuccess(response.message);
      setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
    } catch (error) {
      setError("Failed to send message. Please try again later.");
    }
  };

  return (
    <>
      <Header />
      <div>
        <section className="contactus-main"></section>

        <section className="contactus-section py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="card contact-us shadow p-4">
                  <h2 className="text-center mb-4">Contact Us</h2>
                  {error && <div className="alert alert-danger">{error}</div>}
                  {success && (
                    <div className="alert alert-success">{success}</div>
                  )}
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label fw-semibold">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label fw-semibold">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="subject"
                        className="form-label fw-semibold"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Enter the subject"
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="message"
                        className="form-label fw-semibold"
                      >
                        Message
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        placeholder="Enter your message"
                      ></textarea>
                    </div>
                    <div className="text-center">
                      <button type="submit" className="btn contactus-btn px-5">
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;

// import React from "react";
// import "./Contactus.css";
// import Header from "../Header/Header";
// import Footer from "../Footer/Footer";

// function ContactUs() {
//   return (
//     <>
//       <Header />
//       <div>
//         <section className="contactus-main"></section>

//         <section className="contactus-section py-5">
//           <div className="container">
//             <div className="row justify-content-center">
//               <div className="col-md-8">
//                 <div className="card  contact-us shadow p-4">
//                   <h2 className="text-center  mb-4 ">Contact Us</h2>
//                   <form>
//                     <div className="mb-3">
//                       <label htmlFor="name" className="form-label fw-semibold">
//                         Name
//                       </label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         id="name"
//                         placeholder="Enter your name"
//                       />
//                     </div>
//                     <div className="mb-3">
//                       <label htmlFor="email" className="form-label fw-semibold">
//                         Email
//                       </label>
//                       <input
//                         type="email"
//                         className="form-control"
//                         id="email"
//                         placeholder="Enter your email"
//                       />
//                     </div>
//                     <div className="mb-3">
//                       <label
//                         htmlFor="subject"
//                         className="form-label fw-semibold"
//                       >
//                         Subject
//                       </label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         id="subject"
//                         placeholder="Enter the subject"
//                       />
//                     </div>
//                     <div className="mb-3">
//                       <label
//                         htmlFor="message"
//                         className="form-label fw-semibold"
//                       >
//                         Message
//                       </label>
//                       <textarea
//                         className="form-control"
//                         id="message"
//                         rows="5"
//                         placeholder="Enter your message"
//                       ></textarea>
//                     </div>
//                     <div className="text-center">
//                       <button type="submit" className="btn contactus-btn  px-5">
//                         Send Message
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default ContactUs;
