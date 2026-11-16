
export type ExperienceCategory =
  | "Technical"
  | "Leadership"
  | "Professional";

export type ExperienceItem = {
  id: string;
  role: string;
  organisation: string;
  location: string;
  period: string;
  category: ExperienceCategory;
  description: string;
  highlights: string[];
};

export const experiences: ExperienceItem[] = [
  {
    id: "besant",
    role: "Data Science Intern",
    organisation: "Besant Technologies, Anna Nagar",
    location: "Chennai, India · On-site",
    period: "Jan 2024 – Feb 2025",
    category: "Technical",
    description:
      "Developed foundational data science skills through practical training in Python, data analysis and machine learning.",
    highlights: [
      "Practised Python programming and data analysis.",
      "Explored data preprocessing and exploratory data analysis.",
      "Strengthened machine learning fundamentals and analytical problem-solving.",
    ],
  },
  {
    id: "edunet",
    role: "AI & Cloud Intern",
    organisation: "Edunet Foundation",
    location: "Remote",
    period: "Jul 2024 – Aug 2024",
    category: "Technical",
    description:
      "Participated in an AI and cloud computing internship programme focused on developing practical technical knowledge.",
    highlights: [
      "Explored artificial intelligence and cloud computing concepts.",
      "Gained exposure to cloud-based development workflows.",
      "Completed structured technical learning activities.",
    ],
  },
  {
    id: "cirf",
    role: "Data Science Intern",
    organisation:
      "Computational Intelligence Research Foundation (CIRF)",
    location: "Chennai, India · On-site",
    period: "Apr 2023 – Sep 2023",
    category: "Technical",
    description:
      "Analysed datasets using Python and statistical tools to identify patterns, explore relationships and communicate insights.",
    highlights: [
      "Performed data cleaning, preprocessing and exploratory data analysis.",
      "Used Python, Pandas and NumPy for dataset analysis.",
      "Explored penguin and tipping datasets.",
      "Created statistical visualisations with Matplotlib and Seaborn.",
    ],
  },
  {
    id: "igen",
    role: "Programme Coordinator & Volunteer",
    organisation: "MGR iGEN ENSAV Club",
    location: "Chennai, India",
    period: "Jan 2022 - Apr 2025",
    category: "Leadership",
    description:
      "Contributed to sustainability awareness, student-led initiatives and community engagement through volunteering and programme coordination.",
    highlights: [
      "Supported sustainability awareness initiatives.",
      "Contributed to Energy99, WALK4GREEN and TALK4SDG activities.",
      "Assisted with event coordination and participant engagement.",
      "Supported programme communications and collaborative activities.",
    ],
  },
  
  
  {
    id: "asda",
    role: "Service Colleague",
    organisation: "ASDA",
    location: "Guildford, United Kingdom",
    period: "Nov 2025 – Present",
    category: "Professional",
    description:
      "Supported customer-facing retail operations while developing teamwork, communication and time-management skills.",
    highlights: [
      "Customer assistance and operational support.",
      "Team collaboration in a busy retail environment.",
    ],
  },
  
];
