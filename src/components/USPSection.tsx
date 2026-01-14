import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

const Counter = ({ end, suffix = "", duration = 2 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const stats = [
  {
    number: 60,
    suffix: "mm",
    label: "Solid Wood Thickness",
    description: "Extra-thick premium wood resists warping, cracking, and decay for decades",
  },
  {
    number: 25,
    suffix: "+",
    label: "Years Lifespan",
    description: "No treatment needed. Natural durability of European red larch",
  },
  {
    number: 500,
    suffix: "+",
    label: "Happy Customers",
    description: "Trusted by gardeners across Slovakia, Czech Republic, and Austria",
  },
  {
    number: 0,
    suffix: "",
    label: "Screws Needed",
    description: "Stack and tap with just a hammer. Assembly in under 1 hour",
  },
];

const USPSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 section-white">
      <div className="container-grid" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Why Choose <span className="text-primary">GridGarden</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built with premium European red larch and our patented BRICK system for unmatched durability
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-8 rounded-2xl bg-muted/50 hover:bg-muted transition-colors duration-300"
            >
              <div className="text-5xl lg:text-6xl font-extrabold text-primary mb-2">
                {isInView ? <Counter end={stat.number} suffix={stat.suffix} /> : `${stat.number}${stat.suffix}`}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{stat.label}</h3>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USPSection;
