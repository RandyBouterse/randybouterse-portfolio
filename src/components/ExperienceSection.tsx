import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface WorkExperience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

const workExperiences: WorkExperience[] = [
  {
    company: "Chamber of Commerce (Kamer van Koophandel)",
    role: "Business Analyst / Product Owner",
    period: "2022 - Present",
    description: [
      "Led the development of an omnichannel customer service platform, cutting costs by 23% and enhancing efficiency for 300 users. Spearheaded product discovery and requirements gathering, translating business needs into actionable user stories for engineering teams. Drove GDPR compliance initiatives, optimizing high-risk processes to improve security and operational effectiveness."
    ]
  },
  {
    company: "Amsterdam University of The Arts",
    role: "Associate / Junior Product Manager",
    period: "2021 - 2022",
    description: [
      "Managed the roadmap for the Student Information System (SIS), improving the experience for 3,300+ students and staff while reducing administrative errors. Designed and delivered training programs across six faculties, enhancing system adoption and operational efficiency."
    ]
  },
  {
    company: "Amsterdam University of The Arts",
    role: "IT Product Owner",
    period: "2020 - 2021",
    description: [
      "Launched a digital audition solution during COVID-19, ensuring a seamless admission process for 83 students. Optimized the Office 365 environment for 3,500+ users, enhancing collaboration and communication. Developed training programs to improve digital literacy and support the organization's digital transformation strategy."
    ]
  }
];

const educationData = [
  {
    institution: "Product School",
    degree: "Product Manager Certification (PMC)",
    period: "2025",
    achievements: []
  },
  {
    institution: "Scaled Agile",
    degree: "Certified SAFe® 6 Product Owner / Product Manager",
    period: "2024",
    achievements: []
  },
  {
    institution: "Scrum.org",
    degree: "Professional Scrum Product Owner I",
    period: "2024",
    achievements: []
  },
  {
    institution: "University of Amsterdam",
    degree: "MSc - Business Information Systems",
    period: "2024",
    achievements: []
  },
  {
    institution: "Rotterdam University of Applied Sciences",
    degree: "BSc - Business IT & Management",
    period: "2015 - 2019",
    achievements: []
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
