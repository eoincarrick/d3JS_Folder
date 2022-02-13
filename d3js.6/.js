document.addEventListener("DOMContentLoaded", () => {
  async function draw() {
    // Data
    const dataset = await d3.json("/udata/1kL2GBJw8VB/data-4-1.json");

    const xAccessor = (d) => d.currently.humidity;
    const yAccessor = (d) => d.currently.apparentTemperature;

    // Dimensions
    let dimensions = {
      width: 800,
      height: 800,
      margin: {
        top: 50,
        right: 50,
        bottom: 50,
        left: 50,
      },
    };

    // Draw Image
    const svg = d3
      .select("#chart")
      .append("svg")
      .attr("width", dimensions.width)
      .attr("height", dimensions.height);

    const ctr = svg
      .append("g") // <g>
      .attr(
        "transform",
        `translate(${dimensions.margin.left}, ${dimensions.margin.top})`
      );

    // Scales
    const xScale = d3
      .scaleLinear()
      .domain(d3.extent(dataset, xAccessor))
      .range([0, dimensions.ctrWidth]);

    // Draw circles
    ctr
      .selectAll("circle")
      .data(dataset)
      .join("circle")
      .attr("cx", xAccessor)
      .attr("cy", yAccessor)
      .attr("r", 5)
      .attr("fill", "red");
  }

  draw();
});
