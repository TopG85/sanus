import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">SANUS</div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Website Check-Up</li>
        <li>Projects</li>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
        <li>Leave Review</li>
      </ul>
    </nav>
  );
}

export default Navbar;
