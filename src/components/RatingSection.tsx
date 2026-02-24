import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, Send, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface Review {
  name: string;
  rating: number;
  comment: string;
  createdAt: string;
}

const STORAGE_KEY = "dunwell_reviews";

const getReviews = (): Review[] => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
};

const RatingSection = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [comment, setComment] = useState("");

  useEffect(() => {
    setReviews(getReviews());
  }, []);

  const averageRating =
    reviews.length > 0
      ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
      : 0;

  const handleSubmit = () => {
    if (!name.trim()) {
      toast.error("Please enter your name");
      return;
    }
    if (rating === 0) {
      toast.error("Please select a rating");
      return;
    }
    if (!comment.trim()) {
      toast.error("Please add a comment");
      return;
    }

    const newReview: Review = {
      name: name.trim(),
      rating,
      comment: comment.trim(),
      createdAt: new Date().toISOString(),
    };

    const updated = [newReview, ...reviews];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setReviews(updated);
    setName("");
    setRating(0);
    setComment("");
    toast.success("Thank you for your review! ⭐");
  };

  return (
    <section id="reviews" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-gold font-medium text-sm uppercase tracking-widest">
            Patient Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mt-2 mb-4">
            Rate Our Clinic
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Share your experience at Dunwell Youth Priority Clinic. Your feedback helps us improve.
          </p>

          {reviews.length > 0 && (
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className={`w-6 h-6 ${s <= Math.round(averageRating) ? "text-gold fill-gold" : "text-border"}`}
                  />
                ))}
              </div>
              <span className="font-heading font-bold text-2xl">
                {averageRating.toFixed(1)}
              </span>
              <span className="text-muted-foreground text-sm">
                ({reviews.length} review{reviews.length !== 1 ? "s" : ""})
              </span>
            </div>
          )}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Submit Review */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-6 border border-border shadow-sm"
          >
            <h3 className="font-heading font-bold text-lg mb-4">Leave a Review</h3>

            <div className="space-y-4">
              <div>
                <Input
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-11"
                />
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2">
                  Your rating (1 = worst, 5 = best)
                </p>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onMouseEnter={() => setHoveredStar(s)}
                      onMouseLeave={() => setHoveredStar(0)}
                      onClick={() => setRating(s)}
                      className="p-1 transition-transform hover:scale-110"
                    >
                      <Star
                        className={`w-8 h-8 transition-colors ${
                          s <= (hoveredStar || rating)
                            ? "text-gold fill-gold"
                            : "text-border"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <Textarea
                placeholder="Share your experience..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={4}
              />

              <Button
                onClick={handleSubmit}
                className="w-full bg-gold hover:bg-gold-dark text-accent-foreground font-semibold rounded-xl gap-2 h-11"
              >
                <Send className="w-4 h-4" />
                Submit Review
              </Button>
            </div>
          </motion.div>

          {/* Reviews List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="font-heading font-bold text-lg mb-4">
              Recent Reviews
            </h3>

            {reviews.length === 0 ? (
              <div className="bg-card rounded-2xl p-8 border border-border text-center">
                <Star className="w-10 h-10 text-border mx-auto mb-3" />
                <p className="text-muted-foreground">
                  No reviews yet. Be the first to rate us!
                </p>
              </div>
            ) : (
              <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                {reviews.map((review, i) => (
                  <div
                    key={i}
                    className="bg-card rounded-xl p-4 border border-border shadow-sm"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center">
                        <User className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{review.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {new Date(review.createdAt).toLocaleDateString("en-ZA", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </p>
                      </div>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star
                            key={s}
                            className={`w-4 h-4 ${s <= review.rating ? "text-gold fill-gold" : "text-border"}`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{review.comment}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RatingSection;
