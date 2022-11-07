import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProjectContainer from './ProjectsContainer';
import About from './About';

const Router = () => {
    return (
       <Routes>
        <Route exact path='/projects' element={<ProjectContainer />} />
        <Route exact path='/about' element={<About />} />
       </Routes>
    )
}
export default Router;