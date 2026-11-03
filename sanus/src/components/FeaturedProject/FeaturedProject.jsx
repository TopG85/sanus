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
          colors={["#c3f84a", "#e8f4fc", "#3b17ff"]}
          glowColor="#e8f4fc"
          shape="square"
          origin="center"
          gap={15}
          pixelSize={5}
          speed={72}
          revealDuration={600}
          spotlight={1}
          glow={0}
          opacity={0.8}
          fade={0}
          trigger="always"
          radius={30}
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
              color="#c3f84a"
              trailColor="#c3f84a"
              duration={4.5}
              direction="clockwise"
              stars={1}
              trailLength={0.8}
              thickness={3}
              radius={18}
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
