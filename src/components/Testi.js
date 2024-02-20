import star from "../images/Star.svg";
import "./Testi.css";

function Testi({ image, name, review }) {
  return (
    <div className="testi-single">
      <img className="testi-img" src={image} alt="avatar" />
      <div className="testi-name">
        <h2>{name}</h2>
        <img src={star} alt="review star" />
      </div>

      <p className="review">{review}</p>
    </div>
  );
}

export default Testi;
