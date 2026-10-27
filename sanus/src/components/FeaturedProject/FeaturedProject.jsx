import { Link } from "react-router-dom";
import BorderGlow from "../BorderGlow/BorderGlow";
import PixelCard from "../PixelCard/PixelCard";
import vinelifeShot from "../../assets/vinelifescreenshot.webp";
import "./FeaturedProject.css";

export default function FeaturedProject() {
  return (
    <BorderGlow
      className="featured"
      edgeSensitivity={30}
      glowColor="330 100 60"
      backgroundColor="#0b0f2e"
      borderRadius={20}
      glowRadius={60}
      glowIntensity={3.0}
      coneSpread={25}
      animated={true}
      colors={["#c084fc", "#f472b6", "#38bdf8"]}
    >
      <div className="featured-grid">
        <div className="featured-image">
          <span className="featured-badge">Featured</span>
          <img src={vinelifeShot} alt="Vinelife Church Wilmslow website" />
        </div>

        <PixelCard
          className="featured-pixel"
          colors={["#00e5ff", "#ff8c42", "#ff2e97"]}
          glowColor="#9484ff"
          shape="square"
          origin="center"
          gap={15}
          pixelSize={10}
          speed={72}
          revealDuration={600}
          spotlight={1}
          glow={1}
          opacity={0.8}
          fade={0}
          trigger="always"
          radius={25}
          clickPulse
          intro
          theme="dark"
        >
          <div className="featured-body">
            <p className="featured-label">Featured client project</p>
            <h2>Vinelife Church Wilmslow</h2>
            <p className="featured-text">
              A live client website with a custom Wagtail CMS, giving the church
              full content control after handover.
            </p>
            <Link to="/projects/vinelife" className="btn">
              Read the write-up
            </Link>
          </div>
        </PixelCard>
      </div>

      <div className="featured-footer">
        <Link to="/projects" className="featured-link">
          See all projects →
        </Link>
      </div>
    </BorderGlow>
  );
}
