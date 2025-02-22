
import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  Activity, 
  ChartBar, 
  Target, 
  Smartphone,
  Bot
} from "lucide-react";

interface Skill {
  title: string;
  items: string[];
  icon: React.ReactNode;
}

const skillsData: Skill[] = [
  {
    title: "Core Skills",
    items: [
      "Product roadmapping",
      "User research",
      "Agile/scrum methodologies",
      "Stakeholder management",
      "Requirements gathering",
      "Data analysis",
      "OKR/KPI tracking",
      "Feature prioritization",
      "User-centric design",
      "Process optimization"
    ],
    icon: <Target className="w-6 h-6" />
  },
  {
    title: "Project Management",
    items: [
      "Jira - Sprint planning",
      "Confluence - Technical documentation",
      "Backlog management"
    ],
    icon: <Activity className="w-6 h-6" />
  },
  {
    title: "Collaboration & Design",
    items: [
      "Figma - Product design",
      "Miro - Cross-functional collaboration",
      "Design thinking facilitation"
    ],
    icon: <Users className="w-6 h-6" />
  },
  {
    title: "Prototyping",
    items: [
      "Flutterflow - Mobile app prototyping",
      "Bubble.io - Web app MVPs",
      "Low/No-code development"
    ],
    icon: <Smartphone className="w-6 h-6" />
  },
  {
    title: "Data & Analytics",
    items: [
      "Google Analytics - User behavior tracking",
      "Power BI - KPI visualization",
      "Metrics analysis"
    ],
    icon: <ChartBar className="w-6 h-6" />
  },
  {
    title: "AI Tools",
    items: [
      "ChatGPT - Content generation",
      "Claude - Data analysis",
      "NotebookLLM - Code assistance",
      "Lovable.dev - Development support"
    ],
    icon: <Bot className="w-6 h-6" />
  }
];

const SkillsSection = () => {
  return (
    <section className="py-32 bg-white dark:bg-black">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Skills & Toolkit
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillsData.map((skill) => (
            <Card key={skill.title} className="animate-fade-up">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  {skill.icon}
                  <h3 className="text-xl font-semibold">{skill.title}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item, index) => (
                    <li key={index} className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
