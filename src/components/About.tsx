import { motion } from "framer-motion";
import { Target, Users, Award, BookOpen } from "lucide-react";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const highlights = [
    {
      icon: Target,
      title: "Proven Methods",
      description: "Time-tested strategies that consistently deliver 8+ band scores"
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Certified trainers with 10+ years of IELTS coaching experience"
    },
    {
      icon: Award,
      title: "Success Rate",
      description: "95% of our students achieve their target band score on first attempt"
    },
    {
      icon: BookOpen,
      title: "Comprehensive Material",
      description: "Latest practice tests and study materials updated regularly"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6"
          >
            About IELTS Mastery
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Since 2015, IELTS Mastery has been India's leading IELTS coaching institute, 
            helping thousands of students achieve their dream scores and secure admissions 
            to top universities worldwide. Our innovative teaching methods combine traditional 
            expertise with cutting-edge AI technology.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              To empower students with the skills, confidence, and strategies needed to excel
              in the IELTS examination. We believe that with the right guidance and practice, 
              every student can achieve their target band score and unlock opportunities for 
              global education and career advancement.
            </p>
            <div className="bg-gradient-card p-6 rounded-lg border">
              <h4 className="font-semibold text-foreground mb-2">Our Approach</h4>
              <p className="text-muted-foreground text-sm">
                We focus on personalized learning paths, intensive practice sessions, 
                and continuous feedback to ensure maximum improvement in minimum time.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-card p-6 rounded-lg shadow-card border hover:shadow-feature transition-all duration-300 text-center"
              >
                <highlight.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2 text-sm">{highlight.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-achievement p-8 rounded-xl text-center border"
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">Why Students Choose Us</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">8+</div>
              <div className="text-muted-foreground">Average Band Score</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">30 Days</div>
              <div className="text-muted-foreground">Average Preparation Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Student Support</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;