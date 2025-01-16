import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

import '../styles/menu.css'

function Menu() {
    return (
        <div>
                <header>
                    <div class="name-bar">
                        <img src="#" alt="#" />
                        <p>HENZO BRAGAS</p>
                    </div>
                    <ul>
                        <ScrollLink to="home" smooth={true} duration={500}><li>HOME</li></ScrollLink>
                        <ScrollLink to="about" smooth={true} duration={500}><li>ABOUT</li></ScrollLink>
                        <ScrollLink to="project" smooth={true} duration={500}><li>PROJECTS</li></ScrollLink>
                        <ScrollLink to="contact" smooth={true} duration={500}><li>CONTACT</li></ScrollLink>
                    </ul>
                </header>
        </div>
    )
}

export default Menu
