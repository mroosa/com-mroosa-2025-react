export interface ProjectLinkType {
    type: string,
    url: string,
    title: string
}

const ProjectLinks = ({links}: {links:ProjectLinkType[] | undefined}) => {


    if (links && links.length > 0) {
        return (
            <ul className="project-links">
                {links.map((link, key) => (
                    <li key={key} className={link.type}><a href={link.url} target="_blank" title={link.title}>{link.title}</a></li>
                ))}
            </ul>
        )
    }
    return null;
}

export default ProjectLinks