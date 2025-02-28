
export interface Media {
  type: 'image' | 'video';
  url: string;
  alt: string;
}

export interface Update {
  id: string;
  content: string;
  date: string; // ISO string format
  time: string;
  media?: Media[];
  likes?: number;
  comments?: number;
  shares?: number;
}

export const updates: Update[] = [
    {
    id: '1',
    content: "Just completed the AIPC course of Product School! It was great discussing strategy, implementation, scaling and how to built and train AI models.  #AI #ProductManagement #TrainingAndCertifications",
    date: '2025-02-28T10:30:00',
    time: '22:30',
    media: [
      {
        type: 'image',
        url: 'https://images.ctfassets.net/6nwv0fapso8r/4U97Y0E3Fa0OSwFDn62riF/a746dcb3afadec7c6576212431726f58/AIPC.jpg',
        alt: 'AI for Product Certification'
      }
    ],
    likes: 0,
    comments: 7,
    shares: 3
  },
    {
    id: '1',
    content: "Just completed the first prototype of my new AI-powered portfolio chatbot! It's amazing how it can answer questions about my experience and skills. #AI #ProductManagement",
    date: '2024-06-15T10:30:00',
    time: '10:30 AM',
    media: [
      {
        type: 'image',
        url: 'https://i.postimg.cc/NMYnWF5g/image.png',
        alt: 'AI Chatbot Interface'
      }
    ],
    likes: 0,
    comments: 7,
    shares: 3
  },
    {
    id: '1',
    content: "Just completed the first prototype of my new AI-powered portfolio chatbot! It's amazing how it can answer questions about my experience and skills. #AI #ProductManagement",
    date: '2024-06-15T10:30:00',
    time: '10:30 AM',
    media: [
      {
        type: 'image',
        url: 'https://i.postimg.cc/NMYnWF5g/image.png',
        alt: 'AI Chatbot Interface'
      }
    ],
    likes: 0,
    comments: 7,
    shares: 3
  },
    {
    id: '1',
    content: "Just completed the first prototype of my new AI-powered portfolio chatbot! It's amazing how it can answer questions about my experience and skills. #AI #ProductManagement",
    date: '2024-06-15T10:30:00',
    time: '10:30 AM',
    media: [
      {
        type: 'image',
        url: 'https://i.postimg.cc/NMYnWF5g/image.png',
        alt: 'AI Chatbot Interface'
      }
    ],
    likes: 0,
    comments: 7,
    shares: 3
  },
   {
    id: '1',
    content: "Just completed the first prototype of my new AI-powered portfolio chatbot! It's amazing how it can answer questions about my experience and skills. #AI #ProductManagement",
    date: '2024-06-15T10:30:00',
    time: '10:30 AM',
    media: [
      {
        type: 'image',
        url: 'https://i.postimg.cc/NMYnWF5g/image.png',
        alt: 'AI Chatbot Interface'
      }
    ],
    likes: 0,
    comments: 7,
    shares: 3
  }, 
  {
    id: '1',
    content: "Just completed the first prototype of my new AI-powered portfolio chatbot! It's amazing how it can answer questions about my experience and skills. #AI #ProductManagement",
    date: '2024-06-15T10:30:00',
    time: '10:30 AM',
    media: [
      {
        type: 'image',
        url: 'https://i.postimg.cc/NMYnWF5g/image.png',
        alt: 'AI Chatbot Interface'
      }
    ],
    likes: 0,
    comments: 7,
    shares: 3
  },
  {
    id: '2',
    content: "Excited to present my insights on Product-Led Growth strategies at next week's Product Management summit! Will be sharing case studies and tactical approaches. #ProductManagement #Growth",
    date: '2024-06-10T15:45:00',
    time: '3:45 PM',
    likes: 0,
    comments: 12,
    shares: 5
  },
  {
    id: '3',
    content: "Just wrapped up a fascinating workshop on integrating AI into product development workflows. The potential for innovation is incredible! Here are some snapshots from the event. #AI #Innovation #ProductDevelopment",
    date: '2024-06-05T13:20:00',
    time: '1:20 PM',
    media: [
      {
        type: 'image',
        url: 'https://i.postimg.cc/d050bmpt/undraw-trendy-interface-bm65.png',
        alt: 'AI Workshop'
      },
      {
        type: 'image',
        url: 'https://i.postimg.cc/cCn48qHr/undraw-visionary-technology-6ouq.png',
        alt: 'AI Technology Session'
      },
      {
        type: 'image',
        url: 'https://i.postimg.cc/m29SNV69/undraw-innovative-9l1b.png',
        alt: 'Innovation Brainstorming'
      }
    ],
    likes: 0,
    comments: 15,
    shares: 9
  },
  {
    id: '4',
    content: "Finished analyzing the quarterly user research data for our flagship product. The insights we gained will drive our roadmap for the next two quarters. Customer feedback is gold! #UserResearch #ProductStrategy",
    date: '2024-06-01T09:15:00',
    time: '9:15 AM',
    likes: 0,
    comments: 8,
    shares: 4
  }
];
