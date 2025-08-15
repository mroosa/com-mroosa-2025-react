import Brick from "./Brick";
import Platform from "./Platform";

const Foreground = () => {
    return (
        <div className="contain" role="presentation">
            <h2>
                <Brick letter="A" />
                <Brick letter="B" />
                <Brick letter="O" className="special" />
                <Brick letter="U" />
                <Brick letter="T" />
            </h2>
            <Platform scene="1">I am a full-stack developer with over 20 years of experience creating accessible, comprehensive, scalable, and user-friendly web solutions. With a strong foundation in both front-end and back-end development, I approach design challenges with straight-forward, maintainable solutions tailored to each client's needs. I have developed and maintained small and large-scale websites for organizations of all sizes—from local non-profits to national brands like Comcast/Xfinity and AARP—supporting businesses, schools, and legal groups throughout the greater Philadelphia area.</Platform>
            <Platform scene="1">When I’m not working or cheering on my kids at their sports events, I enjoy gaming on my custom-built PC, building and designing with LEGO, and exploring both real-life and in-game photography. I’ve been passionate about programming since I was a kid, drawn by its mix of logic and creativity. Over the years, I’ve explored various programming languages that satisfied my love of problem-solving and offered new ways to bring ideas to life.</Platform>
            <Platform className="eegg" scene="2">I also enjoy including Easter Eggs in fun projects, but who doesn't?</Platform>
        </div>

    )
}

export default Foreground;
