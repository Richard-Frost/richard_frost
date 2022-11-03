import React from 'react';

import Navbar from './Navbar';
import ProjectLister from './ProjectLister'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




function App() {
  return (
    <div className="App">
    
      <header className="App-header">
        <Navbar />
      </header>

      <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" id="myVideo">
        <source src="images/video2.mp4" type="video/mp4"/>
      </video>  
      
      <Container>
        <ProjectLister />
      </Container>
      
      
    </div>
  );
}

export default App;
