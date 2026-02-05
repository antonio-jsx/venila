export function Header({ title }: { title: string }) {
  return (
    <section className="relative flex h-60 flex-col items-start justify-end rounded-lg p-4 shadow-md">
      <div
        className="absolute inset-0 z-0 rounded-lg"
        style={{
          backgroundImage: `
              linear-gradient(180deg,
                rgba(245,245,220,1) 0%,
                rgba(255,223,186,0.8) 25%,
                rgba(255,182,193,0.6) 50%,
                rgba(147,112,219,0.7) 75%,
                rgba(72,61,139,0.9) 100%
              ),
              radial-gradient(circle at 30% 20%, rgba(255,255,224,0.4) 0%, transparent 50%),
              radial-gradient(circle at 70% 80%, rgba(72,61,139,0.6) 0%, transparent 70%),
              radial-gradient(circle at 50% 60%, rgba(147,112,219,0.3) 0%, transparent 60%)
            `,
        }}
      />

      <div className="relative z-10 flex flex-col">
        <h1 className="text-3xl text-shadow text-white"> {title}</h1>
      </div>
    </section>
  );
}
