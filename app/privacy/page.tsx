"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, Mail, Shield } from "lucide-react";
import Link from "next/link";
import { privacyPolicies } from "@/data/privacyPolicies";
import { projects } from "@/data/projects";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLocale } from "@/components/LocaleProvider";
import { getLocalizedText, localizeHref } from "@/lib/i18n";

export default function PrivacyIndexPage() {
    const { locale } = useLocale();
    const policies = privacyPolicies.map((policy) => ({
        ...policy,
        project: projects.find((project) => project.id === policy.projectId),
    }));
    const copy = {
        back: {
            ko: "돌아가기",
            en: "Back",
        },
        title: {
            ko: "게임별 개인정보처리방침",
            en: "Privacy Policies by Game",
        },
        appPolicy: {
            ko: "앱 정책",
            en: "App Policy",
        },
        effectiveDate: {
            ko: "시행일",
            en: "Effective Date",
        },
        openPolicy: {
            ko: "정책 페이지 열기",
            en: "Open Policy Page",
        },
        viewProject: {
            ko: "프로젝트 보기",
            en: "View Project",
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
                        <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">Privacy Policy Index | DiskFactory</p>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{getLocalizedText(copy.title, locale)}</h1>
                    </header>

                    <div className="grid gap-6">
                        {policies.map((policy, idx) => (
                            <motion.div
                                key={policy.slug}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.08 }}
                                className="game-card p-8 md:p-10"
                            >
                                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                                    <div className="space-y-5">
                                        <div className="flex items-center gap-4">
                                            {policy.project?.icon ? (
                                                <div className="w-16 h-16 rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 shrink-0">
                                                    <img src={policy.project.icon} alt={getLocalizedText(policy.appName, locale)} className="w-full h-full object-cover" />
                                                </div>
                                            ) : (
                                                <div className="w-16 h-16 rounded-2xl bg-gray-900 border border-gray-800 flex items-center justify-center shrink-0">
                                                    <Shield size={20} className="text-[#00FF41]" />
                                                </div>
                                            )}
                                            <div className="space-y-1">
                                                <p className="text-xs uppercase tracking-[0.25em] text-gray-500 font-mono">{getLocalizedText(copy.appPolicy, locale)}</p>
                                                <h2 className="text-2xl md:text-3xl font-bold">{getLocalizedText(policy.appName, locale)}</h2>
                                            </div>
                                        </div>

                                        <p className="text-gray-400 leading-relaxed max-w-2xl">{getLocalizedText(policy.summary, locale)}</p>

                                        <div className="flex flex-wrap gap-3 text-sm">
                                            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-gray-800 bg-black/40 text-gray-300">
                                                <Calendar size={14} className="text-[#00FF41]" /> {getLocalizedText(copy.effectiveDate, locale)} {policy.effectiveDate}
                                            </div>
                                            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-gray-800 bg-black/40 text-gray-300">
                                                <Mail size={14} className="text-[#00FF41]" /> {policy.contactEmail}
                                            </div>
                                        </div>

                                    </div>

                                    <div className="flex flex-col gap-3 min-w-full lg:min-w-56">
                                        <Link
                                            href={localizeHref(`/privacy/${policy.slug}`, locale)}
                                            className="inline-flex items-center justify-center gap-2 bg-[#00FF41] text-black font-bold px-6 py-3 rounded-full hover:scale-[1.02] transition-transform"
                                        >
                                            {getLocalizedText(copy.openPolicy, locale)} <ArrowRight size={18} />
                                        </Link>
                                        {policy.project && (
                                            <Link
                                                href={localizeHref(`/projects/${policy.project.id}`, locale)}
                                                className="inline-flex items-center justify-center gap-2 border border-white/10 text-white font-bold px-6 py-3 rounded-full hover:bg-white/5 transition-colors"
                                            >
                                                {getLocalizedText(copy.viewProject, locale)}
                                            </Link>
                                        )}
                                        {policy.project?.links?.playstore && (
                                            <a
                                                href={policy.project.links.playstore}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center gap-2 border border-gray-800 text-gray-300 font-bold px-6 py-3 rounded-full hover:border-[#00FF41]/30 hover:text-white transition-colors"
                                            >
                                                Google Play
                                            </a>
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
