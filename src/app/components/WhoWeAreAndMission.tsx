'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  Building2, Activity, Brain,
  Globe, Handshake, Star,
  LucideIcon
} from 'lucide-react';

interface AnimatedUnderlineProps {
  width?: number;
  className?: string;
}

interface IconWithGlowProps {
  Icon: LucideIcon;
  color: string;
}

const AnimatedUnderline: React.FC<AnimatedUnderlineProps> = ({ 
  width = 300, 
  className = "" 
}) => {
  const pathVariants: Variants = {
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
          stroke="rgb(14 165 233)"
          variants={pathVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />
      </svg>
    </div>
  );
};

const IconWithGlow: React.FC<IconWithGlowProps> = ({ Icon, color }) => (
  <div className="relative">
    <div className={`absolute -inset-2 ${color} rounded-lg opacity-50 blur-sm`} />
    <Icon className="w-12 h-12 text-sky-600 relative" />
  </div>
);

const ContentCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`p-6 rounded-2xl backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`}>
    {children}
  </div>
);

const ImageSection = () => (
  <div className="relative h-[200px] mb-8">
    <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center w-full">
      <div className="absolute w-[800px] h-[400px] bg-gradient-to-r from-pink-400/30 to-purple-500/30 rounded-[50px] blur-3xl" />
      
      <div className="relative w-[200px] h-[160px] -mr-6 transform hover:-translate-y-2 transition-transform duration-300 z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-500 rounded-[30px] rotate-6 opacity-80" />
        <div className="absolute inset-0 overflow-hidden rounded-[30px] shadow-lg">
          <img src="/our1.png" alt="Healthcare service" className="w-full h-full object-cover"/>
        </div>
      </div>

      <div className="relative w-[200px] h-[160px] z-20 transform hover:-translate-y-2 transition-transform duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-blue-500 rounded-[30px] opacity-80" />
        <div className="absolute inset-0 overflow-hidden rounded-[30px] shadow-lg">
          <img src="/our2.png" alt="Medical equipment" className="w-full h-full object-cover"/>
        </div>
      </div>

      <div className="relative w-[200px] h-[160px] -ml-6 transform hover:-translate-y-2 transition-transform duration-300 z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-violet-500 rounded-[30px] -rotate-6 opacity-80" />
        <div className="absolute inset-0 overflow-hidden rounded-[30px] shadow-lg">
          <img src="/our3.png" alt="Patient care" className="w-full h-full object-cover"/>
        </div>
      </div>
    </div>
  </div>
);

const WhoWeAreAndMission: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-50 via-indigo-50 to-purple-50" />
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full translate-x-1/3 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-tr from-pink-400/30 to-sky-400/30 rounded-full -translate-x-1/3 translate-y-1/2 blur-3xl" />
      </div>

      <div className="relative">
        <section className="py-16">
          <motion.div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-8">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-text text-transparent mb-1">
                Who We Are
              </h2>
              <AnimatedUnderline width={200} className="mb-8" />
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your Leading Source for Medical Services and Building Management Systems
              </p>
            </motion.div>

            <ImageSection />

            <motion.div variants={itemVariants} className="max-w-4xl mx-auto bg-white/90 rounded-3xl p-8 shadow-xl">
              <div className="grid gap-6">
                <ContentCard className="bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-100">
                  <div className="flex gap-6 items-start">
                    <IconWithGlow Icon={Activity} color="bg-sky-200" />
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Medical Excellence</h4>
                      <p className="text-gray-600">
                        We specialize in advanced medical technology solutions, focusing on intensive care units, 
                        operating rooms, urology, and physiotherapy departments.
                      </p>
                    </div>
                  </div>
                </ContentCard>

                <ContentCard className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100">
                  <div className="flex gap-6 items-start">
                    <IconWithGlow Icon={Brain} color="bg-purple-200" />
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Innovation Focus</h4>
                      <p className="text-gray-600">
                        Our vision is to be the ideal partner for medical institutions by providing integrated 
                        and reliable solutions that enhance healthcare quality.
                      </p>
                    </div>
                  </div>
                </ContentCard>

                <ContentCard className="bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100">
                  <div className="flex gap-6 items-start">
                    <IconWithGlow Icon={Building2} color="bg-indigo-200" />
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Smart Infrastructure</h4>
                      <p className="text-gray-600">
                        We offer advanced building management systems that provide precise control over 
                        healthcare environments, enhancing efficiency and patient comfort.
                      </p>
                    </div>
                  </div>
                </ContentCard>
              </div>
            </motion.div>
          </motion.div>
        </section>

        <section className="py-16">
          <motion.div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-8">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-text text-transparent mb-1">
                Our Mission
              </h2>
              <AnimatedUnderline width={200} className="mb-8" />
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Advancing healthcare through innovation and excellence
              </p>
            </motion.div>

            <ImageSection />

            <motion.div variants={itemVariants} className="max-w-4xl mx-auto bg-white/90 rounded-3xl p-8 shadow-xl">
              <div className="grid gap-6">
                <ContentCard className="bg-gradient-to-br from-rose-50 to-pink-50 border border-rose-100">
                  <div className="flex gap-6 items-start">
                    <IconWithGlow Icon={Star} color="bg-rose-200" />
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Continuous Growth</h4>
                      <p className="text-gray-600">
                        We invest in ongoing development and innovation to maintain our position as 
                        industry leaders in healthcare technology.
                      </p>
                    </div>
                  </div>
                </ContentCard>

                <ContentCard className="bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-100">
                  <div className="flex gap-6 items-start">
                    <IconWithGlow Icon={Globe} color="bg-violet-200" />
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Global Impact</h4>
                      <p className="text-gray-600">
                        We're expanding our reach to serve healthcare institutions worldwide with 
                        cutting-edge medical technology solutions.
                      </p>
                    </div>
                  </div>
                </ContentCard>

                <ContentCard className="bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-100">
                  <div className="flex gap-6 items-start">
                    <IconWithGlow Icon={Handshake} color="bg-blue-200" />
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Strategic Partnerships</h4>
                      <p className="text-gray-600">
                        We build lasting relationships with healthcare institutions and organizations 
                        to drive sustainable development in healthcare.
                      </p>
                    </div>
                  </div>
                </ContentCard>
              </div>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default WhoWeAreAndMission;