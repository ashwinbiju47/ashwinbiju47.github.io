import React from 'react'
import Frontend from './Frontend'
import Backend from './Backend'
import './skills.css'
import AIML from './AI-ML'
import Game from './Game'

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical level</span>

            <div className="skills__container container grid">
                <Frontend />
                <Backend />
                <AIML />
                <Game/>
            </div>
        </section>
    )
}

export default Skills