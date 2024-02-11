import logo from "../images/Logo.svg";
import Nav from "../components/Nav";

function Header() {
  return (
    <header>
      <img src={logo} className="logo" alt="App Logo" />
      <Nav />
    </header>
  );
}

export default Header;
