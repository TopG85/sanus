import { useEffect } from "react";

const SCORE_SCRIPT =
  "https://static.scoreapp.com/js/integration/v1/embedding.js?v=3jigi8";

export default function WebsiteCheckup() {
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
    <section className="contact-page checkup-page">
      <h1 className="contact-title">Website Check-up</h1>
      <p className="contact-intro">
        A free scorecard that shows how well your website is working for
        visitors. It takes a few minutes, and you'll get clear suggestions on
        what to fix first.
      </p>

      <button
        type="button"
        className="scoreapp-btn"
        data-sa-url="https://d43d00e3-32ce-472a-b9be-2a692fd6317f.scoreapp.com/?sa_hide_header=1&sa_hide_footer=1"
        data-sa-view="popup"
        data-sa-size="full"
      >
        <span>Start the Website Check-up</span>
      </button>
    </section>
  );
}
