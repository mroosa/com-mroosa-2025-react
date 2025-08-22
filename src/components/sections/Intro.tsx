import { movingBackgrounds } from "./hooks/movingBackgrounds";
const Intro = () => {

    const {midPos, backPos} = movingBackgrounds();
   
    const backgroundPos = `center, ${Math.floor(backPos)}px center, ${Math.floor(midPos * 2) + 300}px top, ${Math.floor(backPos * 2)}px center, center`;

    return (
        <section id="intro" style={{backgroundPosition:backgroundPos}}>
            <h1>Matthew Roosa</h1>
            <p>Full-Stack Developer</p>
        </section>
    )
}

export default Intro;