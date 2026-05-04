import { LocalizedText } from "@/types/i18n";

export interface AccountDeletionGuide {
    slug: string;
    appName: LocalizedText;
    projectId: string;
    contactEmail: string;
    effectiveDate: string;
    responseTime: LocalizedText;
    requestItems: LocalizedText[];
    deletionScope: LocalizedText[];
    retentionScope: LocalizedText[];
    steps: {
        title: LocalizedText;
        description: LocalizedText;
    }[];
}
