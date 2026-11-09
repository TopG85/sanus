import { Link } from "react-router-dom";
import BorderGlow from "../components/BorderGlow/BorderGlow";
import PixelCard from "../components/PixelCard/PixelCard";
import StarBorder from "../components/StarBorder/StarBorder";

const plans = [
  {
    name: "Starter",
    summary:
      "Small budgets, simple needs. A practical starting point for organisations that need focused help without committing to a larger project.",
    options: [
      {
        name: "Website audit",
        price: "£120–£300",
        includes: [
          "A review of clarity, usability, accessibility, performance and conversion",
          "Clear, prioritised recommendations",
        ],
      },
      {
        name: "Small brochure website",
        price: "From £295",
        includes: ["Up to 3 pages", "A clear, professional presentation"],
      },
      {
        name: "Landing page",
        price: "£400–£900",
        includes: [
          "A focused page for a service, event or campaign",
          "One clear business objective",
        ],
      },
    ],
  },
  {
    name: "Standard",
    summary:
      "Most clients. Complete website projects for organisations that need a professional, responsive and purposeful online presence.",
    options: [
      {
        name: "Standard custom website",
        price: "£1,500–£3,000",
        includes: [
          "A complete responsive website",
          "Designed around your organisation, audience and goals",
        ],
      },
      {
        name: "Website redesign",
        price: "£1,000–£3,000",
        includes: [
          "Improved layout, navigation and structure",
          "Better mobile usability and visual design",
        ],
      },
    ],
  },
  {
    name: "Premium",
    summary:
      "Bigger projects. Larger builds with more planning, functionality, strategy and development time.",
    options: [
      {
        name: "Larger custom website",
        price: "£3,000–£5,000+",
        includes: [
          "More pages and functionality",
          "Extra planning and development time",
        ],
      },
      {
        name: "Strategy-led build",
        price: "£3,000–£6,000+",
        includes: [
          "Content structure and user journeys",
          "Communication goals and design direction",
        ],
      },
    ],
  },
  {
    name: "Ongoing support",
    summary: "Help after launch, so your website stays up to date and secure.",
    options: [
      {
        name: "Monthly care plan",
        price: "£40–£150 per month",
        includes: [
          "Website updates and backups",
          "Security checks and small content changes",
        ],
      },
      {
        name: "Hourly support",
        price: "£50–£75 per hour",
        includes: [
          "One-off fixes and content updates",
          "Flexible help with technical tasks",
        ],
      },
    ],
  },
];

export default function Pricing() {
  return (
    <section className="pricing-page">
      <h1 className="pricing-title">Services and pricing</h1>
      <p className="pricing-intro">
        I design and build modern websites for churches, charities and
        organisations. Choose the service that best fits your project, budget
        and goals.
      </p>

      <div className="pricing-note pricing-why">
        <h2>Why a website takes time and costs what it does</h2>
        <p>
          Most websites start with a problem: visitors can't find what they
          need, the information is out of date, or the site doesn't work well on
          a mobile device. Fixing it means working out what's wrong first, then
          building a solution that works for your organisation and your
          visitors.
        </p>

        <h3>Why it takes time</h3>
        <h4>Understanding the problem</h4>
        <p>
          Before any design starts, I look at what your visitors need to do,
          what's working now and what isn't. Getting this right at the start
          prevents costly changes later.
        </p>
        <h4>Planning the structure and content</h4>
        <p>
          Each page needs a clear purpose and a logical place in the site.
          Planning how the pages connect is what makes a site easy to use, and
          it's much quicker to change a plan than a finished site.
        </p>
        <h4>Designing for every screen</h4>
        <p>
          Many visitors arrive on a phone, so layouts are designed and checked
          for phones, tablets and desktops, not just one screen size.
        </p>
        <h4>Building and testing</h4>
        <p>
          The site is built, then tested for speed, accessibility and how it
          behaves across different browsers and devices. Accessible sites work
          for people using screen readers, keyboards or larger text, and that
          takes deliberate checking.
        </p>
        <h4>Feedback and revisions</h4>
        <p>
          You review the site at each stage, and I make the changes you ask for.
          Each round of feedback adds time, but it's how the finished site ends
          up right for you.
        </p>
        <h4>Launch and handover</h4>
        <p>
          Setting up the domain, hosting and any content management system takes
          time, and so does showing you how to update your own pages.
        </p>

        <h3>Why it costs what it does</h3>
        <p>
          The price reflects the hours of skilled work each stage needs, plus
          the tools and services the site runs on. These are the main factors:
        </p>
        <ul>
          <li>The number of pages and how much new content each one needs</li>
          <li>Any features, such as calendars, forms, accounts or live data</li>
          <li>
            Whether you need a content management system so you can edit pages
            yourself
          </li>
          <li>
            How much of the content, photography and copy is ready at the start
          </li>
          <li>How many rounds of feedback and revisions the project needs</li>
        </ul>

        <h3>How long it takes</h3>
        <p>
          Smaller projects, such as a landing page or a few pages, can take a
          few weeks. Larger projects with more pages and features often take a
          few months. The biggest cause of delay is usually waiting for text,
          photos and feedback, so we agree a schedule at the start and keep it
          visible throughout.
        </p>
      </div>

      {plans.map((plan) => (
        <BorderGlow
          key={plan.name}
          className="plan-glow"
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
            className="plan-pixel"
            colors={["#e8f4fc", "#c3f84a", "#3b17ff"]}
            glowColor="#3b17ff"
            shape="circle"
            origin="center"
            gap={17}
            pixelSize={10}
            speed={55}
            revealDuration={600}
            spotlight={1}
            glow={0.9}
            opacity={0.8}
            fade={1}
            trigger="always"
            radius={28}
            clickPulse
            intro
            theme="dark"
          >
            <div className="plan-card">
              <h2 className="plan-name">{plan.name}</h2>
              <p className="plan-summary">{plan.summary}</p>

              {plan.options.map((option) => (
                <div key={option.name} className="plan-option">
                  <div className="plan-option-head">
                    <h3>{option.name}</h3>
                    <strong>{option.price}</strong>
                  </div>
                  <ul>
                    {option.includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </PixelCard>
        </BorderGlow>
      ))}

      <div className="pricing-note">
        <h2>A note about pricing</h2>
        <p>
          These are suggested guide ranges. The final price depends on the scope
          of the project, the amount of content, the number of pages, required
          functionality and the level of support needed.
        </p>
      </div>

      <div className="pricing-actions">
        <StarBorder
          as={Link}
          to="/contact"
          className="btn"
          color="#c3f84a"
          trailColor="#c3f84a"
          duration={10}
          direction="clockwise"
          stars={1}
          trailLength={0.8}
          thickness={3}
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
          trailLength={0.8}
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
    </section>
  );
}
