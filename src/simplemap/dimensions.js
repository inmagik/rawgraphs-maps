export const dimensions = [
  {
    id: 'country',
    name: 'Country',
    validTypes: ['string'],
    required: true,
  },
  {
    id: 'color',
    name: 'Color',
    validTypes: ['number', 'date', 'string'],
    required: true,
    aggregation: true,
    aggregationDefault: 'sum',
  },
  {
    id: 'label',
    name: 'Label',
    validTypes: ['number', 'date', 'string'],
    required: false,
    multiple: true,
    aggregation: true,
    
  },
]
