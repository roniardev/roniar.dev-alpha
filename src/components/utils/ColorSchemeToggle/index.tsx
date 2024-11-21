'use client';

import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconMoonFilled, IconSunFilled } from '@tabler/icons-react';
import { memo } from 'react';

import './styles.css';

export const ColorSchemeToggle = memo(() => {
  const { toggleColorScheme, colorScheme } = useMantineColorScheme();

  return (
    <ActionIcon
      variant="outline"
      color={colorScheme === 'dark' ? 'yellow' : 'blue'}
      onClick={toggleColorScheme}
      title="Toggle color scheme"
      my="md"
      style={{
        '&:hover': {
          animation: 'spin 1s infinite linear',
        },
      }}
    >
      {colorScheme === 'dark' ? (
        <IconSunFilled size={18} />
      ) : (
        <IconMoonFilled size={18} />
      )}
    </ActionIcon>
  );
});
