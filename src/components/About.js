import React from 'react'
import Container from 'react-bootstrap/Container';
import { SocialIcon } from 'react-social-icons';
import me from '../images/rf.jpg'

const About = () => {
    return(
        <Container>
        <div className="about">
            <div className="section-title">
                <h1>Hi I'm Richard Frost</h1>
            </div>
            <div id="bio">
                <img id="thumbnail"src={me}></img>
                <h5> Full-stack Web Developer experienced in Ruby on Rails, JavaScript, and React with a creative and technical background as a photographer, musician and digital strategist. I am a self-sufficient, motivated, team player with strong organizational skills and attention to detail.</h5>
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