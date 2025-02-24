import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './Events.css'; // Import the CSS file

const Events = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleSubmit = (event, link) => {
    event.preventDefault(); // Prevent the default form submit behavior
    navigate(link); // Navigate to the corresponding event page
  };

  return (
    <section id="intro" className="intro section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h2 className="section-title">Events</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center intro-wrapper">
          <div className="rf">
          <div className='r3'>
          <div className="himu col-lg-4 col-md-6 col-xs-12">
            <div className="single-intro-text color-1 mb-70">
              <i className="lni-microphone"></i>
              <h3>EcoSymposium</h3>
              <h4>
              "Unveiling Innovation: Bridging the Wilderness<br/> and Tech Horizons"</h4>
              <p>Technical Project Presentation Event</p>
              <form onSubmit={(e) => handleSubmit(e, '/EcoSymposium')}>
                <button type="submit" className="btn btn-common">Read More</button>
              </form>
              <span className="count-number">01</span>
            </div>
          </div>
          <div className="himu col-lg-4 col-md-6 col-xs-12">
            <div className="single-intro-text color-1 mb-70">
              <i className="fa fa-microchip"></i>
              <h3>Circuit Safari</h3>
              <h4>“Amplify your skills,ignite progress”</h4>
              <p>Circuit Design and Embedded System Design Event</p>
              <form onSubmit={(e) => handleSubmit(e, '/CircuitSafari')}>
                <button type="submit" className="btn btn-common">Read More</button>
              </form>
              <span className="count-number">02</span>
            </div>
          </div>
          <div className="himu col-lg-4 col-md-6 col-xs-12">
            <div className="single-intro-text color-1 mb-70">
              <i className="fa fa-bug"></i>
              <h3>Code Hunt</h3>
              <h4>"Where algorithms meet the wild mysteries<br/> of the jungle"</h4>
              <p>Coding Event</p>
              <form onSubmit={(e) => handleSubmit(e, '/CodeHunt')}>
                <button type="submit" className="btn btn-common">Read More</button>
              </form>
              <span className="count-number">03</span>
            </div>
          </div>
          </div>
          <div className="r3">
          <div className="himu col-lg-4 col-md-6 col-xs-12">
            <div className="single-intro-text color-1 mb-70">
              <i className="fa fa-question-circle-o"></i>
              <h3>Quest Rush</h3>
              <h4>"Venturing Deep into the Jungle of Intelligence"</h4>
              <p>Quiz Event</p>
              <form onSubmit={(e) => handleSubmit(e, '/QuestRush')}>
                <button type="submit" className="btn btn-common">Read More</button>
              </form>
              <span className="count-number">04</span>
            </div>
          </div>
          <div className="himu col-lg-4 col-md-6 col-xs-12">
            <div className="single-intro-text color-1 mb-70">
              <i className="fa fa-user"></i>
              <h3>Jungle Cruise</h3>
              <h4>
              "Adventure Through the Jungle Canopy"</h4>
              <p>FE Special Event</p>
              <form onSubmit={(e) => handleSubmit(e, '/Junglecruise')}>
                <button type="submit" className="btn btn-common">Read More</button>
              </form>
              <span className="count-number">05</span>
            </div>
          </div>
          <div className="himu col-lg-4 col-md-6 col-xs-12">
            <div className="single-intro-text color-1 mb-70">
              <i className="lni-microphone"></i>
              <h3>Predators Battleground</h3>
              <h4>“"Unraveling the Jungle of Ideas!"”</h4>
              <p>E-Sport Event</p>
              <form onSubmit={(e) => handleSubmit(e, '/PredatorsBattle')}>
                <button type="submit" className="btn btn-common">Read More</button>
              </form>
              <span className="count-number">06</span>
            </div>
          </div>
          </div>
          <div className="r3">
          <div className="himu col-lg-4 col-md-6 col-xs-12">
            <div className="single-intro-text color-1 mb-70">
              <i className="fa fa-briefcase"></i>
              <h3>Wild Ventures</h3>
              <h4>“Turning Jungle Ideas into Innovation and <br/>Dreams into Triumph”</h4>
              <p>Business & Management Event</p>
              <form onSubmit={(e) => handleSubmit(e, '/Wildventures')}>
                <button type="submit" className="btn btn-common">Read More</button>
              </form>
              <span className="count-number">07</span>
            </div>
          </div>
          <div className="himu col-lg-4 col-md-6 col-xs-12">
            <div className="single-intro-text color-1 mb-70">
              <i className="fa fa-user-secret"></i>
              <h3>Enigma</h3>
              <h4>“Unleash the Jungle Mirage of Illusion”</h4>
              <p>Mystery Event</p>
              <form onSubmit={(e) => handleSubmit(e, '/Enigma')}>
                <button type="submit" className="btn btn-common">Read More</button>
              </form>
              <span className="count-number">08</span>
            </div>
          </div>
          <div className="himu col-lg-4 col-md-6 col-xs-12">
            <div className="single-intro-text color-1 mb-70">
              <i className="fa fa-bug"></i>
              <h3>Mock Placement Drive</h3>
              <h4>“Get Guided Through the Jungle by<br/> a Mock Interview”</h4>
              <p>Placement Event</p>
              <form onSubmit={(e) => handleSubmit(e, '/MockPd')}>
                <button type="submit" className="btn btn-common">Read More</button>
              </form>
              <span className="count-number">09</span>
            </div>
          </div>
          </div>
          <div className="r3">
          <div className="himu col-lg-4 col-md-6 col-xs-12">
            <div className="single-intro-text color-1 mb-70">
              <i className="fa fa-bug"></i>
              <h3>Bidding Biome</h3>
              <h4>“Forests of Skills and Streams of<br/> Entertainment”</h4>
              <p>IPL Auction Event</p>
              <form onSubmit={(e) => handleSubmit(e, '/bidingbiome')}>
                <button type="submit" className="btn btn-common">Read More</button>
              </form>
              <span className="count-number">10</span>
            </div>
          </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
