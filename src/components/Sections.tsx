import { useState, useEffect } from 'react';
import Intro from './sections/Intro';
import Contact from './sections/Contact';
import Work from './sections/Work';
import About from './sections/About';


const Sections = () => {

    // Set values for moving backgrounds
    const [origX, setOrigX] = useState(0);
    const [midPos, setMidPos] = useState(window.innerWidth / 2);
    const [backPos, setBackPos] = useState(window.innerWidth / 2);

    const handleMouseMovement = (e:MouseEvent) => {
        const dir = e.clientX > origX ? 1: -1;
        setMidPos(midPos => midPos - dir/3);
        setBackPos(backPos => backPos - dir/9);
        // monitor.style.backgroundPosition = `${midGround}px 95%, ${backGround}px 100%`;
        // intro.style.backgroundPosition = `center, ${Math.floor(backGround)}px center, ${Math.floor(midGround * 2) + 300}px top, ${Math.floor(backGround * 2)}px center, center`;
        setOrigX(e.clientX);
    }

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMovement);
        return () => {
            window.removeEventListener("mousemove", handleMouseMovement);
        }
    }, [handleMouseMovement])
    

    return (
        <main>
            <Intro midPos={midPos} backPos={backPos} />
            <About midPos={midPos} backPos={backPos}  />
            <Work />
            <Contact />
        </main>
    )
}

export default Sections;