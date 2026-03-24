import { Metadata } from "next";
import { notFound } from "next/navigation";
import PrivacyPolicyClient from "./PrivacyPolicyClient";
import { privacyPolicies } from "@/data/privacyPolicies";
import { projects } from "@/data/projects";

export function generateStaticParams() {
    return privacyPolicies.map((policy) => ({
        slug: policy.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const policy = privacyPolicies.find((entry) => entry.slug === slug);

    if (!policy) {
        return {
            title: "Privacy Policy | DiskFactory",
        };
    }

    const appName =
        policy.appName.ko === policy.appName.en
            ? policy.appName.ko
            : `${policy.appName.ko} | ${policy.appName.en}`;

    return {
        title: `${appName} Privacy Policy | 개인정보처리방침 | DiskFactory`,
        description: `${policy.summary.ko} ${policy.summary.en}`,
    };
}

export default async function PrivacyPolicyPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const policy = privacyPolicies.find((entry) => entry.slug === slug);

    if (!policy) {
        return notFound();
    }

    const project = projects.find((entry) => entry.id === policy.projectId);

    return <PrivacyPolicyClient policy={policy} project={project} />;
}
