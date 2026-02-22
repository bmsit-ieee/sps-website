import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Linkedin, Mail, Globe } from "lucide-react";

const Team = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const teamMembers = [
    {
      name: "Dr Pallavi Singh",
      role: "Faculty Coordinator",
      image: "/pallavi.webp",
      links: { linkedin: "#", email: "#", website: "#" },
    },
    {
      name: "B Suraj",
      role: "Chairperson",
      image: "/suraj.png",
      links: { linkedin: "#", email: "#", website: "#" },
    },
    {
      name: "Kirthana JL",
      role: "Vice Chair",
      image: "/kirthana.webp",
      links: { linkedin: "#", email: "#", website: "#" },
    },
    {
      name: "Abhitha Rohith",
      role: "Secretary",
      image: "/abhitha.webp",
      links: { linkedin: "#", email: "#", website: "#" },
    },
    {
      name: "Mohith K Aralikatte",
      role: "Treasurer",
      image: "/mohith.webp",
      links: { linkedin: "#", email: "#", website: "#" },
    },
    {
      name: "Abhay Krishna B",
      role: "Joint Treasurer",
      image: "/abhay.webp",
      links: { linkedin: "#", email: "#", website: "#" },
    },
    {
      name: "Lalitaditya M V",
      role: "Project Officer",
      image: "/lalitaditya.webp",
      links: { linkedin: "#", email: "#", website: "#" },
    },
    {
      name: "Pranathi Girimaji",
      role: "Design Officer",
      image: "/pranathi.webp",
      links: { linkedin: "#", email: "#", website: "#" },
    },
    {
      name: "Devendra Hosamani",
      role: "Web Master",
      image: "/devendra.jpg",
      links: { linkedin: "#", email: "#", website: "#" },
    },
  ]; // Closing bracket for teamMembers array

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const memberVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="min-h-screen bg-black text-white pt-8 sm:pt-16">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-2xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Our Team
          </h1>
          <p className="text-sm sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Meet the dedicated professionals leading the advancement of signal
            processing technology
          </p>
        </motion.div>
      </div>

      {/* Team Grid */}
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:py-20"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={memberVariants}
              onMouseEnter={() => setHoveredMember(index)}
              onMouseLeave={() => setHoveredMember(null)}
              className={`relative group ${
                index === teamMembers.length - 1
                  ? "col-start-1 col-end-3 sm:col-auto flex justify-center"
                  : ""
              }`}
            >
              <div className="relative overflow-hidden rounded-lg aspect-square sm:aspect-[3/4] w-full max-w-[200px] sm:max-w-none">
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: hoveredMember === index ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                <motion.div
                  className="absolute inset-0 flex flex-col justify-end p-2 sm:p-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.h3
                    className="text-xs sm:text-xl md:text-2xl font-bold mb-0.5 sm:mb-2"
                    animate={{
                      y: hoveredMember === index ? 0 : 10,
                      opacity: hoveredMember === index ? 1 : 0.9,
                    }}
                  >
                    {member.name}
                  </motion.h3>

                  <motion.p
                    className="text-[10px] sm:text-sm md:text-base text-gray-300"
                    animate={{
                      y: hoveredMember === index ? 0 : 20,
                      opacity: hoveredMember === index ? 1 : 0.7,
                    }}
                  >
                    {member.role}
                  </motion.p>
                </motion.div>

                <motion.div
                  className="absolute top-2 sm:top-6 right-2 sm:right-6 flex flex-col space-y-1 sm:space-y-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredMember === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <a
                    href={member.links.linkedin}
                    className="p-1 sm:p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors"
                  >
                    <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                  </a>
                  <a
                    href={`mailto:${member.links.email}`}
                    className="p-1 sm:p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors"
                  >
                    <Mail className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                  </a>
                  <a
                    href={member.links.website}
                    className="p-1 sm:p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors"
                  >
                    <Globe className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Team;
