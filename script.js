// Your D3.js code for creating the visualization goes here
// Here's an example that creates a simple bar chart

const data = [10, 20, 30, 40, 50];

const svg = d3.select("#visualization")
  .append("svg")
  .attr("width", 400)
  .attr("height", 300);

svg.selectAll("rect")
  .data(data)
  .enter()
  .append("rect")
  .attr("x", (d, i) => i * 50)
  .attr("y", d => 300 - d)
  .attr("width", 40)
  .attr("height", d => d)
  .attr("fill", "steelblue");
