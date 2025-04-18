import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import headshot from '../assets/images/uncmunc_headshot.jpeg'

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={headshot} alt="Headshot" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/rithikkulkarni" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/rithikkulkarni/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Rithik Kulkarni</h1>
          <p>Data Science Professional</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/rithikkulkarni" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/rithikkulkarni/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;