'use client';

import {
  Badge,
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
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandMedium,
  IconLocation,
} from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import profileImage from 'public/images/profil.jpg';

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
        <Card
          withBorder
          w={isMobile ? '100%' : '60%'}
          radius="md"
          style={{
            boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
          }}
        >
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
        <Flex direction="column" gap="md" w={isMobile ? '100%' : '40%'}>
          <Card
            withBorder
            w="100%"
            radius="md"
            h="70%"
            style={{
              boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
            }}
          >
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
                    <Link href="https://www.linkedin.com/in/roniardiyanto/">
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
                    <Link href="https://github.com/infrasync">
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
                    <Link href="https://medium.com/@roniardiyanto">
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
                    <Link href="https://discord.com/users/infrasync">
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
          <Card
            withBorder
            w="100%"
            radius="md"
            h="30%"
            style={{
              boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Flex direction="row">
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
          </Card>
        </Flex>
      </Flex>
    </Flex>
  );
}
