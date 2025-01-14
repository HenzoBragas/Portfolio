import React from 'react';
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
                        <li><a href="#home">HOME</a></li>
                        <li><a href="#about">ABOUT</a></li>
                        <li><a href="#project">PROJECTS</a></li>
                        <li><a href="#contact">CONTACT</a></li>
                    </ul>
                </header>
        </div>
    )
}

export default Menu
