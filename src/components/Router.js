import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProjectContainer from './ProjectsContainer';

const Router = () => {
    return (
       <Routes>
        <Route exact path='/projects' element={<ProjectContainer />} />
       </Routes>
    )
}
export default Router;