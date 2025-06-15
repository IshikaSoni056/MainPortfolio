
// import Tilt from 'react-parallax-tilt';
// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";

// const About = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   const fadeUp = {
//     hidden: { opacity: 0, y: 70 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return ( 
//     <section
//       ref={ref}
//       className="min-h-screen w-full bg-[#0d0d0d] text-white flex items-center justify-center px-8 py-24 mt-16 border-2 border-white/10 rounded-2xl shadow-lg"
//     >
//       <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
//         {/* Left Content */}
//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="md:w-1/2 space-y-6"
//         >
//           <h1 className="text-5xl font-bold leading-tight text-white">
//             Hello, <br /> I’m Ishika Soni!
//           </h1>
//           <p className="text-lg text-gray-300">
//             I'm currently pursuing a <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">B.Tech in Computer Science and Engineering</span> at Madhav Institute of Technology and Science, Gwalior, maintaining a CGPA of 8.22.
//             <br /><br />
//             I'm a passionate <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Full Stack Developer</span> with a strong foundation in Data Structures & Algorithms and problem-solving. I love building responsive, dynamic web apps using <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">HTML, CSS, JavaScript, MERN, Firebase, and Next.js</span>. I also enjoy programming in C and C++, supported by solid logical and algorithmic skills. I'm always eager to learn, collaborate, and contribute to innovative tech initiatives.
//           </p>
//           <div className="flex gap-4 flex-wrap items-center">
//             <a href="https://leetcode.com/u/Ishikasoni056/">
//               <img src="/MainPortfolio/assets/socials/leetcode.png" alt="LeetCode" className="w-10 h-10 rounded-[15px] shadow-md transition-transform duration-300 hover:scale-150 border-2 blank" />
//             </a>
//             <a href="https://www.codechef.com/users/ishikasoni_056">
//               <img src="/MainPortfolio/assets/socials/codechef.png" alt="CodeChef" className="w-10 h-10 rounded-[15px] shadow-md transition-transform duration-300 hover:scale-150 border-2" />
//             </a>
//             <a href="https://github.com/IshikaSoni056">
//               <img src="/MainPortfolio/assets/socials/github.png" alt="GitHub" className="w-10 h-10 rounded-[15px] shadow-md transition-transform duration-300 hover:scale-150 border-2" />
//             </a>
//             <a href="https://www.linkedin.com/in/ishika-soni-8b005325a/">
//               <img src="/MainPortfolio/assets/socials/linkedin.png" alt="LinkedIn" className="w-10 h-10 rounded-[15px] shadow-md transition-transform duration-300 hover:scale-150 border-2" />
//             </a>
//             <a href="https://www.geeksforgeeks.org/user/ishikasoni056/">
//               <img src="/MainPortfolio/assets/socials/gfg.png" alt="LinkedIn" className="w-10 h-10 rounded-[15px] shadow-md transition-transform duration-300 hover:scale-150 border-2" />
//             </a>
//           </div>
//         </motion.div>

//         {/* Right Content */}
//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//           transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
//           className="relative md:w-1/2 flex items-center justify-center"
//         >
//           <Tilt
//             tiltMaxAngleX={40}
//             tiltMaxAngleY={40}
//             perspective={1000}
//             transitionSpeed={1000}
//             scale={1.05}
//             gyroscope={true}
//             className="w-[300px] h-[400px]"
//           >
//             <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(100,100,255,0.2)] border border-white/10 bg-gradient-to-br from-[#1c1c1c] to-[#2b2b2b] group">
//               {/* Soft Glow Ring */}
//               <div className="absolute inset-0 bg-gradient-to-tr from-[#6C63FF]/30 to-[#00D1FF]/20 blur-xl z-0"></div>

//               {/* Image */}
//               <img
//                 src="/MainPortfolio/assets/profile1.jpg"
//                 alt="Profile"
//                 className="relative z-10 w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500 ease-in-out"
//               />

//               {/* Border overlay for style */}
//               <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
//             </div>
//           </Tilt>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default About;


import { motion, useInView } from "framer-motion";
import Tilt from 'react-parallax-tilt';
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const leftVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const rightVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut", delay: 0.5 } },
  };

  return (
    <section
      ref={ref}
      className="min-h-screen w-full bg-[#0d1117] text-white flex items-center justify-center px-8 py-24 mt-16 border-2 border-white/10 rounded-2xl shadow-lg"
    >
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Side Content */}
        <motion.div
          variants={leftVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="md:w-1/2 space-y-6"
        >
          <h1 className="text-5xl font-bold leading-tight text-white">
            Hello, <br /> I’m Ishika Soni!
          </h1>
          <p className="text-lg text-gray-300">
            I'm currently pursuing a <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">B.Tech in Computer Science and Engineering</span> at MITS, Gwalior, maintaining a CGPA of 8.22.
            <br /><br />
            I'm a passionate <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Full Stack Developer</span> with strong fundamentals in DSA and love building web apps using <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">HTML, CSS, JavaScript, MERN, Firebase, and Next.js</span>. I also code in C/C++ with a logical approach and a learning mindset.
          </p>
          <div className="flex gap-4 flex-wrap items-center">
            {[
              { href: "https://leetcode.com/u/Ishikasoni056/", src: "leetcode.png" },
              { href: "https://www.codechef.com/users/ishikasoni_056", src: "codechef.png" },
              { href: "https://github.com/IshikaSoni056", src: "github.png" },
              { href: "https://www.linkedin.com/in/ishika-soni-8b005325a/", src: "linkedin.png" },
              { href: "https://www.geeksforgeeks.org/user/ishikasoni056/", src: "gfg.png" },
            ].map((item, i) => (
              <a key={i} href={item.href} target="_blank" rel="noreferrer">
                <img
                  src={`/MainPortfolio/assets/socials/${item.src}`}
                  alt={item.src}
                  className="w-10 h-10 rounded-[15px] shadow-md transition-transform duration-300 hover:scale-150 border-2"
                />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Side Content (Tilt Profile) */}
        <motion.div
          variants={rightVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative md:w-1/2 flex items-center justify-center"
        >
          <Tilt
            tiltMaxAngleX={40}
            tiltMaxAngleY={40}
            perspective={1000}
            transitionSpeed={1000}
            scale={1.05}
            gyroscope={true}
            className="w-[300px] h-[400px]"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(100,100,255,0.2)] border border-white/10 bg-gradient-to-br from-[#1c1c1c] to-[#2b2b2b] group">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#6C63FF]/30 to-[#00D1FF]/20 blur-xl z-0"></div>
              <img
                src="/MainPortfolio/assets/profile1.jpg"
                alt="Profile"
                className="relative z-10 w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
            </div>
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
