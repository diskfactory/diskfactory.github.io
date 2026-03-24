"use client";

import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, Clock, ExternalLink, Mail, RefreshCw, Shield, Users } from "lucide-react";
import Link from "next/link";
import { Project } from "@/types/project";
import { PrivacyPolicy, PrivacyPolicySectionKind } from "@/types/privacy";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLocale } from "@/components/LocaleProvider";
import { getLocalizedText, localizeHref } from "@/lib/i18n";

const sectionIcons: Record<PrivacyPolicySectionKind, React.ReactNode> = {
    collection: <Shield size={18} className="text-[#00FF41]" />,
    sharing: <RefreshCw size={18} className="text-[#00FF41]" />,
    ai: <Shield size={18} className="text-[#00FF41]" />,
    deletion: <CheckCircle size={18} className="text-[#00FF41]" />,
    retention: <Clock size={18} className="text-[#00FF41]" />,
    children: <Users size={18} className="text-[#00FF41]" />,
    security: <Shield size={18} className="text-[#00FF41]" />,
    changes: <RefreshCw size={18} className="text-[#00FF41]" />,
    consent: <CheckCircle size={18} className="text-[#00FF41]" />,
};

interface PrivacyPolicyClientProps {
    policy: PrivacyPolicy;
    project?: Project;
}

export default function PrivacyPolicyClient({ policy, project }: PrivacyPolicyClientProps) {
    const { locale } = useLocale();
    const appName = getLocalizedText(policy.appName, locale);
    const copy = {
        back: {
            ko: "정책 목록으로",
            en: "Back to Policies",
        },
        pageTitle: {
            ko: `${appName} 개인정보처리방침`,
            en: `${appName} Privacy Policy`,
        },
        effectiveDate: {
            ko: "시행일",
            en: "Effective Date",
        },
        contact: {
            ko: "연락처",
            en: "Contact",
        },
        contactInfo: {
            ko: "연락처",
            en: "Contact Info",
        },
        backToTop: {
            ko: "맨 위로 ↑",
            en: "Back to Top ↑",
        },
    };

    return (
        <main className="min-h-screen bg-black text-white py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
                    <Link href={localizeHref("/privacy", locale)} className="inline-flex items-center gap-2 text-gray-400 hover:text-[#00FF41] transition-colors group">
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
                        <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">Privacy Policy | DiskFactory</p>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{getLocalizedText(copy.pageTitle, locale)}</h1>
                        <p className="text-gray-400 leading-relaxed max-w-3xl">{getLocalizedText(policy.summary, locale)}</p>
                    </header>

                    <div className="grid gap-8">
                        <div className="game-card p-10 bg-gray-900/20 space-y-5">
                            <p className="text-lg text-gray-300 leading-relaxed italic">
                                &quot;{getLocalizedText(policy.introduction, locale)}&quot;
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                <div className="rounded-2xl border border-gray-900 bg-black/30 p-4">
                                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-mono mb-2">{getLocalizedText(copy.effectiveDate, locale)}</p>
                                    <p className="text-white">{policy.effectiveDate}</p>
                                </div>
                                <div className="rounded-2xl border border-gray-900 bg-black/30 p-4">
                                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-mono mb-2">{getLocalizedText(copy.contact, locale)}</p>
                                    <p className="text-[#00FF41] break-all">{policy.contactEmail}</p>
                                </div>
                            </div>

                            {(project?.links?.playstore || project?.links?.appstore) && (
                                <div className="flex flex-wrap gap-3">
                                    {project?.links?.playstore && (
                                        <a
                                            href={project.links.playstore}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 rounded-full border border-[#00FF41]/30 px-4 py-2 text-sm font-bold text-[#00FF41] hover:bg-[#00FF41]/10 transition-colors"
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
                                </div>
                            )}
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                            {policy.sections.map((section, idx) => (
                                <motion.div
                                    key={`${section.kind}-${idx}`}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.08 }}
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
                                    {section.services && (
                                        <div className="flex flex-wrap gap-2 mt-4 ml-7">
                                            {section.services.map((service) => (
                                                <a
                                                    key={service.name}
                                                    href={service.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="px-3 py-1 bg-gray-900 rounded-md text-[10px] uppercase font-mono text-gray-400 border border-gray-800 tracking-wider hover:border-[#00FF41]/30 hover:text-white transition-colors"
                                                >
                                                    {service.name}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-20 pt-10 border-t border-gray-900 flex flex-col md:flex-row justify-between items-start gap-10">
                            <div className="space-y-6">
                                <div className="space-y-1">
                                    <h3 className="text-xs font-mono text-gray-500 uppercase tracking-widest flex items-center gap-2">
                                        <Mail size={12} /> {getLocalizedText(copy.contactInfo, locale)}
                                    </h3>
                                    <p className="text-lg text-[#00FF41] break-all">{policy.contactEmail}</p>
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-xs font-mono text-gray-500 uppercase tracking-widest flex items-center gap-2">
                                        <Clock size={12} /> {getLocalizedText(copy.effectiveDate, locale)}
                                    </h3>
                                    <p className="text-white">{policy.effectiveDate}</p>
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
