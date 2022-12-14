import React, {useEffect, useState} from 'react';

import Router from './Router';
import Navbar from './Navbar';
import BootNav from './BootNav';
import ProjectLister from './ProjectLister';
import MyWorld from './MyWorld'

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

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
    <div>
      <header>
        <BootNav/>
      </header>
      <MyWorld/>
      <Router/>
    </div>
  );
}

export default App;
