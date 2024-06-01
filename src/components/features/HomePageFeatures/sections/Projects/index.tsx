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

import { projects } from '@/data/projects';

const shimmer = (w: number, h: number) => `
  <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#333" offset="20%" />
        <stop stop-color="#222" offset="50%" />
        <stop stop-color="#333" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#333" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
  </svg>`;

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

const dataUrl = `data:image/svg+xml;base64,${toBase64(shimmer(600, 400))}`;

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
        {projects.map((val) => (
          <Card
            padding="lg"
            radius="md"
            withBorder
            h="15rem"
            w={isMobile ? '100%' : 'auto'}
            key={val.name}
            style={{
              boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
            }}
          >
            <Flex direction="column" justify="space-between" h="100%">
              <Flex
                direction="column"
                gap="lg"
                justify="space-beetwen"
                h="100%"
              >
                <Flex
                  direction="column"
                  gap="xs"
                  justify="space-beetwen"
                  style={{
                    width: '100%',
                    height: '30%',
                  }}
                >
                  <Text
                    fw={800}
                    style={{
                      letterSpacing: '-0.05em',
                    }}
                  >
                    {val.name}
                  </Text>
                  <Flex direction="row" gap="xs">
                    {val.techStacks.map((tech) => (
                      <Badge key={tech} size="xs">
                        {tech}
                      </Badge>
                    ))}
                  </Flex>
                </Flex>
                <Flex h="70%" direction="column" align="end">
                  <Image
                    src={val.image}
                    placeholder="blur"
                    blurDataURL={dataUrl}
                    alt="image"
                    height={700}
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
