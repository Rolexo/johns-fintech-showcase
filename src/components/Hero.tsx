import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Globe } from "lucide-react";
import profileImage from "@/assets/john-doe-profile.png";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-muted via-background to-muted pt-20">
      <div className="container-custom px-6 md:px-12 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-tight">
              John Doe
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 font-medium">
              Certified Accountant | Financial Analyst | Auditor
            </p>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              I'm a highly accomplished and detail-oriented Certified Accountant with over 10 years 
              of experience in financial management, auditing, and strategic budgeting. I help 
              businesses make smarter financial decisions through accurate reporting and insightful 
              analysis.
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="mailto:john.doe@example.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="text-sm">john.doe@example.com</span>
              </a>
              <a
                href="https://linkedin.com/in/johndoe"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href="https://johndoe.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Globe className="w-5 h-5" />
                <span className="text-sm">Portfolio</span>
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-cta hover:bg-cta/90 text-lg px-8 py-6"
                onClick={scrollToContact}
              >
                Let's Work Together
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Download CV
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 md:order-2 flex justify-center animate-fade-in-up">
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-cta to-primary rounded-2xl transform rotate-3"></div>
              <img
                src={profileImage}
                alt="John Doe - Professional Accountant"
                className="relative rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
