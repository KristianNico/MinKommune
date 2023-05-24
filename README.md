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
      margin-bottom: 20px;
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
    <!-- Tilføj alle kommuner som valgmuligheder -->
    <option value="kommune1">Kommune 1</option>
    <option value="kommune2">Kommune 2</option>
    <!-- osv. -->
  </select>
  
  <div id="factContainer" class="fact"></div>

  <script>
    // Hent referencer til DOM-elementer
    var kommuneSelect = document.getElementById('kommune');
    var factContainer = document.getElementById('factContainer');
    
    // Historiske fakta om kommuner
    var kommunerFacts = {
      varde: 'Varde Kommune blev grundlagt i år 2007 og er beliggende i det vestlige Jylland.',
      esbjerg: 'Esbjerg Kommune har en rig historie inden for fiskeri og er kendt som "Danmarks Energimetropol".',
      // Historiske fakta for alle kommuner
      kommune1: 'Dette er et historisk faktum om Kommune 1.',
      kommune2: 'Dette er et historisk faktum om Kommune 2.',
      // osv.
    };
    
    // Lyt efter ændringer i rullemenuen
    kommuneSelect.addEventListener('change', function() {
      var valgtKommune = this.value;
      
      // Vis det historiske faktum om den valgte kommune
      factContainer.innerText = kommunerFacts[valgtKommune] || '';
    });
  </script>
</body>
</html>
