import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projectIds, findProject } from '../../../../src/data/projects';
import { buildProjectMetadata } from '../../../siteMetadata';
import { CaseStudyPage } from '../../../../src/components/CaseStudyPage';

export function generateStaticParams() {
  return projectIds.map((slug) => ({ slug }));
}

// Every valid slug is enumerated above; there is no on-demand path to fall
// back to under `output: 'export'` anyway, but this makes it explicit.
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = findProject('da', slug);
  if (!project) return {};
  return buildProjectMetadata('da', project);
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = findProject('da', slug);
  if (!project) notFound();
  return <CaseStudyPage project={project} />;
}
