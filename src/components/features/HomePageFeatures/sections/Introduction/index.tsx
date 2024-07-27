'use client';

import {
  Badge,
  Button,
  Card,
  em,
  Flex,
  SimpleGrid,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import {
  IconBook,
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandMedium,
  IconLocation,
} from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';

import classes from './styles.module.css';

import { FadeDownShow } from '@/components/ui/FadeDownShow';
import { FadeInShow } from '@/components/ui/FadeInShow';
import { FadeUpShow } from '@/components/ui/FadeUpShow';

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

const dataUrl = `data:image/svg+xml;base64,${toBase64(shimmer(200, 200))}`;

export function Introduction() {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);

  return (
    <Flex direction={isMobile ? 'column' : 'row'} gap="md">
      <Flex
        justify="space-between"
        style={{
          width: '100%',
        }}
        gap="md"
        direction={isMobile ? 'column' : 'row'}
      >
        <FadeInShow
          style={{
            width: isMobile ? '100%' : '60%',
          }}
        >
          {' '}
          <Card withBorder w="100%" radius="md" className={classes.card}>
            <Flex
              direction={isMobile ? 'column-reverse' : 'row'}
              gap="md"
              p="md"
              justify={isMobile ? 'center' : 'flex-start'}
              align={isMobile ? 'center' : 'center'}
            >
              <Flex
                direction="column"
                gap="xs"
                justify={isMobile ? 'center' : 'center'}
                align={isMobile ? 'center' : 'flex-start'}
              >
                <Badge tt="capitalize" p="md" variant="outline">
                  <Title
                    order={3}
                    fw={800}
                    style={{
                      letterSpacing: '-0.05em',
                    }}
                  >
                    Software Developer
                  </Title>
                </Badge>
                <Text size="0.85rem">
                  Within 2+ years experience in projects.
                </Text>
                <Text mt="sm" size="0.85rem" lh="sm">
                  <b>Frontend Developer</b> by day, <b>Cloud Engineer</b> by
                  night. Part-time <b>Backend</b>. Always seeking new challenges
                  and opportunities to grow.
                </Text>
                <Text mt="sm" size="0.85rem" lh="sm">
                  Currently work with{' '}
                  <span
                    style={{
                      color: theme.colors.cyan[7],
                      fontWeight: 700,
                    }}
                  >
                    React
                  </span>{' '}
                  -{' '}
                  <span
                    style={{
                      fontWeight: 700,
                    }}
                  >
                    Next.js{' '}
                  </span>
                  -{' '}
                  <span
                    style={{
                      fontWeight: 700,
                    }}
                  >
                    Typescript
                  </span>{' '}
                  -{' '}
                  <span
                    style={{
                      fontWeight: 700,
                    }}
                  >
                    Graphql
                  </span>{' '}
                  and more.
                </Text>
              </Flex>
              <Image
                src="https://res.cloudinary.com/dvhdig9hg/image/upload/v1722088184/roni-pfp-image.jpg"
                placeholder="blur"
                blurDataURL={dataUrl}
                width={200}
                height={200}
                alt="Roni Ardiyanto"
                style={{
                  borderRadius: '0.5em',
                }}
              />
            </Flex>
          </Card>
        </FadeInShow>

        <Flex direction="column" gap="md" w={isMobile ? '100%' : '40%'}>
          <FadeUpShow
            style={{
              width: '100%',
              height: '100%',
            }}
          >
            <Card withBorder radius="md" className={classes.card}>
              <Flex direction="column" gap="lg" align="center" justify="center">
                <Badge p="md">
                  <Title
                    order={4}
                    ta="center"
                    style={{
                      letterSpacing: '-0.05em',
                    }}
                    tt="capitalize"
                  >
                    Find Me On
                  </Title>
                </Badge>
                <Flex direction="column" gap="xl">
                  <SimpleGrid cols={2} spacing="sm">
                    <Link
                      href="https://www.linkedin.com/in/roniardiyanto/"
                      target="_blank"
                    >
                      <Button
                        leftSection={<IconBrandLinkedin size={26} />}
                        size="sm"
                        radius="xl"
                        variant="subtle"
                        fw={700}
                        style={{
                          letterSpacing: '-0.05em',
                        }}
                        className={classes.socialButton}
                      >
                        <Text
                          size="sm"
                          fw={600}
                          style={{
                            letterSpacing: '-0.05em',
                          }}
                        >
                          LinkedIn
                        </Text>
                      </Button>
                    </Link>
                    <Link href="https://github.com/infrasync" target="_blank">
                      <Button
                        leftSection={<IconBrandGithub size={26} />}
                        size="sm"
                        radius="xl"
                        variant="subtle"
                        fw={700}
                        style={{
                          letterSpacing: '-0.05em',
                        }}
                        className={classes.socialButton}
                      >
                        <Text
                          size="sm"
                          fw={600}
                          style={{
                            letterSpacing: '-0.05em',
                          }}
                        >
                          Github
                        </Text>
                      </Button>
                    </Link>

                    <Link
                      href="https://medium.com/@roniardiyanto"
                      target="_blank"
                    >
                      <Button
                        leftSection={<IconBrandMedium size={26} />}
                        size="sm"
                        radius="xl"
                        variant="subtle"
                        fw={700}
                        style={{
                          letterSpacing: '-0.05em',
                        }}
                        className={classes.socialButton}
                      >
                        <Text
                          size="sm"
                          fw={600}
                          style={{
                            letterSpacing: '-0.05em',
                          }}
                        >
                          Medium
                        </Text>
                      </Button>
                    </Link>
                    <Link
                      href="https://discord.com/users/infrasync"
                      target="_blank"
                    >
                      <Button
                        leftSection={<IconBrandDiscord size={26} />}
                        size="sm"
                        radius="xl"
                        variant="subtle"
                        fw={700}
                        style={{
                          letterSpacing: '-0.05em',
                        }}
                        className={classes.socialButton}
                      >
                        <Text
                          size="sm"
                          fw={600}
                          style={{
                            letterSpacing: '-0.05em',
                          }}
                        >
                          Discord
                        </Text>
                      </Button>
                    </Link>
                  </SimpleGrid>
                </Flex>
              </Flex>
            </Card>
          </FadeUpShow>
          <FadeDownShow
            style={{
              width: '100%',
              height: '100%',
            }}
          >
            <Card
              withBorder
              w="100%"
              radius="md"
              h="100%"
              className={classes.card}
            >
              <Flex direction="column" gap="sm">
                <Flex direction="row" align="center" gap="xs">
                  <Title
                    order={3}
                    fw={800}
                    style={{
                      letterSpacing: '-0.05em',
                    }}
                  >
                    Indonesia
                  </Title>
                  <IconLocation />
                </Flex>
                <Flex direction="row" w="100%">
                  <Link
                    href="https://bit.ly/cv-resume-roni-ardiyanto"
                    target="_blank"
                    style={{ width: '100%' }}
                  >
                    <Button
                      size="xs"
                      leftSection={
                        <>
                          <Flex direction="row" align="center" gap="xs">
                            <IconBook size={20} />
                            <Text
                              size="sm"
                              fw={800}
                              style={{
                                letterSpacing: '-0.05em',
                              }}
                            >
                              Read my Resume
                            </Text>
                          </Flex>
                        </>
                      }
                      radius="xl"
                      variant="gradient"
                      gradient={{ from: 'blue', to: 'orange', deg: 204 }}
                      fw={700}
                      style={{
                        letterSpacing: '-0.05em',
                      }}
                      w="100%"
                      className={classes.button}
                    />
                  </Link>
                </Flex>
              </Flex>
            </Card>
          </FadeDownShow>
        </Flex>
      </Flex>
    </Flex>
  );
}
