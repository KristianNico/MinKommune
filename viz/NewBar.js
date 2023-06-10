function generateGraph1() {
  // URL til JSON-data
const url = 'https://KristianNico.github.io/MinKommune/data/KVPERS21.JSON';

// Opret SVG-elementet
const svg = d3.select("#Graph1");
const svgContainer = d3.select('#container');

// Hent data fra URL'en
d3.json(url).then(function(data) {
    // Konverter data til numeriske værdier
    data.forEach(function(d) {
        d.INDHOLD = +d.INDHOLD;
    });

    // Skab skalaer til x- og y-aksen
    const xScale = d3.scaleBand()
        .domain(data.map(function(d) { return d.KANDIDAT; }))
        .range([0, 400])
        .padding(0.1);

    const yScale = d3.scaleLinear()
        .domain([0, d3.max(data, function(d) { return d.INDHOLD; })])
        .range([300, 0]);

    // Opret bjælkerne i barchart
    svg.selectAll("rect")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function(d) { return xScale(d.KANDIDAT); })
        .attr("width", xScale.bandwidth())
        .attr("y", function(d) { return yScale(d.INDHOLD); })
        .attr("height", function(d) { return 300 - yScale(d.INDHOLD); });
}).catch(function(error) {
    // Håndter fejl under hentning af data
    console.log(error);
});}