import { type MediaItem } from "../Media";

const Compare = ({dir, item}:{dir:string, item:MediaItem}) => {

    const content_before = item.content[0];
    const content_after = item.content[1];
    const contentURL_before = `/projects/${dir}/${content_before.src}`;
    const contentURL_after = `/projects/${dir}/${content_after.src}`;
    
    return (
        <div className={item.frame} role="presentation">
            <div className="onion" role="presentation">
                <button className="grip" role="presentation"></button>
                <img
                    className="after no-shadow"
                    src={contentURL_after}
                    width={content_after.width}
                    height={content_after.height}
                    alt={content_after.alt}
                    aria-label="After Image"
                />
                <div className="before">
                    <img
                        className="no-shadow"
                        src={contentURL_before}
                        width={content_before.width}
                        height={content_before.height}
                        alt={content_before.alt}
                        aria-label="Before Image"
                    />
                </div>
            </div>
        </div>
    )
}

export default Compare;