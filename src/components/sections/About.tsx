import { useEffect, useState } from "react";
import Foreground from "./about/Foreground";
import Background from "./about/Background";

// let isAnimating: boolean = false;

const About = () => {
    
    const [scene, setScene] = useState(1);
    // let bonus = false;

    // TODO: Make a hook for possibly more scenes
    const ee = (): void => {
        document.getElementById("about")?.classList.add("space");
        
        // Changes post scene change
        setTimeout(() => {
            // bonus = true;
            document.querySelectorAll<HTMLElement>(".brick").forEach(e => {e.classList.remove('brick')});
            document.querySelector("#about h2 span.special")?.classList.remove('special');
            setScene(2);
        }, 3000);
    }

    useEffect(() => {
        document.querySelectorAll<HTMLElement>(`#about p:not([data-scene="${scene}"])`)?.forEach((e) => e.style.opacity = '0');
        document.querySelectorAll<HTMLElement>(`#about p[data-scene="${scene}"]`)?.forEach((e) => e.style.opacity = '1');
    }, [scene])


    return (
        <section id="about" data-current-scene={scene}>
            <Foreground brickCallback={ee}/>            
            <Background />
        </section>
    )
}

export default About;