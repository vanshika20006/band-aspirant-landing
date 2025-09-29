import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Mic, FileText, BarChart3, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Mic,
      title: "Speaking Practice with AI",
      description: "Get instant AI feedback on fluency & pronunciation.",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: FileText,
      title: "Mock Tests & Detailed Analysis",
      description: "Simulate real exam conditions with comprehensive feedback.",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: BarChart3,
      title: "AI Band Predictor",
      description: "Know your estimated band score instantly with AI analysis.",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: Users,
      title: "1-on-1 Mentorship",
      description: "Personalized guidance from certified IELTS mentors.",
      gradient: "from-orange-500 to-orange-600"
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
    <section id="courses" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose <span className="text-primary">IELTS Mastery</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Advanced AI technology combined with expert mentorship to give you the competitive edge.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full bg-gradient-card hover:bg-gradient-card-hover border-0 shadow-card hover:shadow-feature transition-all duration-300 group">
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto mb-4 w-16 h-16 rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;