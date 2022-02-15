// Data
const dataset = [
  {
    name: "Milky Way Galaxy",
    size: 1e18,
  },
  {
    name: "Nearest Star",
    size: 1e13,
  },
  {
    name: "The Solar System",
    size: 1e9,
  },
  {
    name: "The Sun",
    size: 1e6,
  },
  {
    name: "The Earth",
    size: 1e3,
  },
  {
    name: "A Mountain",
    size: 75,
  },
  {
    name: "A Human",
    size: 1e-3,
  },
  {
    name: "A Cell",
    size: 1e-8,
  },
  {
    name: "An Atom",
    size: 1e-12,
  },
  {
    name: "A Proton",
    size: 1e-15,
  },
];

const sizeAccessor = dataset.map((size) => size.size);
const nameAccessor = dataset.map((name) => name.name);

// Dimensions
let dimensions = {
  width: 200,
  height: 500,
  margin: 50,
};

// Draw Image
const svg = d3
  .select("#chart")
  .append("svg")
  .attr("width", dimensions.width)
  .attr("height", dimensions.height);

// Scale
const universeScale = d3
  .scaleLog()
  .domain(d3.extent(sizeAccessor))
  .range([dimensions.height - dimensions.margin, dimensions.margin]);

// Draw Circles
const circleGroup = svg.append("g");

circleGroup
  .selectAll("circle")
  .data(dataset)
  .join("circle")
  .attr("r", "6")
  .attr("cx", dimensions.margin)
  .attr("cy", (d) => universeScale(sizeAccessor(d)));

// Draw Labels
circleGroup
  .selectAll("text")
  .data(dataset)
  .join("text")
  .attr("x", dimensions.margin + 15)
  .attr("y", (d) => universeScale(sizeAccessor(d)))
  .text(nameAccessor);

// // Draw Axis
const axis = d3.axisLeft(universeScale);
svg
  .append("g")
  .attr("transform", `translate(${dimensions.margin}, 0)`)
  .call(axis);
