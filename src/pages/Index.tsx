import type { ComponentType, SVGProps } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import ChromaGrid, { ChromaItem } from "./ChromaGrid";
import { Users, Quote, User } from "lucide-react";

const whoItems = [
  {
    icon: Users,
    frontTitle: "Clear, no-jargon guidance",
    frontSubtitle: "A book for people tired of AI buzzwords.",
    backTitle: "Clear thinking without buzzwords",
    backBody: "This book breaks ideas down without formulas, buzzwords, or assumed knowledge just clear thinking.",
  },
  {
    icon: Users,
    frontTitle: "Know when AI actually helps",
    frontSubtitle: "Not everything needs automation.",
    backTitle: "Judge when AI adds value",
    backBody: "You already use AI tools, but you’re unsure when they add value and when they quietly mislead. This book teaches you how to judge that difference.",
  },
  {
    icon: Users,
    frontTitle: "Decide with AI, not follow it",
    frontSubtitle: "Tools shouldn’t replace judgment.",
    backTitle: "Use AI without losing judgment",
    backBody: "You’re a designer, developer, analyst, or creator who wants to think clearly with AI not blindly accept prompts or outputs.",
  },
  {
    icon: Users,
    frontTitle: "Think beyond the hype",
    frontSubtitle: "Understanding beats trends.",
    backTitle: "Build real thinking skills",
    backBody: "You care about building real thinking skills instead of chasing hype cycles, buzzwords, or exaggerated promises.",
  },
];

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

type InfoItem = {
  icon: IconType;
  frontTitle: string;
  frontSubtitle: string;
  backTitle: string;
  backBody: string;
};

type CardVariant = "large" | "compact";

const InfoCard = ({ item, delay, variant }: { item: InfoItem; delay: number; variant: CardVariant }) => {
  const Icon = item.icon;
  const padding = variant === "large" ? "p-7 md:p-8" : "p-6 md:p-7";
  const cardSize = "w-full max-w-[395px] min-h-[254px]";
  const contentSpacing = variant === "large" ? "gap-3" : "gap-2.5";

  return (
    <div
      tabIndex={0}
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-[#2f2f2f] ${cardSize} shadow-[0_18px_40px_-26px_rgba(0,0,0,0.7)] transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_22px_48px_-26px_rgba(0,0,0,0.75)] focus-visible:-translate-y-1 focus-visible:shadow-[0_22px_48px_-26px_rgba(0,0,0,0.78)] animate-slide-up stagger-${delay}`}
      style={{ perspective: "1100px" }}
    >
      <div
        className={`relative h-full w-full transition-transform duration-700 ease-out md:[transform-style:preserve-3d] md:group-hover:[transform:rotateY(180deg)] md:group-focus-visible:[transform:rotateY(180deg)]`}
      >
        {/* Front face */}
        <div
          className={`relative ${padding} ${contentSpacing} flex flex-col justify-start min-h-[254px] md:absolute md:inset-0 md:[backface-visibility:hidden] md:[transform:rotateY(0deg)]`}
        >
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-neutral-400">
            <Icon className="h-4 w-4" aria-hidden="true" />
            <span>{item.frontTitle}</span>
          </div>
          <h3 className="text-lg md:text-xl font-serif font-semibold text-neutral-50 leading-snug">
            {item.frontTitle}
          </h3>
          <p className="text-sm md:text-base text-neutral-300 leading-relaxed">
            {item.frontSubtitle}
          </p>
        </div>

        {/* Back face */}
        <div
          className={`relative ${padding} ${contentSpacing} flex flex-col justify-start min-h-[254px] md:absolute md:inset-0 md:[backface-visibility:hidden] md:[transform:rotateY(180deg)]`}
        >
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-neutral-400">
            <Icon className="h-4 w-4" aria-hidden="true" />
            <span>{item.backTitle}</span>
          </div>
          <h3 className="text-lg md:text-xl font-serif font-semibold text-neutral-50 leading-snug">
            {item.backTitle}
          </h3>
          <p className="text-sm md:text-base text-neutral-300 leading-relaxed">
            {item.backBody}
          </p>
        </div>
      </div>
    </div>
  );
};

const learnGridItems: ChromaItem[] = [
  {
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><defs><linearGradient id='g1' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='%23272f3a'/><stop offset='1' stop-color='%23111317'/></linearGradient></defs><rect width='200' height='200' rx='28' fill='url(%23g1)'/><circle cx='68' cy='70' r='42' fill='%23343c4d'/><circle cx='138' cy='130' r='50' fill='%23171c24' opacity='0.82'/></svg>",
    title: "Why AI feels confusing",
    subtitle: "Learn why AI explanations are vague and how to think about them clearly.",
    borderColor: "#6B7280",
    gradient: "linear-gradient(135deg, #1F2937, #111827)",
  },
  {
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><defs><linearGradient id='g2' x1='1' y1='0' x2='0' y2='1'><stop offset='0' stop-color='%23161b23'/><stop offset='1' stop-color='%231f2937'/></linearGradient></defs><rect width='200' height='200' rx='26' fill='url(%23g2)'/><path d='M38 120c28-10 52-40 86-46 10-2 29-1 38 3v55c-13 11-34 21-56 22-26 1-54-10-68-34z' fill='%232b3240' opacity='0.85'/><circle cx='80' cy='70' r='24' fill='%2311141c'/></svg>",
    title: "What AI and ML actually mean",
    subtitle: "Plain-language explanations of the core ideas without marketing gloss.",
    borderColor: "#4B5563",
    gradient: "linear-gradient(145deg, #111827, #1F2937)",
  },
  {
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><defs><linearGradient id='g3' x1='0' y1='1' x2='1' y2='0'><stop offset='0' stop-color='%2312171f'/><stop offset='1' stop-color='%231d2532'/></linearGradient></defs><rect width='200' height='200' rx='26' fill='url(%23g3)'/><rect x='32' y='46' width='136' height='108' rx='20' fill='%231c2330' opacity='0.75'/><circle cx='70' cy='102' r='28' fill='%23303848'/><circle cx='134' cy='98' r='22' fill='%23232b3a'/></svg>",
    title: "When AI helps — and when it lies",
    subtitle: "Spot reliable outputs versus confident mistakes in real work.",
    borderColor: "#707784",
    gradient: "linear-gradient(160deg, #0F172A, #111827)",
  },
  {
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><defs><linearGradient id='g4' x1='0' y1='0' x2='1' y2='0.8'><stop offset='0' stop-color='%231b222e'/><stop offset='1' stop-color='%230e1219'/></linearGradient></defs><rect width='200' height='200' rx='28' fill='url(%23g4)'/><path d='M36 134c18-8 30-26 52-30 30-6 60 16 76 18v28H36z' fill='%23232c3b' opacity='0.82'/><path d='M48 56h104c6 0 11 5 11 11v20c0 6-5 11-11 11H48c-6 0-11-5-11-11V67c0-6 5-11 11-11z' fill='%23323b4c' opacity='0.85'/></svg>",
    title: "How to judge AI outputs",
    subtitle: "Evaluate responses critically instead of accepting them at face value.",
    borderColor: "#5B6472",
    gradient: "linear-gradient(150deg, #0B1220, #111827)",
  },
  {
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><defs><linearGradient id='g5' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='%23101824'/><stop offset='1' stop-color='%231b2330'/></linearGradient></defs><rect width='200' height='200' rx='26' fill='url(%23g5)'/><circle cx='92' cy='76' r='34' fill='%232a3242'/><rect x='72' y='104' width='96' height='48' rx='18' fill='%23202836' opacity='0.85'/><circle cx='136' cy='92' r='18' fill='%23131a25' opacity='0.75'/></svg>",
    title: "Use AI as a thinking partner",
    subtitle: "Work with AI to sharpen ideas instead of outsourcing judgment.",
    borderColor: "#626b78",
    gradient: "linear-gradient(135deg, #131826, #111827)",
  },
  {
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><defs><linearGradient id='g6' x1='1' y1='0' x2='0' y2='1'><stop offset='0' stop-color='%231d2634'/><stop offset='1' stop-color='%230c1017'/></linearGradient></defs><rect width='200' height='200' rx='28' fill='url(%23g6)'/><rect x='42' y='54' width='116' height='40' rx='14' fill='%23313a4a'/><rect x='32' y='110' width='136' height='36' rx='16' fill='%23212839' opacity='0.9'/><circle cx='148' cy='128' r='16' fill='%23131923' opacity='0.85'/></svg>",
    title: "Make better decisions",
    subtitle: "Decide well even when AI is unavailable, unreliable, or unnecessary.",
    borderColor: "#555e6c",
    gradient: "linear-gradient(140deg, #0F172A, #0B1220)",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-12">
        {/* Hero Section */}
        <HeroSection />

        {/* Intro Section */}
        <IntroSection />

        {/* Who This Book Is For */}
        <section id="articles" className="py-10 sm:py-12 lg:py-14 space-y-10">
          <div className="flex items-start justify-between animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold tracking-tight text-foreground leading-tight">Who this book is for</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 lg:gap-8 justify-items-center">
            {whoItems.map((item, index) => (
              <InfoCard
                key={item.frontTitle}
                item={item}
                delay={Math.min(index + 1, 6)}
                variant="large"
              />
            ))}
          </div>

          <p className="text-center text-base md:text-lg text-muted-foreground italic mt-10 animate-slide-up leading-relaxed">
            "You don't need a technical background. You need curiosity and honesty."
          </p>
        </section>

        {/* What You'll Learn */}
        <section id="learn" className="py-10 sm:py-12 lg:py-14 space-y-10">
          <div className="flex items-start justify-between animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold tracking-tight text-foreground leading-tight">What you'll learn</h2>
          </div>

          <ChromaGrid
            items={learnGridItems}
            className="justify-items-center"
            radius={260}
            damping={0.4}
            fadeOut={0.45}
          />

          <p className="text-center text-base md:text-lg text-muted-foreground mt-10 animate-slide-up leading-relaxed">
            By the end of this book, you'll think about AI with clarity and confidence — not confusion or hype.
          </p>
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
            <h2 className="text-3xl md:text-4xl font-serif font-semibold tracking-tight text-foreground leading-tight">About the Author</h2>
          </div>
          <div className="rounded-[2rem] border border-border/60 bg-gradient-to-b from-muted/70 via-muted/40 to-card p-8 md:p-12 animate-slide-up stagger-1">
            <div className="flex flex-col md:flex-row items-center gap-8 max-w-3xl mx-auto text-left">
              <div className="w-20 h-20 rounded-full bg-card flex items-center justify-center flex-shrink-0 border border-border/70">
                <User className="w-10 h-10 text-muted-foreground" />
              </div>
              <div className="space-y-3 text-center md:text-left">
                <h3 className="text-2xl font-semibold text-foreground">Tharun Kumar</h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Tharun Kumar is a final-year Artificial Intelligence and Machine Learning student focused on making complex ideas understandable without hype or fear. This book is written from real learning and practical experience, not theory alone.
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
                <li><a href="/#articles" className="hover:text-accent transition-colors">Who It's For</a></li>
                <li><a href="/#learn" className="hover:text-accent transition-colors">What You'll Learn</a></li>
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
                <li><a href="https://gumroad.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Get the eBook</a></li>
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
