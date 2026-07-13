import { Locale, LocalizedText } from "@/types/i18n";

export type PrivacyPolicySectionKind =
    | "collection"
    | "sharing"
    | "ai"
    | "deletion"
    | "retention"
    | "children"
    | "security"
    | "changes"
    | "consent"
    | "contact";

export interface PrivacyPolicyService {
    name: string;
    url: string;
}

export interface PrivacyPolicyTableCell {
    text: LocalizedText;
    url?: string;
}

export interface PrivacyPolicyTable {
    caption: LocalizedText;
    headers: LocalizedText[];
    rows: PrivacyPolicyTableCell[][];
}

export interface PrivacyPolicySection {
    kind: PrivacyPolicySectionKind;
    title: LocalizedText;
    paragraphs: LocalizedText[];
    table?: PrivacyPolicyTable;
    notes?: LocalizedText[];
    bullets?: LocalizedText[];
    services?: PrivacyPolicyService[];
}

export interface PrivacyPolicy {
    slug: string;
    appName: LocalizedText;
    projectId?: string;
    supportedLocales?: Locale[];
    summary: LocalizedText;
    introduction: LocalizedText;
    effectiveDate: string;
    contactEmail: string;
    sections: PrivacyPolicySection[];
}
