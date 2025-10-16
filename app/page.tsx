import { Clients } from "@/components/clients";
import { Commitment } from "@/components/commitment";
import { ContactCTA } from "@/components/contact-cta";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <section id="about" className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold">About Us</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Strategic Utilities Solution understands the complex nature
                    of risks associated with the utilities within the built
                    environment space. We pride ourselves on working closely for
                    our valued clients to facilitate integrated, sustainable
                    solutions.
                  </p>
                  <p>
                    Strategic Utilities Solution was formed to support clients
                    with the vision of managing the utilities risk and
                    infrastructure needs through professional advisory combined
                    with proven methods of defining, quantifying, scoping, risk
                    & opportunities, constructability & design, costing,
                    coordinating, evaluation, negotiation, staging, sequencing
                    and management of utilities projects.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 p-8">
                  <div className="w-full h-full bg-muted rounded-2xl flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <div className="text-6xl mb-4">🏢</div>
                      <p className="text-lg font-medium">
                        Built Environment Solutions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="services">
          <Services />
        </section>
        <Commitment />
        <Clients />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
