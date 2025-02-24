
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Circle, Sun, Moon, ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";

const About = () => {
  const { theme, setTheme } = useTheme();

  const processSteps = [
    {
      title: "Discovery & Scope Definition",
      description: "Understanding the problem space by gathering requirements, defining the scope, and aligning on business objectives. Engaging with stakeholders to ensure clear expectations and measurable goals."
    },
    {
      title: "Research & Market Analysis",
      description: "Conducting internal and external research to validate assumptions and uncover insights. Analyzing user needs, competitor strategies, and industry trends to inform product decisions. Utilizing data-driven insights to shape the product vision."
    },
    {
      title: "Ideation & Solution Design",
      description: "Collaborating with cross-functional teams in brainstorming sessions, wireframing, and rapid prototyping. Iterating on concepts based on user feedback, feasibility discussions with engineering, and alignment with business strategy."
    },
    {
      title: "Development & Execution",
      description: "Translating validated ideas into actionable user stories, prioritizing features, and working closely with developers/engineers in Agile sprints. Ensuring smooth collaboration between teams and resolving blockers to maintain momentum."
    },
    {
      title: "Launch & Go-to-Market Strategy",
      description: "Coordinating launch readiness, stakeholder communication, and product documentation. Supporting the relevant teams with necessary materials while ensuring a seamless rollout."
    },
    {
      title: "Measure & Iterate",
      description: "Tracking KPIs and user engagement to measure success post-launch. Analyzing feedback, identifying improvement areas, and iterating on the product roadmap to optimize for continued growth and adoption."
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
            <div className="text-lg text-gray-600 dark:text-gray-400 space-y-6 mb-12">
              <p>
                You're probably here looking for the right Product Manager—someone who can connect the dots, navigate challenges, and bring teams together to build something amazing. Well, good news! That's exactly what I do.
              </p>
              <p>
                For me, product management is part problem-solving, part collaboration, and entirely about creating harmony between brilliant, passionate people. I thrive on working with cross-functional teams, translating their expertise into a shared vision, and guiding them, like a conductor, toward something greater than the sum of its parts.
              </p>
              <p>
                My colleagues call me "Mr. Never Fazed" because, 9.5 times out of 10, I stay calm under pressure. But don't mistake that for indifference! I care deeply about the work, the people, and the impact. I just believe that keeping things cool, collected, and solution-focused is the best way to turn chaos into clarity.
              </p>
              <p>
                What sets me apart? I know how to build real connections. Whether it's stakeholders, engineers, designers, or users, I take the time to find common ground, adapt my communication style, and use a bit of humor to break down barriers. Strong relationships lead to better collaboration, and better collaboration leads to great products.
              </p>
              <p>
                If I had to sum up my product management style, I'd say I'm "The Composer." I may not be the best at playing any single instrument (design, engineering, or marketing), but I know how to bring them together in perfect harmony to create something truly meaningful for users.
              </p>
              <p>
                Let's connect and make something great together. 🚀
              </p>
            </div>

            <Card className="mb-12">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">My Approach</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  I believe in leading with empathy, making data-driven decisions, and fostering collaboration across teams. My experience in both business analysis and product management has taught me the importance of balancing stakeholder needs with technical constraints while always keeping the user at the center of every decision.
                </p>
                
                <div className="relative mt-12 mb-8">
                  {/* Circular Process Visualization */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                    {processSteps.map((step, index) => (
                      <div key={index} className="relative group">
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white text-lg font-bold mb-4">
                            {index + 1}
                          </div>
                          <h3 className="text-lg font-semibold text-center mb-2">{step.title}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                            {step.description}
                          </p>
                          {index < processSteps.length - 1 && (
                            <ArrowRight className="absolute -right-4 top-1/4 transform -translate-y-1/2 text-primary h-8 w-8 hidden md:block" />
                          )}
                          {index === processSteps.length - 1 && (
                            <div className="absolute -right-4 top-1/4 transform -translate-y-1/2 text-primary hidden md:block">
                              <ArrowRight className="h-8 w-8 transform rotate-90" />
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Connecting lines for the circular flow */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute bottom-0 right-0 w-1/3 h-12 border-b-2 border-r-2 border-primary rounded-br-xl hidden md:block"></div>
                    <div className="absolute top-0 left-0 w-1/3 h-12 border-t-2 border-l-2 border-primary rounded-tl-xl hidden md:block"></div>
                  </div>
                </div>
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
  );
};

export default About;
