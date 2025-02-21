import { useState } from "react";
import { MessageSquare, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useTheme } from "next-themes";
import ChatBot from "@/components/ChatBot";
import ProjectSection from "@/components/ProjectSection";
import SkillsSection from "@/components/SkillsSection";

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <div className="absolute inset-0 grid grid-cols-[repeat(20,minmax(0,1fr))] grid-rows-[repeat(20,minmax(0,1fr))] gap-px opacity-[0.015] dark:opacity-[0.03] pointer-events-none">
        {Array.from({ length: 400 }).map((_, i) => (
          <div key={i} className="bg-foreground" />
        ))}
      </div>

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
            A developer turned product designer{" "}
            <span className="block text-xl md:text-2xl mt-2 text-gray-400">
              - focusing on interaction design, design systems & prototyping
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8">
            Currently working on crafting delightful user experiences and building innovative design systems. 
            Let's create something amazing together.
          </p>
          <div className="flex gap-4">
            <Button variant="outline" size="lg">
              View Projects
            </Button>
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
          </div>
        </div>
      </section>

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
