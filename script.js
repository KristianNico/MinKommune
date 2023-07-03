// Select the container element
var container = d3.select("#graph-container");

// Define the dataset
var dataset = [100, 6, 40, 20];

// Set the dimensions of the SVG element
var svgWidth = 400;
var svgHeight = 300;

// Create the SVG element
var svg = container
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

// Calculate the width and spacing of each bar
var barWidth = svgWidth / dataset.length;
var barSpacing = 10;

// Set the bar color
var barColor = "grey";

// Create the bars
svg
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", function (d, i) {
    return i * (barWidth + barSpacing);
  })
  .attr("y", function (d) {
    return svgHeight - (d / 100) * svgHeight; // Convert the data to a percentage of the SVG height
  })
  .attr("width", barWidth)
  .attr("height", function (d) {
    return (d / 100) * svgHeight; // Convert the data to a percentage of the SVG height
  })
  .attr("fill", barColor);
