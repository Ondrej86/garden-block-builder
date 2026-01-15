import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import heroImage from "@/assets/hero-garden.jpg";

// Animated counter component for hero stats (faster animation)
const HeroAnimatedCounter = ({ end, suffix = "", duration = 1.5 }: { end: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number;
          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOut * end));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Premium wooden raised garden beds with lush vegetables growing"
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className="container-grid relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Product Line Label */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-primary-foreground/80 text-sm tracking-[0.25em] uppercase font-medium mb-4"
          >
            Raised Beds • Retaining Walls • Stairs • Custom Projects
          </motion.p>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-primary-foreground mb-6 leading-tight"
          >
            Design Your
            <br />
            <span className="text-primary-foreground/90">Dream Garden</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl text-primary-foreground/85 mb-10 max-w-xl mx-auto leading-relaxed"
          >
            Premium modular garden beds built to last 25+ years.
            Use our 3D configurator to design your perfect raised bed and get instant pricing.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="hero" size="xl" className="group">
              Launch Configurator
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="xl" className="group">
              <Play className="w-5 h-5" />
              See How It Works
            </Button>
          </motion.div>

          {/* Stats Row - Larger with fast animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 flex flex-wrap gap-12 sm:gap-16 justify-center"
          >
            <div className="text-center">
              <p className="text-5xl sm:text-6xl font-bold text-primary-foreground">
                <HeroAnimatedCounter end={500} suffix="+" duration={1.2} />
              </p>
              <p className="text-base text-primary-foreground/70 mt-1">Happy Customers</p>
            </div>
            <div className="text-center">
              <p className="text-5xl sm:text-6xl font-bold text-primary-foreground">
                <HeroAnimatedCounter end={60} suffix="mm" duration={1.2} />
              </p>
              <p className="text-base text-primary-foreground/70 mt-1">Solid Wood</p>
            </div>
            <div className="text-center">
              <p className="text-5xl sm:text-6xl font-bold text-primary-foreground">
                <HeroAnimatedCounter end={25} suffix="+" duration={1.2} />
              </p>
              <p className="text-base text-primary-foreground/70 mt-1">Year Lifespan</p>
            </div>
            <div className="text-center">
              <p className="text-5xl sm:text-6xl font-bold text-primary-foreground">
                <HeroAnimatedCounter end={0} duration={0.5} />
              </p>
              <p className="text-base text-primary-foreground/70 mt-1">Screws Needed</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary-foreground/60 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
