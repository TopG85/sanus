import { useState } from "react";
import { Link } from "react-router-dom";
import BorderGlow from "../components/BorderGlow/BorderGlow";
import PixelCard from "../components/PixelCard/PixelCard";
import { projects } from "../data/projects";

const filters = [
  { key: "all", label: "All projects" },
  { key: "client", label: "Client" },
  { key: "personal", label: "Personal" },
  { key: "hackathon", label: "Hackathons" },
];

const typeLabels = {
  client: "Client project",
  personal: "Personal project",
  hackathon: "Hackathon",
};

export default function Projects() {
  const [active, setActive] = useState("all");
  const shown = projects.filter((p) => active === "all" || p.type === active);

  return (
    <section className="projects-page">
      <h1 className="projects-title">Projects</h1>

      <div
        className="projects-toggle"
        role="group"
        aria-label="Filter projects"
      >
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            className={
              active === f.key ? "toggle-btn toggle-btn--active" : "toggle-btn"
            }
            onClick={() => setActive(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {shown.map((p) => (
          <BorderGlow
            key={p.slug}
            className="project-glow"
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
            <PixelCard
              className="project-pixel"
              colors={["#e8f4fc", "#c3f84a", "#3b17ff"]}
              glowColor="#3b17ff"
              shape="square"
              origin="center"
              gap={15}
              pixelSize={5}
              speed={72}
              revealDuration={600}
              spotlight={1}
              glow={0.9}
              opacity={0.8}
              fade={0}
              trigger="always"
              radius={30}
              clickPulse
              intro
              theme="dark"
            >
              <Link to={`/projects/${p.slug}`} className="project-card">
                <p className="project-type">{typeLabels[p.type]}</p>
                <h2>{p.title}</h2>
                <p>{p.summary}</p>
              </Link>
            </PixelCard>
          </BorderGlow>
        ))}
      </div>
    </section>
  );
}
