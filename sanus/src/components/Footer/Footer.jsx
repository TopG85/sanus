import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Sanus</h3>
          <p>
            Professional web design and development for churches, charities and
            small businesses.
          </p>
        </div>
         
        <div className="footer-section">
          <h3>Quick Links</h3> 
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        </div>
         
        <div className="footer-section">
          <h3>Opening Hours</h3> 
          <ul>
            <li>Monday - Friday</li>
            <li>09:00 - 17:00</li>
            <li>Weekend - Closed</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
