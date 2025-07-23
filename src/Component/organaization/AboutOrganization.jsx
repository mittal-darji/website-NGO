import React from "react";
import "./AboutOrganization.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import pic from "../../assets/pic.jpg";
import pic1 from "../../assets/pic1.jpg";
import pic2 from "../../assets/pic2.jpg";
import pic3 from "../../assets/pic3.jpg";

const AboutOrganization = () => {
  return (
    <>
      <Header />
      <div className="about-organization-page">
        {/* President Section */}

        <section className="founder-section">
          <div className="founder-overlay"></div>
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8 founder-main-content">
                <h1 className="founder-title">Our President</h1>
                <div className="founder-subtitle">
                  <h3>Mr. Kuljeet Kaliramna</h3>
                  <p className="founder-founder-organization-name  ">
                    (President – Srijan Kutumbakam Seva Sansthan)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* President Quote */}
        <section className="quote-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="quote-card">
                  <div className="quote-icon">
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <blockquote className="quote-text">
                    "A society truly progresses when we start living not just
                    for ourselves, but for others as well."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* President Profile */}
        <section className="profile-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="profile-card">
                  <div className="row align-items-center">
                    <div className="col-lg-4 text-center mb-4 mb-lg-0">
                      <div className="profile-image">
                        <img
                          src={pic1}
                          alt="Mr. Kuljeet Kaliramna"
                          className="img-fluid rounded-circle  mt-3"
                        />
                      </div>
                      <h3 className="profile-name">Mr. Kuljeet Kaliramna</h3>
                      <p className="profile-title">President</p>
                    </div>
                    <div className="col-lg-8">
                      <div className="profile-content">
                        <h2 className="section-title">Visionary Leader</h2>
                        <p className="profile-text">
                          Mr. Kuljeet Kaliramna, the honorable president of
                          Srijan Kutumbakam Seva Sansthan, is a visionary leader
                          deeply committed to the spirit of social service.
                          Simplicity, dedication, and compassion define his
                          personality.
                        </p>
                        <p className="profile-text">
                          He believes that even a small contribution from every
                          individual can create a significant transformation in
                          society. With the guiding philosophy that "Service is
                          Creation," he laid the foundation of this
                          organization.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Key Initiatives Section */}
        <section className="initiatives-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="initiatives-card">
                  <h2 className="initiatives-title">
                    Key Initiatives – Building a Better Society
                  </h2>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="initiative-item">
                        <div className="initiative-icon">
                          <i className="fas fa-tint"></i>
                        </div>
                        <h4>Blood Donation & Health Awareness Camps</h4>
                        <p>
                          The Sansthan regularly organizes Free Blood Group
                          Testing Camps, Blood Donation Drives, and Health
                          Awareness Programs, reaching thousands of people with
                          free health services.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="initiative-item">
                        <div className="initiative-icon">
                          <i className="fas fa-tree"></i>
                        </div>
                        <h4>'Vraksh Dhara' – Environmental Conservation</h4>
                        <p>
                          Through its environmental campaign 'Vraksh Dhara', the
                          organization conducts massive tree plantation drives
                          in schools, villages, and public places.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="initiative-item">
                        <div className="initiative-icon">
                          <i className="fas fa-heart"></i>
                        </div>
                        <h4>Srijan Kutumbakam Gaushala</h4>
                        <p>
                          The Sansthan has initiated the construction of a
                          Gaushala (cow shelter), dedicated to the care and
                          service of abandoned and elderly cows.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="initiative-item">
                        <div className="initiative-icon">
                          <i className="fas fa-utensils"></i>
                        </div>
                        <h4>'Kshudha Mukti' – Eradicating Hunger</h4>
                        <p>
                          Under the banner of 'Kshudha Mukti' (Freedom from
                          Hunger), the Sansthan distributes free meals to the
                          needy at railway stations, bus stands, and urban
                          slums.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="initiative-item">
                        <div className="initiative-icon">
                          <i className="fas fa-stethoscope"></i>
                        </div>
                        <h4>Srijan Kanyadaan Abhiyan </h4>
                        <p>
                          "Srijan Kutumbkam Seva Sansthan has become the voice
                          of thousands of daughters who face helplessness during
                          marriage due to financial hardships. The Sansthan
                          launched the 'Srijan Kanyadaan Abhiyan' with a promise
                          – no daughter should be deprived of her dream wedding
                          due to poverty. This initiative provides financial
                          assistance, clothes, utensils, jewelry, ration, and
                          other essentials, bringing hope and dignity into the
                          lives of underprivileged daughters.",
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="initiative-item">
                        <div className="initiative-icon">
                          <i className="fas fa-recycle"></i>
                        </div>
                        <h4>Plastic-Free Rohtak Campaign</h4>
                        <p>
                          To reduce plastic usage, the Sansthan has launched a
                          Plastic-Free Campaign, involving the distribution of
                          dustbins at shops and promoting jute bags.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* President's Appeal */}
        <section className="appeal-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="appeal-card">
                  <h3 className="appeal-title">
                    President's Appeal to the People
                  </h3>
                  <blockquote className="appeal-quote">
                    "I appeal to all youth, women, and changemakers to come
                    forward and join hands in building a nation where every
                    citizen is educated, healthy, self-reliant, and empowered.
                    The mission of social creation is not a one-man job —
                    together, we can make it a reality."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Organisation Minister Section */}

        <section className="founder-section">
          <div className="founder-overlay"></div>
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8 founder-main-content">
                <h1 className="founder-title">The Organisation Minister</h1>
                <div className="founder-subtitle">
                  <h3>Mr. Deepak Kumar Sihmar</h3>
                  <p className="founder-founder-organization-name  ">
                    (Organisation Minister – Srijan Kutumbakam Seva Sansthan,
                    Rohtak)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Organisation Minister Quote */}
        <section className="quote-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="quote-card">
                  <div className="quote-icon">
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <blockquote className="quote-text">
                    "When youth awaken, change becomes inevitable. A vision
                    backed by action is what makes a true leader."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Organisation Minister Profile */}
        <section className="profile-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="profile-card">
                  <div className="row align-items-center">
                    <div className="col-lg-4 text-center mb-4 mb-lg-0">
                      <div className="profile-image">
                        <img
                          src={pic}
                          alt="Mr. Deepak Kumar Sihmar"
                          className="img-fluid rounded-circle  mt-5"
                        />
                      </div>
                      <h3 className="profile-name">Mr. Deepak Kumar Sihmar</h3>
                      <p className="profile-title">Organisation Minister</p>
                    </div>
                    <div className="col-lg-8">
                      <div className="profile-content">
                        <h2 className="section-title">A True Youth Leader</h2>
                        <p className="profile-text">
                          Mr. Deepak Kumar Sihmar is not just an active leader —
                          he is an inspiration to countless young minds in
                          Rohtak and surrounding regions.
                        </p>
                        <p className="profile-text">
                          His strong presence in society and his dedication to
                          service have earned him deep respect and recognition.
                          Known for his disciplined approach, fearless
                          leadership, and emotional connect with people, he is
                          regarded as an ideal role model by many youth.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Organisation Minister Achievements */}
        <section className="achievements-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="achievements-card">
                  <h2 className="achievements-title">
                    Key Initiatives & Achievements
                  </h2>
                  <p className="achievements-intro">
                    He has played a crucial role in organizing various social
                    welfare programs:
                  </p>
                  <div className="row">
                    <div className="col-md-4 mb-4">
                      <div className="achievement-item">
                        <div className="achievement-icon">
                          <i className="fas fa-tint"></i>
                        </div>
                        <h4>Blood Donation Camps</h4>
                        <p>
                          Successfully organized multiple blood donation camps,
                          saving countless lives in the community.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4 mb-4">
                      <div className="achievement-item">
                        <div className="achievement-icon">
                          <i className="fas fa-utensils"></i>
                        </div>
                        <h4>Food Distribution Drives</h4>
                        <p>
                          Leading food distribution drives for the poor and
                          homeless, ensuring no one goes hungry.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4 mb-4">
                      <div className="achievement-item">
                        <div className="achievement-icon">
                          <i className="fas fa-hands-helping"></i>
                        </div>
                        <h4>Volunteer Mobilization</h4>
                        <p>
                          Mobilizing volunteers for environmental and public
                          welfare programs across the region.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Organisation Minister Philosophy */}
        <section className="philosophy-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="philosophy-card">
                  <h3 className="philosophy-title">His Philosophy</h3>
                  <blockquote className="philosophy-quote">
                    "Youth need not wait for change — they must become the
                    change. If even one young person rises with courage and
                    clarity, a whole community can be uplifted."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Education Minister Section */}

        <section className="founder-section">
          <div className="founder-overlay"></div>
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8 founder-main-content">
                <h1 className="founder-title"> The Education Minister</h1>
                <div className="founder-subtitle">
                  <h3>Mr. Praveen Dhankhar</h3>
                  <p className="founder-founder-organization-name  ">
                    (Education Minister – Srijan Kutumbakam Seva Sansthan,
                    Rohtak)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Education Minister Quote */}
        <section className="quote-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="quote-card">
                  <div className="quote-icon">
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <blockquote className="quote-text">
                    "True education is not just about building careers, but
                    about shaping character and life."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Education Minister Profile */}
        <section className="profile-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="profile-card">
                  <div className="row align-items-center">
                    <div className="col-lg-4 text-center mb-4 mb-lg-0">
                      <div className="profile-image">
                        <img
                          src={pic3}
                          alt="Mr. Praveen Dhankhar"
                          className="img-praveen  "
                        />
                      </div>
                      <h3 className="profile-name">Mr. Praveen Dhankhar</h3>
                      <p className="profile-title">Education Minister</p>
                    </div>
                    <div className="col-lg-8">
                      <div className="profile-content">
                        <h2 className="section-title">Educational Visionary</h2>
                        <p className="profile-text">
                          Praveen Dhankhar is a respected name in the field of
                          education, having guided hundreds of students in
                          securing education visas and immigrating abroad for
                          higher studies.
                        </p>
                        <p className="profile-text">
                          He also runs a well-established educational institute
                          where students receive career counseling, coaching for
                          competitive exams, and skill-based training. With
                          years of experience in the education sector, he
                          strongly believes in innovation, skill development,
                          and purpose-driven mentorship.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Education Minister Vision */}
        <section className="about-vision-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="about-vision-card">
                  <h3 className="about-vision-title">His Vision</h3>
                  <blockquote className="about-vision-quote">
                    "A strong society can only be built when we treat education
                    not just as a means to pass exams, but as a way to improve
                    lives."
                  </blockquote>
                  <div className="message-section">
                    <h4>Message to Society and Youth:</h4>
                    <p>
                      "Don't just teach students — inspire them to think,
                      understand, and achieve."
                    </p>
                    <p>
                      "Every child holds a bright future within — all they need
                      is the right direction, patience, and dedication."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* General Secretary Section */}

        <section className="founder-section">
          <div className="founder-overlay"></div>
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8 founder-main-content">
                <h1 className="founder-title"> The General Secretary</h1>
                <div className="founder-subtitle">
                  <h3>Dr. Sandeep Bhardwaj</h3>
                  <p className="founder-founder-organization-name  ">
                    (General Secretary – Srijan Kutumbakam Seva Sansthan,
                    Rohtak)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* General Secretary Quote */}
        <section className="quote-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="quote-card">
                  <div className="quote-icon">
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <blockquote className="quote-text">
                    "True education is not just about sharing knowledge, but
                    about uplifting society through wisdom and action."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* General Secretary Profile */}
        <section className="profile-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="profile-card">
                  <div className="row align-items-center">
                    <div className="col-lg-4 text-center mb-4 mb-lg-0">
                      <div className="profile-image">
                        <img
                          src={pic2}
                          alt="Dr. Sandeep Bhardwaj"
                          className="img-fluid rounded-circle mt-4"
                        />
                      </div>
                      <h3 className="profile-name">Dr. Sandeep Bhardwaj</h3>
                      <p className="profile-title">General Secretary</p>
                    </div>
                    <div className="col-lg-8">
                      <div className="profile-content">
                        <h2 className="section-title">
                          Dedicated Educationist
                        </h2>
                        <p className="profile-text">
                          Dr. Sandeep Bhardwaj is a dedicated educationist,
                          youth mentor, and social reformer, who has organized
                          numerous seminars and workshops across schools,
                          colleges, and universities in Northern India.
                        </p>
                        <p className="profile-text">
                          He has been actively involved in bringing innovation
                          in education, implementing the New Education Policy
                          (NEP), and introducing creative teaching methodologies
                          in several reputed educational institutions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* General Secretary Message */}
        <section className="message-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="message-card">
                  <h3 className="message-title">
                    Dr. Sandeep Bhardwaj to Society and Students
                  </h3>
                  <div className="message-content">
                    <blockquote className="message-quote">
                      "If you want to be truly successful in life, don't just
                      focus on academics — develop your thinking, your values,
                      and your actions. Education may get you a job, but only
                      character earns you respect and lasting recognition."
                    </blockquote>
                    <blockquote className="message-quote">
                      "To change society, you don't need a powerful position —
                      you just need a strong will and a pure intention. The
                      beginning must be made by you, and so will the
                      transformation."
                    </blockquote>
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
                  <h2 className="section-title">Continuing Impact</h2>
                  <p className="impact-text">
                    Under the dynamic leadership of our team, Srijan Kutumbakam
                    Seva Sansthan continues to expand its reach, connect with
                    students, inspire volunteers, and build a force of youth
                    committed to service and self-respect.
                  </p>
                  <p className="impact-text">
                    Our leaders are living examples of dedication combined with
                    compassion. Their presence strengthens the backbone of the
                    Sansthan and keeps the spirit of collective service alive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* cards section */}
        <section className="cards-section">
          <div className="container">
            <h2 className="cards-title">Our Achievements</h2>
            <div className="row">
              <div className="col-md-3 mb-4">
                <div className="card">
                  <img src={pic} className="card-img-top" alt="Achievement 1" />
                  <div className="card-body">
                    <h5 className="card-title">Organisation Minister</h5>
                    <p className="card-text">
                      Mr. Deepak Kumar Sihmar (Organisation Minister – Srijan
                      Kutumbakam Seva Sansthan, Rohtak)
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-4">
                <div className="card ">
                  <img
                    src={pic1}
                    className="card-img-top"
                    alt="Achievement 2"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Mr. Kuljeet Kaliramna</h5>
                    <p className="card-text">
                      (President – Srijan Kutumbakam Seva Sansthan)
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-4">
                <div className="card">
                  <img
                    src={pic2}
                    className="card-img-top"
                    alt="Achievement 3"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Dr. Sandeep Bhardwaj</h5>
                    <p className="card-text">
                      (General Secretary – Srijan Kutumbakam Seva Sansthan)
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-4">
                <div className="card">
                  <img
                    src={pic3}
                    className="card-img-top"
                    alt="Achievement 4"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Praveen Dhankhar</h5>
                    <p className="card-text">
                      (Education Minister – Srijan Kutumbakam Seva Sansthan)
                    </p>
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

export default AboutOrganization;
