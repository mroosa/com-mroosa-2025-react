export interface ProjectLinkType {
    type: string,
    url: string,
    title: string
}

const ProjectLinks = ({links}: {links:ProjectLinkType[]}) => {

    const linkAry = links || [];

    if (linkAry.length > 0) {
        return (
            <ul className="project-links">
                {linkAry.map((link, key) => (
                    <li key={key} className={link.type}><a href={link.url} target="_blank" title={link.title}>{link.title}</a></li>
                ))}
            </ul>
        )
    }
    return null;
}

export default ProjectLinks