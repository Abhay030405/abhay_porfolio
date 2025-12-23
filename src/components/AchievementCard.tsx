import { Award } from "lucide-react";

interface AchievementCardProps {
  title: string;
  issuer: string;
  date: string;
  image: string;
}

export const AchievementCard = ({
  title,
  issuer,
  date,
  image,
}: AchievementCardProps) => {
  return (
    <div className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
      {/* Certificate Image */}
      <div className="aspect-[4/3] bg-secondary overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-primary/10 rounded-lg shrink-0">
            <Award className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground">{issuer}</p>
            <p className="text-xs text-muted-foreground mt-1 font-mono">
              {date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
