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
      className="block h-full rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00FF41] focus-visible:ring-offset-4 focus-visible:ring-offset-black"
    >
      <article className="game-card p-6 sm:p-8 group cursor-pointer h-full flex flex-col">
        {project.thumbnail && (
          <div className="w-full h-48 bg-gray-900 rounded-md mb-6 overflow-hidden relative border border-gray-800 group-hover:border-[#00FF41]/30 transition-colors">
            <img
              src={project.thumbnail}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="flex items-start gap-4 mb-4">
          {project.icon && (
            <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-[10px] text-gray-600 border border-gray-700 overflow-hidden shrink-0">
              <img src={project.icon} alt="" className="w-full h-full object-cover" />
            </div>
          )}
          <div className="min-w-0">
            <h3 className="text-xl sm:text-2xl font-bold group-hover:text-[#00FF41] transition-colors flex items-center gap-2">
              <span>{title}</span>
              <ArrowRight
                size={18}
                aria-hidden="true"
                className="shrink-0 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-[#00FF41]"
              />
            </h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] uppercase tracking-wider bg-gray-900 text-gray-400 px-2 py-0.5 rounded border border-gray-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed flex-grow">
          {getLocalizedText(project.description, locale)}
        </p>
      </article>
    </Link>
  );
}
