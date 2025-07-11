interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section
      id={id}
      className="min-h-screen scroll-mt-16 px-6 py-16 md:py-20 flex flex-col justify-center items-start max-w-2xl mx-auto"
    >
      <h2 className="text-xl md:text-2xl font-semibold mb-4 text-foreground">
        {title}
      </h2>
      <div className="text-sm text-muted-foreground leading-relaxed space-y-3">
        {children}
      </div>
    </section>
  );
}

