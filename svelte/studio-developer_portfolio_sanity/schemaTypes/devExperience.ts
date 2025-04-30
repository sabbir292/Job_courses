import {defineField, defineType} from 'sanity'

export const devExperience = defineType({
  name: 'devExperience',
  title: 'Developer experience',
  type: 'document',
  fields: [
    defineField({
      name: 'jobTitle',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'company',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'startDate',
      type: 'date',
      options:{
        dateFormat:'YYYY-MM-DD'
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'endDate',
      type: 'date',
      options:{
        dateFormat:'YYYY-MM-DD'
      },
    //   validation: (rule) => rule.required(),
    }),
    // defineField({
    //   name: 'image',
    //   type: 'image',
    // }),
    // defineField({
    //   name: 'body',
    //   type: 'array',
    //   of: [{type: 'block'}],
    // }),
  ],
})