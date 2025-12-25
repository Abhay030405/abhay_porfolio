import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AchievementCard } from "@/components/AchievementCard";

const achievements = [
  {
    title: "Deep Learning Specialization",
    issuer: "Coursera - DeepLearning.AI",
    date: "2024",
    image: "dpl.png",
  },
  {
    title: "Machine Learning Specialization",
    issuer: "Coursera - DeepLearning.AI",
    date: "2025",
    image: "ml.png",
  },
  {
    title: "Data Structures and Algorithms",
    issuer: "Udemy",
    date: "2025",
    image: "python.png",
  },
  {
    title: "Data Structures and Algorithms",
    issuer: "Apna College",
    date: "2025",
    image: "java.png",
  },
  {
    title: "1st Runner Up : Hackatron, Infotsav",
    issuer: "IIITM Gwalior",
    date: "2025",
    image: "IIIT.png",
  },
  {
    title: "Winner : Logical Rhythm Hackathon",
    issuer: "CC club MNNIT",
    date: "2025",
    image: "logicalRythm.png",
  },
  {
    title: "Ist Runner up : Predefined Hardware",
    issuer: "EE Dept. MNNIT",
    date: "2025",
    image: "predeined.png",
  },
  {
    title: "Winner : Robowars, BotRush",
    issuer: "Robotics Club MNNIT",
    date: "2025",
    image: "robowars.png",
  },
  
  {
    title: "2nd Runner Up : Doodle Bot, Aviskar",
    issuer: "Robotics Club MNNIT",
    date: "2024",
    image: "doodlebot.png",
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
