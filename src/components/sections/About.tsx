import Foreground from "./about/Foreground";
import Background from "./about/Background";

let bonus: boolean = false;
let isAnimating: boolean = false;
let curScene: number = 1;


const ee = (): void => {
    document.getElementById("about")?.classList.add("space");
    
    // Changes post scene change
    setTimeout(() => {
        bonus = true;
        curScene++;
        document.querySelectorAll<HTMLElement>(".brick").forEach(e=>{e.classList.remove('brick');});
        document.getElementById("about")?.setAttribute('data-current-scene', curScene.toString());
        document.querySelector("#about h2 span.special")?.classList.remove('special');
        document.querySelectorAll<HTMLElement>('#about p[data-scene="1"]')?.forEach((e)=>e.style.opacity = '0');
        document.querySelectorAll<HTMLElement>('#about p[data-scene="2"]')?.forEach((e)=>e.style.opacity = '1');
    }, 3000);
}



const About = () => {
    return (
        <section id="about" data-current-scene="1">
            <Foreground brickCallback={ee}/>            
            <Background />
        </section>
    )
}

export default About;