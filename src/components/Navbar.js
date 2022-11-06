import React from 'react'
import { SocialIcon } from 'react-social-icons';

const Navbar = () => {
    return(
        <div class="nav">
            <h1>Richard Frost</h1>
            <div className="icons">
                <SocialIcon network="linkedin" url= "https://www.linkedin.com/in/richard-frost-dev/" /><br/>
                <br></br>
                <SocialIcon network="github" url= "https://github.com/Richard-Frost" />
            </div>
        </div>
    )
}
export default Navbar;