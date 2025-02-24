
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Circle, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const About = () => {
  const { theme, setTheme } = useTheme();

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
            <a href="/about" className="text-sm font-medium border-b-2 border-primary">About</a>
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

      <div className="container px-4 pt-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About Me</h1>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              As a Business Analyst turned Product Manager, I've developed a unique perspective on bridging the gap between business objectives and user needs. My journey has been shaped by a commitment to creating products that not only meet technical requirements but truly enhance user experiences.
            </p>

            <div className="grid gap-8 mb-12">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">My Approach</h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    I believe in leading with empathy, making data-driven decisions, and fostering collaboration across teams. My experience in both business analysis and product management has taught me the importance of balancing stakeholder needs with technical constraints while always keeping the user at the center of every decision.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Professional Philosophy</h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    In the rapidly evolving tech landscape, I'm particularly excited about the potential of AI to transform product development and user experiences. I stay current with industry trends and best practices, always looking for opportunities to innovate and improve.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
