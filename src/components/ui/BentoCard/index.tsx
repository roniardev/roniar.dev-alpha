import { Button, Card, Flex, Text, Title } from '@mantine/core';
import { sendGAEvent } from '@next/third-parties/google';

export function BentoCard() {
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
        <Button
          onClick={() => {
            sendGAEvent('event', 'buttonClicked', { value: 'Klik 1A' });
            sendGAEvent({ event: 'buttonClicked', value: 'Klik 1B' });
          }}
        >
          Send GA Event
        </Button>
        <Card withBorder w="60%">
          <Title order={4}> What is Caleus?</Title>
          <Text mt="sm" size="xs">
            Caleus adalah opiniated boilerplate berbasis: Next.js 14, Mantine
            v7. Panda CSS, React Query, next-intl. Dilengkapi dengan DX yang
            memudahkan penggunaannya untuk membuat Project dengan cepat
          </Text>
        </Card>
        <Card withBorder w="40%">
          <Title order={4}> What is Caleus?</Title>
        </Card>
      </Flex>
    </Flex>
  );
}
