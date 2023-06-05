// URL til din JSON-fil på GitHub Pages
var url = 'https://KristianNico.github.io/MinKommune/data/KVPERS21.JSON';

// Hent JSON-data med fetch
fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    // Skalaer
    var width = 500;
    var xScale = d3.scaleBand().range([0, width]).padding(0.1).domain(data.map(function(d) {
      return d.KANDIDAT;
    }));

    var height = 500;
    var yScale = d3.scaleLinear().range([height, 0]).domain([0, d3.max(data, function(d) {
      return d.INDHOLD;
    })]);

    // SVG-container
    var svg = d3.select("body").append("svg").attr("width", width).attr("height", height);

    // Søjler
    var bars = svg.selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", function(d) {
        return xScale(d.KANDIDAT);
      })
      .attr("y", function(d) {
        return yScale(d.INDHOLD);
      })
      .attr("width", xScale.bandwidth())
      .attr("height", function(d) {
        return height - yScale(d.INDHOLD);
      })
      .attr("fill", "steelblue")
      .append("title") // Tilføj en titel til hver søjle
      .text(function(d) {
        return d.KANDIDAT; // Viser kandidatværdien som tooltip
      });

    // Aksen
    var xAxis = d3.axisBottom(xScale);
    var yAxis = d3.axisLeft(yScale);
    svg.append("g").attr("transform", "translate(0," + height + ")").call(xAxis);
    svg.append("g").call(yAxis);

    // Select-boks (dropdown-menu)
    var select = d3.select("body").append("select")
      .on("change", updateChart); // Event listener ved ændring af valg

    // Tilføj kommunevalg til select-boksen
    var options = select.selectAll("option")
      .data(d3.map(data, function(d) {
        return d.Kommune;
      }).keys())
      .enter()
      .append("option")
      .text(function(d) {
        return d;
      });

    // Funktion til opdatering af diagrammet baseret på det valgte kommunevalg
    function updateChart() {
      var selectedKommune = select.property("value");
      var filteredData = data.filter(function(d) {
        return d.Kommune === selectedKommune;
      });

      xScale.domain(filteredData.map(function(d) {
        return d.KANDIDAT;
      }));

      var updatedBars = svg.selectAll(".bar")
        .data(filteredData);

      updatedBars.enter()
        .append("rect")
        .attr("class", "bar")
        .merge(updatedBars)
        .attr("x", function(d) {
          return xScale(d.KANDIDAT);
        })
        .attr("y", function(d) {
          return yScale(d.INDHOLD);
        })
        .attr("width", xScale.bandwidth())
        .attr("height", function(d) {
          return height - yScale(d.INDHOLD);
        })
        .attr("fill", "steelblue")
        .select("title") // Opdater titlen for hver søjle
        .text(function(d) {
          return d.KANDIDAT;
        });

      updatedBars.exit().remove();
    }
  })
  .catch(function(error) {
    console.log('Fejl: ' + error);
  });
