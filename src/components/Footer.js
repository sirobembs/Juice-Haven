import logo from "../images/Logo .svg";
import Nav from "../components/Nav";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <img src={logo} alt="little lemon logo" />
        <p>Top fruit hut</p>
      </div>
      <div></div>
      <div>
        <h5>Locate Us</h5>
        <p>14, Jimoh Balogun Street. Lagos, Nigeria</p>
        <h5>Contact Us</h5>
        <p>+2349035915128</p>
      </div>
      <div>
        <h3>Follow Us</h3>
        <p>@Juicehavenexpress</p>
        <p>@Juicehavenexpress</p>
        <p>@Juicehavenexpress</p>
      </div>
    </footer>
  );
}

export default Footer;
