const IntroSection = () => {
  return (
    <section className="max-w-4xl mx-auto py-12 md:py-16 px-4 animate-fade-in">
      <div className="text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight animate-slide-up">
          This is not another AI hype book.
        </h2>
        <div className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-slide-up stagger-1 space-y-4">
          <p>
            No math-heavy explanations. No buzzwords or fear-driven claims. No "AI will replace everything" narrative.
          </p>
          <p>
            Instead: clear thinking, practical judgment, and an honest understanding of AI's limits and strengths.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
