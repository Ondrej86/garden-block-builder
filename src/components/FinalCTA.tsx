import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 section-cream" ref={containerRef}>
      <div className="container-grid">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
            Ready to Start Growing?
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Design your perfect garden bed in minutes. No registration required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="xl" className="group">
              Launch 3D Configurator
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl">
              Browse All Products
            </Button>
          </div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            <span className="trust-badge">🚚 Free Shipping within 100km</span>
            <span className="trust-badge">✓ No Chemical Treatment</span>
            <span className="trust-badge">✓ Expandable Anytime</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
