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
    image: "last_pulse.png",
    tags: ["Python", "PyTorch", "FastAPI", "Langchain","React"],
    githubUrl: "https://github.com/Abhay030405/Last_Pulse",
    // liveUrl: "https://lastpulse.example.com",
    videoUrl: "/",
  },
  {
    title: "SentinelOps Nexus - Intelligence Platform",
    shortDescription: "The Ultimate AI Command Hub For Intelligence Operations",
    fullDescription: "SentinelOps Nexus is an enterprise-grade intelligence operations management platform built to orchestrate complex, high-stakes workflows with precision and security. It unifies mission planning, AI-powered document intelligence, and knowledge management into a single operational command layer. Leveraging RAG-based AI, vector search, and real-time WebSocket updates, the platform enables fast, context-aware decision-making. Robust role-based access control with multi-factor authentication ensures security across teams, while Kanban-driven mission tracking, facility operations, analytics, and multi-channel notifications keep every operation synchronized. Designed for scalability and reliability, SentinelOps Nexus transforms raw information into actionable intelligence at operational speed.",
    image: "sentinel.png",
    tags: ["Python", "FastAPI", "Lllama2b", "Langchain", "React"],
    githubUrl: "https://github.com/Abhay030405/Dev_or_Die",
    liveUrl: "https://sentinelops-nexus-abc030973-aeuas0ea5-abhay030405s-projects.vercel.app/",
    videoUrl: "/",
  },
  {
    title: "GeoSheild -  Pixel-Level Landslide Intelligence",
    shortDescription: "Proof that deep learning, when aimed right, can see disasters before humans do.",
    fullDescription: "Built an AI system that hunts landslides from the sky using UAV imagery and deep learning. \n• Engineered a Mask R-CNN–based instance segmentation pipeline to detect and isolate disaster-prone regions with pixel-level precision. \n• Trained a multi-class model to simultaneously identify Landslides, Water Bodies, Vegetation, and Buildings in complex aerial scenes.\n• Leveraged transfer learning with COCO-pretrained ResNet-50 + FPN to achieve high accuracy on limited geospatial data.\n• Designed a full end-to-end pipeline — from data preprocessing and model training to real-time inference.\n• Developed a React + Tailwind frontend that visualizes predictions with interactive segmentation overlays.\n• Built a FastAPI backend to serve low-latency predictions for uploaded UAV images.\n• Optimized training using frozen backbones, custom annotations, and controlled train/val/test splits.\n• Transformed raw aerial images into actionable disaster intelligence within seconds.\n• Enables rapid risk assessment for early warning and disaster mitigation systems.\n• Designed with scalability in mind for real-world geospatial and satellite deployments.",
    image: "GeoSheild.png",
    tags: ["Python", "PyTorch", "Mask-RCNN", "Dectectron2", "ResNet-101", "ResNet-50"],
    githubUrl: "https://github.com/Abhay030405/GeoSheild",
    videoUrl: "/",
  },
  {
    title: "Market Mestro - Multi Agent System",
    shortDescription: "Multi-Agent AI System Engineered to Decode Markets, Risk, and Opportunity",
    fullDescription: "Market Maestro is a multi-agent AI-driven financial research platform engineered to analyze markets as a coordinated intelligence system rather than a single model. It orchestrates autonomous agents—Market Analyst, Event Monitor, Risk Evaluator, and Portfolio Optimizer—using LangChain and LangGraph to fetch live market data, track financial events, quantify risk, and generate data-backed investment strategies. Through a unified reasoning layer, the platform connects news sentiment, market movements, and portfolio metrics into actionable insights. With real-time visualization, explainable AI summaries, and strategy generation, Market Maestro transforms raw financial signals into structured, decision-ready intelligence.",
    image: "stockify.png",
    tags: ["Python", "LSTM", "TensorFlow", "Finance"],
    githubUrl: "https://github.com/Abhay030405/market_maestro",
    // liveUrl: "https://example.com",
    videoUrl: "/",
  },
  {
    title: "Nueral Watch - Drift AI Assistant",
    shortDescription: "Real-Time Monitoring | Statistical & ML Drift Detection | LLM-Powered Reasoning",
    fullDescription: "Neural Watch is an AI-powered data drift monitoring system designed to ensure the reliability and performance of machine learning models in production. It combines statistical methods and machine learning techniques to detect shifts in data distributions that can impact model accuracy. The system features real-time monitoring, automated alerts, and a user-friendly dashboard for visualizing drift metrics. Additionally, it integrates a Large Language Model (LLM) assistant that provides contextual explanations and recommendations for addressing detected drifts. Neural Watch empowers data scientists and engineers to maintain model integrity and make informed decisions in dynamic data environments.\n\nKey Features:\n- Real-Time Data Monitoring: Continuously tracks incoming data streams for changes.\n- Statistical Drift Detection: Utilizes methods like KS Test and Chi-Squared Test to identify distribution shifts.\n- ML-Based Drift Detection: Implements models such as Autoencoders and Isolation Forests for anomaly detection.\n- LLM-Powered Explanations: Provides human-readable insights and recommendations using advanced language models.\n- Interactive Dashboard: Visualizes drift trends, metrics, and alerts for easy analysis.\n- Alerting System: Notifies stakeholders of significant drifts via email or messaging platforms.",
    image: "drift.png",
    tags: ["Python","LangChain","llama2b", "FastAPI"],
    githubUrl: "https://github.com/Abhay030405/data-drift-monitoring",
    // liveUrl: "https://example.com",
    videoUrl: "/",
  },
  {
    title: "Neuro Foundary - Collaborative Agentic Platform",
    shortDescription: "Platform that manages several specialized AI agents",
    fullDescription: "Build a Collaborative Agentic Platform proof-of-concept, an intelligent system that automates the end-to-end development of full-stack applications. The platform should connect with Azure DevOps (ADO), read project user stories, and orchestrate a team of specialized AI agents to generate, test, and integrate code.\n\n The main goal is to drastically reduce development time, automate manual coding tasks, and standardize application architecture by translating plain-text project requirements directly into deployable, full-stack code.",
    image: "multi.png",
    tags: ["Python", "Gemini" ,"Langchain", "NLP", "AWS", "FastAPI"],
    githubUrl: "https://github.com/Abhay030405/Neuro-Foundary",
    videoUrl: "/",
  },
  {
    title: "FairLensAI - Bias Detection",
    shortDescription: "AI-Powered Model Explainability & Bias Detection System",
    fullDescription: "FairLens AI is an end-to-end system designed to explain machine learning model predictions and detect bias across user demographics.\nIt combines: \n- SHAP & LIME: Feature-level interpretability for predictions -Bias Detection Metrics: Identifies fairness issues across groups\n-LangChain: Generates human-readable explanations summarizing model reasoning\n-FastAPI Backend: Handles computation and API endpoints\n-Streamlit Dashboard: Interactive frontend for visualization and reporting\n-This system is ideal for ML model monitoring, AI observability, and ethical AI deployment. \n\nIt empowers data scientists and stakeholders to understand model behavior, ensure fairness, and build trust in AI systems.",
    image: "bias.png",
    tags: ["Python", "Langchain", "Gemini", "Streamlit" ,"FastAPI"],
    githubUrl: "https://github.com/Abhay030405/ai-bias-explainability",
    videoUrl: "/",
  },
  {
    title: "Conway Game of Life Simulator",
    shortDescription: "Cellular automaton devised by the British mathematician John Horton Conway",
    fullDescription: "Conway's Game of Life is a cellular automaton devised by the British mathematician John Horton Conway. This project implements the simulation in Python using object-oriented programming principles and provides both visual and console-based representations of the evolving grid. \n\n Project Overview : This simulation follows the rules of Conway's Game of Life: \n 1. Any live cell with 2 or 3 live neighbors survives. \n 2. Any dead cell with exactly 3 live neighbors becomes a live cell. \n 3. All other live cells die, and all other dead cells stay dead. \n 4. Implemented in Python using basic OOP concepts, list operations, and visualization using matplotlib. \n\nFeatures: \n1. Create and initialize a custom grid of any size. \n 2. Populate the grid with live cells at specific coordinates.\n 3. Step-by-step evolution of the grid. \n 4. Run multiple steps at once. \n 5. Console-based and graphical visualization of the grid.",
    image: "conway.png",
    tags: ["Python", "Numpy", "OOPs" ,"Matplotlib"],
    githubUrl: "https://github.com/Abhay030405/Conway-s-Game-of-Life",
    videoUrl: "/",
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
