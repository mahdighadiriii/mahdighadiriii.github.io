import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Calendar } from "lucide-react";

const Education = () => {
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

  const certifications = [
    {
      title: "Object-Oriented Programming",
      issuer: "Maktabkhooneh",
      year: "2024",
      type: "Programming",
    },
    {
      title: "Django REST Framework Developer Certificate",
      issuer: "Professional Certification",
      year: "2023",
      type: "Web Development",
    },
    {
      title: "Linux OS Certification",
      issuer: "System Administration",
      year: "2022",
      type: "DevOps",
    },
    {
      title: "Python Web Developer (PWD)",
      issuer: "Laitec Lab",
      year: "2021",
      type: "Web Development",
    },
  ];

  return (
    <section className="py-20 px-4 bg-dark-lighter/50" ref={ref}>
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
            Education & Certifications
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <motion.div variants={itemVariants}>
              <div className="glass-card p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-accent/20 rounded-full">
                    <GraduationCap className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Education</h3>
                    <p className="text-gray-400">Academic Background</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="border-l-2 border-accent/30 pl-6">
                    <h4 className="text-xl font-semibold text-accent-light mb-2">
                      Bachelor of Science in Computer Science
                    </h4>
                    <p className="text-gray-300 mb-1">Allameh Tabarsi UAST</p>
                    <p className="text-gray-400 text-sm">Tehran, Iran</p>
                  </div>
                  <div className="border-l-2 border-accent/30 pl-6">
                    <h4 className="text-xl font-semibold text-accent-light mb-2">
                      Associate Degree in Computer Science
                    </h4>
                    <p className="text-gray-300 mb-1">Allameh Tabarsi UAST</p>
                    <p className="text-gray-400 text-sm">Tehran, Iran</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div variants={itemVariants}>
              <div className="glass-card p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-accent/20 rounded-full">
                    <Award className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      Certifications
                    </h3>
                    <p className="text-gray-400">Professional Development</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      className="border border-accent/20 rounded-lg p-4 hover:border-accent/40 transition-colors duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                      }
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                      }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-white text-sm leading-tight">
                          {cert.title}
                        </h4>
                        <span className="text-accent text-xs font-medium bg-accent/10 px-2 py-1 rounded">
                          {cert.type}
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm mb-1">
                        {cert.issuer}
                      </p>
                      <div className="flex items-center gap-1 text-gray-400 text-xs">
                        <Calendar className="w-3 h-3" />
                        <span>{cert.year}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Learning Philosophy */}
          <motion.div
            className="mt-12 text-center max-w-3xl mx-auto"
            variants={itemVariants}
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold gradient-text mb-4">
                Continuous Learning
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I believe in the power of continuous learning and staying
                updated with the latest technologies and best practices. My
                certifications reflect my commitment to professional growth and
                expertise in backend development, system architecture, and
                modern development practices.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
