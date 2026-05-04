"use client";

import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Clock3, ExternalLink, Mail, ShieldCheck, Trash2, TriangleAlert } from "lucide-react";
import Link from "next/link";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLocale } from "@/components/LocaleProvider";
import { getLocalizedText, localizeHref } from "@/lib/i18n";
import { AccountDeletionGuide } from "@/types/accountDeletion";
import { Project } from "@/types/project";

interface AccountDeletionClientProps {
    guide: AccountDeletionGuide;
    project?: Project;
}

export default function AccountDeletionClient({ guide, project }: AccountDeletionClientProps) {
    const { locale } = useLocale();
    const appName = getLocalizedText(guide.appName, locale);
    const projectTitle = project ? getLocalizedText(project.title, locale) : appName;

    const copy = {
        back: {
            ko: "프로젝트로 돌아가기",
            en: "Back to Project",
        },
        overline: {
            ko: "Account & Data Deletion",
            en: "Account & Data Deletion",
        },
        title: {
            ko: `${appName} 계정 삭제 요청`,
            en: `${appName} Account Deletion Request`,
        },
        description: {
            ko: "앱 안에서 사용자가 직접 삭제를 완료하는 기능은 제공하지 않습니다. 대신 이메일을 통해 SwipeRunner 계정 및 관련 데이터 삭제를 요청할 수 있습니다.",
            en: "The app does not provide a self-service in-app deletion feature. Instead, you can request deletion of your SwipeRunner account and related data by email.",
        },
        emailCta: {
            ko: "삭제 요청 이메일 보내기",
            en: "Send Deletion Request",
        },
        privacy: {
            ko: "개인정보 처리방침",
            en: "Privacy Policy",
        },
        effectiveDate: {
            ko: "시행일",
            en: "Effective Date",
        },
        contact: {
            ko: "요청 접수 이메일",
            en: "Request Email",
        },
        requestTitle: {
            ko: "요청 시 포함할 내용",
            en: "What to Include",
        },
        deletionTitle: {
            ko: "삭제 또는 익명화되는 데이터",
            en: "Data Deleted or Anonymized",
        },
        retentionTitle: {
            ko: "삭제 대상에서 제외될 수 있는 데이터",
            en: "Data That May Be Retained",
        },
        processTitle: {
            ko: "처리 절차",
            en: "Request Process",
        },
        responseTitle: {
            ko: "처리 기간",
            en: "Response Time",
        },
        googleNoteTitle: {
            ko: "Google Play Games 데이터 안내",
            en: "Google Play Games Data Note",
        },
        googleNote: {
            ko: "Google 계정, Google Play Games 프로필, 업적, 리더보드 등 Google이 직접 관리하는 데이터는 DiskFactory가 삭제할 수 없습니다. 해당 데이터는 Google 계정 또는 Google Play Games 설정에서 관리해 주세요.",
            en: "DiskFactory cannot delete data directly managed by Google, such as Google Account data, Google Play Games profiles, achievements, or leaderboards. Please manage that data through your Google Account or Google Play Games settings.",
        },
        noSensitive: {
            ko: "요청 이메일에는 비밀번호, 결제 정보, 신분증 등 민감한 정보를 포함하지 마세요.",
            en: "Do not include sensitive information such as passwords, payment information, or identification documents in your request email.",
        },
    };

    const emailSubject =
        locale === "ko"
            ? "[SwipeRunner] 계정 및 데이터 삭제 요청"
            : "[SwipeRunner] Account and Data Deletion Request";
    const emailBody =
        locale === "ko"
            ? [
                "안녕하세요, DiskFactory 담당자님.",
                "",
                "SwipeRunner 계정 및 관련 데이터 삭제를 요청합니다.",
                "",
                "Google Play Games 계정 또는 플레이어 닉네임:",
                "삭제 요청 범위: 계정 및 관련 게임 데이터 전체 삭제",
                "회신 받을 이메일:",
                "",
                "비밀번호, 결제 정보, 신분증 등 민감 정보는 포함하지 않습니다.",
            ].join("\n")
            : [
                "Hello DiskFactory team,",
                "",
                "I would like to request deletion of my SwipeRunner account and related data.",
                "",
                "Google Play Games account or player nickname:",
                "Deletion scope: Delete my account and all related gameplay data",
                "Reply email:",
                "",
                "I am not including sensitive information such as passwords, payment information, or identification documents.",
            ].join("\n");
    const mailtoHref = `mailto:${guide.contactEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    return (
        <main className="min-h-screen bg-black text-white overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_50%_0%,rgba(0,255,65,0.18),transparent_62%)] pointer-events-none" />

            <nav className="relative z-10 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <Link href={localizeHref(`/projects/${guide.projectId}`, locale)} className="inline-flex items-center gap-2 text-gray-400 hover:text-[#00FF41] transition-colors">
                    <ArrowLeft size={20} /> {getLocalizedText(copy.back, locale)}
                </Link>
                <LanguageToggle />
            </nav>

            <section className="relative z-10 px-6 pt-12 pb-20">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-3xl"
                    >
                        <p className="font-mono text-xs uppercase tracking-[0.35em] text-[#00FF41] mb-5">
                            {getLocalizedText(copy.overline, locale)}
                        </p>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none mb-6">
                            {getLocalizedText(copy.title, locale)}
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
                            {getLocalizedText(copy.description, locale)}
                        </p>
                        <div className="mt-9 flex flex-col sm:flex-row gap-3">
                            <a
                                href={mailtoHref}
                                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#00FF41] px-6 py-3 text-sm font-black text-black hover:scale-[1.03] transition-transform"
                            >
                                <Mail size={18} /> {getLocalizedText(copy.emailCta, locale)}
                            </a>
                            {project?.privacySlug && (
                                <Link
                                    href={localizeHref(`/privacy/${project.privacySlug}`, locale)}
                                    className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 px-6 py-3 text-sm font-bold text-white hover:border-[#00FF41]/40 hover:text-[#00FF41] transition-colors"
                                >
                                    <ExternalLink size={18} /> {getLocalizedText(copy.privacy, locale)}
                                </Link>
                            )}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: 0.15 }}
                        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10"
                    >
                        {[
                            {
                                label: getLocalizedText(copy.contact, locale),
                                value: guide.contactEmail,
                                icon: <Mail size={18} />,
                            },
                            {
                                label: getLocalizedText(copy.responseTitle, locale),
                                value: getLocalizedText(guide.responseTime, locale),
                                icon: <Clock3 size={18} />,
                            },
                            {
                                label: getLocalizedText(copy.effectiveDate, locale),
                                value: guide.effectiveDate,
                                icon: <ShieldCheck size={18} />,
                            },
                        ].map((item) => (
                            <div key={item.label} className="bg-black/80 p-6">
                                <div className="mb-4 flex items-center gap-2 text-[#00FF41]">
                                    {item.icon}
                                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gray-500">{item.label}</p>
                                </div>
                                <p className="text-sm leading-relaxed text-gray-200 break-words">{item.value}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <section className="relative z-10 px-6 pb-24">
                <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12">
                    <motion.aside
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        className="lg:sticky lg:top-10 h-fit border-l border-[#00FF41]/50 pl-6"
                    >
                        <p className="font-mono text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">{projectTitle}</p>
                        <h2 className="text-3xl font-black mb-5">{getLocalizedText(copy.processTitle, locale)}</h2>
                        <p className="text-gray-400 leading-relaxed">{getLocalizedText(copy.noSensitive, locale)}</p>
                    </motion.aside>

                    <div className="space-y-14">
                        <motion.section
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                        >
                            <h3 className="mb-6 flex items-center gap-3 text-2xl font-bold">
                                <Mail className="text-[#00FF41]" size={22} /> {getLocalizedText(copy.requestTitle, locale)}
                            </h3>
                            <ul className="space-y-4">
                                {guide.requestItems.map((item, index) => (
                                    <li key={index} className="flex gap-4 border-b border-white/10 pb-4 text-gray-300">
                                        <span className="mt-1 font-mono text-xs text-[#00FF41]">{String(index + 1).padStart(2, "0")}</span>
                                        <span className="leading-relaxed">{getLocalizedText(item, locale)}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.section>

                        <motion.section
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                        >
                            <h3 className="mb-6 flex items-center gap-3 text-2xl font-bold">
                                <Trash2 className="text-[#00FF41]" size={22} /> {getLocalizedText(copy.deletionTitle, locale)}
                            </h3>
                            <ul className="grid gap-3">
                                {guide.deletionScope.map((item, index) => (
                                    <li key={index} className="flex gap-3 text-gray-300">
                                        <CheckCircle2 className="mt-0.5 shrink-0 text-[#00FF41]" size={18} />
                                        <span className="leading-relaxed">{getLocalizedText(item, locale)}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.section>

                        <motion.section
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                        >
                            <h3 className="mb-6 flex items-center gap-3 text-2xl font-bold">
                                <TriangleAlert className="text-[#00FF41]" size={22} /> {getLocalizedText(copy.retentionTitle, locale)}
                            </h3>
                            <ul className="space-y-3">
                                {guide.retentionScope.map((item, index) => (
                                    <li key={index} className="border-l border-white/10 pl-4 text-gray-400 leading-relaxed">
                                        {getLocalizedText(item, locale)}
                                    </li>
                                ))}
                            </ul>
                        </motion.section>

                        <motion.section
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            className="rounded-3xl border border-[#00FF41]/20 bg-[#00FF41]/5 p-6"
                        >
                            <h3 className="mb-3 flex items-center gap-3 text-xl font-bold text-[#00FF41]">
                                <ShieldCheck size={22} /> {getLocalizedText(copy.googleNoteTitle, locale)}
                            </h3>
                            <p className="text-gray-300 leading-relaxed">{getLocalizedText(copy.googleNote, locale)}</p>
                        </motion.section>
                    </div>
                </div>
            </section>

            <section className="relative z-10 border-t border-white/10 px-6 py-20">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-black mb-10">{getLocalizedText(copy.processTitle, locale)}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10">
                        {guide.steps.map((step, index) => (
                            <motion.div
                                key={getLocalizedText(step.title, locale)}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ delay: index * 0.06 }}
                                className="bg-black p-6"
                            >
                                <p className="mb-6 font-mono text-xs text-[#00FF41]">{String(index + 1).padStart(2, "0")}</p>
                                <h3 className="mb-3 text-lg font-bold">{getLocalizedText(step.title, locale)}</h3>
                                <p className="text-sm leading-relaxed text-gray-400">{getLocalizedText(step.description, locale)}</p>
                            </motion.div>
                        ))}
                    </div>
                    <div className="mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 border-t border-white/10 pt-8">
                        <p className="max-w-2xl text-sm text-gray-500 leading-relaxed">
                            {getLocalizedText(guide.responseTime, locale)}
                        </p>
                        <a
                            href={mailtoHref}
                            className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-black text-black hover:bg-[#00FF41] transition-colors"
                        >
                            <Mail size={18} /> {getLocalizedText(copy.emailCta, locale)}
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
