import React from 'react';
import './EcoSymposium'; // Assuming you have your styles defined here

const EcoSymposium = () => {
    return (
        <>
            {/* Ticket Pricing Area Start */}
            <section id="pricing" className="section-padding">
                <div className="container">
                    <div className="r">
                        <div className="col-12">
                            <div className="section-title-header text-center">
                                <div className="contents text-center" style={{ padding: '2%' }}>
                                    <h1>EcoSymposium</h1>
                                    <p><i><q>Unraveling the tapestry of ideas!</q></i></p>
                                    <h3>Presentation Event</h3>
                                    <p className="wow fadeInDown" data-wow-delay="0.2s">
                                        EcoSymposium is a presentation event to assess the presentation skills, story-telling abilities, and communication skills of the participants.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="hi">
                            <div className="feature"data-wow-delay="0.2s">
                                No. of Rounds<br />2
                            </div>
                        </div>
                        <div className="hi">
                            <div className="feature" data-wow-delay="0.2s">
                                Fees - ₹80 + ₹100*
                                <br />
                                <p>*Additional fees to be paid after the shortlisting</p>
                            </div>
                        </div>
                        <div className="hi">
                            <div className="feature" data-wow-delay="0.2s">
                                Team Size<br />2-3 Participants per Team
                            </div>
                        </div>
                        <div className="hi">
                            <div className="feature" data-wow-delay="0.2s">
                                Mode of event<br />Offline
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-5 col-md-5 col-xa-12 mb-3">
                            <div className="price-block-wrapper wow fadeInLeft" data-wow-delay="0.2s">
                                <div className="price">
                                    <h2>Round 1<br/></h2>
                                </div>
                                <div className="pricing-list">
                                    <span className="text">Participants have to submit their reports based on the domains provided to them before the
event. Also, the reports will be taken at least 3 days prior the actual day of the event in the
specified format. Shortlisted teams will be invited to the 2nd round.</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5 col-xa-12 mb-3">
                            <div className="price-block-wrapper active wow fadeInUp" data-wow-delay="0.3s">
                                <div className="price">
                                    <h2>Round 2 <br/> </h2>
                                </div>
                                <div className="pricing-list">
                                    <span className="text">In this round you need to present your project in front of the Expert Panel of Judges.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="c">
        <div className="b">
          <a href="https://forms.gle/wMLYvxDBuHgTvqkNA" className="bt">
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
                                <li><span>Event Coordinator: Gauri Sardesai</span></li>
                                {/* <br/> */}
                                <li><span>92552086005</span></li>
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

export default EcoSymposium;
