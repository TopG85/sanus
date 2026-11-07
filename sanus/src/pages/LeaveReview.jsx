import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import PeekRating from "../components/PeekRating/PeekRating";
import StarBorder from "../components/StarBorder/StarBorder";

const emptyForm = { name: "", project: "", email: "", comment: "" };

export default function LeaveReview() {
  const [form, setForm] = useState(emptyForm);
  const [rating, setRating] = useState(0);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (rating === 0) {
      setError("Please choose a star rating before submitting.");
      return;
    }

    setError("");
    setStatus("sending");

    try {
      await addDoc(collection(db, "reviews"), {
        name: form.name,
        project: form.project,
        email: form.email,
        comment: form.comment,
        rating,
        approved: false,
        createdAt: serverTimestamp(),
      });
      setStatus("sent");
      setForm(emptyForm);
      setRating(0);
    } catch (err) {
      console.error("Failed to submit review:", err);
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <section className="contact-page">
        <h1 className="contact-title">Leave a Review</h1>
        <p className="contact-status">
          Thank you! Your review has been submitted and will appear on the site
          once it's been checked.
        </p>
      </section>
    );
  }

  return (
    <section className="contact-page">
      <h1 className="contact-title">Leave a Review</h1>
      <p className="contact-intro">
        Worked with me on a project? I'd love to hear how it went.
      </p>

      {status === "error" && (
        <p className="contact-status contact-status--error">
          Sorry, something went wrong submitting your review. Please try again.
        </p>
      )}
      {error && <p className="contact-status contact-status--error">{error}</p>}

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="review-rating">
          <span className="review-label">Your rating</span>
          <PeekRating
            value={rating}
            onChange={setRating}
            count={5}
            shape="star"
            labels={["Poor", "Fair", "Good", "Great", "Superb"]}
            activeColor="#c3f84a"
            idleColor="#3b17ff"
            tipColor="#3b17ff"
            tipTextColor="#f5f5f5"
            size={40}
            lift={15}
            popScale={1.6}
            showTip
            allowClear
            ariaLabel="Your rating"
          />
        </div>

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
          Project worked on
          <input
            name="project"
            type="text"
            placeholder="e.g. Vinelife Church Wilmslow"
            value={form.project}
            onChange={handleChange}
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
          Your review
          <textarea
            name="comment"
            rows={5}
            value={form.comment}
            onChange={handleChange}
            required
          />
        </label>

        <StarBorder
          as="button"
          type="submit"
          disabled={status === "sending"}
          className="btn"
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
          {status === "sending" ? "Submitting..." : "Submit review"}
        </StarBorder>
      </form>
    </section>
  );
}
