import { type MediaItem } from "../Media";

const Video = ({dir, item}:{dir:string, item:MediaItem}) => {

    const content = item.content[0];
    const muted = content.autoplay ? true : false;
    const contentURL = `/projects/${dir}/${content.src}`;

    return (
        <div className={item.frame} role="presentation">
            <video 
                width={content.width||"100%"}
                height={content.height||"100%"}
                loop={content.loop}
                controls={content.controls}
                autoPlay={content.autoplay}
                muted={muted}
            >
                <source src={contentURL} />
            </video>
        </div>
    )
}

export default Video;