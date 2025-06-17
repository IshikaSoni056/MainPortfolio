import { useEffect, useRef, useState } from "react";
import Tilt from "react-parallax-tilt";
import { myProjects } from "../constants";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectDetails from "../components/ProjectDetails";
import { motion, useInView } from "framer-motion";
// import { useRef } from "react";

const Projects = () => {
  const [preview, setPreview] = useState(null);
  const scrollRef = useRef(null);
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const loopedProjects = [...myProjects, ...myProjects, ...myProjects];

  // Scroll to center on mount
  useEffect(() => {
    const itemWidth = 300 + 16;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = itemWidth * myProjects.length;
    }
  }, []);

  // Infinite scroll simulation
  const handleScroll = () => {
    const itemWidth = 300 + 16;
    const scrollLeft = scrollRef.current.scrollLeft;
    const totalWidth = itemWidth * myProjects.length;

    if (scrollLeft <= totalWidth * 0.1) {
      scrollRef.current.scrollLeft += totalWidth;
    } else if (scrollLeft >= totalWidth * 2.9) {
      scrollRef.current.scrollLeft -= totalWidth;
    }
  };

  // Continuous scroll
 // CONTINUOUS SCROLL - smooth & no flicker
useEffect(() => {
  let animationFrameId;

  const scrollStep = () => {
    if (scrollRef.current && !isHovered) {
      scrollRef.current.scrollLeft += 0.8; // Adjust speed as needed
    }
    animationFrameId = requestAnimationFrame(scrollStep);
  };

  animationFrameId = requestAnimationFrame(scrollStep);

  return () => cancelAnimationFrame(animationFrameId);
}, [isHovered]);



const scroll = (direction) => {
  if (scrollRef.current) {
    const scrollAmount = direction === "left" ? -300 : 300;

    // Pause auto-scroll momentarily
    setIsHovered(true);

    scrollRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });

    // Resume auto-scroll after small delay
    setTimeout(() => {
      setIsHovered(false);
    }, 800); // Matches smooth scroll duration
  }
};
const headingRef = useRef(null);
const isInView = useInView(headingRef, { once: true, amount: 0.5 });


  return (
    <section className="relative section-spacing">
     <motion.h2
  ref={headingRef}
  initial={{ opacity: 0, y: 50 }}
  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="text-5xl font-bold leading-tight text-white mb-25"
>
  My Selected Projects
</motion.h2>

    <div className="relative">
      {/* Arrows */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/60 hover:bg-white/20 backdrop-blur transition-all duration-300 shadow-md hover:scale-110"
      >
        <ChevronLeft size={28} className="text-white" />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/60 hover:bg-white/20 backdrop-blur transition-all duration-300 shadow-md hover:scale-110"
      >
        <ChevronRight size={28} className="text-white" />
      </button>

      {/* Scrollable container */}
      <div ref={containerRef} className="relative">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex gap-6 overflow-x-auto pb-4 hide-scrollbar  pt-4 "
        >
          {loopedProjects.map((project, index) => (
            <Tilt
              glareEnable={false}
              scale={1.02}
              tiltMaxAngleX={30}
              tiltMaxAngleY={30}
              key={`${project.id}-${index}`}
              className="w-[300px] shrink-0"
            >
              {/* bg-neutral-900 */}
              <div
                onClick={() => setPreview(project)}
                className="relative h-full rounded-xl bg-[#13171e] shadow-lg hover:scale-[1.02]  transition-transform duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-t-xl h-48 object-cover w-full"
                />
                <div className="p-4 text-white">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <h5 className="text-pink-500">{project.Languages}</h5>
                  <p className="text-sm text-neutral-400">
                    {project.description.slice(0, 60)}...
                  </p>
                  <div className="mt-3 flex justify-between items-center">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-blue-400 hover:underline"
                    >
                      Live
                    </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-green-400 hover:underline"
                      >
                        GitHub
                      </a>   
                  </div>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
  </div>
      {preview && (
        <ProjectDetails {...preview} closeModal={() => setPreview(null)} />
      )}
    </section>
  );
};

export default Projects;
