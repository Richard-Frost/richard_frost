import React from 'react';
import ProjectLister from './ProjectLister';
import Container from 'react-bootstrap/Container';

const ProjectContainer = () => {
    return(
        <div>
        <Container>
            <ProjectLister/>
        </Container>
        </div>)
}
export default ProjectContainer;