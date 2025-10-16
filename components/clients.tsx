export function Clients() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Clients</h2>
          <p className="text-xl text-muted-foreground">
            Trusted by leading organizations across Australia
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {Array.from({ length: 10 }, (_, i) => (
            <div
              key={i}
              className="flex items-center justify-center p-6 bg-muted rounded-lg"
            >
              <div className="text-muted-foreground text-sm font-medium">
                Client Logo {i + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
