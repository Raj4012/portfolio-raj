import React from "react";
import "./Hero.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import profile_img from "../../assets/profile_img.png";

const Hero = () => {

  return (

    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1> <span>I'm Rajkumar Bharti,</span> frontend developer based in India.</h1>
      <p>
        I am a skilled frontend developer with expertise in crafting responsive
        and user-friendly web interfaces. Proficient in HTML, CSS, JavaScript,
        and modern frameworks like ReactJS.
      </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">
          <a
            href="https://drive.google.com/file/d/1qflcy7sXLtY3iUf_8wn3L5YO9kEudrZL/view?usp=sharing" // Replace with the correct path to your resume
            target="_blank"
            rel="noopener noreferrer"
            className="resume-link"
          >
          My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
