import React from 'react'
import './About.css'
import profile_img from '../../assets/profile_img.png'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-section">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
           <div className="about-para">
            <p>I am a skilled frontend developer with expertise in crafting responsive and user-friendly web interfaces. Proficient in HTML, CSS, JavaScript, and modern frameworks like ReactJS.</p>
            <p>Throughout my journey, I have worked on diverse projects, from dynamic web applications to feature-rich platforms, always focusing on responsiveness and performance.</p>
           </div>
           <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p> <hr style={{width:"50%"}} /></div>
            <div className="about-skill"><p>JavaScript</p> <hr style={{width:"60%"}} /></div>
            <div className="about-skill"><p>React JS</p> <hr style={{width:"70%"}} /></div>
            <div className="about-skill"><p>Next JS</p> <hr style={{width:"50%"}} /></div>
           </div>
        </div>
      </div>
      <div className="about-achievments">
        <div className="about-achievment">
            <h1>2+</h1>
            <p>YEARS OF EXPERIENCE IN FRONTEND DEV </p>
        </div>
        <hr />
        <div className="about-achievment">
            <h1>10+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
      </div>
    </div>
  )
}

export default About