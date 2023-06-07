export default {
    name: 'pizza',
    type: 'document',
      title: 'Pizza',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'image',
        type: 'image',
        type: 'image',
        options: {
          hotspot: true
        }
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'slug',
        options: {
            source: 'name',
            maxLength: 90
        }
        },
        {
          name: 'price',
          title: 'price',
          type: 'array',
          of :[{type: 'number'}]
        },
        {
          name: 'details',
          title: 'details',
          type: 'string'
        }

      ]
  }