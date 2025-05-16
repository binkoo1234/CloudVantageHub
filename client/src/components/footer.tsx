import { Link } from "wouter";
import { CloudVantageLogo } from "@/components/ui/logo";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

const serviceLinks = [
  { name: "Cloud Consulting", href: "#" },
  { name: "Cloud Integration", href: "#" },
  { name: "Cloud Security", href: "#" },
  { name: "Infrastructure Management", href: "#" }
];

const companyLinks = [
  { name: "About Us", href: "#" },
  { name: "Careers", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Press", href: "#" }
];

const connectLinks = [
  { name: "Contact Us", href: "#" },
  { name: "Support", href: "#" }
];

const socialLinks = [
  { icon: Twitter, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Facebook, href: "#" },
  { icon: Github, href: "#" }
];

export default function Footer() {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="inline-block">
              <CloudVantageLogo className="h-10 w-10 mb-4" />
            </Link>
            <p className="text-[#6C757D]">Empowering Innovation in the Cloud</p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-[#6C757D] hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-[#6C757D] hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              {connectLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-[#6C757D] hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="flex space-x-4 mt-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.href} 
                    className="text-[#6C757D] hover:text-primary transition-colors"
                    aria-label={`Follow us on ${social.icon.name}`}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#6C757D] text-sm">&copy; 2024 CloudVantage. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-[#6C757D] text-sm hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-[#6C757D] text-sm hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="text-[#6C757D] text-sm hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
