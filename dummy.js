const data = [
  {width: 300, height: 100, fill: 'pink'},
  {width: 100, height: 60, fill: 'red'},
  {width: 50, height: 30, fill: 'blue'}
]

const svg = d3.select('svg')

const x = d3
  .scaleBand()
  .domain(data.map(item => item.name))
  .range([0, 500])
  .paddingInner(0.2)
  .paddingOuter(0.2)

const y = d3
  .scaleLinear()
  .domain([0, d3.min(data, d => d.orders)])
  .range([0, 500])

d3.json('data.js').then(data => {
  const rects = svg.selectAll('rect').data(data)
  rects
    .attr('width', x.bandwidth)
    .attr('height', d => y(d.orders))
    .attr('fill', 'pink')

  rects
    .enter()
    .append('rect')
    .attr('width', x.bandwidth)
    .attr('height', d => y(d.orders))
    .attr('fill', 'pink')
})
