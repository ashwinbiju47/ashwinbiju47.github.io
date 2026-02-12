import React, { useState } from 'react'
import "./header.css"

const Header = () => {

  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    if (header) {

      if (this.scrollY >= 560) {
        header.classList.add("scroll-header");
      } else {
        header.classList.remove("scroll-header");
      }
    }
  });


  const [Toggle, showMenu] = useState(false)
  const [activNav, setActivNav] = useState("#home")

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">Ashwin</a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">

            <li className="nav__item">
              <a href="#home" onClick={() => setActivNav("#home")} className={activNav === "#home" ? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-estate nav__icon"></i>
                Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" onClick={() => setActivNav("#about")} className={activNav === "#about" ? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-user nav__icon"></i>
                About
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" onClick={() => setActivNav("#skills")} className={activNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-file-alt nav__icon"></i>
                Skills
              </a>
            </li>

            {/* <li className="nav__item">
              <a href="#services"  onClick={()=>setActivNav("#services")} className={activNav === "#services" ? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-briefcase-alt nav__icon"></i>
                Services
              </a>
            </li>

            <li className="nav__item">
              <a href="#portfolio"  onClick={()=>setActivNav("#portfolio")} className={activNav === "#portfolio" ? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-scenery nav__icon"></i>
                Portfolio
              </a>
            </li>*/}

            <li className="nav__item">
              <a href="#contact" onClick={() => setActivNav("#contact")} className={activNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-message nav__icon"></i>
                Contact
              </a>
            </li>
          </ul>

          <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>

      </nav>
    </header>
  )
}

export default Header