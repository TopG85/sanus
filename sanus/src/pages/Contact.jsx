import { useState } from "react";
import StarBorder from "../components/StarBorder/StarBorder";

const FORMSPREE_URL = "https://formspree.io/f/myezkylb";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      });

      if (response.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="contact-page">
      <h1 className="contact-title">Contact</h1>
      <p className="contact-intro">
        Have a project in mind? Fill out the form below, or email me directly at{" "}
        <a href="mailto:danielcarson1985@gmail.com">
          danielcarson1985@gmail.com
        </a>
        .
      </p>

      {status === "sent" && (
        <p className="contact-status">Thanks, your message has been sent.</p>
      )}
      {status === "error" && (
        <p className="contact-status contact-status--error">
          Something went wrong. Please try again or email me directly.
        </p>
      )}

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Your name
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Your email
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Your message
          <textarea
            name="message"
            rows={6}
            value={form.message}
            onChange={handleChange}
            required
          />
        </label>

        <StarBorder
          as="button"
          type="submit"
          className="btn"
          color="#c3f84a"
          trailColor="#c3f84a"
          duration={4.5}
          stars={1}
          trailLength={0.8}
          thickness={3}
          radius={18}
          glow={1}
          hover="brighten"
          sparkle
          clickPulse
          theme="dark"
        >
          {status === "sending" ? "Sending..." : "Send message"}
        </StarBorder>
      </form>
    </section>
  );
}
