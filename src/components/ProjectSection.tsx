
import { cn } from "@/lib/utils";

interface ProjectSectionProps {
  backgroundColor: string;
  title: string;
  description: string;
  imageSrc: string;
  reverse?: boolean;
}

const ProjectSection = ({
  backgroundColor,
  title,
  description,
  imageSrc,
  reverse = false,
}: ProjectSectionProps) => {
  return (
    <section className={cn("py-32", backgroundColor)}>
      <div className="container px-4">
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 gap-8 items-center",
            reverse && "md:flex-row-reverse"
          )}
        >
          <div className={cn("animate-fade-up", reverse && "md:order-2")}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            <p className="text-lg text-gray-600">{description}</p>
          </div>
          <div className={cn("animate-fade-in", reverse && "md:order-1")}>
            <img
              src={imageSrc}
              alt={title}
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
