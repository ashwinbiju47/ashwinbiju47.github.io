import React from 'react'

const Info = () => {
  return (
   <div className="about__info grid">

    <div className="about__box">  
    <i className='bx bx-award about__icon'></i>
      <h3 className="about__title">Experience</h3>
      <span className="about__subtitle">1year and 2 months</span>
    </div>
    
    <div className="about__box">
    <i className='bx bxs-graduation about__icon' ></i>
      <h3 className="about__title">Education</h3>
      <span className="about__subtitle">CS and Engineering</span>
    </div>
    <div className="about__box">
    <i className='bx bx-briefcase about__icon' ></i>
      <h3 className="about__title">Completed</h3>
      <span className="about__subtitle">15+ projects</span>
    </div>
   
   </div>
  )
}

export default Info