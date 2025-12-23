import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";

const projects = [
  {
    title: "Neural Style Transfer",
    shortDescription: "Transform images using deep neural networks with artistic styles.",
    fullDescription: "An implementation of Neural Style Transfer using TensorFlow and VGG19. This project allows users to apply the artistic style of one image to the content of another, creating stunning artistic transformations. Features include real-time preview, multiple style weights, and batch processing capabilities.",
    image: "https://images.unsplash.com/photo-1547954575-855750c57bd3?w=800&auto=format&fit=crop",
    tags: ["Python", "TensorFlow", "Deep Learning", "CNN"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    videoUrl: "https://youtube.com",
  },
  {
    title: "Sentiment Analysis Engine",
    shortDescription: "NLP-powered sentiment analysis for social media data.",
    fullDescription: "A comprehensive sentiment analysis system using BERT transformers to analyze social media posts and reviews. The model achieves 92% accuracy on benchmark datasets. Includes a REST API for easy integration and a web dashboard for visualization of sentiment trends over time.",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&auto=format&fit=crop",
    tags: ["Python", "BERT", "NLP", "Flask", "React"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Object Detection System",
    shortDescription: "Real-time object detection using YOLO architecture.",
    fullDescription: "Built a real-time object detection system using YOLOv5 capable of detecting and classifying 80+ object categories. Optimized for edge devices using TensorRT, achieving 30+ FPS on Nvidia Jetson. Includes custom training pipeline for domain-specific objects.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop",
    tags: ["Python", "PyTorch", "YOLO", "OpenCV"],
    githubUrl: "https://github.com",
    videoUrl: "https://youtube.com",
  },
  {
    title: "Stock Price Predictor",
    shortDescription: "LSTM-based time series prediction for stock markets.",
    fullDescription: "Developed an LSTM neural network to predict stock prices using historical data and technical indicators. The model incorporates attention mechanisms for improved accuracy. Features include backtesting framework, portfolio optimization, and integration with live market data feeds.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop",
    tags: ["Python", "LSTM", "TensorFlow", "Finance"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Chatbot with GPT",
    shortDescription: "Conversational AI assistant using transformer models.",
    fullDescription: "Created an intelligent chatbot using GPT-based architecture with custom fine-tuning for domain-specific conversations. Features context awareness, multi-turn dialogue management, and seamless integration with messaging platforms. Includes admin dashboard for conversation analytics.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop",
    tags: ["Python", "Transformers", "NLP", "FastAPI"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    videoUrl: "https://youtube.com",
  },
  {
    title: "Image Classification API",
    shortDescription: "Production-ready image classification microservice.",
    fullDescription: "Designed and deployed a scalable image classification API using ResNet50 with custom fine-tuning. Containerized with Docker and deployed on AWS with auto-scaling. Supports batch processing, model versioning, and A/B testing for continuous improvement.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop",
    tags: ["Python", "ResNet", "Docker", "AWS", "FastAPI"],
    githubUrl: "https://github.com",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 md:pt-24">
        {/* Header */}
        <section className="py-16 md:py-24 bg-grid relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-mono mb-4">
                {"// My Work"}
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Featured <span className="text-gradient">Projects</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                A collection of my work in AI, Machine Learning, and Deep Learning. 
                Click on any project to learn more about the implementation details.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProjectCard {...project} />
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

export default Projects;
