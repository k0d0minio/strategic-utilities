"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

interface ServiceItem {
  title: string;
}

interface ServiceCategory {
  title: string;
  description?: string;
  items: ServiceItem[];
}

const serviceCategories: ServiceCategory[] = [
  {
    title: "Contracts And Procurement",
    items: [
      { title: "Identification and defining stakeholder requirements" },
      { title: "Project concept, design and initiation" },
      { title: "Procurement and delivery strategy development" },
      { title: "Risk review, strategy and governance" },
      { title: "Tender process management" },
      { title: "Estimates and cost planning" },
      { title: "Tender response management" },
      { title: "Tender assessment" },
      { title: "Contract negotiation" }
    ]
  },
  {
    title: "Planning And Controls",
    items: [
      { title: "Project start up planning" },
      { title: "Construction Staging" },
      { title: "Procurement strategy" },
      { title: "Master Planning" },
      { title: "Interface definition and management" },
      {
        title:
          "Management of utility owners and authorities and key stakeholders"
      },
      { title: "3rd Party Agreements" },
      { title: "Project planning and scheduling" },
      { title: "Risk identification, assessment and management" }
    ]
  },
  {
    title: "Design Management",
    items: [
      { title: "Constructability assessment and technical advice" },
      { title: "Staging development" },
      { title: "GIS and management of 3d mapping" },
      {
        title: "Procurement and management of technical subject matter experts"
      },
      { title: "Design management" },
      { title: "Stakeholder review and approval management" },
      { title: "Change management" },
      { title: "Value engineering" },
      {
        title:
          "Design packaging and compliance during all the stages of project realisation"
      }
    ]
  },
  {
    title: "Construction Management Services",
    items: [
      { title: "Approvals, licenses, compliance" },
      { title: "Constructability reviews" },
      { title: "Stakeholders coordination and Interface management" },
      { title: "Project performance reviews and forecasting" },
      { title: "Trend analysis and process improvement advice" },
      { title: "Processes and procedures evaluation and optimisation" },
      { title: "Project governance and reporting" },
      { title: "Project Completion, handover and commissioning plan" }
    ]
  },
  {
    title: "Contract Administration",
    items: [
      { title: "Evaluation report preparation" },
      { title: "Issues resolution and management of project close outs" },
      { title: "Variations and delay analysis" },
      { title: "Procurement management" },
      { title: "EOI management, evaluation and shortlisting" }
    ]
  },
  {
    title: "Project Development",
    items: [
      { title: "Feasibility study" },
      { title: "Business plan writing" },
      { title: "Business development" },
      { title: "Complex programs integration" }
    ]
  }
];

export function Services() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (categoryTitle: string) => {
    setExpandedCategory(
      expandedCategory === categoryTitle ? null : categoryTitle
    );
  };

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Strategic Utilities Solution provides comprehensive utilities
            project management services from inception to commissioning phases.
          </p>
        </div>

        <div className="grid gap-6">
          {serviceCategories.map((category) => (
            <Card key={category.title} className="overflow-hidden">
              <CardHeader
                className="cursor-pointer hover:bg-muted/50 transition-colors"
                onClick={() => toggleCategory(category.title)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                    {category.description && (
                      <CardDescription className="mt-2">
                        {category.description}
                      </CardDescription>
                    )}
                  </div>
                  <Button variant="ghost" size="sm">
                    {expandedCategory === category.title ? (
                      <ChevronDown className="h-5 w-5" />
                    ) : (
                      <ChevronRight className="h-5 w-5" />
                    )}
                  </Button>
                </div>
              </CardHeader>

              {expandedCategory === category.title && (
                <CardContent className="pt-0">
                  <ul className="space-y-3">
                    {category.items.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">
                          {item.title}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <a href="/services">View All Services</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
