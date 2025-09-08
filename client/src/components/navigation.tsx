import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    if (location === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navItems = [
    { label: "Services", href: "/services", sectionId: "services" },
    { label: "Integration", href: "/integration", sectionId: "integration" },
    { label: "Case Studies", href: "/case-studies", sectionId: "case-studies" },
    { label: "Contact", href: "/contact", sectionId: "contact" },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" data-testid="link-home">
              <h1 className="text-xl font-bold text-primary">PRL Insights & Partners</h1>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                location === "/" ? (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.sectionId)}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                    data-testid={`button-${item.sectionId}`}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                    data-testid={`link-${item.label.toLowerCase().replace(" ", "-")}`}
                  >
                    {item.label}
                  </Link>
                )
              ))}
              <Link href="/contact">
                <Button 
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  data-testid="button-get-started"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              {navItems.map((item) => (
                location === "/" ? (
                  <button
                    key={item.label}
                    onClick={() => {
                      scrollToSection(item.sectionId);
                      setIsMenuOpen(false);
                    }}
                    className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200 w-full text-left"
                    data-testid={`button-mobile-${item.sectionId}`}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                    data-testid={`link-mobile-${item.label.toLowerCase().replace(" ", "-")}`}
                  >
                    {item.label}
                  </Link>
                )
              ))}
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button 
                  className="w-full mt-2 bg-primary text-primary-foreground hover:bg-primary/90"
                  data-testid="button-mobile-get-started"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
