"use client";

import { motion } from "framer-motion";
import { ArrowRight, Gamepad2, Mail, Sparkles } from "lucide-react";
import Link from "next/link";
import { LanguageToggle } from "@/components/LanguageToggle";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { useLocale } from "@/components/LocaleProvider";
import { projects } from "@/data/projects";
import { getLocalizedText, localizeHref } from "@/lib/i18n";

export default function Home() {
  const { locale } = useLocale();
  const featuredProjects = projects.slice(0, 4);
  const copy = {
    studio: {
      ko: "작지만 즐거움은 크게",
      en: "SMALL TEAM, BIG FUN",
      "pt-BR": "TIME PEQUENO, DIVERSÃO GIGANTE",
    },
    headline: {
      ko: "재밌는 게임을\n만들고 싶어요!",
      en: "I WANT TO MAKE\nFUN GAMES!",
      "pt-BR": "QUERO CRIAR\nJOGOS DIVERTIDOS!",
    },
    subtitle: {
      ko: "디스크팩토리는 가볍게 시작해 오래 즐길 수 있는 캐주얼 게임을 만드는 1인 게임 스튜디오입니다.",
      en: "DiskFactory is a solo game studio making casual games that are easy to start and fun to keep playing.",
      "pt-BR": "A DiskFactory é um estúdio solo que cria jogos casuais fáceis de começar e gostosos de continuar jogando.",
    },
    explore: {
      ko: "게임 둘러보기",
      en: "EXPLORE GAMES",
      "pt-BR": "VER JOGOS",
    },
    projectsTitle: {
      ko: "지금까지 만든 게임",
      en: "GAMES WE'VE MADE",
      "pt-BR": "JOGOS QUE CRIAMOS",
    },
    projectsDescription: {
      ko: "빠른 액션부터 한 손 퍼즐까지, 작은 아이디어를 재미있는 플레이로 다듬었습니다.",
      en: "From quick action to one-handed puzzles, each small idea is shaped into playful moments.",
      "pt-BR": "Da ação rápida aos puzzles com uma mão, transformamos pequenas ideias em momentos divertidos.",
    },
    viewAll: {
      ko: "전체 프로젝트 보기",
      en: "VIEW ALL PROJECTS",
      "pt-BR": "VER TODOS OS PROJETOS",
    },
    noteTitle: {
      ko: "재미를 만드는 작은 공장",
      en: "A TINY FACTORY FOR FUN",
      "pt-BR": "UMA PEQUENA FÁBRICA DE DIVERSÃO",
    },
    note: {
      ko: "쉽게 이해하고, 기분 좋게 반응하고, 한 번 더 플레이하고 싶은 경험을 만듭니다.",
      en: "We make experiences that are easy to understand, satisfying to play, and tempting to try one more time.",
      "pt-BR": "Criamos experiências fáceis de entender, gostosas de jogar e que dão vontade de tentar mais uma vez.",
    },
    rights: {
      ko: "© 2026 DiskFactory. 재미를 계속 만드는 중!",
      en: "© 2026 DiskFactory. Still making fun!",
      "pt-BR": "© 2026 DiskFactory. Continuamos criando diversão!",
    },
    privacy: { ko: "개인정보 처리방침", en: "Privacy Policy", "pt-BR": "Política de Privacidade" },
    terms: { ko: "서비스 이용약관", en: "Terms of Service", "pt-BR": "Termos de Serviço" },
  };

  return (
    <main className="casual-shell min-h-screen overflow-hidden">
      <header className="relative z-30 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link href={localizeHref("/", locale)} className="flex items-center font-black tracking-tight">
          <span className="text-lg sm:text-xl">DISKFACTORY</span>
        </Link>
        <div className="flex items-center gap-3">
          <Link
            href={localizeHref("/projects", locale)}
            className="hidden text-sm font-extrabold text-[#5d5a78] transition-colors hover:text-[#6c7cff] sm:block"
          >
            PROJECTS
          </Link>
          <LanguageToggle />
        </div>
      </header>

      <Section className="relative grid min-h-[44rem] items-center gap-14 pb-28 pt-14 lg:grid-cols-[1.08fr_0.92fr] lg:pt-10">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border-2 border-[#252442] bg-[#dff8f0] px-4 py-2 text-xs font-black tracking-[0.15em]"
          >
            <Sparkles size={15} className="text-[#ff7163]" />
            {getLocalizedText(copy.studio, locale)}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="whitespace-pre-line text-[clamp(3.25rem,8vw,6.8rem)] font-black leading-[0.93] tracking-[-0.065em]"
          >
            {getLocalizedText(copy.headline, locale)}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="mt-8 max-w-2xl text-lg font-medium leading-relaxed text-[#66627c] sm:text-xl"
          >
            {getLocalizedText(copy.subtitle, locale)}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Link href="#projects" className="play-button bg-[#6c7cff] px-6 py-3.5 text-white">
              <Gamepad2 size={19} /> {getLocalizedText(copy.explore, locale)}
            </Link>
            <a href="mailto:contact@diskfactory.com" className="play-button bg-white px-6 py-3.5">
              <Mail size={18} /> CONTACT
            </a>
          </motion.div>
        </div>

        <div className="dot-grid relative mx-auto h-[30rem] w-full max-w-[34rem] rounded-[3.5rem] border-2 border-[#252442] bg-[#aeb8ff]/70">
          <div className="absolute -left-5 top-16 h-24 w-24 rotate-12 rounded-[2rem] bg-[#ffd95a]" />
          <div className="absolute -right-5 bottom-16 h-28 w-28 -rotate-12 rounded-full bg-[#65ddbd]" />
          {featuredProjects.map((project, index) => {
            const positions = [
              "left-[8%] top-[10%] -rotate-6",
              "right-[7%] top-[19%] rotate-6",
              "left-[17%] bottom-[10%] rotate-3",
              "right-[14%] bottom-[7%] -rotate-5",
            ];
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.7, y: 25 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.25 + index * 0.1, type: "spring" }}
                className={`sticker absolute ${positions[index]} h-32 w-32 overflow-hidden rounded-[2rem] bg-white p-2 sm:h-40 sm:w-40`}
              >
                <img
                  src={project.icon}
                  alt={getLocalizedText(project.title, locale)}
                  className="h-full w-full rounded-[1.45rem] object-cover"
                />
              </motion.div>
            );
          })}
          <div className="sticker absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-3deg] rounded-2xl bg-[#ff7163] px-5 py-3 text-lg font-black text-white">
            TAP · SWIPE · PLAY!
          </div>
        </div>
      </Section>

      <div className="border-y-2 border-[#252442] bg-[#ffd95a] py-3">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-5 overflow-hidden whitespace-nowrap px-6 text-sm font-black tracking-[0.16em]">
          <span>CASUAL GAMES</span><span>✦</span><span>PLAYFUL IDEAS</span><span>✦</span><span>MADE WITH CARE</span>
        </div>
      </div>

      <Section id="projects" className="py-28">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-sm font-black tracking-[0.16em] text-[#ff7163]">OUR GAMES</p>
            <h2 className="text-4xl font-black tracking-tight sm:text-6xl">
              {getLocalizedText(copy.projectsTitle, locale)}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#66627c]">
              {getLocalizedText(copy.projectsDescription, locale)}
            </p>
          </div>
          <Link href={localizeHref("/projects", locale)} className="play-button w-fit bg-white px-5 py-3">
            {getLocalizedText(copy.viewAll, locale)} <ArrowRight size={17} />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-9 md:grid-cols-2">
          {featuredProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      </Section>

      <Section className="pb-28 pt-8">
        <div className="sticker relative overflow-hidden rounded-[2.5rem] bg-[#65ddbd] p-9 sm:p-14">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#ffd95a]" />
          <p className="relative text-sm font-black tracking-[0.16em]">DISKFACTORY MANIFESTO</p>
          <h2 className="relative mt-4 max-w-3xl text-3xl font-black leading-tight sm:text-5xl">
            {getLocalizedText(copy.noteTitle, locale)}
          </h2>
          <p className="relative mt-5 max-w-3xl text-lg font-semibold leading-relaxed text-[#46435f]">
            {getLocalizedText(copy.note, locale)}
          </p>
        </div>
      </Section>

      <footer className="border-t-2 border-[#252442] bg-white/60 px-6 py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <div className="text-2xl font-black">DISKFACTORY</div>
            <p className="mt-2 text-sm text-[#77738b]">{getLocalizedText(copy.rights, locale)}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm font-bold">
            <Link href={localizeHref("/terms", locale)} className="hover:text-[#6c7cff]">{getLocalizedText(copy.terms, locale)}</Link>
            <Link href={localizeHref("/privacy", locale)} className="hover:text-[#6c7cff]">{getLocalizedText(copy.privacy, locale)}</Link>
            <a href="mailto:contact@diskfactory.com" className="hover:text-[#ff7163]">CONTACT</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
