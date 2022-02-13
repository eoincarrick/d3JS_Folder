document.addEventListener("DOMContentLoaded", () => {
  async function draw() {
    // Data
    const dataset = await d3.json(
      "https://www.educative.io/udata/1kL2GBJw8VB/data-4-1.json",
      (d) => d.data
    );
    const year = dataset.data.map((data) => +data[0].slice(0, 4));
    const rate = dataset.data.map((data) => data[1]);

    const xYear = [...year];
    const yRate = [...rate];

    console.log(dataset);
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

    dimensions.ctrWidth =
      dimensions.width - dimensions.margin.left - dimensions.margin.right;
    dimensions.ctrHeight =
      dimensions.height - dimensions.margin.top - dimensions.margin.bottom;

    // Draw Image
    const svg = d3
      .select("svg")
      .attr("id", "chart")
      .attr("width", dimensions.width)
      .attr("height", dimensions.height)
      .append("g")
      .attr(
        "transform",
        `translate(${dimensions.margin.left}, ${dimensions.margin.top})`
      );

    // Draw rect
    const rect = svg
      .selectAll("rect")
      .data(dataset)
      .enter()
      .append("rect")
      .attr("width", Math.floor(xYear.length / 20))
      .attr("height", Math.floor(yRate.length / 20))
      .attr("x", (d, i) => i)
      .attr("y", (d) => yScale - d)
      .attr("r", 5)
      .attr("fill", "red");
  }
  draw();
});
