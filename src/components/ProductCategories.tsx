import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import productPremium from "@/assets/product-premium.jpg";
import productBasic from "@/assets/product-basic.jpg";
import productWall from "@/assets/product-wall.jpg";

const products = [
  {
    id: "basic",
    name: "BASIC Line",
    badge: "Budget-Friendly",
    badgeClass: "badge-budget",
    price: "from €45",
    material: "Spruce Wood • 18mm",
    lifespan: "3-5 Years",
    description: "Perfect entry point for beginners and renters. Affordable quality for seasonal gardening.",
    features: ["Easy assembly", "Lightweight design", "Ideal for small spaces"],
    image: productBasic,
    link: "/collections/zahony-basic",
  },
  {
    id: "premium",
    name: "PREMIUM Line",
    badge: "Most Popular",
    badgeClass: "badge-popular",
    price: "from €123",
    material: "Red Larch • 60mm",
    lifespan: "25+ Years",
    description: "Our flagship product. Premium European red larch with patented BRICK modular system.",
    features: ["Patented BRICK system", "No maintenance", "Expandable anytime", "Superior insulation"],
    image: productPremium,
    link: "/collections/zahony-premium",
    featured: true,
  },
  {
    id: "wall",
    name: "Retaining Wall",
    badge: "Custom Design",
    badgeClass: "badge-custom",
    price: "Custom Pricing",
    material: "Red Larch • 60mm",
    lifespan: "25+ Years",
    description: "Create stunning terraces, slopes, and decorative walls with unlimited shapes.",
    features: ["Unlimited shapes", "Multi-level designs", "Stairs included"],
    image: productWall,
    link: "/collections/oporny-mur",
  },
];

const ProductCategories = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 section-cream">
      <div className="container-grid" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Choose Your Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From budget-friendly starters to premium lifetime investments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`group relative bg-card rounded-2xl overflow-hidden shadow-card card-hover ${
                product.featured ? "lg:scale-105 lg:-my-4 ring-2 ring-primary" : ""
              }`}
            >
              {/* Badge */}
              <div className={`absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full text-xs font-bold ${product.badgeClass}`}>
                {product.badge}
              </div>

              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold text-foreground">{product.name}</h3>
                  {product.featured && (
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span>{product.material}</span>
                  <span>•</span>
                  <span>{product.lifespan}</span>
                </div>

                <p className="text-muted-foreground mb-4">{product.description}</p>

                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{product.price}</span>
                  <Button variant={product.featured ? "default" : "outline"} size="sm" className="group/btn">
                    View Collection
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
