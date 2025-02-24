import React from 'react';
import './Junglecruise.css'; // Assuming you have your styles defined here

const PredatorsBattle = () => {
    return (
        <>
            {/* Ticket Pricing Area Start */}
            <section id="pricing" className="section-padding">
                <div className="container">
                    <div className="r">
                        <div className="col-12">
                            <div className="section-title-header text-center">
                                <div className="contents text-center" style={{ padding: '2%' }}>
                                    <h1 style={{ fontSize: '2.5rem' }}>Predators Battle</h1>
                                    <p><i><q>
                                    Predators clash in a dance of dominance, where only the fiercest shall reign supreme.</q></i></p>
                                    <h3>Non-technical (E Sports)</h3>
                                    <p className="wow fadeInDown" data-wow-delay="0.2s">
                                    Predators Battle is an exhilarating esports event centered around the popular mobile game, Battlegrounds Mobile India (BGMI). This competitive tournament brings together top teams to showcase their skills and strategies in high-stakes matches. With intense gameplay and strategic battles, it promises to be a thrilling experience for both players and spectators alike.
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
                                Fees - <i className="fa fa-inr" aria-hidden="true"></i> 200*
                                <br />
                                {/* <p>*Additional fees to be paid after the shortlisting</p> */}
                            </div>
                        </div>
                        <div className="hi">
                            <div className="feature" data-wow-delay="0.2s">
                                Team Size<br />4 participants per team
                            </div>
                        </div>
                        <div className="hi">
                            <div className="feature" data-wow-delay="0.2s">
                                Mode of event<br />Offline and Online
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-5 col-xa-12 mb-3">
                            <div className="price-block-wrapper wow fadeInLeft" data-wow-delay="0.2s">
                                <div className="price">
                                    <h2>Round 1  Qualifiers</h2>
                                </div>
                                <div className="pricing-list">
                                
                                    <span className="text">Online Qualifiers Round</span>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-5 col-xa-12 mb-3">
                            <div className="price-block-wrapper active wow fadeInUp" data-wow-delay="0.3s">
                                <div className="price">
                                    <h2>Round 2  Semi- Finals</h2>
                                </div>
                                <div className="pricing-list">
                                
                                    <span className="text">Online Semifinal Round</span>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-5 col-xa-12 mb-3">
                            <div className="price-block-wrapper wow fadeInLeft" data-wow-delay="0.2s">
                                <div className="price">
                                    <h2>Round 3 <br/> Final</h2>
                                </div>
                                <div className="pricing-list">
                                
                                    <span className="text">Ofline Grand Fianle</span>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="c">
        <div className="b">
          <a href="https://forms.gle/mKmNaCzUXB1hovfc7" className="bt">
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
                                <li><span>Event Coordinator: Vivek Nimbolkar</span></li>
                                <li><span>9322839267</span></li>
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

export default PredatorsBattle;
