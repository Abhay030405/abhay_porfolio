import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AchievementCard } from "@/components/AchievementCard";

const achievements = [
  {
    title: "Deep Learning Specialization",
    issuer: "Coursera - DeepLearning.AI",
    date: "2024",
    image: "https://images.unsplash.com/photo-1569098644584-210bcd375b59?w=800&auto=format&fit=crop",
  },
  {
    title: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "2024",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&auto=format&fit=crop",
  },
  {
    title: "Machine Learning Engineering",
    issuer: "Stanford Online",
    date: "2023",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop",
  },
  {
    title: "AWS Machine Learning Specialty",
    issuer: "Amazon Web Services",
    date: "2023",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop",
  },
  {
    title: "Kaggle Competition - Top 5%",
    issuer: "Kaggle",
    date: "2023",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&auto=format&fit=crop",
  },
  {
    title: "Python for Data Science",
    issuer: "IBM",
    date: "2023",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&auto=format&fit=crop",
  },
];

const Achievements = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 md:pt-24">
        {/* Header */}
        <section className="py-16 md:py-24 bg-dots relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1 bg-accent/10 text-accent rounded-full text-sm font-mono mb-4">
                {"// Recognition"}
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Achievements & <span className="text-gradient">Certificates</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Continuous learning and recognition in the field of AI/ML. 
                Here are some of my certifications and achievements.
              </p>
            </div>
          </div>
        </section>

        {/* Achievements Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={achievement.title}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <AchievementCard {...achievement} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Achievements;
