import { useEffect } from "react";
import Project from "./Project";
import * as Data from '../../../assets/projects.json';

const Projects = () => {
    const projectsData = Data.projects

    useEffect(() => {
    }, [])


    return (
        <div className="projects" role="presentation">
            {projectsData.map((project, key) => (
                <Project key={key} count={key} project={project} defaultChecked={(key===0)} hide={project.hide} />
            ))}
        </div>
    )
}

export default Projects;