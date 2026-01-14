import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-grid py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">G</span>
              </div>
              <span className="font-bold text-xl">GridGarden</span>
            </a>
            <p className="text-primary-foreground/70 mb-6">
              Premium modular garden beds built to last 25+ years. 
              Made in Slovakia with European red larch.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="font-bold text-lg mb-6">Products</h4>
            <ul className="space-y-3">
              <li>
                <a href="/collections/zahony-basic" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  BASIC Line
                </a>
              </li>
              <li>
                <a href="/collections/zahony-premium" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  PREMIUM Line
                </a>
              </li>
              <li>
                <a href="/collections/oporny-mur" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Retaining Wall
                </a>
              </li>
              <li>
                <a href="/pages/garden-manager" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  3D Configurator
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="/pages/o-nas" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/pages/faq" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/pages/contact" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:info@zahonynamieru.sk" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  info@zahonynamieru.sk
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+421900000000" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  +421 900 000 000
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70">
                  Slovakia, EU
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            © 2024 GridGarden. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-primary-foreground/50">
            <span>🇸🇰 Made in Slovakia</span>
            <span>🌲 Sustainable Wood</span>
            <span>🚚 Free Shipping 100km</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
