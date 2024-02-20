import "./About.css";
import star from "../images/star_mini.svg";

function About() {
  return (
    <section className="about-section">
      <div className="about-text">
        <h3>Why choose us</h3>
        <h1>Fruit Juice enrich your body with nutrients and proteins</h1>
        <p className="about-info">
          JuiceHaven Express is an innovative concept that aims to bring fresh
          juice, smoothies, and pastries to the bustling urban landscape of
          Nigeria.
        </p>

        <button className="button">Read more</button>
      </div>
      <div className="about_features">
        <div className="feature">
          <img src={star} alt="organic fruit" />
          <div className="feature-text">
            <h4>100% Organic fruit juice & vegetable</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum
            </p>
          </div>
        </div>
        <div className="feature">
          <img src={star} alt="organic fruit" />
          <div className="feature-text">
            <h4>100% Organic fruit juice & vegetable</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum
            </p>
          </div>
        </div>
        <div className="feature">
          <img src={star} alt="organic fruit" />
          <div className="feature-text">
            <h4>100% Organic fruit juice & vegetable</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
