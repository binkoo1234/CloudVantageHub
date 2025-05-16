import { Button } from "@/components/ui/button";

export default function CtaSection() {
  return (
    <section id="contact" className="py-16 bg-[#0A2540] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg mb-8">Get in touch with us today to learn more about our cloud solutions.</p>
          <Button 
            className="bg-primary text-white hover:bg-primary/90 px-6 py-6 h-auto text-lg font-medium transition-all hover:-translate-y-1"
            onClick={() => {
              // In a real application, this would open a contact form or modal
              window.open('mailto:contact@cloudvantage.com', '_blank');
            }}
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
}
