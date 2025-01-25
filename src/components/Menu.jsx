import React, { useState } from 'react';
import perfil from '../assets/perfil.png';
import { Link as ScrollLink } from 'react-scroll';
import '../styles/menu.css';

function Menu() {
    const [activeLink, setActiveLink] = useState('home');

    const handleSetActive = (to) => {
        setActiveLink(to);
    };

    return (
        <div>
            <header>
                <div className="name-bar">
                    <img src={perfil} alt="Perfil" />
                    <p>HENZO BRAGAS</p>
                </div>
                <ul>
                    <li>
                        <ScrollLink
                            to="home"
                            smooth={true}
                            duration={500}
                            spy={true}
                            onSetActive={handleSetActive}
                            className={activeLink === 'home' ? 'active' : ''}
                        >
                            HOME
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink
                            to="about"
                            smooth={true}
                            duration={500}
                            spy={true}
                            onSetActive={handleSetActive}
                            className={activeLink === 'about' ? 'active' : ''}
                        >
                            ABOUT
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink
                            to="project"
                            smooth={true}
                            duration={500}
                            spy={true}
                            onSetActive={handleSetActive}
                            className={activeLink === 'project' ? 'active' : ''}
                        >
                            PROJECTS
                        </ScrollLink>
                    </li>
                </ul>
            </header>
        </div>
    );
}

export default Menu;
