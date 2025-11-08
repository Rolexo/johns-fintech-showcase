import { Card } from "@/components/ui/card";
import { Trophy, TrendingDown, Zap, Target } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: TrendingDown,
      title: "Cost Reduction Excellence",
      description: "Reduced operational costs by 18% through strategic process improvements and automation initiatives",
      color: "text-cta",
      bgColor: "bg-cta/10",
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "Led SAP ERP implementation, improving financial reporting accuracy by 25% and reducing close time by 30%",
      color: "text-cta",
      bgColor: "bg-cta/10",
    },
    {
      icon: Target,
      title: "Zero Compliance Issues",
      description: "Maintained perfect audit record with zero compliance issues across 7+ consecutive years",
      color: "text-cta",
      bgColor: "bg-cta/10",
    },
    {
      icon: Trophy,
      title: "Industry Recognition",
      description: "Received 'Outstanding Accountant of the Year' award from ICPAK for excellence in financial management",
      color: "text-cta",
      bgColor: "bg-cta/10",
    },
  ];

  return (
    <section id="achievements" className="section-padding bg-muted">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Key Achievements
          </h2>
          <div className="w-24 h-1 bg-cta mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Measurable results and recognition throughout my professional journey
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="p-8 bg-card shadow-lg border-border hover:shadow-xl transition-all hover:-translate-y-1 duration-300"
            >
              <div className="flex items-start gap-6">
                <div className={`w-16 h-16 ${achievement.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <achievement.icon className={`w-8 h-8 ${achievement.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {achievement.title}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-gradient-to-r from-primary to-cta shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">10+</p>
                <p className="text-white/90 font-medium">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">500+</p>
                <p className="text-white/90 font-medium">Reports Filed</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">18%</p>
                <p className="text-white/90 font-medium">Cost Reduction</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">100%</p>
                <p className="text-white/90 font-medium">Compliance Rate</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
