import "./Nav.css";

function Nav() {
  return (
    <nav className="Nav">
      <ul className="Nav-items">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#reservation">Reservation</a>
        </li>
        <li>
          <a href="#online_order">Online Order</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
