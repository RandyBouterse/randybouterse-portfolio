
import { useState } from "react";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import ChatBot from "@/components/ChatBot";
import ProjectSection from "@/components/ProjectSection";
import SkillsSection from "@/components/SkillsSection";

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-hero text-hero-foreground">
      {/* Hero Section */}
      <section className="container px-4 pt-20 pb-32 min-h-screen flex flex-col justify-center">
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
    </div>
  );
};

export default Index;
