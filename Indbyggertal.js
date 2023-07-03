// Select the container element
var container = d3.select("#graph-container");

// Load the dataset from a JSON file
d3.json("https://KristianNico.github.io/MinKommune/data/FOLK_VARDE.json")
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
      .style("font-size", "14px")
      .style("font-weight", "bold")
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
      .domain(dataset.map(function (d) { return d.TID; }))
      .range([0, chartWidth])
      .padding(0.1);

    // Define the y-scale
    var yScale = d3
      .scaleLinear()
      .domain([0, d3.max(dataset, function (d) { return d.INDHOLD; })])
      .range([chartHeight, 0]);

    // Create the x-axis
    var xAxis = d3.axisBottom(xScale)
      .tickSizeOuter(0);
    chart
      .append("g")
      .attr("transform", "translate(0," + chartHeight + ")")
      .call(xAxis)
      .selectAll("text")
      .attr("transform", "rotate(-45)")
      .attr("text-anchor", "end")
      .style("font-size", "12px");

    // Create the y-axis
    var yAxis = d3.axisLeft(yScale)
      .ticks(5)
      .tickSizeInner(-chartWidth)
      .tickSizeOuter(0);
    chart.append("g")
      .call(yAxis)
      .selectAll(".tick line")
      .attr("stroke-dasharray", "2,2")
      .attr("stroke-opacity", 0.5);

    // Create the line
    var line = d3.line()
      .x(function(d) { return xScale(d.TID); })
      .y(function(d) { return yScale(d.INDHOLD); });

    // Append the line path to the chart
    chart.append("path")
      .datum(dataset)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 2)
      .attr("d", line);
});
