<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rullemenu</title>
  <style>
    /* Tilpasning af stilarter */
    body {
      font-family: Arial, sans-serif;
      background-color: #f2f2f2;
      padding: 20px;
      text-align: center;
    }
    
    select {
      padding: 10px;
      font-size: 16px;
    }
    
    .fact {
      margin: 0 auto;
      max-width: 600px;
      background-color: #428bca;
      color: #fff;
      padding: 20px;
      border-radius: 4px;
      font-size: 18px;
      line-height: 1.5;
      text-align: left;
    }
  </style>
</head>
<body>
  <h1>Rullemenu Eksempel</h1>
  
  <label for="kommune">Vælg kommune:</label>
  <select id="kommune">
    <option value="">Vælg kommune</option>
    <option value="varde">Varde Kommune</option>
    <option value="esbjerg">Esbjerg Kommune</option>
    <option value="odsherred">Odsherred Kommune</option>
    <option value="vejen">Vejen Kommune</option>
    <option value="kbh">Københavns Kommune</option>
  </select>
  
  <div id="factContainer" class="fact"></div>

  <script>
    // Hent referencer til DOM-elementer
    var kommuneSelect = document.getElementById('kommune');
    var factContainer = document.getElementById('factContainer');
    
    // Historiske fakta og oplysninger om kommuner
    var kommunerData = {
      varde: {
        fact: 'Varde Kommune blev grundlagt i år 2007 og er beliggende i det vestlige Jylland.',
        indbyggere: 'Antal indbyggere: 50.000',
        areal: 'Geografisk areal: 1.234 km²'
      },
      esbjerg: {
        fact: 'Esbjerg Kommune har en rig historie inden for fiskeri og er kendt som "Danmarks Energimetropol".',
        indbyggere: 'Antal indbyggere: 100.000',
        areal: 'Geografisk areal: 2.345 km²'
      },
      odsherred: {
        fact: 'Odsherred Kommune er beliggende på Sjællands Odde og har en smuk kystlinje og et aktivt kunstmiljø.',
        indbyggere: 'Antal indbyggere: 30.000',
        areal: 'Geografisk areal: 1.567 km²'
      },
      vejen: {
        fact: 'Vejen Kommune er kendt for sine smukke landskaber, herunder Hærvejen, og er hjemsted for en række historiske seværdigheder.',
        indbyggere: 'Antal indbyggere: 40.000',
        areal: 'Geografisk areal: 1.890 km²'
      },
      kbh: {
        fact: 'Københavns Kommune er hovedstaden i Danmark og har en rig historie, arkitektur og kulturel mangfoldighed.',
        indbyggere: 'Antal indbyggere: 600.000',
        areal: 'Geografisk areal: 86 km²'
      },
    };
    
    // Lyt efter ændringer i rullemenuen
    kommuneSelect.addEventListener('change', function() {
      var valgtKommune = this.value;
      
      // Vis det historiske faktum og oplysninger om den valgte kommune
      var kommuneData = kommunerData[valgtKommune];
      if (kommuneData) {
        var faktumHTML = '<h2>Historisk faktum:</h2><p>' + kommuneData.fact + '</p>';
        var indbyggereHTML = '<p>' + kommuneData.indbyggere + '</p>';
        var arealHTML = '<p>' + kommuneData.areal + '</p>';

        factContainer.innerHTML = faktumHTML + indbyggereHTML + arealHTML;
      } else {
        factContainer.innerHTML = '';
      }
    });
  </script>
</body>
</html>
