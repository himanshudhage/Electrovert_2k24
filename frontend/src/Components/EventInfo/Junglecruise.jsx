import React from 'react';
import './Junglecruise.css'; // Assuming you have your styles defined here

const JungleCruise = () => {
    return (
        <>
            {/* Ticket Pricing Area Start */}
            <section id="pricing" className="section-padding">
                <div className="container">
                    <div className="r">
                        <div className="col-12">
                            <div className="section-title-header text-center">
                                <div className="contents text-center" style={{ padding: '2%' }}>
                                    <h1 style={{ fontSize: '2.5rem' }}>Jungle Cruise</h1>
                                    <p><i><q>Adventure beneath the waves</q></i></p>
                                    <h3>FE Special Event</h3>
                                    <p className="wow fadeInDown" data-wow-delay="0.2s">
                                        A special event designed especially for the First-year undergraduates. This would be a completely non-technical event. Basic tasks involving the interaction of the participants amongst themselves, learning speaking in front of the judges, being able to put their points forward and testing their presence of mind would be the main focus of the event.
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
                                    <h2>Round 1 - AD Astra</h2>
                                </div>
                                <div className="pricing-list">
                                
                                    <span className="text"> Quiz. There will be paper of 30 marks with different types of questions like maths, physics, GK, intelligence, picture puzzles, etc</span>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-5 col-xa-12 mb-3">
                            <div className="price-block-wrapper active wow fadeInUp" data-wow-delay="0.3s">
                                <div className="price">
                                    <h2>Round 2 - Into the Space</h2>
                                </div>
                                <div className="pricing-list">
                                
                                    <span className="text">Story-Create-Act. An incomplete story will be given, and groups will be made. Participants take some time and create further story. Then they present there creation via drama or some sort of action.</span>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-5 col-xa-12 mb-3">
                            <div className="price-block-wrapper wow fadeInLeft" data-wow-delay="0.2s">
                                <div className="price">
                                    <h2>Round 3 - Supernova</h2>
                                </div>
                                <div className="pricing-list">
                                
                                    <span className="text">It will be a surprise round.</span>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="c">
        <div className="b">
          <a href="https://forms.gle/JvxEd3Kx1PtDm8gC9" className="bt">
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
                                <li><span>Event Coordinator: Aniket Tarate</span></li>
                                <li><span>9421286386</span></li>
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

export default JungleCruise;
