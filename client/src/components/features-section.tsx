import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "Expertise",
    description: "Our team has decades of combined experience in cloud technologies"
  },
  {
    title: "Tailored Solutions",
    description: "Customized cloud strategies based on your unique business needs"
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock technical assistance for your cloud environment"
  },
  {
    title: "Cost Optimization",
    description: "Strategies to maximize ROI and minimize cloud spending"
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-[#F8F9FA]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0A2540] mb-12 text-center">Why Choose CloudVantage?</h2>
          
          <div className="grid md:grid-cols-2 gap-y-8 gap-x-12">
            {features.map((feature, index) => (
              <div key={index} className="flex">
                <div className="mr-4 text-primary">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-[#6C757D]">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
