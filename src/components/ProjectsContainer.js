import React from 'react';
import ProjectLister from './ProjectLister';
import Container from 'react-bootstrap/Container';

const ProjectContainer = () => {
    return(
        <div>
           <Container fluid>
             <ProjectLister/>
            </Container>
          
        </div>)
}
export default ProjectContainer;