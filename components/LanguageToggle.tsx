"use client";

import { useLocale } from "@/components/LocaleProvider";
import { Locale } from "@/types/i18n";

const labels: Record<Locale, string> = {
    ko: "KO",
    en: "EN",
};

export function LanguageToggle() {
    const { locale, setLocale } = useLocale();

    return (
        <div className="inline-flex items-center rounded-full border border-white/10 bg-black/40 p-1 backdrop-blur">
            {(["ko", "en"] as const).map((entry) => (
                <button
                    key={entry}
                    type="button"
                    onClick={() => setLocale(entry)}
                    className={`rounded-full px-3 py-1.5 text-xs font-bold tracking-[0.2em] transition-colors ${
                        locale === entry
                            ? "bg-[#00FF41] text-black"
                            : "text-gray-400 hover:text-white"
                    }`}
                >
                    {labels[entry]}
                </button>
            ))}
        </div>
    );
}
