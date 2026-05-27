"use client";

import { Check, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLocale } from "@/components/LocaleProvider";
import { Locale } from "@/types/i18n";

const languages: { locale: Locale; code: string; label: string }[] = [
    { locale: "ko", code: "KO", label: "한국어" },
    { locale: "en", code: "EN", label: "English" },
    { locale: "pt-BR", code: "PT-BR", label: "Português (Brasil)" },
];

export function LanguageToggle() {
    const { locale, setLocale } = useLocale();
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const selectedLanguage = languages.find((language) => language.locale === locale) ?? languages[0];

    useEffect(() => {
        if (!isOpen) {
            return;
        }

        function handlePointerDown(event: PointerEvent) {
            if (!containerRef.current?.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        }

        document.addEventListener("pointerdown", handlePointerDown);
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("pointerdown", handlePointerDown);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen]);

    const selectLocale = (nextLocale: Locale) => {
        setLocale(nextLocale);
        setIsOpen(false);
    };

    return (
        <div ref={containerRef} className="relative z-50 inline-flex w-fit self-end">
            <button
                type="button"
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                onClick={() => setIsOpen((current) => !current)}
                className="inline-flex h-12 min-w-24 items-center justify-center gap-2 rounded-full border border-white/15 bg-white px-4 text-base font-bold text-neutral-700 shadow-[0_8px_28px_rgba(0,0,0,0.2)] transition hover:border-[#00FF41]/60 hover:text-black focus:outline-none focus:ring-2 focus:ring-[#00FF41]/70"
            >
                {selectedLanguage.code}
                <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                />
            </button>

            {isOpen && (
                <div
                    role="listbox"
                    aria-label="Language"
                    className="absolute right-0 top-[calc(100%+0.75rem)] w-56 overflow-hidden rounded-2xl border border-black/10 bg-white py-2 text-neutral-700 shadow-[0_18px_44px_rgba(0,0,0,0.28)]"
                >
                    {languages.map((language) => {
                        const isSelected = language.locale === locale;

                        return (
                            <button
                                key={language.locale}
                                type="button"
                                role="option"
                                aria-selected={isSelected}
                                onClick={() => selectLocale(language.locale)}
                                className={`flex w-full items-center justify-between px-8 py-4 text-left text-xl font-semibold transition-colors ${
                                    isSelected
                                        ? "bg-neutral-100 text-black"
                                        : "text-neutral-600 hover:bg-neutral-50 hover:text-black"
                                }`}
                            >
                                <span>{language.label}</span>
                                {isSelected && <Check size={22} strokeWidth={2.5} className="text-black" aria-hidden="true" />}
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
