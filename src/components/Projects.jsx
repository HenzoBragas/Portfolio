import React from 'react';
import LandingPage from '../assets/LandingPage.png';
import Crud from '../assets/Crud.png';
import LoginPage from '../assets/LoginPage.png';
import TranslationApp from '../assets/TranslationApp.png'
import '../styles/Projects.css'

function Projects() {
    return (
        <>
            <div className='ProjectsWrapper' id='project'>
                    <h2>PROJECTS</h2>
                    <div className="hr"></div>
                    <h3 className="subtitle">
                        Here you will find some of the personal and clients projects that i
                       create 
                    </h3>
                    <div className="containerProjects">
                        <img src={LandingPage} />
                        <img src={Crud} />
                        <img src={LoginPage} />
                        <img src={TranslationApp} />
                    </div>
            </div>
        </>
    )
}

export default Projects
