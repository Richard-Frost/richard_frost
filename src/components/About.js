import React from 'react'
import Container from 'react-bootstrap/Container';
import { SocialIcon } from 'react-social-icons';
import me from '../images/rf.jpg'

const About = () => {
    return(
        <Container>
        <div className="projects">
            <div className="section-title">
                <h1>Hi I'm Richard Frost</h1>
            </div>
            <div id="bio">
                <img id="thumbnail"src={me}></img>
                <h5> I love code, coffee, music, photography and most of all, being Autumn's dad. Please visit my Linkedin page for more info! </h5>
                <div id="linkedin">
                    <SocialIcon network="linkedin" url= "https://www.linkedin.com/in/richard-frost-dev/" />
                    <SocialIcon network="github" url= "https://github.com/Richard-Frost" />
                </div>
            </div>
        </div>
        </Container>
    )
}
export default About;