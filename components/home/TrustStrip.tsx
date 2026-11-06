import { trustIndicators } from "@/lib/experience";
import { Container } from "@/components/ui/Container";

export function TrustStrip() {
  return (
    <section className="border-y border-navy-100 bg-white py-10 sm:py-12">
      <Container>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustIndicators.map((indicator) => {
            const Icon = indicator.icon;
            return (
              <div key={indicator.title} className="flex items-start gap-3">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-electric-50 text-electric-600">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-bold text-navy-900">{indicator.title}</p>
                  <p className="text-sm text-slate-600">
                    {indicator.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
