"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, FileText, Mail } from "lucide-react";
import Link from "next/link";
import { termsOfService } from "@/data/termsOfService";
import { projects } from "@/data/projects";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLocale } from "@/components/LocaleProvider";
import { getLocalizedText, localizeHref } from "@/lib/i18n";

export default function TermsIndexPage() {
    const { locale } = useLocale();
    const terms = termsOfService.map((entry) => ({
        ...entry,
        project: projects.find((project) => project.id === entry.projectId),
    }));
    const copy = {
        back: {
            ko: "돌아가기",
            en: "Back",
            "pt-BR": "Voltar",
        },
        title: {
            ko: "서비스 이용약관",
            en: "Terms of Service",
            "pt-BR": "Termos de Serviço",
        },
        appTerms: {
            ko: "앱 약관",
            en: "App Terms",
            "pt-BR": "Termos do app",
        },
        effectiveDate: {
            ko: "시행일",
            en: "Effective Date",
            "pt-BR": "Data de vigência",
        },
        openTerms: {
            ko: "약관 페이지 열기",
            en: "Open Terms Page",
            "pt-BR": "Abrir termos",
        },
        viewProject: {
            ko: "프로젝트 보기",
            en: "View Project",
            "pt-BR": "Ver projeto",
        },
    };

    return (
        <main className="min-h-screen bg-black text-white py-20 px-6 relative overflow-hidden">
            <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{ backgroundImage: "radial-gradient(circle at 20% 20%, #0f0f0f 0%, transparent 55%)" }}
            />

            <div className="max-w-5xl mx-auto relative">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
                    <Link href={localizeHref("/", locale)} className="inline-flex items-center gap-2 text-gray-400 hover:text-[#00FF41] transition-colors group">
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> {getLocalizedText(copy.back, locale)}
                    </Link>
                    <LanguageToggle />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-12"
                >
                    <header className="border-b border-gray-900 pb-10 space-y-4">
                        <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">Terms of Service Index | DiskFactory</p>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{getLocalizedText(copy.title, locale)}</h1>
                    </header>

                    <div className="grid gap-6">
                        {terms.map((entry, idx) => (
                            <motion.div
                                key={entry.slug}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.08 }}
                                className="game-card p-8 md:p-10"
                            >
                                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                                    <div className="space-y-5">
                                        <div className="flex items-center gap-4">
                                            {entry.project?.icon ? (
                                                <div className="w-16 h-16 rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 shrink-0">
                                                    <img src={entry.project.icon} alt={getLocalizedText(entry.appName, locale)} className="w-full h-full object-cover" />
                                                </div>
                                            ) : (
                                                <div className="w-16 h-16 rounded-2xl bg-gray-900 border border-gray-800 flex items-center justify-center shrink-0">
                                                    <FileText size={20} className="text-[#00FF41]" />
                                                </div>
                                            )}
                                            <div className="space-y-1">
                                                <p className="text-xs uppercase tracking-[0.25em] text-gray-500 font-mono">{getLocalizedText(copy.appTerms, locale)}</p>
                                                <h2 className="text-2xl md:text-3xl font-bold">{getLocalizedText(entry.appName, locale)}</h2>
                                            </div>
                                        </div>

                                        <p className="text-gray-400 leading-relaxed max-w-2xl">{getLocalizedText(entry.summary, locale)}</p>

                                        <div className="flex flex-wrap gap-3 text-sm">
                                            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-gray-800 bg-black/40 text-gray-300">
                                                <Calendar size={14} className="text-[#00FF41]" /> {getLocalizedText(copy.effectiveDate, locale)} {entry.effectiveDate}
                                            </div>
                                            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-gray-800 bg-black/40 text-gray-300">
                                                <Mail size={14} className="text-[#00FF41]" /> {entry.contactEmail}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-3 min-w-full lg:min-w-56">
                                        <Link
                                            href={localizeHref(`/terms/${entry.slug}`, locale)}
                                            className="inline-flex items-center justify-center gap-2 bg-[#00FF41] text-black font-bold px-6 py-3 rounded-full hover:scale-[1.02] transition-transform"
                                        >
                                            {getLocalizedText(copy.openTerms, locale)} <ArrowRight size={18} />
                                        </Link>
                                        {entry.project && (
                                            <Link
                                                href={localizeHref(`/projects/${entry.project.id}`, locale)}
                                                className="inline-flex items-center justify-center gap-2 border border-white/10 text-white font-bold px-6 py-3 rounded-full hover:bg-white/5 transition-colors"
                                            >
                                                {getLocalizedText(copy.viewProject, locale)}
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
