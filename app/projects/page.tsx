"use client";

import { ArrowLeft, Gamepad2, Mail } from "lucide-react";
import Link from "next/link";
import { LanguageToggle } from "@/components/LanguageToggle";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { useLocale } from "@/components/LocaleProvider";
import { projects } from "@/data/projects";
import { getLocalizedText, localizeHref } from "@/lib/i18n";

export default function ProjectsPage() {
  const { locale } = useLocale();
  const copy = {
    backHome: {
      ko: "홈으로",
      en: "BACK HOME",
      "pt-BR": "VOLTAR AO INÍCIO",
    },
    eyebrow: {
      ko: "DISKFACTORY ARCHIVE",
      en: "DISKFACTORY ARCHIVE",
      "pt-BR": "ARQUIVO DISKFACTORY",
    },
    title: {
      ko: "전체 프로젝트",
      en: "ALL PROJECTS",
      "pt-BR": "TODOS OS PROJETOS",
    },
    description: {
      ko: "디스크팩토리가 만들고 운영해 온 게임을 한곳에서 만나보세요.",
      en: "Explore every game created and operated by DiskFactory in one place.",
      "pt-BR": "Conheça em um só lugar todos os jogos criados e operados pela DiskFactory.",
    },
    projectCount: {
      ko: `총 ${projects.length}개의 프로젝트`,
      en: `${projects.length} PROJECTS`,
      "pt-BR": `${projects.length} PROJETOS`,
    },
    rights: {
      ko: "© 2026 DiskFactory. All rights reserved.",
      en: "© 2026 DiskFactory. All rights reserved.",
      "pt-BR": "© 2026 DiskFactory. Todos os direitos reservados.",
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
  };

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      <div
        className="absolute inset-x-0 top-0 h-[42rem] opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 0%, rgba(0, 255, 65, 0.18) 0%, rgba(26, 26, 26, 0.35) 32%, transparent 72%)",
        }}
      />

      <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link
          href={localizeHref("/", locale)}
          className="group inline-flex items-center gap-2 text-sm font-bold text-gray-300 transition-colors hover:text-[#00FF41] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00FF41]"
        >
          <ArrowLeft size={17} className="transition-transform group-hover:-translate-x-1" />
          {getLocalizedText(copy.backHome, locale)}
        </Link>
        <LanguageToggle />
      </header>

      <Section className="relative z-10 pt-24 sm:pt-32">
        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-2 font-mono text-xs font-bold tracking-[0.2em] text-[#00FF41]">
            <Gamepad2 size={16} />
            {getLocalizedText(copy.eyebrow, locale)}
          </div>
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
            {getLocalizedText(copy.title, locale)}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400 sm:text-xl">
            {getLocalizedText(copy.description, locale)}
          </p>
        </div>

        <div className="mt-16 flex items-center gap-4 border-b border-gray-800 pb-5">
          <span className="h-2 w-2 rounded-full bg-[#00FF41] shadow-[0_0_12px_rgba(0,255,65,0.8)]" />
          <p className="font-mono text-sm text-gray-400">
            {getLocalizedText(copy.projectCount, locale)}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Section>

      <footer className="relative z-10 mt-10 border-t border-gray-900 px-6 py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <Link
              href={localizeHref("/", locale)}
              className="text-2xl font-bold transition-colors hover:text-[#00FF41]"
            >
              DISKFACTORY
            </Link>
            <p className="mt-2 text-sm text-gray-500">
              {getLocalizedText(copy.rights, locale)}
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 sm:gap-8">
            <Link
              href={localizeHref("/terms", locale)}
              className="transition-colors hover:text-[#00FF41]"
            >
              {getLocalizedText(copy.terms, locale)}
            </Link>
            <Link
              href={localizeHref("/privacy", locale)}
              className="transition-colors hover:text-[#00FF41]"
            >
              {getLocalizedText(copy.privacy, locale)}
            </Link>
            <a
              href="mailto:contact@diskfactory.com"
              className="flex items-center gap-2 transition-colors hover:text-[#00FF41]"
            >
              <Mail size={16} /> CONTACT
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
