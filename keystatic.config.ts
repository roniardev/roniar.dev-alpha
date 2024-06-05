import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: 'infrasync/roniar.dev-alpha',
  },
  collections: {
    projects: collection({
      label: 'Projects',
      slugField: 'name',
      path: 'src/content/projects/*',
      format: { data: 'json' },
      schema: {
        name: fields.slug({ name: { label: 'Project Name' } }),
        date: fields.date({
          label: 'Project Date',
          description: 'The date of the event',
        }),
        tags: fields.array(
          fields.text({ label: 'Tech Stacks' }),
          // Labelling options
          {
            label: 'Tech Stacks',
            itemLabel: (props) => props.value,
          },
        ),
        thumbnailUrlImage: fields.url({
          label: 'Thumbnail URL Image',
          description: 'Thumbnail URL Image',
        }),
        projectUrl: fields.url({
          label: 'Project URL',
          description: 'Project URL',
        }),
        richText: fields.mdx({
          label: 'Write up about project',
        }),
      },
    }),
  },
});
