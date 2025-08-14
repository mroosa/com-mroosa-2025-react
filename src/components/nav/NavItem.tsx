


interface NavItemProps {
    url?:string,
    name?:string,
    content?:any,
    className?:string,
    id?:string,
    target?:string,
    key?:number
}

function NavItem({url, name, content, className, id, target, key}: NavItemProps) {
    return (
        <li className={className} key={key}>
            <a id={id} href={url} title={name} target={target}>{content||name}</a>
        </li>
    )
}

export default NavItem;