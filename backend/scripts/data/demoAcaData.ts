const programData: Record<
  string,
  {
    description: string;
    duration: string;
    credits: number;
    careers: string[];
    courses: { name: string; year: number }[];
    faculty: { name: string; role: string; image: string }[];
    statistics: {
      placementRate: number;
      averageSalary: string;
      internshipPartners: number;
      researchPublications: number;
    };
  }
> = {
  "B.Tech Computer Science and Engineering": {
    description:
      "Our B.Tech in Computer Science and Engineering program is designed to provide students with a strong foundation in computer science theory and practice. Students will learn cutting-edge technologies and software development practices, preparing them for successful careers in the tech industry.",
    duration: "4 years",
    credits: 160,
    careers: [
      "Software Engineer",
      "Data Scientist",
      "AI/ML Engineer",
      "Cloud Architect",
      "Cybersecurity Specialist",
    ],
    courses: [
      { name: "Data Structures and Algorithms", year: 1 },
      { name: "Object-Oriented Programming", year: 1 },
      { name: "Database Management Systems", year: 2 },
      { name: "Computer Networks", year: 2 },
      { name: "Artificial Intelligence", year: 3 },
      { name: "Machine Learning", year: 3 },
      { name: "Cloud Computing", year: 4 },
      { name: "Blockchain Technology", year: 4 },
    ],
    faculty: [
      { name: "Dr. Sarah Johnson", role: "Professor", image: "" },
      { name: "Dr. Michael Chen", role: "Associate Professor", image: "" },
      { name: "Dr. Emily Rodriguez", role: "Assistant Professor", image: "" },
    ],
    statistics: {
      placementRate: 95,
      averageSalary: "₹12.5 LPA",
      internshipPartners: 50,
      researchPublications: 75,
    },
  },
  "B.Tech Information Technology": {
    description:
      "The B.Tech in Information Technology program focuses on software development, networking, and data management, preparing students for careers in IT and related fields.",
    duration: "4 years",
    credits: 160,
    careers: [
      "Software Developer",
      "Network Engineer",
      "Database Administrator",
    ],
    courses: [
      { name: "Web Technologies", year: 1 },
      { name: "Computer Networks", year: 2 },
      { name: "Cybersecurity Fundamentals", year: 3 },
      { name: "Cloud Computing", year: 4 },
    ],
    faculty: [
      { name: "Dr. John Doe", role: "Professor", image: "" },
      { name: "Dr. Michael Chen", role: "Associate Professor", image: "" },
      { name: "Dr. Emily Rodriguez", role: "Assistant Professor", image: "" },
    ],
    statistics: {
      placementRate: 90,
      averageSalary: "₹10 LPA",
      internshipPartners: 40,
      researchPublications: 60,
    },
  },
  "B.Tech Electronics and Communication": {
    description:
      "This program blends electronics, communication technologies, and embedded systems to equip students for careers in telecommunications and IoT.",
    duration: "4 years",
    credits: 160,
    careers: ["Embedded Systems Engineer", "VLSI Designer", "Telecom Engineer"],
    courses: [
      { name: "Digital Electronics", year: 1 },
      { name: "Microprocessors & Microcontrollers", year: 2 },
      { name: "Wireless Communication", year: 3 },
      { name: "VLSI Design", year: 4 },
    ],
    faculty: [
      { name: "Dr. Alice Brown", role: "Professor", image: "" },
      { name: "Dr. Michael Chen", role: "Associate Professor", image: "" },
      { name: "Dr. Emily Rodriguez", role: "Assistant Professor", image: "" },
    ],
    statistics: {
      placementRate: 85,
      averageSalary: "₹9 LPA",
      internshipPartners: 35,
      researchPublications: 50,
    },
  },
  "Bachelor of Commerce": {
    description:
      "The Bachelor of Commerce program provides a deep understanding of finance, accounting, and business management, ideal for careers in banking and corporate finance.",
    duration: "3 years",
    credits: 120,
    careers: ["Accountant", "Financial Analyst", "Bank Manager"],
    courses: [
      { name: "Financial Accounting", year: 1 },
      { name: "Business Law", year: 2 },
      { name: "Investment Analysis", year: 3 },
    ],
    faculty: [{ name: "Dr. Robert Smith", role: "Professor", image: "" }],
    statistics: {
      placementRate: 88,
      averageSalary: "₹6 LPA",
      internshipPartners: 30,
      researchPublications: 40,
    },
  },
  "Bachelor of Business Administration": {
    description:
      "A comprehensive BBA program focusing on leadership, marketing, and entrepreneurship for students aiming to excel in the corporate world.",
    duration: "3 years",
    credits: 120,
    careers: ["Marketing Manager", "Business Consultant", "HR Manager"],
    courses: [
      { name: "Principles of Management", year: 1 },
      { name: "Marketing Strategy", year: 2 },
      { name: "Corporate Finance", year: 3 },
    ],
    faculty: [
      { name: "Dr. Jane White", role: "Professor", image: "" },
      { name: "Dr. Michael Chen", role: "Associate Professor", image: "" },
    ],
    statistics: {
      placementRate: 92,
      averageSalary: "₹7 LPA",
      internshipPartners: 45,
      researchPublications: 55,
    },
  },
  "B.Tech Artificial Intelligence and Data Science": {
    description:
      "This program focuses on AI, machine learning, and big data analytics to prepare students for the rapidly evolving tech landscape.",
    duration: "4 years",
    credits: 160,
    careers: ["AI Engineer", "Data Scientist", "Deep Learning Specialist"],
    courses: [
      { name: "Neural Networks", year: 2 },
      { name: "Big Data Analytics", year: 3 },
      { name: "Reinforcement Learning", year: 4 },
    ],
    faculty: [
      { name: "Dr. Kevin Brown", role: "Professor", image: "" },
      { name: "Dr. Michael Chen", role: "Associate Professor", image: "" },
      { name: "Dr. Emily Rodriguez", role: "Assistant Professor", image: "" },
    ],
    statistics: {
      placementRate: 93,
      averageSalary: "₹13 LPA",
      internshipPartners: 55,
      researchPublications: 80,
    },
  },
  "B.Tech Mechanical Engineering": {
    description:
      "A strong foundation in mechanical engineering principles, covering thermodynamics, robotics, and industrial automation.",
    duration: "4 years",
    credits: 160,
    careers: [
      "Mechanical Engineer",
      "Automobile Engineer",
      "Robotics Engineer",
    ],
    courses: [
      { name: "Thermodynamics", year: 1 },
      { name: "Fluid Mechanics", year: 2 },
      { name: "Robotics and Automation", year: 3 },
    ],
    faculty: [{ name: "Dr. Richard Green", role: "Professor", image: "" }],
    statistics: {
      placementRate: 80,
      averageSalary: "₹8 LPA",
      internshipPartners: 25,
      researchPublications: 35,
    },
  },
  "B.Tech AI and Machine Learning": {
    description:
      "An advanced curriculum in artificial intelligence and machine learning, with emphasis on deep learning and NLP.",
    duration: "4 years",
    credits: 160,
    careers: ["ML Engineer", "AI Researcher", "Data Analyst"],
    courses: [
      { name: "Deep Learning", year: 3 },
      { name: "Natural Language Processing", year: 4 },
      { name: "AI Ethics and Policies", year: 4 },
    ],
    faculty: [{ name: "Dr. Sophia Miller", role: "Professor", image: "" }],
    statistics: {
      placementRate: 94,
      averageSalary: "₹14 LPA",
      internshipPartners: 60,
      researchPublications: 90,
    },
  },
};

export default programData;
