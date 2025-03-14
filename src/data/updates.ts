
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
    id: '-3',
    content: "Started sharing my thoughts and experiences on Medium. Go take a look at: https://medium.com/@randybouterse Be sure to leave a comment, I'd like to get to know what you think!",
    date: '2025-03-11T13:34:00',
    time: '13:34',
    media: [
      {
        type: 'image',
        url: 'https://i.ibb.co/PvMpG96y/image.png',
        alt: 'The Rise of AI Product Tools Medium Article'
      }
    ],
    likes: 0,
    comments: 0,
    shares: 0
  },
  {
    id: '-2',
    content: "I've been selected to join the AI Community Learning Program from Microsoft. I'll be learning, building and discussing new AI use cases with others.",
    date: '2025-03-07T12:53:00',
    time: '12:53',
    media: [
      {
        type: 'image',
        url: 'https://media.licdn.com/dms/image/v2/D4E22AQH0JtR-YiDvKw/feedshare-shrink_800/B4EZVxXcpHGYAk-/0/1741363727544?e=1744243200&v=beta&t=PXZITy5v5YXG4fDbQe5D3um2apX18yc0NeVJwYDTbEM',
        alt: 'Microsoft AI Community Learning Program'
      }
    ],
    likes: 0,
    comments: 0,
    shares: 0
  },
  {
    id: '-1',
    content: "Great news! I've been selected for the Perplexity 2025 Business Fellowship program, an incredible opportunity to further develop my skills in AI and connect with industry innovators! #AI #BusinessFellowship #CareerGrowth",
    date: '2025-03-04T20:54:00',
    time: '20:54',
    media: [
      {
        type: 'image',
        url: 'https://i.ibb.co/6R6TtNgB/Perplexity-Business-Fellowship-Social-Asset.png',
        alt: 'Perplexity Business Fellowship'
      }
    ],
    likes: 0,
    comments: 0,
    shares: 0
  },
  {
    id: '0',
    content: "Optimized the mobile experience of this site. @Portfolio #AIDevelopment",
    date: '2025-03-03T22:36:00',
    time: '22:36',
    media: [
      {
        type: 'image',
        url: 'https://i.ibb.co/s9NgzmgR/thumbnail-IMG-0858.png',
        alt: 'Portfolio mobile light mode'
      },
      {
        type: 'image',
        url: 'https://i.ibb.co/LdRhS2v5/thumbnail-IMG-0857.png',
        alt: 'Portfolio mobile dark mode'
      }
    ],
    likes: 0,
    comments: 2,
    shares: 0
  },
    {
    id: '1',
    content: "Just got my AIPC certificate from Product School! It was great discussing strategy, implementation, scaling and how to built and train AI models. And a shoutout to Yana Yushkina as the instructor!  #AI #ProductManagement #TrainingAndCertifications",
    date: '2025-03-02T10:30:00',
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
    id: '2',
    content: "I've updated my portfolio site and went from Notion to this site built with Lovable.dev. 9/10 experience! I definitely would recommend it. #Portfolio #AIDevelopment",
    date: '2024-02-23T10:30:00',
    time: '13:30',
    media: [
      {
        type: 'image',
        url: 'https://i.ibb.co/21zbMTcH/image.png',
        alt: 'Notion Portfolio'
      },
      {
        type: 'image',
        url: 'https://i.postimg.cc/65Rm5Cn9/image.png',
        alt: 'Lovebable.dev Portfolio'
      }
    ],
    likes: 0,
    comments: 7,
    shares: 3
  },
    {
    id: '3',
    content: "Just completed the prototype of my new AI-powered portfolio chatbot! It's amazing how it can answer questions about my experience and skills. #AI #ProductManagement",
    date: '2025-02-26T10:30:00',
    time: '09:43',
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
    id: '4',
    content: "Visited ProductCon in London. Augmenting Your Product's Value Proposition with AI by Debbie McMahon, CPO at Financial Times. The Future of Product in 2025 by Carlos González De Villaumbrosia, Founder & CEO at Product School. Product Localization Playbooks for International Expansion by Vinay Ramani, CPO at Tide (Ex-Meta, Google, Uber). Product & Culture Integration After M&A by Pénélope Carlier, VP of Product at TIER Dott. Dismantling SAFe, Safely: Breaking Bureaucracy to Unlock True Agility by Simone Paul Tamussin, CPO at Mastercard Gateway. Scaling & Monetizing Marketplaces by Carlos González De Villaumbrosia & Tanya Cordrey, CPO at Motorway. Practical AI Use Cases for Product Leaders to 10x Impact Today by Dave Killeen, VP of Product at Pendo. Don't Leave Money on the Table: Optimizing Payments to Reduce Churn by Chetan Pandya, SVP of Product at DAZN. #ProductManagement #Conference #Community",
    date: '2025-02-19T10:30:00',
    time: '10:30 AM',
    media: [
      {
        type: 'image',
        url: 'https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5ed2d015-9520-4de5-89c7-23905f164541_1600x1066.jpeg',
        alt: 'ProductCon1'
      },
      {
        type: 'image',
        url: 'https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F846c99ee-2fb9-4ab7-947f-3605d8a4ba10_1600x1066.jpeg',
        alt: 'ProductCon2'
      },
      {
        type: 'image',
        url: 'https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F339bfed3-6c82-4b35-aeb3-264ce1e14ad4_1600x1066.jpeg',
        alt: 'ProductCon3'
      }
    ],
    likes: 0,
    comments: 7,
    shares: 3
  },
   {
    id: '5',
    content: "Just finished the PMC course of Product School! It was great to meet talented professionals from around the globe who shared their unique perspectives and experiences. I enjoyed discussing these topics while learning from peers and an experienced instructor like Dorra Mhlouhi!  #ProductManagement #TrainingAndCertifications",
    date: '2025-01-17T10:30:00',
    time: '00:30',
    media: [
      {
        type: 'image',
        url: 'https://media.licdn.com/dms/image/v2/D4E22AQH2Qof2vy_ipQ/feedshare-shrink_2048_1536/B4EZSC7cXlHMAo-/0/1737363409454?e=1743638400&v=beta&t=R3AgIHEcZHXgz4G6brF8EpMImPC_dzW8SiHsYo3SJ48',
        alt: 'PMC certification'
      }
    ],
    likes: 0,
    comments: 7,
    shares: 3
  }, 
  {
    id: '6',
    content: "Just passed the Certified SAFe® 6 Product Owner/ Product Manager exam! Guess who is a certified SAFe PO/PM now. #ProductManagement #TrainingAndCertifications",
    date: '2024-10-13T10:30:00',
    time: '18:30',
    media: [
      {
        type: 'image',
        url: 'https://images.credly.com/images/25ee206c-c26d-4a1c-b101-e8bbe6a143ff/twitter_thumb_201604_image.png',
        alt: 'Safe PO/PM'
      }
    ],
    likes: 0,
    comments: 7,
    shares: 3
  },
  {
    id: '7',
    content: "I just got certified as a Professional Scrum Product Owner (PSPO I)!",
    date: '2024-06-10T15:45:00',
    time: '3:45 PM',
    media: [
      {
        type: 'image',
        url: 'https://xebia.com/academy/wp-content/uploads/sites/4/2023/07/pspo-I-certificate.png',
        alt: 'PSPO Certification'
      }
    ],
    likes: 0,
    comments: 12,
    shares: 5
  },
];
