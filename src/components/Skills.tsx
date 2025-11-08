import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Technical Skills",
      skills: [
        { name: "Microsoft Excel", level: "Expert" },
        { name: "SAP ERP", level: "Advanced" },
        { name: "QuickBooks", level: "Advanced" },
        { name: "Power BI", level: "Intermediate" },
        { name: "Tableau", level: "Intermediate" },
        { name: "Sage Accounting", level: "Advanced" },
      ],
    },
    {
      category: "Accounting Expertise",
      skills: [
        { name: "Financial Reporting", level: "Expert" },
        { name: "IFRS Standards", level: "Expert" },
        { name: "Tax Planning & Compliance", level: "Expert" },
        { name: "Internal Auditing", level: "Advanced" },
        { name: "Budgeting & Forecasting", level: "Expert" },
        { name: "Cost Management", level: "Advanced" },
      ],
    },
    {
      category: "Soft Skills",
      skills: [
        { name: "Team Leadership", level: "Expert" },
        { name: "Strategic Thinking", level: "Advanced" },
        { name: "Problem Solving", level: "Expert" },
        { name: "Communication", level: "Advanced" },
        { name: "Attention to Detail", level: "Expert" },
        { name: "Time Management", level: "Expert" },
      ],
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-cta text-white";
      case "Advanced":
        return "bg-primary text-white";
      case "Intermediate":
        return "bg-secondary text-secondary-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="skills" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Professional Skills
          </h2>
          <div className="w-24 h-1 bg-cta mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Comprehensive skill set spanning technical expertise, accounting proficiency, and leadership capabilities
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-8 bg-card shadow-lg border-border hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold text-primary mb-6 pb-4 border-b border-border">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="flex items-center justify-between gap-3">
                    <span className="text-foreground font-medium text-sm md:text-base">
                      {skill.name}
                    </span>
                    <Badge className={`${getLevelColor(skill.level)} text-xs px-3 py-1`}>
                      {skill.level}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <div className="mt-16 max-w-5xl mx-auto">
          <Card className="p-8 bg-gradient-to-r from-muted to-background shadow-lg">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">
              Additional Competencies
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                "Risk Management",
                "Financial Analysis",
                "Data Analytics",
                "Regulatory Compliance",
                "Business Intelligence",
                "Process Improvement",
                "Cash Flow Management",
                "Variance Analysis",
                "KPI Development",
                "Stakeholder Management",
                "Cross-functional Collaboration",
                "Training & Mentoring",
              ].map((skill, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="px-4 py-2 text-sm border-primary/30 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
