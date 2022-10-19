const Hero = ({
  heroapi: { title, subtitle, img, btntext, videos, sociallinks },
}) => {
  return (
    <div className="hero">
      <div className="hero-main-content">
        <div className="hero-clipath"></div>
        <div className="hero-text">
          <h2>{title}</h2>
          <h2>{subtitle}</h2>
          <button className="hero-btn">{btntext}</button>
        </div>
        <div className="hero-img">
          <img src={img} alt="hero-img/img" className="hero-img" />
        </div>
      </div>
      <div className="videos">
        {videos.map((val, i) => (
          <div className="clips center-elements" key={i}>
            <div className="icon center-elements">
              <i className="fa-solid fa-play"></i>
            </div>
            <img src={val.imgsrc} alt="" />
            <video autoPlay={true} loop={true} muted={true} playsInline={true}>
              <source type="video/mp4" src={val.clip} />
            </video>
          </div>
        ))}
      </div>
      <div className="social-links">
        {sociallinks.map((val, i) => (
          <img src={val.icon} className="icon" key={i} />
        ))}
      </div>
    </div>
  );
};

export default Hero;
