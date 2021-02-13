import * as d3 from 'd3'

// const margin = {top: 10, right: 5, bottom: 70, left: 0},
//   width = 600 - margin.left - margin.right,
//   height = 600 - margin.top - margin.bottom

const margin = {top: 10, right: 20, bottom: 180, left: 70}
const width = 1500 - margin.left - margin.right
const height = 1000 - margin.top - margin.bottom

export const drawGraph = data => {
  const male = data.filter(d => d.gender === 'Male')
  const female = data.filter(d => d.gender === 'Female')
  let jobTitles = []
  const stateJobTitles = data.map(d => {
    if (!jobTitles.includes(d.jobTitle)) jobTitles.push(d.jobTitle)
  })
  console.log('This is jobTitles -> ', jobTitles)
  console.log('This is state data -> ', data)

  const svg = d3
    .select('#stateGraph')
    .append('svg')
    .attr('width', 1500)
    .attr('height', 1000)

  const max = d3.max(data, d => Number(d.salary))
  const min = d3.min(data, d => Number(d.salary))
  console.log('min', min, 'max', max)
  // const graph = svg
  //   .append('g')
  //   .attr('width', width)
  //   .attr('height', height)
  //   .attr('transform', `translate(${margin.left},${margin.top})`)

  const xAxisGroup = svg
    .append('g')
    .attr('transform', `translate(0, ${height})`)
  const yAxisGroup = svg.append('g')

  // create y axis
  const y = d3
    .scaleLinear()
    .domain([min, max])
    .range([height, 0])
  svg
    .append('g')
    .attr('transform', 'translate(' + 70 + ')')
    .attr('fill', 'black')
    .call(
      d3.axisLeft(y).ticks(10, '$' + 's')
      // .tickFormat((d) => '$' + d + ' USD')
    )

  //Create x axis
  const x = d3
    .scaleBand()
    .domain(data.map(job => job.jobTitle))
    .range([margin.left, width - margin.right])
    .paddingInner(0.2)
    .paddingOuter(0.2)
  svg
    .append('g')
    .attr('transform', 'translate(' + 70 + ')')
    .attr('fill', 'black')

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

  //call axes
  const xAxis = d3.axisBottom(x)
  const yAxis = d3.axisLeft(y)
  xAxisGroup.call(xAxis)
  yAxisGroup.call(yAxis)
  xAxisGroup
    .selectAll('text')
    .attr('transform', 'rotate(-40)')
    .attr('text-anchor', 'end')
    .attr('fill', 'blue')
}
