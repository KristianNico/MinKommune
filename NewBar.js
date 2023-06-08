function generateGraph1() {
  const svg = d3.select('#Graph1');
  const svgContainer = d3.select('#container');

  const margin = 80;
  const width = 1000 - 2 * margin;
  const height = 600 - 2 * margin;

  // Hent data eksternt
  fetch('https://KristianNico.github.io/MinKommune/data/KVPERS21.JSON')
    .then(response => response.json())
    .then(data => {
      // Brug data i din kode
      const sample = data;

      // Sortér data efter INDHOLD i stigende rækkefølge
      const sortedData = sample.sort((a, b) => a.INDHOLD - b.INDHOLD);

      // Vælg de 10 laveste værdier og deres tilhørende kolonner
      const lowestValues = sortedData.slice(0, 10);
      const chart = svg.append('g')
        .attr('transform', `translate(${margin}, ${margin})`);

      const xScale = d3.scaleBand()
        .range([0, width])
        .domain(lowestValues.map((s) => s.KANDIDAT))
        .padding(0.4);

      const yScale = d3.scaleLinear()
        .range([height, 0])
        .domain([0, d3.max(lowestValues, (d) => d.INDHOLD)]);

      const barGroups = chart.selectAll()
        .data(lowestValues) // Brug de 10 laveste værdier i stedet for det oprindelige data
        .enter()
        .append('g')
        .attr('transform', (d) => `translate(${xScale(d.KANDIDAT)}, 0)`);

      barGroups
        .append('rect')
        .attr('class', 'bar')
        .attr('y', (g) => yScale(g.INDHOLD))
        .attr('height', (g) => height - yScale(g.INDHOLD))
        .attr('width', xScale.bandwidth())
        .on('mouseenter', function (actual, i) {
          // ...
        })
        .on('mouseleave', function () {
          // ...
        });

      barGroups
        .append('rect')
        .attr('class', 'bar')
        .attr('y', (g) => yScale(g.INDHOLD))
        .attr('height', (g) => height - yScale(g.INDHOLD))
        .attr('width', xScale.bandwidth())
        .on('mouseenter', function (actual, i) {
          d3.selectAll('.INDHOLD')
            .attr('opacity', 0);
          // ...
        })
        .on('mouseleave', function () {
          // ...
        });

      barGroups
        .append('text')
        .attr('class', 'INDHOLD')
        .attr('x', xScale.bandwidth() / 2)
        .attr('y', (g) => yScale(g.INDHOLD) + 30)
        .attr('text-anchor', 'middle')
        .attr('transform', 'rotate(90)')
        .text((g) => g.KANDIDAT);

      const makeYLines = () => d3.axisLeft()
        .scale(yScale);

      chart.append('g')
        .attr('transform', `translate(0, ${height})`)
        .call(d3.axisBottom(xScale));

      chart.append('g')
        .call(d3.axisLeft(yScale));

      chart.append('g')
        .attr('class', 'grid')
        .call(makeYLines()
          .tickSize(-width, 0, 0)
          .tickFormat('')
        );
    chart.selectAll('.barGroups')
      .data(filteredData)
      .enter()
      .append('text')
      .attr('class', 'INDHOLD')
      .attr('x', (d) => xScale(d.KANDIDAT) + xScale.bandwidth() / 2)
      .attr('y', (d) => yScale(d.INDHOLD) + 30)
      .attr('text-anchor', 'middle')
      .attr('transform', 'rotate(25)');

      svg
        .append('text')
        .attr('class', 'label')
        .attr('x', -(height / 2) - margin)
        .attr('y', margin / 2.4)
        .attr('transform', 'rotate(-90)')
        .attr('text-anchor', 'middle')
        .text('Antal personlige stemmer');

      svg.append('text')
        .attr('class', 'title')
        .attr('x', width / 2 + margin)
        .attr('y', 40)
        .attr('text-anchor', 'middle')
        .text('Antal personlige stemmer ved KV 2021');

      svg.append('text')
        .attr('class', 'source')
        .attr('x', width - margin / 2)
        .attr('y', height + margin * 1.7)
        .attr('text-anchor', 'start')
        .text('Kilde: Danmarks Statistik');
    })
    .catch(error => {
      console.error('Fejl ved indlæsning af data:', error);
    });
}
