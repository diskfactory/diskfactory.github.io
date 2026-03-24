"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ExternalLink, ChevronRight, X, ChevronLeft as LeftIcon, ChevronRight as RightIcon, Shield } from "lucide-react";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Project } from "@/types/project";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLocale } from "@/components/LocaleProvider";
import { getLocalizedText, localizeHref } from "@/lib/i18n";

export default function ProjectClient({ project }: { project: Project }) {
    const { locale } = useLocale();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const projectTitle = getLocalizedText(project.title, locale);
    const copy = {
        back: {
            ko: "프로젝트 목록으로",
            en: "Back to Projects",
        },
        privacy: {
            ko: "개인정보 처리방침",
            en: "Privacy Policy",
        },
        screenshots: {
            ko: "스크린샷",
            en: "SCREENSHOTS",
        },
        features: {
            ko: "주요 특징",
            en: "KEY FEATURES",
        },
        imageNotFound: {
            ko: "이미지를 찾을 수 없습니다",
            en: "Image Not Found",
        },
    };

    const openViewer = (image: string, index: number) => {
        setSelectedImage(image);
        setCurrentIndex(index);
        document.body.style.overflow = "hidden";
    };

    const closeViewer = () => {
        setSelectedImage(null);
        document.body.style.overflow = "auto";
    };

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        const nextIdx = (currentIndex + 1) % project.screenshots.length;
        setCurrentIndex(nextIdx);
        setSelectedImage(project.screenshots[nextIdx]);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        const prevIdx = (currentIndex - 1 + project.screenshots.length) % project.screenshots.length;
        setCurrentIndex(prevIdx);
        setSelectedImage(project.screenshots[prevIdx]);
    };

    return (
        <main className="min-h-screen bg-black text-white">
            {/* Navigation */}
            <nav className="p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <Link href={localizeHref("/", locale)} className="inline-flex items-center gap-2 text-gray-400 hover:text-[#00FF41] transition-colors">
                    <ArrowLeft size={20} /> {getLocalizedText(copy.back, locale)}
                </Link>
                <LanguageToggle />
            </nav>

            <Section className="pt-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left: Info */}
                    <div className="lg:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="sticky top-10"
                        >
                            <div
                                className="w-24 h-24 bg-gray-900 rounded-2xl mb-6 flex items-center justify-center border border-gray-800 shadow-[0_0_20px_rgba(0,0,255,0.1)] overflow-hidden cursor-pointer hover:border-[#00FF41]/50 transition-colors"
                                onClick={() => project.icon && openViewer(project.icon, -1)}
                            >
                                {project.icon ? (
                                    <img src={project.icon} alt={projectTitle} className="w-full h-full object-cover" />
                                ) : (
                                    <span className="text-[10px] text-gray-600">ICON</span>
                                )}
                            </div>
                            <h1 className="text-4xl font-bold mb-4">{projectTitle}</h1>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs font-mono bg-[#00FF41]/10 text-[#00FF41] px-3 py-1 rounded-full border border-[#00FF41]/20">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                                {getLocalizedText(project.fullDescription, locale)}
                            </p>

                            <div className="flex flex-col gap-4">
                                {project.links?.playstore && (
                                    <a
                                        href={project.links.playstore}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-3 bg-[#00FF41] text-black font-bold px-6 py-3 rounded-lg hover:scale-105 transition-transform"
                                    >
                                        <ExternalLink size={18} /> Google Play
                                    </a>
                                )}
                                {project.links?.appstore && (
                                    <a
                                        href={project.links.appstore}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-3 border border-gray-700 text-white font-bold px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors"
                                    >
                                        <ExternalLink size={18} /> App Store
                                    </a>
                                )}
                                {project.links?.steam && (
                                    <a
                                        href={project.links.steam}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-3 border border-[#66c0f4]/50 text-[#66c0f4] font-bold px-6 py-3 rounded-lg hover:bg-[#66c0f4]/10 transition-colors"
                                    >
                                        <ExternalLink size={18} /> Steam
                                    </a>
                                )}
                                {project.privacySlug && (
                                    <Link
                                        href={localizeHref(`/privacy/${project.privacySlug}`, locale)}
                                        className="inline-flex items-center gap-3 border border-[#00FF41]/30 text-[#00FF41] font-bold px-6 py-3 rounded-lg hover:bg-[#00FF41]/10 transition-colors"
                                    >
                                        <Shield size={18} /> {getLocalizedText(copy.privacy, locale)}
                                    </Link>
                                )}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Gallery & Features */}
                    <div className="lg:col-span-2 space-y-16">
                        {project.screenshots.length > 0 && (
                            <div>
                                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                                    <ChevronRight size={20} className="text-[#00FF41]" /> {getLocalizedText(copy.screenshots, locale)}
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {project.screenshots.map((sc, i) => (
                                        <div
                                            key={i}
                                            className="aspect-[9/16] bg-gray-900 rounded-xl border border-gray-800 flex items-center justify-center text-gray-700 text-sm italic overflow-hidden cursor-pointer hover:border-[#00FF41]/30 transition-all hover:scale-[1.02]"
                                            onClick={() => openViewer(sc, i)}
                                        >
                                            <img src={sc} alt={`${projectTitle} screenshot ${i + 1}`} className="w-full h-full object-cover shadow-2xl"
                                                onError={(e) => {
                                                    const target = e.target as HTMLImageElement;
                                                    target.style.display = 'none';
                                                    target.parentElement!.innerText = `${getLocalizedText(copy.imageNotFound, locale)}: ${sc}`;
                                                }} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {project.features.length > 0 && (
                            <div className="game-card p-10">
                                <h2 className="text-xl font-bold mb-8 flex items-center gap-2">
                                    <ChevronRight size={20} className="text-[#00FF41]" /> {getLocalizedText(copy.features, locale)}
                                </h2>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {project.features.map((feature, i) => (
                                        <li key={i} className="flex gap-4 items-start">
                                            <div className="mt-1.5 w-1.5 h-1.5 bg-[#00FF41] rounded-full shrink-0" />
                                            <span className="text-gray-300 leading-snug">{getLocalizedText(feature, locale)}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </Section>

            <footer className="py-20 text-center border-t border-gray-900 mt-20">
                <p className="text-gray-600 text-sm">© 2026 DiskFactory | {projectTitle}</p>
            </footer>

            {/* Image Viewer Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeViewer}
                        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-5xl w-full h-full flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage}
                                alt="Gallery View"
                                className="max-w-full max-h-full object-contain shadow-[0_0_50px_rgba(0,255,65,0.1)] rounded-lg"
                            />

                            {/* Controls */}
                            <button
                                onClick={closeViewer}
                                className="absolute top-0 right-0 p-4 text-white hover:text-[#00FF41] transition-colors z-[60]"
                            >
                                <X size={32} />
                            </button>

                            {currentIndex !== -1 && project.screenshots.length > 1 && (
                                <>
                                    {/* Number Indicator */}
                                    <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs font-mono text-white border border-white/10">
                                        {currentIndex + 1} / {project.screenshots.length}
                                    </div>

                                    {/* Arrow Navigation */}
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-0 p-4 text-white hover:text-[#00FF41] transition-colors md:-left-16"
                                    >
                                        <LeftIcon size={48} />
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-0 p-4 text-white hover:text-[#00FF41] transition-colors md:-right-16"
                                    >
                                        <RightIcon size={48} />
                                    </button>

                                    {/* Dot Indicators */}
                                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-2 p-2">
                                        {project.screenshots.map((_, i) => (
                                            <button
                                                key={i}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setCurrentIndex(i);
                                                    setSelectedImage(project.screenshots[i]);
                                                }}
                                                className={`w-1.5 h-1.5 rounded-full transition-all ${i === currentIndex ? "bg-[#00FF41] w-4" : "bg-gray-600 hover:bg-gray-400"
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
