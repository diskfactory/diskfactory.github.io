"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ExternalLink, ChevronRight, X, ChevronLeft as LeftIcon, ChevronRight as RightIcon, Shield, Trash2, FileText } from "lucide-react";
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
    const [galleryIndex, setGalleryIndex] = useState(0);
    const projectTitle = getLocalizedText(project.title, locale);

    // Build unified gallery items: youtube first, then screenshots
    const galleryItems: { type: "youtube" | "image"; src: string }[] = [];
    if (project.youtubeId) {
        galleryItems.push({ type: "youtube", src: project.youtubeId });
    }
    project.screenshots.forEach((sc) => {
        galleryItems.push({ type: "image", src: sc });
    });

    const copy = {
        back: {
            ko: "프로젝트 목록으로",
            en: "Back to Projects",
            "pt-BR": "Voltar aos projetos",
        },
        privacy: {
            ko: "개인정보 처리방침",
            en: "Privacy Policy",
            "pt-BR": "Política de Privacidade",
        },
        terms: {
            ko: "서비스 이용약관",
            en: "Terms of Service",
            "pt-BR": "Termos de Serviço",
        },
        accountDeletion: {
            ko: "계정 삭제 요청 안내",
            en: "Account Deletion Request",
            "pt-BR": "Solicitação de exclusão da conta",
        },
        gallery: {
            ko: "갤러리",
            en: "GALLERY",
            "pt-BR": "GALERIA",
        },
        features: {
            ko: "주요 특징",
            en: "KEY FEATURES",
            "pt-BR": "RECURSOS PRINCIPAIS",
        },
        imageNotFound: {
            ko: "이미지를 찾을 수 없습니다",
            en: "Image Not Found",
            "pt-BR": "Imagem não encontrada",
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
        <main className="casual-shell min-h-screen text-[#252442]">
            {/* Navigation */}
            <nav className="mx-auto max-w-7xl p-6 flex flex-row items-center justify-between gap-4">
                <Link href={localizeHref("/projects", locale)} className="play-button bg-white px-4 py-2.5 text-sm">
                    <ArrowLeft size={20} /> {getLocalizedText(copy.back, locale)}
                </Link>
                <LanguageToggle />
            </nav>

            <Section className="pt-12">
                <div className="grid grid-cols-1 lg:grid-cols-[0.92fr_1.45fr] gap-14">
                    {/* Left: Info */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="sticky top-10"
                        >
                            <div
                                className="sticker w-28 h-28 bg-white rounded-[2rem] mb-8 p-2 flex items-center justify-center overflow-hidden cursor-pointer -rotate-3 transition-transform hover:rotate-1"
                                onClick={() => project.icon && openViewer(project.icon, -1)}
                            >
                                {project.icon ? (
                                    <img src={project.icon} alt={projectTitle} className="w-full h-full object-cover" />
                                ) : (
                                    <span className="text-[10px] text-[#77738b]">ICON</span>
                                )}
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">{projectTitle}</h1>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs font-black bg-[#fff0ad] px-3 py-1.5 rounded-full border border-[#252442]">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <p className="text-[#66627c] whitespace-pre-line leading-relaxed mb-8 text-lg">
                                {getLocalizedText(project.fullDescription, locale)}
                            </p>

                            <div className="flex flex-col gap-4">
                                {project.links?.playstore && (
                                    <a
                                        href={project.links.playstore}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="play-button justify-start bg-[#6c7cff] text-white px-6 py-3.5"
                                    >
                                        <ExternalLink size={18} /> Google Play
                                    </a>
                                )}
                                {project.links?.appstore && (
                                    <a
                                        href={project.links.appstore}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="play-button justify-start bg-white px-6 py-3.5"
                                    >
                                        <ExternalLink size={18} /> App Store
                                    </a>
                                )}
                                {project.links?.steam && (
                                    <a
                                        href={project.links.steam}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="play-button justify-start bg-[#dff8f0] px-6 py-3.5"
                                    >
                                        <ExternalLink size={18} /> Steam
                                    </a>
                                )}
                                {project.privacySlug && (
                                    <Link
                                        href={localizeHref(`/privacy/${project.privacySlug}`, locale)}
                                        className="inline-flex items-center gap-3 rounded-full border-2 border-[#252442]/15 px-5 py-3 text-sm font-bold text-[#5d5a78] hover:border-[#6c7cff] hover:text-[#6c7cff] transition-colors"
                                    >
                                        <Shield size={18} /> {getLocalizedText(copy.privacy, locale)}
                                    </Link>
                                )}
                                {project.termsSlug && (
                                    <Link
                                        href={localizeHref(`/terms/${project.termsSlug}`, locale)}
                                        className="inline-flex items-center gap-3 rounded-full border-2 border-[#252442]/15 px-5 py-3 text-sm font-bold text-[#5d5a78] hover:border-[#ff7163] hover:text-[#ff7163] transition-colors"
                                    >
                                        <FileText size={18} /> {getLocalizedText(copy.terms, locale)}
                                    </Link>
                                )}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Gallery & Features */}
                    <div className="space-y-16">
                        {galleryItems.length > 0 && (
                            <div>
                                <h2 className="text-2xl font-black mb-7 flex items-center gap-2">
                                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#ffd95a] border-2 border-[#252442]"><ChevronRight size={20} /></span>
                                    {getLocalizedText(copy.gallery, locale)}
                                </h2>
                                <div className="game-card relative bg-[#e7e5ff] p-5 sm:p-8">
                                    {/* Current Item */}
                                    <div className="aspect-[9/16] max-w-sm mx-auto bg-[#252442] rounded-[1.6rem] border-2 border-[#252442] overflow-hidden shadow-[5px_5px_0_#252442]">
                                        {galleryItems[galleryIndex].type === "youtube" ? (
                                            <iframe
                                                src={`https://www.youtube.com/embed/${galleryItems[galleryIndex].src}`}
                                                className="w-full h-full"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            />
                                        ) : (
                                            <img
                                                src={galleryItems[galleryIndex].src}
                                                alt={`${projectTitle} ${galleryIndex + 1}`}
                                                className="w-full h-full object-cover cursor-pointer"
                                                onClick={() => openViewer(galleryItems[galleryIndex].src, galleryIndex)}
                                                onError={(e) => {
                                                    const target = e.target as HTMLImageElement;
                                                    target.style.display = 'none';
                                                    target.parentElement!.innerText = getLocalizedText(copy.imageNotFound, locale);
                                                }}
                                            />
                                        )}
                                    </div>

                                    {/* Arrow Navigation */}
                                    {galleryItems.length > 1 && (
                                        <>
                                            <button
                                                onClick={() => setGalleryIndex((galleryIndex - 1 + galleryItems.length) % galleryItems.length)}
                                                aria-label="Previous gallery item"
                                                className="absolute left-1 top-1/2 -translate-y-1/2 rounded-full border-2 border-[#252442] bg-white p-2 text-[#252442] transition-transform hover:-translate-x-1 sm:left-5"
                                            >
                                                <LeftIcon size={36} />
                                            </button>
                                            <button
                                                onClick={() => setGalleryIndex((galleryIndex + 1) % galleryItems.length)}
                                                aria-label="Next gallery item"
                                                className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full border-2 border-[#252442] bg-white p-2 text-[#252442] transition-transform hover:translate-x-1 sm:right-5"
                                            >
                                                <RightIcon size={36} />
                                            </button>
                                        </>
                                    )}

                                    {/* Thumbnail Previews */}
                                    {galleryItems.length > 1 && (
                                        <div className="flex justify-center gap-2 mt-4 overflow-x-auto py-1">
                                            {galleryItems.map((item, i) => (
                                                <button
                                                    key={i}
                                                    onClick={() => setGalleryIndex(i)}
                                                    className={`relative w-14 h-24 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${i === galleryIndex ? "border-[#ff7163] opacity-100 translate-y-[-2px]" : "border-[#252442]/20 opacity-60 hover:opacity-90"}`}
                                                >
                                                    {item.type === "youtube" ? (
                                                        <div className="w-full h-full bg-[#252442] flex items-center justify-center">
                                                            <svg viewBox="0 0 24 24" className="w-5 h-5 text-red-500 fill-current"><path d="M8 5v14l11-7z" /></svg>
                                                        </div>
                                                    ) : (
                                                        <img src={item.src} alt="" className="w-full h-full object-cover" />
                                                    )}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {project.features.length > 0 && (
                            <div className="game-card bg-[#fffdf8] p-8 sm:p-10">
                                <h2 className="text-2xl font-black mb-8 flex items-center gap-3">
                                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#65ddbd] border-2 border-[#252442]"><ChevronRight size={20} /></span>
                                    {getLocalizedText(copy.features, locale)}
                                </h2>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {project.features.map((feature, i) => (
                                        <li key={i} className="flex gap-4 items-start">
                                            <div className="mt-1.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border-2 border-[#252442] bg-[#fff0ad] text-xs font-black">{i + 1}</div>
                                            <span className="text-[#5d5a78] font-semibold leading-snug">{getLocalizedText(feature, locale)}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </Section>

            <footer className="py-16 text-center border-t-2 border-[#252442] bg-white/50 mt-20 px-6">
                <p className="text-[#77738b] text-sm font-semibold">© 2026 DiskFactory | {projectTitle}</p>
                {(project.privacySlug || project.termsSlug || project.accountDeletionSlug) && (
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                        {project.termsSlug && (
                            <Link
                                href={localizeHref(`/terms/${project.termsSlug}`, locale)}
                                className="inline-flex items-center gap-2 rounded-full border-2 border-[#252442]/15 px-4 py-2 text-xs font-bold text-[#66627c] hover:border-[#6c7cff] hover:text-[#6c7cff] transition-colors"
                            >
                                <FileText size={14} /> {getLocalizedText(copy.terms, locale)}
                            </Link>
                        )}
                        {project.privacySlug && (
                            <Link
                                href={localizeHref(`/privacy/${project.privacySlug}`, locale)}
                                className="inline-flex items-center gap-2 rounded-full border-2 border-[#252442]/15 px-4 py-2 text-xs font-bold text-[#66627c] hover:border-[#6c7cff] hover:text-[#6c7cff] transition-colors"
                            >
                                <Shield size={14} /> {getLocalizedText(copy.privacy, locale)}
                            </Link>
                        )}
                        {project.accountDeletionSlug && (
                            <Link
                                href={localizeHref(`/account-deletion/${project.accountDeletionSlug}`, locale)}
                                className="inline-flex items-center gap-2 rounded-full border-2 border-[#ff7163]/40 px-4 py-2 text-xs font-bold text-[#d95449] hover:bg-[#ffe6e2] transition-colors"
                            >
                                <Trash2 size={14} /> {getLocalizedText(copy.accountDeletion, locale)}
                            </Link>
                        )}
                    </div>
                )}
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
