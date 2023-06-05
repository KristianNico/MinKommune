 // Data til søjlediagrammet
    var data = [10, 25, 15, 12, 8];

    // Mål for diagrammet
    var width = 400;
    var height = 300;

    // Skala for x-aksen
    var xScale = d3.scaleBand()
      .domain(data.map((d, i) => i))
      .range([0, width])
      .padding(0.1);

    // Skala for y-aksen
    var yScale = d3.scaleLinear()
      .domain([0, d3.max(data)])
      .range([height, 0]);

    // Opret SVG-område
    var svg = d3.select("#chart");

    // Tilføj søjler til diagrammet
    svg.selectAll(".bar")
      .data(data)
      .enter().append("rect")
      .attr("class", "bar")
      .attr("x", (d, i) => xScale(i))
      .attr("y", d => yScale(d))
      .attr("width", xScale.bandwidth())
      .attr("height", d => height - yScale(d));
