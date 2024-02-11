import star from "../images/Star.svg";

function Testi({ image, name, review }) {
  return (
    <div>
      <img src={image} alt="avatar" />
      <div>
        <h2>{name}</h2>
        <img src={star} alt="review star" />
      </div>

      <p>{review}</p>
    </div>
  );
}

export default Testi;
