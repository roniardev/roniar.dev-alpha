'use client';

import { Badge, Center, Flex, Text, Timeline, Title } from '@mantine/core';
import { IconBriefcase, IconBriefcaseFilled } from '@tabler/icons-react';

import { FadeInShow } from '@/components/ui/FadeInShow';

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
          bullet={<IconBriefcaseFilled size={12} />}
          title={
            <Text size="lg" fw={700} style={{ letterSpacing: '-0.05em' }}>
              Frontend Developer
            </Text>
          }
        >
          <Flex
            direction="row"
            gap="sm"
            align="center"
            w="100%"
            justify="space-between"
          >
            <Text size="md" fw={500}>
              PT. Optima Media Teknologi
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
                  Oct 2022 - Present
                </Text>
              </Badge>
            </FadeInShow>
          </Flex>
          <Text c="dimmed" size="sm">
            I work closely with clients to understand their unique needs and
            create custom solutions that address their specific business
            challenges, especially with geospatial web applications / GIS.
          </Text>
        </Timeline.Item>

        <Timeline.Item
          bullet={<IconBriefcase size={12} />}
          title={
            <Text size="lg" fw={700} style={{ letterSpacing: '-0.05em' }}>
              Frontend Developer Intern
            </Text>
          }
        >
          <Flex
            direction="row"
            gap="sm"
            align="center"
            w="100%"
            justify="space-between"
          >
            <Text size="md" fw={500}>
              NAFAS Indonesia
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
                  May 2022 - Aug 2022{' '}
                </Text>
              </Badge>
            </FadeInShow>
          </Flex>
          <Text c="dimmed" size="sm">
            I worked on dashboard realtime monitoring for air quality data from
            IOT devices.
          </Text>
        </Timeline.Item>

        <Timeline.Item
          title={
            <Text size="lg" fw={700} style={{ letterSpacing: '-0.05em' }}>
              Frontend Developer Intern
            </Text>
          }
          bullet={<IconBriefcase size={12} />}
          lineVariant="dashed"
        >
          <Flex
            direction="row"
            gap="sm"
            align="center"
            w="100%"
            justify="space-between"
          >
            <Text size="md" fw={500}>
              GoTo Impact
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
                  Feb 2022 - Aug 2022
                </Text>
              </Badge>
            </FadeInShow>
          </Flex>

          <Text c="dimmed" size="sm">
            Program from YABB by Gojek & Tokopedia Explore and learn more about
            frontend developers using React.js Selected as GIGIH Interns at YABB
            Partner.
          </Text>
        </Timeline.Item>
      </Timeline>
    </Flex>
  );
}
