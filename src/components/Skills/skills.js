import './skills.css';

import React from 'react';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti reprehenderit quaerat odit tenetur tempore quis reiciendis. Sed quam dignissimos et officia reprehenderit dicta, repellat illo voluptatem nihil exercitationem
        perspiciatis incidunt quaerat. Eligendi dolore provident perspiciatis cupiditate eaque! Odio, cumque facilis.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Backend Architecture</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, quas?</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Services</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, earum.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Interactive Application</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, quidem?</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
