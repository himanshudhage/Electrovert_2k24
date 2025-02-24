import React from 'react';
import './Codehunt.css'; // Make sure to create and include this CSS file

const Codehunt = () => {
  return (
    <div>
      {/* Ticket Pricing Area */}
      <section id="pricing" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-header text-center">
                <div className="contents text-center" style={{ padding: '2%' }}>
                  <h1>Code Hunt</h1>
                  <p><i><q>Where algorithms meet the aquatic mysteries</q></i></p>
                  <h3>Coding Event</h3>
                  <p className="wow fadeInDown" data-wow-delay="0.2s">
                  It will consist 1 round with 2 tracks Novice and Expert, focused on developing and rather also
testing the programming skills of the participants. Some basic questions checking your overall
programming knowledge and competitive programming on online coding platforms would be
involved in the two rounds overall. There will be a MCQ test based on basics of computer
fundamentals and algorithm. Also, there will be competitive coding competition on online
platforms where the participants need to submit their code.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="hi ">
              <div className="feature" data-wow-delay="0.2s">No. of Rounds<br />1</div>
            </div>
            <div className="hi">
              <div className="feature" data-wow-delay="0.2s">Fees<i className="fa fa-inr" aria-hidden="true"></i><br/>100</div>
            </div>
            <div className="hi">
              <div className="feature" data-wow-delay="0.2s">Team Size<br />1 Participant</div>
            </div>
            <div className="hi">
              <div className="feature" data-wow-delay="0.2s">Mode of event<br />Online</div>
            </div>
          </div>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-5 col-xa-12 mb-3">
              <div className="price-block-wrapper wow fadeInLeft" data-wow-delay="0.2s">
                <div className="price">
                  <h2>Round 1  Coding + MCQ</h2>
                </div>
                <div className="pricing-list">
            
                    <span className="text">There will be competitive coding competition on online platforms where the participants need to submit their code. Also there will be MCQs based on basics of computer fundamentals and algorithm</span>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="c">
        <div className="b">
          <a href="https://forms.gle/UQBTXTZJ9n5Rhgfu5" className="bt">
            Register as Novice
          </a>
        </div>
        <div className="b">
          <a href="https://forms.gle/33w7d1b6pX4vLq1C8" className="bt">
            Register as Expert
          </a>
        </div>
        </div>
      </section>

      {/* Contact text */}
      <section id="contact-text">
        <div className="container">
          <div className="row contact-wrapper">
            <div className="col-lg-6 col-md-6 col-xs-12">
              <ul>
                <li>
                  <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                </li>
                <li><span>Event Coordinator: Himanshu Dhage</span></li>
                <li><span>9730573550</span></li>
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
    </div>
  );
};

export default Codehunt;
