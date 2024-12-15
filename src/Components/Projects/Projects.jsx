import React from 'react'
import './Projects.css'
import projects_Data from '../../assets/projects_Data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Projects = () => {
return (
<div id='projects' className='projects'>
<div className="projects-title">
  <h1>My Projects</h1>
</div>
 <div className="projects-container">
 {projects_Data.map((Projects,index)=>{
  return <div key={index} className="projects-format">
<h3>{Projects.p_no}</h3>
<h2>{Projects.p_name}</h2>
<p>{Projects.p_desc}</p>
<div className="projects-readmore">
  <p>Read more</p>
  <img src={arrow_icon} alt="" />
</div>
 </div>
 })}
 </div>
  </div>
  )
}

export default Projects