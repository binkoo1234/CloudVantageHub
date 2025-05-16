import { Card, CardContent } from "@/components/ui/card";
import { Cog, Cloud, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Cog,
    title: "Cloud Consulting",
    description: "Expert advice to navigate your cloud transformation journey."
  },
  {
    icon: Cloud,
    title: "Cloud Integration",
    description: "Seamless integration of cloud technologies into your operations."
  },
  {
    icon: ShieldCheck,
    title: "Cloud Security",
    description: "Advanced security measures to protect your cloud environment."
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#0A2540] mb-12 text-center">Our Services</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-[#F8F9FA] p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center">
                  <service.icon className="text-primary text-2xl" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-[#6C757D]">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <Card className="bg-[#F8F9FA] border-none shadow-md overflow-hidden">
            <CardContent className="p-0">
              <div className="relative w-full h-48 mb-4 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                  alt="Advanced cloud computing technology" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Infrastructure Management</h3>
                <p className="text-[#6C757D]">Comprehensive management of your cloud infrastructure, ensuring optimal performance and cost efficiency.</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#F8F9FA] border-none shadow-md overflow-hidden">
            <CardContent className="p-0">
              <div className="relative w-full h-48 mb-4 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                  alt="Cloud security visualization" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Data Protection</h3>
                <p className="text-[#6C757D]">Enterprise-grade security solutions to safeguard your valuable data in the cloud.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
