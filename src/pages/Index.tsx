import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import MagicBento from "./MagicBento";
import { Quote, User } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-12">
        {/* Hero Section */}
        <HeroSection />

        {/* Intro Section */}
        <IntroSection />
        {/* About the Book */}
        <section id="about" className="py-10 sm:py-12 lg:py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-4 md:space-y-6">
              <p className="text-sm font-medium text-muted-foreground">About the Book</p>
              <h2 className="text-3xl sm:text-4xl font-serif font-semibold leading-tight text-foreground max-w-2xl">
                Let's Think in Machine Learning
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                This book is intended to help you grasp machine learning without getting lost in jargon and equations. Rather, it’s about intuition and real-world thinking and how to apply this in a clear fashion, so you don’t just know how it works, but also when and why to apply it. It’s about creating strong mental models, not rote memory.
              </p>
            </div>

            <div className="space-y-4 md:space-y-5">
              <div className="w-full rounded-2xl overflow-hidden bg-muted border border-border">
                <img
                  src="src/assets/about_img.png"
                  alt="Let's Think in Machine Learning book cover"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div className="rounded-xl border border-border bg-card p-4 sm:p-5 space-y-1">
                  <h3 className="text-lg font-semibold text-foreground">Concept-First</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">Learn ML through intuition and examples</p>
                </div>
                <div className="rounded-xl border border-border bg-card p-4 sm:p-5 space-y-1">
                  <h3 className="text-lg font-semibold text-foreground">Practical Focus</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">Real use-cases over theoretical overload</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chapters */}
        <section id="chapters" className="py-10 sm:py-12 lg:py-14 space-y-10">
          <div className="flex items-start justify-between animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold tracking-tight text-foreground leading-tight">What's inside the book</h2>
          </div>

          <div className="flex flex-col items-center gap-6 animate-slide-up stagger-1">
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl text-center leading-relaxed">
              A chapter-by-chapter tour of the ideas, tools, and judgment you need to work with machine learning confidently.
            </p>
            <MagicBento />
          </div>
        </section>

        {/* Quote Section */}
        <section className="my-16 md:my-20 rounded-[2.5rem] bg-card p-10 md:p-14 text-center animate-scale-in">
          <div className="max-w-2xl mx-auto space-y-8">
            <Quote className="w-10 h-10 mx-auto text-muted-foreground" />
            <blockquote className="text-2xl md:text-3xl font-bold tracking-tight leading-snug">
              "You won't get AI by memorizing formulas.
              <br />
              You'll get it by using it, breaking it, and discovering when it helps and when it gets in the way."
            </blockquote>
          </div>
        </section>

        {/* About the Author */}
<section id="author" className="py-10 sm:py-12 lg:py-14 space-y-10">
  <div className="flex items-start justify-between animate-slide-up">
    <h2 className="text-3xl md:text-4xl font-serif font-semibold tracking-tight text-foreground leading-tight">
      About the Author
    </h2>
  </div>

  <div className="rounded-[2rem] border border-border/60 bg-gradient-to-b from-muted/70 via-muted/40 to-card p-8 md:p-12 animate-slide-up stagger-1">
    <div className="flex flex-col md:flex-row items-center gap-8 max-w-3xl mx-auto text-left">
      
      {/* Author Image Placeholder */}
      <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden bg-muted flex-shrink-0 border border-border/70">
        <img
          src="src/assets/author.png"
          alt="Author portrait placeholder"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Author Content */}
      <div className="space-y-3 text-center md:text-left">
        <h3 className="text-2xl font-semibold text-foreground">
          Tharun Kumar V
        </h3>

        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
          Tharun Kumar is a final-year Artificial Intelligence and Machine Learning student who focuses on
          understanding how models behave in real situations not just how they work on paper.
          This book comes from hands-on learning, building projects, questioning outputs,
          and learning where AI helps, where it fails, and how to think clearly when it does.
        </p>
      </div>
    </div>
  </div>
</section>


        {/* Final CTA Section */}
        <section className="my-16 md:my-20 rounded-[2.5rem] bg-card p-10 md:p-14 text-center animate-scale-in">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold tracking-tight leading-tight">Ready to think clearly about AI?</h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Stop chasing hype. Start building understanding.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto justify-center">
              <a
                href="/contact"
                className="px-10 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 hover:scale-105 transition-all inline-flex items-center justify-center gap-2"
              >
                Contact us here →
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 mb-10 md:mb-12 text-base text-muted-foreground">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">The Book</h3>
              <ul className="space-y-2">
                <li><a href="/#intro" className="hover:text-accent transition-colors">About the Book</a></li>
                <li><a href="/#chapters" className="hover:text-accent transition-colors">Chapters</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Author</h3>
              <ul className="space-y-2">
                <li><a href="/#author" className="hover:text-accent transition-colors">About Tharun Kumar</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Buy</h3>
              <ul className="space-y-2">
                <li><a href="https://letslearn.beehiiv.com/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Get the eBook</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Legal</h3>
              <ul className="space-y-2">
                <li><a href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-accent transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-base md:text-lg text-muted-foreground space-y-2">
            <p>© 2025 Let's Think in Machine Learning. All rights reserved.</p>
            <p>© 2025 Maintained by Tesign Studio</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
