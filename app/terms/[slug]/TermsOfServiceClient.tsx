"use client";

import { motion } from "framer-motion";
import {
    AlertTriangle,
    ArrowLeft,
    Bell,
    CheckCircle,
    Clock,
    CreditCard,
    ExternalLink,
    FileText,
    Gavel,
    Lock,
    Mail,
    Megaphone,
    RefreshCw,
    Scale,
    ScrollText,
    Settings,
    Shield,
    Store,
    UserCheck,
} from "lucide-react";
import Link from "next/link";
import { Project } from "@/types/project";
import { TermsOfService, TermsOfServiceSectionKind } from "@/types/terms";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLocale } from "@/components/LocaleProvider";
import { getLocalizedText, localizeHref } from "@/lib/i18n";

const sectionIcons: Record<TermsOfServiceSectionKind, React.ReactNode> = {
    purpose: <ScrollText size={18} className="text-[#00FF41]" />,
    definitions: <FileText size={18} className="text-[#00FF41]" />,
    eligibility: <UserCheck size={18} className="text-[#00FF41]" />,
    license: <CheckCircle size={18} className="text-[#00FF41]" />,
    accounts: <Lock size={18} className="text-[#00FF41]" />,
    service: <Settings size={18} className="text-[#00FF41]" />,
    payments: <CreditCard size={18} className="text-[#00FF41]" />,
    ads: <Megaphone size={18} className="text-[#00FF41]" />,
    push: <Bell size={18} className="text-[#00FF41]" />,
    user_conduct: <AlertTriangle size={18} className="text-[#00FF41]" />,
    enforcement: <Shield size={18} className="text-[#00FF41]" />,
    ip: <FileText size={18} className="text-[#00FF41]" />,
    privacy: <Shield size={18} className="text-[#00FF41]" />,
    third_party: <Store size={18} className="text-[#00FF41]" />,
    changes: <RefreshCw size={18} className="text-[#00FF41]" />,
    liability: <Scale size={18} className="text-[#00FF41]" />,
    law: <Gavel size={18} className="text-[#00FF41]" />,
    contact: <Mail size={18} className="text-[#00FF41]" />,
};

interface TermsOfServiceClientProps {
    terms: TermsOfService;
    project?: Project;
}

export default function TermsOfServiceClient({ terms, project }: TermsOfServiceClientProps) {
    const { locale } = useLocale();
    const appName = getLocalizedText(terms.appName, locale);
    const privacySlug = terms.privacySlug ?? project?.privacySlug;
    const copy = {
        back: {
            ko: "약관 목록으로",
            en: "Back to Terms",
            "pt-BR": "Voltar aos termos",
        },
        pageTitle: {
            ko: `${appName} 서비스 이용약관`,
            en: `${appName} Terms of Service`,
            "pt-BR": `Termos de Serviço do ${appName}`,
        },
        effectiveDate: {
            ko: "시행일",
            en: "Effective Date",
            "pt-BR": "Data de vigência",
        },
        contact: {
            ko: "연락처",
            en: "Contact",
            "pt-BR": "Contato",
        },
        contactInfo: {
            ko: "문의",
            en: "Contact Info",
            "pt-BR": "Informações de contato",
        },
        privacy: {
            ko: "개인정보처리방침",
            en: "Privacy Policy",
            "pt-BR": "Política de Privacidade",
        },
        backToTop: {
            ko: "맨 위로",
            en: "Back to Top",
            "pt-BR": "Voltar ao topo",
        },
    };

    return (
        <main className="min-h-screen bg-black text-white py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
                    <Link href={localizeHref("/terms", locale)} className="inline-flex items-center gap-2 text-gray-400 hover:text-[#00FF41] transition-colors group">
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
                        <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">Terms of Service | DiskFactory</p>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{getLocalizedText(copy.pageTitle, locale)}</h1>
                        <p className="text-gray-400 leading-relaxed max-w-3xl">{getLocalizedText(terms.summary, locale)}</p>
                    </header>

                    <div className="grid gap-8">
                        <div className="game-card p-10 bg-gray-900/20 space-y-5">
                            <p className="text-lg text-gray-300 leading-relaxed italic">
                                &quot;{getLocalizedText(terms.introduction, locale)}&quot;
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                <div className="rounded-2xl border border-gray-900 bg-black/30 p-4">
                                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-mono mb-2">{getLocalizedText(copy.effectiveDate, locale)}</p>
                                    <p className="text-white">{terms.effectiveDate}</p>
                                </div>
                                <div className="rounded-2xl border border-gray-900 bg-black/30 p-4">
                                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-mono mb-2">{getLocalizedText(copy.contact, locale)}</p>
                                    <p className="text-[#00FF41] break-all">{terms.contactEmail}</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {privacySlug && (
                                    <Link
                                        href={localizeHref(`/privacy/${privacySlug}`, locale)}
                                        className="inline-flex items-center gap-2 rounded-full border border-[#00FF41]/30 px-4 py-2 text-sm font-bold text-[#00FF41] hover:bg-[#00FF41]/10 transition-colors"
                                    >
                                        <Shield size={16} /> {getLocalizedText(copy.privacy, locale)}
                                    </Link>
                                )}
                                {(project?.links?.playstore || project?.links?.appstore) && (
                                    <>
                                        {project?.links?.playstore && (
                                            <a
                                                href={project.links.playstore}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-bold text-white hover:bg-white/5 transition-colors"
                                            >
                                                <ExternalLink size={16} /> Google Play
                                            </a>
                                        )}
                                        {project?.links?.appstore && (
                                            <a
                                                href={project.links.appstore}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-bold text-white hover:bg-white/5 transition-colors"
                                            >
                                                <ExternalLink size={16} /> App Store
                                            </a>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                            {terms.sections.map((section, idx) => (
                                <motion.section
                                    key={`${section.kind}-${idx}`}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.04 }}
                                    className="p-8 border border-gray-900 rounded-2xl bg-black/40 hover:border-[#00FF41]/30 transition-colors"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        {sectionIcons[section.kind]}
                                        <h2 className="text-xl font-bold text-white">{getLocalizedText(section.title, locale)}</h2>
                                    </div>
                                    <div className="pl-7 border-l border-gray-800 space-y-4">
                                        {section.paragraphs.map((paragraph, paragraphIndex) => (
                                            <p key={paragraphIndex} className="text-gray-400 leading-relaxed">
                                                {getLocalizedText(paragraph, locale)}
                                            </p>
                                        ))}
                                    </div>
                                    {section.bullets && (
                                        <ul className="mt-4 ml-7 space-y-3">
                                            {section.bullets.map((bullet, bulletIndex) => (
                                                <li key={bulletIndex} className="flex gap-3 text-gray-400">
                                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#00FF41] shrink-0" />
                                                    <span>{getLocalizedText(bullet, locale)}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </motion.section>
                            ))}
                        </div>

                        <div className="mt-20 pt-10 border-t border-gray-900 flex flex-col md:flex-row justify-between items-start gap-10">
                            <div className="space-y-6">
                                <div className="space-y-1">
                                    <h3 className="text-xs font-mono text-gray-500 uppercase tracking-widest flex items-center gap-2">
                                        <Mail size={12} /> {getLocalizedText(copy.contactInfo, locale)}
                                    </h3>
                                    <p className="text-lg text-[#00FF41] break-all">{terms.contactEmail}</p>
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-xs font-mono text-gray-500 uppercase tracking-widest flex items-center gap-2">
                                        <Clock size={12} /> {getLocalizedText(copy.effectiveDate, locale)}
                                    </h3>
                                    <p className="text-white">{terms.effectiveDate}</p>
                                </div>
                            </div>

                            <button
                                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                className="px-8 py-3 bg-white/5 border border-white/10 rounded-full text-xs font-bold hover:bg-white/10 transition-all uppercase tracking-widest"
                            >
                                {getLocalizedText(copy.backToTop, locale)}
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
