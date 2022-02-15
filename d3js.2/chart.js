const dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];

const svgWidth = 500;
const svgHeight = 300;
const barPadding = 5;
const barWidth = svgWidth / dataset.length;
const marginLeft = 50;
const marginBottom = 30;

const svg = d3
  .select("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight)
  .attr("class", "svgContainer");

const yScale = d3
  .scaleLinear()
  .domain([d3.min(dataset), d3.max(dataset)])
  .range([0, svgHeight]);

const xScale = d3
  .scaleLinear()
  .domain([d3.min(dataset), d3.max(dataset)])
  .range([0, svgWidth]);

const xAxis = d3.axisBottom().scale(xScale);
const yAxis = d3.axisLeft().scale(yScale);

const group = svg
  .append("g")
  .attr("transform", "translate(50, 10)")
  .call(yAxis);

const xAxisTrans = svgHeight - 20;
const groups = svg
  .append("g")
  .attr("transform", "translate(50," + xAxisTrans + ")")
  .call(xAxis);

const barChart = svg
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", (d, i) => i * barWidth)
  .attr("y", (d) => svgHeight - yScale(d))
  .attr("width", barWidth - barPadding)
  .attr("height", (d) => yScale(d))
  .attr("class", "barChart");

const labels = svg
  .selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .text((d) => d)
  .attr("fill", "black")
  .attr("x", (d, i) => i * barWidth + 10)
  .attr("y", (d) => svgHeight - yScale(d) - 10)
  .attr("width", barWidth - barPadding)
  .attr("height", (d) => yScale(d));
