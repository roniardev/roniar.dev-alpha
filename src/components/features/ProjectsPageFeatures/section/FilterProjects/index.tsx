'use client';

import {
  Button,
  Divider,
  Flex,
  Modal,
  Select,
  Text,
  Title,
} from '@mantine/core';
import { useState } from 'react';

import { Settings } from '@/components/ui/icons/Settings';

import useFilterProjects from '@/stores/useFilterProjects';

export default function FilterProjects() {
  const [opened, setOpened] = useState(false);
  const { filterCompany, changeFilterCompany } = useFilterProjects();

  return (
    <Flex
      style={{
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '$2',
        mb: '$4',
      }}
    >
      <Button
        variant="filled"
        radius="md"
        onClick={() => setOpened(true)}
        style={{ borderRadius: '$sm' }}
        leftSection={<Settings />}
      >
        Filter
      </Button>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={
          <Title order={4} ta="center" style={{ letterSpacing: '-0.05em' }}>
            Filter Projects
          </Title>
        }
        size="lg"
        radius="md"
      >
        <Flex direction="column" gap="md">
          <Select
            label={
              <Text fw={800} style={{ letterSpacing: '-0.05em' }}>
                Company
              </Text>
            }
            placeholder="Select Company"
            data={[
              {
                value: 'OPTIMAP',
                label: 'PT. Optima Media Teknologi',
              },
              { value: 'RAYA', label: 'Bank Raya' },
              { value: 'ALL', label: 'All' },
            ]}
            onChange={(v) => changeFilterCompany(v as any)}
            defaultValue="ALL"
            value={filterCompany}
          />
          <Divider />
          <Flex direction="row" justify="end" gap="md">
            <Button
              variant="filled"
              color="orange"
              onClick={() => setOpened(false)}
              radius="md"
            >
              Close
            </Button>
            <Button
              variant="filled"
              radius="md"
              onClick={() => setOpened(false)}
            >
              Apply
            </Button>
          </Flex>
        </Flex>
      </Modal>
    </Flex>
  );
}
