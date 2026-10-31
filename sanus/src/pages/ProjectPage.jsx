import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

const typeLabels = {
  client: "Client project",
  personal: "Personal project",
  hackathon: "Hackathon",
};

const techIcons = {
  "Wagtail CMS": "https://cdn.simpleicons.org/wagtail/43B1B0",
  Python: "https://cdn.simpleicons.org/python/3776AB",
  "Tailwind CSS": "https://cdn.simpleicons.org/tailwindcss/06B6D4",
  JavaScript: "https://cdn.simpleicons.org/javascript/F7DF1E",
  "Google Calendar API": "https://cdn.simpleicons.org/googlecalendar/4285F4",
  "React Native": "https://cdn.simpleicons.org/react/61DAFB",
  "Expo Go": "https://cdn.simpleicons.org/expo/FFFFFF",
  "HTML5 Canvas": "https://cdn.simpleicons.org/html5/E34F26",
  HTML5: "https://cdn.simpleicons.org/html5/E34F26",
  HTML: "https://cdn.simpleicons.org/html5/E34F26",
  CSS: "https://cdn.simpleicons.org/css/1572B6",
  Django: "https://cdn.simpleicons.org/django/44B78B",
  Bootstrap: "https://cdn.simpleicons.org/bootstrap/7952B3",
  Cloudinary: "https://cdn.simpleicons.org/cloudinary/3448C5",
  Heroku: "https://cdn.simpleicons.org/heroku/FFFFFF",
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
      {project.role && <p className="detail-role">Role: {project.role}</p>}

      {project.image && (
        <img
          src={project.image}
          alt={`${project.title} website`}
          className="detail-image"
        />
      )}

      <p className="detail-summary">{project.summary}</p>

      {project.overview && (
        <>
          <h2 className="detail-heading">Project overview</h2>
          <p className="detail-text">{project.overview}</p>
        </>
      )}

      {project.problem?.length > 0 && (
        <>
          <h2 className="detail-heading">The problem</h2>
          <ul className="detail-points">
            {project.problem.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </>
      )}

      {project.points?.length > 0 && (
        <>
          <h2 className="detail-heading">What I built</h2>
          <ul className="detail-points">
            {project.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </>
      )}

      {project.solution?.length > 0 && (
        <>
          <h2 className="detail-heading">The solution</h2>
          <ul className="detail-points">
            {project.solution.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </>
      )}

      {project.features?.length > 0 && (
        <>
          <h2 className="detail-heading">Key features</h2>
          <div className="detail-features">
            {project.features.map((feature) => (
              <div key={feature.title} className="detail-feature">
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
                {feature.image && (
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="feature-shot"
                  />
                )}
              </div>
            ))}
          </div>
        </>
      )}

      {project.technologies?.length > 0 && (
        <>
          <h2 className="detail-heading">Technologies</h2>
          <ul className="detail-tech">
            {project.technologies.map((t) => (
              <li key={t}>
                {techIcons[t] && <img src={techIcons[t]} alt="" />}
                {t}
              </li>
            ))}
          </ul>
        </>
      )}

      {project.beforeImages?.length > 0 && (
        <>
          <h2 className="detail-heading">Before the redesign</h2>
          <div className="before-grid">
            {project.beforeImages.map((shot, i) => (
              <figure key={i} className="shot">
                <img
                  src={shot.src}
                  alt={`${project.title} before the redesign: ${shot.caption}`}
                />
                <figcaption>{shot.caption}</figcaption>
              </figure>
            ))}
          </div>
        </>
      )}

      {project.afterImages?.length > 0 && (
        <>
          <h2 className="detail-heading">After the redesign</h2>
          <div className="before-grid">
            {project.afterImages.map((shot, i) => (
              <figure key={i} className="shot">
                <img
                  src={shot.src}
                  alt={`${project.title} after the redesign: ${shot.caption}`}
                />
                <figcaption>{shot.caption}</figcaption>
              </figure>
            ))}
          </div>
        </>
      )}

      {project.outcome && (
        <>
          <h2 className="detail-heading">Outcome</h2>
          <p className="detail-text">{project.outcome}</p>
        </>
      )}

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
