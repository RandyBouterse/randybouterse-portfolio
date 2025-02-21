
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

interface WorkExperience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

const workExperiences: WorkExperience[] = [
  {
    company: "DBS Bank",
    role: "Graduate Associate (SEED Programme)",
    period: "Jul 2023 - Present",
    description: [
      "Developed the Java backend for a bank account servicing process with multiple channel integrations using Activiti workflow",
      "Built a custom database migration tool using Python and MariaDB and facilitated the migration of 1000+ processes from a vendor platform"
    ]
  },
  {
    company: "Singapore Institute of Technology",
    role: "Software Developer (Contract)",
    period: "Apr 2023 - Jun 2023",
    description: [
      "Built NFTVue, a NFT gallery website that allows students to connect their crypto wallets to view and verify their school event-issued NFTs",
      "Worked on DemoConstruct, a full-stack web application (React + Python) that uses Meshroom to reconstruct 3D models from captured images"
    ]
  },
  {
    company: "DBS Bank",
    role: "Software Developer (Intern)",
    period: "May 2022 - Dec 2022",
    description: [
      "Worked on the backend for the digital exchange and asset custody application using Spring Boot and Java",
      "Built an admin dashboard web application for a DBS Metaverse event using Spring Security and Angular"
    ]
  },
  {
    company: "Activate Interactive Pte Ltd",
    role: "Software Developer (Intern)",
    period: "May 2019 - Aug 2019",
    description: [
      "Developed RP Connect, the iOS and Android mobile app for Republic Polytechnic using React Native"
    ]
  }
];

const educationData = [
  {
    institution: "Singapore Institute of Technology",
    degree: "Bachelor of Engineering in Information and Communications Technology",
    period: "2020 - 2024",
    achievements: [
      "CGPA: 4.76/5.00",
      "Director's List (AY2021/2022 T1, T2, T3)",
      "SIT Scholarship"
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="container px-4">
        <Tabs defaultValue="work" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="work">Work</TabsTrigger>
            <TabsTrigger value="education">Education/Certifications</TabsTrigger>
          </TabsList>
          <TabsContent value="work">
            <div className="space-y-6">
              {workExperiences.map((exp, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold">{exp.company}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{exp.role}</p>
                      <p className="text-sm text-gray-500">{exp.period}</p>
                    </div>
                    <ul className="list-disc pl-6 space-y-2">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="text-gray-700 dark:text-gray-300">{desc}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="education">
            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold">{edu.institution}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{edu.degree}</p>
                      <p className="text-sm text-gray-500">{edu.period}</p>
                    </div>
                    <ul className="list-disc pl-6 space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-700 dark:text-gray-300">{achievement}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ExperienceSection;
