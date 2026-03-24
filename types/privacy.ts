import { LocalizedText } from "@/types/i18n";

export type PrivacyPolicySectionKind =
    | "collection"
    | "sharing"
    | "ai"
    | "deletion"
    | "retention"
    | "children"
    | "security"
    | "changes"
    | "consent";

export interface PrivacyPolicyService {
    name: string;
    url: string;
}

export interface PrivacyPolicySection {
    kind: PrivacyPolicySectionKind;
    title: LocalizedText;
    paragraphs: LocalizedText[];
    bullets?: LocalizedText[];
    services?: PrivacyPolicyService[];
}

export interface PrivacyPolicy {
    slug: string;
    appName: LocalizedText;
    projectId?: string;
    summary: LocalizedText;
    introduction: LocalizedText;
    effectiveDate: string;
    contactEmail: string;
    sections: PrivacyPolicySection[];
}
