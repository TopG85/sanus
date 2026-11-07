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
          color="#c3f84a"
          trailColor="#c3f84a"
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
