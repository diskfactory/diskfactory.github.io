import { Metadata } from "next";
import { notFound } from "next/navigation";
import AccountDeletionClient from "./AccountDeletionClient";
import { accountDeletionGuides } from "@/data/accountDeletionGuides";
import { projects } from "@/data/projects";

export function generateStaticParams() {
    return accountDeletionGuides.map((guide) => ({
        slug: guide.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const guide = accountDeletionGuides.find((entry) => entry.slug === slug);

    if (!guide) {
        return {
            title: "Account Deletion Request | DiskFactory",
        };
    }

    const appName =
        guide.appName.ko === guide.appName.en
            ? guide.appName.ko
            : `${guide.appName.ko} | ${guide.appName.en}`;

    return {
        title: `${appName} Account Deletion Request | 계정 삭제 요청 | DiskFactory`,
        description: `${guide.appName.ko} 계정 및 관련 데이터 삭제 요청 안내 페이지입니다.`,
    };
}

export default async function AccountDeletionPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const guide = accountDeletionGuides.find((entry) => entry.slug === slug);

    if (!guide) {
        return notFound();
    }

    const project = projects.find((entry) => entry.id === guide.projectId);

    return <AccountDeletionClient guide={guide} project={project} />;
}
