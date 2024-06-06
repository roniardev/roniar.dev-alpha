'use server';

import {
  Badge,
  Center,
  Flex,
  Pagination,
  SimpleGrid,
  Text,
  Title,
} from '@mantine/core';
import dayjs from 'dayjs';
import Image from 'next/image';

import classes from './styles.module.css';

import { projects } from '@/data/projects';

import { Card } from './Card';

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

const dataUrl = `data:image/svg+xml;base64,${toBase64(shimmer(700, 500))}`;

type Props = {
  projects: Project[];
};

export async function ListProjects(props: Props) {
  return (
    <Flex direction="column" gap="xl" my="md">
      <Flex
        direction="row"
        justify="space-between"
        style={{
          width: '100%',
        }}
        gap="md"
        align="center"
        px="md"
      >
        {/* <Select
          withCheckIcon={false}
          defaultValue=""
          data={[
            {
              label: 'All',
              value: '',
            },
            {
              label: '2024',
              value: '2024',
            },
            {
              label: '2023',
              value: '2023',
            },
            {
              label: '2022',
              value: '2022',
            },
          ]}
          variant="default"
          radius="lg"
          width={em(200)}
        /> */}
        <Center w="100%">
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
        {/* <Select
          withCheckIcon={false}
          defaultValue=""
          data={[
            {
              label: 'Latest',
              value: '',
            },
            {
              label: 'A - Z',
              value: '2024',
            },
            {
              label: 'Z - A',
              value: '2023',
            },
            {
              label: 'Oldest',
              value: '2022',
            },
          ]}
          variant="default"
          radius="lg"
          width={em(200)}
        /> */}
      </Flex>

      <SimpleGrid
        cols={{
          sm: 1,
          md: 2,
        }}
        spacing={{
          sm: 'xl',
          md: 'lg',
        }}
        p={{
          sm: 'lg',
          md: '',
        }}
      >
        {props?.projects.map((val) => (
          <Card
            padding="lg"
            radius="md"
            withBorder
            h="16rem"
            w={{
              sm: '100%',
              md: 'auto',
            }}
            key={val.slug}
            className={classes.card}
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
                  <Flex
                    direction="row"
                    w="100%"
                    align="center"
                    justify="space-between"
                  >
                    <Text
                      fw={800}
                      style={{
                        letterSpacing: '-0.05em',
                      }}
                    >
                      {val.entry.name}
                    </Text>
                    <Badge color="orange.7">
                      {dayjs(val.entry.date).year()}
                    </Badge>
                  </Flex>
                  <Flex direction="row" gap="xs">
                    {val.entry.tags.map((tech) => (
                      <Badge key={tech} size="xs">
                        {tech}
                      </Badge>
                    ))}
                  </Flex>
                </Flex>
                <Flex h="100%" direction="column" align="end">
                  <Image
                    src={val.entry.thumbnailUrlImage ?? ''}
                    placeholder="blur"
                    blurDataURL={dataUrl}
                    alt="image"
                    height={700}
                    width={500}
                    className={classes.img}
                  />
                </Flex>
              </Flex>
            </Flex>
          </Card>
        ))}
      </SimpleGrid>
      <Center>
        <Pagination total={projects.length / 4 + 1} radius="xl" />
      </Center>
    </Flex>
  );
}
