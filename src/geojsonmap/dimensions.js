export const dimensions = [
  {
    id: 'geometry',
    name: 'Geometry',
    validTypes: ['geometry'],
    required: true,
  },
  {
    id: 'color',
    name: 'Color',
    validTypes: ['number', 'date', 'string'],
    required: false,
    aggregation: true,
    aggregationDefault: 'sum',
  },
  {
    id: 'stroke',
    name: 'Stroke',
    validTypes: ['number', 'date', 'string'],
    required: false,
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
