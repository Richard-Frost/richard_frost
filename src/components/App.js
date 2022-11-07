import React, {useEffect, useState} from 'react';

import Router from './Router';
import Navbar from './Navbar';
import BootNav from './BootNav';
import ProjectLister from './ProjectLister';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pic from '../images/my_world2.png'

import { SocialIcon } from 'react-social-icons';

function useWindowSize() {
  const [size, setSize] = useState([window.innerHeight, window.innerWidth]);  
  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerHeight, window.innerWidth])
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize)
    };
  }, []);
  console.log(size[1])
  return size
}

function App() {
  const [height, width] = useWindowSize();
  return (
    <div>
      <header>
        <Navbar />
        
      </header>
      <div>
        <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" id="myVideo">
          <source src="images/video3.mp4" type="video/mp4"/>
        </video>
      </div>

      <div className={width > 700 ? "bottom" : "top"}>
        <img src={pic}></img>
      </div>
      <Router/>
      <div className="bottom-icons">
        <SocialIcon network="linkedin" url= "https://www.linkedin.com/in/richard-frost-dev/" />
        <SocialIcon network="github" url= "https://github.com/Richard-Frost" />
      </div>
    </div>
  );
}

export default App;
