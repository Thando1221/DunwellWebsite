import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Lock, MessageCircleQuestion, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const answeredQuestions = [
  {
    category: "Contraception",
    question: "Can I get contraceptives without my parents knowing?",
    answer: "Yes! If you're 12 or older, you can access contraceptives confidentially. Our team respects your privacy — no parental consent is required.",
  },
  {
    category: "STI Testing",
    question: "Do STI tests hurt?",
    answer: "Most STI tests are quick and painless — usually just a urine sample or a simple swab. Blood tests involve a small prick. Our nurses make the process as comfortable as possible.",
  },
  {
    category: "HIV",
    question: "Is HIV testing free at Dunwell?",
    answer: "Yes, HIV testing is free and confidential. We also offer pre- and post-test counselling to support you every step of the way.",
  },
  {
    category: "Visits",
    question: "Can I visit the clinic during lunch break?",
    answer: "Absolutely! We understand students have tight schedules. Walk-ins are welcome, and we try to keep wait times short so you can get back to class.",
  },
  {
    category: "Privacy",
    question: "Will the clinic tell my school I visited?",
    answer: "No. Your visit is 100% confidential. We do not share any information with your school, parents, or anyone else without your consent.",
  },
  {
    category: "Pricing",
    question: "How much does a consultation cost for students?",
    answer: "We offer student-friendly pricing. Consultations start from R150 with a valid student ID. Some services like HIV testing are completely free.",
  },
];

const AnonymousSection = () => {
  const [question, setQuestion] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    const existing = JSON.parse(localStorage.getItem("dunwell_anon_questions") || "[]");
    existing.push({ question: question.trim(), date: new Date().toISOString() });
    localStorage.setItem("dunwell_anon_questions", JSON.stringify(existing));

    setSubmitted(true);
    setQuestion("");
    toast({
      title: "Question submitted!",
      description: "Your anonymous question has been received. We'll address it soon.",
    });

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="ask" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-gold font-medium text-sm uppercase tracking-widest">100% Anonymous</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mt-2 mb-4">Ask Without Fear</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            No names, no judgement. Get honest answers to your health questions privately.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Q&A List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading font-bold mb-4 flex items-center gap-2">
              <MessageCircleQuestion className="w-5 h-5 text-gold" />
              Answered Questions
            </h3>
            <div className="space-y-3">
              {answeredQuestions.map((item, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl border border-border hover:border-gold/30 transition-colors overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    className="w-full p-4 text-left flex items-start justify-between gap-3"
                  >
                    <div>
                      <span className="text-xs bg-gold/10 text-gold px-2 py-0.5 rounded-full font-medium">
                        {item.category}
                      </span>
                      <p className="text-sm font-medium mt-1.5">{item.question}</p>
                    </div>
                    {expandedIndex === index ? (
                      <ChevronUp className="w-4 h-4 text-muted-foreground shrink-0 mt-1" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0 mt-1" />
                    )}
                  </button>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="px-4 pb-4"
                    >
                      <div className="bg-muted rounded-lg p-3 border-l-2 border-gold">
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Submit Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-card rounded-2xl p-6 border border-border sticky top-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                  <Lock className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-heading font-bold">Ask Anonymously</h3>
                  <p className="text-xs text-muted-foreground">We never collect your identity</p>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Textarea
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Type your health question here... No one will know it's you."
                  className="min-h-[120px] resize-none bg-muted border-border focus:border-gold"
                  maxLength={500}
                />
                <div className="flex items-center justify-between">
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <Lock className="w-3 h-3" />
                    Completely anonymous — no tracking
                  </p>
                  <Button
                    type="submit"
                    disabled={!question.trim() || submitted}
                    className="bg-gold hover:bg-gold-dark text-accent-foreground rounded-full gap-2"
                  >
                    <Send className="w-4 h-4" />
                    {submitted ? "Sent!" : "Send"}
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AnonymousSection;
