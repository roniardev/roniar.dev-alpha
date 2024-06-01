type Project = {
  name: string;
  techStacks: string[];
  image: string;
};

export const projects: Project[] = [
  {
    name: 'SPKT - Sistem Pendataan Kebudayaan Terpadu',
    techStacks: ['Next.js', 'Mantine', 'TypeScript'],
    image: '/projects/spkt.png',
  },
  {
    name: 'WebGIS USAID Mahulu',
    techStacks: ['Next.js', 'Mantine', 'TypeScript', 'GraphQL', 'Mapbox'],
    image: '/projects/usaid-mahulu.png',
  },
  {
    name: 'WebGIS Rencana Tata Guna Lahan Berau',
    techStacks: ['Next.js', 'Mantine', 'TypeScript', 'GraphQL', 'Mapbox'],
    image: '/projects/rtgl-ykan.png',
  },
];
