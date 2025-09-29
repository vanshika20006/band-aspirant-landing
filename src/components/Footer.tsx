import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Courses", href: "#courses" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer id="contact" className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left - Logo & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-primary">IELTS Mastery</h3>
            <p className="text-muted-foreground leading-relaxed">
              Empowering students to achieve their dream score through expert guidance and innovative technology.
            </p>
          </motion.div>

          {/* Middle - Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-card-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right - Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-card-foreground">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <a
                  href="mailto:info@ieltsmastery.com"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  info@ieltsmastery.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <a
                  href="tel:+919876543210"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  +91-9876543210
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">
                  Connaught Place, New Delhi, India
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Border */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-border mt-8 pt-8 text-center"
        >
          <p className="text-muted-foreground">
            © 2024 IELTS Mastery. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;