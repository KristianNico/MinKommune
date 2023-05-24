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
    
    .shape {
      width: 200px;
      height: 200px;
      margin: 20px auto;
      background-color: #428bca;
      color: #fff;
      text-align: center;
      line-height: 200px;
      font-size: 48px;
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
  </select>
  
  <div id="shapeContainer" class="shape"></div>

  <script>
    // Hent referencer til DOM-elementer
    var kommuneSelect = document.getElementById('kommune');
    var shapeContainer = document.getElementById('shapeContainer');
    
    // Lyt efter ændringer i rullemenuen
    kommuneSelect.addEventListener('change', function() {
      var valgtKommune = this.value;
      
      // Ryd indholdet af formcontaineren
      shapeContainer.innerHTML = '';
      
      // Opret og tilføj form baseret på valgt kommune
      if (valgtKommune === 'varde') {
        var triangle = document.createElement('div');
        triangle.classList.add('shape');
        triangle.innerHTML = '&#9650;'; // Trekant-unicode
        shapeContainer.appendChild(triangle);
      } else if (valgtKommune === 'esbjerg') {
        var square = document.createElement('div');
        square.classList.add('shape');
        square.innerHTML = '&#9632;'; // Firkant-unicode
        shapeContainer.appendChild(square);
      }
    });
  </script>
</body>
</html>
