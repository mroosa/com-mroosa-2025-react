interface BrickProps {
    className?: string,
    letter: string
}

const Brick = ({ className, letter }: BrickProps) => {
    let classes = "brick";
    if (className) {
        classes += " " + className;
    }

    return (
        <span className={classes} role="presentation">{letter}</span>
    )
}

export default Brick;