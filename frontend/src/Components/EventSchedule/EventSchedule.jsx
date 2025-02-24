import React, { useState } from "react";
import "./EventSchedule.css";

import codeImage from "./code.jpeg";
import cktImage from "./ckt.jpeg";
import buisnessImage from "./buisness.jpeg";
import fespecialImage from "./fespecial.jpeg";
import iplImage from "./ipl.jpeg";
import quizImage from "./quiz.jpeg";
import Bgmi from "./bgmi.jpeg"
import Mystery from "./mystery.jpeg"
import Mock from "./mock.jpeg"
import Presentation from "./presentation.jpeg"
const EventSchedule = () => {
  // Manage the selected day state
  const [selectedDay, setSelectedDay] = useState("day1");

  return (
    <div className="head">
      <div className="section-title-header text-center">
        <h2 className="section-title">Events Schedule</h2>
      </div>
      <div className="cont">
        <div className="days">
          <div className="day1" onClick={() => setSelectedDay("day1")}>
            <h3 className={`d-box ${selectedDay === "day1" ? "active" : ""}`}>Day 1<br/><p className="p">19 oct 2024</p></h3>
          </div>
          <div className="day2" onClick={() => setSelectedDay("day2")}>
            <h3 className={`d-box ${selectedDay === "day2" ? "active" : ""}`}>Day 2<br/><p className="p">20 oct 2024</p></h3>
          </div>
        </div>

        {selectedDay === "day1" && (
          <div className="en1">
            
            <div className="tp">
              <img src={cktImage} alt="Event 2" className="event-img" />
              <div className="t">
                <h3>Circuit Safari - “Amplify your skills, ignite progress ”</h3>
                <h5>Circuit Building and Embedded System Design Event</h5>
              </div>
            </div>
            <div className="tp">
              <img src={fespecialImage} alt="Event 3" className="event-img" />
              <div className="t">
                <h3>Jungle Cruise- “Adventure beneath the waves”</h3>
                <h5>FE Special Event</h5>
              </div>
            </div>
            <div className="tp">
              <img src={iplImage} alt="Event 4" className="event-img" />
              <div className="t">
                <h3>Bidding Biome - “Forests of Skills and Streams of
                Entertainment”</h3>
                <h5>IPL Auction Event</h5>
              </div>
            </div>
            <div className="tp">
              <img src={quizImage} alt="Event 5" className="event-img" />
              <div className="t">
                <h3>Quest Rush – “Venturing Deep into the Jungle of Intelligence”</h3>
                <h5>Quiz Event</h5>
              </div>
            </div>
            <div className="tp">
              <img src={buisnessImage} alt="Event 6" className="event-img" />
              <div className="t">
                <h3>Wild Ventures - “Turning Jungle Ideas into Innovation and
                Dreams into Triumph”</h3>
                <h5>Business Event</h5>
              </div>
            </div>
          </div>
        )}

        {selectedDay === "day2" && (
          <div className="en2">
            <div className="tp">
              <img src={codeImage} alt="Event 1" className="event-img" />
              <div className="t">
                <h3>CodeHunt - “Where algorithms meet the wild mysteries of the jungle”</h3>
                <h5>Coding Event</h5>
              </div>
            </div>
            <div className="tp">
              <img src={Bgmi} alt="Event 1" className="event-img" />
              <div className="t">
                <h3>Predator's Battleground - “Predators clash in a dance of dominance, where only the fiercest shall reign supreme.”</h3>
                <h5>E-Sport Event</h5>
              </div>
            </div>
            <div className="tp">
              <img src={Mystery} alt="Event 2" className="event-img" />
              <div className="t">
                <h3>Enigma - "Unleash the Jungle Mirage of Illusion</h3>
                <h5>Mystery Event</h5>
              </div>
            </div>
            <div className="tp">
              <img src={Presentation} alt="Event 3" className="event-img" />
              <div className="t">
                <h3>Eco Symposium - “Unveiling Innovation: Bridging the Wilderness
                and Tech Horizons”</h3>
                <h5>Presentation Event</h5>
              </div>
            </div>
            <div className="tp">
              <img src={Mock} alt="Event 4" className="event-img" />
              <div className="t">
                <h3>Mock Placement Drive - “Get Guided Through the Jungle by
                a Mock Interview”</h3>
                <h5>Placement Event</h5>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventSchedule;
