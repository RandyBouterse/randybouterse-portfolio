import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Circle, Sun, Moon, ArrowLeft } from "lucide-react";
import { useTheme } from "next-themes";
import { useNavigate } from "react-router-dom";

const ProjectDetails = () => {
  const { id } = useParams();
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();

  const projects = {
    "portfolio-website": {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS",
      tech: ["React", "TypeScript", "Tailwind CSS", "Shadcn UI", "Lovable"],
      details: [
        "To showcase my experience with AI products and my technical expertise, I rebuilt my portfolio website using an AI developer. By researching different project manager portfolios and examining what should be included, I began outlining the development process.",
        "Approach: Researched and created an outline for the AI development agent. Iterated through each prompt, testing buttons and features to ensure proper functionality.",
        "Key Results:",
        "Developed a digital portfolio to demonstrate my experience and knowledge. Launched a fully functional website for showcasing my career achievements.",
        "Technologies Used: GitHub, ChatGPT, AI-powered development tools (Lovable)"
      ],
      images: [
        "https://i.postimg.cc/d050bmpt/undraw-trendy-interface-bm65.png",
        "https://i.postimg.cc/65Rm5Cn9/image.png"
      ]
    },
    "aime-bot": {
      title: "Aime - Virtual Portfolio Bot",
      description: "An AI-powered chatbot that helps users explore my portfolio and experience",
      tech: ["OpenAI", "React", "Node.js", "TypeScript"],
      details: [
        "To further showcase my professional expertise, I created Aime, an AI-powered chatbot that helps visitors explore my portfolio. The chatbot answers questions about my career, skills, and projects, simulating a conversation with a hiring manager.",

    "Objectives:",
    "- Develop an interactive chatbot for portfolio exploration.",
    "- Automate answers to common career-related questions.",
    "- Simulate professional interactions for a dynamic user experience.",

    "Approach:",
    "Prompted ChatGPT to simulate a hiring manager’s interview, gathering responses to common questions. Created a detailed chatbot prompt defining its role, scope, and limitations. Iteratively tested and refined the chatbot based on feedback and accuracy.",

    "Key Results:",
    "Launched a functional AI chatbot to enhance user interaction with my portfolio, gathering valuable feedback for continuous improvements.",
    "Technologies Used:",
    "OpenAI (ChatGPT), Anthropic (Claude), Google (Gemini), Lovable.dev (Portfolio website), analytics for tracking user interactions.",

    "Next Steps:",
    "- Expand user testing and refine the chatbot’s performance.",
    "- Update the chatbot’s knowledge base for better accuracy."
      ],
      images: [
        "https://i.postimg.cc/cCn48qHr/undraw-visionary-technology-6ouq.png",
        "https://i.postimg.cc/NMYnWF5g/image.png"
      ]
    }
        "portfolio-website": {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS",
      tech: ["React", "TypeScript", "Tailwind CSS", "Shadcn UI", "Lovable"],
      details: [
        "To showcase my experience with AI products and my technical expertise, I rebuilt my portfolio website using an AI developer. By researching different project manager portfolios and examining what should be included, I began outlining the development process.",
        "Approach: Researched and created an outline for the AI development agent. Iterated through each prompt, testing buttons and features to ensure proper functionality.",
        "Key Results:",
        "Developed a digital portfolio to demonstrate my experience and knowledge. Launched a fully functional website for showcasing my career achievements.",
        "Technologies Used: GitHub, ChatGPT, AI-powered development tools (Lovable)"
      ],
      images: [
        "https://i.postimg.cc/d050bmpt/undraw-trendy-interface-bm65.png",
        "https://i.postimg.cc/65Rm5Cn9/image.png"
      ]
    },
      "portfolio-website": {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS",
      tech: ["React", "TypeScript", "Tailwind CSS", "Shadcn UI", "Lovable"],
      details: [
        "To showcase my experience with AI products and my technical expertise, I rebuilt my portfolio website using an AI developer. By researching different project manager portfolios and examining what should be included, I began outlining the development process.",
        "Approach: Researched and created an outline for the AI development agent. Iterated through each prompt, testing buttons and features to ensure proper functionality.",
        "Key Results:",
        "Developed a digital portfolio to demonstrate my experience and knowledge. Launched a fully functional website for showcasing my career achievements.",
        "Technologies Used: GitHub, ChatGPT, AI-powered development tools (Lovable)"
      ],
      images: [
        "https://i.postimg.cc/d050bmpt/undraw-trendy-interface-bm65.png",
        "https://i.postimg.cc/65Rm5Cn9/image.png"
      ]
    },
      "portfolio-website": {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS",
      tech: ["React", "TypeScript", "Tailwind CSS", "Shadcn UI", "Lovable"],
      details: [
        "To showcase my experience with AI products and my technical expertise, I rebuilt my portfolio website using an AI developer. By researching different project manager portfolios and examining what should be included, I began outlining the development process.",
        "Approach: Researched and created an outline for the AI development agent. Iterated through each prompt, testing buttons and features to ensure proper functionality.",
        "Key Results:",
        "Developed a digital portfolio to demonstrate my experience and knowledge. Launched a fully functional website for showcasing my career achievements.",
        "Technologies Used: GitHub, ChatGPT, AI-powered development tools (Lovable)"
      ],
      images: [
        "https://i.postimg.cc/d050bmpt/undraw-trendy-interface-bm65.png",
        "https://i.postimg.cc/65Rm5Cn9/image.png"
      ]
    },
  };

  const project = projects[id as keyof typeof projects];

  if (!project) {
    return <div>Project not found</div>;
  }

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
        <div className="max-w-4xl mx-auto">
          <Button 
            variant="ghost" 
            className="mb-8 gap-2"
            onClick={() => navigate('/portfolio')}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Button>

          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((tech, index) => (
              <Badge key={index} variant="secondary">{tech}</Badge>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-8 mb-12">
            {project.images.map((image, index) => (
              <img 
                key={index}
                src={image}
                alt={`${project.title} screenshot ${index + 1}`}
                className="rounded-lg w-full"
              />
            ))}
          </div>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Project Details</h2>
              <div className="space-y-4">
                {project.details.map((detail, index) => (
                  <p key={index} className="text-gray-600 dark:text-gray-400">
                    {detail}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
