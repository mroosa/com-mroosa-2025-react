import { useRef, type ReactElement } from "react";
import { Video, Image, Vimeo, Compare } from "./mediaTypes";
import CarouselNav from "./CarouselNav";

export interface MediaItem {
    type: string,
    frame?: string,
    disableShadow?: boolean,
    content: {
        src: string,
        alt?: string,
        width?: number,
        height?: number,
        loop?: boolean,
        controls?: boolean,
        autoplay?: boolean
    }[]
}

interface MediaProps {
    dir: string | undefined,
    mediaItems: MediaItem[] | undefined
}

const Media = ({dir = "", mediaItems}: MediaProps) => {

    const activeMedia = useRef(0);
    const filmstrip = useRef<HTMLDivElement>(null);

    const handleClick = (dot:number) => {
        // setActiveMedia(dot);
        activeMedia.current = dot;
        const percentage = (dot != 0) ? -dot * 100 : 0;
        filmstrip.current!.style.left = `${percentage}%`;
    }

    if (mediaItems) {
        const numMedia = mediaItems.length;

        // Create React Element to handle switch case
        const Item = ({item}:{item:MediaItem}):ReactElement => {
            const frame = `frame ${item.type}`;
            let internals = null;
            switch (item.type) {
                case "video":
                    internals = <Video dir={dir} item={item} />
                    break;
                case "image":
                    internals = <Image dir={dir} item={item} />
                    break;
                case "compare":
                    internals = <Compare dir={dir} item={item} />
                    break;
                case "vimeo":
                    internals = <Vimeo item={item} />
                    break;
            }
            return (
                <div className={frame} role="presentation">
                    {internals}
                </div>
            )
        }

        return (
            <div className="media carousel" data-slides={numMedia} role="presentation">
                <div className="film" ref={filmstrip} role="presentation">
                    {mediaItems.map((item:MediaItem, key) => (
                        <Item key={key} item={item} />
                    ))}
                </div>
                <CarouselNav defaultDot={activeMedia.current} mediaItems={mediaItems} numMedia={numMedia} handleClick={handleClick} />
            </div>
        )
    }
    return null
}
export default Media;