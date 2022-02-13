dataset = [100, 90, 40, 10, 20, 30, 60, 22, 44, 66, 88, 99, 11, 12, 24, 46, 78];

const wrapperWidth = 500;
const wrapperHeight = 410;

const svgWidth = 700;
const svgHeight = 400;

const wrapper = d3
  .select("#wrapper")
  .attr("width", wrapperWidth)
  .attr("height", wrapperHeight);

const svg = wrapper
  .select("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

const rect = svg
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("class", "bar")
  .attr("x", (d, i) => i * 45)
  .attr("y", (d) => svgHeight - d)
  .attr("width", svgWidth / 17)
  .attr("height", (d) => d)
  .style("fill", "blue");

const labels = svg
  .selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .text((d) => d)
  .attr("x", (d, i) => i * 45 + 10)
  .attr("y", (d) => svgHeight - d - 10)
  .attr("width", svgWidth / 17)
  .attr("height", (d) => d);

const circle = svg
  .selectAll("circle")
  .data(dataset)
  .enter()
  .append("circle")
  .attr("cx", (d, i) => i * 45)
  .attr("cy", (d) => svgHeight - d)
  .attr("r", 10)
  .attr("width", svgWidth / 17)
  .attr("height", (d) => d)
  .style("fill", "red");

const xScale = d3.scaleLinear().domain([0, d3.max(dataset, (d) => d)]);
console.log(xScale);

const xAxis = d3.axisBottom(xScale);
wrapper
  .append("g")
  .attr("transform", "translate(0," + (svgHeight - 10) + ")")
  .call(xAxis);
