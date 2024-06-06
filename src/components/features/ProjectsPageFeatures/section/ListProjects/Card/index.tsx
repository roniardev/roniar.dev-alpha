'use client';

import { Card as MantineCard, CardProps, em } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import { FadeDownShow } from '@/components/ui/FadeDownShow';

export function Card({ children, ...props }: CardProps) {
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);

  return (
    <FadeDownShow>
      <MantineCard {...props} mt={isMobile ? 'md' : ''}>
        {children}
      </MantineCard>
    </FadeDownShow>
  );
}
