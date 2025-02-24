
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Circle, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const About = () => {
  const { theme, setTheme } = useTheme();

  const keySkills = [
    {
      emoji: "🤝",
      title: "Stakeholder Management & Cross-Functional Collaboration",
      points: [
        "Worked with engineering, legal, and operational teams to drive product development and digital transformation initiatives.",
        "Aligned business needs with technical feasibility, ensuring smooth communication between departments."
      ]
    },
    {
      emoji: "⚡",
      title: "Agile Product Ownership & Requirements Gathering",
      points: [
        "Led product discovery, translated business needs into user stories, and worked closely with developers to ensure successful implementation.",
        "Certified SAFe 6 Product Owner/Product Manager and Professional Scrum Product Owner I."
      ]
    },
    {
      emoji: "🔍",
      title: "User Research & Customer-Centric Problem-Solving",
      points: [
        "Conducted user research and feedback sessions to optimize digital tools and services, improving usability and adoption.",
        "Designed and implemented training programs to ensure seamless digital adoption across organizations."
      ]
    },
    {
      emoji: "🌍",
      title: "Digital Transformation & Process Optimization",
      points: [
        "Led end-to-end implementation of new digital solutions that streamlined operations and improved efficiency.",
        "Delivered digital platforms for education, enabling hybrid learning and remote exams for institutions without prior digital infrastructure."
      ]
    },
    {
      emoji: "📊",
      title: "Competitive & Market Analysis",
      points: [
        "Analyzed market trends and competitor products to identify opportunities and gaps in digital solutions.",
        "Used insights to refine product strategy and positioning, ensuring alignment with industry needs."
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
          <div className="flex flex-col-reverse md:flex-row gap-8 mb-12">
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-8">About Me</h1>
              <div className="prose dark:prose-invert max-w-none space-y-6">
                <p>
                  Looking for a Product Manager who can connect the dots, bring teams together, and turn chaos into clarity? That's me!
                </p>
                <p>
                  To me, product management is all about problem-solving and collaboration, and I love working with passionate people to build something amazing. Think of me as "The Composer.". I may not be a pro at playing any single instrument (design, engineering, or marketing), but I know how to bring them all together in perfect harmony. 🎼✨
                </p>
                <p>
                  My colleagues call me "Mr. Never Fazed" because I stay calm, cool, and collected under pressure. But don't get me wrong—I care deeply. I just believe that keeping a level head is the best way to find solutions and get things done. 🔥🧩
                </p>
                <p>
                  What sets me apart? I build real connections. Whether it's stakeholders, engineers, or users, I adapt, communicate, and find common ground to create better collaboration—and better products.
                </p>
                <p>
                  Let's connect and make something great together! 🚀🎯
                </p>
              </div>
            </div>
            <div className="md:w-1/3 flex items-center">
              <img 
                src="/lovable-uploads/8b91de20-875f-4b2f-a117-21e89ec16a56.png"
                alt="Randy Bouterse"
                className="rounded-lg w-full object-cover aspect-square"
              />
            </div>
          </div>

          <Card className="mb-12">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">My Approach</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                I believe in leading with empathy, making data-driven decisions, and fostering collaboration across teams. My experience in both business analysis and product management has taught me the importance of balancing stakeholder needs with technical constraints while always keeping the user at the center of every decision.
              </p>
              
              <div className="relative">
                <img 
                  src="https://i.ibb.co/TDpjfLmq/Randy-Product-Manager.jpg"
                  alt="Product Development Process"
                  className="w-full"
                />
              </div>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <h2 className="text-2xl font-bold">Key Skills</h2>
            {keySkills.map((skill, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <span className="text-2xl">{skill.emoji}</span>
                    {skill.title}
                  </h3>
                  <ul className="space-y-2">
                    {skill.points.map((point, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-400">
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
