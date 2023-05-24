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
      background-image: url('blomster.jpg'); /* Tilføj stien til dit baggrundsbillede */
      background-size: cover;
      background-position: center;
      padding: 20px;
      text-align: center;
    }
    
    select {
      padding: 10px;
      font-size: 16px;
      margin-bottom: 20px;
    }
    
    .fact {
      margin: 0 auto;
      max-width: 600px;
      background-color: rgba(255, 255, 255, 0.8);
      color: #000;
      padding: 20px;
      border-radius: 4px;
      font-size: 18px;
      line-height: 1.5;
    }
    
    .live-element {
      margin-top: 20px;
      font-size: 24px;
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

  <div id="liveElement" class="live-element"></div>

  <script>
    // Hent referencer til DOM-elementer
    var kommuneSelect = document.getElementById('kommune');
    var factContainer = document.getElementById('factContainer');
    var liveElement = document.getElementById('liveElement');
    
    // Historiske fakta om kommuner
    var kommunerFacts = {
      varde: 'Varde Kommune blev grundlagt i år 2007 og er beliggende i det vestlige Jylland.',
      esbjerg: 'Esbjerg Kommune har en rig historie inden for fiskeri og er kendt som "Danmarks Energimetropol".',
      odsherred: 'Odsherred Kommune er beliggende på Sjællands Odde og har en smuk kystlinje og et aktivt kunstmiljø.',
      vejen: 'Vejen Kommune er kendt for sine smukke landskaber, herunder Hærvejen, og er hjemsted for en række historiske seværdigheder.',
      kbh: 'Københavns Kommune er hovedstaden i Danmark og har en rig historie, arkitektur og kulturel mangfoldighed.',
    };
    
    // Lyt efter ændringer i rullemenuen
    kommuneSelect.addEventListener('change', function() {
      var valgtKommune = this.value;
      
      // Vis det historiske faktum om den valgte kommune
      factContainer.innerText = kommunerFacts[valgtKommune] || '';
    });

    // Eksempel på live-opdateret tid
    function opdaterTid() {
      var nu = new Date();
      liveElement.innerText = 'Aktuel tid i København: ' + nu.toLocaleTimeString();
    }

    // Opdater tiden hvert sekund
    setInterval(opdaterTid, 1000);
  </script>
</body>
</html>
