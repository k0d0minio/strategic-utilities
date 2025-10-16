import { ContactCTA } from "@/components/contact-cta";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Services } from "@/components/services";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Our Services
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Strategic Utilities Solution provides comprehensive utilities
                project management services from inception to commissioning
                phases. Our extensive utilities knowledge and practical
                experience directly transforms into proactive solutions tailored
                to client needs.
              </p>
            </div>
          </div>
        </section>

        <Services />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
