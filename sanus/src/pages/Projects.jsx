import { useState } from "react";
import { Link } from "react-router-dom";
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

      <div className="projects-toggle" role="group" aria-label="Filter projects">
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            className={active === f.key ? "toggle-btn toggle-btn--active" : "toggle-btn"}
            onClick={() => setActive(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {shown.map((p) => (
          <Link key={p.slug} to={`/projects/${p.slug}`} className="project-card">
            <p className="project-type">{typeLabels[p.type]}</p>
            <h2>{p.title}</h2>
            <p>{p.summary}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}