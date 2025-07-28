import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-width section-padding py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-gradient mb-2">
              DataAnalyst Portfolio
            </h3>
            <p className="text-sm text-primary-foreground/70">
              Transforming data into insights
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { name: 'About', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Projects', href: '#projects' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Back to Top */}
          <div className="text-center md:text-right">
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/70 flex items-center justify-center gap-2">
            © {currentYear} Data Analytics Portfolio. Built with
            <Heart className="w-4 h-4 text-red-400" />
            and passion for data.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;