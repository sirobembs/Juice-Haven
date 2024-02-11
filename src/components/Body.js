import Hero from "./Hero";
import Juice from "./Juice";
import Testimonial from "./Testimonial";
import About from "./About";
import orange_juice from "../images/fruit_juice.png";

function Body(props) {
  return (
    <body>
      <section>
        <Hero />
      </section>
      <section>
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
      </section>
      <section>
        <Testimonial />
      </section>
      <section>
        <About />
      </section>
    </body>
  );
}

export default Body;
