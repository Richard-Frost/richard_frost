import React from 'react';

import Container from 'react-bootstrap/Container';
import pic from '../images/my_world2.png'

const MyWorld = ()  => {
    return (
        <div>
            <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" id="myVideo">
                <source src="images/video3.mp4" type="video/mp4"/>
            </video>
        

            <div className="bottom">
                <img src={pic}></img>
            </div>
        </div>
    )
}
export default MyWorld;