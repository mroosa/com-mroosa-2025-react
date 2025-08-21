import Project, { type ProjectObj } from "./Project";
import * as Data from '../../../assets/projects.json';
import { useEffect, useState } from "react";

const Projects = () => {
    const [projects,setProjects] = useState(Data.projects);
    
    useEffect(()=> {
        console.log(projects);
    },[])

    return (
        <div className="projects" role="presentation">
            {projects.map((project, key) => (
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