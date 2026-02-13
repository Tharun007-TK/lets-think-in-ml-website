import { useRef, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import { Book, Users, Lightbulb, Brain, ChevronRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DownloadDialog } from "@/components/DownloadDialog";
import authorImg from "@/assets/author.png";
import aboutImg from "@/assets/about_img.png";

const Index = () => {
  const chapterSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            entry.target.classList.remove("opacity-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const chapters = [
    { number: "01", title: "Introduction", desc: "Setting the stage for thinking in ML" },
    { number: "02", title: "What is Machine Learning?", desc: "Core concepts explained simply" },
    { number: "03", title: "When to Use ML", desc: "Identifying the right problems" },
    { number: "04", title: "The Main Ingredients", desc: "Data, Models, and Compute" },
    { number: "05", title: "Supervised Learning", desc: "Learning from examples" },
    { number: "06", title: "Unsupervised Learning", desc: "Finding patterns in chaos" },
    { number: "07", title: "Reinforcement Learning", desc: "Learning through interaction" },
    { number: "08", title: "Neural Networks", desc: "Inspired by the brain" },
    { number: "09", title: "Deep Learning", desc: "Going deeper into complexity" },
    { number: "10", title: "Evaluating Models", desc: "How do we know it works?" },
    { number: "11", title: "Ethics in AI", desc: "Building responsible systems" },
    { number: "12", title: "The Future of AI", desc: "Where are we heading?" },
  ];

  const benefits = [
    { icon: <Brain className="w-6 h-6" />, title: "Clear Thinking", desc: "Develop a mental framework for understanding AI systems" },
    { icon: <Lightbulb className="w-6 h-6" />, title: "Practical Application", desc: "Learn to identify real-world opportunities for ML" },
    { icon: <Users className="w-6 h-6" />, title: "No Jargon", desc: "Complex concepts explained in plain English" },
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 py-8 space-y-24 pb-20">
        <HeroSection />

        {/* About Section */}
        <section id="about" className="reveal-on-scroll opacity-0 transition-all duration-700">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
                <img 
                  src={aboutImg}
                  alt="Reading Environment" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <span className="text-secondary font-medium tracking-wider text-sm uppercase">About the Book</span>
              <h2 className="text-3xl md:text-4xl font-bold font-serif">Bridging the Gap Between Hype and Reality</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Machine Learning often feels like magic or rocket science. This book strips away the complexity to reveal the beautiful, logical core of how machines learn. It's written for thinkers, creators, and anyone curious about the intelligence revolution.
              </p>
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
