import { useState } from "react";
import ProjectLinks, { type ProjectLinkType as ProjectLink } from "./ProjectLinks";
import Tags from "./Tags";
import Media, { type MediaItem } from "./Media";

export interface ProjectObj {
    id: string,
    dir?: string,
    title: string,
    description: string,
    links?: ProjectLink[],
    tags?: string[],
    awards?: string[],
    media?: MediaItem[],
    hide?: boolean
}

interface ProjectProps {
    project: ProjectObj,
    count: number,
    defaultChecked: boolean
}

const Project = ({project, count, defaultChecked}: ProjectProps) => {

    const projNum = (count < 10) ? `0${count}` : count;
    const [checked, setChecked] = useState(defaultChecked);

    if (!project.hide) {
        return (
            <div className="project" role="presentation">
                <input type="radio" id={project.id} name="project" defaultChecked={defaultChecked} onChange={() => setChecked(!checked)} />
                <label htmlFor={project.id}>
                <h3><span className="proj-num">{projNum}</span><span className="proj-ttl"><span className="dots">::</span><span className="ttl">{project.title}</span></span></h3>
                </label>
                <div className="project-nfo" role="presentation">
                    <ProjectLinks links={project.links} />
                    <Tags awards={project.awards} tags={project.tags} />
                    <Media dir={project.dir} content={project.media} />
                    <div className="project-dsc" aria-label="Project Description"><p>{project.description}</p></div>
                </div>
            </div>

        )
    }
}

export default Project;