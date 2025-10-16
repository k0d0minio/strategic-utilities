import { Card, CardContent } from "@/components/ui/card";
import { CalendlyButton } from "@/components/calendly-button";

export function Commitment() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Our Commitment to Clients
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We are committed to providing our clients with a collaborative,
                outcomes focused, practical, flexible and efficient service that
                contributes success throughput all the stages of project
                realisation.
              </p>
              <p>
                Strategic Utilities Solution exists not to be engineers,
                planners and managers. Rather we are professionals whose skill
                set can be used creatively to deliver success for a specific
                assignment, or services for end to end project. Where there are
                development challenges with utilities, we find viable
                alternatives.
              </p>
              <p>
                For us the goals of our client are paramount and more we
                understand your goals, the more we can add value aid solutions
                through strategies for your business. We work with you to
                thoroughly understand your goals and time frames and provide a
                range of optimized solutions. We understand that each client and
                each project has different priorities, which is why we develop
                tailored solutions.
              </p>
            </div>
            <div className="pt-4">
              <CalendlyButton text="Schedule a Consultation" />
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 p-8">
              <div className="w-full h-full bg-muted rounded-2xl flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="text-6xl mb-4">🏗️</div>
                  <p className="text-lg font-medium">
                    Professional Utilities Solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
