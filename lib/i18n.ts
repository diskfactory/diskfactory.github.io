import { Locale, LocalizedText } from "@/types/i18n";

export function getLocalizedText(text: LocalizedText, locale: Locale) {
    return text[locale];
}

export function localizeHref(path: string, locale: Locale) {
    if (locale === "ko") {
        return path;
    }

    const langParam = encodeURIComponent(locale);
    return path.includes("?") ? `${path}&lang=${langParam}` : `${path}?lang=${langParam}`;
}
