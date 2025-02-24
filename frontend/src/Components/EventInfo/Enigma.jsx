import React from 'react';
import './Enigma.css'; // Assuming you have Mock.css for styling

const Enigma = () => {
    return (
        <>
            {/* Ticket Pricing Area Start */}
            <section id="pricing" className="section-padding">
                <div className="container">
                    <div className="r">
                        <div className="col-12">
                            <div className="section-title-header text-center">
                                <div className="contents text-center" style={{ padding: "2%" }}>
                                    {/*<p className="banner-info">15, Oct 2020 - Maria Hall, NY, United states</p>*/}
                                    <h1>Enigma</h1>
                                    <p><i><q>Unleash the illusion of mirage</q></i></p>
                                    <h3>Mystery Event</h3>
                                    <p className="wow fadeInDown" data-wow-delay="0.2s">
                                        Mystery event, the highlight of ELECTROVERT, as every year is again ready
                                        with a mystery to solve. Enigma is the sub-event of ELESA, which has the
                                        highest number of participants every year. This year as well, a quiet
                                        interesting mystery event is planned with many clues and hints, many
                                        quests and many solutions. This event focuses on developing the thinking
                                        skills of the participants and also raising an interest amongst them for
                                        solving mysteries. An attentive and inquisitive brain and a smart and right
                                        thinker would be leading throughout the entire game.
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
                                Fees - <i className="fa fa-inr" aria-hidden="true"></i> 80 + 100*<br />
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
                                
                                    <span className="text">Answer the questions with cryptic clues to your aid</span>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-5 col-xa-12 mb-3">
                            <div className="price-block-wrapper active wow fadeInUp" data-wow-delay="0.3s">
                                <div className="price">
                                    <h2>Round 2</h2>
                                </div>
                                <div className="pricing-list">
                                
                                    <span className="text">Analyse multiple paths and navigate wisely</span>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-5 col-xa-12 mb-3">
                            <div className="price-block-wrapper wow fadeInLeft" data-wow-delay="0.2s">
                                <div className="price">
                                    <h2>Round 3</h2>
                                </div>
                                <div className="pricing-list">
                                
                                    <span className="text">Surprise Round</span>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="c">
        <div className="b">
          <a href="https://forms.gle/88bq1k4bnsCNERL37" className="bt">
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
                                <li><span>Event Coordinator: Viraj Gotmare</span></li>
                                <li><span>7821846594</span></li>
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

export default Enigma;
