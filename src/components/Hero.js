import hero_image from "../images/hero_image.png";
import "./Hero.css";

function Hero() {
  return (
    <section className="Hero">
      <div className="hero-text">
        <h1>JuiceHaven</h1>
        <h3>Express</h3>
        <p className="hero-body-text">
          JuiceHaven Express is an innovative concept that aims to bring fresh
          juice, smoothies, and pastries to the bustling urban landscape of
          Nigeria.
        </p>
        <button>Reserve a table</button>
      </div>
      <div className="hero-image">
        <img
          className="hero-image-main"
          src={hero_image}
          alt="hero-juice bottle"
        ></img>
      </div>
    </section>
  );
}

export default Hero;
