import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface WorkExperience {
  company: string;
  role: string;
  period: string;
  description: string[];
  logo: string;
}

interface Education {
  institution: string;
  degree: string;
  period: string;
  achievements: string[];
  logo: string;
}

const workExperiences: WorkExperience[] = [
  {
    company: "Chamber of Commerce (Kamer van Koophandel)",
    role: "Business Analyst / Product Owner",
    period: "2022 - Present",
    description: [
      "Led the development of an omnichannel customer service platform, cutting costs by 23% and enhancing efficiency for 300 users. Spearheaded product discovery and requirements gathering, translating business needs into actionable user stories for engineering teams. Drove GDPR compliance initiatives, optimizing high-risk processes to improve security and operational effectiveness."
    ],
    logo: "/lovable-uploads/3e00f252-6802-4585-8f66-3138a6ea59e6.png"
  },
  {
    company: "Amsterdam University of The Arts",
    role: "Associate / Junior Product Manager",
    period: "2021 - 2022",
    description: [
      "Managed the roadmap for the Student Information System (SIS), improving the experience for 3,300+ students and staff while reducing administrative errors. Designed and delivered training programs across six faculties, enhancing system adoption and operational efficiency."
    ],
    logo: "/lovable-uploads/295abdd5-e1e1-40e5-a02a-63ef79951337.png"
  },
  {
    company: "Amsterdam University of The Arts",
    role: "IT Product Owner",
    period: "2020 - 2021",
    description: [
      "Launched a digital audition solution during COVID-19, ensuring a seamless admission process for 83 students. Optimized the Office 365 environment for 3,500+ users, enhancing collaboration and communication. Developed training programs to improve digital literacy and support the organization's digital transformation strategy."
    ],
    logo: "/lovable-uploads/295abdd5-e1e1-40e5-a02a-63ef79951337.png"
  }
];

const educationData: Education[] = [
  {
    institution: "Product School",
    degree: "Artificial Intelligence for Product Certification (AIPC)",
    period: "2025",
    achievements: [],
    logo: "/lovable-uploads/adb4d086-126e-4a27-9dee-fd7cebca2d3f.png"
  },
  {
    institution: "Product School",
    degree: "Product Manager Certification (PMC)",
    period: "2025",
    achievements: [],
    logo: "/lovable-uploads/adb4d086-126e-4a27-9dee-fd7cebca2d3f.png"
  },
  {
    institution: "Scaled Agile",
    degree: "Certified SAFe® 6 Product Owner / Product Manager",
    period: "2024",
    achievements: [],
    logo: "/lovable-uploads/cb3c276a-980f-4de3-92cd-038f6d250e32.png"
  },
  {
    institution: "Scrum.org",
    degree: "Professional Scrum Product Owner I",
    period: "2024",
    achievements: [],
    logo: "/lovable-uploads/59a1b37a-d404-48ea-8b0c-dd49afe4526a.png"
  },
  {
    institution: "University of Amsterdam",
    degree: "MSc - Business Information Systems",
    period: "2024",
    achievements: [],
    logo: "/lovable-uploads/38176ffc-f658-4c93-9401-e9be48daaadf.png"
  },
  {
    institution: "Rotterdam University of Applied Sciences",
    degree: "BSc - Business IT & Management",
    period: "2015 - 2019",
    achievements: [],
    logo: "/lovable-uploads/a5d0a6e2-d70e-40e7-9d03-be8082af708a.png"
  }
];

interface ExperienceCardProps {
  logo: string;
  title: string;
  subtitle: string;
  period: string;
  description?: string[];
}

const ExperienceCard = ({ logo, title, subtitle, period, description }: ExperienceCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  
  const shouldShowDescription = !isMobile || isOpen;
  
  return (
    <Card className="mb-4">
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 md:w-16 md:h-16 rounded-full overflow-hidden bg-white">
              <img 
                src={logo} 
                alt={title}
                className="w-full h-full object-cover p-0"
              />
            </div>
          </div>
          <div className="flex-grow">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base md:text-xl font-semibold line-clamp-1">{title}</h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 line-clamp-1">{subtitle}</p>
                <p className="text-xs md:text-sm text-gray-500">{period}</p>
              </div>
              {isMobile && description && description.length > 0 && (
                <button onClick={() => setIsOpen(!isOpen)} className="ml-2 flex-shrink-0">
                  {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </button>
              )}
            </div>
            
            {shouldShowDescription && description && description.length > 0 && (
              <ul className="list-disc pl-4 space-y-1 mt-2 text-sm md:text-base">
                {description.map((desc, i) => (
                  <li key={i} className="text-gray-700 dark:text-gray-300">{desc}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const ExperienceSection = () => {
  return (
    <section className="py-12 md:py-20 bg-white dark:bg-black">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Experience</h2>
        <Tabs defaultValue="work" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="work">Work</TabsTrigger>
            <TabsTrigger value="education">Education/Certifications</TabsTrigger>
          </TabsList>
          <TabsContent value="work">
            <div>
              {workExperiences.map((exp, index) => (
                <ExperienceCard
                  key={index}
                  logo={exp.logo}
                  title={exp.company}
                  subtitle={exp.role}
                  period={exp.period}
                  description={exp.description}
                />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="education">
            <div>
              {educationData.map((edu, index) => (
                <ExperienceCard
                  key={index}
                  logo={edu.logo}
                  title={edu.institution}
                  subtitle={edu.degree}
                  period={edu.period}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ExperienceSection;
