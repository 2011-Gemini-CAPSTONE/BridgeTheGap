import * as d3 from 'd3'

// const margin = {top: 10, right: 5, bottom: 70, left: 0},
//   width = 600 - margin.left - margin.right,
//   height = 600 - margin.top - margin.bottom

export const drawGraph = data => {
  const margin = {top: 10, right: 20, bottom: 180, left: 70}
  const width = 900 - margin.left - margin.right
  const height = 700 - margin.top - margin.bottom

  const svg = d3
    .select('#stateGraph')
    .append('svg')
    .attr('width', width)
    .attr('height', 700)

  const max = d3.max(data, d => Number(d.team.length))

  const xAxisGroup = svg
    .append('g')
    .attr('transform', `translate(0, ${height})`)
  const yAxisGroup = svg.append('g')

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

  const rects = svg.selectAll('rect').data(data)
  // remove exit selection
  rects.exit().remove()
  // update current shpaes in DOM
  rects
    .attr('width', x.bandwidth)
    .attr('fill', '#ffd35a')
    .attr('x', d => x(d.team))
    .transition()
    .duration(500)
    .attr('height', d => height - y(d.team.length))
    .attr('y', d => y(d.team.length))
  // append the enter selection to the DOM
  rects
    .enter()
    .append('rect')
    .attr('width', x.bandwidth)
    .attr('height', 0)
    .attr('fill', '#ffd35a')
    .attr('x', d => x(d.team))
    .attr('y', height)
    .transition()
    .duration(500)
    .attr('y', d => y(d.team.length))
    .attr('height', d => height - y(d.team.length))

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

  svg
    .append('text') // text label for the x axis
    .attr('x', 300)
    .attr('y', 20)
    .style('text-anchor', 'start')
    .attr('fill', '#5e2cba')
    .text('Number of jobs in each field')
}
