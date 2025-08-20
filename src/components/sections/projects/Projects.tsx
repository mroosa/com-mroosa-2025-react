import { useEffect } from "react";
import Project, { type ProjectObj } from "./Project";
import * as Data from '../../../assets/projects.json';
// import { type ProjectObj } from "./Project";

const Projects = () => {
    const projectsData: ProjectObj[] = Data.projects

    useEffect(() => {
    }, [])


    return (
        <div className="projects" role="presentation">
            {projectsData.map((project, key) => (
                <Project
                    key={key}
                    count={key}
                    project={project}
                    defaultChecked={(key===0)}
                />
            ))}
        </div>
    )
}

export default Projects;