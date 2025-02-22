
import { useState } from "react";
import { MessageSquare, Sun, Moon, FileDown, Mail, Linkedin, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useTheme } from "next-themes";
import ChatBot from "@/components/ChatBot";
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

  const projects = [
    {
      title: "Project 1",
      description: "Description of project 1",
      tech: ["React", "TypeScript", "Tailwind CSS"]
    },
    {
      title: "Project 2",
      description: "Description of project 2",
      tech: ["Next.js", "Node.js", "MongoDB"]
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-foreground relative transition-colors duration-300">
      {/* Theme Toggle */}
      <Button
        variant="outline"
        size="icon"
        className="fixed top-4 right-4 z-50"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-black dark:text-white" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-black dark:text-white" />
        <span className="sr-only">Toggle theme</span>
      </Button>

      {/* Hero Section */}
      <section className="container px-4 pt-20 pb-32 min-h-screen flex flex-col justify-center relative">
        <div className="max-w-3xl animate-fade-up">
          <div className="flex items-center gap-2 mb-6 text-gray-600 dark:text-gray-400">
            <MapPin className="w-5 h-5" />
            <span className="flex items-center gap-2">
              Based in the Netherlands
              <span className="text-2xl">🇳🇱</span>
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            A Business analyst turned Product Manager{" "}
            <span className="block text-xl md:text-2xl mt-2 text-gray-400">
              bridging the gap between strategic vision and user-centric execution
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8">
            Currently working on crafting delightful user experiences and building innovative design systems. 
            Let's create something amazing together.
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
                  <Dialog open={isChatOpen} onOpenChange={setIsChatOpen}>
                    <DialogTrigger asChild>
                      <Button size="lg">
                        <MessageSquare className="w-5 h-5 mr-2" />
                        Chat with AI Assistant
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Chat with my AI Assistant</DialogTitle>
                      </DialogHeader>
                      <ChatBot />
                    </DialogContent>
                  </Dialog>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Chat with my digital twin!</p>
                </TooltipContent>
              </Tooltip>

              <div className="flex gap-4 ml-auto">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a 
                      href="https://notion.so" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-gray-600 transition-colors"
                    >
                      <img 
                        src="/lovable-uploads/ddbc40c4-3e42-4c88-b620-e419776f18e5.png" 
                        alt="Notion" 
                        className="w-6 h-6 dark:invert"
                      />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View some of my thoughts and inspiration</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <a 
                      href="mailto:your.email@example.com" 
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
                      href="https://linkedin.com" 
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

          {/* Certification Badges */}
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

      {/* Experience Section */}
      <ExperienceSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Section */}
      <section className="py-32 bg-white dark:bg-black">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
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
            ))}
          </div>
        </div>
      </section>

      {/* A bit of awesomeness Section */}
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
                  "Hey, want to do a 5K?" my colleague asked. Somehow that turned into "I'm running a full marathon in 2025!" Classic me - always taking things too far. Now I'm collecting running shoes, talking about "splits" at parties, and wondering what I've gotten myself into. But hey, if Forrest can run across America, I can handle 42.195 kilometers... right?
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

      {/* Contact Section */}
      <section className="bg-white dark:bg-black text-foreground py-32">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Let's work together</h2>
          <p className="text-lg text-center text-gray-400 mb-8">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
          <div className="flex justify-center">
            <Button size="lg" variant="outline">
              Contact Me
            </Button>
          </div>
        </div>
      </section>

      {/* Floating AI Assistant Button */}
      <Dialog open={isChatOpen} onOpenChange={setIsChatOpen}>
        <DialogTrigger asChild>
          <Button
            size="lg"
            className="fixed bottom-8 right-8 rounded-full shadow-lg"
          >
            <MessageSquare className="w-5 h-5" />
            <span className="sr-only">Chat with AI Assistant</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Chat with my AI Assistant</DialogTitle>
          </DialogHeader>
          <ChatBot />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
