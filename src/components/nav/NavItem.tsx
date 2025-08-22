import { toggleMenu } from "./Nav";

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
    if (className && className === "spacer") {
        return <li className={className} key={key}></li>
    }

    const handleClick = () => {
        toggleMenu('close');
    }
    return (
        <li className={className} key={key}>
            <a id={id} href={url} title={name} target={target} onClick={handleClick}>{content||name}</a>
        </li>
    )
}

export default NavItem;