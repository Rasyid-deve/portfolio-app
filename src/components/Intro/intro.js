import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImage from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Rasyed</span> <br />
          Backend Developer
        </span>
        <p className="introPara">
          I am an enthusiastic Backend developer experienced in the Javascript. <br />
          have a experience using the NodeJS framework and also have experience <br />
          using MySQL and MongoDB.{' '}
        </p>
        <Link>
          <button className="btn">
            <img src={btnImage} alt="Hire" className="btnImg" />
            Hire Me
          </button>
        </Link>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
