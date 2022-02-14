const draw = (el, scale) => {
  const dataset = [
    11002, 29017, 45793, 7000, 120040, 30138, 21699, 47058, 24001, 6000, 69007,
    40000, 55001, 30001, 61150, 12000, 85530, 83000, 23100, 96225, 45003, 34300,
    43000, 63131, 52001, 36000, 10001, 225786, 0, 75000, 195100, 33010, 5000,
    31213, 79050, 40010, 37002, 50000, 60000, 66529, 39048, 27276, 28007,
    153420, 44500, 145443, 89550, 16024, 50, 25001, 300577, 102035, 20581,
    170240, 126101, 18001, 15000, 4000, 0, 100003, 35000, 14001, 72046, 30000,
    0, 65006, 56000, 42000, 17158, 135096, 70040, 114068, 22216, 60020, 2742,
    35030, 25000, 76005, 40600, 48335, 58000, 900, 8000, 19002, 92000, 13000,
    50008, 20000, 15100, 108023, 50600, 26483, 38002, 53440, 32007, 25654,
    80130, 20000, 9500, 1968,
  ];

  dataset.sort((a, b) => a - b);

  // Dimensions
  let dimensions = {
    width: 600,
    height: 150,
  };

  let colorScale;

  if (scale === "linear") {
    colorScale = d3
      .scaleLinear()
      .domain(d3.extent(dataset))
      .range(["white", "green"]);
  } else if (scale === "quantize") {
    colorScale = d3
      .scaleQuantize()
      .domain(d3.extent(dataset))
      .range(d3.schemeReds[3]);
    console.log("Quantize:", colorScale.thresholds());
  } else if (scale === "quantile") {
    colorScale = d3.scaleQuantile().domain(dataset).range(d3.schemeReds[3]);
    console.log("Quantile:", colorScale.quantiles());
  } else if (scale === "threshold") {
    colorScale = d3
      .scaleThreshold()
      .domain([45200, 135600])
      .range(d3.schemeReds[3]);
  }

  const box = 30;
  // Draw Image
  const svg = d3
    .select(el)
    .append("svg")
    .attr("width", dimensions.width)
    .attr("height", dimensions.height);

  svg
    .append("g")
    .attr("stroke", "black")
    .attr("stroke", "#ddd")
    .selectAll("rect")
    .data(dataset)
    .join("rect")
    .attr("width", box - 10)
    .attr("height", box - 10)
    .attr("x", (d, i) => box * (i % 20)) // 0, 30, 60
    .attr("y", (d, i) => box * ((i / 20) | 0))
    .attr("fill", (d) => colorScale(d));
};
draw("#heatmap1", "linear");
draw("#heatmap2", "quantize");
draw("#heatmap3", "quantile");
draw("#heatmap4", "threshold");
