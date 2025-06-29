'use client'

import { motion, AnimatePresence } from 'framer-motion'
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiFirebase,
  SiJavascript,
  SiGit,
  SiDocker,
  SiPostgresql,
  SiRedux,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiCplusplus,
  SiPython,
  SiMysql,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { useState, useRef } from 'react'
import { useAnimation } from 'framer-motion'

const Skills = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollControls = useAnimation();
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (!isDragging) {
      const container = e.currentTarget;
      const scrollPosition = container.scrollLeft;
      const cardWidth = container.clientWidth;
      const newIndex = Math.round(scrollPosition / cardWidth);
      setCurrentIndex(newIndex);
    }
  };

  const scrollToIndex = (index: number) => {
    if (containerRef.current) {
      const cardWidth = containerRef.current.clientWidth;
      const targetScroll = index * cardWidth;
      scrollControls.start({
        scrollLeft: targetScroll,
        transition: { type: 'spring', stiffness: 120, damping: 18 }
      });
      setCurrentIndex(index);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    const touch = e.touches[0];
    setStartX(touch.clientX);
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    const touch = e.touches[0];
    const x = touch.clientX;
    const walk = (startX - x);
    if (Math.abs(walk) > 10) {
      e.preventDefault();
      containerRef.current.scrollLeft = scrollLeft + walk;
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    if (containerRef.current) {
      const cardWidth = containerRef.current.clientWidth;
      const scrollPosition = containerRef.current.scrollLeft;
      const newIndex = Math.round(scrollPosition / cardWidth);
      scrollToIndex(newIndex);
    }
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (containerRef.current) {
      const delta = e.deltaX;
      const currentScroll = containerRef.current.scrollLeft;
      containerRef.current.scrollLeft = currentScroll + delta;
    }
  };

  const skillCategories = [
    {
      name: 'Frontend',
      icon: <SiReact className="w-12 h-12" />,
      color: 'text-blue-500',
      gradient: 'from-blue-900/60 to-blue-700/40',
      skills: [
        { name: 'HTML5', icon: <SiHtml5 /> },
        { name: 'CSS3', icon: <SiCss3 /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'React', icon: <SiReact /> },
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      ]
    },
    {
      name: 'Backend',
      icon: <SiNodedotjs className="w-12 h-12" />,
      color: 'text-green-500',
      gradient: 'from-green-900/60 to-green-700/40',
      skills: [
        { name: 'Node.js', icon: <SiNodedotjs /> },
        { name: 'Express', icon: <SiExpress /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'MySQL', icon: <SiMysql /> },
      ]
    },
    {
      name: 'Coding',
      icon: <SiCplusplus className="w-12 h-12" />,
      color: 'text-yellow-500',
      gradient: 'from-yellow-700/60 to-yellow-500/40',
      skills: [
        { name: 'C++', icon: <SiCplusplus /> },
        { name: 'Python', icon: <SiPython /> },
        { name: 'Java', icon: <FaJava /> },
      ]
    }
  ];

  return (
    <section id="skills" className="min-h-screen py-16 px-4 flex items-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="w-full"
      >
        <motion.h2 variants={itemVariants} className="text-4xl font-bold text-center mb-10 text-white">Skills</motion.h2>
        
        {/* Mobile Carousel View */}
        <div className="md:hidden">
          <div className="relative w-full max-w-[320px] mx-auto">
            {/* Crate Container */}
            <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              {/* Scrollable Container */}
              <motion.div
                ref={containerRef}
                className="absolute inset-0 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
                onScroll={handleScroll}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onWheel={handleWheel}
                style={{
                  scrollBehavior: 'auto',
                  WebkitOverflowScrolling: 'touch',
                  touchAction: 'pan-x',
                }}
                animate={scrollControls}
              >
                <div className="flex h-full">
                  {skillCategories.map((category, index) => (
                    <motion.div
                      key={index}
                      className="flex-none w-full h-full snap-center flex flex-col items-center justify-center p-4"
                      initial={{ x: index === 0 ? 0 : 1000, opacity: 0 }}
                      animate={{ 
                        x: 0,
                        opacity: 1,
                        transition: {
                          type: "spring",
                          stiffness: 50,
                          damping: 15,
                          mass: 1
                        }
                      }}
                      exit={{ 
                        x: -1000,
                        opacity: 0,
                        transition: {
                          type: "spring",
                          stiffness: 50,
                          damping: 15,
                          mass: 1
                        }
                      }}
                    >
                      <motion.div
                        key={currentIndex === index ? `active-${index}` : `inactive-${index}`}
                        className={`w-full h-[460px] bg-black rounded-xl p-6 flex flex-col items-center backdrop-blur-sm`}
                        animate={currentIndex === index ? { scale: 1.08, boxShadow: '0 0 40px 0 #FFD600' } : { scale: 1, boxShadow: 'none' }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <motion.div 
                          className={`${category.color} mb-4`}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        >
                          {category.icon}
                        </motion.div>
                        <motion.h3 
                          className="text-2xl font-semibold text-white mb-8"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          {category.name}
                        </motion.h3>
                        <div className="flex flex-col space-y-6 w-full">
                          {category.skills.map((skill, skillIndex) => (
                            <motion.div 
                              key={skillIndex} 
                              className="flex items-center gap-3"
                              initial={{ x: 50, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: 0.4 + skillIndex * 0.1 }}
                            >
                              <div className="text-2xl text-white">{skill.icon}</div>
                              <span className="text-white text-base">{skill.name}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {skillCategories.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => scrollToIndex(index)}
                  className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-white/30'}`}
                  animate={{
                    scale: index === currentIndex ? 1.2 : 1,
                    opacity: index === currentIndex ? 1 : 0.3
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Grid View */}
        <motion.div variants={sectionVariants} className="hidden md:flex flex-col md:flex-row justify-center gap-4 sm:gap-6 max-w-5xl mx-auto">
          {/* Frontend Card */}
          <motion.div variants={itemVariants} whileHover={{ scale: 1.08, boxShadow: '0 0 32px 0 #FFD600' }} className="w-full md:w-[280px] flex flex-col items-center rounded-xl shadow-lg bg-black p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-white mb-4">Frontend</h3>
            <div className="flex flex-col items-center sm:items-start space-y-4 px-2 sm:px-4 w-full">
              <div className="flex items-center gap-2 w-full justify-center sm:justify-start">
                <div className="text-3xl sm:text-4xl md:text-5xl text-white"><SiHtml5 /></div>
                <span className="text-white text-base sm:text-lg">HTML5</span>
              </div>
              <div className="flex items-center gap-2 w-full justify-center sm:justify-start">
                <div className="text-3xl sm:text-4xl md:text-5xl text-white"><SiCss3 /></div>
                <span className="text-white text-base sm:text-lg">CSS3</span>
              </div>
              <div className="flex items-center gap-2 w-full justify-center sm:justify-start">
                <div className="text-3xl sm:text-4xl md:text-5xl text-white"><SiJavascript /></div>
                <span className="text-white text-base sm:text-lg">JavaScript</span>
              </div>
              <div className="flex items-center gap-2 w-full justify-center sm:justify-start">
                <div className="text-3xl sm:text-4xl md:text-5xl text-white"><SiReact /></div>
                <span className="text-white text-base sm:text-lg">React</span>
              </div>
              <div className="flex items-center gap-2 w-full justify-center sm:justify-start">
                <div className="text-3xl sm:text-4xl md:text-5xl text-white"><SiNextdotjs /></div>
                <span className="text-white text-base sm:text-lg">Next.js</span>
              </div>
              <div className="flex items-center gap-2 w-full justify-center sm:justify-start">
                <div className="text-3xl sm:text-4xl md:text-5xl text-white"><SiTailwindcss /></div>
                <span className="text-white text-base sm:text-lg">Tailwind CSS</span>
              </div>
            </div>
          </motion.div>

          {/* Backend Card */}
          <motion.div variants={itemVariants} whileHover={{ scale: 1.08, boxShadow: '0 0 32px 0 #FFD600' }} className="w-full md:w-[280px] flex flex-col items-center rounded-xl shadow-lg bg-black p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-white mb-4">Backend</h3>
            <div className="flex flex-col items-center sm:items-start space-y-4 px-2 sm:px-4 w-full">
              <div className="flex items-center gap-2 w-full justify-center sm:justify-start">
                <div className="text-3xl sm:text-4xl md:text-5xl text-white"><SiNodedotjs /></div>
                <span className="text-white text-base sm:text-lg">Node.js</span>
              </div>
              <div className="flex items-center gap-2 w-full justify-center sm:justify-start">
                <div className="text-3xl sm:text-4xl md:text-5xl text-white"><SiExpress /></div>
                <span className="text-white text-base sm:text-lg">Express</span>
              </div>
              <div className="flex items-center gap-2 w-full justify-center sm:justify-start">
                <div className="text-3xl sm:text-4xl md:text-5xl text-white"><SiMongodb /></div>
                <span className="text-white text-base sm:text-lg">MongoDB</span>
              </div>
              <div className="flex items-center gap-2 w-full justify-center sm:justify-start">
                <div className="text-3xl sm:text-4xl md:text-5xl text-white"><SiMysql /></div>
                <span className="text-white text-base sm:text-lg">MySQL</span>
              </div>
            </div>
          </motion.div>

          {/* Coding Card */}
          <motion.div variants={itemVariants} whileHover={{ scale: 1.08, boxShadow: '0 0 32px 0 #FFD600' }} className="w-full md:w-[280px] flex flex-col items-center rounded-xl shadow-lg bg-black p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-white mb-4">Coding</h3>
            <div className="flex flex-col items-center sm:items-start space-y-4 px-2 sm:px-4 w-full">
              <div className="flex items-center gap-2 w-full justify-center sm:justify-start">
                <div className="text-3xl sm:text-4xl md:text-5xl text-white"><SiCplusplus /></div>
                <span className="text-white text-base sm:text-lg">C++</span>
              </div>
              <div className="flex items-center gap-2 w-full justify-center sm:justify-start">
                <div className="text-3xl sm:text-4xl md:text-5xl text-white"><SiPython /></div>
                <span className="text-white text-base sm:text-lg">Python</span>
              </div>
              <div className="flex items-center gap-2 w-full justify-center sm:justify-start">
                <div className="text-3xl sm:text-4xl md:text-5xl text-white"><FaJava /></div>
                <span className="text-white text-base sm:text-lg">Java</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills; 