import React from 'react';
import '../css/about.css'

function About() {
  return (
<>
    <div id='About' className="about-page">
      <h2>About</h2>
      <div className="aboutbody">
      <div className='innerbody'>
        <ul>
          <li>
            <label>Name :</label>
            <span><strong> Jitendra Kumar,</strong></span>
          </li>
          <li>
            <label>Birth-year :</label>
            <span><strong> 1999,</strong></span>
          </li>
          <li> <label>Locality :</label>
          <span><strong> Bulandshahr-203001,Uttar Pradesh (India)</strong></span>
          </li>
        </ul>
      </div>
      <div className='innerbody' >
        <h3>Let me introduce myself</h3>
        <p>I am jitendra kumar, Formarly i worked as a mechanical engineer in a reputed manufacturing company, <br/>
          Now i want to switch my career in web devlopment basically i focus on front end technologies, I have basic knowledge of <b>Html,Css, JavaScript & React js</b> on these technologies i have no working experience form any company.I'm <b>Lookin for Internship </b>
          where i can learn and work for organisation. 
        </p>
      </div>
      </div>
      </div>
      <div className="footer">
      <ul className='link-icons' >
        <li> <a href="http://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in"></i></a></li>
        <li> <a href="http://github.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a></li>
        <li> <a style={{pointerEvents: 'none'}} href="/" target="self" rel="noopener noreferrer"><i className="fa-solid fa-envelope"></i></a></li>
      </ul>
    </div>
  
    </>
  )
}

export default About