import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Accountant",
      company: "ABC Holdings Ltd",
      period: "2018 – Present",
      responsibilities: [
        "Lead a team of 5 accountants in preparing monthly, quarterly, and annual financial statements in compliance with IFRS",
        "Reduced financial close time by 30% through process automation and standardization",
        "Manage budgeting and forecasting processes for multiple business units",
        "Conduct internal audits and ensure adherence to regulatory requirements",
        "Implement SAP ERP system, improving financial reporting accuracy by 25%",
      ],
    },
    {
      title: "Accountant",
      company: "XYZ Manufacturing Co.",
      period: "2013 – 2017",
      responsibilities: [
        "Prepared and analyzed financial reports, including P&L statements and balance sheets",
        "Managed accounts payable and receivable, ensuring timely processing of transactions",
        "Coordinated year-end audits with external auditors, achieving zero compliance issues",
        "Improved inventory management systems, reducing discrepancies by 40%",
        "Trained junior staff on accounting software and best practices",
      ],
    },
    {
      title: "Assistant Accountant",
      company: "FinancePlus Associates",
      period: "2010 – 2013",
      responsibilities: [
        "Assisted in daily bookkeeping and reconciliation of general ledger accounts",
        "Prepared tax filings and ensured compliance with Kenya Revenue Authority (KRA) regulations",
        "Supported senior accountants in month-end closing activities",
        "Maintained accurate records of financial transactions and documentation",
        "Contributed to process improvements that increased efficiency by 20%",
      ],
    },
  ];

  return (
    <section id="experience" className="section-padding bg-muted">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-cta mx-auto rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-12 ${
                  index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2"
                }`}
              >
                <Card
                  className={`p-6 md:p-8 bg-card shadow-lg border-border hover:shadow-xl transition-shadow ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute top-8 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-cta rounded-full items-center justify-center border-4 border-background">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>

                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 md:hidden">
                      <div className="w-12 h-12 bg-cta rounded-full flex items-center justify-center">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-primary mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-lg font-semibold text-cta mb-1">
                        {exp.company}
                      </p>
                      <p className="text-sm text-muted-foreground">{exp.period}</p>
                    </div>
                  </div>

                  <ul className="space-y-3 mt-6">
                    {exp.responsibilities.map((resp, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-foreground/80"
                      >
                        <span className="text-cta mt-1 flex-shrink-0">▸</span>
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
