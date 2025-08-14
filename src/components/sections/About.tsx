const About = () => {
    return (
        <section id="about" data-current-scene="1">
              <div className="contain" role="presentation">
                  <h2>
                      <span className="brick" role="presentation">A</span>
                      <span className="brick" role="presentation">B</span>
                      <span className="brick special" role="presentation">O</span>
                      <span className="brick" role="presentation">U</span>
                      <span className="brick" role="presentation">T</span>
                  </h2>
                  <p className="platform" data-scene="1">I am a full-stack developer with over 20 years of experience creating accessible, comprehensive, scalable, and user-friendly web solutions. With a strong foundation in both front-end and back-end development, I approach design challenges with straight-forward, maintainable solutions tailored to each client's needs. I have developed and maintained small and large-scale websites for organizations of all sizes—from local non-profits to national brands like Comcast/Xfinity and AARP—supporting businesses, schools, and legal groups throughout the greater Philadelphia area.</p>
                  <p className="platform" data-scene="1">When I’m not working or cheering on my kids at their sports events, I enjoy gaming on my custom-built PC, building and designing with LEGO, and exploring both real-life and in-game photography. I’ve been passionate about programming since I was a kid, drawn by its mix of logic and creativity. Over the years, I’ve explored various programming languages that satisfied my love of problem-solving and offered new ways to bring ideas to life.</p>
                  <p className="platform eegg" data-scene="2">I also enjoy including Easter Eggs in fun projects, but who doesn't?</p>
              </div>
              <div className="monitor" role="presentation">
                  <img className="asset" id="cloud" data-type="sprite" src="images/about/cloud_sprite.png" alt=""/>
                  <img className="asset" id="playerSprite" data-type="sprite" src="images/about/LEGO-sprite.png" alt=""/>
                  <div className="shrub" role="presentation"></div>
                  <div className="shrub" role="presentation"></div>
                  <div className="tile curtain left" role="presentation"></div>
                  <div className="tile curtain right" role="presentation"></div>
                  <div className="tile ground" role="presentation"></div>
              </div>
        </section>
    )
}

export default About;