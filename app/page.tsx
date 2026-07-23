"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { Gamepad2, Database, Mail, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import Link from "next/link";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLocale } from "@/components/LocaleProvider";
import { getLocalizedText, localizeHref } from "@/lib/i18n";
import { ProjectCard } from "@/components/ProjectCard";

export default function Home() {
  const { locale } = useLocale();
  const copy = {
    subtitle: {
      ko: "디스크팩토리(DiskFactory)는 재미있는 상상력을 현실로 만드는 1인 게임 개발 스튜디오입니다.",
      en: "DiskFactory is a solo game development studio turning playful ideas into real games.",
      "pt-BR": "A DiskFactory é um estúdio solo de jogos que transforma ideias divertidas em jogos reais.",
    },
    projectsTitle: {
      ko: "프로젝트",
      en: "CURRENT PROJECTS",
      "pt-BR": "PROJETOS ATUAIS",
    },
    viewAllProjects: {
      ko: "전체 프로젝트 보기",
      en: "VIEW ALL PROJECTS",
      "pt-BR": "VER TODOS OS PROJETOS",
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
  const featuredProjects = projects.slice(0, 4);

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #1a1a1a 0%, transparent 100%)' }} />

      <header className="absolute inset-x-0 top-0 z-20 flex justify-end px-6 py-6">
        <LanguageToggle />
      </header>

      {/* Hero Section */}
      <Section className="flex flex-col items-center justify-center min-h-[80vh] text-center pt-32">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="mb-8"
        >
          <div className="w-24 h-24 bg-white rounded-xl flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.3)] mx-auto">
            <Database className="text-black w-12 h-12" />
          </div>
        </motion.div>

        <motion.h1
          className="text-6xl md:text-8xl font-bold tracking-tighter mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          DISK<span className="text-[#00FF41]">FACTORY</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {getLocalizedText(copy.subtitle, locale)}
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex gap-4"
        >
          {/* <button className="px-8 py-4 bg-[#00FF41] text-black font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2">
            게임 보러가기 <ArrowRight size={20} />
          </button>
          <button className="px-8 py-4 border border-gray-700 rounded-full hover:bg-gray-900 transition-colors">
            소개
          </button> */}
        </motion.div>
      </Section>

      {/* Projects Section */}
      <Section id="projects">
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-4xl font-bold flex items-center gap-3">
            <Gamepad2 className="text-[#00FF41]" /> {getLocalizedText(copy.projectsTitle, locale)}
          </h2>
          <Link
            href={localizeHref("/projects", locale)}
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-gray-700 px-5 py-3 text-sm font-bold text-gray-200 transition-colors hover:border-[#00FF41] hover:text-[#00FF41] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00FF41]"
          >
            {getLocalizedText(copy.viewAllProjects, locale)}
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Section>

      {/* About / Philosophy 임시 주석 */}
      {/* <Section className="bg-gray-900/10 rounded-3xl mb-20">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">PHILOSOPHY</h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            "Disk"는 데이터의 저장소이자, 우리의 신체를 지탱하는 척추의 중심이기도 합니다.
            기초를 탄탄히 하고, 그 위에 즐거움을 쌓아 올리는 것이 디스크팩토리의 철학입니다.
          </p>
          <div className="grid grid-cols-2 gap-4 text-sm font-mono text-gray-500">
            <div className="flex items-center gap-2 italic">/ CD-ROM READY</div>
            <div className="flex items-center gap-2 italic">/ SPINE SECURED</div>
            <div className="flex items-center gap-2 italic">/ CREATIVITY LOADED</div>
            <div className="flex items-center gap-2 italic">/ 1-MAN STUDIO</div>
          </div>
        </div>
      </Section> */}

      {/* Footer */}
      <footer className="border-t border-gray-900 py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div>
            <div className="text-2xl font-bold mb-2">DISKFACTORY</div>
            <p className="text-gray-500 text-sm">{getLocalizedText(copy.rights, locale)}</p>
          </div>
          <div className="flex gap-8 text-sm text-gray-400">
            <Link href={localizeHref("/terms", locale)} className="hover:text-[#00FF41] transition-colors">{getLocalizedText(copy.terms, locale)}</Link>
            <Link href={localizeHref("/privacy", locale)} className="hover:text-[#00FF41] transition-colors">{getLocalizedText(copy.privacy, locale)}</Link>
            <a href="mailto:contact@diskfactory.com" className="flex items-center gap-2 hover:text-[#00FF41] transition-colors">
              <Mail size={16} /> CONTACT
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
