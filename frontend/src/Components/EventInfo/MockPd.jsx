import React from "react";
import "./Junglecruise.css"; // Assuming you have your styles defined here

const MockPd = () => {
  return (
    <>
      {/* Ticket Pricing Area Start */}
      <section id="pricing" className="section-padding">
        <div className="container">
          <div className="r">
            <div className="col-12">
              <div className="section-title-header text-center">
                <div className="contents text-center" style={{ padding: "2%" }}>
                  <h1 style={{ fontSize: "2.5rem" }}>Mock Placement Drive</h1>
                  <p>
                    <i>
                      <q>Get navigated by Mock Interview.</q>
                    </i>
                  </p>
                  <h3>Placement Event</h3>
                  <p className="wow fadeInDown" data-wow-delay="0.2s">
                  A special event designed especially for the undergraduates and graduates who wish to
improve their interviewing skills and get placed in top MNCs. This would be a completely
corporate event. Event consists of 3 rounds.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="hi">
              <div className="feature" data-wow-delay="0.2s">
                No. of Rounds
                <br />3
              </div>
            </div>
            <div className="hi">
              <div className="feature" data-wow-delay="0.2s">
                Fees - <i className="fa fa-inr" aria-hidden="true"></i> 100*
                <br />
                {/* <p>*Additional fees to be paid after the shortlisting</p> */}
              </div>
            </div>
            <div className="hi">
              <div className="feature" data-wow-delay="0.2s">
                Team Size
                <br />1 participant
              </div>
            </div>
            <div className="hi">
              <div className="feature" data-wow-delay="0.2s">
                Mode of event
                <br />
                Offline
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-5 col-xa-12 mb-3">
              <div
                className="price-block-wrapper wow fadeInLeft"
                data-wow-delay="0.2s"
              >
                <div className="price">
                  <h2>Round 1</h2>
                </div>
                <div className="pricing-list">
                  <span className="text">Aptitude test.</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-5 col-xa-12 mb-3">
              <div
                className="price-block-wrapper active wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="price">
                  <h2>Round 2 </h2>
                </div>
                <div className="pricing-list">
                  <span className="text">Here we are organizing a group discussion for the participants so that their communication
                  skills will be enhanced and they will learn to debate. Participants must come to a conclusion
                  after the GD.</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-5 col-xa-12 mb-3">
              <div
                className="price-block-wrapper wow fadeInLeft"
                data-wow-delay="0.2s"
              >
                <div className="price">
                  <h2>
                    Round 3
                  </h2>
                </div>
                <div className="pricing-list">
                  <span className="text">This would be the Interview round for the shortlisted candidates. It will have Technical, HR
                  and Profit round.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="c">
        <div className="b">
          <a href="https://forms.gle/Fk98fR3Y5AMUu4q58" className="bt">
            Register as Novice
          </a>
        </div>
        <div className="b">
          <a href="https://forms.gle/UkKmDsHb2PNRcTDb7" className="bt">
            Register as Expert
          </a>
        </div>
        </div>
      </section>
      {/* Ticket Pricing Area End */}

      {/* Contact text Start */}
      <section id="contact-text">
        <div className="container">
          <div className="row contact-wrapper">
            <div className="col-lg-6 col-md-6 col-xs-12">
              <ul>
                <li>
                  <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                </li>
                <li>
                  <span>Event Coordinator: Sania Deshmukh</span>
                </li>
                <li>
                  <span>899693957</span>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-6 col-xs-12">
              <ul>
                <li>
                  <i className="fa fa-phone" aria-hidden="true"></i>
                </li>
              
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Contact text End */}
    </>
  );
};

export default MockPd;
