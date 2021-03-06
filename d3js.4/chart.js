document.addEventListener("DOMContentLoaded", () => {
  let svgWidth = 1400;
  let svgHeight = 900;
  const dataset = [
    99, 112, 223, 343, 544, 2342, 454, 576, 132, 378, 349, 454, 349, 329, 454,
    234, 321, 342, 399, 343, 549, 565, 654, 776, 456, 569, 54, 645, 645, 112,
    223, 343, 544, 2342, 454, 576, 132, 878, 349, 454, 349, 329, 454, 234, 321,
    342, 399, 343, 549, 565, 654, 776, 456, 569, 54, 645, 645, 112, 223, 343,
    544, 2342, 454, 576, 132, 178, 349, 454, 349, 329, 454, 234, 321, 342, 399,
    343, 549, 565, 654, 776, 456, 569, 54, 645, 645, 456, 569, 54, 645, 645,
    112, 223, 343, 544, 2342, 454, 576, 132, 778, 349, 454, 349, 329, 454, 234,
    321, 342, 399, 343, 549, 565, 654, 776, 456, 569, 54, 645, 645, 112, 223,
    343, 544, 2342, 454, 576, 132, 578, 349, 454, 349, 329, 454, 234, 321, 342,
    399, 343, 549, 565, 654, 776, 456, 569, 54, 645, 645, 112, 223, 343, 544,
    2342, 454, 576, 132, 878, 349, 454, 349, 329, 454, 234, 321, 342, 399, 343,
    549, 565, 654, 776, 456, 569, 54, 645, 645, 456, 569, 54, 645, 645, 112,
    223, 343, 544, 2342, 454, 576, 132, 778, 349, 454, 349, 329, 454, 234, 321,
    342, 399, 343, 549, 565, 654, 776, 456, 569, 54, 645, 645, 112, 223, 343,
    544, 2342, 454, 576, 132, 800, 349, 454, 349, 329, 454, 234, 321, 342, 399,
    343, 549, 565, 654, 776, 456, 569, 54, 645, 645, 112, 223, 343, 544, 2342,
    454, 576, 132, 840, 349, 454, 349, 329, 454, 234, 321, 342, 399, 343, 549,
    565, 654, 776, 456, 569, 54, 645, 645, 456, 569, 54, 645, 645, 112, 223,
    343, 544, 2342, 454, 576, 132, 808, 349, 454, 349, 329, 454, 234, 321, 342,
    399, 343, 549, 565, 654, 776, 456, 569, 54, 645, 645, 112, 223, 343, 544,
    2342, 454, 576, 132, 818, 349, 454, 349, 329, 454, 234, 321, 342, 399, 343,
    549, 565, 654, 776, 456, 569, 54, 645, 645, 112, 223, 343, 544, 2342, 454,
    576, 132, 828, 349, 454, 349, 329, 454, 234, 321, 342, 399, 343, 549, 565,
    654, 776, 456, 569, 54, 645, 645, 456, 569, 54, 645, 645, 899,
  ];

  console.log(dataset.length);

  const xScale = d3
    .scaleLinear()
    .domain(d3.extent(dataset))
    .range([10, svgWidth]);

  const svg = d3
    .select("svg")
    .attr("class", "svgContainer")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

  const g = svg.select("g").attr("transform", `translate(50,50)`).append("g");

  const rect = g
    .selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("class", "rectContainer")
    .attr("x", (d, i) => i * 5)
    .attr("y", (d) => svgHeight - d)
    .attr("width", svgWidth / dataset.length)
    .attr("height", (d, i) => d)
    .attr("fill", "#553013");

  //   const text = svg
  //     .selectAll("text")
  //     .data(dataset)
  //     .enter()
  //     .append("text")
  //     .attr("class", "txtLabel")
  //     .attr("x", (d, i) => i * 5)
  //     .attr("y", (d) => svgHeight - d)
  //     .text((d) => d);

  //   const jsonD3 = d3.json(
  //     "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json",
  //     (data) => console.log(data.data)
  //   );

  //   console.log(jsonD3);

  const circle = svg
    .selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle")
    .attr("class", "circleContainer")
    .attr("width", 20)
    .attr("height", 20)
    .attr("r", 4)
    .attr("cx", (d, i) => i * 5 + 2)
    .attr("cy", (d, i) => svgHeight - d)
    .attr("fill", "#553013");
});
