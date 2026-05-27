import { Metadata } from "next";
import { notFound } from "next/navigation";
import TermsOfServiceClient from "./TermsOfServiceClient";
import { termsOfService } from "@/data/termsOfService";
import { projects } from "@/data/projects";

export function generateStaticParams() {
    return termsOfService.map((entry) => ({
        slug: entry.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const terms = termsOfService.find((entry) => entry.slug === slug);

    if (!terms) {
        return {
            title: "Terms of Service | DiskFactory",
        };
    }

    const appName =
        terms.appName.ko === terms.appName.en
            ? terms.appName.ko
            : `${terms.appName.ko} | ${terms.appName.en}`;

    return {
        title: `${appName} Terms of Service | 서비스 이용약관 | DiskFactory`,
        description: `${terms.summary.ko} ${terms.summary.en}`,
    };
}

export default async function TermsOfServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const terms = termsOfService.find((entry) => entry.slug === slug);

    if (!terms) {
        return notFound();
    }

    const project = projects.find((entry) => entry.id === terms.projectId);

    return <TermsOfServiceClient terms={terms} project={project} />;
}
