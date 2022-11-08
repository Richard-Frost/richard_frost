import React from 'react'
import { SocialIcon } from 'react-social-icons';

const Navbar = () => {
    return(
        <div class="nav">

            <ul>
                <li id="name"><a href="#">Richard Frost</a></li>
                <li><a href="/">Home</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </div>
    )
} 
export default Navbar;