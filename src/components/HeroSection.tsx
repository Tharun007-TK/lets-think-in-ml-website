import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import bookCover from "@/assets/book-cover.png";
import { DownloadDialog } from "@/components/DownloadDialog";

const HeroSection = () => {
  return (
    <section className="relative rounded-[2.5rem] overflow-hidden bg-muted my-12 animate-fade-in">
      <div className="grid md:grid-cols-2 gap-6 md:gap-12 p-6 md:p-12 lg:p-16">
        {/* Left side - Image */}
        <div className="relative aspect-[4/3] md:aspect-auto rounded-[2rem] overflow-hidden animate-scale-in">
          <img
            src={bookCover}
            alt="Let's Think in Machine Learning - Book Cover"
            className="w-full h-full object-contain transition-transform duration-700 hover:scale-110"
          />
        </div>

        {/* Right side - Content */}
        <div className="flex flex-col justify-center space-y-6 md:space-y-8">
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight animate-slide-down">
              Let's Think in Machine Learning
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-xl animate-slide-up stagger-1">
              You don't need formulas or hype to understand AI. This book helps you think clearly about what Machine Learning is, when it helps, and when it doesn't.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6 pt-4 animate-slide-up stagger-2">
            <DownloadDialog>
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-4 md:px-10 md:py-6 text-base font-medium transition-all hover:scale-105 w-full sm:w-auto"
              >
                Download Free eBook →
              </Button>
            </DownloadDialog>

            <div className="flex items-center gap-3">
              <BookOpen className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground font-medium">Instant digital download</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
