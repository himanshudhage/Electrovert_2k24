import React from 'react';
import './Junglecruise.css'; // Assuming you have your styles defined here

const QuestRush = () => {
    return (
        <>
            {/* Ticket Pricing Area Start */}
            <section id="pricing" className="section-padding">
                <div className="container">
                    <div className="r">
                        <div className="col-12">
                            <div className="section-title-header text-center">
                                <div className="contents text-center" style={{ padding: '2%' }}>
                                    <h1 style={{ fontSize: '2.5rem' }}>Quest Rush</h1>
                                    <p><i><q>
                                    Diving Deep into the intelligence</q></i></p>
                                    <h3>Quiz Event(Non-Technical)</h3>
                                    <p className="wow fadeInDown" data-wow-delay="0.2s">
                                    Event to test general knowledge and analytical skills of students. Questions would be based
                                    on some past happenings, current affairs and basic general knowledge.
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
                                Fees - <i className="fa fa-inr" aria-hidden="true"></i> 60 + 80*
                                <br />
                                <p>*Additional fees to be paid after the shortlisting</p>
                            </div>
                        </div>
                        <div className="hi">
                            <div className="feature" data-wow-delay="0.2s">
                                Team Size<br />1 participant
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
                                    <h2>Round 1 <br/>Actrivia</h2>
                                </div>
                                <div className="pricing-list">
                                
                                    <span className="text">This round will test your General Knowledge and Basic aptitude</span>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-5 col-xa-12 mb-3">
                            <div className="price-block-wrapper active wow fadeInUp" data-wow-delay="0.3s">
                                <div className="price">
                                    <h2>Round 2 <br/>Quizzle</h2>
                                </div>
                                <div className="pricing-list">
                                
                                    <span className="text">This round checks your analytical and problem solving skills.</span>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-5 col-xa-12 mb-3">
                            <div className="price-block-wrapper wow fadeInLeft" data-wow-delay="0.2s">
                                <div className="price">
                                    <h2>Round 3 <br/> Fact and Furious</h2>
                                </div>
                                <div className="pricing-list">
                                
                                    <span className="text">It will be a Surprise Round</span>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="c">
        <div className="b">
          <a href="https://forms.gle/1unjeZtHqJDPFTTp8" className="bt">
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
                                <li><span>Event Coordinator: Akshat Gupta</span></li>
                                <li><span>6397906947</span></li>
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
}

export default QuestRush;
