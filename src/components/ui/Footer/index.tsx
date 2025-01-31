'use client';

import {
  ActionIcon,
  Badge,
  Container,
  Divider,
  Flex,
  Group,
  rem,
  Text,
} from '@mantine/core';
import {
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
} from '@tabler/icons-react';
import { GeistMono } from 'geist/font';
import Link from 'next/link';

import classes from './styles.module.css';

export function Footer() {
  // const data = useMemo(
  //   () => [
  //     {
  //       title: t('About.head'),
  //       links: [
  //         { label: t('About.features'), link: '#' },
  //         { label: t('About.pricing'), link: '#' },
  //         { label: t('About.support'), link: '#' },
  //         { label: t('About.forums'), link: '#' },
  //       ],
  //     },
  //     {
  //       title: t('Project.head'),
  //       links: [
  //         { label: t('Project.contribute'), link: '#' },
  //         { label: t('Project.mediaAssets'), link: '#' },
  //         { label: t('Project.changelog'), link: '#' },
  //         { label: t('Project.releases'), link: '#' },
  //       ],
  //     },
  //     {
  //       title: t('Community.head'),
  //       links: [
  //         { label: t('Community.joinDiscord'), link: '#' },
  //         { label: t('Community.followTwitter'), link: '#' },
  //         { label: t('Community.emailNewsletter'), link: '#' },
  //         { label: t('Community.githubDiscussion'), link: '#' },
  //       ],
  //     },
  //   ],

  //   [t],
  // );

  // const groups = data.map((group) => {
  //   const links = group.links.map((link, index) => (
  //     <Text<'a'>
  //       key={index}
  //       size="xs"
  //       className={classes.link}
  //       component="a"
  //       href={link.link}
  //       onClick={(event) => event.preventDefault()}
  //     >
  //       {link.label}
  //     </Text>
  //   ));

  //   return (
  //     <div className={classes.wrapper} key={group.title}>
  //       <Text className={classes.title}>{group.title}</Text>
  //       {links}
  //     </div>
  //   );
  // });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Text size="lg" fw={900}>
            roniar.dev
          </Text>
          <Text size="xs" className={classes.description}>
            Software Developer with a passion for learn and grow.
          </Text>
        </div>
        {/* <div className={classes.groups}>{groups}</div> */}
      </Container>
      <Container className={classes.afterFooter}>
        <Flex direction="column" gap="sm" justify="center">
          <Text size="xs" fw={400}>
            © {new Date().getFullYear()} roniar.dev
          </Text>
          <Divider
            size="xs"
            variant="dotted"
            labelPosition="center"
            color="cyan"
            className={GeistMono.className}
            label={
              <Badge size="xs" variant="outline" tt="uppercase" fw={700}>
                System Info
              </Badge>
            }
          />
          <Flex
            direction="row"
            align="center"
            gap="xs"
            className={GeistMono.className}
          >
            <Text size={rem(10)} fw={900} tt="uppercase">
              Version
            </Text>
            <Badge
              size="xs"
              variant="gradient"
              gradient={{ from: 'yellow', to: 'indigo', deg: 278 }}
            >
              PROD-2024.12.26
            </Badge>
            <Badge variant="dot" size="xs" color="green.5">
              All System Operated
            </Badge>
          </Flex>
        </Flex>
        <Group
          gap={0}
          className={classes.social}
          justify="flex-end"
          wrap="nowrap"
        >
          <Link href="https://x.com/roniar.dev" target="_blank">
            <ActionIcon
              size="lg"
              color="gray"
              variant="subtle"
              aria-label="Our twitter link"
            >
              <IconBrandTwitter
                style={{ width: rem(18), height: rem(18) }}
                stroke={1.5}
              />
            </ActionIcon>
          </Link>
          <Link href="https://www.youtube.com/@roniardev" target="_blank">
            <ActionIcon
              size="lg"
              color="gray"
              variant="subtle"
              aria-label="Our youtube link"
            >
              <IconBrandYoutube
                style={{ width: rem(18), height: rem(18) }}
                stroke={1.5}
              />
            </ActionIcon>
          </Link>
          <Link href="https://instagram.com/roniardynt" target="_blank">
            <ActionIcon
              size="lg"
              color="gray"
              variant="subtle"
              aria-label="Our instagram link"
            >
              <IconBrandInstagram
                style={{ width: rem(18), height: rem(18) }}
                stroke={1.5}
              />
            </ActionIcon>
          </Link>
        </Group>
      </Container>
    </footer>
  );
}
