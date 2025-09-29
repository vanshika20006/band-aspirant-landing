import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Achievements = () => {
  const achievements = [
    { number: 1000, suffix: "+", label: "Students Trained", duration: 2 },
    { number: 95, suffix: "%", label: "Success Rate", duration: 2.5 },
    { number: 500, suffix: "+", label: "8+ Band Scorers", duration: 3 }
  ];

  return (
    <section className="py-20 bg-gradient-achievement relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-success/10 to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-success-foreground mb-4">
            Our <span className="text-white">Achievements</span>
          </h2>
          <p className="text-lg text-success-foreground/90 max-w-2xl mx-auto">
            Numbers that speak for our commitment to your success.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              className="text-center"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 group">
                <Counter 
                  end={achievement.number} 
                  duration={achievement.duration}
                  suffix={achievement.suffix}
                />
                <p className="text-xl font-semibold text-success-foreground/90 mt-4 group-hover:text-white transition-colors duration-300">
                  {achievement.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Counter = ({ end, duration, suffix }: { end: number; duration: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, isVisible]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => setIsVisible(true)}
      className="text-5xl md:text-6xl font-bold text-white"
    >
      {count}{suffix}
    </motion.div>
  );
};

export default Achievements;