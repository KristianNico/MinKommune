function generateGraph1() {
  // URL til JSON-data
const url = 'https://KristianNico.github.io/MinKommune/data/KVPERS21.JSON';

// Antal værdier, der skal vises
const numValuesToShow = 10;

// Opret SVG-elementet
const svg = d3.select("#Graph1");
const svgContainer = d3.select('#container');

// Hent data fra URL'en
d3.json(url).then(function(data) {
    // Konverter data til numeriske værdier
    data.forEach(function(d) {
        d.INDHOLD = +d.INDHOLD;
    });

    // Sorter data efter værdi (laveste til højeste)
    data.sort(function(a, b) {
      return a.INDHOLD - b.INDHOLD;
  });

  // Behold kun de 10 laveste værdier
  const filteredData = data.slice(0, numValuesToShow);

    // Skab skalaer til x- og y-aksen
    const xScale = d3.scaleBand()
        .domain(filteredData.map(function(d) { return d.KANDIDAT; }))
        .range([0, 400])
        .padding(0.1);

    const yScale = d3.scaleLinear()
        .domain([0, d3.max(filteredData, function(d) { return d.INDHOLD; })])
        .range([300, 0]);

    // Opret bjælkerne i barchart
    svg.selectAll("rect")
        .data(filteredData)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function(d) { return xScale(d.KANDIDAT); })
        .attr("width", xScale.bandwidth())
        .attr("y", function(d) { return yScale(d.INDHOLD); })
        .attr("height", function(d) { return 300 - yScale(d.INDHOLD); });

    // Tilføj labels til bjælkerne
    svg.selectAll(".label")
        .data(filteredData)
        .enter().append("text")
        .attr("class", "label")
        .attr("x", function(d) { return xScale(d.KANDIDAT) + xScale.bandwidth() / 2; })
        .attr("y", function(d) { return yScale(d.INDHOLD) - 5; })
        .attr("text-anchor", "middle")
        .text(function(d) { return d.INDHOLD; });
}).catch(function(error) {
    // Håndter fejl under hentning af data
    console.log(error);
});}