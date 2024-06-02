'use client';

import { Button, Center, Container, Flex } from '@mantine/core';
import Lottie from 'lottie-react';
import Link from 'next/link';

import notfoundAnimation from '~/lottie/not-found.json';

const NotFoundPageFeatures: React.FC = () => (
  <Container
    pt="md"
    style={{
      width: '100vw',
      height: '100vh',
    }}
  >
    <Flex
      align="center"
      justify="center"
      direction="column"
      style={{
        height: '50%',
        width: '100%',
      }}
    >
      <Lottie animationData={notfoundAnimation} loop height={50} width={50} />
    </Flex>
    <Center>
      <Link href="/">
        <Button size="lg" radius="md">
          Go back to home
        </Button>
      </Link>
    </Center>
  </Container>
);

export default NotFoundPageFeatures;
