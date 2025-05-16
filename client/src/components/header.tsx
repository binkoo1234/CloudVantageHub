import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CloudVantageLogo } from "@/components/ui/logo";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id") || "";

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      closeMobileMenu();
    }
  };

  return (
    <header className="sticky top-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <CloudVantageLogo className="h-10 w-10" />
          <span className="text-[#0A2540] font-semibold text-xl md:block hidden">
            cloudvantage
          </span>
        </Link>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <button
            onClick={() => scrollToSection("about")}
            className={`text-[#0A2540] hover:text-primary transition-colors ${
              activeSection === "about" ? "text-primary" : ""
            }`}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className={`text-[#0A2540] hover:text-primary transition-colors ${
              activeSection === "services" ? "text-primary" : ""
            }`}
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className={`text-[#0A2540] hover:text-primary transition-colors ${
              activeSection === "contact" ? "text-primary" : ""
            }`}
          >
            Contact
          </button>
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-primary text-white hover:bg-primary/90 transition-all hover:-translate-y-1"
          >
            Get Started
          </Button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white px-4 py-2 shadow-md">
          <div className="flex flex-col space-y-3 pb-3">
            <button
              onClick={() => scrollToSection("about")}
              className={`text-[#0A2540] hover:text-primary py-2 transition-colors ${
                activeSection === "about" ? "text-primary" : ""
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className={`text-[#0A2540] hover:text-primary py-2 transition-colors ${
                activeSection === "services" ? "text-primary" : ""
              }`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`text-[#0A2540] hover:text-primary py-2 transition-colors ${
                activeSection === "contact" ? "text-primary" : ""
              }`}
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-primary text-white hover:bg-primary/90 w-full"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
