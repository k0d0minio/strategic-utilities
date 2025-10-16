import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { CalendlyButton } from "@/components/calendly-button";

export function ContactCTA() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-8 lg:p-12 text-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <div className="w-24 h-1 bg-primary-foreground mx-auto mb-6"></div>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              When you hire us for utility services, you know you're getting
              highly qualified professionals who have the expertise and
              experience to make sure your project is done properly and
              functions. Choose how you'd like to get started:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CalendlyButton size="lg" variant="secondary" text="Book a Meeting" />
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact-us">Send Message</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
