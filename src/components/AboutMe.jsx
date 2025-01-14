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
                        I am a Web Developer Focused on Frontend, building and managing the Front-end of Websites. Check out some of my work in the Projects section.<br /> I also enjoy sharing content related to what I've learned over the years in Web Development to help others in the Dev community. Feel free to connect with or follow me on my <a href="https://www.linkedin.com/in/henzo-bragas-75b982262/" target="_blank">LinkedIn</a> about Web Development and Programming.<br /> I am open to job opportunities where I can contribute, learn, and grow. If you have a great opportunity that aligns with my skills and experience, don't hesitate to <strong>get in touch</strong> with me.
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
