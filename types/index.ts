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

export interface QuoteFormData {
  fullName: string;
  phone: string;
  email: string;
  locality: string;
  zone: string;
  clientType: string;
  service: string;
  message: string;
  hasStarlink: string;
  hasEquipment: string;
}

export type QuoteFormErrors = Partial<Record<keyof QuoteFormData, string>>;
