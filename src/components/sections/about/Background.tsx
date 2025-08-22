import { movingBackgrounds } from "../../hooks/movingBackgrounds";

const Background = () => {

    const {midPos, backPos} = movingBackgrounds();
    const backgroundPos = `${midPos}px 95%, ${backPos}px 100%`;

    return (
        <div className="monitor" style={{backgroundPosition:backgroundPos}} role="presentation">
            <img className="asset" id="cloud" data-type="sprite" src="images/about/cloud_sprite.png" alt=""/>
            <img className="asset" id="playerSprite" data-type="sprite" src="images/about/LEGO-sprite.png" alt=""/>
            <div className="shrub" role="presentation"></div>
            <div className="shrub" role="presentation"></div>
            <div className="tile curtain left" role="presentation"></div>
            <div className="tile curtain right" role="presentation"></div>
            <div className="tile ground" role="presentation"></div>
        </div>

    )
}

export default Background;