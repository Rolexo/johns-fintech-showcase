import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Users } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-cta mx-auto rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Education */}
          <Card className="p-8 bg-card shadow-lg border-border hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-cta/10 rounded-full flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-cta" />
              </div>
              <h3 className="text-2xl font-bold text-primary">Education</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  Bachelor of Commerce (Accounting)
                </h4>
                <p className="text-muted-foreground font-medium mb-1">
                  University of Nairobi
                </p>
                <p className="text-sm text-muted-foreground">2006 - 2010</p>
                <p className="text-foreground/80 mt-3 leading-relaxed">
                  Specialized in Financial Accounting, Management Accounting, and Auditing. 
                  Graduated with honors, demonstrating exceptional analytical and 
                  problem-solving abilities.
                </p>
              </div>
            </div>
          </Card>

          {/* Certifications */}
          <Card className="p-8 bg-card shadow-lg border-border hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-cta/10 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-cta" />
              </div>
              <h3 className="text-2xl font-bold text-primary">Certifications</h3>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  Certified Public Accountant (CPA-K)
                </h4>
                <p className="text-muted-foreground font-medium mb-1">
                  Kasneb (Kenya Accountants and Secretaries National Examinations Board)
                </p>
                <p className="text-sm text-muted-foreground mb-2">2012</p>
              </div>
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Recognized certification demonstrating expertise in financial reporting, 
                  auditing, taxation, and business law in accordance with Kenyan and 
                  international standards.
                </p>
              </div>
            </div>
          </Card>

          {/* Professional Memberships - Full Width */}
          <Card className="md:col-span-2 p-8 bg-gradient-to-r from-primary/5 to-cta/5 shadow-lg border-border">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-cta/10 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-cta" />
              </div>
              <h3 className="text-2xl font-bold text-primary">Professional Memberships</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  Institute of Certified Public Accountants of Kenya (ICPAK)
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  Active member in good standing, participating in continuous professional 
                  development programs and staying updated with evolving accounting standards 
                  and regulations.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  Association of Chartered Certified Accountants (ACCA)
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  International membership demonstrating commitment to global best practices 
                  in accounting, financial management, and ethical standards.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
