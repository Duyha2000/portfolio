export interface SocialLinks {
  facebook: string;
  github: string;
  linkedin: string;
}

export interface ProfileData {
  name: string;
  age: number;
  nationality: string;
  languages: string[];
  location: string;
  service: string;
  title: string;
  socials: SocialLinks;
  avatar: string;
}
