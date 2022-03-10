import * as d3 from 'd3'
import { legend, dateFormats, labelsOcclusion } from '@rawgraphs/rawgraphs-core'
import '../d3-styles.js'
import { feature } from 'topojson-client'
import countries from 'world-atlas/countries-110m.json'
import { geoEqualEarth, geoPath, geoGraticule10 } from 'd3-geo'
import keyBy from 'lodash/keyBy'

export function render(
  svgNode,
  data,
  visualOptions,
  mapping,
  originalData,
  styles
) {
  const {
    width,
    height,
    background,
    showLegend,
    legendWidth,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    colorScale,
    showLabelsOutline,
    autoHideLabels,
    labelStyles,
  } = visualOptions

  const margin = {
    top: marginTop,
    right: marginRight,
    bottom: marginBottom,
    left: marginLeft,
  }

  const chartWidth = width - margin.left - margin.right
  const chartHeight = height - margin.top - margin.bottom

  const artboardBackground = d3
    .select(svgNode)
    .append('rect')
    .attr('width', showLegend ? width + legendWidth : width)
    .attr('height', height)
    .attr('x', 0)
    .attr('y', 0)
    .attr('fill', background)
    .attr('id', 'background')

  const svg = d3
    .select(svgNode)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
    .attr('id', 'visualization')

  const vizLayer = svg.append('g').attr('id', 'viz')

  const byCountry = keyBy(data, 'country')
  const features = feature(countries, countries.objects.countries).features
  const projection = geoEqualEarth();
  const geometries = {
    type:'GeometryCollection',
    geometries: features.map(d => d.geometry),
  }
  projection.fitSize([chartWidth, chartHeight], geometries);
  const path = geoPath(projection)

  vizLayer
    .selectAll('path')
    .data(features)
    .join('path')
    .attr("fill", d => byCountry[d.properties.name] ? colorScale(byCountry[d.properties.name].color) : undefined)
    .attr('d', path)

  if (showLegend) {
    const legendLayer = d3
      .select(svgNode)
      .append('g')
      .attr('id', 'legend')
      .attr('transform', `translate(${width},${marginTop})`)

    const chartLegend = legend().legendWidth(legendWidth)

    if (mapping.color.value) {
      chartLegend.addColor(mapping.color.value, colorScale)
    }

    legendLayer.call(chartLegend)
  }
}
