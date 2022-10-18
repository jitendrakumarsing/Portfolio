import React from 'react';
import '../css/education.css';

function Education() {
  return (
   <div className="education-page">
    <h2 className='page-text' >EDUCATION & SKILLS</h2>
    <div className="pagebody">
      <div className="skills">
      <h4>SKILLS</h4>
      <span>Basics of--</span>
      <ul>
        <li><span><i className="fa-brands fa-html5"></i></span><span><strong>Html</strong></span></li>
        <li><span><i className="fa-brands fa-css3-alt"></i></span><span><strong>Css</strong></span></li>
        <li><span><i className="fa-brands fa-square-js"></i></span><span><strong>Java Script</strong></span></li>
        <li><span><i className="fa-brands fa-react"></i></span><span><strong>React js</strong></span></li>
      </ul>
      </div>
    
     <div className="edu">
        <h4 className=''>EDUCATION</h4>
        <p><strong>Bachlor Of Technology In Mechanical Engineering</strong></p>
        <span>Sunderdeep engineering college ghaziabad(2015-19).</span>

        <span><em>Mechanical Engineering</em> focus on studies the functioning of machines, working of automobiles, maintenance of various mechanical parts and equipment and helps to learn from the design of a product to its final product.</span>
       
        <p><strong>Intermediate/12<sup>th</sup></strong></p>
        <span>Govt. inter college bulandshahr(2015).</span>
      
        <p><strong>High School/10<sup>th</sup></strong></p>
        <span>Govt inter college bulandshahr(2013).</span>
        </div>
        </div>
   </div>
  )
}

export default Education;