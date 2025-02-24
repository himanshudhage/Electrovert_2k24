import React from "react";
import "./Junglecruise.css"; // Import the CSS file for styling

const WildVentures = () => {
  return (
    <>
      {/* Ticket Pricing Area Start */}
      <section id="pricing" className="section-padding">
        <div className="container">
          <div className="r">
            <div className="col-12">
              <div className="section-title-header text-center">
                <div className="contents text-center" style={{ padding: "2%" }}>
                  <h1>Wild Ventures</h1>
                  <p>
                    <i>
                      <q>Turning Ideas into Innovation Dreams into Dollars</q>
                    </i>
                  </p>
                  <h3>Business & Management Event</h3>
                  <p className="wow fadeInDown" data-wow-delay="0.2s">
                  Round 1: Predator's Path: Overcoming Business Hurdles (Online submission) In this round, participants will be presented with a detailed problem statement based on a real company/virtual company facing business challenges. The problem will be aligned with current market trends, requiring participants to devise innovative solutions. <br/>Round 2: Market Maneuvers (Offline) Each team will receive a portfolio with assets, liabilities, and a fixed monthly income. Based on real-world events, teams must make strategic investment decisions. Teams with the strongest portfolios advance to the final round. <br/>Round 3: Surprise Round Details of this round will be revealed at the event. Expect the unexpected!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="hi">
              <div className="feature" data-wow-delay="0.2s">
                No. of Rounds<br />3
              </div>
            </div>
            <div className="hi">
              <div className="feature" data-wow-delay="0.2s">
                Fees - <i className="fa fa-inr" aria-hidden="true"></i> 100 +
                100*
                <br />
                <p>*Additional fees to be paid after the shortlisting</p>
              </div>
            </div>
            <div className="hi">
              <div className="feature" data-wow-delay="0.2s">
                Team Size<br />2 participants per team
              </div>
            </div>
            <div className="hi">
              <div className="feature" data-wow-delay="0.2s">
                Mode of event<br />Offline
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-5 col-xa-12 mb-3">
              <div className="price-block-wrapper wow fadeInLeft" data-wow-delay="0.2s">
                <div className="price">
                  <h2>Round 1</h2>
                </div>
                <div className="pricing-list">
                  
                      <span className="text">
                        The round is basically a case study preparation. To
                        showcase the participants skills in documentation and
                        problem statement analysis.
                      </span>
                    

                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-5 col-xa-12 mb-3">
              <div className="price-block-wrapper active wow fadeInUp" data-wow-delay="0.3s">
                <div className="price">
                  <h2>Round 2</h2>
                </div>
                <div className="pricing-list">
                  
                      <span className="text">It will be surprise round</span>
                    

                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-5 col-xa-12 mb-3">
              <div className="price-block-wrapper wow fadeInLeft" data-wow-delay="0.2s">
                <div className="price">
                  <h2>Round 3</h2>
                </div>
                <div className="pricing-list">
                  
                      <span className="text">
                        It would be the final round where the participants must
                        come up with a short video advertisement and pitch their
                        products/ideas in front of an Expert panel of judges.
                      </span>
                    

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="c">
        <div className="b">
          <a href="https://forms.gle/A9rdt1tEWirPqPBL9" className="bt">
            Register now
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
                  <span>Event Coordinator: Dhanashri Mali</span>
                </li>
                <li>
                  <span>9373898633</span>
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
    </>
  );
};

export default WildVentures;
