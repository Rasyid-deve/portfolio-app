import React, { useRef } from 'react';
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YoutubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5cpyy41', 'template_f7a3ng9', form.current, 'jASU1nbkAzHPofUvdYqq1').then(
      (result) => {
        console.log(result.text);
        e.target.reset();
        alert('Email Sent Completed!');
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My Client</h1>
        <p className="clientDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat ratione ducimus cupiditate, numquam consectetur aliquam?</p>
        <div className="clientImgs">
          <img src={Walmart} alt="Client" className="clientImg" />
          <img src={Adobe} alt="Client" className="clientImg" />
          <img src={Microsoft} alt="Client" className="clientImg" />
          <img src={Facebook} alt="Client" className="clientImg" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, corporis.</span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your Name" name="your_name" />
          <input type="email" className="email" placeholder="Your Email" name="your_email" />
          <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <img src={FacebookIcon} alt="Facebook" className="link" />
            <img src={TwitterIcon} alt="Twitter" className="link" />
            <img src={YoutubeIcon} alt="YoutubeIcon" className="link" />
            <img src={InstagramIcon} alt="Instagram" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
