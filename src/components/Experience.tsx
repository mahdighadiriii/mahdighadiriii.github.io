import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const experiences = [
    {
      title: "Backend Developer",
      company: "MCI (Mobile Communication Company of Iran)",
      period: "2020 - Present",
      responsibilities: [
        "Developed enterprise-grade DCIM applications using Python and Django.",
        "Optimized database performance with PostgreSQL and InfluxDB.",
        "Implemented secure REST APIs with OAuth2 and JWT.",
      ],
    },
    {
      title: "Junior Software Engineer",
      company: "Tech Startup",
      period: "2018 - 2020",
      responsibilities: [
        "Built scalable web applications using Django and FastAPI.",
        "Deployed containerized applications with Docker and CI/CD pipelines.",
        "Collaborated on system architecture and performance tuning.",
      ],
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
            Work Experience
          </motion.h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="glass-card p-6"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-xl font-bold text-accent-light mb-2">
                  {exp.title}
                </h3>
                <p className="text-lg font-semibold">{exp.company}</p>
                <p className="text-sm text-gray-400">{exp.period}</p>
                <ul className="mt-4 space-y-2 list-disc list-inside text-gray-300">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
