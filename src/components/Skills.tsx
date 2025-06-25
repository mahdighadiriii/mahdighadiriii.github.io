import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
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

  const skillCategories = [
    {
      title: "Languages & Frameworks",
      skills: [
        "Python",
        "Django",
        "Django REST Framework",
        "FastAPI",
        "TypeScript",
      ],
    },
    {
      title: "DevOps & Infrastructure",
      skills: ["Docker", "Traefik", "CI/CD", "Linux", "Nginx"],
    },
    {
      title: "Databases",
      skills: [
        "PostgreSQL",
        "InfluxDB",
        "Redis",
        "JSONField",
        "Query Optimization",
      ],
    },
    {
      title: "Monitoring & Observability",
      skills: ["Loki", "Grafana", "Tempo", "Mimir", "Prometheus"],
    },
    {
      title: "APIs & Security",
      skills: ["REST APIs", "OAuth2", "JWT", "API Security", "Rate Limiting"],
    },
    {
      title: "Development Tools",
      skills: ["Git", "GitHub", "Unit Testing", "TDD", "Code Review"],
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
            Technical Skills
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="glass-card p-6"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-xl font-bold text-accent-light mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="skill-badge"
                      variants={itemVariants}
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgba(99, 102, 241, 0.3)",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skill Level Indicators */}
          <motion.div className="mt-16" variants={itemVariants}>
            <h3 className="text-2xl font-bold text-center mb-8">
              Proficiency Levels
            </h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { skill: "Python & Django", level: 95 },
                { skill: "REST API Development", level: 90 },
                { skill: "Database Optimization", level: 85 },
                { skill: "Docker & DevOps", level: 80 },
                { skill: "System Architecture", level: 85 },
                { skill: "Performance Tuning", level: 90 },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="glass-card p-4"
                  variants={itemVariants}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-semibold">{item.skill}</span>
                    <span>{item.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <motion.div
                      className="bg-accent-light h-2.5 rounded-full"
                      style={{ width: `${item.level}%` }}
                      initial={{ width: 0 }}
                      animate={{ width: `${item.level}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
