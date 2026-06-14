import { useQuery } from '@tanstack/react-query';

// Helper to get data from local storage or initialize it
const getStoredData = (key: string, fallback: any) => {
  const data = localStorage.getItem(key);
  if (!data) {
    localStorage.setItem(key, JSON.stringify(fallback));
    return fallback;
  }
  try {
    return JSON.parse(data);
  } catch (e) {
    return fallback;
  }
};

const setStoredData = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data));
};

// INITIAL SEED DATA
const fallbackHero = {
  id: "hero-1",
  name: "HASHIR IQBAL",
  taglines: ["Software Engineer", "Web Developer", "Problem Solver"],
  email: "rhashir54321@gmail.com",
  phone: "+923131585840",
  linkedin_url: "https://linkedin.com",
  cv_url: ""
};

const fallbackAbout = {
  id: "about-1",
  paragraphs: ["Software engineer who turns ideas into clean, working products. I build web apps that are simple on the surface and solid underneath. I write code like I mean it."]
};

const fallbackSkills = [
  { id: "sk-1", category: "Web Development", skill_names: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "MySQL"], sort_order: 0 },
  { id: "sk-2", category: "Cybersecurity", skill_names: ["Nmap", "Wireshark", "Linux (Ubuntu/Kali)", "SIEM Tools"], sort_order: 1 },
  { id: "sk-3", category: "Programming", skill_names: ["Python", "C++", "Dart", "Flutter"], sort_order: 2 }
];

const fallbackExperiences = [
  { id: "exp-0", role: "Software Developer", company: "TechnoLean Lab", period: "APR 2026 – PRESENT", icon_name: "Terminal", sort_order: 0 },
  { id: "exp-1", role: "Flutter App Development Intern", company: "Innova Workmen", period: "JUL 2024 – SEP 2024", icon_name: "Terminal", sort_order: 1 },
  { id: "exp-2", role: "Front End Web Development Intern", company: "Brain Ex World", period: "AUG 2023 – OCT 2023", icon_name: "Briefcase", sort_order: 2 },
  { id: "exp-3", role: "WordPress Developer", company: "Freelance", period: "2022 – 2023", icon_name: "Globe", sort_order: 3 }
];

const fallbackProjects = [
  {
    id: "proj-0",
    title: "TechnoLean Lab Website",
    description: "Designed, developed, and deployed the official TechnoLean Lab website end-to-end. Built using high-performance components, modern SEO practices, and custom animations.",
    tags: ["Full-Stack", "React", "Tailwind CSS", "SEO"],
    badge: "End-to-End",
    link: "https://technoleanlab.com",
    imageType: "technolean",
    sort_order: 0
  },
  {
    id: "proj-1",
    title: "LitUp Solar",
    description: "An intelligent solar energy tracking and optimization solution.",
    tags: ["React", "IoT", "Sustainability"],
    badge: null,
    link: "https://litup-solar.vercel.app/",
    imageType: "solar",
    sort_order: 1
  },
  {
    id: "proj-2",
    title: "Gakhar Plaza Management",
    description: "An enterprise-grade property and tenant management system.",
    tags: ["Web App", "MySQL", "CRUD"],
    badge: null,
    link: null,
    imageType: "architecture",
    sort_order: 2
  },
  {
    id: "proj-3",
    title: "MEDICARE++",
    description: "A final year project providing intelligent healthcare diagnostics.",
    tags: ["React", "AI/ML", "Healthcare"],
    badge: "FYP",
    link: "https://medicareplus.app",
    imageType: "medical",
    sort_order: 3
  }
];

const fallbackEducation = [
  { id: "edu-1", title: "Pak-Austria Fachhochschule", subtitle: "BS Computer Science", detail: "EXPECTED 2026", icon_name: "GraduationCap", sort_order: 0 },
  { id: "edu-2", title: "Google / Coursera", subtitle: "Google Cybersecurity Professional Certificate", detail: "CERTIFIED", icon_name: "Award", sort_order: 1 },
  { id: "edu-3", title: "Google Developer Groups", subtitle: "GDG On Campus Core Team", detail: "ACTIVE MEMBER", icon_name: "Users", sort_order: 2 }
];

const fallbackContact = {
  id: "contact-1",
  email: "rhashir54321@gmail.com",
  phone: "+923131585840",
  location: "Haripur, Pakistan"
};

// REACT QUERY HOOKS
export const useHeroContent = () =>
  useQuery({
    queryKey: ['hero_content'],
    queryFn: () => getStoredData('hero_content', fallbackHero)
  });

export const useAboutContent = () =>
  useQuery({
    queryKey: ['about_content'],
    queryFn: () => getStoredData('about_content', fallbackAbout)
  });

export const useSkills = () =>
  useQuery({
    queryKey: ['skills'],
    queryFn: () => getStoredData('skills', fallbackSkills).sort((a: any, b: any) => a.sort_order - b.sort_order)
  });

export const useExperiences = () =>
  useQuery({
    queryKey: ['experiences'],
    queryFn: () => getStoredData('experiences', fallbackExperiences).sort((a: any, b: any) => a.sort_order - b.sort_order)
  });

export const useProjects = () =>
  useQuery({
    queryKey: ['projects'],
    queryFn: () => getStoredData('projects', fallbackProjects).sort((a: any, b: any) => a.sort_order - b.sort_order)
  });

export const useEducation = () =>
  useQuery({
    queryKey: ['education'],
    queryFn: () => getStoredData('education', fallbackEducation).sort((a: any, b: any) => a.sort_order - b.sort_order)
  });

export const useContactInfo = () =>
  useQuery({
    queryKey: ['contact_info'],
    queryFn: () => getStoredData('contact_info', fallbackContact)
  });

// DIRECT STORAGE UPDATE API FOR ADMIN PORTAL (REAL-TIME EDITING)
export const updateLocalHero = (data: any) => {
  setStoredData('hero_content', { ...fallbackHero, ...data, id: "hero-1" });
};

export const updateLocalAbout = (paragraphs: string[]) => {
  setStoredData('about_content', { id: "about-1", paragraphs });
};

export const updateLocalSkills = (items: any[]) => {
  setStoredData('skills', items);
};

export const updateLocalExperiences = (items: any[]) => {
  setStoredData('experiences', items);
};

export const updateLocalProjects = (items: any[]) => {
  setStoredData('projects', items);
};

export const updateLocalEducation = (items: any[]) => {
  setStoredData('education', items);
};

export const updateLocalContact = (data: any) => {
  setStoredData('contact_info', { ...fallbackContact, ...data, id: "contact-1" });
};
