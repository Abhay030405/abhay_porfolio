import { Button } from "@/components/ui/button";
import { ChevronDown, Terminal, Download } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-grid">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full mb-12 animate-fade-in">
            <Terminal className="h-4 w-4 text-primary" />
            <span className="text-sm font-mono text-muted-foreground">
              <span className="text-code-green">$</span> Hello, World!
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Hi, I'm{" "}
            <span className="text-gradient">Abhay Agarwal</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            B.Tech Electrical Engineering | 2nd Year
          </p>

          {/* Tagline */}
          <div className="font-mono text-lg md:text-xl mb-20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <span className="text-code-yellow">const</span>{" "}
            <span className="text-code-orange">passion</span>{" "}
            <span className="text-muted-foreground">=</span>{" "}
            <span className="text-primary">"AI & Machine Learning"</span>
            <span className="text-muted-foreground">;</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row mb-1 items-center justify-center gap-11 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Link to="/projects">
              <Button variant="glow" size="lg">
                View My Work
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                Get In Touch
              </Button>
            </Link>
            <a href="/resume.pdf" download="Abhay_Agarwal_Resume.pdf">
              <Button variant="outline" size="lg" className="gap-2">
                <Download className="h-5 w-5" />
                Download Resume
              </Button>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <ChevronDown className="h-8 w-8 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};
