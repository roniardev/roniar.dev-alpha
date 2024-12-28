import { Container, Flex } from '@mantine/core';
import dynamic from 'next/dynamic';

const Experiences = dynamic(() => import('./sections/Experiences'));
const Introduction = dynamic(() => import('./sections/Introduction'));
const Projects = dynamic(() => import('./sections/Projects'));

const HomePageFeatures: React.FC = () => (
  <Container pt="md">
    <Introduction />
    <Flex direction="column" mt="sm">
      <Experiences />
      <Projects />
    </Flex>
  </Container>
);

export default HomePageFeatures;
