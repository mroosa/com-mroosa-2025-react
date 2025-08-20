import { type MediaItem } from "../Media";

const Image = ({dir, item}:{dir:string, item:MediaItem}) => {

    const content = item.content[0];
    const contentURL = `/projects/${dir}/${content.src}`;
    const hasShadow = (item.disableShadow) ? "no-shadow" : undefined;

    return (
        <div className={item.frame} role="presentation">
            <img
                className={hasShadow}
                src={contentURL}
                width={content.width}
                height={content.height}
                alt={content.alt}
            />
        </div>
    )
}

export default Image;