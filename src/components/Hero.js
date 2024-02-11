import hero_image from "../images/hero_image.png";

function Hero() {
  return (
    <section>
      <div className="hero-text">
        <h1>JuiceHaven</h1>
        <h3>Express</h3>
        <p>
          JuiceHaven Express is an innovative concept that aims to bring fresh
          juice, smoothies, and pastries to the bustling urban landscape of
          Nigeria.
        </p>
        <button>Reserve a table</button>
      </div>
      <div className="hero-image">
        <img src={hero_image} alt="hero-juice bottle"></img>
      </div>
    </section>
  );
}

export default Hero;
