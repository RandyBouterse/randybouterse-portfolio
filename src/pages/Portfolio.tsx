
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Circle, Link, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const Portfolio = () => {
  const { theme, setTheme } = useTheme();

  const projects = [
    {
      title: "Customer Service Platform",
      description: "Developed an omnichannel platform improving efficiency by 23%",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      images: [
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
      ]
    },
    {
      title: "Student Information System",
      description: "Revamped the SIS system for 3,300+ users",
      tech: ["Next.js", "Node.js", "MongoDB"],
      images: [
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
      ]
    },
    {
      title: "Digital Audition Platform",
      description: "Built a remote audition platform during COVID-19",
      tech: ["Vue.js", "Express", "PostgreSQL"],
      images: [
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
      ]
    },
    {
      title: "Office 365 Integration",
      description: "Led the implementation of O365 for 3,500+ users",
      tech: ["SharePoint", "Azure AD", "Power Automate"],
      images: [
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
      ]
    },
    {
      title: "GDPR Compliance Tool",
      description: "Developed tools for managing GDPR requirements",
      tech: ["Python", "Django", "PostgreSQL"],
      images: [
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
      ]
    },
    {
      title: "Analytics Dashboard",
      description: "Created a real-time analytics platform",
      tech: ["React", "D3.js", "Firebase"],
      images: [
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8">
              <Circle className="w-8 h-8 absolute" />
              <span className="absolute inset-0 flex items-center justify-center font-bold text-sm">
                RB
              </span>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <a href="/" className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300">Home</a>
            <a href="/about" className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300">About</a>
            <a href="/portfolio" className="text-sm font-medium border-b-2 border-primary">Portfolio</a>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-black dark:text-white" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-black dark:text-white" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </nav>

      <div className="container px-4 pt-32">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Portfolio</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
            A collection of projects I've worked on, showcasing my experience in product management and development.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={project.images[0]} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <Badge key={i} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                  <Button variant="ghost" size="sm" className="gap-2">
                    <Link className="w-4 h-4" />
                    View more
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
