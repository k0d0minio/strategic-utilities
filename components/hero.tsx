import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles className="h-4 w-4" />
                {"Professional Utilities Advisory"}
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                {"Strategic Utilities "}
                <span className="text-primary">{"Risk Management"}</span>
                {" & Infrastructure Solutions"}
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                {
                  "Strategic Utilities Solution understands the complex nature of risks associated with the utilities within the built environment space. We pride ourselves on working closely for our valued clients to facilitate integrated, sustainable solutions."
                }
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <a href="#services">
                  {"Our Services"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 bg-transparent"
                asChild
              >
                <a href="/contact-us">{"Contact Us"}</a>
              </Button>
            </div>

            <div className="bg-primary/5 rounded-xl p-4 border border-primary/20">
              <p className="text-sm text-muted-foreground mb-2">
                Need utilities project support?
              </p>
              <Link href="/contact-us">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-primary border-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  Get Professional Consultation
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{"15+"}</div>
                <div className="text-sm text-muted-foreground">
                  {"Years Experience"}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{"200+"}</div>
                <div className="text-sm text-muted-foreground">
                  {"Projects Delivered"}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{"100%"}</div>
                <div className="text-sm text-muted-foreground">
                  {"Client Satisfaction"}
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 p-8">
              <div className="w-full h-full bg-muted rounded-2xl flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="text-6xl mb-4">⚡</div>
                  <p className="text-lg font-medium">
                    Utilities Infrastructure Solutions
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground p-4 rounded-full shadow-lg">
              <Sparkles className="h-8 w-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
