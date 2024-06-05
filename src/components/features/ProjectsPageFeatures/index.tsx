'use server';

import { Container } from '@mantine/core';

import { ListProjects } from './section/ListProjects';

type Project = {
  slug: string;
  entry: {
    name: string;
    date: string | null;
    tags: readonly string[];
    thumbnailUrlImage: string | null;
    projectUrl: string | null;
    richText: () => Promise<string>;
  };
};

type Props = {
  projects: Project[];
};

async function ProjectsPageFeatures(props: Props) {
  return (
    <Container w="100%">
      <ListProjects projects={props.projects as any} />
    </Container>
  );
}

export default ProjectsPageFeatures;
