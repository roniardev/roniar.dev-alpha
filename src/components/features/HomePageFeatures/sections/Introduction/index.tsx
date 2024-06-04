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
import profileImage from 'public/images/profil.jpg';

import classes from './styles.module.css';

import { FadeDownShow } from '@/components/ui/FadeDownShow';
import { FadeInShow } from '@/components/ui/FadeInShow';
import { FadeUpShow } from '@/components/ui/FadeUpShow';

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
                src={profileImage}
                placeholder="blur"
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
                  <SimpleGrid cols={2} spacing="xl">
                    <Flex direction="row" align="center" gap="xs">
                      <IconBrandLinkedin size={28} />
                      <Link
                        href="https://www.linkedin.com/in/roniardiyanto/"
                        target="_blank"
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
                      </Link>
                    </Flex>
                    <Flex direction="row" align="center" gap="xs">
                      <IconBrandGithub size={28} />
                      <Link href="https://github.com/infrasync" target="_blank">
                        <Text
                          size="sm"
                          fw={600}
                          style={{
                            letterSpacing: '-0.05em',
                          }}
                        >
                          Github
                        </Text>
                      </Link>
                    </Flex>
                    <Flex direction="row" align="center" gap="xs">
                      <IconBrandMedium size={28} />
                      <Link
                        href="https://medium.com/@roniardiyanto"
                        target="_blank"
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
                      </Link>
                    </Flex>
                    <Flex direction="row" align="center" gap="xs">
                      <IconBrandDiscord size={28} />
                      <Link
                        href="https://discord.com/users/infrasync"
                        target="_blank"
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
                      </Link>
                    </Flex>
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
                    href="https://resume.roniar.dev"
                    target="_blank"
                    style={{ width: '100%' }}
                  >
                    <Button
                      leftSection={<IconBook size={20} />}
                      radius="xl"
                      variant="gradient"
                      gradient={{ from: 'blue', to: 'orange', deg: 204 }}
                      fw={700}
                      style={{
                        letterSpacing: '-0.05em',
                      }}
                      w="100%"
                    >
                      Read my Resume
                    </Button>
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
