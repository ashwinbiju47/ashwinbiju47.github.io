import React from 'react'

const Game = () => {
    return (
        <div className="skills__content">

            <h3 className="skills__title">Game Developer</h3>

            <div className="skills__box">

                <div className="skills__group">

                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">Javascript</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">Typescript</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">Pixi Js</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                </div>

                <div className="skills__group">

                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">Phaser</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">GSAP</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Game