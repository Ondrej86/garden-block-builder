import Header from "@/components/Header";
import Hero from "@/components/Hero";
import USPSection from "@/components/USPSection";
import ProductCategories from "@/components/ProductCategories";
import AssemblySection from "@/components/AssemblySection";
import ConfiguratorCTA from "@/components/ConfiguratorCTA";
import Testimonials from "@/components/Testimonials";
import CompanyStory from "@/components/CompanyStory";
import AffiliateSection from "@/components/AffiliateSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <USPSection />
        <section id="products">
          <ProductCategories />
        </section>
        <section id="assembly">
          <AssemblySection />
        </section>
        <ConfiguratorCTA />
        <Testimonials />
        <section id="about">
          <CompanyStory />
        </section>
        <section id="partners">
          <AffiliateSection />
        </section>
        <FinalCTA />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
