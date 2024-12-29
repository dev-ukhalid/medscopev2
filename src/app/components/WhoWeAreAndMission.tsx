'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, Activity, Brain, Target, 
  Users, Globe, Handshake, Star 
} from 'lucide-react';

const AnimatedUnderline = ({ width = 300, className = "" }) => {
  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className={`relative w-${width} mx-auto ${className}`}>
      <svg
        className="absolute left-1/2 -translate-x-1/2 overflow-visible"
        width={width}
        height="20"
        viewBox={`0 0 ${width} 20`}
      >
        <motion.path
          d={`M 0 10 Q ${width/2} 20 ${width} 10`}
          fill="none"
          strokeWidth="3"
          stroke="rgb(37, 99, 235)"
          variants={pathVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />
      </svg>
    </div>
  );
};

const DecorativeCard = ({ children }) => {
  return (
    <div className="relative">
      {/* Decorative corner elements */}
      <div className="absolute -top-3 -left-3 w-8 h-8 border-t-4 border-l-4 border-blue-500 rounded-tl-xl" />
      <div className="absolute -top-3 -right-3 w-8 h-8 border-t-4 border-r-4 border-blue-500 rounded-tr-xl" />
      <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-4 border-l-4 border-blue-500 rounded-bl-xl" />
      <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-4 border-r-4 border-blue-500 rounded-br-xl" />

      {/* Main content card with gradient border */}
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden p-1">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl" />
        <div className="relative bg-white rounded-[22px]">
          {children}
        </div>
      </div>
    </div>
  );
};

const IconWithGlow = ({ Icon }) => (
  <div className="relative">
    <div className="absolute -inset-2 bg-blue-100 rounded-lg opacity-50 blur-sm" />
    <Icon className="w-12 h-12 text-blue-600 relative" />
  </div>
);

const WhoWeAreAndMission = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="bg-gradient-to-b from-white via-blue-50 to-white">
      {/* Who We Are Section */}
      <section className="py-20">
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-4xl font-bold text-blue-600 mb-8 inline-block">Who We Are</h2>
            <AnimatedUnderline width={200} className="mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your Leading Source for Medical Services and Building Management Systems
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <DecorativeCard>
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                {/* Left Column */}
                <div className="p-8 md:p-12">
                  <div className="space-y-8">
                    <div className="flex gap-6">
                      <IconWithGlow Icon={Activity} />
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">Medical Excellence</h4>
                        <p className="text-gray-600">
                          We specialize in advanced medical technology solutions, focusing on intensive care units, 
                          operating rooms, urology, and physiotherapy departments.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-6">
                      <IconWithGlow Icon={Brain} />
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">Innovation Focus</h4>
                        <p className="text-gray-600">
                          Our vision is to be the ideal partner for medical institutions by providing integrated 
                          and reliable solutions that enhance healthcare quality.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="p-8 md:p-12">
                  <div className="space-y-8">
                    <div className="flex gap-6">
                      <IconWithGlow Icon={Building2} />
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">Smart Infrastructure</h4>
                        <p className="text-gray-600">
                          We offer advanced building management systems that provide precise control over 
                          healthcare environments, enhancing efficiency and patient comfort.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-6">
                      <IconWithGlow Icon={Target} />
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">Customer Focus</h4>
                        <p className="text-gray-600">
                          We're committed to exceeding expectations through exceptional service and 
                          comprehensive support for all your medical technology needs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </DecorativeCard>
          </motion.div>
        </motion.div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20">
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-4xl font-bold text-blue-600 mb-8 inline-block">Our Mission</h2>
            <AnimatedUnderline width={200} className="mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advancing healthcare through innovation and excellence
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <DecorativeCard>
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                {/* Left Column */}
                <div className="p-8 md:p-12 space-y-8">
                  <div className="flex gap-6">
                    <IconWithGlow Icon={Users} />
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Team Excellence</h4>
                      <p className="text-gray-600">
                        We foster collaboration and expertise sharing to accelerate innovation and 
                        maintain the highest standards in healthcare technology.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <IconWithGlow Icon={Globe} />
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Global Impact</h4>
                      <p className="text-gray-600">
                        We're expanding our reach to serve healthcare institutions worldwide with 
                        cutting-edge medical technology solutions.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <IconWithGlow Icon={Star} />
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Continuous Growth</h4>
                      <p className="text-gray-600">
                        We invest in ongoing development and innovation to maintain our position as 
                        industry leaders in healthcare technology.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="p-8 md:p-12 space-y-8">
                  <div className="flex gap-6">
                    <IconWithGlow Icon={Target} />
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Value Creation</h4>
                      <p className="text-gray-600">
                        We deliver innovative solutions that maximize healthcare outcomes while 
                        optimizing operational efficiency and costs.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <IconWithGlow Icon={Handshake} />
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Strategic Partnerships</h4>
                      <p className="text-gray-600">
                        We build lasting relationships with healthcare institutions and organizations 
                        to drive sustainable development in healthcare.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <IconWithGlow Icon={Building2} />
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Infrastructure Excellence</h4>
                      <p className="text-gray-600">
                        We provide state-of-the-art building management systems that create optimal 
                        healthcare environments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </DecorativeCard>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default WhoWeAreAndMission;