import { Link } from "react-router-dom";
import BorderGlow from "../BorderGlow/BorderGlow";
import PixelCard from "../PixelCard/PixelCard";
import vinelifeShot from "../../assets/vinelifescreenshot.webp";
import "./FeaturedProject.css";
import StarBorder from "../StarBorder/StarBorder";

export default function FeaturedProject() {
  return (
    <BorderGlow
      className="featured"
      edgeSensitivity={30}
      glowColor="78 92 63"
      backgroundColor="#0b0f2e"
      borderRadius={20}
      glowRadius={60}
      glowIntensity={3.0}
      coneSpread={25}
      animated={true}
      colors={["#c3f84a", "#c3f84a", "#c3f84a"]}
    >
      <div className="featured-grid">
        <div className="featured-image">
          <span className="featured-badge">Featured</span>
          <img src={vinelifeShot} alt="Vinelife Church Wilmslow website" />
        </div>

        <PixelCard
          className="featured-pixel"
          colors={["#e8f4fc", "#c3f84a", "#3b17ff"]}
          glowColor="#3b17ff"
          shape="circle"
          origin="center"
          gap={17}
          pixelSize={10}
          speed={55}
          revealDuration={600}
          spotlight={1}
          glow={0.9}
          opacity={0.8}
          fade={1}
          trigger="always"
          radius={28}
          clickPulse
          intro
          theme="dark"
        >
          <div className="featured-body">
            <h3 className="featured-label">Featured client project</h3>
            <h2>Vinelife Church Wilmslow</h2>
            <p className="featured-text">
              A live client website with a custom Wagtail CMS, giving the church
              full content control after handover.
            </p>
            <StarBorder
              as={Link}
              to="/projects/vinelife"
              className="btn"
              color="#3b17ff"
              trailColor="#3b17ff"
              duration={10}
              direction="clockwise"
              stars={1}
              trailLength={1.2}
              thickness={2}
              radius={28}
              glow={1}
              hover="brighten"
              sparkle
              clickPulse
              theme="dark"
            >
              Read the write-up
            </StarBorder>
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
