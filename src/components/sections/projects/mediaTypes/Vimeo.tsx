import { type MediaItem } from "../Media";

const Vimeo = ({item}:{item:MediaItem}) => {

    const content = item.content[0];
    // Check for vimeo URL, return only the video ID
    const domain = "vimeo.com/";
    const hasURL = content.src.lastIndexOf(domain);
    const vimeoId = content.src.substring(hasURL + domain.length, content.src.length - 1);
    // split to array to check for private hash, form url as necessary
    const vimeoIdAry = vimeoId.split("/");
    const vimeoURL = (vimeoIdAry.length > 1) ? `${vimeoIdAry[0]}?h=${vimeoIdAry[1]}` : vimeoIdAry[0];

    // Get ratio for proper centering/fill (round 2 places)
    const ratio = (content.height && content.width) ? Math.round((content.height / content.width) * 10000) / 100 : 56.25;
    const padding = `${ratio}% 0 0 0`;

    const contentURL = `https://player.vimeo.com/video/${vimeoURL}&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;dnt=1`;
    const hasShadow = (item.disableShadow) ? "no-shadow" : undefined;
    

    return (
        <>
            <div style={{padding:padding,position:'relative'}} role="presentation">
                <iframe 
                    className={hasShadow}
                    src={contentURL}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                    style={{position:'absolute',top:'0',left:'0',width:'100%',height:'100%'}}
                    title={content.alt}
                >
                </iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
        </>
    )
}

export default Vimeo;