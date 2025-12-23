import { Brain, Code2, Database, Sparkles } from "lucide-react";

const interests = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description: "Building intelligent systems that can learn and adapt",
  },
  {
    icon: Sparkles,
    title: "Machine Learning",
    description: "Training models to discover patterns in data",
  },
  {
    icon: Database,
    title: "Deep Learning",
    description: "Neural networks for complex problem solving",
  },
  {
    icon: Code2,
    title: "Software Development",
    description: "Creating efficient and scalable applications",
  },
];

export const AboutSection = () => {
  return (
    <section className="py-20 md:py-32 bg-card/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-mono mb-4">
              {"// About Me"}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Passionate About{" "}
              <span className="text-gradient">Innovation</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm an Electrical Engineering student with a burning passion for AI and Machine Learning. 
              I love turning complex problems into elegant solutions using cutting-edge technology.
            </p>
          </div>

          {/* Interest Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <div
                key={interest.title}
                className="group p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <interest.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{interest.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {interest.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
