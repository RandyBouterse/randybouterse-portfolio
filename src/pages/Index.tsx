
import { useState } from "react";
import { MessageSquare, Sun, Moon, FileDown, Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useTheme } from "next-themes";
import ChatBot from "@/components/ChatBot";
import ProjectSection from "@/components/ProjectSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-black text-foreground relative transition-colors duration-300">
      {/* Theme Toggle */}
      <Button
        variant="outline"
        size="icon"
        className="fixed top-4 right-4 z-50"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>

      {/* Hero Section */}
      <section className="container px-4 pt-20 pb-32 min-h-screen flex flex-col justify-center relative">
        <div className="max-w-3xl animate-fade-up">
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
            <div className="flex gap-4 ml-auto">
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
              <a 
                href="mailto:your.email@example.com" 
                className="text-foreground hover:text-gray-600 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground hover:text-gray-600 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Certification Badges */}
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="bg-white rounded-lg p-2 shadow-sm hover:scale-110 transition-transform duration-200 cursor-pointer">
              <img 
                src="/lovable-uploads/69f58347-708b-45d2-886e-40922d514c0e.png"
                alt="Product Manager Certification"
                className="h-16 w-auto"
              />
            </div>
            <div className="bg-white rounded-lg p-2 shadow-sm hover:scale-110 transition-transform duration-200 cursor-pointer">
              <img 
                src="/lovable-uploads/67d4b806-28b9-4b64-8a51-908520602013.png"
                alt="PSPO Certification"
                className="h-16 w-auto"
              />
            </div>
            <div className="bg-white rounded-lg p-2 shadow-sm hover:scale-110 transition-transform duration-200 cursor-pointer">
              <img 
                src="/lovable-uploads/abe4214a-16c5-4321-8cf7-ffed7dfa3840.png"
                alt="POPM Certification"
                className="h-16 w-auto"
              />
            </div>
            <div className="bg-white rounded-lg p-2 shadow-sm hover:scale-110 transition-transform duration-200 cursor-pointer relative">
              <img 
                src="/lovable-uploads/eaa326ef-94ff-4b8e-a8a3-f2e1f803f372.png"
                alt="AI Product Certification"
                className="h-16 w-auto opacity-50"
              />
              <Badge 
                variant="secondary" 
                className="absolute -top-2 -right-2"
              >
                Coming Soon
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <ExperienceSection />

      {/* Projects Section */}
      <ProjectSection
        backgroundColor="bg-section-pink"
        title="Mobile App Redesign"
        description="A complete overhaul of a legacy application, focusing on modern design patterns and improved user experience."
        imageSrc="/lovable-uploads/fc09ccc6-5d97-43c2-b3de-5062784d1b56.png"
      />

      <ProjectSection
        backgroundColor="bg-section-blue"
        title="Design System Development"
        description="Created and maintained a comprehensive design system used across multiple products."
        imageSrc="/lovable-uploads/fc09ccc6-5d97-43c2-b3de-5062784d1b56.png"
        reverse
      />

      {/* Skills Section */}
      <SkillsSection />

      {/* Contact Section */}
      <section className="bg-hero text-hero-foreground py-32">
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
