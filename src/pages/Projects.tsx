import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const projects = [
  {
    title: "Last Pulse (My Favorite one!) - AI That Thinks Before Life Stops",
    shortDescription: "Full-stack hospital system integrating deep learning models across critical medical departments.",
    fullDescription: "Developed a comprehensive hospital management system featuring deep learning models for radiology (CNN for X-ray analysis), cardiology (ECG anomaly detection), and pathology (image segmentation). The system includes a user-friendly web interface for doctors and staff, real-time data processing, and secure patient data management. Achieved 95% accuracy in diagnostic predictions and reduced report turnaround time by 40%.\n \n Key Features:\n - Radiology Module: CNN-based model for detecting pneumonia and fractures from X-ray images.\n - Cardiology Module: LSTM model for real-time ECG anomaly detection.\n - Pathology Module: U-Net architecture for segmenting histopathological images.\n - Web Interface: Built with React and FastAPI for seamless user experience.\n\n Designed role-based clinical workflows enabling doctors and patients to interact with AI-driven diagnoses.",
    image: "public/last_pulse.png",
    tags: ["Python", "PyTorch", "FastAPI", "Langchain","React"],
    githubUrl: "https://github.com/Abhay030405/Last_Pulse",
    // liveUrl: "https://lastpulse.example.com",
    videoUrl: "/",
  },
  {
    title: "SentinelOps Nexus - Intelligence Platform",
    shortDescription: "The Ultimate AI Command Hub For Intelligence Operations",
    fullDescription: "SentinelOps Nexus is an enterprise-grade intelligence operations management platform built to orchestrate complex, high-stakes workflows with precision and security. It unifies mission planning, AI-powered document intelligence, and knowledge management into a single operational command layer. Leveraging RAG-based AI, vector search, and real-time WebSocket updates, the platform enables fast, context-aware decision-making. Robust role-based access control with multi-factor authentication ensures security across teams, while Kanban-driven mission tracking, facility operations, analytics, and multi-channel notifications keep every operation synchronized. Designed for scalability and reliability, SentinelOps Nexus transforms raw information into actionable intelligence at operational speed.",
    image: "public/sentinel.png",
    tags: ["Python", "FastAPI", "Lllama2b", "Langchain", "React"],
    githubUrl: "https://github.com/Abhay030405/Dev_or_Die",
    liveUrl: "https://sentinelops-nexus-abc030973-aeuas0ea5-abhay030405s-projects.vercel.app/",
    videoUrl: "/",
  },
  {
    title: "GeoSheild -  Pixel-Level Landslide Intelligence",
    shortDescription: "Proof that deep learning, when aimed right, can see disasters before humans do.",
    fullDescription: "Built an AI system that hunts landslides from the sky using UAV imagery and deep learning. \n• Engineered a Mask R-CNN–based instance segmentation pipeline to detect and isolate disaster-prone regions with pixel-level precision. \n• Trained a multi-class model to simultaneously identify Landslides, Water Bodies, Vegetation, and Buildings in complex aerial scenes.\n• Leveraged transfer learning with COCO-pretrained ResNet-50 + FPN to achieve high accuracy on limited geospatial data.\n• Designed a full end-to-end pipeline — from data preprocessing and model training to real-time inference.\n• Developed a React + Tailwind frontend that visualizes predictions with interactive segmentation overlays.\n• Built a FastAPI backend to serve low-latency predictions for uploaded UAV images.\n• Optimized training using frozen backbones, custom annotations, and controlled train/val/test splits.\n• Transformed raw aerial images into actionable disaster intelligence within seconds.\n• Enables rapid risk assessment for early warning and disaster mitigation systems.\n• Designed with scalability in mind for real-world geospatial and satellite deployments.",
    image: "public/GeoSheild.png",
    tags: ["Python", "PyTorch", "Mask-RCNN", "Dectectron2", "ResNet-101", "ResNet-50"],
    githubUrl: "https://github.com/Abhay030405/GeoSheild",
    videoUrl: "/",
  },
  {
    title: "Market Mestro - Multi Agent System",
    shortDescription: "Multi-Agent AI System Engineered to Decode Markets, Risk, and Opportunity",
    fullDescription: "Market Maestro is a multi-agent AI-driven financial research platform engineered to analyze markets as a coordinated intelligence system rather than a single model. It orchestrates autonomous agents—Market Analyst, Event Monitor, Risk Evaluator, and Portfolio Optimizer—using LangChain and LangGraph to fetch live market data, track financial events, quantify risk, and generate data-backed investment strategies. Through a unified reasoning layer, the platform connects news sentiment, market movements, and portfolio metrics into actionable insights. With real-time visualization, explainable AI summaries, and strategy generation, Market Maestro transforms raw financial signals into structured, decision-ready intelligence.",
    image: "public/stockify.png",
    tags: ["Python", "LSTM", "TensorFlow", "Finance"],
    githubUrl: "https://github.com/Abhay030405/market_maestro",
    // liveUrl: "https://example.com",
    videoUrl: "/",
  },
  {
    title: "Nueral Watch - Drift AI Assistant",
    shortDescription: "Conversational AI assistant using transformer models.",
    fullDescription: "Created an intelligent chatbot using GPT-based architecture with custom fine-tuning for domain-specific conversations. Features context awareness, multi-turn dialogue management, and seamless integration with messaging platforms. Includes admin dashboard for conversation analytics.",
    image: "public/drift.png",
    tags: ["Python", "Transformers", "NLP", "FastAPI"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    videoUrl: "https://youtube.com",
  },
  {
    title: "Neuro Foundary - Multi Agent System",
    shortDescription: "Production-ready image classification microservice.",
    fullDescription: "Designed and deployed a scalable image classification API using ResNet50 with custom fine-tuning. Containerized with Docker and deployed on AWS with auto-scaling. Supports batch processing, model versioning, and A/B testing for continuous improvement.",
    image: "public/multi.png",
    tags: ["Python", "ResNet", "Docker", "AWS", "FastAPI"],
    githubUrl: "https://github.com",
  },
  {
    title: "FairLensAI - Bias Detection",
    shortDescription: "Production-ready image classification microservice.",
    fullDescription: "Designed and deployed a scalable image classification API using ResNet50 with custom fine-tuning. Containerized with Docker and deployed on AWS with auto-scaling. Supports batch processing, model versioning, and A/B testing for continuous improvement.",
    image: "public/bias.png",
    tags: ["Python", "ResNet", "Docker", "AWS", "FastAPI"],
    githubUrl: "https://github.com",
  },
  {
    title: "Conway Game of Life Simulator",
    shortDescription: "Production-ready image classification microservice.",
    fullDescription: "Designed and deployed a scalable image classification API using ResNet50 with custom fine-tuning. Containerized with Docker and deployed on AWS with auto-scaling. Supports batch processing, model versioning, and A/B testing for continuous improvement.",
    image: "public/conway.png",
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
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-mono mb-4">
                    {"// My Work"}
                  </span>
                </div>
                <a href="/resume.pdf" download="Abhay_Agarwal_Resume.pdf">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Download className="h-4 w-4" />
                    Resume
                  </Button>
                </a>
              </div>
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
