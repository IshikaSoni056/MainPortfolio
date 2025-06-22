import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["   Wecome to My Portfolio!", "I am a Full Stack Developer", "And a Competitive Programmer"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="z-30 h-screen flex items-center justify-center text-center   w-full">
      {/* Desktop View */}
      <div className="hidden md:flex flex-col space-y-6 ">
       
       <div> <motion.h1
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I'm Ishika Soni
        </motion.h1>
        </div>
        <div className="flex flex-col items-start">
         
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
                          className="font-black text-white text-wrap text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-10 h-30 pt-5 text-wrap"
            />
          </motion.div>
         
        </div>
        <div className="">
        <a
            href="https://drive.google.com/file/d/1y3eNXZGk7gK7fEmRnqqNlITTNEiWAyIW/view?usp=sharing" 
            target="_blank"
            rel="noopener noreferrer"
            className=" px-6 py-3 backdrop-blur-md bg-white/10 text-white font-medium border border-purple-400/40 rounded-xl shadow-[0_0_10px_rgba(200,100,255,0.3)] hover:shadow-[0_0_20px_rgba(200,100,255,0.6)] transition-all duration-300 hover:scale-105"
          >
            View Resume
          </a>
      </div>
      </div>
      {/* Mobile View */}
      <div className="flex flex-col space-y-6 md:hidden h-full justify-center items-center">
        <motion.p
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi,I'm Ishika Soni
        </motion.p>
        <div className="flex flex-col items-center">
         
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-bold text-white text-5xl text-center mb-15 h-30 pt-5 text-wrap mb-30"
            />
          </motion.div>
         
        </div>
        <div className="">
        <a
            href="https://drive.google.com/file/d/1y3eNXZGk7gK7fEmRnqqNlITTNEiWAyIW/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className=" px-6 py-3 backdrop-blur-md bg-white/10 text-white font-medium border border-purple-400/40 rounded-xl shadow-[0_0_10px_rgba(200,100,255,0.3)] hover:shadow-[0_0_20px_rgba(200,100,255,0.6)] transition-all duration-300 hover:scale-105"
          >
            View Resume
          </a>
      </div>
      </div>
    </div>
  );
};

export default HeroText;


