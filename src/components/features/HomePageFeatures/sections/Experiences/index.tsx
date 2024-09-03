'use client';

import {
  Badge,
  Card,
  Center,
  Flex,
  Text,
  Timeline,
  Title,
} from '@mantine/core';
import { IconBriefcase, IconBriefcaseFilled } from '@tabler/icons-react';

import classes from './styles.module.css';

import { FadeInShow } from '@/components/ui/FadeInShow';

export function Experiences() {
  const experiences: {
    title: string;
    company: string;
    timeline: string;
    description: string;
  }[] = [
    {
      title: 'Frontend Developer',
      company: 'Bank Raya (BRI Group)',
      timeline: 'Aug 2024 - Now',
      description:
        "Work on the Support System (SUS) for Bank Raya to handle, develop, maintain, and fix bugs in the web app for Bank Raya's banking operations.",
    },
    {
      title: 'Frontend Developer',
      company: 'PT. Optima Media Teknologi',
      timeline: 'Oct 2022 - Aug 2024',
      description:
        'I worked closely with clients to understand their unique needs and create custom solutions that address their specific business challenges, especially with geospatial web applications / GIS.',
    },
    {
      title: 'Frontend Developer Intern',
      company: 'NAFAS Indonesia',
      timeline: 'May 2022 - Aug 2022',
      description:
        'I worked on dashboard realtime monitoring for air quality data from IOT devices.',
    },
  ];
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
      <Card withBorder w="100%" radius="md" className={classes.card} px="xl">
        <Flex direction="column" gap="md" my="md">
          <Timeline active={1} bulletSize={24} lineWidth={2}>
            {experiences.map((experience, index) => (
              <Timeline.Item
                bullet={
                  index === 0 ? (
                    <IconBriefcaseFilled size={12} />
                  ) : (
                    <IconBriefcase size={12} />
                  )
                }
                title={
                  <Text size="lg" fw={700} style={{ letterSpacing: '-0.05em' }}>
                    {experience.title}
                  </Text>
                }
                key={experience.title}
              >
                <Flex
                  direction="row"
                  gap="sm"
                  align="center"
                  w="100%"
                  justify="space-between"
                >
                  <Text size="md" fw={500}>
                    {experience.company}
                  </Text>
                  <FadeInShow>
                    <Badge tt="capitalize" variant="outline" p="sm" my="xs">
                      <Text
                        size="xs"
                        fw={600}
                        style={{
                          letterSpacing: '-0.05em',
                        }}
                      >
                        {experience.timeline}
                      </Text>
                    </Badge>
                  </FadeInShow>
                </Flex>
                <Text c="dimmed" size="sm">
                  {experience.description}
                </Text>
              </Timeline.Item>
            ))}
          </Timeline>
        </Flex>
      </Card>
    </Flex>
  );
}
