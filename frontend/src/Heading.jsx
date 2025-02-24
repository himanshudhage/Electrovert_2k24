import React from 'react';
import './Heading.css'; 
import elesaLogo from '../src/Components/elesa_LOGO.png';
const Heading = () => {
  return (
    <div className="heading-container">
      <img src={elesaLogo} alt="Elesa Logo" className="logo" />
      <div className="text-content">
        <h3>Walchand College Of Engineering</h3>
        <h4>Electronics Engineering Student's Association(ELESA)</h4>
        <h5>Presents</h5>
        <h1>Electrovert 2024-25</h1>
        <h3>19th and 20th October</h3>
        <div className="c">
        <div className="b">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScR6sXTd2aH0gjtyFXACjbmsLj9pLlzKQ1-uZpHT8ngT-Rv0w/viewform" className="bt">
            Register now
          </a>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Heading;
