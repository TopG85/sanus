import { useEffect } from "react";
import { Link } from "react-router-dom";
import PixelSnow from "../components/PixelSnow/PixelSnow";
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
    <main className="hero">
      <div className="hero-bg" aria-hidden="true">
        <PixelSnow
          color="#e8f4fc"
          variant="snowflake"
          density={0.5}
          speed={1}
          wind={1.25}
          flakeSize={1.2}
          pixelSize={3}
          glow={1.65}
          mouseInteraction
          sway={0.5}
          twinkle={1}
          accumulate
          depth={0.95}
          brightness={2}
          fade={0}
          opacity={1}
          intro
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
            as={Link}
            to="/contact"
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
  );
}
