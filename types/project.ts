import { LocalizedText } from "@/types/i18n";

export interface Project {
    id: string;
    title: LocalizedText;
    description: LocalizedText;
    fullDescription: LocalizedText;
    thumbnail: string;
    icon: string;
    tags: string[];
    links?: {
        playstore?: string;
        appstore?: string;
        steam?: string;
    };
    privacySlug?: string;
    screenshots: string[];
    features: LocalizedText[];
}
