import React from 'react';
import './CircuitSafari.css'; // Import the CSS file for styling

const CircuitSafari = () => {
  return (
    <div className="fade-in">
      {/* Ticket Pricing Area Start */}
      <section id="pricing" className="section-padding">
        <div className="container">
          <div className="r">
            <div className="col-12">
              <div className="section-title-header text-center">
                <div className="contents text-center" style={{ padding: '2%' }}>
                  <h1>CircuitSafari</h1>
                  <p><i><q>Unleashing Innovation: Navigating Tech Challenges</q></i></p>
                  <h3>Technical Challenge Event</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="hi">
              <div className="feature" data-wow-delay="0.2s">
                No. of Rounds<br />2
              </div>
            </div>
            <div className="hi">
              <div className="feature" data-wow-delay="0.2s">
                Fees - <i className="fa fa-inr" aria-hidden="true"></i> 80 + 150*
                <br />
                <p>*Additional fees to be paid after the shortlisting</p>
              </div>
            </div>
            <div className="hi">
              <div className="feature" data-wow-delay="0.2s">
                Team Size<br />1-2 participants in a team
              </div>
            </div>
            <div className="hi">
              <div className="feature" data-wow-delay="0.2s">
                Mode of event<br />Hybrid
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-5 col-xa-12 mb-3">
              <div className="price-block-wrapper wow fadeInLeft" data-wow-delay="0.2s">
                <div className="price">
                  <h2>Round 1</h2>
                </div>
                <div className="pricing-list">
                  <span className="text">It would be an MCQ round in which basic questions related to some general electronics,
                  circuit building and embedded system designs will be asked.</span>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-xa-12 mb-3">
              <div className="price-block-wrapper active wow fadeInUp" data-wow-delay="0.3s">
                <div className="price">
                  <h2>Round 2</h2>
                </div>
                <div className="pricing-list">
                  <span className="text">Participants will be provided with a problem statement. They have to build a hardware circuit
and Software simulation on the given problem statement. For Novice track basic Circuit
Building and for Expert track, Embedded System domain would be considered.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="c">
        <div className="b">
          <a href="https://forms.gle/HAQXMs989s9n5WCn6" className="bt">
            Register as Novice
          </a>
        </div>
        <div className="b">
          <a href="https://forms.gle/FBo7UuyrJjzsbpnU9" className="bt">
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
                <li><span>Event Coordinator: Nikhil Kumar</span></li>
                <li><span>8082622691</span></li>
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
    </div>
  );
};

export default CircuitSafari;
