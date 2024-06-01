'use client';

import {
  Badge,
  Button,
  Card,
  Center,
  em,
  Flex,
  SimpleGrid,
  Text,
  Title,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Image from 'next/image';

export function Projects() {
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);

  return (
    <Flex direction="column" gap="xl" my="md">
      <Center>
        <Badge p="md">
          <Title
            order={4}
            ta="center"
            style={{
              letterSpacing: '-0.05em',
            }}
            tt="capitalize"
          >
            Projects
          </Title>
        </Badge>
      </Center>
      <SimpleGrid
        cols={isMobile ? 1 : 3}
        spacing={isMobile ? 'xl' : 'lg'}
        p={isMobile ? 'lg' : ''}
      >
        {Array.from({ length: 3 }).map((_, index) => (
          <Card
            padding="lg"
            radius="md"
            withBorder
            h="16rem"
            w={isMobile ? '100%' : 'auto'}
            key={index}
            style={{
              boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
            }}
          >
            <Flex direction="column" justify="space-between" h="100%">
              <Flex direction="column" gap="sm">
                <Text
                  fw={800}
                  style={{
                    letterSpacing: '-0.05em',
                  }}
                >
                  GSMS 2024{' '}
                </Text>
                <Flex direction="row" gap="xs">
                  <Badge size="xs">Next.js</Badge>
                  <Badge size="xs">Typescript</Badge>
                  <Badge size="xs">GraphQL</Badge>
                </Flex>
                <Flex h="70%">
                  <Image
                    src="https://images.unsplash.com/photo-1716154220479-8caffe787065?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="image"
                    height={500}
                    width={500}
                    style={{
                      borderRadius: '10px',
                      width: '100%',
                      height: '90%',
                    }}
                  />
                </Flex>
              </Flex>
            </Flex>
          </Card>
        ))}
      </SimpleGrid>
      <Button radius="md">View More Projects...</Button>
    </Flex>
  );
}
