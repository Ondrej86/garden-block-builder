import { motion } from "framer-motion";
import { Building2, Users, Percent, FileCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: Percent,
    title: "Provízny program",
    description: "Získajte atraktívnu províziu za každý úspešný projekt"
  },
  {
    icon: FileCheck,
    title: "Technická podpora",
    description: "Bezplatné návrhy a vizualizácie pre vašich klientov"
  },
  {
    icon: Users,
    title: "Prioritná komunikácia",
    description: "Dedikovaný kontakt a rýchle odpovede na vaše otázky"
  },
  {
    icon: Building2,
    title: "B2B ceny",
    description: "Špeciálne veľkoobchodné ceny pre pravidelných partnerov"
  }
];

const partnerTypes = [
  {
    title: "Pre architektov",
    description: "Integrujte naše záhony do vašich projektov. Poskytneme vám 3D modely, technické výkresy a podporu pri návrhu.",
    cta: "Stať sa partnerom"
  },
  {
    title: "Pre záhradníctva",
    description: "Rozšírte svoju ponuku o prémiové vyvýšené záhony. Dropshipping alebo skladové zásoby - vy rozhodujete.",
    cta: "Spolupracujme"
  },
  {
    title: "Pre developerov",
    description: "Zvýšte hodnotu vašich projektov komunitnými záhradami. Riešenia na mieru pre rezidenčné aj komerčné projekty.",
    cta: "Kontaktujte nás"
  }
];

const AffiliateSection = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Partnerský program
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Spolupracujte s nami
          </h2>
          <p className="text-lg text-muted-foreground">
            Hľadáme architektov, záhradníctva a developerov, ktorí chcú ponúknuť 
            svojim klientom prémiové riešenia pre záhrady.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6 bg-background rounded-2xl border border-border/50"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Partner Types */}
        <div className="grid md:grid-cols-3 gap-6">
          {partnerTypes.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group bg-background rounded-2xl p-8 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-foreground mb-4">{partner.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{partner.description}</p>
              <Button 
                variant="outline" 
                className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
              >
                {partner.cta}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-primary rounded-3xl p-8 md:p-12 text-center text-primary-foreground"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Máte záujem o spoluprácu?
          </h3>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Napíšte nám a do 24 hodín vám pošleme kompletné informácie o partnerskom programe 
            vrátane cenníka a podmienok spolupráce.
          </p>
          <Button 
            size="lg" 
            className="bg-background text-primary hover:bg-background/90 font-semibold px-8"
          >
            Kontaktujte nás
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default AffiliateSection;
