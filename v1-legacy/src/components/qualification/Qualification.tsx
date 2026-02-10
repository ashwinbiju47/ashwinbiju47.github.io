import React, { useState } from 'react'
import './qualification.css'

const Qualification = () => {

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: any): void => {
    setToggleState(index);
  };


  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => {
              toggleTab(1);
            }}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => {
              toggleTab(2);
            }}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active "
                : "qualification__content "
            }
            onClick={() => {
              toggleTab(1);
            }}
          >
            {/* Data 1 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  B.Tech: Computer Science and Engineering
                </h3>
                <span className="qualification__subtitle">
                  Mar Baselios Institute of Technology and Science,
                  Kothamangalam, Ernakulam, Kerala
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2019-2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active "
                : "qualification__content "
            }
            onClick={() => {
              toggleTab(2);
            }}
          >
            {/* Data 2 */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Backend Developer{" "}
                </h3>
                <span className="qualification__subtitle">
                  Squadra Media, Bengaluru, Karnataka, India 
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 09/2024 - Present
                </div>
              </div>
            </div>

            {/* Data 1 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Jr. Software Developer</h3>
                <span className="qualification__subtitle">
                  Probablity Gaming, Goa, India
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 08/2023 - 09/2024
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* Data 0 */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Full Stack Developer (MERN){" "}
                </h3>
                <span className="qualification__subtitle">Freelance</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 02/2023 - 07/2023
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualification