import projects from "../projects.js";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card';
import Figure from 'react-bootstrap/Figure';

const ProjectLister = () => {
    return(
        <div class="project">
            {projects.map((project) => { 
                return(
                <div>
                    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={project.image} />
      <Card.Body>
        <Card.Title>{project.name}</Card.Title>
        <Card.Text>
          {project.about}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        <br></br>
        <a href={project.link}>Github</a><br />
      </Card.Body>
    </Card>

    </div>)    
            })}
        </div>
    )
}
export default ProjectLister;