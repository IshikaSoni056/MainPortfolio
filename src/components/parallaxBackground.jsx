
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Particles } from "./Particles";

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { damping: 50 });

  // Scroll-based transforms
  const mountain3Y = useTransform(x, [0, 0.3], ["0%", "90%"]);
  const planetsX = useTransform(x, [0, 0.3], ["0%", "-60%"]);
  const mountain2Y = useTransform(x, [0, 0.3], ["0%", "30%"]);
  const mountain1Y = useTransform(x, [0, 0.3], ["0%", "0%"]);
  const sky = useTransform(x, [0, 0.3], ["0%", "20%"]);

  // Entry animation variant
  const fadeZoomIn = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.5 } },
  };

  return (
    <section className="absolute inset-0 bg-black/40">
      <div className="relative h-screen overflow-y-hidden overflow-x-hidden">

        {/* Background Sky */}
        <motion.div
          className="absolute inset-0 w-full h-screen -z-50"
          initial="hidden"
          animate="visible"
          variants={fadeZoomIn}
          style={{
            backgroundImage: "url(/MainPortfolio/assets/stars.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            x: sky,
          }}
          
        />

       {/* <Particles
  className="absolute inset-0 -z-50"
  quantity={300}
  staticity={20}
  ease={60}
  size={1}
  color="#ffffff"
  refresh
/> */}


        {/* Mountain Layer 3 */}
        <motion.div
          className="absolute inset-0 -z-40"
          initial="hidden"
          animate="visible"
          variants={fadeZoomIn}
          style={{
            backgroundImage: "url(/MainPortfolio/assets/mountains.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain3Y,
          }}
        />

        {/* Planets */}
        <motion.div
          className="absolute inset-0 -z-30"
          initial="hidden"
          animate="visible"
          variants={fadeZoomIn}
          style={{
            backgroundImage: "url(/MainPortfolio/assets/planet1.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            x: planetsX,
          }}
        />

        {/* Mountain Layer 2 */}
        <motion.div
          className="absolute inset-0 z-20"
          initial="hidden"
          animate="visible"
          variants={fadeZoomIn}
          style={{
            backgroundImage: "url(/MainPortfolio/assets/mountain-2.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain2Y,
          }}
        />

        {/* Mountain Layer 1 */}
        <motion.div
          className="absolute inset-0 z-20"
          initial="hidden"
          animate="visible"
          variants={fadeZoomIn}
          style={{
            backgroundImage: "url(/MainPortfolio/assets/mountain-1.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain1Y,
          }}
        />
      </div>
    </section>
  );
};

export default ParallaxBackground;
