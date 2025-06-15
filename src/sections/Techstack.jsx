import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const technologies = [
  { name: "HTML", icon: "html.png" },
  { name: "CSS", icon: "css.png" },
  { name: "JavaScript", icon: "javascript.png" },
  { name: "React", icon: "reactjs.png" },
  { name: "Tailwind", icon: "tailwind.png" },
  { name: "Bootstrap", icon: "bootstrap.png" },
  { name: "Next.js", icon: "nextjs.png" },
  { name: "Yarn", icon: "yarn.webp" },
  { name: "TypeScript", icon: "typescript.png" },
  { name: "Node.js", icon: "nodejs.png" },
  { name: "npm", icon: "npm.png" },
  { name: "Express.js", icon: "expressjs.png" },
  { name: "MongoDB", icon: "mongodb.png" },
  { name: "VS Code", icon: "vscode.png" },
  { name: "Redux", icon: "redux.png" },
  { name: "Firebase", icon: "firebase.png" },
  { name: "Git", icon: "git.png" },
  { name: "GitHub", icon: "github.png" },
  { name: "Vercel", icon: "vercel.png" },
  { name: "Canva", icon: "canva.png" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Techstack = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="min-h-screen w-full bg-[#13171e] border-2  border-white/40 rounded-2xl text-white px-8 py-24 mt-16 flex flex-col items-center justify-center"
    >
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold mb-8 text-center"
      >
        Technologies
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-lg text-gray-400 mb-12 text-center max-w-2xl"
      >
        Here are some of the technologies that I know
      </motion.p>

     <motion.div
  className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-8 gap-6 max-w-7xl w-full justify-items-center"
  variants={containerVariants}
  initial="hidden"
  animate={inView ? "visible" : "hidden"}
>
  {technologies.map((tech, index) => (
    <motion.div
      key={index}
      variants={itemVariants}
      whileHover={{ scale: 1.2 }}
      className="relative flex flex-col items-center justify-center w-24 h-24 group"
    >
      {/* Animated glow */}
      <div className="absolute w-20 h-20 rounded-full animate-glow z-0 group-hover:scale-110 transition-transform duration-300" />

      {/* Icon */}
      <img
        src={`/MainPortfolio/assets/Tech/${tech.icon}`}
        alt={tech.name}
        className="w-18 h-18 object-contain z-10"
      />

      {/* Name on hover */}
      <span className="absolute top-full mt-1 text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {tech.name}
      </span>
    </motion.div>
  ))}
</motion.div>

    </section>
  );
};

export default Techstack;
