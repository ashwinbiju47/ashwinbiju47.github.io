import React from 'react'
import './scrollUp.css'

const ScrollUp = () => {
    window.addEventListener("scroll", function() {
        const scrollUp = this.document.querySelector(".scrollup");
        if (scrollUp) {
            
            if (this.scrollY >= 560) {
                console.log("we in ");     
                scrollUp.classList.add("show__scroll");
            } else {
                scrollUp.classList.remove("show__scroll");
            }
        }
    });
    
  return (
    <a href="" className="scrollup">
        <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  )
}

export default ScrollUp