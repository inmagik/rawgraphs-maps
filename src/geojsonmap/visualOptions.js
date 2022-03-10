export const visualOptions = {
  marginTop: {
    type: 'number',
    label: 'Margin (top)',
    default: 50,
    group: 'artboard',
  },

  marginRight: {
    type: 'number',
    label: 'Margin (right)',
    default: 50,
    group: 'artboard',
  },

  marginBottom: {
    type: 'number',
    label: 'Margin (bottom)',
    default: 50,
    group: 'artboard',
  },

  marginLeft: {
    type: 'number',
    label: 'Margin (left)',
    default: 50,
    group: 'artboard',
  },

  showLegend: {
    type: 'boolean',
    label: 'Show legend',
    default: false,
    group: 'artboard',
  },

  legendWidth: {
    type: 'number',
    label: 'Legend width',
    default: 200,
    group: 'artboard',
    disabled: {
      showLegend: false,
    },
    container: 'width',
    containerCondition: {
      showLegend: true,
    },
  },

  
  colorScale: {
    type: 'colorScale',
    label: 'Color scale',
    dimension: 'color',
    default: {
      scaleType: 'ordinal',
      interpolator: 'interpolateSpectral',
    },
    group: 'colors',
  },

  colorScaleStroke: {
    type: 'colorScale',
    label: 'Color scale stroke',
    dimension: 'stroke',
    default: {
      scaleType: 'ordinal',
      interpolator: 'interpolateSpectral',
    },
    group: 'colors',
  },

  labelStyles: {
    type: 'text',
    label: 'Label',
    group: 'labels',
    options: [
      { label: 'Primary', value: 'labelPrimary' },
      { label: 'Secondary', value: 'labelSecondary' },
      { label: 'Italic', value: 'labelItalic' },
    ],
    default: 'labelPrimary',
    repeatFor: 'label',
    repeatDefault: ['labelPrimary', 'labelSecondary', 'labelItalic'],
  },

  showLabelsOutline: {
    type: 'boolean',
    label: 'Show outline',
    default: false,
    group: 'labels',
  },

  autoHideLabels: {
    type: 'boolean',
    label: 'Auto hide labels',
    default: false,
    group: 'labels',
  },

  projection: {
    type: 'text',
    label: 'Projection',
    group: 'chart',
    options: [
      'geoEqualEarth',
      'geoAzimuthalEqualArea',
      'geoAzimuthalEquidistant',
      'geoConicConformal',
      'geoConicEqualArea',
      'geoConicEquidistant',
      'geoEquirectangular',
      'geoMercator',
      'geoOrthographic',
      'geoStereographic',
      'geoTransverseMercator',
      'geoAiry',
      'geoAitoff',
      'geoAlbers',
      'geoAlbersUsa',
      'geoAugust',
      'geoBaker',
      'geoBoggs',
      'geoBonne',
      'geoBottomley',
      'geoCentralCylindrical',
      'geoEckert1',
      'geoEckert2',
      'geoEckert3',
      'geoEckert4',
      'geoEckert5',
      'geoEckert6',
      'geoEisenlohr',
      'geoEquirectangular',
      'geoFahey',
      'geoGallStereographic',
      'geoGnomonic',
      'geoGoodeHomolosine',
      'geoGuyou',
      
    ],
    default: 'geoEqualEarth',
  },
}
