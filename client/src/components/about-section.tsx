import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-[#F8F9FA]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0A2540] mb-6">About Us</h2>
          <p className="text-lg text-[#6C757D] mb-8">
            We provide innovative cloud solutions that help businesses harness the power of the cloud to drive growth and exceptional performance.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <Card className="border-none shadow-md overflow-hidden">
              <CardContent className="p-0">
                <div className="relative w-full h-56 mb-4 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                    alt="Team collaborating on cloud solutions" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                  <p className="text-[#6C757D]">Our team of cloud specialists brings years of industry experience to every project.</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md overflow-hidden">
              <CardContent className="p-0">
                <div className="relative w-full h-56 mb-4 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                    alt="Cloud computing infrastructure" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Cutting-Edge Technology</h3>
                  <p className="text-[#6C757D]">We leverage the latest cloud technologies to deliver scalable, reliable solutions.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
