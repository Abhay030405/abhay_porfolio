import { Github, ExternalLink, Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  videoUrl?: string;
}

export const ProjectCard = ({
  title,
  shortDescription,
  fullDescription,
  image,
  tags,
  githubUrl,
  liveUrl,
  videoUrl,
}: ProjectCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <div
        className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-primary/10"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Image */}
        <div className="aspect-video bg-secondary overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {shortDescription}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-mono"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="gap-1">
                <Github className="h-4 w-4" />
                Code
              </Button>
            </a>
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="gap-1">
                  <ExternalLink className="h-4 w-4" />
                  Live
                </Button>
              </a>
            )}
            {videoUrl && (
              <a href={videoUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="gap-1">
                  <Play className="h-4 w-4" />
                  Video
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[80vh] overflow-auto bg-card border border-border rounded-2xl shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-background/80 rounded-full hover:bg-muted transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Image */}
            <div className="aspect-video bg-secondary">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gradient">
                {title}
              </h2>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-md font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {fullDescription}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="default" className="gap-2">
                    <Github className="h-4 w-4" />
                    View Code
                  </Button>
                </a>
                {liveUrl && (
                  <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="gap-2">
                      <ExternalLink className="h-4 w-4" />
                      View Live
                    </Button>
                  </a>
                )}
                {videoUrl && (
                  <a href={videoUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="gap-2">
                      <Play className="h-4 w-4" />
                      Watch Video
                    </Button>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
