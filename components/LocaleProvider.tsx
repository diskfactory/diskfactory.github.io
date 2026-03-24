"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { Locale } from "@/types/i18n";

interface LocaleContextValue {
    locale: Locale;
    setLocale: (locale: Locale) => void;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

function isLocale(value: string | null): value is Locale {
    return value === "ko" || value === "en";
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
    const [locale, setLocaleState] = useState<Locale>(() => {
        if (typeof window === "undefined") {
            return "ko";
        }

        const params = new URLSearchParams(window.location.search);
        const queryLocale = params.get("lang");

        if (isLocale(queryLocale)) {
            return queryLocale;
        }

        const storedLocale = window.localStorage.getItem("diskfactory-locale");
        return isLocale(storedLocale) ? storedLocale : "ko";
    });

    useEffect(() => {
        document.documentElement.lang = locale;
        localStorage.setItem("diskfactory-locale", locale);

        const params = new URLSearchParams(window.location.search);

        if (locale === "ko") {
            params.delete("lang");
        } else {
            params.set("lang", "en");
        }

        const query = params.toString();
        const nextUrl = `${window.location.pathname}${query ? `?${query}` : ""}${window.location.hash}`;
        window.history.replaceState(null, "", nextUrl);
    }, [locale]);

    const setLocale = useCallback((nextLocale: Locale) => {
        setLocaleState(nextLocale);
    }, []);

    return (
        <LocaleContext.Provider value={{ locale, setLocale }}>
            {children}
        </LocaleContext.Provider>
    );
}

export function useLocale() {
    const context = useContext(LocaleContext);

    if (!context) {
        throw new Error("useLocale must be used within LocaleProvider");
    }

    return context;
}
