
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  {
    title: "UX Design",
    description: "Creating intuitive and user-centered design solutions",
  },
  {
    title: "Design Systems",
    description: "Building scalable and consistent design languages",
  },
  {
    title: "Prototyping",
    description: "Crafting interactive and high-fidelity prototypes",
  },
];

const SkillsSection = () => {
  return (
    <section className="bg-section-green py-32">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Things I'm good at
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <Card key={skill.title} className="animate-fade-up">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-gray-600">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
