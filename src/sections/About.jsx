// import { useRef } from "react";
// import Card from "../components/Card";
// import { Globe } from "../components/globe";
// import CopyEmailButton from "../components/CopyEmailButton";
// import { Frameworks } from "../components/FrameWorks";

// const About = () => {
//   const grid2Container = useRef();
//   return (
//     <section className="c-space section-spacing" id="about">
//       <h2 className="text-heading">About Me</h2>
//       <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
//         {/* Grid 1 */}
//         <div className="flex items-end grid-default-color grid-1">
//           <img
//             src="assets/coding-pov.png"
//             className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
//           />
//           <div className="z-10">
//             <p className="headtext">Hi, I'm Ali Sanati</p>
//             <p className="subtext">
//               Over the last 4 years, I developed my frontend and backend dev
//               skills to deliver dynamic and software and web applications.
//             </p>
//           </div>
//           <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
//         </div>
//         {/* Grid 2 */}
//         <div className="grid-default-color grid-2">
//           <div
//             ref={grid2Container}
//             className="flex items-center justify-center w-full h-full"
//           >
//             <p className="flex items-end text-5xl text-gray-500">
//               CODE IS CRAFT
//             </p>
//             <Card
//               style={{ rotate: "75deg", top: "30%", left: "20%" }}
//               text="GRASP"
//               containerRef={grid2Container}
//             />
//             <Card
//               style={{ rotate: "-30deg", top: "60%", left: "45%" }}
//               text="SOLID"
//               containerRef={grid2Container}
//             />
//             <Card
//               style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
//               text="Design Patterns"
//               containerRef={grid2Container}
//             />
//             <Card
//               style={{ rotate: "-45deg", top: "55%", left: "0%" }}
//               text="Design Principles"
//               containerRef={grid2Container}
//             />
//             <Card
//               style={{ rotate: "20deg", top: "10%", left: "38%" }}
//               text="SRP"
//               containerRef={grid2Container}
//             />
//             <Card
//               style={{ rotate: "30deg", top: "70%", left: "70%" }}
//               image="assets/logos/csharp-pink.png"
//               containerRef={grid2Container}
//             />
//             <Card
//               style={{ rotate: "-45deg", top: "70%", left: "25%" }}
//               image="assets/logos/dotnet-pink.png"
//               containerRef={grid2Container}
//             />
//             <Card
//               style={{ rotate: "-45deg", top: "5%", left: "10%" }}
//               image="assets/logos/blazor-pink.png"
//               containerRef={grid2Container}
//             />
//           </div>
//         </div>
//         {/* Grid 3 */}
//         <div className="grid-black-color grid-3">
//           <div className="z-10 w-[50%]">
//             <p className="headtext">Time Zone</p>
//             <p className="subtext">
//               I'm based in Mars, and open to remote work worldwide
//             </p>
//           </div>
//           <figure className="absolute left-[30%] top-[10%]">
//             <Globe />
//           </figure>
//         </div>
//         {/* Grid 4 */}
//         <div className="grid-special-color grid-4">
//           <div className="flex flex-col items-center justify-center gap-4 size-full">
//             <p className="text-center headtext">
//               Do you want to start a project together?
//             </p>
//             <CopyEmailButton />
//           </div>
//         </div>
//         {/* Grid 5 */}
//         <div className="grid-default-color grid-5">
//           <div className="z-10 w-[50%]">
//             <p className="headText">Teck Stack</p>
//             <p className="subtext">
//               I specialize in a variety of languages, frameworks, and tools taht
//               allow me to build robust and scalable applications
//             </p>
//           </div>
//           <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
//             <Frameworks />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
import Tilt from 'react-parallax-tilt';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return ( 
    <section
      ref={ref}
      className="min-h-screen w-full bg-[#0d0d0d] text-white flex items-center justify-center px-8 py-24 mt-16 border-2 border-white/10 rounded-2xl shadow-lg"
    >
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-1/2 space-y-6"
        >
          <h1 className="text-5xl font-bold leading-tight text-white">
            Hello, <br /> I’m Ishika Soni!
          </h1>
          <p className="text-lg text-gray-300">
            I'm currently pursuing a <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">B.Tech in Computer Science and Engineering</span> at Madhav Institute of Technology and Science, Gwalior, maintaining a CGPA of 8.22.
            <br /><br />
            I'm a passionate <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Full Stack Developer</span> with a strong foundation in Data Structures & Algorithms and problem-solving. I love building responsive, dynamic web apps using <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">HTML, CSS, JavaScript, MERN, Firebase, and Next.js</span>. I also enjoy programming in C and C++, supported by solid logical and algorithmic skills. I'm always eager to learn, collaborate, and contribute to innovative tech initiatives.
          </p>
          <div className="flex gap-4 flex-wrap items-center">
            <a href="https://leetcode.com/u/Ishikasoni056/">
              <img src="/MainPortfolio/assets/socials/leetcode.png" alt="LeetCode" className="w-10 h-10 rounded-[15px] shadow-md transition-transform duration-300 hover:scale-150 border-2 blank" />
            </a>
            <a href="https://www.codechef.com/users/ishikasoni_056">
              <img src="/MainPortfolio/assets/socials/codechef.png" alt="CodeChef" className="w-10 h-10 rounded-[15px] shadow-md transition-transform duration-300 hover:scale-150 border-2" />
            </a>
            <a href="https://github.com/IshikaSoni056">
              <img src="/MainPortfolio/assets/socials/github.png" alt="GitHub" className="w-10 h-10 rounded-[15px] shadow-md transition-transform duration-300 hover:scale-150 border-2" />
            </a>
            <a href="https://www.linkedin.com/in/ishika-soni-8b005325a/">
              <img src="/MainPortfolio/assets/socials/linkedin.png" alt="LinkedIn" className="w-10 h-10 rounded-[15px] shadow-md transition-transform duration-300 hover:scale-150 border-2" />
            </a>
            <a href="https://www.geeksforgeeks.org/user/ishikasoni056/">
              <img src="/MainPortfolio/assets/socials/gfg.png" alt="LinkedIn" className="w-10 h-10 rounded-[15px] shadow-md transition-transform duration-300 hover:scale-150 border-2" />
            </a>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
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
              {/* Soft Glow Ring */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#6C63FF]/30 to-[#00D1FF]/20 blur-xl z-0"></div>

              {/* Image */}
              <img
                src="/MainPortfolio/assets/profile1.jpg"
                alt="Profile"
                className="relative z-10 w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />

              {/* Border overlay for style */}
              <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
            </div>
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
