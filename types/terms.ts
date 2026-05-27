import { LocalizedText } from "@/types/i18n";

export type TermsOfServiceSectionKind =
    | "purpose"
    | "definitions"
    | "eligibility"
    | "license"
    | "accounts"
    | "service"
    | "payments"
    | "ads"
    | "push"
    | "user_conduct"
    | "enforcement"
    | "ip"
    | "privacy"
    | "third_party"
    | "changes"
    | "liability"
    | "law"
    | "contact";

export interface TermsOfServiceSection {
    kind: TermsOfServiceSectionKind;
    title: LocalizedText;
    paragraphs: LocalizedText[];
    bullets?: LocalizedText[];
}

export interface TermsOfService {
    slug: string;
    appName: LocalizedText;
    projectId?: string;
    privacySlug?: string;
    summary: LocalizedText;
    introduction: LocalizedText;
    effectiveDate: string;
    contactEmail: string;
    sections: TermsOfServiceSection[];
}
