'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck, Trophy } from 'lucide-react';

const LeadershipSection = () => {
  const containerVariants = {
    hidden: { 
      opacity: 0 
    },
    visible: {
      opacity: 1,
      transition: { 
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }
  const cardVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: 100
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const leaders = [
    {
      name: "Saud Shakir Alzulferi",
      title: "CEO",
      location: "MedScope Health Services, Saudi Arabia",
      image: "/saud.jpg",
      bio: ""
    },
    {
      name: "Engineer Imrana Mohammed Sani",
      title: "Managing Director",
      location: "MedScope Health Services, Nigeria",
      image: "/engineer.jpg",
      bio: "ENGR. IMRANA MOHAMMED SANI is a resourceful and innovative Nigerian with a keen interest in creating practical solutions to improve healthcare delivery. His expertise in designing and constructing portable and heavy-duty machines has been instrumental in developing equipment that supports medical and agricultural sectors, addressing local challenges with sustainable solutions"
    }
  ];

  return (
    <section className="py-12 sm:py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-0 w-32 sm:w-64 h-32 sm:h-64 bg-blue-100 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" 
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute bottom-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-blue-200 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" 
      />
      
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
      >
        <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-24">
          <motion.span 
            variants={itemVariants}
            className="text-sky-500 font-semibold text-base sm:text-lg mb-2 sm:mb-4 block"
          >
            Meet Our Team
          </motion.span>
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-sky-500 to-sky-800 bg-clip-text text-transparent mb-4 sm:mb-8"
          >
            Our Leadership
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-16 sm:w-24 h-1 sm:h-2 bg-sky-500 mx-auto rounded-full mb-4 sm:mb-8" 
          />
          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Visionary leaders driving innovation in healthcare technology
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-16">
          {leaders.map((leader) => (
            <motion.div
              key={leader.name}
              variants={cardVariants}
              className="relative group"
            >
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-white to-blue-50 shadow-xl sm:shadow-2xl transform transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-3xl">
                {/* Trophy decoration */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute top-4 sm:top-6 right-4 sm:right-6 z-10"
                >
                  <div className="relative">
                    <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500" />
                    <motion.div
                      animate={{ 
                        opacity: [0.2, 0.5, 0.2],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute inset-0 bg-yellow-300 blur-md rounded-full -z-10"
                    />
                  </div>
                </motion.div>

                <div className="p-6 sm:p-10 relative">
                  <div className="flex flex-col items-center">
                    <div className="relative">
                      <div className="w-32 h-32 sm:w-48 sm:h-48 rounded-full overflow-hidden mb-4 sm:mb-8 ring-2 sm:ring-4 ring-yellow-300 group-hover:ring-yellow-400 transition-all duration-300 relative">
                        <img
                          src={leader.image}
                          alt={leader.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <motion.div
                        animate={{
                          opacity: [0.3, 0.6, 0.3],
                          scale: [1, 1.05, 1]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500 blur-md rounded-full -z-10"
                      />
                    </div>
                    
                    <div className="flex flex-col items-center gap-1 sm:gap-2 mb-2 sm:mb-3 w-full">
                      <div className="flex items-center gap-2 flex-wrap justify-center">
                        <h3 className="text-sm sm:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent text-center">
                          {leader.name}
                        </h3>
                        <motion.div 
                          whileHover={{ scale: 1.1 }}
                          className="bg-blue-100 p-1 rounded-full flex-shrink-0"
                        >
                          <BadgeCheck 
                            className="w-4 h-4 sm:w-5 sm:h-5 text-sky-500" 
                            strokeWidth={2}
                            fill="white"
                          />
                        </motion.div>
                      </div>
                    </div>
                    
                    <p className="text-base sm:text-lg font-semibold text-sky-500 mb-1 sm:mb-2">{leader.title}</p>
                    <p className="text-gray-600 font-medium mb-2 sm:mb-4 text-xs sm:text-sm">{leader.location}</p>
                    {leader.bio && (
                      <motion.p 
                        variants={itemVariants}
                        className="text-gray-600 text-center leading-relaxed text-xs sm:text-sm"
                      >
                        {leader.bio}
                      </motion.p>
                    )}
                  </div>
                </div>

                {/* Decorative corners */}
                <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-8 h-8 sm:w-12 sm:h-12 border-t-2 border-l-2 sm:border-t-4 sm:border-l-4 border-yellow-400 rounded-tl-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-8 h-8 sm:w-12 sm:h-12 border-t-2 border-r-2 sm:border-t-4 sm:border-r-4 border-yellow-400 rounded-tr-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-8 h-8 sm:w-12 sm:h-12 border-b-2 border-l-2 sm:border-b-4 sm:border-l-4 border-yellow-400 rounded-bl-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-8 h-8 sm:w-12 sm:h-12 border-b-2 border-r-2 sm:border-b-4 sm:border-r-4 border-yellow-400 rounded-br-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default LeadershipSection;