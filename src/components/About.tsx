import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Database, Server, Shield } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Backend Expertise",
      description: "Python, Django, REST APIs",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Database Optimization",
      description: "PostgreSQL, InfluxDB, Performance Tuning",
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "DevOps & Infrastructure",
      description: "Docker, CI/CD, Containerization",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security & APIs",
      description: "OAuth2, Secure Integration",
    },
  ];

  return (
    <section className="py-20 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
            variants={itemVariants}
          >
            About Me
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm a passionate backend developer with over 3 years of
                experience building enterprise-grade DCIM (Data Center
                Infrastructure Management) applications. My expertise lies in
                creating scalable, secure, and high-performance systems using
                Python and Django.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                I specialize in architecting modular systems, optimizing
                database performance, and implementing secure API integrations.
                My work has helped large clients like MCI in Iran streamline
                their infrastructure management processes.
              </p>

              <motion.div
                className="inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="bg-gradient-to-r from-accent to-accent-light px-8 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-accent/25 transition-shadow duration-300">
                  Download Resume
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              variants={itemVariants}
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="glass-card p-6 hover:bg-white/10 transition-colors duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-accent mb-4">{highlight.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {highlight.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
