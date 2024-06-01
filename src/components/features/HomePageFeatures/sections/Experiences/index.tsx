'use client';

import { Badge, Center, Flex, Text, Timeline, Title } from '@mantine/core';
import {
  IconGitBranch,
  IconGitCommit,
  IconGitPullRequest,
} from '@tabler/icons-react';

export function Experiences() {
  return (
    <Flex direction="column" gap="md" my="md">
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
            Experiences
          </Title>
        </Badge>
      </Center>
      <Timeline active={1} bulletSize={24} lineWidth={2}>
        <Timeline.Item
          bullet={<IconGitBranch size={12} />}
          title="Frontend Developer"
        >
          <Text size="sm" fw={600}>
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

        <Timeline.Item
          bullet={<IconGitCommit size={12} />}
          title="Frontend Developer Intern"
        >
          <Text size="sm" fw={600}>
            NAFAS Indonesia
          </Text>
          <Text c="dimmed" size="sm">
            You&apos;ve pushed 23 commits to
            <Text variant="link" component="span" inherit>
              fix-notifications branch
            </Text>
          </Text>
          <Text size="xs" mt={4}>
            52 minutes ago
          </Text>
        </Timeline.Item>

        <Timeline.Item
          title="Frontend Developer Intern"
          bullet={<IconGitPullRequest size={12} />}
          lineVariant="dashed"
        >
          <Text size="sm" fw={600}>
            GoTo Impact
          </Text>
          <Text c="dimmed" size="sm">
            You&apos;ve submitted a pull request
            <Text variant="link" component="span" inherit>
              Fix incorrect notification message (#187)
            </Text>
          </Text>
          <Text size="xs" mt={4}>
            34 minutes ago
          </Text>
        </Timeline.Item>
      </Timeline>
    </Flex>
  );
}
