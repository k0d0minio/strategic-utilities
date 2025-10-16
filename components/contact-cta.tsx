import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export function ContactCTA() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-8 lg:p-12 text-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Contact Us And Get It Done
            </h3>
            <div className="w-24 h-1 bg-primary-foreground mx-auto mb-6"></div>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              When you hire us for utility services, you know you're getting
              highly qualified professionals who have the expertise and
              experience to make sure your project is done properly and
              functions.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact-us">Contact Us</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
