type Project = {
  name: string;
  techStacks: string[];
  image: string;
};

export const projects: Project[] = [
  {
    name: 'SPKT - Kemdikbud',
    techStacks: ['Next.js'],
    image:
      'https://res.cloudinary.com/dvhdig9hg/image/upload/v1717268067/spkt.webp',
  },
  {
    name: 'WebGIS USAID Mahulu',
    techStacks: ['Next.js', 'GraphQL', 'Mapbox'],
    image:
      'https://res.cloudinary.com/dvhdig9hg/image/upload/v1717268066/usaid-mahulu.webp',
  },
  {
    name: 'WebGIS RTGL Berau',
    techStacks: ['Next.js', 'GraphQL', 'Mapbox'],
    image:
      'https://res.cloudinary.com/dvhdig9hg/image/upload/v1717268066/ykan-berau.webp',
  },
];
