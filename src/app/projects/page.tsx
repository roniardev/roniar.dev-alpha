'use server';

import ProjectsPageFeatures from '@/components/features/ProjectsPageFeatures';
import PageLayout from '@/components/layouts/PageLayout';

import { reader } from '@/app/reader';

export default async function ProjectsPage() {
  const projects = await reader.collections.projects.all();

  return (
    <PageLayout>
      <ProjectsPageFeatures projects={projects} />
    </PageLayout>
  );
}
