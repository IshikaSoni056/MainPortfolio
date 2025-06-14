import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["   Wecome to My Portfolio!", "I am a Full Stack Developer", "And a Competitive Programmer"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="z-30 h-screen flex items-center justify-center text-center px-25 pb-20">
      {/* Desktop View */}
      <div className="hidden md:flex flex-col space-y-6">
        <motion.h1
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I'm Ishika Soni
        </motion.h1>
        
        <div className="flex flex-col items-start">
         
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
                          className="font-black text-white text-wrap text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-center"

            />
          </motion.div>
         
        </div>
      </div>
      {/* Mobile View */}
      <div className="flex- flex-col space-y-6 md:hidden">
        <motion.p
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi,I'm Ishika Soni
        </motion.p>
        <div>
         
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-bold text-white text-6xl text-center"
            />
          </motion.div>
         
        </div>
      </div>
    </div>
  );
};

export default HeroText;


