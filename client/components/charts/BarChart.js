import * as d3 from 'd3'

// const margin = {top: 10, right: 5, bottom: 70, left: 0},
//   width = 600 - margin.left - margin.right,
//   height = 600 - margin.top - margin.bottom

// eslint-disable-next-line max-statements
export const drawGraph = data => {
  const margin = {top: 10, right: 20, bottom: 170, left: 70}
  const width = 900 - margin.left - margin.right
  const height = 700 - margin.top - margin.bottom

  const svg = d3
    .select('#stateGraph')
    .append('svg')
    .attr('width', width)
    .attr('height', 700)

  const test = data.reduce((result, entry) => {
    if (result[entry.team]) result[entry.team]++
    else result[entry.team] = 1
    return result
  }, {})

  const result = Object.keys(test).map(key => ({name: key, value: test[key]}))
  console.log(result)
  const max = d3.max(result, d => d.value)

  const xAxisGroup = svg
    .append('g')
    .attr('transform', `translate(0, ${height})`)
  const yAxisGroup = svg.append('g')

  const tooltip = d3
    .select('body')
    .append('div')
    .attr('class', 'toolTip')

  // create y axis
  const y = d3
    .scaleLinear()
    .domain([0, max])
    .range([height, 0])
  svg
    .append('g')
    .attr('transform', 'translate(' + 70 + ')')
    .attr('fill', '#5e2cba')
    .call(d3.axisLeft(y).ticks(10))
  svg
    .append('text') // text label for the y axis
    .attr('transform', 'rotate(-90)')
    .attr('y', 120)
    .attr('dy', '-5.32em')
    .attr('x', -10)
    .style('text-anchor', 'end')
    .attr('fill', '#5e2cba')
    .text('Number of jobs reported in each field')

  //Create x axis
  const x = d3
    .scaleBand()
    .domain(data.map(job => job.team))
    .range([margin.left, width - margin.right])
    .paddingInner(0.2)
    .paddingOuter(0.2)
  svg
    .append('g')
    .attr('transform', 'translate(' + 70 + ')')
    .attr('fill', '#5e2cba')
  svg
    .append('text') // text label for the x axis
    .attr('y', 680)
    .attr('x', 450)
    .style('text-anchor', 'end')
    .attr('fill', '#5e2cba')
    .text('Job Fields')

  const rects = svg.selectAll('rect').data(result)

  // remove exit selection
  rects.exit().remove()
  // update current shpaes in DOM
  rects
    .attr('width', x.bandwidth)
    .attr('fill', '#ffd35a')
    .attr('x', d => x(d.name))
    .transition()
    .duration(500)
    .attr('height', d => height - y(d.value))
    .attr('y', d => y(d.value))
  // append the enter selection to the DOM
  rects
    .enter()
    .append('rect')
    .attr('width', x.bandwidth)
    .attr('height', 0)
    .attr('fill', '#ffd35a')
    .attr('x', d => x(d.name))
    .attr('y', height)
    .transition()
    .duration(500)
    .attr('y', d => y(d.value))
    .attr('height', d => height - y(d.value))

  //call axes
  const xAxis = d3.axisBottom(x)
  const yAxis = d3.axisLeft(y)
  xAxisGroup.call(xAxis)
  yAxisGroup.call(yAxis)
  xAxisGroup
    .selectAll('text')
    .attr('transform', 'rotate(-40)')
    .attr('text-anchor', 'end')
    .attr('fill', '#5e2cba')
}
