import React from 'react';
import '../styles/AboutMe.css'

function AboutMe() {
    return (
        <div className='about'>
            <div className="container-about">
                <h2>ABOUT ME</h2>
                <div className="hr"></div>
                <div className="subtitle">
                    <h3>
                        Here you will find more information about me, what I do, and my
                        current skills mostly in terms <br />of programming and technology.
                    </h3>
                </div>
                <div className="container-about-geral">
                    <div className="meabout">
                        <h3>Get to know me!</h3>
                        <p>
                        I'm a web developer focused on fullstack applications, building and managing the front-end of websites. Check out some of my work in the Projects section.<br /> I'm currently pursuing a degree in Computer Science. My focus is on creating web applications using ReactJS, both front-end and back-end development.<br /> I'm open to job opportunities where I can contribute, learn, and grow. If you have a great opportunity that aligns with my skills and experience, don't hesitate to reach out to me.
                        </p>
                        <button className="btn-contact">CONTACT</button>
                    </div>
                </div>
            </div>
            <div className="container-skills">
                <div className="skills">
                    <h3>My Skills</h3>
                    <div className="skills-overlay">
                        <div className="overlay">
                            <h4>JavaScript</h4>
                        </div>
                        <div className="overlay">
                            <h4>React</h4>
                        </div>
                        <div className="overlay">
                            <h4>SASS</h4>
                        </div>
                        <div className="overlay">
                            <h4>TypeScript</h4>
                        </div>
                        <div className="overlay">
                            <h4>Git</h4>
                        </div>
                        <div className="overlay">
                            <h4>Java</h4>
                        </div>
                        <div className="overlay">
                            <h4>Responsive Design</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
