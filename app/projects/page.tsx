"use client";

import { ArrowLeft, Gamepad2 } from "lucide-react";
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
    back: { ko: "홈으로", en: "BACK HOME", "pt-BR": "VOLTAR AO INÍCIO" },
    title: { ko: "게임 보관함", en: "GAME SHELF", "pt-BR": "COLEÇÃO DE JOGOS" },
    description: {
      ko: "디스크팩토리에서 만든 모든 게임을 모았습니다. 마음에 드는 게임을 골라 자세히 살펴보세요!",
      en: "Every DiskFactory game lives here. Pick one that catches your eye and take a closer look!",
      "pt-BR": "Todos os jogos da DiskFactory estão aqui. Escolha o seu favorito e veja mais detalhes!",
    },
    count: {
      ko: `현재 ${projects.length}개의 게임`,
      en: `${projects.length} GAMES AND COUNTING`,
      "pt-BR": `${projects.length} JOGOS E CONTANDO`,
    },
  };

  return (
    <main className="casual-shell min-h-screen overflow-hidden">
      <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link href={localizeHref("/", locale)} className="play-button bg-white px-4 py-2.5 text-sm">
          <ArrowLeft size={17} /> {getLocalizedText(copy.back, locale)}
        </Link>
        <LanguageToggle />
      </header>

      <Section className="relative pb-10 pt-20 text-center sm:pt-28">
        <div className="mx-auto max-w-4xl">
          <div className="sticker mx-auto mb-7 grid h-20 w-20 rotate-[-5deg] place-items-center rounded-[1.7rem] bg-[#ffd95a]">
            <Gamepad2 size={36} />
          </div>
          <h1 className="text-5xl font-black tracking-[-0.055em] sm:text-7xl">
            {getLocalizedText(copy.title, locale)}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-relaxed text-[#66627c] sm:text-xl">
            {getLocalizedText(copy.description, locale)}
          </p>
          <div className="mt-7 inline-flex rounded-full border-2 border-[#252442] bg-[#dff8f0] px-4 py-2 text-xs font-black tracking-[0.14em]">
            {getLocalizedText(copy.count, locale)}
          </div>
        </div>
      </Section>

      <Section className="pb-32 pt-12">
        <div className="grid grid-cols-1 gap-9 md:grid-cols-2">
          {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      </Section>

      <footer className="border-t-2 border-[#252442] bg-[#6c7cff] px-6 py-10 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
          <Link href={localizeHref("/", locale)} className="text-xl font-black">DISKFACTORY</Link>
          <span className="text-sm font-bold">MADE FOR FUN ✦</span>
        </div>
      </footer>
    </main>
  );
}
