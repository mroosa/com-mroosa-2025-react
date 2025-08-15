interface PlatformProps {
    className?: string,
    scene?: string,
    children: string
}

const Platform = ({className, scene, children}:PlatformProps) => {

    let classes = "platform";
    if (className) classes += " " + className;

    return (
        <p className={classes} data-scene={scene}>{children}</p>
    )
}

export default Platform;