import React from "react";
import "./Kanyadaan.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Kanyadaan = () => {
  return (
    <>
      <Header />
      <div className="kanyadaan-page">
        {/* kanyadaan Section */}
        <section className="founder-section">
          <div className="founder-overlay"></div>
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8 founder-main-content">
                <h1 className="founder-title"> Srijan Kanyadaan Abhiyan</h1>
                <div className="founder-subtitle">
                  <p> A Sacred Social Commitment</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="content-section py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                {/* Introduction Card */}
                <div className="content-card mb-5">
                  <div className="card-body p-5">
                    <div className="row align-items-center">
                      <div className="col-lg-8">
                        <p className="lead-text mb-4">
                          Srijan Kutumbakam Seva Sansthan has become the voice
                          of thousands of daughters who face helplessness during
                          the most significant event of their lives – marriage –
                          due to financial hardships.
                        </p>
                        <p className="content-text">
                          Inspired by the noble vision of the organization's
                          founder,
                          <strong> Respected Shri Sombir Kaliramna Ji</strong>,
                          the Sansthan launched the "Srijan Kanyadaan Abhiyan"
                          with a heartfelt promise –
                          <em>
                            no daughter should be deprived of her dream wedding
                            due to poverty.
                          </em>
                        </p>
                      </div>
                      <div className="col-lg-4 text-center"></div>
                    </div>
                  </div>
                </div>

                {/* Impact Section */}
                <div className="impact-section p-5 mb-5">
                  <div className="row">
                    <div className="col-lg-6 mb-4">
                      <div className="impact-card h-100">
                        <div className="card-body p-4">
                          <h4 className="impact-title mb-3">
                            Bringing Hope & Dignity
                          </h4>
                          <p className="impact-text">
                            Today, this initiative has brought hope and dignity
                            into the lives of thousands of underprivileged
                            daughters. The Srijan family not only provides
                            financial assistance for marriages but also supports
                            with clothes, utensils, jewelry, ration, and other
                            essentials as per the family's needs.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                      <div className="impact-card h-100">
                        <div className="card-body p-4">
                          <h4 className="impact-title mb-3">
                            Community Support
                          </h4>
                          <p className="impact-text">
                            This effort is not just about material help – it
                            sends out a powerful message of equality, dignity,
                            and compassion in society. When a daughter becomes
                            part of the Srijan Kanyadaan Abhiyan, she feels the
                            presence of a whole community standing beside her,
                            supporting her every step.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mission Statement */}
                <div className="mission-section p-3 mb-5">
                  <div className="mission-card">
                    <div className="card-body p-5 text-center">
                      <h3 className="mission-title mb-4">Our Mission</h3>
                      <p className="mission-text mb-4">
                        This campaign evokes emotional connection because it's
                        not just about contributing to a marriage – it's about{" "}
                        <strong>shaping a future</strong>,
                        <strong>restoring confidence</strong>, and{" "}
                        <strong>upholding cultural values</strong>. True
                        kanyadaanes are those who transform someone's tears into
                        smiles – and that is exactly what Srijan Kutumbakam Seva
                        Sansthan has been doing with commitment and compassion.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quotes Section */}
                <div className="quotes-section">
                  <div className="row">
                    <div className="col-lg-6 mb-4">
                      <div className="quote-card">
                        <div className="quote-content">
                          <div className="quote-icon">"</div>
                          <p className="quote-text">
                            In every daughter's wedding, the Srijan family
                            stands together.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                      <div className="quote-card">
                        <div className="quote-content">
                          <div className="quote-icon">"</div>
                          <p className="quote-text">
                            Where there are tears of helplessness, Srijan
                            becomes the support.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Kanyadaan;
