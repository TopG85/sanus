import { useEffect } from "react";
import { Link } from "react-router-dom";
import Prism from "../components/Prism/Prism";
import FeaturedProject from "../components/FeaturedProject/FeaturedProject";
import StarBorder from "../components/StarBorder/StarBorder";
import ClientReviews from "../components/ClientReviews/ClientReviews";

const SCORE_SCRIPT =
  "https://static.scoreapp.com/js/integration/v1/embedding.js?v=3jigi8";

export default function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = SCORE_SCRIPT;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

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
              as="button"
              type="button"
              className="btn"
              data-sa-url="https://d43d00e3-32ce-472a-b9be-2a692fd6317f.scoreapp.com/?sa_hide_header=1&sa_hide_footer=1"
              data-sa-view="popup"
              data-sa-size="full"
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
              color="#3b17ff"
              trailColor="#3b17ff"
              duration={10}
              stars={1}
              trailLength={1.2}
              thickness={3}
              radius={28}
              glow={1}
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

        <ClientReviews />
      </main>
    </>
  );
}
