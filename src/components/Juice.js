import cart from "../images/cart.svg";
import wishlist from "../images/wishlist.svg";
import "./Juice.css";

function Juice({ image, price, juice_name, juice_dsc }) {
  return (
    <div className="product">
      <div>
        <div className="price">
          <h4>{price}</h4>
          <p>750ml</p>
        </div>
        <div>
          <img className="product-img" src={image} alt="orange_juice"></img>
        </div>
      </div>
      <div className="product-name">
        <h4>{juice_name}</h4>
        <p>{juice_dsc}</p>
        <div className="product-cart">
          <button className="product-button">
            <img src={cart} alt="cart icon" />
            <p>Add to cart</p>
          </button>
          <img className="product-wishlist" src={wishlist} alt="wishlist" />
        </div>
      </div>
    </div>
  );
}

export default Juice;
