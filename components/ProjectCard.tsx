"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLocale } from "@/components/LocaleProvider";
import { getLocalizedText, localizeHref } from "@/lib/i18n";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { locale } = useLocale();
  const title = getLocalizedText(project.title, locale);

  return (
    <Link
      href={localizeHref(`/projects/${project.id}`, locale)}
      className="block h-full rounded-[28px] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#6c7cff]/50 focus-visible:ring-offset-4 focus-visible:ring-offset-[#fff9ef]"
    >
      <article className="game-card group cursor-pointer h-full overflow-hidden flex flex-col">
        {project.thumbnail && (
          <div className="w-full h-52 bg-[#e8e5ff] overflow-hidden relative border-b-2 border-[#252442]">
            <img
              src={project.thumbnail}
              alt=""
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </div>
        )}

        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <div className="flex items-start gap-4 mb-4">
            {project.icon && (
              <div className="sticker w-14 h-14 rounded-2xl overflow-hidden shrink-0 bg-white -rotate-2 transition-transform group-hover:rotate-2">
                <img src={project.icon} alt="" className="w-full h-full object-cover" />
              </div>
            )}
            <div className="min-w-0 flex-1">
              <h3 className="text-xl sm:text-2xl font-black text-[#252442] flex items-center gap-2">
                <span>{title}</span>
                <ArrowRight
                  size={20}
                  aria-hidden="true"
                  className="shrink-0 text-[#ff7163] transition-transform group-hover:translate-x-1"
                />
              </h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={tag}
                    className={`text-[10px] uppercase font-black tracking-wider px-2.5 py-1 rounded-full border border-[#252442] ${
                      index % 2 === 0 ? "bg-[#fff0ad]" : "bg-[#dff8f0]"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <p className="text-[#66627c] text-sm leading-relaxed flex-grow">
            {getLocalizedText(project.description, locale)}
          </p>
        </div>
      </article>
    </Link>
  );
}
