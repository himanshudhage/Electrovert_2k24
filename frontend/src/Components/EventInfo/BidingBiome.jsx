import React from "react";
import "./BidingBiome.css"; // Assuming this file is located in the same directory

const BidingBiome = () => {
  return (
    <div>
      {/* Ticket Pricing Area Start */}
      <section id="pricing" className="section-padding">
        <div className="container">
          <div className="r">
            <div className="col-12">
              <div className="section-title-header text-center">
                <div className="contents" style={{ padding: "2%" }}>
                  <h1>Biding Biome</h1>
                  <p>
                    <i>
                      <q>Seas of skills and oceans of entertainment</q>
                    </i>
                  </p>
                  <h3>IPL Auction Event</h3>
                  <p className="wow fadeInDown" data-wow-delay="0.2s">
                    BlueHorizon Bids is an IPL Auction event. For checking the
                    IPL knowledge, auctioning skills and communication skills of
                    the participants. The final round will replicate the main
                    Auction event in the same tense environment. The prior
                    rounds are designed to check and emboss new knowledge
                    related to IPL rule, players and overall cricket sport
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
                Fees - <i className="fa fa-inr" aria-hidden="true"></i> 120 +
                120*
                <br />
                <p>*Additional fees to be paid after the shortlisting</p>
              </div>
            </div>
            <div className="hi">
              <div className="feature" data-wow-delay="0.2s">
                Team Size
                <br />1-3 Participants per Team
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
          <div className="row">
            <div className="col-lg-5 col-md-5 col-xa-12 mb-3">
              <div
                className="price-block-wrapper wow fadeInLeft"
                data-wow-delay="0.2s"
              >
                <div className="price">
                  <h2>Round 1</h2>
                </div>
                <div className="pricing-list">
                  <span className="text">MCQ type quiz</span>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-xa-12 mb-3">
              <div
                className="price-block-wrapper active wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="price">
                  <h2>Round 2</h2>
                </div>
                <div className="pricing-list">
                  <span className="text">Surprise round</span>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-xa-12 mb-3">
              <div
                className="price-block-wrapper wow fadeInLeft"
                data-wow-delay="0.2s"
              >
                <div className="price">
                  <h2>Round 3</h2>
                </div>
                <div className="pricing-list">
                  <span className="text">Bidding round</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    <div className="c">
        <div className="b">
          <a href="https://forms.gle/kfZGHAa8d997C6pbA" className="bt">
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
                  <span>Event Coordinator: Himanshu Patil</span>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-6 col-xs-12">
              <ul>
                <li>
                  <i className="fa fa-phone" aria-hidden="true"></i>
                </li>
                <li>
                  <span>9028936811</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Contact text End */}
    </div>
  );
};

export default BidingBiome;
