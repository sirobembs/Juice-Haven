import Hero from "./Hero";
import Juice from "./Juice";
import Testimonial from "./Testimonial";
import About from "./About";
import orange_juice from "../images/fruit_juice.png";
import "./Body.css";

function Body(props) {
  return (
    <body className="Body">
      <section className="Hero-section">
        <Hero />
      </section>
      <section className="product-section">
        <div id="menu" className="product-title">
          <h3>This week special! </h3>
          <button>Online Menu</button>
        </div>
        <div className="product-list">
          <Juice
            image={orange_juice}
            price={2000}
            juice_name="Mint Haven"
            juice_dsc="A fine mix of Cucumber and Pineapple to give that refressing taste and feel."
          />
          <Juice
            image={orange_juice}
            price={2000}
            juice_name="Tropical Boost"
            juice_dsc="A fine mix of Cucumber and Pineapple to give that refressing taste and feel."
          />
          <Juice
            image={orange_juice}
            price={2800}
            juice_name="Green Detox"
            juice_dsc="A fine mix of Cucumber and Pineapple to give that refressing taste and feel."
          />
          <Juice
            image={orange_juice}
            price={2500}
            juice_name="Melon Wonder"
            juice_dsc="A fine mix of Cucumber and Pineapple to give that refressing taste and feel."
          />
        </div>
      </section>
      <section className="testimonial-section">
        <Testimonial />
      </section>
      <section className="about-section">
        <About />
      </section>
    </body>
  );
}

export default Body;
