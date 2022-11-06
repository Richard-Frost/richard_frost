import React, {useEffect, useState} from 'react';


import Navbar from './Navbar';
import ProjectLister from './ProjectLister'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pic from '../images/my_world2.png'

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
    <div className="App">
    
      <header className="App-header">
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

      <ProjectLister />
    </div>
  );
}

export default App;
