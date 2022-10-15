import projects from "../projects.js";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'

const ProjectLister = () => {
    return(
        <div class="project">
            {projects.map((project) => { 
                return(
                <div>
                    <h1>{project.name}</h1>
                    <a href={project.link}>Github</a><br />
                    <Image src={project.image} roundedCircle/>
                    <button>Hello</button>
                </div>)    
            })}
        </div>
    )
}
export default ProjectLister;