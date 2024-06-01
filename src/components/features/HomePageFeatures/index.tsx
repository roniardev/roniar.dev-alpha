import { Container, Flex } from '@mantine/core';

import SmoothScroll from '@/components/ui/SmoothScroll';

import { Experiences } from './sections/Experiences';
import { Introduction } from './sections/Introduction';
import { Projects } from './sections/Projects';

const HomePageFeatures: React.FC = () => (
  <Container pt="md">
    <SmoothScroll>
      <Introduction />
      <Flex direction="column" gap="md" mt="md">
        <Experiences />
        <Projects />
      </Flex>
    </SmoothScroll>
  </Container>
);

export default HomePageFeatures;
