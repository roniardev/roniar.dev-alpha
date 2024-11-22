'use client';

import { Burger, Container, Flex, Group, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

import classes from './styles.module.css';

import { ColorSchemeToggle } from '@/components/utils/ColorSchemeToggle';

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const pathName = usePathname();

  const links = useMemo(
    () => [
      { link: '/projects', label: 'Projects' },
      // { link: `/${locale}/friends`, label: 'Friends' },
    ],
    [],
  );

  const items = links.map((link) => (
    <Link
      href={link.link}
      prefetch
      key={link.label}
      className={classes.link}
      data-active={`${pathName}` === link.link || undefined}
    >
      {link.label}
    </Link>
  ));

  return (
    <header
      className={classes.header}
      style={{
        height: opened ? 'fit-content' : '3.75rem',
        zIndex: 100,
      }}
    >
      <Container size="md" className={classes.inner}>
        <Text
          size="xl"
          style={{
            letterSpacing: '-0.05em',
            // rotate text
            transform: 'rotate(35deg)',
            // shiny star effect
            background: 'linear-gradient(90deg, #f12711, #f5af19)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
          fw={900}
        >
          RA
        </Text>
        <Link href="/">
          <Text
            fw={700}
            size="xl"
            // className={`${classes.textHeader}`}
            tt="capitalize"
            style={{
              letterSpacing: '-0.05em',
            }}
          >
            Roni Ardiyanto
          </Text>
        </Link>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
        <Group gap={12} visibleFrom="xs">
          <ColorSchemeToggle />
          {/* <LocaleSwitcher /> */}
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="xs"
          size="sm"
          aria-label="Show list menu"
        />
      </Container>

      <Flex
        direction="column"
        align="center"
        justify="center"
        style={{
          visibility: opened ? 'visible' : 'hidden',
        }}
        hiddenFrom="xs"
      >
        <ColorSchemeToggle />
        <Flex mb="sm">{/* <LocaleSwitcher /> */}</Flex>
        {items}
      </Flex>
    </header>
  );
}
