import { defineField, defineType } from 'sanity';

export const social = defineType({
  name: 'social',
  title: 'Social',
  type: 'document',
  fields: [
    defineField({
      name: 'platform',
      title: 'Platform',
      type: 'string',
      options: {
        list: ['Instagram', 'Spotify', 'YouTube', 'Discord', 'Apple Music', 'Email'],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'URL',
      description: "For Email, enter just the email address (e.g. hi@flameboi.com).",
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sort Order',
      description: 'Lower numbers appear first.',
      type: 'number',
    }),
  ],
  preview: {
    select: { title: 'platform', subtitle: 'url' },
  },
});
