import { Card } from "@/components/ui/card";
import { FileText, TrendingUp, Shield, Database, Users, Award } from "lucide-react";

const About = () => {
  const competencies = [
    { icon: FileText, label: "Financial Reporting", color: "text-cta" },
    { icon: TrendingUp, label: "Tax Planning", color: "text-cta" },
    { icon: Shield, label: "IFRS Compliance", color: "text-cta" },
    { icon: Database, label: "ERP Systems", color: "text-cta" },
    { icon: Users, label: "Team Leadership", color: "text-cta" },
    { icon: Award, label: "Strategic Budgeting", color: "text-cta" },
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">About Me</h2>
          <div className="w-24 h-1 bg-cta mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-card shadow-lg border-border">
            <p className="text-lg text-foreground/90 leading-relaxed mb-8">
              As a seasoned Certified Public Accountant (CPA-K) with over a decade of experience, 
              I specialize in transforming complex financial data into actionable business insights. 
              My expertise spans financial management, auditing, strategic budgeting, and compliance 
              across diverse industries.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed mb-8">
              Throughout my career, I've demonstrated exceptional leadership in managing cross-functional 
              teams, implementing process improvements that have consistently reduced costs while enhancing 
              accuracy, and ensuring full regulatory compliance with IFRS and local tax regulations.
            </p>
            
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-primary mb-8 text-center">Core Competencies</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {competencies.map((competency, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-muted transition-colors"
                  >
                    <competency.icon className={`w-10 h-10 mb-3 ${competency.color}`} />
                    <span className="text-sm font-medium text-foreground">
                      {competency.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
