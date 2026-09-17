import { defineField, defineType } from 'sanity';

export const marketItem = defineType({
  name: 'marketItem',
  title: 'Market Item',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
      initialValue: 'Free',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sort Order',
      description: 'Lower numbers appear first.',
      type: 'number',
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'price', media: 'image' },
  },
});
