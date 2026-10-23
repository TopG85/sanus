import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

const typeLabels = {
  client: "Client project",
  personal: "Personal project",
  hackathon: "Hackathon",
};

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="detail-page">
        <p>Project not found.</p>
        <Link to="/projects" className="detail-back">
          Back to projects
        </Link>
      </section>
    );
  }

  return (
    <section className="detail-page">
      <Link to="/projects" className="detail-back">
        ← Back to projects
      </Link>

      <p className="detail-type">{typeLabels[project.type]}</p>
      <h1 className="detail-title">{project.title}</h1>
      <p className="detail-date">{project.date}</p>
      <p className="detail-summary">{project.summary}</p>

      <h2 className="detail-heading">Technologies</h2>
      <ul className="detail-tech">
        {project.technologies.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>

      <h2 className="detail-heading">What I built</h2>
      <ul className="detail-points">
        {project.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>

      {project.results && (
        <>
          <h2 className="detail-heading">Results</h2>
          <p className="detail-summary">{project.results}</p>
        </>
      )}

      <div className="detail-links">
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Live site
        </a>
        <a
          href={project.code}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
        >
          Code
        </a>
      </div>
    </section>
  );
}
