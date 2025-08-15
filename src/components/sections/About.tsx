import Foreground from "./about/Foreground";
import Background from "./about/Background";

const About = () => {
    return (
        <section id="about" data-current-scene="1">
            <Foreground />            
            <Background />
        </section>
    )
}

export default About;