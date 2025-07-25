import React from "react";
import "./Contactus.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function ContactUs() {
  return (
    <>
      <Header />
      <div>
        <section className="contactus-main"></section>

        <section className="contactus-section py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="card  contact-us shadow p-4">
                  <h2 className="text-center  mb-4 ">Contact Us</h2>
                  <form>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label fw-semibold">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
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
                        rows="5"
                        placeholder="Enter your message"
                      ></textarea>
                    </div>
                    <div className="text-center">
                      <button type="submit" className="btn contactus-btn  px-5">
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
