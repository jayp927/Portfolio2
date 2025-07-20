import { motion } from 'framer-motion';

export interface AnimatedTextProps {
  text: string;
  className?: string;
  onAnimationComplete?: () => void;
}

const AnimatedText = ({ text, className = "", onAnimationComplete }: AnimatedTextProps) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 50,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={`flex flex-col items-center ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
      onAnimationComplete={onAnimationComplete}
    >
      {words.map((word, wordIndex) => (
        <motion.div
          key={wordIndex}
          className="flex justify-center"
          variants={container}
          initial="hidden"
          animate="visible"
          custom={wordIndex}
        >
          {Array.from(word).map((letter, index) => (
            <motion.span
              key={index}
              variants={child}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AnimatedText; 