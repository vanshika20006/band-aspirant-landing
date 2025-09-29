import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ananya Sharma",
      score: "8.5 Bands",
      review: "Thanks to IELTS Mastery, I scored 8.5 Bands! The mock tests felt exactly like the real exam.",
      image: "AS"
    },
    {
      name: "Rahul Patel",
      score: "8.0 Bands",
      review: "The AI feedback on speaking was incredibly helpful. Improved my pronunciation significantly.",
      image: "RP"
    },
    {
      name: "Priya Singh",
      score: "8.5 Bands",
      review: "1-on-1 mentorship made all the difference. My mentor guided me through every challenge.",
      image: "PS"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            What Our <span className="text-primary">Students Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real success stories from students who achieved their dream scores.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full bg-gradient-card border border-border shadow-card hover:shadow-feature transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="p-8">
                  {/* Stars */}
                  <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  {/* Review */}
                  <blockquote className="text-muted-foreground text-center mb-6 leading-relaxed italic text-lg">
                    "{testimonial.review}"
                  </blockquote>

                  {/* Profile */}
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-hover rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.image}
                    </div>
                    <div className="text-center">
                      <p className="font-semibold text-card-foreground group-hover:text-primary transition-colors duration-300 text-lg">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-success font-medium">
                        {testimonial.score}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;