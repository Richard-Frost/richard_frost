import projects from "../projects.js";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card';
import Figure from 'react-bootstrap/Figure';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProjectLister = () => {
    return(
         
        <div id="project-section">
          <Container>
            <Row>
              {projects.map((project) => { 
                return(
                  
                    <Col>
                      <Card>
                        <Card.Img variant="top" src={project.image} />
                        <Card.Body>
                          <Card.Title>{project.name}</Card.Title>
                          <Card.Text>{project.about}</Card.Text>
                          <Button variant="primary">Go somewhere</Button>
                          <br></br>
                          <a href={project.link}>Github</a>
                        </Card.Body>
                      </Card>
                    </Col>
              )    
              })}
            </Row>
          </Container>
        </div>
        
        

       
    )
}
export default ProjectLister;