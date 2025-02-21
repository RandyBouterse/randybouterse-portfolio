
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
    company: "Chamber of Commerce (Kamer van Koophandel)",
    role: "Senior Business Analyst & Product Owner",
    period: "2022 - Present",
    description: [
      "Led the development of an omnichannel customer service platform, cutting costs by 23% and enhancing efficiency for 300 users",
      "Spearheaded product discovery and requirements gathering, translating business needs into actionable user stories for engineering teams",
      "Drove GDPR compliance initiatives, optimizing high-risk processes to improve security and operational effectiveness"
    ]
  },
  {
    company: "Amsterdam University of the Arts",
    role: "Product Manager – Student Information System",
    period: "2021 - 2022",
    description: [
      "Managed the roadmap for the Student Information System (SIS), improving the experience for 3,300+ students and staff while reducing administrative errors",
      "Designed and delivered training programs across six faculties, enhancing system adoption and operational efficiency"
    ]
  },
  {
    company: "Amsterdam University of the Arts",
    role: "IT Product Owner – Office 365",
    period: "2020 - 2021",
    description: [
      "Launched a digital audition solution during COVID-19, ensuring a seamless admission process for 83 students",
      "Optimized the Office 365 environment for 3,500+ users, enhancing collaboration and communication",
      "Developed training programs to improve digital literacy and support the organization's digital transformation strategy"
    ]
  }
];

const educationData = [
  {
    institution: "University of Amsterdam",
    degree: "MSc - Master of Business Administration (Digital Business)",
    period: "2019 - 2020",
    achievements: []
  },
  {
    institution: "Rotterdam University of Applied Sciences",
    degree: "BSc - Business IT & Management",
    period: "2015 - 2019",
    achievements: []
  }
];

const certificationData = [
  {
    name: "Product School - Product Manager Certification (PMC)",
    year: "2025",
    status: "Coming Soon"
  },
  {
    name: "Scaled Agile - Certified SAFe® 6 Product Owner / Product Manager",
    year: "2024",
    status: "Active"
  },
  {
    name: "Scrum.org - Professional Scrum Product Owner I",
    year: "2024",
    status: "Active"
  },
  {
    name: "Product School - AI for Product Certification",
    year: "2025",
    status: "Coming Soon"
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
                  </CardContent>
                </Card>
              ))}
              
              <h3 className="text-xl font-semibold mt-8 mb-4">Certifications</h3>
              <div className="space-y-4">
                {certificationData.map((cert, index) => (
                  <Card key={index}>
                    <CardContent className="p-4 flex justify-between items-center">
                      <div>
                        <p className="font-medium text-gray-700 dark:text-gray-300">{cert.name}</p>
                        <p className="text-sm text-gray-500">{cert.year}</p>
                      </div>
                      {cert.status === "Coming Soon" && (
                        <Badge variant="secondary" className="ml-4">
                          Coming Soon
                        </Badge>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ExperienceSection;
