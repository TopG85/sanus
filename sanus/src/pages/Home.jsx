import Prism from "../components/Prism/Prism";
import FeaturedProject from "../components/FeaturedProject/FeaturedProject";
import StarBorder from "../components/StarBorder/StarBorder";

export default function Home() {
  return (
    <>
      <main className="hero">
        <div className="hero-bg" aria-hidden="true">
          <Prism
            animationType="3drotate"
            timeScale={0.45}
            height={3.5}
            baseWidth={5.5}
            scale={4.6}
            hueShift={1.5}
            colorFrequency={1.5}
            glow={0.9}
            colors={["#152641", "#3b17ff", "#e8f4fc", "#c3f84a"]}
            saturation={1.5}
            noise={0}
            interactive
            hoverStrength={2}
            inertia={0.05}
            intro
            resolution={0.5}
            lightMode={false}
          />
        </div>

        <div className="hero-content">
          <p className="hero-kicker">Web design for churches and charities</p>
          <h1 className="hero-title">
            Websites that bring people through the door.
          </h1>
          <p className="hero-lead">
            Clear, welcoming sites for churches, charities and organisations,
            built to be found and easy to use.
          </p>
          <div className="hero-actions">
            <StarBorder
              className="btn"
              color="#c3f84a"
              trailColor="#c3f84a"
              duration={10}
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
              Website Check-up
            </StarBorder>
            <StarBorder
              className="btn btn-outline"
              color="#c3f84a"
              trailColor="#c3f84a"
              duration={8}
              stars={1}
              trailLength={1.2}
              thickness={2}
              radius={28}
              glow={2}
              hover="brighten"
              sparkle
              clickPulse
              theme="dark"
            >
              Talk to me
            </StarBorder>
          </div>
          <p className="hero-price">
            Websites from £295. Clear, fixed-scope options for churches and
            charities.
          </p>
        </div>

        <div className="hero-feature">
          <FeaturedProject />
        </div>
      </main>
    </>
  );
}
