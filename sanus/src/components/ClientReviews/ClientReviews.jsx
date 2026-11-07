import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import BorderGlow from "../BorderGlow/BorderGlow";
import PixelCard from "../PixelCard/PixelCard";

export default function ClientReviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadReviews() {
      try {
        const q = query(
          collection(db, "reviews"),
          where("approved", "==", true),
        );
        const snapshot = await getDocs(q);
        const items = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        items.sort(
          (a, b) =>
            (b.createdAt?.toMillis?.() ?? 0) - (a.createdAt?.toMillis?.() ?? 0),
        );
        setReviews(items);
      } catch (err) {
        console.error("Failed to load reviews:", err);
      } finally {
        setLoading(false);
      }
    }
    loadReviews();
  }, []);

  if (loading || reviews.length === 0) return null;

  return (
    <section className="reviews-section">
      <h2 className="reviews-title">Client Reviews</h2>
      <div className="reviews-grid">
        {reviews.map((review) => (
          <BorderGlow
            key={review.id}
            className="review-glow"
            edgeSensitivity={30}
            glowColor="78 92 63"
            backgroundColor="#152641"
            borderRadius={20}
            glowRadius={60}
            glowIntensity={3.0}
            coneSpread={25}
            animated={true}
            colors={["#c3f84a", "#c3f84a", "#c3f84a"]}
          >
            <PixelCard
              className="review-pixel"
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
              <figure className="review-card">
                <div
                  className="review-stars"
                  aria-label={`${review.rating} out of 5 stars`}
                >
                  {"★".repeat(review.rating)}
                  {"☆".repeat(5 - review.rating)}
                </div>
                <blockquote>{review.comment}</blockquote>
                <figcaption>
                  <strong>{review.name}</strong>
                  {review.project && <span>{review.project}</span>}
                </figcaption>
              </figure>
            </PixelCard>
          </BorderGlow>
        ))}
      </div>
    </section>
  );
}
