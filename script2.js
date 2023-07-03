// Select the container element
var container = d3.select("#graph-container");

// Load the dataset from a JSON file
d3.json("https://KristianNico.github.io/MinKommune/data/dataset.json")
  .then(function (dataset) {
    // Set the dimensions of the SVG element
    var svgWidth = 400;
    var svgHeight = 300;

    // Create the SVG element
    var svg = container
      .append("svg")
      .attr("width", svgWidth)
      .attr("height", svgHeight);

    // Define the header
    var header = "Antal stemmer efter kandidat";

    // Append the header to the SVG
    svg
    .append("text")
    .attr("x", svgWidth / 2)
    .attr("y", 20)
    .attr("text-anchor", "middle")
    .text(header);

// Set the margins and dimensions for the chart
var margin = { top: 30, right: 30, bottom: 50, left: 50 };
var chartWidth = svgWidth - margin.left - margin.right;
var chartHeight = svgHeight - margin.top - margin.bottom;

// Create a group element for the chart
var chart = svg
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Define the x-scale
var xScale = d3
  .scaleBand()
  .domain(dataset.map(function (d) { return d.KANDIDAT; }))
  .range([0, chartWidth])
  .padding(0.1);

// Define the y-scale
var yScale = d3
  .scaleLinear()
  .domain([0, d3.max(dataset, function (d) { return d.INDHOLD; })])
  .range([chartHeight, 0]);

// Create the x-axis
var xAxis = d3.axisBottom(xScale);
chart
  .append("g")
  .attr("transform", "translate(0," + chartHeight + ")")
  .call(xAxis)
  .selectAll("text")
  .attr("transform", "rotate(-45)")
  .attr("text-anchor", "end")
  .attr("dx", "-0.8em")
  .attr("dy", "-0.15em");

// Create the y-axis
var yAxis = d3.axisLeft(yScale);
chart.append("g").call(yAxis);

// Create the bars
chart
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", function (d) { return xScale(d.KANDIDAT); })
  .attr("y", function (d) { return yScale(d.INDHOLD); })
  .attr("width", xScale.bandwidth())
  .attr("height", function (d) { return chartHeight - yScale(d.INDHOLD); })
  .attr("fill", "steelblue");