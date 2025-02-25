import { useState } from "react";
import { MessageSquare, Sun, Moon, FileDown, Mail, Linkedin, MapPin, Circle, Link } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useTheme } from "next-themes";
import VoiceflowChat from "@/components/VoiceflowChat";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleChatOpen = () => {
    if (window.voiceflow?.chat) {
      window.voiceflow.chat.open();
    }
    setIsChatOpen(false);
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
      tech: ["OpenAI", "React", "Node.js", "TypeScript"],
      images: [
        "https://i.postimg.cc/cCn48qHr/undraw-visionary-technology-6ouq.png",
        "https://i.postimg.cc/NMYnWF5g/image.png"
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
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-foreground relative transition-colors duration-300">
      <VoiceflowChat />
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
            <a href="/" className="text-sm font-medium border-b-2 border-primary">Home</a>
            <a href="/about" className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300">About</a>
            <a href="/portfolio" className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300">Portfolio</a>
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

      <section className="container px-4 pt-32 pb-32 min-h-screen flex flex-col justify-center relative">
        <div className="max-w-3xl animate-fade-up">
          <div className="flex items-center gap-2 mb-6 text-gray-600 dark:text-gray-400">
            <MapPin className="w-5 h-5" />
            <span>Based in the Netherlands</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            A Business analyst turned Product Manager{" "}
            <span className="block text-xl md:text-2xl mt-2 text-gray-400">
              bridging the gap between strategic vision and user-centric execution
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8">
            The future is AI-driven, and I'm embracing it head-on. I'm actively exploring integrating AI into general use and product development.<br />
            <em>Pushing boundaries, solving problems, and making tech work smarter.</em>
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a 
                    href="https://docs.google.com/document/d/1B6FI3S4PSuTt35XHqkqek-bi60oxyhq_l-t2x8H_o7Y/edit?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="lg">
                      <FileDown className="w-5 h-5 mr-2" />
                      Resume
                    </Button>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>View my resume</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button size="lg" onClick={handleChatOpen}>
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Chat with AI Assistant
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Chat with my digital twin!</p>
                </TooltipContent>
              </Tooltip>

              <div className="flex gap-4 ml-auto">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a 
                      href="mailto:rr.bouterse@gmail.com" 
                      className="text-foreground hover:text-gray-600 transition-colors"
                    >
                      <Mail className="w-6 h-6" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Send me a message</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <a 
                      href="https://www.linkedin.com/in/randybouterse/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-gray-600 transition-colors"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Let's connect!</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <div className="bg-white rounded-lg p-2 shadow-sm hover:scale-125 transition-transform duration-200 cursor-pointer">
              <img 
                src="/lovable-uploads/69f58347-708b-45d2-886e-40922d514c0e.png"
                alt="Product Manager Certification"
                className="h-16 w-auto"
              />
            </div>
            <div className="bg-white rounded-lg p-2 shadow-sm hover:scale-125 transition-transform duration-200 cursor-pointer">
              <img 
                src="/lovable-uploads/67d4b806-28b9-4b64-8a51-908520602013.png"
                alt="PSPO Certification"
                className="h-16 w-auto"
              />
            </div>
            <div className="bg-white rounded-lg p-2 shadow-sm hover:scale-125 transition-transform duration-200 cursor-pointer">
              <img 
                src="/lovable-uploads/abe4214a-16c5-4321-8cf7-ffed7dfa3840.png"
                alt="POPM Certification"
                className="h-16 w-auto"
              />
            </div>
            <div className="bg-white rounded-lg p-2 shadow-sm hover:scale-125 transition-transform duration-200 cursor-pointer relative">
              <img 
                src="/lovable-uploads/eaa326ef-94ff-4b8e-a8a3-f2e1f803f372.png"
                alt="AI Product Certification"
                className="h-16 w-auto opacity-50"
              />
              <Badge 
                variant="secondary" 
                className="absolute -bottom-2 left-1/2 -translate-x-1/2"
              >
                Coming Soon
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <ExperienceSection />

      <SkillsSection />

      <section className="py-32 bg-white dark:bg-black">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.slice(0, 6).map((project, index) => (
              <a href={`/portfolio/${project.id}`} key={index}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
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
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <Badge key={i} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <a href="/portfolio">
              <Button variant="outline" size="lg" className="gap-2">
                View all projects
                <Link className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-32 bg-white dark:bg-black">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
            A bit of awesomeness
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Bob the Builder</h3>
                <h4 className="text-lg text-gray-600 dark:text-gray-400 mb-4">DIY Addict (Digital & Physical)</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  I can't help myself - I love building stuff! Not just digital products, but actual hands-on projects too. You'll find me down the YouTube rabbit hole researching techniques one day and covered in sawdust (or debugging code) the next. The best part? Standing back with a cold drink, admiring what I've made, and soaking up those "wow, you made that?" comments from friends.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Forrest Gump</h3>
                <h4 className="text-lg text-gray-600 dark:text-gray-400 mb-4">Accidental Marathon Runner</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  "Hey, want to join a Mud Masters obstacle run?" my colleague asked. Somehow that turned into "I'm running a full marathon in 2025!" Classic me - always taking things too far. Now I'm chasing PR's, talking about "splits" at parties, and wondering what I've gotten myself into. But hey, if Forrest can run across America, I can handle 42.195 kilometers... right?
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Creator of Minions</h3>
                <h4 className="text-lg text-gray-600 dark:text-gray-400 mb-4">Professional Cheerleader & Growth Guru</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  No, I haven't created tiny yellow pill-shaped creatures (though that would look great on a resume). Instead, I've mentored colleagues who've gone on to do awesome things. There's something magical about grabbing coffee with someone, listening to their dreams, and helping them plot their next move. Consider me your career DJ - mixing tracks that amplify your talents and get you moving toward your goals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-black text-foreground py-32">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Let's work together</h2>
          <p className="text-lg text-center text-gray-400 mb-8">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
          <div className="flex justify-center">
            <a href="mailto:rr.bouterse@gmail.com">
              <Button size="lg" variant="outline">
                Contact Me
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
