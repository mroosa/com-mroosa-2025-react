import type { ReactElement } from "react";
import { Video, Image, Vimeo, Compare } from "./mediaTypes";


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
    dir: string,
    content: MediaItem[]
}

const Media = ({dir, content}: MediaProps) => {

    const numMedia = content.length;

    const Item = ({item}:{item:MediaItem}):ReactElement => {
        const frame = `frame ${item.type}`
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
        <div className="media carousel" data-slides={numMedia} role="presentation"><div className="film" role="presentation">
        
            {content.map((item:MediaItem, key:number) => (
                <Item key={key} item={item} />
            ))}
        
        </div></div>
    )
}
export default Media;