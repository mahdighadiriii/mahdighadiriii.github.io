import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Hero = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent-light/10" />

      {/* Floating elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 rounded-full bg-accent/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-accent-light/5 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.6, 0.3, 0.6],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="text-center z-10 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          variants={itemVariants}
        >
          <span className="gradient-text">Mahdi Ghadiri Afzal</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-4 font-light"
          variants={itemVariants}
        >
          Backend Developer & DCIM Specialist
        </motion.p>

        <motion.p
          className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          building enterprise-grade systems with Python & Django.
          Passionate about scalable architecture, performance optimization, and
          clean code.
        </motion.p>

        {/* Contact Info */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-12 text-sm text-gray-300"
          variants={itemVariants}
        >
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-accent" />
            <span>Tehran, Iran</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} className="text-accent" />
            <span>+98 919 201 8797</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} className="text-accent" />
            <span>mahdighadiriafzal@gmail.com</span>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-6"
          variants={itemVariants}
        >
          <motion.a
            href="https://github.com/mahdighadiriii"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-4 hover:bg-accent/20 transition-colors duration-300"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={24} className="text-accent" />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/mahdi-ghadiriii/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-4 hover:bg-accent/20 transition-colors duration-300"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin size={24} className="text-accent" />
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-accent rounded-full mt-2"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
