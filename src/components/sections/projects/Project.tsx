import { useState } from "react";
import Tags from "./Tags";
import Media, { type MediaItem } from "./Media";

interface ProjectProps {
    project: {
        id: string,
        dir: string,
        title: string,
        description: string,
        links: {
            type: string,
            url: string,
            title: string
        },
        tags: string[],
        awards: string[],
        media: MediaItem[]
    },
    count: number,
    defaultChecked: boolean,
    hide?: boolean
}

const Project = ({project, count, defaultChecked, hide}: ProjectProps) => {

    const projNum = (count+1 < 10) ? `0${count+1}` : count+1;
    const [checked, setChecked] = useState(defaultChecked);

    if (!hide) {
        return (
            <div className="project" role="presentation">
                <input type="radio" id={project.id} name="project" defaultChecked={defaultChecked} onChange={() => setChecked(!checked)} />
                <label htmlFor={project.id}>
                <h3><span className="proj-num">{projNum}</span><span className="proj-ttl"><span className="dots">::</span><span className="ttl">{project.title}</span></span></h3>
                </label>
                <div className="project-nfo" role="presentation">

                    {(project.awards || project.tags) && <Tags awards={project.awards} tags={project.tags} />}
                    <Media dir={project.dir} content={project.media} />
                    <div className="project-dsc" aria-label="Project Description"><p>{project.description}</p></div>
                </div>
            </div>

        )
    }
}

export default Project;