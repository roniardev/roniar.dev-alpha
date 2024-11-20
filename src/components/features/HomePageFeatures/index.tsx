import { Container, Flex } from '@mantine/core';

import { Experiences } from './sections/Experiences';
import { Introduction } from './sections/Introduction';
import { Projects } from './sections/Projects';

const HomePageFeatures: React.FC = () => (
  <Container pt="md">
    <Introduction />
    <Flex direction="column" gap="md" mt="md">
      <Experiences />
      <Projects />
    </Flex>
  </Container>
);

export default HomePageFeatures;
