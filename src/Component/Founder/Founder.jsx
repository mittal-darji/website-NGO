import React from "react";
import "./Founder.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Founder = () => {
  return (
    <>
      <Header />
      <div className="founder-page">
        <section className="founder-section">
          <div className="founder-overlay"></div>
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8 founder-main-content">
                <h1 className="founder-title">Founder's Message</h1>
                <div className="founder-subtitle">
                  <p>Mrs. Santosh Devi & Mr. Sombir Kaliramna</p>
                  <p className="founder-founder-organization-name  ">
                    (Founders – Srijan Kutumbakam Seva Sansthan, Rohtak)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="quote-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="quote-card">
                  <div className="quote-icon">
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <blockquote className="quote-text">
                    "Service to society is the truest form of religion, and
                    every struggle lays the foundation for a greater purpose..."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="content-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="content-card">
                  <div className="story-section">
                    <h2 className="section-title">A Story of Dedication</h2>
                    <p className="story-text">
                      Whenever the sacred occasion of a girl's wedding
                      approached and the ritual of Kanyadaan (offering of the
                      daughter in marriage) arrived — one person always came
                      forward quietly, yet with unwavering commitment.
                    </p>
                    <p className="story-text">
                      Mr. Sombir Kaliramna, whose soul has burned with the flame
                      of service since childhood, has helped countless daughters
                      begin their married lives with dignity. He ensured that no
                      Kanyadaan ever went incomplete due to lack of support or
                      blessings.
                    </p>
                    <p className="story-text">
                      His life has been a story of struggles and resilience —
                      from financial hardships to social obstacles. Yet, he
                      chose to face each challenge with strength, humility, and
                      deep purpose.
                    </p>
                  </div>

                  <div className="mission-intro">
                    <h2 className="section-title">
                      The Vision Behind the Mission
                    </h2>
                    <p className="story-text">
                      He is among those rare souls who truly felt the pain of
                      society, and instead of ignoring it, stood up to bring
                      change — with the help of the very people he served.
                    </p>
                    <p className="story-text">
                      Be it the rising drug abuse among youth, unemployment,
                      lack of education for girls, or environmental degradation
                      — Mr. Kaliramna stepped forward with sensitivity, resolve,
                      and unwavering dedication.
                    </p>
                    <p className="story-text">
                      Together with his life partner, Mrs. Santosh Devi, he laid
                      the foundation of Srijan Kutumbakam Seva Sansthan — a
                      platform where service, values, and unity come together to
                      build a better society.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="impact-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="impact-card">
                  <h2 className="section-title">Their Impact</h2>
                  <p className="impact-text">
                    Even today, when people mention their names, eyes reflect
                    respect, faces light up with smiles, and hearts express
                    gratitude.
                  </p>
                  <p className="impact-text">
                    Their simplicity, vision, and compassionate leadership have
                    touched every life they've encountered.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final Quote */}
        <section className="final-quote-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="final-quote-card">
                  <h3 className="quote-author">Mr. Kaliramna believes:</h3>
                  <blockquote className="final-quote">
                    "If we come together to recognize the problems in our
                    society and work towards collective solutions — no one will
                    go hungry, no youth will be unemployed, and no soul will
                    feel alone. That is the essence of true service."
                  </blockquote>
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

export default Founder;
