import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, Mountain, TreePine, Shield } from "lucide-react";
import woodTexture from "@/assets/wood-texture.jpg";

const values = [
  {
    icon: TreePine,
    title: "Premium European Larch",
    description: "The same wood used in Alpine construction for centuries",
  },
  {
    icon: Mountain,
    title: "Handcrafted in Slovakia",
    description: "Attention to detail that mass production can't match",
  },
  {
    icon: Leaf,
    title: "Sustainable Sourcing",
    description: "Responsibly harvested from European forests",
  },
  {
    icon: Shield,
    title: "True Long-Term Value",
    description: "One Premium bed outlasts 3-5 cheaper alternatives",
  },
];

const CompanyStory = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 section-white overflow-hidden" ref={containerRef}>
      <div className="container-grid">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <img
                src={woodTexture}
                alt="Premium European red larch wood texture"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
              
              {/* Overlay Text */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-4xl font-bold text-primary-foreground mb-2">60mm</p>
                <p className="text-primary-foreground/80">Solid Wood Thickness</p>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="absolute -top-6 -right-6 bg-primary text-primary-foreground px-6 py-4 rounded-2xl shadow-elevated"
            >
              <p className="text-3xl font-bold">25+</p>
              <p className="text-sm opacity-80">Years Guaranteed</p>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6">
              Our Story
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
              Built to Last.<br />
              <span className="text-primary">Made in Slovakia.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We use premium European Red Larch — the same wood used in Alpine architecture 
              for centuries. Each piece is crafted in our workshop with attention to detail 
              that mass production can't match.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;
