import Testi from "./Testi";
import avatar1 from "../images/test_1.svg";
import avatar2 from "../images/test_2.png";
import avatar3 from "../images/test_3.png";
import avatar4 from "../images/test_4.png";

function Testimonial(props) {
  return (
    <div>
      <h1>Testimonial</h1>
      <div className="testimonials">
        <Testi
          image={avatar1}
          name="jane Doe"
          review="My favorite juice is the mint haven flavor, really loved how refreshing it tastes. Definitely buying again!"
        />
        <Testi
          image={avatar2}
          name="jane Doe"
          review="My favorite juice is the mint haven flavor, really loved how refreshing it tastes. Definitely buying again!"
        />
        <Testi
          image={avatar3}
          name="jane Doe"
          review="My favorite juice is the mint haven flavor, really loved how refreshing it tastes. Definitely buying again!"
        />
        <Testi
          image={avatar4}
          name="jane Doe"
          review="My favorite juice is the mint haven flavor, really loved how refreshing it tastes. Definitely buying again!"
        />
      </div>
    </div>
  );
}

export default Testimonial;
