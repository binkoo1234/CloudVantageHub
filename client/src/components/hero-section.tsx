import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-4">
            Empowering Innovation in the Cloud
          </h1>
          <p className="text-lg md:text-xl text-[#6C757D] mb-8">
            Discover next-gen cloud solutions that help businesses harness the power of cloud.
          </p>
          <Button 
            onClick={scrollToContact}
            className="bg-primary text-white hover:bg-primary/90 px-6 py-6 h-auto text-lg font-medium transition-all hover:-translate-y-1"
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
}
