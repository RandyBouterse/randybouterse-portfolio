
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Circle, Link, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();

const handleProjectClick = (projectId: string) => {
  console.log("Navigating to:", `/projects/${projectId}`); // Debugging
  navigate(`/projects/${projectId}`);
};
  
  const projects = [
    {
      id: "portfolio-website",
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS",
      tech: ["React", "TypeScript", "Tailwind CSS", "Shadcn UI", "Lovable"],
      images: [
        "https://i.postimg.cc/d050bmpt/undraw-trendy-interface-bm65.png",
        "https://i.postimg.cc/65Rm5Cn9/image.png"
      ]
    },
    {
      id: "aime-bot",
      title: "Aime - Virtual Portfolio Bot",
      description: "An AI-powered chatbot that helps users explore my portfolio and experience",
      tech: ["OpenAI ChatGPT", "Anthropic Claude", "Google Gemini", "Voiceflow"],
      images: [
        "https://i.postimg.cc/cCn48qHr/undraw-visionary-technology-6ouq.png",
        "https://i.postimg.cc/NMYnWF5g/image.png"
      ]
    },
    {
      id: "customer-service-platform",
      title: "Customer Service Platform",
      description: "Implemented an omnichannel platform reducing costs and improving efficiancy",
      tech: ["Sprinklr", "MS Teams", "Sharepoint"],
      images: [
        "https://i.postimg.cc/rFYNk307/undraw-calling-ieh0.png",
        "https://prod2-sprcdn-assets.sprinklr.com/50400/67e03d55-c284-4302-8235-14a3766c0ac0-137156522/Screenshot_2023-04-13_at_3.29..png"
      ]
    },
    {
      id: "student-information-system",
      title: "Student Information System",
      description: "Implemented a new SIS system and led adoption for 3300+ users",
      tech: ["Educator", "CSS", "HTML", "Kaltura", "MS Teams"],
      images: [
        "https://i.postimg.cc/76b3CN2f/undraw-online-collaboration-xon8.png",
        "https://www.educator.eu/wp-content/uploads/Educator_imac_macbook_ipad-1024x683.png"
      ]
    },
    {
      id: "digital-audition-solution",
      title: "Digital Audition Solution",
      description: "Built a remote audition solution during COVID-19",
      tech: ["SharePoint", "Typeform", "Power Automate"],
      images: [
        "https://i.postimg.cc/m29SNV69/undraw-innovative-9l1b.png",
        "https://cdn.prod.website-files.com/60d07e744f068218f38db4c0/64a6bb36c7c50d4bdb67b172_62dea8562baf3e36c83125d2_Power%2520Automate.jpeg"
      ]
    },
    {
      id: "office-365-implementation",
      title: "Office 365 implementation",
      description: "Led the implementation of O365 across all faculties for 3,500+ users",
      tech: ["O365", "Kaltura", "MS Teams"],
      images: [
        "https://i.postimg.cc/NML0B2v8/undraw-group-hangout-o22u.png",
        "https://teknertia.com/wp-content/uploads/2023/05/What-is-Microsoft-365-scaled.jpg"
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
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="gap-2"
                    onClick={() => navigate(`/portfolio/${project.id}`)}
                  >
                    <Link className="w-4 h-4" />
                    View Details
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
