import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Circle, Sun, Moon, ArrowLeft } from "lucide-react";
import { useTheme } from "next-themes";
import { useNavigate, useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { id } = useParams();
  console.log("Project ID from URL:", id);

  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();

  const projects = {
    "portfolio-website": {
      title: "Rebuilding my portfolio with AI: A case study in efficiency and modern web development",
      description: "This project involved rebuilding my personal portfolio website to showcase my skills in AI product development and modern web technologies. Leveraging an AI-powered development tool (Lovable), I managed the entire development process, from initial research and outlining to testing, refinement, and deployment. The result is a responsive, visually appealing website built with React, TypeScript, and Tailwind CSS that effectively communicates my experience and achievements.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Shadcn UI", "Lovable"],
      details: [
        "Problem Statement/Challenge:",
        "My previous online presence lacked a modern design and a clear focus on my experience with AI-driven products. I needed a portfolio that could dynamically showcase my skills, projects, and career trajectory in a compelling and easily navigable format.",
        
        "Approach & Solution:",
        "Research & Planning: I began by researching portfolio best practices, analyzing successful examples in the tech industry, and identifying the key information to include (project details, skills, experience). This research informed the detailed outline I created to guide the AI development agent.",
        
        "AI-Driven Development with Lovable: I utilized Lovable, an AI-powered development tool, to generate the website's initial structure and components based on my outline. This involved iterative prompt engineering, carefully testing each feature and button for functionality and responsiveness.",
        
        "Code Refinement & Customization: While Lovable handled much of the initial development, I leveraged my TypeScript, React, and Tailwind CSS skills to fine-tune the code, customize the design, and ensure optimal performance. This included [mention specific examples, e.g., optimizing image loading, improving mobile responsiveness on specific devices, implementing a custom animation].",
        
        "Version Control & Deployment: I used GitHub for version control throughout the project, ensuring a safe and collaborative development environment. The final website was deployed to [Hosting provider], making it publicly accessible.",
        
        "Key Results & Impact:",
        "The AI-assisted development process reduced development time by approximately 80%, allowing me to focus on refining the user experience and content. This is all because my experience in development is just good enough to discuss certain elements and bugs, but I'd need to invest a lot of time into learning.",
        "The new portfolio effectively showcases my experience with AI products.",
        
        "Lessons Learned:",
        "This project provided valuable insights into the capabilities and limitations of AI-powered development tools. While AI significantly accelerated the initial development process, human expertise remained crucial for refining the code, ensuring design consistency, and optimizing the user experience. In future AI-assisted projects, I would focus on a better initial prompt to start with, being more descriptive in the prompt and be clear about what elements can be left out.",
        
        "Technologies Used: React, TypeScript, Tailwind CSS, Shadcn UI, Lovable (AI-powered development tool), GitHub"
      ],
      images: [
        "https://i.postimg.cc/d050bmpt/undraw-trendy-interface-bm65.png",
        "https://i.postimg.cc/65Rm5Cn9/image.png"
      ]
    },
    "aime-bot": {
      title: "Building AIR (AI Randy): An interactive agent for professional portfolio engagement",
      description: "I developed AIR, an AI-powered agent that simulates conversations with hiring managers, enabling dynamic exploration of my career journey. By leveraging ChatGPT, Claude, and Gemini's unique capabilities, I created an interactive experience that answers technical questions about projects while demonstrating my expertise in AI product creation and integration.",
      tech: ["OpenAI", "React", "Node.js", "TypeScript"],
      details: [
        "Problem Statement: ",
        "My static portfolio lacked engagement metrics and couldn't demonstrate my AI implementation skills in real-time. I needed a solution that would: Showcase my AI integration capabilities, provide 24/7 interactive career Q&A, collect actionable user interaction data",
      
        "Approach & Solution: ",
        "Developed an interactive agent for portfolio exploration. Automated answers to common career-related questions to simulate professional interactions for a dynamic user experience.",
        "I have used Voiceflow for an easy setup and implementation and added some of my documents (made sure to delete unnecessary PII) for setting up a RAG chatbot.",
        
        "Testing & Refinement: ",
        "Tested the agent by asking career related questions, personal questions, unrelated questions and various other questions. I refined the prompt and made a few iterations before the results were satisfactory.",

        "Key Results: ",
        "Launched a functional AI agent to enhance user interaction on my portfolio site. Gathered valuable feedback for continuous improvements.",
        "There aren't a lot of measurable results yet. The agent does get a lot of questions from users.",
        "I also get a lot of questions by others to help them build their agent and it came up in conversations as something people saw as very interesting.",

        "Insights: It was a fun experience playing with this technology to build something for myself. It helped me understand which levers to adjust to get to the results I wanted. For a next iteration, I will build an agent either from scratch or with a less 'no-code' approach",
        "Technologies Used: OpenAI (ChatGPT), Anthropic (Claude), Google (Gemini), Lovable.dev (Portfolio website), analytics for tracking user interactions."
      ],
      images: [
        "https://i.postimg.cc/cCn48qHr/undraw-visionary-technology-6ouq.png",
        "https://i.postimg.cc/rFD7RC5s/A7-B6617-E-93-E0-46-E5-BDBD-19-DE5-B03-B9-E4.png"
      ]
    },
    "customer-service-platform": {
      title: "Customer Service Platform",
      description: "Implemented an omnichannel platform reducing costs and improving efficiency",
      tech: ["Sprinklr", "MS Teams", "Sharepoint"],
      details: [
        "During the pandemic, I led the implementation of a new customer service platform to improve efficiency and reduce costs while maintaining high service quality.",
        "Objectives: Streamline customer service operations. Reduce operational costs. Improve service quality and response times.",
        "Approach: Selected and implemented Sprinklr as our omnichannel platform. Integrated with existing systems and trained staff on new processes.",
        "Key Results: Successfully reduced operational costs while improving customer satisfaction scores. Streamlined workflow processes and enhanced team collaboration.",
        "Technologies Used: Sprinklr, Microsoft Teams, SharePoint, Power Automate"
      ],
      images: [
        "https://i.postimg.cc/rFYNk307/undraw-calling-ieh0.png",
        "https://prod2-sprcdn-assets.sprinklr.com/50400/67e03d55-c284-4302-8235-14a3766c0ac0-137156522/Screenshot_2023-04-13_at_3.29..png"
      ]
    },
    "student-information-system": {
      title: "Student Information System",
      description: "Implemented a new SIS system and led adoption for 3300+ users",
      tech: ["Educator", "CSS", "HTML", "Kaltura", "MS Teams"],
      details: [
        "Led the implementation and adoption of a new Student Information System to enhance educational operations and user experience.",
        "Objectives: Streamline student data management. Improve accessibility for staff and students. Enhance reporting capabilities.",
        "Approach: Selected and customized the Educator platform. Developed comprehensive training materials and conducted workshops. Managed data migration and system integration.",
        "Key Results: Successfully onboarded 3,300+ users. Improved data accuracy and reporting efficiency. Enhanced student and staff experience.",
        "Technologies Used: Educator SIS, Kaltura, Microsoft Teams, SharePoint"
      ],
      images: [
        "https://i.postimg.cc/76b3CN2f/undraw-online-collaboration-xon8.png",
        "https://www.educator.eu/wp-content/uploads/Educator_imac_macbook_ipad-1024x683.png"
      ]
    },
    "digital-audition-solution": {
      title: "Digital Audition Solution",
      description: "Built a remote audition solution during COVID-19",
      tech: ["SharePoint", "Typeform", "Power Automate"],
      details: [
        "In response to COVID-19 restrictions, developed a digital solution for conducting remote auditions to ensure program continuity.",
        "Objectives: Create a seamless remote audition process. Maintain high-quality assessment standards. Ensure accessible and user-friendly experience.",
        "Approach: Implemented SharePoint and Typeform integration. Automated workflow processes with Power Automate. Created comprehensive user guides.",
        "Key Results: Successfully transitioned to fully remote auditions. Maintained program quality and participation rates. Improved administrative efficiency.",
        "Technologies Used: SharePoint, Typeform, Microsoft Power Automate, Microsoft Teams"
      ],
      images: [
        "https://i.postimg.cc/m29SNV69/undraw-innovative-9l1b.png",
        "https://cdn.prod.website-files.com/60d07e744f068218f38db4c0/64a6bb36c7c50d4bdb67b172_62dea8562baf3e36c83125d2_Power%2520Automate.jpeg"
      ]
    },
    "office-365-implementation": {
      title: "Office 365 Implementation",
      description: "Led the implementation of O365 across all faculties for 3,500+ users",
      tech: ["O365", "Kaltura", "MS Teams"],
      details: [
        "Spearheaded the organization-wide implementation of Office 365 to modernize workplace collaboration and productivity tools.",
        "Objectives: Modernize workplace tools. Improve collaboration capabilities. Enhance data security and accessibility.",
        "Approach: Planned phased rollout across faculties. Developed comprehensive training programs. Managed change communication and user adoption.",
        "Key Results: Successfully migrated 3,500+ users to O365. Improved collaboration and productivity. Enhanced security and compliance measures.",
        "Technologies Used: Microsoft Office 365, Microsoft Teams, SharePoint, Kaltura"
      ],
      images: [
        "https://i.postimg.cc/NML0B2v8/undraw-group-hangout-o22u.png",
        "https://teknertia.com/wp-content/uploads/2023/05/What-is-Microsoft-365-scaled.jpg"
      ]
    }
  };

  // Check if the id is valid and exists in the projects object
  if (!id || !projects[id as keyof typeof projects]) {
    return (
      <div className="min-h-screen bg-white dark:bg-black text-foreground flex items-center justify-center">
        <h1 className="text-4xl font-bold">Project not found</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">
          The project you are looking for could not be found. Please check the URL and try again.
        </p>
      </div>
    );
  }

  const project = projects[id as keyof typeof projects];

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
            <a href="/about" className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300">About</a>
            <a href="/portfolio" className="text-sm font-medium border-b-2 border-primary">Portfolio</a>
            <a href="/latest-updates" className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300">Latest Updates</a>
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
          <Button 
            variant="ghost" 
            className="mb-8 gap-2"
            onClick={() => navigate('/portfolio')}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Button>

          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((tech, index) => (
              <Badge key={index} variant="secondary">{tech}</Badge>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-8 mb-12">
            {project.images.map((image, index) => (
              <img 
                key={index}
                src={image}
                alt={`${project.title} screenshot ${index + 1}`}
                className="rounded-lg w-full"
              />
            ))}
          </div>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Project Details</h2>
              <div className="space-y-4">
                {project.details.map((detail, index) => (
                  <p key={index} className="text-gray-600 dark:text-gray-400">
                    {detail}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
