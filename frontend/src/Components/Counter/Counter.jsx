import React, { useEffect } from "react";
import "./Counter.css";

const Counter = () => {
  useEffect(() => {
    const animationDuration = 3000; // Animation duration in milliseconds
    const frameDuration = 1000 / 60; // Frame duration for 60 FPS
    const totalFrames = Math.round(animationDuration / frameDuration);

    const easeOutQuad = t => t * (2 - t);

    const animateCountUp = el => {
      let frame = 0;
      const countTo = parseInt(el.innerHTML, 10);

      const counter = setInterval(() => {
        frame++;
        const progress = easeOutQuad(frame / totalFrames);
        const currentCount = Math.round(countTo * progress);

        if (parseInt(el.innerHTML, 10) !== currentCount) {
          el.innerHTML = currentCount;
        }

        if (frame === totalFrames) {
          clearInterval(counter);
        }
      }, frameDuration);
    };

    const countupEls = document.querySelectorAll('.timer');
    countupEls.forEach(animateCountUp);
  }, []);

  return (
    <div className="counter_wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-4">
            <div className="count_box box_hover">
              <h3><span className="timer">2</span></h3>
              <h4>Days</h4>
            </div>
          </div>
          <div className="col-md-4 col-sm-4">
            <div className="count_box box_hover">
              <h3><span className="timer">10</span></h3>
              <h4>Events</h4>
            </div>
          </div>
          <div className="col-md-4 col-sm-4">
            <div className="count_box box_hover">
              <h3><span className="timer">100</span>K</h3>
              <h4>Prize Worth</h4>
            </div>
          </div>
          <div className="col-md-4 col-sm-4">
            <div className="count_box box_hover">
              <h3><span className="timer">4</span></h3>
              <h4>Sponsers</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
