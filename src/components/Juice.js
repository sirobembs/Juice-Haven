import cart from "../images/cart.svg";
import wishlist from "../images/wishlist.svg";

function Juice({ image, price, juice_name, juice_dsc }) {
  return (
    <div className="product">
      <div>
        <div className="price">
          <h3>{price}</h3>
          <p>750ml</p>
        </div>
        <img src={image} alt="orange_juice"></img>
      </div>
      <div>
        <h3>{juice_name}</h3>
        <p>{juice_dsc}</p>
        <div className="button">
          <button>
            <img src={cart} alt="cart icon" />
            Add to cart
          </button>
          <img src={wishlist} alt="wishlist" />
        </div>
      </div>
    </div>
  );
}

export default Juice;
