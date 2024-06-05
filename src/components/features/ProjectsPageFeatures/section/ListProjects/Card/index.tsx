'use client';

import { Card as MantineCard, CardProps } from '@mantine/core';

import { FadeDownShow } from '@/components/ui/FadeDownShow';

export function Card({ children, ...props }: CardProps) {
  return (
    <FadeDownShow>
      <MantineCard {...props}>{children}</MantineCard>
    </FadeDownShow>
  );
}
