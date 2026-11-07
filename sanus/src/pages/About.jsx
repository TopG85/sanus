import { Link } from "react-router-dom";
import portrait from "../assets/me.webp";
import StarBorder from "../components/StarBorder/StarBorder";

const techs = [
  {
    name: "HTML5",
    icon: "https://cdn.simpleicons.org/html5/E34F26",
    href: "https://mozilla.org",
  },
  {
    name: "CSS3",
    icon: "https://cdn.simpleicons.org/css/1572B6",
    href: "https://mozilla.org",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.simpleicons.org/javascript/F7DF1E",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "Bootstrap",
    icon: "https://cdn.simpleicons.org/bootstrap/7952B3",
    href: "https://getbootstrap.com",
  },
  {
    name: "Python",
    icon: "https://cdn.simpleicons.org/python/3776AB",
    href: "https://python.org",
  },
  {
    name: "Django",
    icon: "https://cdn.simpleicons.org/django/44B78B",
    href: "https://djangoproject.com",
  },
];

const coreValues = [
  {
    title: "Empathy-led problem solving",
    text: "I listen first, taking the time to properly understand a problem rather than assuming or overwhelming clients with jargon.",
  },
  {
    title: "Honesty over hype",
    text: "I give straight, accurate advice, and I'm upfront when something needs correcting rather than doubling down.",
  },
  {
    title: "Creativity + logic combined",
    text: "My photography background isn't separate from my development work. It shapes how I think about visual brands, user experience and storytelling.",
  },
  {
    title: "Growth-minded",
    text: "My own career journey, from photography into software development, reflects a belief in real growth over staying comfortable.",
  },
  {
    title: "Accessible expertise",
    text: "I believe good technical help shouldn't be out of reach, and I care about genuinely helping people, not just billing hours.",
  },
];

export default function About() {
  return (
    <section className="about-page">
      <header className="about-hero">
        <img
          src={portrait}
          alt="Daniel Carson portrait"
          className="about-portrait"
        />
        <h1>About</h1>
        <p>
          I'm Daniel, a web designer and developer and the founder of Sanus,
          formerly Carson Web Studio. I design and build modern, responsive
          websites with a focus on clarity, usability and thoughtful visual
          design.
        </p>
      </header>

      <section className="about-block">
        <h2>Why Sanus?</h2>
        <p>
          Sanus is an anagram of Susan, my mum's name, and it is also a Latin
          adjective meaning healthy, sane, sound or sensible.
        </p>
        <p>
          The name reflects how I want to work: creating websites that are
          healthy for a business, sound in their technical foundations and
          sensible for the people who use and maintain them.
        </p>
      </section>

      <section className="about-block">
        <h2>My approach</h2>
        <ul className="about-list">
          <li>
            <strong>Clarity:</strong> Making sure visitors can easily find the
            information they need.
          </li>
          <li>
            <strong>Visual design:</strong> Creating layouts that are clean,
            balanced and engaging.
          </li>
          <li>
            <strong>Usability:</strong> Building responsive websites that work
            well across all devices.
          </li>
        </ul>
      </section>

      <section className="about-block">
        <h2>Mission</h2>
        <p>
          To help small businesses become genuinely visible and successful
          online, combining technical skill with creative and visual
          understanding. Expert-level web and SEO help should be accessible to
          people who might otherwise be priced out or overlooked by big
          agencies.
        </p>

        <h3>Core values</h3>
        <ol className="about-list">
          {coreValues.map((value) => (
            <li key={value.title}>
              <strong>{value.title}:</strong> {value.text}
            </li>
          ))}
        </ol>
      </section>

      <section className="about-block">
        <h2>Positioning</h2>
        <p>
          I'm not "just another developer" or "just another photographer". I sit
          at the intersection: a creative technologist who understands both how
          something looks and how it works. My background means I can speak to
          creative small businesses and photographers in a way a purely
          technical developer often can't. I've been in their shoes.
        </p>

        <h2>Unique value proposition</h2>
        <p>
          "I help creative and small businesses fix what's holding their website
          back, combining a developer's technical eye with a photographer's
          understanding of visual storytelling, so they're not just online, but
          actually found."
        </p>
      </section>

      <section className="about-block">
        <h2>Background</h2>
        <p>
          Before moving into web development, I spent several years working as a
          natural light portrait and fashion photographer. That experience
          developed my eye for composition, colour and visual storytelling,
          skills that now influence the way I approach web design. My work and
          technical workflows were even featured nationally in{" "}
          <a
            href="https://amateurphotographer.com/technique/portrait_photography/how-to-capture-stunning-portraits-in-natural-light/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Amateur Photographer Magazine
          </a>
          .
        </p>
        <p>
          I recently completed a Full Stack Software Development Diploma with
          Code Institute, where I developed practical skills in building
          responsive websites and web applications using:
        </p>

        <div className="about-tech">
          {techs.map((tech) => (
            <a
              key={tech.name}
              href={tech.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={tech.icon} alt="" />
              {tech.name}
            </a>
          ))}
        </div>

        <p>
          Through Sanus, I enjoy helping churches, charities and community
          organisations create websites that clearly communicate who they are
          and make it easy for people to connect with them.
        </p>
      </section>

      <div className="about-actions">
        <StarBorder
          as={Link}
          to="/contact"
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
          Get in touch
        </StarBorder>
      </div>
    </section>
  );
}
