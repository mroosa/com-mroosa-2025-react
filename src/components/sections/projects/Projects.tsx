import Project from "./Project";
import * as Data from '../../../assets/projects.json';
import { useEffect, useState } from "react";

const Projects = () => {

    // Use useState in case there is a need for filtering later
    const [projects,setProjects] = useState(Data.projects);

    // function to pull only the "visible" projects
    const removeHiddenProjects = async () => {
        const updatedProjects = projects.filter(project => {
            return !project.hide
        })
        setProjects(updatedProjects);
    }
    
    useEffect(()=> {
        removeHiddenProjects()
    },[])

    return (
        <div className="projects" role="presentation">
            {projects.map((project, key) => (
                <Project
                    key={key}
                    count={key+1}
                    project={project}
                    defaultChecked={(key===0)}
                />
            ))}
        </div>
    )
}

export default Projects;