import * as d3 from 'd3'

// const margin = {top: 10, right: 5, bottom: 70, left: 0},
//   width = 600 - margin.left - margin.right,
//   height = 600 - margin.top - margin.bottom

const margin = {top: 20, right: 20, bottom: 100, left: 100}
const width = 600 - margin.left - margin.right
const height = 600 - margin.top - margin.bottom

export const initChart = () => {
  d3
    .select('#stateGraph')
    .append('svg')
    .attr('width', width + margin.left + margin.right + 70)
    .attr('height', height + margin.top + margin.bottom + 40)
    .append('g')
    .attr(
      'transform',
      'translate(' + margin.left + 400 + ',' + margin.top + ')'
    )
}

export const drawGraph = data => {
  const svg = d3.select('#stateGraph svg')
  //   .append('svg')
  //   .attr('width', 700)
  //   .attr('height', 700)

  // const graph = svg
  //   .append('g')
  //   .attr('width', width)
  //   .attr('height', height)
  //   .attr('transform', `translate(${margin.left},${margin.top})`)

  // const xAxisGroup = svg
  //   .append('g')
  //   .attr('transform', `translate(0, ${height})`)
  // const yAxisGroup = svg.append('g')

  // create y axis
  const y = d3
    .scaleLinear()
    .domain([0, d3.max(data, d => d.salary)])
    .range([height, 0])

  //Create x axis
  const x = d3
    .scaleBand()
    .domain(data.map(job => job.jobTitle))
    .range([0, width])
    .paddingInner(0.2)
    .paddingOuter(0.2)

  const rects = svg.selectAll('rect').data(data)
  // remove exit selection
  rects.exit().remove()
  // update current shpaes in DOM
  rects
    .attr('width', x.bandwidth)
    .attr('fill', 'orange')
    .attr('x', d => x(d.jobTitle))
    .transition()
    .duration(500)
    .attr('height', d => height - y(d.salary))
    .attr('y', d => y(d.salary))
  // append the enter selection to the DOM
  rects
    .enter()
    .append('rect')
    .attr('width', x.bandwidth)
    .attr('height', 0)
    .attr('fill', 'orange')
    .attr('x', d => x(d.jobTitle))
    .attr('y', height)
    .transition()
    .duration(500)
    .attr('y', d => y(d.salary))
    .attr('height', d => height - y(d.salary))
  // call axes
  // const xAxis = d3.axisBottom(x)
  // const yAxis = d3
  //   .axisLeft(y)
  //   .ticks(3)
  //   .tickFormat((d) => '$' + d + ' USD')
  // xAxisGroup.call(xAxis)
  // yAxisGroup.call(yAxis)
  // xAxisGroup
  //   .selectAll('text')
  //   .attr('transform', 'rotate(-40)')
  //   .attr('text-anchor', 'end')
  //   .attr('fill', 'blue')
}
