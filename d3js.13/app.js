const dataChart = async () => {
  dataset = await d3.csv("./data.csv");
  console.log(dataset);

  xAccessor = (d) => d.region;
  yAccessor = (d) => +d.population;
  console.log(yAccessor);

  let dimensions = {
    width: Math.floor(window.innerWidth * 0.9),
    height: Math.floor(window.innerHeight * 0.45),
    margin: {
      top: 20,
      right: 20,
      left: 70,
      bottom: 50,
    },
  };

  dimensions.boundedWidth =
    dimensions.width - dimensions.margin.right - dimensions.margin.left;
  dimensions.boundedHeight =
    dimensions.height - dimensions.margin.top - dimensions.margin.bottom;

  const wrapper = d3
    .select("#wrapper")
    .append("svg")
    .attr("width", dimensions.width)
    .attr("height", dimensions.height);

  const bounds = wrapper
    .append("g")
    .style(
      `transform`,
      `translate(${dimensions.margin.left}px, ${dimensions.margin.top}px)`
    );

  xScale = d3
    .scaleOrdinal()
    .domain(d3.extent(dataset, xAccessor))
    .range([0, dimensions.boundedWidth]);
  console.log(xScale.domain());

  yScale = d3
    .scaleLinear()
    .domain(d3.extent(dataset, yAccessor))
    .rangeRound([dimensions.boundedHeight, 0])
    .nice();
  console.log(yScale.domain());

  const rect = bounds
    .selectAll("rect")
    .data(dataset)
    .join("rect")
    .attr("x", (d) => xScale(xAccessor(d)))
    .attr("y", (d) => yScale(yAccessor(d)))
    .attr("width", dimensions.margin.top);

  const xAxisGenerator = d3.axisBottom().scale(xScale);
  const xAxis = bounds
    .append("g")
    .style("transform", `translateY(${dimensions.boundedHeight}px)`)
    .call(xAxisGenerator);

  const yAxisGenerator = d3.axisLeft().scale(yScale);
  const yAxis = bounds.append("g").call(xAxisGenerator);
};
dataChart();
