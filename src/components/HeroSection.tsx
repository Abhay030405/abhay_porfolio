import { Button } from "@/components/ui/button";
import { ChevronDown, Terminal, Sparkles, Code2, Brain, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-grid">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '0.8s' }} />
      
      {/* Floating Icons */}
      <div className="absolute top-20 left-[15%] animate-float opacity-20">
        <Code2 className="h-12 w-12 text-primary" />
      </div>
      <div className="absolute top-32 right-[20%] animate-float opacity-20" style={{ animationDelay: '1s' }}>
        <Brain className="h-16 w-16 text-accent" />
      </div>
      <div className="absolute bottom-32 left-[25%] animate-float opacity-20" style={{ animationDelay: '0.5s' }}>
        <Zap className="h-10 w-10 text-code-yellow" />
      </div>
      <div className="absolute bottom-40 right-[15%] animate-float opacity-20" style={{ animationDelay: '1.5s' }}>
        <Sparkles className="h-14 w-14 text-code-orange" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Terminal Badge with typing effect */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-card/80 backdrop-blur-sm border border-primary/30 rounded-full mb-8 animate-fade-in shadow-lg shadow-primary/10">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
            </div>
            <Terminal className="h-4 w-4 text-primary" />
            <span className="text-sm font-mono text-muted-foreground">
              <span className="text-code-green">$</span> <span className="animate-typing">Hello, World! Welcome to my portfolio</span>
            </span>
          </div>

          {/* Greeting */}
          <p className="text-lg md:text-xl text-muted-foreground mb-2 animate-fade-in font-mono">
            <span className="text-code-green">&gt;</span> Initializing...
          </p>

          {/* Main Heading with enhanced styling */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="block text-foreground mb-2">Hi, I'm</span>
            <span className="text-gradient relative inline-block">
              Abhay Agarwal
              <Sparkles className="absolute -top-4 -right-8 h-8 w-8 text-code-yellow animate-pulse" />
            </span>
          </h1>

          {/* Role Badge */}
          <div className="flex items-center justify-center gap-3 mb-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium tracking-wide">
              B.Tech Electrical Engineering <span className="text-primary">|</span> 2nd Year
            </p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
          </div>

          {/* Code Block Style Tagline */}
          <div className="inline-block bg-card/60 backdrop-blur-sm border border-border rounded-lg p-4 md:p-6 mb-10 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="font-mono text-base md:text-xl text-left">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-code-purple">class</span>
                <span className="text-code-yellow">Developer</span>
                <span className="text-muted-foreground">{"{"}</span>
              </div>
              <div className="pl-4 md:pl-6">
                <span className="text-code-purple">constructor</span>
                <span className="text-muted-foreground">()</span>
                <span className="text-muted-foreground">{" {"}</span>
              </div>
              <div className="pl-8 md:pl-12">
                <span className="text-code-orange">this</span>
                <span className="text-muted-foreground">.</span>
                <span className="text-code-green">passion</span>
                <span className="text-muted-foreground"> = </span>
                <span className="text-primary">"AI & Machine Learning"</span>
                <span className="text-muted-foreground">;</span>
              </div>
              <div className="pl-8 md:pl-12">
                <span className="text-code-orange">this</span>
                <span className="text-muted-foreground">.</span>
                <span className="text-code-green">status</span>
                <span className="text-muted-foreground"> = </span>
                <span className="text-primary">"Building the future"</span>
                <span className="text-muted-foreground">;</span>
              </div>
              <div className="pl-4 md:pl-6">
                <span className="text-muted-foreground">{"}"}</span>
              </div>
              <div>
                <span className="text-muted-foreground">{"}"}</span>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-10 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-gradient">10+</p>
              <p className="text-sm text-muted-foreground">Projects</p>
            </div>
            <div className="w-px h-10 bg-border hidden md:block"></div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-gradient">500+</p>
              <p className="text-sm text-muted-foreground">Problems Solved</p>
            </div>
            <div className="w-px h-10 bg-border hidden md:block"></div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-gradient">5+</p>
              <p className="text-sm text-muted-foreground">Certifications</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Link to="/projects">
              <Button variant="glow" size="lg" className="group text-base px-8 py-6">
                <Code2 className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                View My Work
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="text-base px-8 py-6 border-primary/50 hover:bg-primary/10">
                <Zap className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground font-mono">scroll down</span>
          <ChevronDown className="h-6 w-6 text-primary" />
        </div>
      </div>
    </section>
  );
};
