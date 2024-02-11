import about_img_1 from "../images/restaurant chef B.jpg";
import about_img_2 from "../images/lemon dessert.jpg";

function About() {
  return (
    <section className="about">
      <div className="about_text">
        <h1>JuiceHaven</h1>
        <h3>Express</h3>
        <p>
          JuiceHaven Express is an innovative concept that aims to bring fresh
          juice, smoothies, and pastries to the bustling urban landscape of
          Nigeria.
        </p>
        <p>
          JuiceHaven Express is an innovative concept that aims to bring fresh
          juice, smoothies, and pastries to the bustling urban landscape of
          Nigeria.
        </p>

        <button className="button">Read more</button>
      </div>
      <div className="about_image">
        <img src={about_img_1} alt="caterer one" />
        <img src={about_img_2} alt="caterer two" />
      </div>
    </section>
  );
}

export default About;
