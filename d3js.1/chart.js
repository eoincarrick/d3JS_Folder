const dataset = [1, 2, 34, 4, 5, 6, 6, 7, 8, 12, 965, 7, 56, 56, 56];

const svgWidth = 500;
const svgHeight = 300;
const barPadding = 5;
const barWidth = svgWidth / dataset.length;
const marginLeft = 50;
const marginBottom = 30;

const svg = d3
  .append("svg")
  .attr("class", "svgContainer")
  .attr("width", svgWidth)
  .attr("height", svgHeight);
