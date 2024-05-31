'use client';

import { Button, Container } from '@mantine/core';
import { sendGAEvent, sendGTMEvent } from '@next/third-parties/google';

import { BentoCard } from '@/components/ui/BentoCard';

const BentoPageFeatures: React.FC = () => (
  <Container w="100%">
    <BentoCard />
    <Button
      onClick={() => {
        sendGAEvent('event', 'customButtonClicked', { value: 'Klik 1A' });
        sendGAEvent({ event: 'customButtonClicked', value: 'Klik 1B' });
        sendGTMEvent({ event: 'customButtonClicked', value: 'Klik 1C' });
      }}
    >
      Coba Test GTA Event dan GTM
    </Button>
  </Container>
);

export default BentoPageFeatures;
