import type { LucideIcon } from "lucide-react";

export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  applications: string[];
  image?: string;
  icon: LucideIcon;
}

export interface Benefit {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Solution {
  title: string;
  description: string;
  items: string[];
  image?: string;
  icon: LucideIcon;
}

export interface ExperienceArea {
  title: string;
  description: string;
  items: string[];
  icon: LucideIcon;
  image: string;
  imageAlt: string;
}

export interface TrustIndicator {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface GlobalReachLevel {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface QuoteFormData {
  fullName: string;
  company: string;
  phone: string;
  email: string;
  country: string;
  province: string;
  city: string;
  projectType: string;
  message: string;
  hasStarlink: string;
  hasEquipment: string;
}

export type QuoteFormErrors = Partial<Record<keyof QuoteFormData, string>>;

