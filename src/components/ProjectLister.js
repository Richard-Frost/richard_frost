import projects from "../projects.js";

const ProjectLister = () => {
    return(
        <div class="project">
            {projects.map((project) => { 
                return(
                <div>
                    <h1>{project.name}</h1>
                    <a href={project.link}>Github</a><br />
                    <img src={project.image} alt="" />
                </div>)    
            })}
        </div>
    )
}
export default ProjectLister;