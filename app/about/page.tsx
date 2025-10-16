import { ContactCTA } from "@/components/contact-cta";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold mb-8">About Us</h1>

              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-2xl lg:text-3xl font-semibold">
                    Who We Are
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Strategic Utilities Solution understands the complex
                      nature of risks associated with the utilities within the
                      built environment space. We pride ourselves on working
                      closely for our valued clients to facilitate integrated,
                      sustainable solutions.
                    </p>
                    <p>
                      Strategic Utilities Solution was formed to support clients
                      with the vision of managing the utilities risk and
                      infrastructure needs through professional advisory
                      combined with proven methods of defining, quantifying,
                      scoping, risk & opportunities, constructability & design,
                      costing, coordinating, evaluation, negotiation, staging,
                      sequencing and management of utilities projects. Our
                      extensive utilities knowledge and practical experience
                      directly transforms into proactive solutions tailored to
                      client needs.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <h2 className="text-2xl lg:text-3xl font-semibold">
                    Our Approach
                  </h2>
                  <ul className="space-y-4 text-muted-foreground">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>
                        Our portfolio of services predominately encompasses the
                        sustainable solutions for successful delivery of
                        utilities projects from inception to commissioning
                        phases.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>
                        Our goal is to be recognised in the market as the best
                        at whole of utilities project' advice and solutions from
                        concept to reality.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>
                        Safety is a priority on every project, and we consider
                        the full project life cycle during our services delivery
                        process.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>
                        An extensive utilities knowledge and practical
                        experience works to clients leverage the project
                        benefits.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-6">
                  <h2 className="text-2xl lg:text-3xl font-semibold">
                    Our Commitment to Clients
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      We are committed to providing our clients with a
                      collaborative, outcomes focused, practical, flexible and
                      efficient service that contributes success throughput all
                      the stages of project realisation. Strategic Utilities
                      Solution exists not to be engineers, planners and
                      managers. Rather we are professionals whose skill set can
                      be used creatively to deliver success for a specific
                      assignment, or services for end to end project. Where
                      there are development challenges with utilities, we find
                      viable alternatives.
                    </p>
                    <p>
                      For us the goals of our client are paramount and more we
                      understand your goals, the more we can add value aid
                      solutions through strategies for your business. We work
                      with you to thoroughly understand your goals and time
                      frames and provide a range of optimized solutions. We
                      understand that each client and each project has different
                      priorities, which is why we develop tailored solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
