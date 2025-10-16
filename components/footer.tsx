"use client";

export function Footer() {
  return (
    <footer className="bg-muted/30 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">
              {"Strategic Utilities Solution"}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {
                "Strategic Utilities Solution understands the complex nature of risks associated with the utilities within the built environment space. We pride ourselves on working closely for our valued clients to facilitate integrated, sustainable solutions."
              }
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">{"Quick Links"}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/" className="hover:text-primary transition-colors">
                  {"Home"}
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-primary transition-colors"
                >
                  {"Our Services"}
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-primary transition-colors"
                >
                  {"About Us"}
                </a>
              </li>
              <li>
                <a
                  href="/contact-us"
                  className="hover:text-primary transition-colors"
                >
                  {"Contact Us"}
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">{"Contact Info"}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="tel:0469162738"
                  className="hover:text-primary transition-colors"
                >
                  {"Phone: 0469 162 738"}
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@utilitiesolutions.com.au"
                  className="hover:text-primary transition-colors"
                >
                  {"Email: info@utilitiesolutions.com.au"}
                </a>
              </li>
              <li>
                <span>{"Location: NSW 2151"}</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">{"Follow Us"}</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Social media coming soon!");
                }}
              >
                {"Facebook"}
              </a>
              <a
                href="#"
                className="hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Social media coming soon!");
                }}
              >
                {"LinkedIn"}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            {
              "© Copyright 2024. All Rights Reserved. Strategic Utilities Solution Pty Ltd"
            }
          </p>
        </div>
      </div>
    </footer>
  );
}
