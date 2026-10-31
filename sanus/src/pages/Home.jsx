import Prism from "../components/Prism/Prism";
import FeaturedProject from "../components/FeaturedProject/FeaturedProject";

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
            hueShift={2}
            colorFrequency={2}
            glow={1.5}
            colors={["#152641", "#3b17ff", "#c3f84a"]}
            saturation={2.3}
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
          <p className="hero-kicker">
            Websites for organisations with better things to do.
          </p>
          <h1 className="hero-title">
            WEBSITE THAT GET YOU FOUND AND TRUSTED.
          </h1>
          <p className="hero-lead">
            I design and build websites for churches, charities and
            organisations. No jargon, no mystery buttons and no website
            archaeology.
          </p>
          <div className="hero-actions">
            <a href="#" className="btn">
              Website Check-up
            </a>
            <a href="#" className="btn btn-outline">
              Talk to me
            </a>
          </div>
        </div>
      </main>

      <section className="how-section">
        <h2 className="how-title">How I help</h2>
        <div className="how-grid">
          <div className="how-card">
            <h3>Design</h3>
            <p>
              Clear, mobile-friendly layouts shaped around what your visitors
              actually need to find.
            </p>
          </div>
          <div className="how-card">
            <h3>Build</h3>
            <p>
              Fast, reliable websites built properly, from small landing pages
              to full sites with a CMS.
            </p>
          </div>
          <div className="how-card">
            <h3>Handover</h3>
            <p>
              You get a site you can edit yourself, so you stay in control after
              launch.
            </p>
          </div>
        </div>
      </section>

      <section className="featured-section">
        <FeaturedProject />
      </section>
    </>
  );
}
