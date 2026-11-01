import "./Footer.css";
import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Website Check-up", to: "/checkup" },
  { label: "Projects", to: "/projects" },
  { label: "Pricing", to: "/pricing" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "Leave a Review", to: "/reviews" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <h2>SANUS</h2>
          <p>Healthy, Sane, Sound & Sensible.</p>
          <p>Websites for churches, charities and organisations.</p>
        </div>

        <nav className="footer-links" aria-label="Footer quick links">
          <h3>Quick links</h3>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-hours">
          <h3>Opening hours</h3>
          <p>
            Monday to Friday
            <br />
            <strong>9:00 am – 5:00 pm</strong>
          </p>
          <p>
            Saturday and Sunday
            <br />
            <strong>Closed</strong>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Sanus. All rights reserved.</p>
      </div>
    </footer>
  );
}
