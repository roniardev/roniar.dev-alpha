'use client';

import {
  Card,
  Flex,
  Text,
  Timeline,
  Title,
  useMantineTheme,
} from '@mantine/core';
import Image from 'next/image';
import profileImage from 'public/images/profil.jpg';

export function Introduction() {
  const theme = useMantineTheme();
  return (
    <Flex direction="column" gap="md">
      <Flex
        direction="row"
        justify="space-between"
        style={{
          width: '100%',
        }}
        gap="md"
      >
        <Card withBorder w="50%" radius="md">
          <Flex direction="row" gap="md">
            <Flex direction="column">
              <Title order={4}>Roni Ardiyanto</Title>
              <Text mt="sm" size="sm">
                <b>Frontend Developer</b> by day, <b>Cloud Engineer</b> by
                night. Always seeking new challenges and opportunities to grow.
              </Text>
              <Text mt="sm" size="sm">
                Currently work with :
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
                  Next.js
                </span>
                ,{' '}
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
              width={150}
              height={150}
              alt="Roni Ardiyanto"
              style={{
                borderRadius: '0.5em',
              }}
            />
          </Flex>
        </Card>
        <Card withBorder w="50%" radius="md">
          <Flex direction="column" gap="md">
            <Title order={4}>Experience</Title>
            <Timeline active={1} bulletSize={10} lineWidth={2}>
              <Timeline.Item title="Frontend Developer">
                <Text fw={700} size="sm">
                  PT. Optima Media Teknologi
                </Text>
                <Text c="dimmed" size="sm">
                  You&apos;ve created new branch{' '}
                  <Text variant="link" component="span" inherit>
                    fix-notifications
                  </Text>{' '}
                  from master
                </Text>
                <Text size="xs" mt={4}>
                  2 hours ago
                </Text>
              </Timeline.Item>
            </Timeline>
          </Flex>
        </Card>
      </Flex>
    </Flex>
  );
}
