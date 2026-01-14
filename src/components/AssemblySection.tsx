import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Layers, Hammer, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: Layers,
    title: "Stack the blocks",
    description: "Like LEGO, simply stack wooden blocks on top of each other. Each piece fits perfectly.",
  },
  {
    icon: Hammer,
    title: "Tap into place",
    description: "Use a hammer to gently tap the corner joints secure. No screws, no tools required.",
  },
  {
    icon: CheckCircle2,
    title: "Done!",
    description: "Assembly manual included with every order. Your bed is ready to grow.",
  },
];

const AssemblySection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 section-white overflow-hidden">
      <div className="container-grid" ref={containerRef}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6">
              Patented BRICK System
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
              Just a Hammer Needed
            </h2>
            <p className="text-xl text-muted-foreground mb-4">
              No screws, no tools, no hassle.
            </p>
            <p className="text-muted-foreground mb-10">
              Simply stack and tap each wooden block into place. The entire bed can be assembled 
              in under an hour, making it the most intuitive garden project you'll ever build.
            </p>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                  className="flex gap-5"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      <span className="text-primary mr-2">{index + 1}.</span>
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Decorative Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10 rounded-3xl" />
              
              {/* Animated Blocks */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64">
                  {/* Bottom Block */}
                  <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-16 bg-gradient-to-r from-secondary to-secondary/80 rounded-lg shadow-lg"
                  />
                  {/* Middle Block */}
                  <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="absolute bottom-16 left-1/2 -translate-x-1/2 w-48 h-16 bg-gradient-to-r from-secondary/90 to-secondary/70 rounded-lg shadow-lg"
                  />
                  {/* Top Block with animation */}
                  <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.8, type: "spring", bounce: 0.3 }}
                    className="absolute bottom-32 left-1/2 -translate-x-1/2 w-48 h-16 bg-gradient-to-r from-secondary/80 to-secondary/60 rounded-lg shadow-lg"
                  />
                  
                  {/* Hammer Icon */}
                  <motion.div
                    initial={{ x: 50, y: -50, opacity: 0, rotate: -45 }}
                    animate={isInView ? { x: 0, y: 0, opacity: 1, rotate: 0 } : {}}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className="absolute -top-4 -right-8"
                  >
                    <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center shadow-elevated">
                      <Hammer className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Time Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 1.4 }}
                className="absolute bottom-8 right-8 bg-card px-6 py-3 rounded-xl shadow-card"
              >
                <p className="text-3xl font-bold text-primary">&lt;1h</p>
                <p className="text-sm text-muted-foreground">Assembly Time</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AssemblySection;
