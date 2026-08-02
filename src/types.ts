export type DepartmentId = 'web-dev' | 'digital-marketing' | 'email-marketing';

export interface Department {
  id: DepartmentId;
  name: string;
  shortDesc: string;
  iconName: string; // Lucide icon name to be resolved dynamically
  accentColor: string; // Tailwind class like text-gold-300 or borders
}

export interface ServiceItem {
  id: string;
  departmentId: DepartmentId;
  title: string;
  description: string;
  iconName: string;
  details: string[]; // For the "Read More" modal/expanded detail view
}

export interface ProjectItem {
  id: string;
  departmentId: DepartmentId;
  title: string;
  category: string;
  description: string;
  image: string;
  linkText: string;
  stats?: { label: string; value: string }[];
  challenge?: string;
  strategy?: string;
  outcomes?: string[];
}

export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  clientRole: string;
  company: string;
  departmentId: DepartmentId;
  quote: string;
  metric?: { value: string; label: string };
  rating: number;
  avatarUrl?: string;
  projectTitle?: string;
}

export interface SDPGuideItem {
  id: string;
  type: 'dead' | 'works';
  title: string;
  subtitle?: string;
  description: string;
  iconName: string;
  replacement?: string; // What replaces the dead tactic
}

export interface ProcessStep {
  step: string; // e.g. "01"
  title: string;
  description: string;
  duration: string; // e.g. "Week 1" or "Days 1-5"
}

export interface ContactFormData {
  name: string;
  email: string;
  department: DepartmentId | 'other';
  message: string;
  serviceInterest: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatarUrl: string;
  specialization: string;
  socials?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    email?: string;
  };
}
