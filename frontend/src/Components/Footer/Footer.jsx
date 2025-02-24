import React from 'react';
import './Footer.css'; // Assuming you have a CSS file for styling

// Importing local images
import instagramIcon from '../Footer/instagram.png';
import facebookIcon from '../Footer/facebook.png';
import messageIcon from '../Footer/message (1).png';
import twitterIcon from '../Footer/twitter.png';

const Footer = () => {
    return (
        <footer className="mainfooter" role="contentinfo">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-4 col-sm-3">
                        <div className="footer-pad">
                            <h4>ELESA</h4>
                            <ul className="list-unstyled">
                                <li className="text">Electronics Engineering Students' Association</li>
                                <li className="text">Walchand College of Engineering, Sangli</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <h4>Follow Us</h4>
                        <ul className="social-network social-circle">
                            <li>
                                <a href="https://www.facebook.com/wcesELESA/">
                                    <img src={facebookIcon} alt="LinkedIn" className="social-icon" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/elesa_wce">
                                    <img src={instagramIcon} alt="Instagram" className="social-icon" />
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/elesawalchand">
                                    <img src={twitterIcon} alt="Twitter" className="social-icon" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/company/elesa-wce">
                                    <img src={messageIcon} alt="Message" className="social-icon" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 copy">
                        <p className="footerb">
                            Website Designed and Developed by Web Team Elesa. ©Elesa 2024. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
