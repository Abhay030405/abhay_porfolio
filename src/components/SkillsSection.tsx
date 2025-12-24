const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "C++", "Java", "SQL"],
  },
  {
    title: "Machine Learning & Deep Learning",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "XGBoost", "Transformers"],
  },
  {
    title: "Artificial Intelligence",
    skills: ["LangChain", "LangGraph", "NLP"],
  },
  {
    title: "Data Science",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "Docker", "AWS", "Google Colab", "Kaggle"],
  },
  {
    title: "Key Concepts",
    skills: ["Computer Vision", "Neural Networks", "Data Analysis", "MLOps", "FastAPI"],
  },
];

export const SkillsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-card/30 bg-dots">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-code-green/10 text-code-green rounded-full text-sm font-mono mb-4">
              {"// Technical Skills"}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              My <span className="text-gradient">Tech Stack</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building intelligent systems and solving complex problems.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="p-7 bg-card border border-border rounded-xl"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <h3 className="text-lg font-semibold mb-4 text-primary font-mono">
                  {`> ${category.title}`}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
