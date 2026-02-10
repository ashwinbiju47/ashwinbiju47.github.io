import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Ashwin</h1>
                <ul className="footer__list">

                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>

                </ul>

                <div className="footer__social">
                    <a href="https://www.instagram.com/ashw1n.exe/"
                        className="footer__social-link"
                        target={'_blank'}>
                        <i className="bx bxl-instagram"></i>
                    </a>

                    <a href="https://x.com/4SHx1i"
                        className="footer__social-link"
                        target={'_blank'}>
                        <i className="bx bxl-twitter"></i>
                    </a>

                </div>
                <span className="footer__copy">&#169; 4SHx1. All rights reserved</span>
            </div>
        </footer>
    )
}

export default Footer